export type TreatmentCategory =
  | 'Skin & Medifacials'
  | 'Laser & Peels'
  | 'Hair Restoration';

export interface TreatmentItem {
  slug: string;
  title: string;
  category: TreatmentCategory;
  shortDesc: string;
  overview: string;
  duration: string;
  sessions: string;
  downtime: string;
  idealFor: string[];
  protocolSteps: {
    step: string;
    title: string;
    detail: string;
  }[];
  visualType: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  relatedResultSlug?: string;
}

export interface CarouselVideoItem {
  id: string;
  title: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  durationLabel: string;
  syncGroup: string;
}

export interface BeforeAfterCase {
  id: string;
  slug: string;
  treatmentSlug: string;
  title: string;
  subtitle: string;
  timeframe: string;
  beforeLabel: string;
  afterLabel: string;
  beforeSrc: string;
  afterSrc: string;
  originalCompositeSrc: string;
  clinicalNote: string;
}

export interface ExperienceReelItem {
  id: string;
  title: string;
  procedure: string;
  caption: string;
  videoSrc: string;
  posterSrc: string;
  hasAudio: boolean;
  verifiedType: string;
}

export const CLINIC_INFO = {
  brand: 'ELYSEA',
  fullName: 'ELYSEA Aesthetic Clinic',
  doctorName: 'Dr. Vrujal Mistry',
  doctorCredentials: 'Cosmetologist & Trichologist · Aesthetic Physician',
  doctorSpecialties: 'Skin Treatment | Hair Treatment | Laser Procedures',
  addressLine1: '52, Sharnam Sky,',
  addressLine2: 'Zadeshwar, Bharuch,',
  addressLine3: 'Gujarat – 392001',
  fullAddress: '52, Sharnam Sky, Zadeshwar, Bharuch, Gujarat – 392001',
  phone: '8141115873',
  phoneHref: 'tel:+918141115873',
  whatsappUrl: 'https://wa.me/message/EDHCUQRDUK2OH1',
  hours: 'Monday – Saturday · 10:00 AM – 7:00 PM',
  instagramHandle: '@elysea.aesthetics',
  mapsDirectionsUrl:
    'https://www.google.com/maps/search/?api=1&query=52+Sharnam+Sky+Zadeshwar+Bharuch+Gujarat+392001',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=52%20Sharnam%20Sky%20Zadeshwar%20Bharuch%20Gujarat%20392001&t=&z=15&ie=UTF8&iwloc=&output=embed',
};

export const CAROUSEL_VIDEOS: CarouselVideoItem[] = [
  {
    id: 'reel-hydrafacial-vortex',
    title: 'HydraFacial Vortex Exfoliation',
    category: 'HydraFacial',
    videoSrc: '/videos/hydrafacial-exfoliation.mp4',
    posterSrc: '/videos/hydrafacial-exfoliation.jpg',
    durationLabel: 'Clinical Step 01–02',
    syncGroup: 'hf-vortex',
  },
  {
    id: 'reel-rf-removal',
    title: 'RF Precision Skin Tag Removal',
    category: 'Clinical Procedure',
    videoSrc: '/videos/rf-skin-tag.mp4',
    posterSrc: '/videos/rf-skin-tag.jpg',
    durationLabel: 'Radiofrequency',
    syncGroup: 'rf-tag',
  },
  {
    id: 'reel-serum-infusion',
    title: 'Medical-Grade Serum Infusion',
    category: 'Medifacial',
    videoSrc: '/videos/hydrafacial-infusion.mp4',
    posterSrc: '/videos/hydrafacial-infusion.jpg',
    durationLabel: 'Clinical Step 03',
    syncGroup: 'hf-infusion',
  },
  {
    id: 'reel-led-dome',
    title: 'LED Phototherapy Recovery',
    category: 'Acne & Glow',
    videoSrc: '/videos/led-phototherapy.mp4',
    posterSrc: '/videos/led-phototherapy.jpg',
    durationLabel: 'Clinical Step 04',
    syncGroup: 'led-dome',
  },
  {
    id: 'reel-clinic-sanctuary',
    title: 'ELYSEA Treatment Suite',
    category: 'Zadeshwar, Bharuch',
    videoSrc: '/videos/clinic-sanctuary.mp4',
    posterSrc: '/videos/clinic-sanctuary.jpg',
    durationLabel: 'Inside Clinic',
    syncGroup: 'clinic-tour',
  },
  {
    id: 'reel-deep-extraction',
    title: 'Painless Pore Extraction',
    category: 'Skin Treatment',
    videoSrc: '/videos/hydrafacial-exfoliation.mp4',
    posterSrc: '/videos/hydrafacial-exfoliation.jpg',
    durationLabel: '45 Min Session',
    syncGroup: 'hf-vortex',
  },
  {
    id: 'reel-periocular-rf',
    title: 'Micro-Precision Aesthetic Care',
    category: 'Skin Refinement',
    videoSrc: '/videos/rf-skin-tag.mp4',
    posterSrc: '/videos/rf-skin-tag.jpg',
    durationLabel: 'Targeted RF',
    syncGroup: 'rf-tag',
  },
  {
    id: 'reel-oxygen-hydration',
    title: 'Intense Barrier Hydration',
    category: 'Hydra Medifacial',
    videoSrc: '/videos/hydrafacial-infusion.mp4',
    posterSrc: '/videos/hydrafacial-infusion.jpg',
    durationLabel: 'All Skin Types',
    syncGroup: 'hf-infusion',
  },
];

export const TREATMENTS: TreatmentItem[] = [
  {
    slug: 'skin-medifacials',
    title: 'Skin & Medifacials',
    category: 'Skin & Medifacials',
    shortDesc:
      'Physician-formulated clinical facials pairing medical actives, gentle exfoliation, and phototherapy for resilient skin health.',
    overview:
      'Unlike salon facials that sit solely on the surface, ELYSEA Medifacials are calibrated by Dr. Vrujal Mistry to address barrier dehydration, dullness, uneven texture, and congestion using medical-grade serums and LED phototherapy.',
    duration: '45 – 60 mins',
    sessions: 'Monthly maintenance or pre-event care',
    downtime: 'Zero downtime',
    idealFor: [
      'Dehydrated or environmentally stressed skin',
      'Pre-bridal and milestone luminosity',
      'Sensitive skin needing controlled exfoliation',
      'Uneven surface texture and congestion',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Clinical Skin Assessment',
        detail: 'Barrier evaluation, hydration profiling, and targeted active selection.',
      },
      {
        step: '02',
        title: 'Controlled Exfoliation & Cleansing',
        detail: 'Gentle enzymatic and AHA/BHA resurfacing without barrier stripping.',
      },
      {
        step: '03',
        title: 'Targeted Active Infusion & LED',
        detail: 'Medical serum delivery paired with calming LED phototherapy.',
      },
    ],
    visualType: 'video',
    mediaSrc: '/videos/led-phototherapy.mp4',
    posterSrc: '/videos/led-phototherapy.jpg',
  },
  {
    slug: 'hydrafacial',
    title: 'HydraFacial',
    category: 'Skin & Medifacials',
    shortDesc:
      'Four-step clinical treatment combining AHA/BHA exfoliation, painless vortex extraction, serum infusion, and hydration.',
    overview:
      'HydraFacial at ELYSEA is a structured four-step clinical protocol—never just a basic hydrating facial. It removes dead skin cells and congestion via vortex suction before saturating the skin with medical-grade peptides, antioxidants, and hyaluronic acid, completed under LED phototherapy.',
    duration: '45 mins',
    sessions: '1 session for immediate clarity; monthly for sustained glow',
    downtime: 'Zero downtime',
    idealFor: [
      'Clogged pores, blackheads, and excess sebum',
      'Dull, tired complexion needing instant radiance',
      'Fine dehydration lines across cheeks and forehead',
      'All skin types including sensitive Indian skin tones',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Exfoliation',
        detail: 'Chemical exfoliants including AHAs and BHAs gently loosen surface buildup.',
      },
      {
        step: '02',
        title: 'Vortex Extraction',
        detail: 'Vacuum-assisted painless extraction clears congested pores cleanly.',
      },
      {
        step: '03',
        title: 'Medical Serum Infusion',
        detail: 'Oxygen jet and vortex tip infuse medical-grade hydrating actives.',
      },
      {
        step: '04',
        title: 'LED Phototherapy Seal',
        detail: 'Red LED dome calms skin and amplifies collagen luminosity.',
      },
    ],
    visualType: 'video',
    mediaSrc: '/videos/hydrafacial-exfoliation.mp4',
    posterSrc: '/videos/hydrafacial-exfoliation.jpg',
  },
  {
    slug: 'chemical-peels',
    title: 'Chemical Peels',
    category: 'Laser & Peels',
    shortDesc:
      'Medical resurfacing including Black Peel, salicylic, glycolic, and yellow peels calibrated for Indian skin.',
    overview:
      'Our curated medical peel protocols—including Black Peel for acne-prone skin and brightening combination peels—accelerate controlled cellular turnover, clear persistent comedones, and soften post-acne marks under physician supervision.',
    duration: '25 – 35 mins',
    sessions: '4 – 6 sessions spaced 2–3 weeks apart',
    downtime: 'Minimal flaking for 2–4 days depending on peel depth',
    idealFor: [
      'Active comedonal acne and clogged pores (Black Peel)',
      'Post-inflammatory hyperpigmentation and acne marks',
      'Sun tan and uneven facial tone',
      'Rough skin texture and enlarged pore appearance',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Degreasing & Skin Prep',
        detail: 'Uniform skin preparation ensures predictable, even peel penetration.',
      },
      {
        step: '02',
        title: 'Timed Acid Application',
        detail: 'Physician-monitored layering matched precisely to skin tolerance.',
      },
      {
        step: '03',
        title: 'Neutralisation & Barrier Recovery',
        detail: 'Soothing post-peel recovery balm and broad-spectrum SPF protection.',
      },
    ],
    visualType: 'image',
    mediaSrc: '/images/chemical-peel.jpg',
    relatedResultSlug: 'black-peel-resurfacing',
  },
  {
    slug: 'acne-management',
    title: 'Acne Management',
    category: 'Skin & Medifacials',
    shortDesc:
      'Targeted medical care calming active breakouts, reducing inflammation, and preventing deep post-acne scarring.',
    overview:
      'Acne management at ELYSEA combines clinical dermatological diagnostics, sebum-regulating peels, comedone extraction, LED therapy, and tailored home regimens—delivering visible reduction in active inflammation within days.',
    duration: '30 – 45 mins',
    sessions: 'Personalized 4–8 week clinical plan',
    downtime: 'Minimal to none',
    idealFor: [
      'Active inflammatory papules and pustules',
      'Persistent whiteheads, blackheads, and hormonal flare-ups',
      'Oily, acne-prone adolescent and adult skin',
      'Preventing pigmented marks and pitted scarring',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Root-Cause Consultation',
        detail: 'Evaluating acne grade, triggers, and existing skincare habits.',
      },
      {
        step: '02',
        title: 'In-Clinic Sebum & Inflammation Control',
        detail: 'Targeted peels, sterile extraction, or blue/red LED therapy.',
      },
      {
        step: '03',
        title: 'Daily Barrier Regimen',
        detail: 'Non-comedogenic medical prescription routine to prevent relapse.',
      },
    ],
    visualType: 'image',
    mediaSrc: '/results/acne-after.jpg',
    relatedResultSlug: 'active-acne-day-7',
  },
  {
    slug: 'pigmentation-treatments',
    title: 'Pigmentation Treatments',
    category: 'Laser & Peels',
    shortDesc:
      'Layered brightening protocols addressing melasma, sun spots, under-eye darkness, and post-acne marks.',
    overview:
      'Pigmentation in Indian skin requires cautious, disciplined intervention to prevent rebound darkening. Dr. Vrujal Mistry pairs tyrosinase-inhibiting actives, gentle brightening peels, and RF/precision lesion removal where appropriate.',
    duration: '30 – 45 mins',
    sessions: '4 – 8 sessions',
    downtime: 'Minimal; strict daily sun protection required',
    idealFor: [
      'Melasma and patchy cheek hyperpigmentation',
      'Post-acne dark spots (PIH)',
      'Tanning, uneven skin tone, and solar lentigines',
      'Localized benign pigmented skin tags (RF precision removal)',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Depth Mapping',
        detail: 'Differentiating epidermal vs dermal pigment before selecting modalities.',
      },
      {
        step: '02',
        title: 'Targeted Brightening & Resurfacing',
        detail: 'Medical depigmenting peels and meso-infusions to lift excess melanin.',
      },
      {
        step: '03',
        title: 'Melanin Suppression Maintenance',
        detail: 'Physician-guided antioxidants and strict photoprotection.',
      },
    ],
    visualType: 'image',
    mediaSrc: '/images/pigmentation-serum.jpg',
    relatedResultSlug: 'rf-skin-tag-removal',
  },
  {
    slug: 'laser-hair-reduction',
    title: 'Laser Hair Reduction',
    category: 'Laser & Peels',
    shortDesc:
      'Cooling-tip diode laser sessions calibrated for safe, progressive hair reduction across face and body.',
    overview:
      'Our medical laser hair reduction protocols target melanin in the hair follicle while protecting surrounding skin with integrated contact cooling—delivering visibly finer, sparser regrowth from the very first session.',
    duration: '20 – 60 mins depending on zone',
    sessions: '6 – 8 sessions spaced 4–6 weeks apart',
    downtime: 'Zero downtime; mild transient warmth',
    idealFor: [
      'Facial sideburns, upper lip, chin, and jawline hair',
      'Underarms, arms, legs, and full-body reduction',
      'Ingrown hairs and razor bumps (pseudofolliculitis)',
      'Long-term smooth skin convenience',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Skin & Hair Density Calibration',
        detail: 'Setting laser fluence and pulse width safely for your Fitzpatrick skin type.',
      },
      {
        step: '02',
        title: 'Chilled Gel & Precision Pass',
        detail: 'Contact-cooled handpiece glides smoothly for comfortable follicle targeting.',
      },
      {
        step: '03',
        title: 'Post-Laser Soothing',
        detail: 'Calming botanical gel and sun protection instructions.',
      },
    ],
    visualType: 'image',
    mediaSrc: '/images/laser-hair.jpg',
    relatedResultSlug: 'face-laser-hair-reduction',
  },
  {
    slug: 'hair-fall-treatment',
    title: 'Hair Fall Treatment',
    category: 'Hair Restoration',
    shortDesc:
      'Comprehensive trichology diagnostics and medical scalp protocols to arrest shedding and strengthen follicles.',
    overview:
      'Led by Cosmetologist & Trichologist Dr. Vrujal Mistry, our hair fall program investigates nutritional, hormonal, and scalp-health drivers of telogen effluvium and pattern thinning before combining medical therapy with targeted scalp procedures.',
    duration: '30 – 45 mins',
    sessions: 'Ongoing clinical cycle (3–6 months)',
    downtime: 'Zero downtime',
    idealFor: [
      'Acute post-stress or post-illness hair shedding',
      'Male and female pattern hair thinning',
      'Dandruff, seborrheic scalp, and weak hair shafts',
      'Preventive follicle preservation',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Trichoscopy & History Review',
        detail: 'Detailed scalp evaluation to assess follicle density and miniaturisation.',
      },
      {
        step: '02',
        title: 'Clinical Scalp Stimulation',
        detail: 'Targeted nutrient delivery, low-level therapy, or GFC/PRP pairing.',
      },
      {
        step: '03',
        title: 'Targeted Home Formulation',
        detail: 'Evidence-backed peptide serums and nutritional guidance.',
      },
    ],
    visualType: 'image',
    mediaSrc: '/images/hair-prp.jpg',
  },
  {
    slug: 'prp-gfc',
    title: 'PRP / GFC',
    category: 'Hair Restoration',
    shortDesc:
      'Autologous Platelet-Rich Plasma and Growth Factor Concentrate therapy to revitalize dormant hair follicles.',
    overview:
      'PRP and advanced acellular GFC (Growth Factor Concentrate) harness your own concentrated growth factors in sterile single-use kits to prolong the anagen growth phase, thicken existing hair shafts, and reduce scalp shedding.',
    duration: '45 – 60 mins',
    sessions: '4 – 6 monthly sessions',
    downtime: 'Minimal; avoid hair wash for 24 hours',
    idealFor: [
      'Early to moderate androgenetic alopecia',
      'Widening hair part and crown thinning',
      'Boosting hair density and shaft thickness',
      'Patients seeking natural autologous growth-factor support',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Sterile Blood Draw & Processing',
        detail: 'Precision centrifugation isolates pure platelet-derived growth factors.',
      },
      {
        step: '02',
        title: 'Topical Comfort Preparation',
        detail: 'Numbing protocol ensures a calm, comfortable in-clinic experience.',
      },
      {
        step: '03',
        title: 'Micro-Precision Scalp Placement',
        detail: 'Uniform follicular delivery across thinning zones.',
      },
    ],
    visualType: 'image',
    mediaSrc: '/images/hair-prp.jpg',
  },
  {
    slug: 'mesotherapy',
    title: 'Mesotherapy',
    category: 'Hair Restoration',
    shortDesc:
      'Micro-channel delivery of vitamins, amino acids, peptides, and hyaluronic actives directly into skin or scalp.',
    overview:
      'Mesotherapy bridges the epidermal barrier by delivering bioavailable peptides, coenzymes, biotin, and hydrating actives directly where follicles and dermal fibroblasts need them most—available for both scalp rejuvenation and skin brightening.',
    duration: '35 – 45 mins',
    sessions: '4 – 6 sessions spaced 2 weeks apart',
    downtime: 'Mild pinpoint redness resolving within 24 hours',
    idealFor: [
      'Nutrient-deprived hair follicles and brittle hair',
      'Diffuse thinning alongside medical therapy',
      'Dull facial skin requiring deep meso-glow hydration',
      'Early fine lines and uneven skin vitality',
    ],
    protocolSteps: [
      {
        step: '01',
        title: 'Custom Cocktail Selection',
        detail: 'Choosing scalp-vitality peptides or facial brightening actives.',
      },
      {
        step: '02',
        title: 'Sterile Micro-Infusion',
        detail: 'Controlled micro-depth delivery for high bioavailability.',
      },
      {
        step: '03',
        title: 'Calming Recovery',
        detail: 'Soothing post-procedure care with minimal disruption to your day.',
      },
    ],
    visualType: 'video',
    mediaSrc: '/videos/hydrafacial-infusion.mp4',
    posterSrc: '/videos/hydrafacial-infusion.jpg',
  },
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: 'case-acne-day7',
    slug: 'active-acne-day-7',
    treatmentSlug: 'acne-management',
    title: 'Active Acne Management',
    subtitle: 'Visible reduction in inflammatory papules and redness within 7 days',
    timeframe: 'Day 0 vs Day 7',
    beforeLabel: 'Before · Day 0',
    afterLabel: 'After · Day 7',
    beforeSrc: '/results/acne-before.jpg',
    afterSrc: '/results/acne-after.jpg',
    originalCompositeSrc: '/assets/aistudio/IMG_20261118_145301_09ad8e14.jpg',
    clinicalNote:
      'Calmer surface inflammation, reduced active erythema, and clearer pore texture achieved in 7 days under physician-guided acne care.',
  },
  {
    id: 'case-laser-face',
    slug: 'face-laser-hair-reduction',
    treatmentSlug: 'laser-hair-reduction',
    title: 'Face Laser Hair Reduction',
    subtitle: 'Noticeable sideburn and cheek hair reduction after the 1st session',
    timeframe: 'After 1st Session',
    beforeLabel: 'Before',
    afterLabel: 'After 1st Session',
    beforeSrc: '/results/laser-before.jpg',
    afterSrc: '/results/laser-after.jpg',
    originalCompositeSrc: '/assets/aistudio/elysea.aesthetics_14050827_131340334_00d750ca.jpg',
    clinicalNote:
      'Even, smooth cheek contour with visibly reduced coarse facial hair following an initial calibrated diode laser session.',
  },
  {
    id: 'case-black-peel',
    slug: 'black-peel-resurfacing',
    treatmentSlug: 'chemical-peels',
    title: 'Black Peel Resurfacing',
    subtitle: 'Refined pore clarity and smoother cheek texture after clinical Black Peel',
    timeframe: 'Clinical Peel Protocol',
    beforeLabel: 'Before',
    afterLabel: 'After Black Peel',
    beforeSrc: '/results/blackpeel-before.jpg',
    afterSrc: '/results/blackpeel-after.jpg',
    originalCompositeSrc: '/assets/aistudio/IMG_20261118_145335_cff02091.jpg',
    clinicalNote:
      'Decongested comedones, softened post-acne pigmentation, and smoother skin surface post Black Peel session.',
  },
  {
    id: 'case-rf-skintag',
    slug: 'rf-skin-tag-removal',
    treatmentSlug: 'pigmentation-treatments',
    title: 'Periocular Skin Tag Removal (RF)',
    subtitle: 'Precision radiofrequency removal near the delicate under-eye contour',
    timeframe: 'Single RF Session',
    beforeLabel: 'Before',
    afterLabel: 'After RF Removal',
    beforeSrc: '/results/skintag-before.jpg',
    afterSrc: '/results/skintag-after.jpg',
    originalCompositeSrc: '/assets/aistudio/IMG_20261118_145320_51fec618.jpg',
    clinicalNote:
      'Clean, scar-minimizing radiofrequency ablation performed safely near the medial lower eyelid area.',
  },
];

export const EXPERIENCE_REELS: ExperienceReelItem[] = [
  {
    id: 'exp-hydrafacial',
    title: '45-Minute HydraFacial Experience',
    procedure: 'Exfoliation · Extraction · Infusion · LED',
    caption:
      'Full in-clinic walkthrough demonstrating all four clinical steps and immediate post-session radiance.',
    videoSrc: '/videos/hydrafacial-full.mp4',
    posterSrc: '/videos/hydrafacial-exfoliation.jpg',
    hasAudio: true,
    verifiedType: 'Recorded Clinical Procedure',
  },
  {
    id: 'exp-rf-precision',
    title: 'RF Skin Tag Removal Precision',
    procedure: 'Radiofrequency Ablation',
    caption:
      'Close-up documentation of controlled RF skin tag removal with sterile technique and delicate healing.',
    videoSrc: '/videos/rf-skin-tag.mp4',
    posterSrc: '/videos/rf-skin-tag.jpg',
    hasAudio: false,
    verifiedType: 'Clinical Case Reel',
  },
  {
    id: 'exp-led-recovery',
    title: 'LED Phototherapy Comfort Session',
    procedure: 'Red Light Skin Recovery',
    caption:
      'Relaxing non-invasive LED phototherapy step used to calm inflammation and brighten complexion.',
    videoSrc: '/videos/led-phototherapy.mp4',
    posterSrc: '/videos/led-phototherapy.jpg',
    hasAudio: false,
    verifiedType: 'In-Clinic Treatment Footage',
  },
  {
    id: 'exp-clinic-sanctuary',
    title: 'Inside ELYSEA, Zadeshwar',
    procedure: 'Clinic Space & Formulations',
    caption:
      'A look inside our clinical reception, curated dermatological formulations, and private aesthetic suite.',
    videoSrc: '/videos/clinic-sanctuary.mp4',
    posterSrc: '/videos/clinic-sanctuary.jpg',
    hasAudio: false,
    verifiedType: 'Clinic Walkthrough',
  },
];
