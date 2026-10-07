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
const PRONOUN_CHOICES = ["She/Her", "He/Him", "They/Them", "Ze / Zir / Zirs", "Zie / Zir", "Ze / Hir / Hirs", "Xe / Xem / Xyr", "Sie / Hir", "Fae / Faer", "Thon / Thons", "Other"];
function pronounDisplayLabel(value) { return value === "They/Them" ? "They / Them / Theirs" : value; }
function pronounKey(value) { const key = String(value).toLowerCase().replace(/\s/g, ""); return key === "they/them/theirs" ? "they/them" : key; }
function matchesPronouns(values, selected) {
  return !selected.length || values.some(value => selected.some(choice => choice === "Other"
    ? !PRONOUN_CHOICES.filter(item => item !== "Other").some(item => pronounKey(item) === pronounKey(value))
    : pronounKey(choice) === pronounKey(value)));
}
const LANGUAGE_DISPLAY_LABELS = {
  "Español": "Spanish (Español)",
  "Русский": "Russian (Русский)",
  "中文": "Chinese / Mandarin (中文)",
  "العربية": "Arabic (العربية)",
  "தமிழ்": "Tamil (தமிழ்)",
  "اردو": "Urdu (اردو)",
  "हिंदी": "Hindi (हिंदी)",
  "ਪੰਜਾਬੀ": "Punjabi (ਪੰਜਾਬੀ)",
  "Bangla": "Bengali (বাংলা)",
  "Cantonese": "Cantonese (廣東話)",
  "Korean": "Korean (한국어)",
  "English/Arabic": "English / Arabic (العربية)",
  "TWI": "Twi"
};
function languageDisplayLabel(value) { return LANGUAGE_DISPLAY_LABELS[value] || value; }
const FILTER_KEYS = ["pronouns", "gender", "culturalBackground", "religiousBackground", "faithIntegrated", "state", "sessionFormat", "population", "modalities", "specialties", "languages", "therapyTypes", "availability"];
const SESSION_FORMAT_ORDER = ["In-Person", "Virtual"];
const LOCATION_OPTIONS = ["NY", "NJ", "CT", "FL", "NV"];
const POPULATION_ORDER = ["Individuals", "Couples", "Families", "Adults", "Teens (13-17)", "Children (5-12)", "Groups"];
const PAGE_SIZE = 3;
const DEFAULT_THERAPIST_IMAGE = "data/portraits/portrait.svg";
let imageHydrationRunId = 0;
const menuToggle = document.querySelector("#menu-toggle");
const mobileMenu = document.querySelector("#mobile-menu");
const footerYear = document.querySelector("#home-year");
const loginModal = document.querySelector("#login-modal");
const openLoginModalButton = document.querySelector("#open-login-modal");
const therapistLoginForm = document.querySelector("#therapist-login-form");
const therapistLoginEmailInput = document.querySelector("#therapist-login-email-input");
const therapistLoginPasswordInput = document.querySelector("#therapist-login-password-input");
const loginModalStatus = document.querySelector("#login-modal-status");
const LANGUAGE_FILTERS = [
  { label: "English", aliases: ["English"] },
  { label: "Español", aliases: ["Spanish", "Espanol", "Español"] },
  { label: "Русский", aliases: ["Russian", "Русский"] },
  { label: "中文", aliases: ["Chinese", "Mandarin", "中文"] },
  { label: "العربية", aliases: ["Arabic", "العربية"] },
  { label: "தமிழ்", aliases: ["Tamil", "தமிழ்"] },
  { label: "اردو", aliases: ["Urdu", "اردو"] },
  { label: "हिंदी", aliases: ["Hindi", "हिंदी"] },
  { label: "ਪੰਜਾਬੀ", aliases: ["Punjabi", "ਪੰਜਾਬੀ"] },
  { label: "Bilingual", aliases: ["Bilingual"] }
];
const state = {
  therapists: [],
  filteredTherapists: [],
  displayedTherapists: [],
  currentPage: 1,
  showingRecommendations: false,
  filters: {
    search: "",
    state: [],
    sessionFormat: [],
    population: [],
    modalities: [],
    specialties: [],
    languages: [],
    therapyTypes: [],
    pronouns: [], gender: [], culturalBackground: [], religiousBackground: [], faithIntegrated: [],
    availability: [],
    priceMin: 0,
    priceMax: 300
  },
  options: {
    state: [],
    sessionFormat: [],
    population: [],
    modalities: [],
    specialties: [],
    languages: [],
    therapyTypes: [],
    pronouns: [], gender: [], culturalBackground: [], religiousBackground: [], faithIntegrated: [],
    availability: []
  }
};

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.classList.toggle("is-open", !isOpen);
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.classList.remove("is-open");
      mobileMenu.hidden = true;
    });
  });
}

if (footerYear) {
  footerYear.textContent = "© " + new Date().getFullYear() + " Footprints to Feel Better";
}

const elements = {
  searchInput: document.querySelector("#therapist-search"),
  cardsGrid: document.querySelector("#cards-grid"),
  resultsCount: document.querySelector("#results-count"),
  pagination: document.querySelector("#pagination"),
  activeFilters: document.querySelector("#active-filters"),
  noResults: document.querySelector("#no-results"),
  openFiltersButton: document.querySelector("#open-filters"),
  closeFiltersButton: document.querySelector("#close-filters"),
  mobileFilters: document.querySelector("#mobile-filters"),
  mobileBackdrop: document.querySelector("#mobile-filters-backdrop"),
  applyMobileFilters: document.querySelector("#apply-mobile-filters"),
  // Price controls temporarily disabled while pricing structure is being revised.
  priceMin: null,
  priceMax: null,
  mobilePriceMin: null,
  mobilePriceMax: null,
  priceOutput: null,
  mobilePriceOutput: null,
  optionBuckets: {
    state: [document.querySelector("#state-options"), document.querySelector("#mobile-state-options")],
    sessionFormat: [document.querySelector("#sessionFormat-options"), document.querySelector("#mobile-sessionFormat-options")],
    population: [document.querySelector("#population-options"), document.querySelector("#mobile-population-options")],
    modalities: [document.querySelector("#modalities-options"), document.querySelector("#mobile-modalities-options")],
    specialties: [document.querySelector("#specialties-options"), document.querySelector("#mobile-specialties-options")],
    languages: [document.querySelector("#languages-options"), document.querySelector("#mobile-languages-options")],
    therapyTypes: [document.querySelector("#therapyTypes-options"), document.querySelector("#mobile-therapyTypes-options")],
    pronouns: [document.querySelector("#pronouns-options"), document.querySelector("#mobile-pronouns-options")],
    gender: [document.querySelector("#gender-options"), document.querySelector("#mobile-gender-options")],
    culturalBackground: [document.querySelector("#culturalBackground-options"), document.querySelector("#mobile-culturalBackground-options")],
    religiousBackground: [document.querySelector("#religiousBackground-options"), document.querySelector("#mobile-religiousBackground-options")],
    faithIntegrated: [document.querySelector("#faithIntegrated-options"), document.querySelector("#mobile-faithIntegrated-options")],
    availability: [document.querySelector("#availability-options"), document.querySelector("#mobile-availability-options")]
  }
};

const fallbackTherapists = [
  {
    id: "siham-abdelqader",
    name: "Siham Abdelqader",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Siham%20Pic%202.jpg/:/cr=t:9.58%25,l:0%25,w:100%25,h:50.13%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-LP",
    location: "NY",
    specialties: ["Depression", "Anxiety", "Trauma"],
    languages: ["English", "Arabic"],
    therapyTypes: ["Individual", "Family"],
    availability: "Available",
    summary: "Values multiculturalism, cultural awareness, compassion, and empathy. Experienced supporting clients with depression, anxiety, trauma, self-esteem, stress management, and family or marital conflicts."
  },
  {
    id: "diana-abrams",
    name: "Diana Abrams",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Diana_Abrams.jpg/:/cr=t:21.8%25,l:0%25,w:100%25,h:56.39%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-LP",
    location: "NJ",
    specialties: ["Trauma", "Empowerment", "Personal Growth"],
    languages: ["English"],
    therapyTypes: ["Individual", "Trauma-Informed"],
    availability: "Limited",
    summary: "Creates a safe space where clients feel seen, heard, and empowered. Practices from a trauma-informed lens with empathy, cultural humility, and collaboration."
  },
  {
    id: "kevin-adams",
    name: "Kevin Adams",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Kevin%20Adams%20.webp/:/cr=t:0.43%25,l:0%25,w:100%25,h:75.08%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-LP",
    location: "FL",
    specialties: ["Person-Centered", "Group Therapy", "Multicultural"],
    languages: ["English"],
    therapyTypes: ["Individual", "Group"],
    availability: "Available",
    summary: "Follows a person-centered approach and believes treatment plans should be tailored to each client. Brings a versatile style and works across cultures and group settings."
  },
  {
    id: "carol-aiuto",
    name: "Carol Aiuto",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Carol%20Aiuto%20.webp/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-I",
    location: "NY",
    specialties: ["CBT", "Life Coaching", "Strengths"],
    languages: ["English"],
    therapyTypes: ["Individual", "Supportive"],
    availability: "Available",
    summary: "Brings over five years of coaching experience and dual master's degrees in school counseling and mental health counseling, with a strong focus on helping people overcome obstacles and realize their potential."
  },
  {
    id: "shamina-aktar",
    name: "Shamina Aktar",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Shamina%20Aktar%20.webp/:/cr=t:0.43%25,l:0%25,w:100%25,h:75.19%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-LP",
    location: "CT",
    specialties: ["Trauma", "Substance Use", "Anxiety"],
    languages: ["English"],
    therapyTypes: ["Individual", "CBT"],
    availability: "Waitlist",
    summary: "Works to help clients feel safe, heard, and understood in a supportive, judgement-free environment. Draws from person-centered, motivational interviewing, CBT, and solution-focused approaches."
  },
  {
    id: "lourdyes-alger",
    name: "Lourdyes Alger",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Lourdyes%20Alger%20-d726671.webp",
    title: "Partner-LMHC",
    location: "NV",
    specialties: ["Trauma", "Anxiety", "Depression"],
    languages: ["English", "Spanish"],
    therapyTypes: ["Individual", "Mindfulness"],
    availability: "Available",
    summary: "Has over eight years of psychotherapy experience and uses person-centered, cognitive behavioral, and mindfulness approaches with children and adults working through trauma, anxiety, and depression."
  },
  {
    id: "marie-allen",
    name: "Marie Allen",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Marie%20Allen.webp/:/cr=t:0%25,l:0%25,w:100%25,h:75.19%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-LP",
    location: "NJ",
    specialties: ["Personalized Care", "Counseling", "Support"],
    languages: ["English"],
    therapyTypes: ["Individual", "Supportive"],
    availability: "Limited",
    summary: "Brings more than 20 years of expertise to mental health counseling and focuses on creating supportive environments with personalized therapeutic interventions tailored to each person's needs."
  },
  {
    id: "nicole-allen",
    name: "Nicole Allen",
    image: "data/portraits/portrait.svg",
    title: "MHC-I",
    location: "FL",
    specialties: ["Client Care", "Case Management", "Life Challenges"],
    languages: ["English"],
    therapyTypes: ["Individual", "Supportive"],
    availability: "Available",
    summary: "Brings a strong foundation in interpersonal communication and a deep commitment to helping people navigate difficult circumstances with compassionate, client-centered support."
  },
  {
    id: "asma-ansari",
    name: "Asma Ansari",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Asma%20Ansari.jpg/:/cr=t:35.05%25,l:17.53%25,w:64.94%25,h:32.54%25/rs=w:388,h:291.72932330827064,cg:true,m",
    title: "Psychotherapist",
    location: "CT",
    specialties: ["CBT", "DBT", "Mindfulness"],
    languages: ["English"],
    therapyTypes: ["Individual", "ACT"],
    availability: "Available",
    summary: "Blends traditional approaches like CBT and DBT with Internal Family Systems, ACT, mindfulness, and body-based awareness, helping clients reconnect with themselves through compassion and collaboration."
  },
  {
    id: "ray-ansarul",
    name: "Ray Ansarul",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Ray%20Ansarul%20.webp/:/cr=t:12.35%25,l:0%25,w:100%25,h:75.29%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-I",
    location: "NY",
    specialties: ["Compassion", "Collaboration", "Supportive Care"],
    languages: ["English"],
    therapyTypes: ["Individual", "Supportive"],
    availability: "Waitlist",
    summary: "Strives to create a safe, compassionate, and understanding space, with a strong belief that effective therapy grows from a trusting therapeutic relationship and collaborative pacing."
  },
  {
    id: "jean-antoine",
    name: "Jean Antoine",
    image: "https://img1.wsimg.com/isteam/ip/be3b4275-20eb-4372-92a9-bcc3a138027c/Jean%20Antoine.png/:/cr=t:16.42%25,l:0%25,w:100%25,h:56.12%25/rs=w:388,h:291.72932330827064,cg:true",
    title: "MHC-LP",
    location: "NV",
    specialties: ["Anxiety", "Chronic Illness", "CBT"],
    languages: ["English"],
    therapyTypes: ["Individual", "Person-Centered"],
    availability: "Available",
    summary: "Offers a safe and open space to build rapport and work through current stressors, using cognitive behavioral therapy and person-centered therapy to support anxiety, chronic illness, and emotional processing."
  },
  {
    id: "lashonne-small",
    name: "Lashonne Small",
    image: "data/portraits/portrait.svg",
    title: "MHC-LP",
    location: "FL",
    specialties: ["Adolescents", "Couples", "Families"],
    languages: ["English"],
    therapyTypes: ["Individual", "Couples"],
    availability: "Limited",
    summary: "Creates a supportive space for individuals, adolescents, couples, and families to work through life changes, improve communication, and build healthier, more confident relationships."
  }
];

async function init() {
  attachEventListeners();
  syncRangeInputs();
  state.therapists = await loadTherapists();
  state.options = buildFilterOptions(state.therapists);
  hydrateStateFromUrl();
  renderFilterOptions();
  render();
}

async function loadTherapists() {
  const therapists = await window.therapistDataApi.loadTherapists({
    includeImages: false,
    fallbackUrl: "data/therapists.json",
    fallbackData: fallbackTherapists
  });
  return therapists.map(applyFilterOverlay);
}

/* ---- Extra filter data (therapist-filters.js) matched by therapist name ---- */
function normalizePersonName(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\b1099\b/g, " ")
    .replace(/[^a-z\s()-]/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getNameVariants(value) {
  const normalized = normalizePersonName(value);
  const withoutParens = normalized.replace(/\([^)]*\)/g, " ").replace(/\s+/g, " ").trim();
  const variants = [withoutParens];
  (normalized.match(/\(([^)]*)\)/g) || []).forEach((group) => {
    const inner = group.replace(/[()]/g, "").trim();
    if (inner.split(" ").length > 1) {
      variants.push(inner);
    }
  });
  return variants.filter(Boolean).map((name) => name.split(" ").filter(Boolean));
}

let filterOverlayIndex = null;
function getFilterOverlayIndex() {
  if (!filterOverlayIndex) {
    const records = Array.isArray(window.THERAPIST_FILTER_DATA) ? window.THERAPIST_FILTER_DATA : [];
    filterOverlayIndex = records.map((record) => ({
      record,
      variants: [record.name, ...(Array.isArray(record.aliases) ? record.aliases : [])].flatMap(getNameVariants)
    }));
  }
  return filterOverlayIndex;
}

function findFilterOverlay(therapistName) {
  const targets = getNameVariants(therapistName);
  if (!targets.length) {
    return null;
  }
  const index = getFilterOverlayIndex();
  const exact = (a, b) => a.join(" ") === b.join(" ");
  const firstLast = (a, b) => a.length > 1 && b.length > 1 && a[0] === b[0] && a[a.length - 1] === b[b.length - 1];
  const containsAll = (a, b) => a.length > 1 && b.length > 1 && a[0] === b[0] && b.every((token) => a.includes(token));
  const similarLast = (a, b) => a.length > 1 && b.length > 1 && a[0] === b[0] && a[a.length - 1].slice(0, 3) === b[b.length - 1].slice(0, 3);
  for (const matcher of [exact, firstLast, containsAll, (a, b) => containsAll(b, a), similarLast]) {
    const match = index.find(({ variants }) => variants.some((variant) => targets.some((target) => matcher(target, variant))));
    if (match) {
      return match.record;
    }
  }
  return null;
}


// Only explicit, public-display-approved identity values belong in this public data file.
// Omit private values entirely at publication; never derive gender from pronouns.
const PUBLIC_IDENTITY_FILTER_KEYS = ["pronouns", "gender", "culturalBackground", "religiousBackground"];
function findPublicIdentityRecord(name) {
  const normalize = value => String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z]+/g, " ").trim();
  const target = normalize(name);
  if (!target) return null;
  const records = Array.isArray(window.THERAPIST_FILTER_DATA) ? window.THERAPIST_FILTER_DATA : [];
  const matches = records.filter(record => Array.isArray(record.identityProfileNames) && record.identityProfileNames.some(alias => normalize(alias) === target));
  return matches.length === 1 ? matches[0] : null;
}
function getPublicIdentityValues(record, field) {
  const identity = record && record.identifiesAs;
  if (!identity || !identity.publicDisplay || identity.publicDisplay[field] !== true) return [];
  const values = Array.isArray(identity[field]) ? identity[field] : identity[field] ? [identity[field]] : [];
  return [...new Set(values.filter(value => typeof value === "string").map(value => value.trim()).filter(value => value && !/^(prefer not to (disclose|say)|private|not disclosed|not provided|unknown)$/i.test(value)))];
}
function identityFilterFields(name) {
  const record = findPublicIdentityRecord(name);
  return { pronouns: [...new Set(getPublicIdentityValues(record, "pronouns").map(value => ({ "she/her": "She/Her", "he/him": "He/Him", "they/them": "They/Them" })[value.toLowerCase()] || value))], gender: getPublicIdentityValues(record, "gender"), culturalBackground: getPublicIdentityValues(record, "ethnicity"), religiousBackground: getPublicIdentityValues(record, "faith") };
}

function applyFilterOverlay(therapist) {
  if (!therapist) {
    return therapist;
  }
  const overlay = findFilterOverlay(therapist.name);
  return {
    ...therapist,
    ...identityFilterFields(therapist.name),
    specialties: normalizeSpecialties(Array.isArray(overlay?.specialties) ? overlay.specialties : therapist.specialties),
    faithIntegrated: (findPublicIdentityRecord(therapist.name)?.modalities || []).includes("Christian Counseling") ? ["Offers faith-integrated therapy"] : [],
    location: therapist.location || (overlay && overlay.state) || "",
    locations: [...new Set([therapist.location, overlay && overlay.state].filter(Boolean))],
    sessionFormat: overlay && Array.isArray(overlay.sessionFormat) && overlay.sessionFormat.length ? overlay.sessionFormat : ["Virtual"],
    population: overlay && Array.isArray(overlay.population) ? overlay.population : [],
    modalities: normalizeModalities(overlay && Array.isArray(overlay.modalities) ? overlay.modalities : [])
  };
}

function sortByPreferredOrder(values, order) {
  return [...values].sort((a, b) => {
    const left = order.indexOf(a);
    const right = order.indexOf(b);
    if (left === -1 && right === -1) {
      return a.localeCompare(b);
    }
    if (left === -1) {
      return 1;
    }
    if (right === -1) {
      return -1;
    }
    return left - right;
  });
}

function buildFilterOptions(therapists) {
  const optionMap = {
    state: new Set(),
    sessionFormat: new Set(),
    population: new Set(),
    modalities: new Set(),
    specialties: new Set(),
    languages: new Set(),
    therapyTypes: new Set(),
    pronouns: new Set(), gender: new Set(), culturalBackground: new Set(), religiousBackground: new Set(), faithIntegrated: new Set(),
    availability: new Set()
  };

  therapists.forEach((therapist) => {
    if (!therapist.title || !therapist.title.trim()) return;
    ["pronouns", "gender", "culturalBackground", "religiousBackground", "faithIntegrated"].forEach(key => (therapist[key] || []).forEach(value => optionMap[key].add(value)));
    LOCATION_OPTIONS.forEach((item) => optionMap.state.add(item));
    (therapist.sessionFormat || []).forEach((item) => optionMap.sessionFormat.add(item));
    (therapist.population || []).forEach((item) => optionMap.population.add(item));
    (therapist.modalities || []).forEach((item) => optionMap.modalities.add(item));
    normalizeSpecialties(therapist.specialties).forEach((item) => optionMap.specialties.add(item));
    therapist.languages.forEach((item) => {
      const matchedLanguage = LANGUAGE_FILTERS.find((language) => language.aliases.includes(item));
      optionMap.languages.add(matchedLanguage ? matchedLanguage.label : item);
    });
    if (therapist.languages.length > 1) {
      optionMap.languages.add("Bilingual");
    }
    therapist.therapyTypes.forEach((item) => optionMap.therapyTypes.add(item));
    optionMap.availability.add(therapist.availability);
  });

  MODALITY_CHOICES.forEach(value => optionMap.modalities.add(value));
  Object.values(SPECIALTY_GROUPS).flat().forEach(value => optionMap.specialties.add(value));
  PRONOUN_CHOICES.forEach(value => optionMap.pronouns.add(value));
  LANGUAGE_FILTERS.forEach((language) => optionMap.languages.add(language.label));

  [...optionMap.languages].filter(value => /^bilingual$/i.test(value.trim())).forEach(value => optionMap.languages.delete(value));
  [...optionMap.religiousBackground].filter(value => /^none$/i.test(value.trim())).forEach(value => optionMap.religiousBackground.delete(value));

  return Object.fromEntries(
    Object.entries(optionMap).map(([key, values]) => {
      if (key === "state") {
        return [key, LOCATION_OPTIONS.filter((item) => values.has(item))];
      }

      if (key === "sessionFormat") {
        return [key, sortByPreferredOrder(values, SESSION_FORMAT_ORDER)];
      }

      if (key === "population") {
        return [key, sortByPreferredOrder(values, POPULATION_ORDER)];
      }

      if (key === "modalities") return [key, sortByPreferredOrder(values, MODALITY_CHOICES)];
      if (key === "pronouns") return [key, sortByPreferredOrder(values, PRONOUN_CHOICES)];
      if (key === "gender") return [key, sortByPreferredOrder(values, ["Woman", "Man", "Nonbinary"])];
      if (key === "culturalBackground") return [key, sortByPreferredOrder(values, ["White", "Black", "Latino/Latina", "South Asian", "East Asian", "South East Asian", "Indigenous", "Other"])];
      if (key === "religiousBackground") return [key, sortByPreferredOrder(values, ["Christian", "Muslim", "Jewish", "Spiritual", "None", "Other"])];
      if (key !== "languages") {
        return [key, [...values].sort((a, b) => a.localeCompare(b))];
      }

      const orderedLanguages = [
        ...LANGUAGE_FILTERS.map((language) => language.label).filter((label) => values.has(label)),
        ...[...values]
          .filter((label) => !LANGUAGE_FILTERS.some((language) => language.label === label))
          .sort((a, b) => a.localeCompare(b))
      ];

      return [key, orderedLanguages];
    })
  );
}

function normalizeLanguageValue(value) {
  return String(value || "").trim().toLowerCase();
}

function expandLanguageValue(value) {
  const normalized = normalizeLanguageValue(value);
  if (!normalized) {
    return [];
  }

  return normalized
    .replace(/\s+and\s+/gi, " ")
    .split(/[\s,\/&+|·]+/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function attachEventListeners() {
  initFilterGroupToggles();
  initMobileFilterAccessibility();
  initLoginModal();
  initTherapistUpdateListener();

  elements.searchInput.addEventListener("input", debounce((event) => {
    state.filters.search = event.target.value.trim();
    render(true);
  }, 120));

  elements.cardsGrid.addEventListener("click", handleCardActionClick);

  document.querySelectorAll("[data-clear-filters]").forEach((button) => {
    button.addEventListener("click", clearAllFilters);
  });

  elements.openFiltersButton.addEventListener("click", openMobileFilters);
  elements.closeFiltersButton.addEventListener("click", closeMobileFilters);
  elements.mobileBackdrop.addEventListener("click", closeMobileFilters);
  elements.applyMobileFilters.addEventListener("click", closeMobileFilters);

  // Price inputs temporarily disabled while pricing structure is being revised.

  elements.activeFilters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-filter]");
    if (!button) {
      return;
    }

    const { key, value } = button.dataset;
    if (key === "search") {
      state.filters.search = "";
      elements.searchInput.value = "";
    } else if (key !== "price") {
      state.filters[key] = state.filters[key].filter((item) => item !== value);
      syncCheckboxes();
    }

    render(true);
  });

  elements.pagination.addEventListener("click", (event) => {
    const button = event.target.closest("[data-page]");
    if (!button) {
      return;
    }

    const nextPage = Number(button.dataset.page);
    if (!Number.isNaN(nextPage)) {
      state.currentPage = nextPage;
      render();
    }
  });
}

function initLoginModal() {
  if (!loginModal || !openLoginModalButton || !therapistLoginForm || !loginModalStatus) {
    return;
  }

  openLoginModalButton.addEventListener("click", openLoginModal);
  loginModal.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-login-modal]")) {
      closeLoginModal();
    }
  });

  therapistLoginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const normalizedEmail = window.therapistDataApi.normalizeStaffEmail(therapistLoginEmailInput.value);

    if (!window.therapistDataApi.isAllowedStaffEmail(normalizedEmail)) {
      loginModalStatus.textContent = `Only @${window.therapistDataApi.STAFF_EMAIL_DOMAIN} email addresses can sign in.`;
      therapistLoginEmailInput.focus();
      return;
    }

    loginModalStatus.textContent = "Signing in...";
    const result = await window.therapistDataApi.loginWithPassword(
      normalizedEmail,
      therapistLoginPasswordInput.value
    );

    if (result.error) {
      loginModalStatus.textContent = result.error.message;
      return;
    }

    loginModalStatus.textContent = "Sign-in successful. Redirecting to the therapist portal...";
    const portalUrl = new URL("therapist-portal.html", window.location.href);
    window.location.href = portalUrl.toString();
  });

  initPasswordToggles(loginModal);
}

function openLoginModal() {
  loginModal.classList.remove("hidden");
  loginModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  loginModalStatus.textContent = `Use your @${window.therapistDataApi.STAFF_EMAIL_DOMAIN} email to sign in.`;
  therapistLoginEmailInput.focus();
}

function closeLoginModal() {
  loginModal.classList.add("hidden");
  loginModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initPasswordToggles(scope) {
  scope.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      if (!target) {
        return;
      }

      const shouldShow = target.type === "password";
      target.type = shouldShow ? "text" : "password";
      button.textContent = shouldShow ? "Hide" : "Show";
      button.setAttribute("aria-label", shouldShow ? "Hide password" : "Show password");
    });
  });
}

function initFilterGroupToggles() {
  document.querySelectorAll(".filter-group-toggle").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isExpanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!isExpanded));
    });
  });
}

function handleCardActionClick(event) {
  const profileButton = event.target.closest("[data-view-profile]");
  if (profileButton) {
    const therapistId = profileButton.dataset.therapistId;
    if (!therapistId) {
      return;
    }

    const profileUrl = new URL("therapist-profile.html", window.location.href);
    profileUrl.searchParams.set("therapist", therapistId);
    window.location.href = profileUrl.toString();
    return;
  }

  const bookButton = event.target.closest("[data-book-consultation]");
  if (!bookButton) {
    return;
  }

  const therapistId = bookButton.dataset.therapistId;
  if (!therapistId) {
    return;
  }

  const bookingUrl = new URL("book-consultation.html", window.location.href);
  bookingUrl.searchParams.set("therapist", therapistId);
  window.location.href = bookingUrl.toString();
}

function renderFilterOptions() {
  FILTER_KEYS.forEach(key => {
    (elements.optionBuckets[key] || []).filter(Boolean).forEach(bucket => {
      if (key === "gender") bucket.closest(".filter-group").hidden = !state.options.gender.length;
      bucket.replaceChildren(createCheckboxFragment(key, state.options[key]));
    });
  });
  syncCheckboxes();
}

function createCheckboxFragment(groupKey, values) {
  const fragment = document.createDocumentFragment();
  if (groupKey === "gender" && !values.length) {
    const note = document.createElement("p");
    note.className = "identity-filter-note";
    note.textContent = "No gender details have been shared for public filtering yet.";
    fragment.appendChild(note);
  }
  if (groupKey === "specialties") {
    Object.entries(SPECIALTY_GROUPS).forEach(([heading, choices]) => {
      const fieldset = document.createElement("fieldset"); fieldset.className = "specialty-subgroup";
      const legend = document.createElement("legend"); legend.textContent = heading; fieldset.appendChild(legend);
      const options = document.createElement("div"); options.className = "filter-options";
      options.appendChild(createCheckboxFragment("specialtyChoices", choices.filter(value => values.includes(value)))); fieldset.appendChild(options); fragment.appendChild(fieldset);
    });
    return fragment;
  }
  values.forEach(value => {
    const label = document.createElement("label"); label.className = "filter-checkbox";
    const input = document.createElement("input"); input.type = "checkbox"; input.value = value; input.dataset.filterGroup = groupKey === "specialtyChoices" ? "specialties" : groupKey;
    const span = document.createElement("span"); span.textContent = groupKey === "languages" ? languageDisplayLabel(value) : groupKey === "pronouns" ? pronounDisplayLabel(value) : value;
    input.addEventListener("change", handleCheckboxChange); label.append(input, span); fragment.appendChild(label);
  });
  return fragment;
}

function handleCheckboxChange(event) {
  const { filterGroup } = event.target.dataset;
  const { value, checked } = event.target;
  const selected = new Set(state.filters[filterGroup]);

  if (checked) {
    selected.add(value);
  } else {
    selected.delete(value);
  }

  state.filters[filterGroup] = [...selected];
  syncCheckboxes();
  render(true);
}

function handlePriceInput(event) {
  const isMin = event.target.id.includes("min");
  const currentValue = Number(event.target.value);
  const minValue = Number(elements.priceMin.value);
  const maxValue = Number(elements.priceMax.value);

  if (isMin) {
    state.filters.priceMin = Math.min(currentValue, maxValue);
    if (currentValue > maxValue) {
      state.filters.priceMax = currentValue;
    }
  } else {
    state.filters.priceMax = Math.max(currentValue, minValue);
    if (currentValue < minValue) {
      state.filters.priceMin = currentValue;
    }
  }

  syncRangeInputs();
  render(true);
}

function syncCheckboxes() {
  document.querySelectorAll("[data-filter-group]").forEach((checkbox) => {
    const { filterGroup } = checkbox.dataset;
    checkbox.checked = state.filters[filterGroup].includes(checkbox.value);
  });
}

function syncRangeInputs() {
  if (!elements.priceMin || !elements.priceMax || !elements.mobilePriceMin || !elements.mobilePriceMax
    || !elements.priceOutput || !elements.mobilePriceOutput) {
    return;
  }

  const min = state.filters.priceMin;
  const max = state.filters.priceMax;

  elements.priceMin.value = String(min);
  elements.priceMax.value = String(max);
  elements.mobilePriceMin.value = String(min);
  elements.mobilePriceMax.value = String(max);

  const label = `${formatPrice(min)} - ${max >= 300 ? "$300+" : formatPrice(max)}`;
  elements.priceOutput.value = label;
  elements.mobilePriceOutput.value = label;
}

function hydrateStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const searchValue = params.get("search");
  if (searchValue) {
    state.filters.search = searchValue;
    elements.searchInput.value = searchValue;
  }

  FILTER_KEYS.forEach((key) => {
    if (PUBLIC_IDENTITY_FILTER_KEYS.includes(key) || key === "faithIntegrated") {
      state.filters[key] = params.getAll(key).filter(value => state.options[key].includes(value));
      if (key === "gender") state.filters[key] = state.filters[key].slice(0, 1);
      return;
    }
    const raw = params.get(key);
    if (!raw) {
      return;
    }
    state.filters[key] = raw.split(",").map((item) => decodeURIComponent(item)).filter(Boolean);
    if (key === "modalities") state.filters[key] = normalizeModalities(state.filters[key]);
    if (key === "specialties") state.filters[key] = normalizeSpecialties(state.filters[key]).filter(value => state.options.specialties.includes(value));
  });

  const urlPage = Number(params.get("page"));
  if (!Number.isNaN(urlPage) && urlPage > 0) {
    state.currentPage = urlPage;
  }

  syncRangeInputs();
}

function updateUrlFromState() {
  const params = new URLSearchParams();

  if (state.filters.search) {
    params.set("search", state.filters.search);
  }

  FILTER_KEYS.forEach((key) => {
    if (state.filters[key].length) {
      if (PUBLIC_IDENTITY_FILTER_KEYS.includes(key) || key === "faithIntegrated") state.filters[key].forEach(value => params.append(key, value));
      else params.set(key, state.filters[key].join(","));
    }
  });

  if (state.currentPage > 1) {
    params.set("page", String(state.currentPage));
  }

  const query = params.toString();
  const nextUrl = query ? `${window.location.pathname}?${query}` : window.location.pathname;
  window.history.replaceState({}, "", nextUrl);
}

function render(resetPage = false) {
  state.filteredTherapists = getFilteredTherapists();

  state.showingRecommendations = false;
  state.displayedTherapists = state.filteredTherapists;

  const totalPages = state.showingRecommendations
    ? 1
    : Math.max(1, Math.ceil(state.displayedTherapists.length / PAGE_SIZE));

  if (resetPage || state.showingRecommendations) {
    state.currentPage = 1;
  } else {
    state.currentPage = Math.min(state.currentPage, totalPages);
  }

  const paginatedTherapists = state.showingRecommendations
    ? state.displayedTherapists
    : paginateTherapists(state.displayedTherapists, state.currentPage);

  updateUrlFromState();
  renderCardsSafe(paginatedTherapists);
  hydrateVisibleTherapistImagesFromDb(paginatedTherapists);
  renderResultsCount(state.filteredTherapists.length, state.displayedTherapists.length, state.showingRecommendations);
  renderActiveFilters();
  renderPagination(totalPages);
  toggleNoResults(state.filteredTherapists.length === 0);
}

function getFilteredTherapists() {
  return state.therapists.filter((therapist) => {
    const hasDisplayTitle = typeof therapist.title === "string" && therapist.title.trim().length > 0;
    if (!hasDisplayTitle) {
      return false;
    }

    const searchTerm = state.filters.search.toLowerCase();
    const matchesSearch = !searchTerm || [
      therapist.name,
      therapist.title,
      therapist.location,
      ...therapist.specialties,
      ...therapist.languages,
      ...therapist.therapyTypes,
      ...(therapist.population || []),
      ...(therapist.modalities || [])
    ].join(" ").toLowerCase().includes(searchTerm);

    const wantsVirtual = !state.filters.sessionFormat.length || state.filters.sessionFormat.includes("Virtual");
    const servesAllLocationsVirtually = wantsVirtual && (therapist.sessionFormat || []).includes("Virtual");
    const matchesState = !state.filters.state.length
      || servesAllLocationsVirtually
      || (therapist.locations || [therapist.location]).some((item) => state.filters.state.includes(item));
    const matchesSessionFormat = !state.filters.sessionFormat.length
      || (therapist.sessionFormat || []).some((item) => state.filters.sessionFormat.includes(item));
    const matchesPopulation = !state.filters.population.length
      || (therapist.population || []).some((item) => state.filters.population.includes(item));
    const matchesModalities = !state.filters.modalities.length
      || (therapist.modalities || []).some((item) => state.filters.modalities.includes(item));
    const matchesSpecialties = !state.filters.specialties.length
      || normalizeSpecialties(therapist.specialties).some((item) => state.filters.specialties.includes(item));
    const matchesLanguages = !state.filters.languages.length
      || state.filters.languages.some((language) => matchesLanguageFilter(therapist.languages, language));
    const matchesTherapyTypes = !state.filters.therapyTypes.length
      || therapist.therapyTypes.some((item) => state.filters.therapyTypes.includes(item));
    const matchesPublicPreferences = ["pronouns", "gender", "culturalBackground", "religiousBackground", "faithIntegrated"].every(key => key === "pronouns" ? matchesPronouns(therapist.pronouns || [], state.filters.pronouns) : !state.filters[key].length || (therapist[key] || []).some(value => state.filters[key].includes(value)));
    const matchesAvailability = !state.filters.availability.length
      || state.filters.availability.includes(therapist.availability);
    return [
      matchesSearch,
      matchesState,
      matchesSessionFormat,
      matchesPopulation,
      matchesModalities,
      matchesSpecialties,
      matchesLanguages,
      matchesTherapyTypes,
      matchesAvailability,
      matchesPublicPreferences
    ].every(Boolean);
  });
}

function getRecommendedTherapists(minimumCount = 3) {
  const searchTerm = state.filters.search.toLowerCase();
  const scored = state.therapists
    .filter((therapist) => typeof therapist.title === "string" && therapist.title.trim().length > 0)
    .map((therapist) => {
      let score = 0;

      if (searchTerm) {
        const haystack = [
          therapist.name,
          therapist.title,
          therapist.location,
          ...therapist.specialties,
          ...therapist.languages,
          ...therapist.therapyTypes
        ].join(" ").toLowerCase();
        if (haystack.includes(searchTerm)) {
          score += 5;
        }
      }

      if ((therapist.locations || [therapist.location]).some((item) => state.filters.state.includes(item))) {
        score += 4;
      }

      score += (therapist.population || []).filter((item) => state.filters.population.includes(item)).length * 3;
      score += (therapist.modalities || []).filter((item) => state.filters.modalities.includes(item)).length * 2;
      score += (therapist.sessionFormat || []).filter((item) => state.filters.sessionFormat.includes(item)).length * 2;
      score += therapist.specialties.filter((item) => state.filters.specialties.includes(item)).length * 3;
      score += state.filters.languages.filter((language) => matchesLanguageFilter(therapist.languages, language)).length * 3;
      score += therapist.therapyTypes.filter((item) => state.filters.therapyTypes.includes(item)).length * 2;

      if (state.filters.availability.includes(therapist.availability)) {
        score += 1;
      }

      return { therapist, score };
    });

  const recommendations = scored
    .sort((left, right) => right.score - left.score || left.therapist.name.localeCompare(right.therapist.name))
    .map((entry) => entry.therapist);

  return recommendations.slice(0, Math.max(minimumCount, PAGE_SIZE));
}

function matchesLanguageFilter(therapistLanguages, selectedLanguage) {
  if (selectedLanguage === "Bilingual") {
    return therapistLanguages.length > 1;
  }

  const languageConfig = LANGUAGE_FILTERS.find((language) => language.label === selectedLanguage);
  if (!languageConfig) {
    const selectedLanguageValue = normalizeLanguageValue(selectedLanguage);
    return therapistLanguages.some((language) => {
      const therapistLanguageValue = normalizeLanguageValue(language);
      return therapistLanguageValue === selectedLanguageValue
        || therapistLanguageValue.includes(selectedLanguageValue)
        || selectedLanguageValue.includes(therapistLanguageValue);
    });
  }

  return therapistLanguages.some((language) => {
    const therapistLanguageValue = normalizeLanguageValue(language);
    const therapistLanguageTokens = expandLanguageValue(language);

    return languageConfig.aliases.some((alias) => {
      const aliasValue = normalizeLanguageValue(alias);
      return therapistLanguageValue === aliasValue
        || therapistLanguageValue.includes(aliasValue)
        || aliasValue.includes(therapistLanguageValue)
        || therapistLanguageTokens.includes(aliasValue);
    });
  });
}

function renderCards(therapists) {
  const fragment = document.createDocumentFragment();

  therapists.forEach((therapist) => {
    const card = document.createElement("article");
    card.className = "therapist-card";
    card.innerHTML = `
      <div class="card-image-wrap">
        <img class="card-image" src="${therapist.image || "data/portraits/portrait.svg"}" alt="${therapist.name}" loading="lazy">
      </div>
      <div class="card-body">
        <h2 class="card-name">${therapist.name}</h2>
        <p class="card-title">${therapist.title || "Footprints Therapist"}</p>
        <div class="card-meta">
          <span>${therapist.location || "Location TBD"}</span>
          <span class="meta-dot" aria-hidden="true"></span>
          <span>${therapist.languages.length ? therapist.languages.join(" · ") : "Language details coming soon"}</span>
        </div>
        <div class="card-tags">
          ${therapist.specialties.slice(0, 3).map((item) => `<span class="chip soft">${item}</span>`).join("")}
        </div>
        <p class="card-summary">${buildTherapistSummary(therapist)}</p>
      </div>
      <div class="card-actions">
        <button
          class="primary-button"
          type="button"
          data-view-profile
          data-therapist-id="${therapist.id}"
        >
          View Profile
        </button>
        <button
          class="secondary-button"
          type="button"
          data-book-consultation
          data-therapist-id="${therapist.id}"
        >
          Book Consultation
        </button>
      </div>
    `;
    const cardImage = card.querySelector(".card-image");
    if (cardImage) {
      cardImage.src = therapist.image || "data/portraits/portrait.svg";
      cardImage.alt = therapist.name;
    }
    fragment.appendChild(card);
  });

  elements.cardsGrid.replaceChildren(fragment);
}

function renderCardsSafe(therapists) {
  const fragment = document.createDocumentFragment();

  therapists.forEach((therapist) => {
    const card = document.createElement("article");
    card.className = "therapist-card";

    const imageWrap = document.createElement("div");
    imageWrap.className = "card-image-wrap";

    const cardImage = document.createElement("img");
    cardImage.className = "card-image";
    cardImage.src = resolveTherapistImage(therapist);
    cardImage.alt = therapist.name;
    cardImage.loading = "lazy";
    cardImage.dataset.therapistId = therapist.id;
    imageWrap.appendChild(cardImage);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const cardName = document.createElement("h2");
    cardName.className = "card-name";
    cardName.textContent = therapist.name;

    const cardTitle = document.createElement("p");
    cardTitle.className = "card-title";
    cardTitle.textContent = therapist.title || "Footprints Therapist";

    const cardMeta = document.createElement("div");
    cardMeta.className = "card-meta";

    const cardLocation = document.createElement("span");
    cardLocation.textContent = therapist.location || "Location TBD";

    const metaDot = document.createElement("span");
    metaDot.className = "meta-dot";
    metaDot.setAttribute("aria-hidden", "true");

    const cardLanguages = document.createElement("span");
    cardLanguages.textContent = therapist.languages.length ? therapist.languages.join(" · ") : "Language details coming soon";

    cardMeta.append(cardLocation, metaDot, cardLanguages);

    const cardTags = document.createElement("div");
    cardTags.className = "card-tags";
    therapist.specialties.slice(0, 3).forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip soft";
      chip.textContent = item;
      cardTags.appendChild(chip);
    });

    const cardSummary = document.createElement("p");
    cardSummary.className = "card-summary";
    cardSummary.textContent = buildTherapistSummary(therapist);

    cardBody.append(cardName, cardTitle, cardMeta, cardTags, cardSummary);

    const cardActions = document.createElement("div");
    cardActions.className = "card-actions";

    const viewProfileButton = document.createElement("button");
    viewProfileButton.className = "primary-button";
    viewProfileButton.type = "button";
    viewProfileButton.dataset.viewProfile = "";
    viewProfileButton.dataset.therapistId = therapist.id;
    viewProfileButton.textContent = "View Profile";

    const bookConsultationButton = document.createElement("button");
    bookConsultationButton.className = "secondary-button";
    bookConsultationButton.type = "button";
    bookConsultationButton.dataset.bookConsultation = "";
    bookConsultationButton.dataset.therapistId = therapist.id;
    bookConsultationButton.textContent = "Book Consultation";

    cardActions.append(viewProfileButton, bookConsultationButton);
    card.append(imageWrap, cardBody, cardActions);
    fragment.appendChild(card);
  });

  elements.cardsGrid.replaceChildren(fragment);
}

function resolveTherapistImage(therapist) {
  const image = String((therapist && therapist.image) || "").trim();
  return getVersionedImageSrc(image || DEFAULT_THERAPIST_IMAGE, therapist && therapist.updatedAt);
}

function initTherapistUpdateListener() {
  window.addEventListener("footprints:therapist-updated", handleTherapistUpdateEvent);
  window.addEventListener("storage", (event) => {
    if (event.key !== window.therapistDataApi.THERAPIST_UPDATE_STORAGE_KEY) {
      return;
    }

    handleTherapistUpdateEvent(event);
  });
}

function handleTherapistUpdateEvent(event) {
  const updatedTherapist = applyFilterOverlay(window.therapistDataApi.parseTherapistUpdateEvent(event));
  if (!updatedTherapist) {
    return;
  }

  let hasVisibleCard = false;
  [state.therapists, state.filteredTherapists, state.displayedTherapists].forEach((collection) => {
    const existingIndex = collection.findIndex((therapist) => therapist.id === updatedTherapist.id);
    if (existingIndex >= 0) {
      collection[existingIndex] = updatedTherapist;
    }
  });

  elements.cardsGrid.querySelectorAll(".card-image").forEach((image) => {
    if (image.dataset.therapistId !== updatedTherapist.id) {
      return;
    }

    hasVisibleCard = true;
    image.src = resolveTherapistImage(updatedTherapist);
    image.alt = updatedTherapist.name;
  });

  if (hasVisibleCard) {
    renderCardsSafe(paginateTherapists(state.displayedTherapists, state.currentPage));
  }
}

function getVersionedImageSrc(src, version) {
  const imageSrc = String(src || "").trim();
  const imageVersion = String(version || "").trim();

  if (!imageSrc || !imageVersion || imageSrc === DEFAULT_THERAPIST_IMAGE || imageSrc.startsWith("data:") || imageSrc.startsWith("blob:")) {
    return imageSrc;
  }

  try {
    const url = new URL(imageSrc, window.location.href);
    url.searchParams.set("v", imageVersion);
    return url.toString();
  } catch (error) {
    return imageSrc;
  }
}

async function hydrateVisibleTherapistImagesFromDb(therapists) {
  const currentRunId = ++imageHydrationRunId;
  const visibleTherapists = therapists.filter((therapist) => therapist.id);

  if (!visibleTherapists.length || !window.therapistDataApi) {
    return;
  }

  const updatedTherapists = await Promise.all(
    visibleTherapists.map((therapist) => window.therapistDataApi.loadTherapistById(therapist.id, {
      fallbackUrl: "data/therapists.json",
      fallbackData: fallbackTherapists
    }).catch(() => null))
  );

  if (currentRunId !== imageHydrationRunId) {
    return;
  }

  updatedTherapists.forEach((updatedTherapist) => {
    if (!updatedTherapist) {
      return;
    }

    const visibleImage = Array.from(elements.cardsGrid.querySelectorAll(".card-image"))
      .find((image) => image.dataset.therapistId === updatedTherapist.id);
    if (visibleImage) {
      visibleImage.src = resolveTherapistImage(updatedTherapist);
      visibleImage.alt = updatedTherapist.name || visibleImage.alt;
    }

    [state.therapists, state.filteredTherapists, state.displayedTherapists].forEach((collection) => {
      const existingTherapist = collection.find((therapist) => therapist.id === updatedTherapist.id);
      if (existingTherapist) {
        existingTherapist.image = updatedTherapist.image;
        existingTherapist.updatedAt = updatedTherapist.updatedAt;
      }
    });
  });
}

function paginateTherapists(therapists, currentPage) {
  const start = (currentPage - 1) * PAGE_SIZE;
  return therapists.slice(start, start + PAGE_SIZE);
}

function buildTherapistSummary(therapist) {
  if (therapist.summary) {
    return therapist.summary;
  }
  const specialties = therapist.specialties.slice(0, 2).join(", ");
  const therapyTypes = therapist.therapyTypes.slice(0, 2).join(" and ");
  if (specialties && therapyTypes) {
    return `Specializes in ${specialties}. Offers ${therapyTypes.toLowerCase()} sessions.`;
  }
  if (specialties) {
    return `Specializes in ${specialties}.`;
  }
  if (therapyTypes) {
    return `Offers ${therapyTypes.toLowerCase()} sessions.`;
  }
  return "Profile details are being updated.";
}

function renderResultsCount(totalMatches, displayedCount, showingRecommendations) {
  if (showingRecommendations) {
    const noun = displayedCount === 1 ? "therapist" : "therapists";
    elements.resultsCount.textContent = `Showing ${displayedCount} recommended ${noun}`;
    return;
  }

  const noun = totalMatches === 1 ? "therapist" : "therapists";
  elements.resultsCount.textContent = `Showing ${totalMatches} ${noun}`;
}

function renderPagination(totalPages) {
  if (state.showingRecommendations || state.filteredTherapists.length === 0 || totalPages <= 1) {
    elements.pagination.classList.add("hidden");
    elements.pagination.replaceChildren();
    return;
  }

  const fragment = document.createDocumentFragment();
  const pages = buildPaginationModel(totalPages, state.currentPage);

  fragment.appendChild(createPaginationButton("Prev", Math.max(1, state.currentPage - 1), state.currentPage === 1, true));

  pages.forEach((item) => {
    if (item === "...") {
      const ellipsis = document.createElement("span");
      ellipsis.className = "pagination-ellipsis";
      ellipsis.textContent = "...";
      fragment.appendChild(ellipsis);
      return;
    }

    fragment.appendChild(createPaginationButton(String(item), item, false, false, item === state.currentPage));
  });

  fragment.appendChild(
    createPaginationButton("Next", Math.min(totalPages, state.currentPage + 1), state.currentPage === totalPages, true)
  );

  elements.pagination.classList.remove("hidden");
  elements.pagination.replaceChildren(fragment);
}

function createPaginationButton(label, page, disabled, isNav, isActive = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `pagination-button${isNav ? " is-nav" : ""}${isActive ? " is-active" : ""}`;
  button.textContent = label;
  button.dataset.page = String(page);
  button.disabled = disabled;
  button.setAttribute("aria-label", `Go to page ${page}`);
  if (isActive) {
    button.setAttribute("aria-current", "page");
  }
  return button;
}

function buildPaginationModel(totalPages, currentPage) {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, index) => index + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, "...", totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, "...", totalPages - 2, totalPages - 1, totalPages];
  }

  return [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages];
}

function renderActiveFilters() {
  const fragment = document.createDocumentFragment();
  const entries = [];

  if (state.filters.search) {
    entries.push({ key: "search", value: state.filters.search, label: `Search: ${state.filters.search}` });
  }

  FILTER_KEYS.forEach((key) => {
    state.filters[key].forEach((value) => entries.push({ key, value, label: value }));
  });

  entries.forEach((entry) => {
    const pill = document.createElement("div");
    pill.className = "filter-pill";
    const text = document.createElement("span"); text.textContent = entry.key === "languages" ? languageDisplayLabel(entry.value) : entry.key === "pronouns" ? pronounDisplayLabel(entry.value) : entry.label;
    const remove = document.createElement("button"); remove.type = "button"; remove.textContent = "X"; remove.setAttribute("aria-label", "Remove " + text.textContent); remove.dataset.removeFilter = ""; remove.dataset.key = entry.key; remove.dataset.value = entry.value;
    pill.append(text, remove);
    fragment.appendChild(pill);
  });

  elements.activeFilters.replaceChildren(fragment);
}

function toggleNoResults(hasNoResults) {
  elements.noResults.classList.toggle("hidden", !hasNoResults);
}

function hasActiveFilters() {
  return Boolean(state.filters.search)
    || FILTER_KEYS.some((key) => state.filters[key].length > 0);
}

function clearAllFilters() {
  state.filters = {
    search: "",
    state: [],
    sessionFormat: [],
    population: [],
    modalities: [],
    specialties: [],
    languages: [],
    therapyTypes: [],
    pronouns: [], gender: [], culturalBackground: [], religiousBackground: [], faithIntegrated: [],
    availability: [],
    priceMin: 0,
    priceMax: 300
  };
  elements.searchInput.value = "";
  syncCheckboxes();
  syncRangeInputs();
  render(true);
}


let mobileFilterReturnFocus = null;
function setFilterBackgroundInert(value) {
  [...document.body.children].forEach(element => {
    if (element === elements.mobileFilters || element === elements.mobileBackdrop || element.tagName === "SCRIPT") return;
    if (value && !element.inert) { element.inert = true; element.dataset.filterInert = "true"; }
    else if (!value && element.dataset.filterInert) { element.inert = false; delete element.dataset.filterInert; }
  });
}
function initMobileFilterAccessibility() {
  elements.mobileFilters.addEventListener("keydown", event => {
    if (event.key === "Escape") { event.preventDefault(); closeMobileFilters(); return; }
    if (event.key !== "Tab") return;
    const targets = [...elements.mobileFilters.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), a[href]')].filter(element => element.getClientRects().length);
    const first = targets[0], last = targets[targets.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  });
}

function openMobileFilters() {
  mobileFilterReturnFocus = document.activeElement;
  elements.mobileFilters.classList.remove("hidden");
  elements.openFiltersButton.setAttribute("aria-expanded", "true");
  setFilterBackgroundInert(true);
  elements.closeFiltersButton.focus();
  elements.mobileBackdrop.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closeMobileFilters() {
  elements.mobileFilters.classList.add("hidden");
  elements.openFiltersButton.setAttribute("aria-expanded", "false");
  setFilterBackgroundInert(false);
  if (mobileFilterReturnFocus && mobileFilterReturnFocus.isConnected) mobileFilterReturnFocus.focus();
  elements.mobileBackdrop.classList.add("hidden");
  document.body.classList.remove("modal-open");
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

function debounce(callback, delay) {
  let timeoutId;
  return (...args) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => callback(...args), delay);
  };
}

init();