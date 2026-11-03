// Run with: node --test tests/therapist-populations.test.cjs
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const source = file => fs.readFileSync(path.join(root, file), 'utf8');

function element() {
  return {
    textContent: '', children: [], dataset: {},
    classList: { add() {}, remove() {}, toggle() {} },
    append(...nodes) { this.children.push(...nodes); },
    appendChild(node) { this.children.push(node); },
    replaceChildren(...nodes) { this.children = nodes; },
    addEventListener() {}, querySelectorAll() { return []; }
  };
}
function context(file, init) {
  const nodes = new Map();
  const document = {
    querySelector(selector) {
      if (['#menu-toggle', '#mobile-menu'].includes(selector)) return null;
      if (!nodes.has(selector)) nodes.set(selector, element());
      return nodes.get(selector);
    },
    createElement: element, createDocumentFragment: element,
    addEventListener() {}, getElementById() { return null; }
  };
  const ctx = vm.createContext({ window: {}, document, URL, URLSearchParams, console });
  vm.runInContext(source('therapist-filters.js'), ctx);
  // Suppress network/bootstrap only, retaining the production filtering/render functions.
  vm.runInContext(source(file).replace(new RegExp(`${init}\\(\\);\\s*$`), ''), ctx);
  return { ctx, nodes };
}
const record = name => ({ id: name.toLowerCase().replaceAll(' ', '-'), name, title: 'Therapist', location: 'NY', specialties: [], languages: ['English'], therapyTypes: ['Individual'], summary: 'Existing biography.', availability: 'Available' });
const plain = value => JSON.parse(JSON.stringify(value));

function directory() {
  const { ctx } = context('script.js', 'init');
  ctx.input = ['Julia Tumasian', 'Johanna Mathis', 'Francis Antwi'].map(record);
  vm.runInContext('state.therapists = input.map(applyFilterOverlay)', ctx);
  return ctx;
}
function matches(ctx, population) {
  ctx.selectedPopulation = population;
  return plain(vm.runInContext('state.filters.population = selectedPopulation ? [selectedPopulation] : []; getFilteredTherapists().map(t => t.name)', ctx));
}

test('directory excludes Julia/Johanna from broad children and preserves age 12', () => {
  const ctx = directory();
  assert.deepEqual(matches(ctx, 'Children (5-12)'), ['Francis Antwi']);
  assert.deepEqual(matches(ctx, 'Children (12 only)'), ['Julia Tumasian']);
  assert.deepEqual(matches(ctx, 'Teens (13-17)'), ['Julia Tumasian', 'Francis Antwi']);
  assert.deepEqual(matches(ctx, 'Adults'), ['Julia Tumasian', 'Johanna Mathis', 'Francis Antwi']);
  assert.deepEqual(matches(ctx, 'Couples'), ['Julia Tumasian', 'Johanna Mathis', 'Francis Antwi']);
  assert.deepEqual(matches(ctx, 'Families'), ['Julia Tumasian', 'Francis Antwi']);
  assert.equal(matches(ctx, '').length, 3);
  const options = plain(vm.runInContext('buildFilterOptions(state.therapists).population', ctx));
  assert.ok(options.includes('Children (12 only)'));
  assert.ok(options.includes('Children (5-12)'));
});

test('name aliases and directory summaries use current restrictions', () => {
  const ctx = directory();
  for (const name of ['Julia Tumasian', 'Julia G. Tumasian']) {
    ctx.input = record(name);
    const result = plain(vm.runInContext('applyFilterOverlay(input)', ctx));
    assert.ok(result.population.includes('Children (12 only)'));
    assert.match(result.summary, /Existing biography\./);
    assert.match(result.summary, /under 12 until she has LP status and Play Therapy certification/);
  }
  ctx.input = record('Johanna Mathis');
  const result = plain(vm.runInContext('applyFilterOverlay(input)', ctx));
  assert.deepEqual(result.population, ['Individuals', 'Couples', 'Adults']);
  assert.match(result.summary, /adults and couples only/);
});

function textOf(node) { return [node.textContent, ...node.children.map(textOf)].join(' '); }

test('profile chips, summary, and about copy display restrictions on repeated renders', () => {
  const { ctx, nodes } = context('therapist-profile.js', 'initTherapistProfile');
  for (const name of ['Julia Tumasian', 'Julia G. Tumasian', 'Johanna Mathis', 'Julia Tumasian']) {
    ctx.input = record(name);
    vm.runInContext('renderTherapistProfile(input)', ctx);
    const chips = textOf(nodes.get('#population-list'));
    const summary = nodes.get('#profile-summary').textContent;
    const about = textOf(nodes.get('#about-copy'));
    assert.match(summary, /Existing biography\./);
    if (name.startsWith('Julia')) {
      assert.match(chips, /Children \(12 only\)/);
      assert.doesNotMatch(chips, /Children \(5-12\)/);
      assert.match(summary, /ages 12 and older/);
      assert.match(about, /LP status and Play Therapy certification/);
    } else {
      assert.match(chips, /Adults/);
      assert.match(chips, /Couples/);
      assert.doesNotMatch(chips, /Teens|Children|Families/);
      assert.match(summary, /does not accept teens or children/);
      assert.match(about, /adults and couples only/);
    }
  }
});

test('directory and profile bust caches for updated data and rendering scripts', () => {
  for (const file of ['clinical-staff.html', 'therapist-profile.html']) {
    assert.match(source(file), /therapist-filters\.js\?v=20261103-population-limits/);
    const renderingScript = file === 'clinical-staff.html' ? 'script' : 'therapist-profile';
    assert.ok(source(file).includes(`${renderingScript}.js?v=20261103-population-limits`));
  }
});
