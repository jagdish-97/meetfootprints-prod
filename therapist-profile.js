const profileFallbackTherapists = [
  {
    id: "siham-abdelqader",
    email: "siham@example.com",
    name: "Siham Abdelqader",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Siham%20Pic%202.jpg/:/cr=t:9.58%25,l:0%25,w:100%25,h:50.13%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-LP",
    location: "NY",
    specialties: ["Depression", "Anxiety", "Trauma"],
    languages: ["English", "Arabic"],
    therapyTypes: ["Individual", "Family"],
    availability: "Available",
    summary: "Values multiculturalism, cultural awareness, compassion, and empathy. Experienced supporting clients with depression, anxiety, trauma, self-esteem, stress management, and family or marital conflicts."
  }
];

const SPECIALTY_GROUPS = { "Mood, anxiety & mental health": ["Anxiety", "Bipolar / Manic", "Depression", "OCD", "Personality Disorders", "Schizophrenia", "Self-Doubt"], "Neurodevelopment & disability": ["ADHD", "Autism Spectrum", "Disabilities", "Neurodivergence"], "Addictions & substance use": ["Chemical Dependency", "Drug Addiction / Alcoholism", "Gambling"], "Body image, eating & health": ["Bariatric", "Body Dysmorphia", "Eating Disorders", "HIV/AIDS", "Traumatic Injury"], "Trauma & safety": ["Domestic Violence", "High Risk", "PTSD", "Self Harm"], "Sexual concerns": ["Sex Addiction", "Sexual Disorder", "Sexual Trauma"], "Identity & cultural concerns": ["Cultural / Ethnic Concerns", "LGBTQ", "Men's Issues", "Trans Issues", "Women's Issues"], "Relationships & life stages": ["Divorce", "End of Life", "Geriatrics", "Grief", "Infertility", "Parenting", "Postpartum"], "Other concerns": ["Hoarding"] };
const SPECIALTY_CATEGORY_ALIASES = { "Schizo": "Schizophrenia", "Bariatric Ass.": "Bariatric", "Body Dysmporphia": "Body Dysmorphia", "Chemical Dep.": "Chemical Dependency", "Cultural Ethnic": "Cultural / Ethnic Concerns", "Drug Addiction/Alcoholism": "Drug Addiction / Alcoholism", "Eating Disorder": "Eating Disorders", "Mens Issues": "Men's Issues", "Tramatic Injury": "Traumatic Injury", "Autism Spectrum Disorder": "Autism Spectrum", "Bariatric Support": "Bariatric", "Bipolar Disorder": "Bipolar / Manic", "Body Dysmorphic Disorder": "Body Dysmorphia", "Disability-related Concerns": "Disabilities", "End-of-Life Support": "End of Life", "Gambling Addiction": "Gambling", "Older Adults": "Geriatrics", "Grief / Loss": "Grief", "High-Risk Behaviors": "High Risk", "Hoarding Disorder": "Hoarding", "LGBTQ+ Support": "LGBTQ", "Post-Traumatic Stress Disorder": "PTSD", "Substance Use": "Drug Addiction / Alcoholism", "Women’s Issues": "Women's Issues" };
const MODALITY_CHOICES = ["Art Therapy", "Brain Spotting", "CBT", "Christian Counseling", "DBT", "EMDR", "Exposure Therapy", "Exposure Therapy (Narrative)", "Dance/ Movement Therapy", "Internal Family Systems (IFS)", "Music Therapy", "Person- Centered", "Play Therapy", "Somatic"];
function normalizeSpecialties(values) {
  const allowed = Object.values(SPECIALTY_GROUPS).flat();
  return [...new Set((values || []).flatMap(raw => {
    const trimmed = String(raw).trim();
    const direct = SPECIALTY_CATEGORY_ALIASES[trimmed] || trimmed;
    if (allowed.includes(direct)) return [direct];
    return legacyNormalizeSpecialties([trimmed]).map(value => SPECIALTY_CATEGORY_ALIASES[value] || value).filter(value => allowed.includes(value));
  }))];
}
function normalizeModalities(values) {
  const aliases = { "Brainspotting": "Brain Spotting", "Narrative Exposure Therapy": "Exposure Therapy (Narrative)", "Dance/Movement Therapy": "Dance/ Movement Therapy", "Person-Centered": "Person- Centered" };
  return [...new Set((values || []).map(value => aliases[value] || value).filter(value => MODALITY_CHOICES.includes(value)))];
}
const SPECIALTY_ALIASES = {
  "depression": [
    "Depression"
  ],
  "dep": [
    "Depression"
  ],
  "anxiety": [
    "Anxiety"
  ],
  "anx": [
    "Anxiety"
  ],
  "autism spectrum disorder": [
    "Autism Spectrum Disorder"
  ],
  "asd": [
    "Autism Spectrum Disorder"
  ],
  "autism": [
    "Autism Spectrum Disorder"
  ],
  "bariatric support": [
    "Bariatric Support"
  ],
  "bariatric concerns": [
    "Bariatric Support"
  ],
  "bipolar disorder": [
    "Bipolar Disorder"
  ],
  "bipolar": [
    "Bipolar Disorder"
  ],
  "bd/man": [
    "Bipolar Disorder"
  ],
  "bd/manic": [
    "Bipolar Disorder"
  ],
  "body dysmorphic disorder": [
    "Body Dysmorphic Disorder"
  ],
  "bdd": [
    "Body Dysmorphic Disorder"
  ],
  "body dysmporphia": [
    "Body Dysmorphic Disorder"
  ],
  "substance use": [
    "Substance Use"
  ],
  "chemical d": [
    "Substance Use"
  ],
  "chemical dep": [
    "Substance Use"
  ],
  "chemical dependency": [
    "Substance Use"
  ],
  "substance use disorder": [
    "Substance Use"
  ],
  "sud": [
    "Substance Use"
  ],
  "cultural / ethnic concerns": [
    "Cultural / Ethnic Concerns"
  ],
  "cul.e": [
    "Cultural / Ethnic Concerns"
  ],
  "cul.ethn": [
    "Cultural / Ethnic Concerns"
  ],
  "cul.ethnic": [
    "Cultural / Ethnic Concerns"
  ],
  "cultural / ethnic issues": [
    "Cultural / Ethnic Concerns"
  ],
  "cultural/ethnic concerns": [
    "Cultural / Ethnic Concerns"
  ],
  "disability-related concerns": [
    "Disability-related Concerns"
  ],
  "disab": [
    "Disability-related Concerns"
  ],
  "disab.": [
    "Disability-related Concerns"
  ],
  "disability": [
    "Disability-related Concerns"
  ],
  "divorce": [
    "Divorce"
  ],
  "div": [
    "Divorce"
  ],
  "divorce-related issues": [
    "Divorce"
  ],
  "domestic violence": [
    "Domestic Violence"
  ],
  "dv": [
    "Domestic Violence"
  ],
  "eating disorders": [
    "Eating Disorders"
  ],
  "ed": [
    "Eating Disorders"
  ],
  "end-of-life support": [
    "End-of-Life Support"
  ],
  "end-of-life care": [
    "End-of-Life Support"
  ],
  "eol": [
    "End-of-Life Support"
  ],
  "grief / loss": [
    "Grief / Loss"
  ],
  "grief": [
    "Grief / Loss"
  ],
  "grief & loss": [
    "Grief / Loss"
  ],
  "hoarding disorder": [
    "Hoarding Disorder"
  ],
  "hoarding": [
    "Hoarding Disorder"
  ],
  "lgbtq+ support": [
    "LGBTQ+ Support"
  ],
  "lgbtq": [
    "LGBTQ+ Support"
  ],
  "life transitions": [
    "Life Transitions"
  ],
  "life transition": [
    "Life Transitions"
  ],
  "self-esteem": [
    "Self-Esteem"
  ],
  "low self-esteem": [
    "Self-Esteem"
  ],
  "self-doubt": [
    "Self-Doubt"
  ],
  "self doubt": [
    "Self-Doubt"
  ],
  "self-d": [
    "Self-Doubt"
  ],
  "parenting": [
    "Parenting"
  ],
  "parentin": [
    "Parenting"
  ],
  "personality disorders": [
    "Personality Disorders"
  ],
  "pd": [
    "Personality Disorders"
  ],
  "post-traumatic stress disorder": [
    "Post-Traumatic Stress Disorder"
  ],
  "ptsd": [
    "Post-Traumatic Stress Disorder"
  ],
  "person-centered therapy": [
    "Person-Centered Therapy"
  ],
  "pc": [
    "Person-Centered Therapy"
  ],
  "stress management": [
    "Stress Management"
  ],
  "stress": [
    "Stress Management"
  ],
  "breathwork": [
    "Breathwork"
  ],
  "breath work": [
    "Breathwork"
  ],
  "older adults": [
    "Older Adults"
  ],
  "geriatr": [
    "Older Adults"
  ],
  "anxiety depression": [
    "Anxiety",
    "Depression"
  ],
  "stress greif-loss": [
    "Stress Management",
    "Grief / Loss"
  ],
  "somatic anx": [
    "Somatic",
    "Anxiety"
  ],
  "somatic/anx": [
    "Somatic",
    "Anxiety"
  ],
  "somatic|anx": [
    "Somatic",
    "Anxiety"
  ]
};
function legacyNormalizeSpecialties(values) {
  const result = [];
  for (const raw of values || []) {
    const value = String(raw).trim().replace(/\s+/g, " "), key = value.toLowerCase();
    if (SPECIALTY_ALIASES[key]) { result.push(...SPECIALTY_ALIASES[key]); continue; }
    if (value.includes("|")) { result.push(...legacyNormalizeSpecialties(value.split("|"))); continue; }
    if (/^[a-z]$/i.test(value) || /^(IF|ND|PP|RPT|RT|AT|MT|F\/B|F\/B\/LGBTQ\+|WI.*)$/i.test(value)) continue;
    if (value) result.push(value);
  }
  return [...new Map(result.map(value => [value.toLowerCase(), value])).values()];
}


// Expand patient-facing labels without changing stored directory values.
const PROFILE_CARE_LABELS = {
  'ADHD': 'Attention-Deficit/Hyperactivity Disorder (ADHD)',
  'OCD': 'Obsessive-Compulsive Disorder (OCD)',
  'PTSD': 'Post-Traumatic Stress Disorder (PTSD)',
  'CBT': 'Cognitive Behavioral Therapy (CBT)',
  'DBT': 'Dialectical Behavior Therapy (DBT)',
  'EMDR': 'Eye Movement Desensitization and Reprocessing (EMDR)',
  'LGBTQ': 'Lesbian, Gay, Bisexual, Transgender, and Queer (LGBTQ) Support',
  'HIV/AIDS': 'Human Immunodeficiency Virus (HIV) / Acquired Immunodeficiency Syndrome (AIDS)',
  'Bipolar / Manic': 'Bipolar Disorder / Mania'
};
function profileCareLabel(value) { return PROFILE_CARE_LABELS[value] || value; }
function profileCareSentence(value) {
  return value.replace(/[^()]+(?=\(|$)/g, text => text.toLowerCase());
}

const STANDARD_SESSION_RATE = 150;

const profileElements = {
  profileName: document.querySelector("#profile-name"),
  profileRole: document.querySelector("#profile-role"),
  profileSummary: document.querySelector("#profile-summary"),
  heroChips: document.querySelector("#hero-chips"),
  heroLocation: document.querySelector("#hero-location"),
  heroPrice: document.querySelector("#hero-price"),
  heroAvailability: document.querySelector("#hero-availability"),
  profileImage: document.querySelector("#profile-image"),
  sidebarName: document.querySelector("#sidebar-name"),
  sidebarRole: document.querySelector("#sidebar-role"),
  languagesList: document.querySelector("#languages-list"),
  sessionFormatList: document.querySelector("#session-format-list"),
  populationList: document.querySelector("#population-list"),
  modalitiesList: document.querySelector("#modalities-list"),
  aboutCopy: document.querySelector("#about-copy"),
  specialtiesGrid: document.querySelector("#specialties-grid"),
  expectationOne: document.querySelector("#expectation-one"),
  expectationTwo: document.querySelector("#expectation-two"),
  expectationThree: document.querySelector("#expectation-three"),
  highlightApproach: document.querySelector("#highlight-approach"),
  highlightFit: document.querySelector("#highlight-fit"),
  notFoundState: document.querySelector("#not-found-state"),
  editLink: document.querySelector("#profile-edit-link")
};

let currentProfileTherapistId = "";

async function initTherapistProfile() {
  const therapistId = new URLSearchParams(window.location.search).get("therapist");
  currentProfileTherapistId = therapistId || "";
  initTherapistProfileUpdateListener();
  const therapist = await window.therapistDataApi.loadTherapistById(therapistId, {
    fallbackUrl: "data/therapists.json",
    fallbackData: profileFallbackTherapists
  });

  if (!therapist) {
    showNotFoundState();
    return;
  }

  renderTherapistProfile(therapist);
  await renderEditAccess(therapist);
}

async function renderEditAccess(therapist) {
  if (!profileElements.editLink) {
    return;
  }

  const { access } = await window.therapistDataApi.getCurrentUserAccess();
  const canEdit = access && (
    access.role === "admin"
    || (access.role === "therapist" && access.therapist_id === therapist.id)
  );

  if (!canEdit) {
    return;
  }

  const editUrl = new URL("therapist-portal.html", window.location.href);
  editUrl.searchParams.set("therapist", therapist.id);
  profileElements.editLink.href = editUrl.toString();
  profileElements.editLink.classList.remove("hidden");
}

function renderTherapistProfile(therapist) {
  const filterInfo = typeof window.findTherapistFilterInfo === "function" ? window.findTherapistFilterInfo(therapist.name) : null;
  therapist = {
    ...therapist,
    // Use the same current specialty selections as the public directory.
    specialties: normalizeSpecialties(filterInfo && Array.isArray(filterInfo.specialties) ? filterInfo.specialties : therapist.specialties).map(profileCareLabel),
    sessionFormat: filterInfo && Array.isArray(filterInfo.sessionFormat) && filterInfo.sessionFormat.length ? filterInfo.sessionFormat : ["Virtual"],
    population: filterInfo && Array.isArray(filterInfo.population) ? filterInfo.population : [],
    modalities: filterInfo && Array.isArray(filterInfo.modalities) ? filterInfo.modalities.map(profileCareLabel) : []
  };

  document.title = `${therapist.name} | Footprints to Feel Better`;

  profileElements.profileName.textContent = therapist.name;
  profileElements.profileRole.textContent = `${therapist.title} | ${therapist.location}`;
  profileElements.profileSummary.textContent = therapist.summary;
  profileElements.heroLocation.textContent = therapist.location;
  profileElements.heroPrice.textContent = formatPrice(STANDARD_SESSION_RATE);
  profileElements.heroAvailability.textContent = therapist.availability;

  profileElements.profileImage.src = resolveProfileImage(therapist);
  profileElements.profileImage.alt = therapist.name;
  profileElements.sidebarName.textContent = therapist.name;
  profileElements.sidebarRole.textContent = buildSidebarRole(therapist);

  renderChipGroup(profileElements.heroChips, therapist.specialties.slice(0, 4));
  renderChipGroup(profileElements.languagesList, therapist.languages, "Languages coming soon");
  renderChipGroup(profileElements.sessionFormatList, therapist.sessionFormat, "Virtual");
  renderChipGroup(profileElements.populationList, therapist.population, "Details coming soon");
  renderChipGroup(profileElements.modalitiesList, therapist.modalities, "Details coming soon");
  renderAboutCopy(therapist);
  renderSpecialties(therapist.specialties);
  renderExpectations(therapist);
  renderHighlights(therapist);
  renderIdentity(therapist.name);
}


function findTherapistIdentityInfo(name) {
  const normalize = (value) => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]+/g, " ").trim();
  const target = normalize(name);
  if (!target) return null;
  const records = Array.isArray(window.THERAPIST_FILTER_DATA) ? window.THERAPIST_FILTER_DATA : [];
  const matches = records.filter((record) => Array.isArray(record.identityProfileNames)
    && record.identityProfileNames.some((profileName) => normalize(profileName) === target));
  return matches.length === 1 ? matches[0].identifiesAs : null;
}

function renderIdentity(therapistName) {
  const container = document.querySelector("#identifies-as-content");
  if (!container) return;
  const identity = findTherapistIdentityInfo(therapistName);
  const groups = identity ? [
    ["Pronouns", identity.pronouns ? [identity.pronouns] : []],
    ["Race / ethnicity", Array.isArray(identity.ethnicity) ? identity.ethnicity : []],
    ["Faith / spirituality", Array.isArray(identity.faith) ? identity.faith : []],
    ["LGBTQ+", identity.lgbtq === true ? ["LGBTQ+"] : []]
  ].filter((group) => group[1].length) : [];
  const fragment = document.createDocumentFragment();
  if (!groups.length) {
    const empty = document.createElement("p");
    empty.className = "text-sm text-[#7b6169]";
    empty.textContent = "Not provided";
    fragment.appendChild(empty);
  }
  groups.forEach(([label, values]) => {
    const group = document.createElement("div");
    const heading = document.createElement("p");
    heading.className = "text-xs font-bold uppercase tracking-[0.15em] text-clay";
    heading.textContent = label;
    const chips = document.createElement("div");
    chips.className = "mt-3 flex flex-wrap gap-2";
    renderChipGroup(chips, values);
    group.append(heading, chips);
    fragment.appendChild(group);
  });
  container.replaceChildren(fragment);
}

function buildRoleLine(therapist) {
  return [therapist.title, therapist.location].filter(Boolean).join(" | ") || "Footprints Therapist";
}

function buildSidebarRole(therapist) {
  const languageText = therapist.languages.length ? therapist.languages.join(", ") : "Language details coming soon";
  return [therapist.title, languageText].filter(Boolean).join(" | ");
}

function initTherapistProfileUpdateListener() {
  window.addEventListener("footprints:therapist-updated", handleProfileTherapistUpdateEvent);
  window.addEventListener("storage", (event) => {
    if (event.key !== window.therapistDataApi.THERAPIST_UPDATE_STORAGE_KEY) {
      return;
    }

    handleProfileTherapistUpdateEvent(event);
  });
}

function handleProfileTherapistUpdateEvent(event) {
  const updatedTherapist = window.therapistDataApi.parseTherapistUpdateEvent(event);
  if (!updatedTherapist || updatedTherapist.id !== currentProfileTherapistId) {
    return;
  }

  renderTherapistProfile(updatedTherapist);
}

function resolveProfileImage(therapist) {
  const fallbackImage = "data/portraits/portrait.svg";
  const image = String((therapist && therapist.image) || "").trim() || fallbackImage;
  const version = String((therapist && therapist.updatedAt) || "").trim();

  if (!version || image === fallbackImage || image.startsWith("data:") || image.startsWith("blob:")) {
    return image;
  }

  try {
    const url = new URL(image, window.location.href);
    url.searchParams.set("v", version);
    return url.toString();
  } catch (error) {
    return image;
  }
}

function renderChipGroup(container, items, fallbackText) {
  const fragment = document.createDocumentFragment();

  if (!items.length && fallbackText) {
    const text = document.createElement("p");
    text.className = "text-sm text-[#7b6169]";
    text.textContent = fallbackText;
    fragment.appendChild(text);
    container.replaceChildren(fragment);
    return;
  }

  items.forEach((item) => {
    const chip = document.createElement("span");
    chip.className = "inline-flex rounded-full bg-[#fff0f4] px-4 py-2 text-sm font-semibold text-rosewood";
    chip.textContent = item;
    fragment.appendChild(chip);
  });

  container.replaceChildren(fragment);
}

function renderAboutCopy(therapist) {
  const paragraphs = buildProfileParagraphs(therapist);
  const fragment = document.createDocumentFragment();

  paragraphs.forEach((paragraph) => {
    const node = document.createElement("p");
    node.textContent = paragraph;
    fragment.appendChild(node);
  });

  profileElements.aboutCopy.replaceChildren(fragment);
}

function renderSpecialties(specialties) {
  const fragment = document.createDocumentFragment();
  const items = specialties.length ? specialties : ["Supportive Care"];

  items.forEach((specialty, index) => {
    const card = document.createElement("article");
    card.className = "rounded-[1.5rem] border border-[#f0d8dd] bg-sand p-5";
    const eyebrow = document.createElement("p");
    eyebrow.className = "text-xs font-bold uppercase tracking-[0.2em] text-clay";
    eyebrow.textContent = `Specialty ${String(index + 1).padStart(2, "0")}`;
    const heading = document.createElement("h3");
    heading.className = "mt-3 font-heading text-2xl font-bold text-ink break-words";
    heading.textContent = specialty;
    const description = document.createElement("p");
    description.className = "mt-3 text-sm leading-7 text-[#5b4850]";
    description.textContent = buildSpecialtyDescription(specialty);
    card.append(eyebrow, heading, description);
    fragment.appendChild(card);
  });

  profileElements.specialtiesGrid.replaceChildren(fragment);
}

function renderExpectations(therapist) {
  const firstName = therapist.name.split(" ")[0] || "This therapist";
  const therapyTypes = (therapist.modalities && therapist.modalities.length
    ? therapist.modalities.slice(0, 2).join(" and ")
    : therapist.therapyTypes.slice(0, 2).join(" and ").toLowerCase()) || "supportive";
  const specialties = therapist.specialties.slice(0, 3).map(profileCareSentence).join(", ") || "each client's goals";

  profileElements.expectationOne.textContent = `${firstName} begins with a calm, supportive conversation so the client feels heard.`;
  profileElements.expectationTwo.textContent = `Support may draw from ${therapyTypes} approaches based on what feels most helpful.`;
  profileElements.expectationThree.textContent = `Work may focus on ${specialties} with next steps shaped around steady progress.`;
}

function renderHighlights(therapist) {
  const specialtySummary = therapist.specialties.slice(0, 2).map(profileCareSentence).join(" and ") || "a range of emotional needs";
  const firstName = therapist.name.split(" ")[0] || "This therapist";
  profileElements.highlightApproach.textContent = `${firstName} brings a supportive style centered on empathy, trust, and practical care.`;
  profileElements.highlightFit.textContent = `This therapist may be a good fit for clients looking for support with ${specialtySummary}.`;
}

function showNotFoundState() {
  document.title = "Therapist Profile Not Found | Footprints to Feel Better";
  profileElements.notFoundState.classList.remove("hidden");
  document.querySelectorAll("main > section").forEach((section) => {
    section.classList.add("hidden");
  });
}

function buildProfileParagraphs(therapist) {
  const firstName = therapist.name.split(" ")[0] || "This therapist";
  const paragraphs = [];

  if (therapist.summary) {
    paragraphs.push(therapist.summary);
  }

  if (therapist.location || therapist.languages.length) {
    const locationText = therapist.location ? `works with clients in ${therapist.location}` : "supports clients across multiple locations";
    const languageText = therapist.languages.length ? ` and offers support in ${therapist.languages.join(", ")}` : "";
    paragraphs.push(`${firstName} ${locationText}${languageText}.`);
  }

  if (therapist.population && therapist.population.length) {
    const formatText = (therapist.sessionFormat || ["Virtual"]).join(" and ").toLowerCase();
    paragraphs.push(`${firstName} works with ${therapist.population.join(", ").toLowerCase()} and offers ${formatText} sessions.`);
  }

  if (therapist.specialties.length || therapist.therapyTypes.length) {
    const specialtiesText = therapist.specialties.length ? therapist.specialties.slice(0, 3).map(profileCareSentence).join(", ") : "client-specific concerns";
    const typesText = therapist.therapyTypes.length ? therapist.therapyTypes.join(" and ").toLowerCase() : "supportive care";
    paragraphs.push(`Sessions may include support around ${specialtiesText} using ${typesText} care options.`);
  }

  return paragraphs.length ? paragraphs : ["Profile details are being updated."];
}

function buildSpecialtyDescription(specialty) {
  return `Support may focus on ${profileCareSentence(specialty)} with a calm, practical approach tailored to the client's needs.`;
}

function formatPrice(value) {
  if (value == null || Number.isNaN(Number(value))) {
    return "Contact for rate";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

initTherapistProfile();