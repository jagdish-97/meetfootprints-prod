const DISCLAIMER_STANDARD =
  '<strong>Important - This is an estimate only.</strong> Your actual copay depends on your specific plan, deductible status, and benefit tier. <strong>Final cost will be confirmed by our Intake team before your first session.</strong> The figures shown above are based on publicly available plan data and are not a guarantee of coverage or cost. We strongly recommend contacting our Intake team so they can verify your exact benefits before you schedule.';

const DISCLAIMER_OOP =
  '<strong>Important - This is an estimate only.</strong> The out-of-pocket rate shown is a standard session fee. <strong>Your exact cost must be confirmed by our Intake team before scheduling.</strong> Contact us - we can check whether your insurance is accepted and help you find the most affordable option available to you.';

const OOP_RATE = '$95 - $150';
const OOP_NOTE = 'per session, if paying without insurance';

const CONTACT_HTML = `
  <div class="contact-box">
    <div class="contact-box-title">Have questions about your exact copay? Contact our Intake team.</div>
    <div class="contact-row"><span class="contact-icon">☎</span> Call: <a href="tel:+19173523625">(917) 352-3625</a></div>
    <div class="contact-row"><span class="contact-icon">✉</span> Email: <a href="mailto:intake@footprintstofeelbetter.com">intake@footprintstofeelbetter.com</a></div>
  </div>`;

const data = {
  aetna: {
    name: 'Aetna',
    badges: [{ text: 'In-network', cls: 'badge-inn' }],
    plans: ['Commercial PPO', 'Commercial HMO', 'Commercial EPO', 'Commercial POS', 'Medicare HMO/PPO', 'EAP'],
    copay: '$20 - $40',
    copayNote: 'per session (after deductible)',
    deductible: '$500 - $2,000',
    deductibleNote: 'typical commercial range; EAP sessions may be $0',
    note: 'PPO plans typically carry copays in the $20-$40 range after the deductible. HDHP/HSA plans have no copay until the deductible is met, then usually 10-20% coinsurance. EAP sessions are often fully covered at $0. TPAs under Aetna\'s network (Meritain, WebTPA, etc.) follow the same structure.',
    source: 'Source: mywellbeing.com/aetna, psychologicalhealing.net'
  },
  affinity: {
    name: 'Affinity (Molina)',
    badges: [{ text: 'In-network', cls: 'badge-inn' }, { text: 'Medicaid', cls: 'badge-medicaid' }],
    plans: ['Medicaid Managed Care (HMO)', 'Child Health Plus', 'Essential Plan'],
    copay: '$0 - $40',
    copayNote: 'per session - no copay for outpatient behavioral health',
    deductible: '$0', 
    deductibleNote: 'Medicaid plans have no deductible',
    note: 'Affinity by Molina is a Medicaid managed care plan. Outpatient behavioral health services, including therapy, are covered at $0 copay and $0 deductible for eligible members. No session limit. Prior authorization may be required for some services.',
    source: 'Source: Molina Healthcare NY, manhattanmentalhealthcounseling.com'
  },
  carelon: {
    name: 'Carelon / Beacon',
    badges: [{ text: 'In-network', cls: 'badge-inn' }],
    plans: ['Commercial', 'Medicaid', 'CHIP / Child Health Plus', 'EAP', 'Empire Plan (NY State)', 'EmblemHealth'],
    copay: '$0 - $40',
    copayNote: 'varies - Medicaid/CHIP typically $0, commercial $20-$40',
    deductible: '$0 - $1,500',
    deductibleNote: 'Medicaid & CHIP: $0 - commercial plans vary widely',
    note: 'Carelon manages behavioral health for several major plans including EmblemHealth, NY State Empire Plan, and Child Health Plus. Medicaid and CHIP members typically pay $0 per session. Commercial plan costs vary by employer group.',
    source: 'Source: Carelon Behavioral Health plan documentation'
  },
  cigna: {
    name: 'Cigna / Evernorth',
    badges: [{ text: 'In-network', cls: 'badge-inn' }],
    plans: ['All Evernorth Behavioral Health products', 'PPO', 'Open Access Plus (OAP)', 'HDHP/HSA'],
    copay: '$20 - $50',
    copayNote: 'per session (specialist copay applies to behavioral health)',
    deductible: '$500 - $3,000',
    deductibleNote: 'HDHP plans: no copay until deductible met, then 10-30% coinsurance',
    note: 'In-network therapy copays range $20-$50 for most commercial plans. HDHP/HSA plans do not use copays - you pay the full negotiated rate until your deductible is met, then a percentage. We are credentialed with Cigna through Evernorth in NY and FL.',
    source: 'Source: R&R Health, LifeStance/Evernorth data, Evernorth Admin Guidelines'
  },
  uhc: {
    name: 'UnitedHealthcare / Optum',
    badges: [{ text: 'In-network', cls: 'badge-inn' }],
    plans: ['Commercial PPO', 'Medicaid HMO', 'Medicare', 'NY/NJ Exchange', 'CHIP', 'HARP', 'DSNP'],
    copay: '$0 - $90',
    copayNote: 'per session after deductible - wide range by plan type',
    deductible: '$0 - $5000',
    deductibleNote: 'Medicaid/CHIP/HARP: $0 - commercial plans vary',
    note: 'Most Optum members pay between $4 and $60 per session after meeting their deductible. Medicare plans typically have a $30 copay per individual session. Medicaid, HARP, and DSNP members generally pay $0. Virtual visits through myuhc.com may have a $0 copay.',
    source: 'Source: Grow Therapy/Optum data, UHC PEBB EOC 2024'
  },
  seiu: {
    name: '1199 SEIU',
    badges: [{ text: 'In-network', cls: 'badge-inn' }],
    plans: ['Union Health Plan (Taft-Hartley Fund)'],
    copay: '$0',
    copayNote: 'per session (union benefit tier varies)',
    deductible: '$0',
    deductibleNote: 'union plans often have low or no deductible',
    note: '1199 SEIU is a union fund that processes claims through Aetna, UHC, or Cigna networks depending on your tier. Copays are typically lower than individual commercial plans. Your exact cost depends on your union benefit level - check your Summary of Benefits.',
    source: 'Source: Estimated based on Aetna/UHC union plan structures'
  },
  healthfirst: {
    name: 'Healthfirst',
    badges: [{ text: 'In-network', cls: 'badge-inn' }],
    plans: ['All Healthfirst products', 'Medicaid Managed Care', 'Essential Plan', 'Medicare Advantage', 'Commercial'],
    copay: '$0 - $30',
    copayNote: 'per session - Medicaid & Essential Plan typically $0',
    deductible: '$0',
    deductibleNote: 'deductible is typically waived for psychotherapy',
    note: 'Medicaid and Essential Plan members typically pay $0 per session with no deductible. Commercial plan members pay $10-$30 per session. Healthfirst places no cap on the number of therapy sessions. We are in-network for all Healthfirst products.',
    source: 'Source: Zencare/Healthfirst, manhattanmentalhealthcounseling.com, healthfirst.org'
  },
  mvp: {
    name: 'MVP Health Care',
    badges: [{ text: 'In-network', cls: 'badge-inn' }],
    plans: ['Individual provider contracts only'],
    copay: '$20 - $45',
    copayNote: 'per session - 70% of members pay $45 or less',
    deductible: '$500 - $2,000',
    deductibleNote: 'typical commercial range for individual plans',
    note: 'MVP is contracted with our individual clinicians, not as a group. About 70% of MVP members with covered therapy sessions pay $45 or less per session. Please confirm which Footprints clinician is in-network with your specific MVP plan before scheduling.',
    source: 'Source: LifeStance/MVP NY data, Zencare'
  }
};

function savingsLabel(copay) {
  const map = {
    '$0': 'You save up to $150 per session by using your insurance.',
    '$20 - $40': 'You save $55-$130 per session compared to the full rate.',
    '$0 - $40': 'You save $55-$150 per session depending on your plan.',
    '$20 - $50': 'You save $45-$130 per session compared to the full rate.',
    '$4 - $60': 'You save $35-$146 per session compared to the full rate.',
    '$15 - $40': 'You save $55-$135 per session compared to the full rate.',
    '$0 - $30': 'You save $65-$150 per session compared to the full rate.',
    '$20 - $45': 'You save $50-$130 per session compared to the full rate.'
  };
  return map[copay] || 'Using your insurance saves you significantly per session.';
}

function showResult() {
  const sel = document.getElementById('ins-select').value;
  const area = document.getElementById('result-area');
  if (!sel) {
    area.innerHTML = '<div class="empty-state"><div class="empty-icon">⛨</div>Select your insurance above to see your estimated cost per session.</div>';
    return;
  }

  if (sel === 'other') {
    area.innerHTML = `
      <div class="result-card">
        <div class="result-header">
          <div class="ins-name">My insurance is not listed</div>
          <span class="badge badge-oon">Insurance not verified</span>
        </div>
        <div class="note" style="border-left-color:#A32D2D;">
          We may not be in-network with your insurance, or your plan has not been verified yet. You still have options - see below.
        </div>
        <div class="divider-label">Out-of-pocket session rate</div>
        <div class="cost-grid-single">
          <div class="cost-box" style="border: 0.5px solid #7B1D4630;">
            <div class="cost-box-label">Full session rate (no insurance)</div>
            <div class="cost-box-value oop-color" style="font-size:26px;">${OOP_RATE}</div>
            <div class="cost-box-sub">${OOP_NOTE}</div>
          </div>
        </div>
        <div class="contact-box">
          <div class="contact-box-title">Not sure if your insurance is accepted? Our Intake team can check for you.</div>
          <div class="contact-row"><span class="contact-icon">☎</span> Call: <a href="tel:+19173523625">(917) 352-3625</a></div>
          <div class="contact-row"><span class="contact-icon">✉</span> Email: <a href="mailto:intake@footprintstofeelbetter.com">intake@footprintstofeelbetter.com</a></div>
          <div style="font-size:12px; color:var(--est-text); margin-top:6px; line-height:1.6;">Our team will verify your insurance benefits, confirm your exact copay, and help you find the most affordable option available to you.</div>
        </div>
        <div class="disclaimer">${DISCLAIMER_OOP}</div>
        <div style="text-align:center; margin-top:1.25rem;">
          <button class="cta-btn" onclick="window.location.href='mailto:intake@footprintstofeelbetter.com'">Contact Intake Team →</button>
        </div>
      </div>`;
    return;
  }

  const d = data[sel];
  const badgesHTML = d.badges.map((b) => `<span class="badge ${b.cls}">${b.text}</span>`).join('');
  const plansHTML = d.plans.map((p) => `<span class="plan-tag">${p}</span>`).join('');
  const savings = savingsLabel(d.copay);

  area.innerHTML = `
    <div class="result-card">
      <div class="result-header">
        <div class="ins-name">${d.name}</div>
        ${badgesHTML}
      </div>
      ${d.plans.length ? `<div class="plans-row">${plansHTML}</div>` : ''}

      <div class="divider-label">Estimated cost with your insurance</div>
      <div class="cost-grid">
        <div class="cost-box">
          <div class="cost-box-label">Estimated copay</div>
          <div class="cost-box-value savings">${d.copay}</div>
          <div class="cost-box-sub">${d.copayNote}</div>
        </div>
        <div class="cost-box">
          <div class="cost-box-label">Typical deductible</div>
          <div class="cost-box-value">${d.deductible}</div>
          <div class="cost-box-sub">${d.deductibleNote}</div>
        </div>
      </div>

      <div class="divider-label">Without insurance (full session rate)</div>
      <div class="cost-grid-single" style="margin-bottom:8px;">
        <div class="cost-box highlight">
          <div class="cost-box-label">Out-of-pocket rate at Footprints</div>
          <div class="cost-box-value oop-color">${OOP_RATE}</div>
          <div class="cost-box-sub">${OOP_NOTE} - applies if deductible not yet met or no insurance</div>
        </div>
      </div>

      <div class="savings-banner">✓ ${savings}</div>

      <div class="note">${d.note}</div>
      ${d.source ? `<div class="source-note">${d.source}</div>` : ''}

      ${CONTACT_HTML}

      <div class="disclaimer">${DISCLAIMER_STANDARD}</div>
      <div style="text-align:center; margin-top:1.25rem;">
        <button class="cta-btn" onclick="window.location.href='https://meetfootprints.com'">Book a session →</button>
      </div>
    </div>`;
}
