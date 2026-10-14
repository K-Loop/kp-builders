// ==========================================
// CENTRALIZED ASSET & CONTACT CONFIGURATION
// Replace paths with your ChatGPT generated assets in /public/assets/
// ==========================================
export const ASSET_CONFIG = {
  contact: {
    brandName: "KP BUILDERS & DESIGNER",
    tagline: "Building Your Vision, Blueprint By Blueprint",
    phone: "+91 98765 43210",
    whatsappNumber: "919876543210",
    email: "contact@kpbuilders.com",
    address: "Civil Lines & Design Studio, Main Road",
    license: "Licensed Architectural & Civil Engineering Firm",
  },
  images: {
    // 1. Hero construction photograph
    hero: "/assets/hero-construction.jpg",
    // 2. Project photographs
    foundation: "/assets/project-foundation.jpg",
    brickwork: "/assets/project-brickwork.jpg",
    residential: "/assets/project-residential.jpg",
    rccSlab: "/assets/project-rcc-slab.jpg",
    interior: "/assets/project-interior.jpg",
    completed: "/assets/project-completed.jpg",
    // 3. Technical Blueprint Sheets
    groundFloorBlueprint: "/assets/blueprint-ground-floor.jpg",
    firstFloorBlueprint: "/assets/blueprint-first-floor.jpg",
    northFacingBlueprint: "/assets/blueprint-north-facing.jpg",
    westFacingBlueprint: "/assets/blueprint-west-facing.jpg",
    siteLayoutBlueprint: "/assets/blueprint-site-layout.jpg",
    elevationBlueprint: "/assets/blueprint-elevation.jpg",
    // 4. About & Before/After
    aboutImage: "/assets/about-construction.jpg",
    beforeAfterBefore: "/assets/before-construction.jpg",
    beforeAfterAfter: "/assets/after-completed.jpg",
    // 5. Official Company Logo
    logo: "/assets/logo.png",
  },
  videos: {
    hero: "/video/KP_BUILDERS_BRAND_INTRO_20261014180122.mp4",
    heroAlt: "/video/hero-video.mp4",
  },
};

export const BLUEPRINTS_DATA = [
  {
    id: "ground-floor",
    title: "GROUND FLOOR PLAN",
    type: "ground",
    category: "Floor Plans",
    specs: "2BHK • 22' x 40'",
    builtUp: "880 sq.ft",
    dimensions: "22'-0\" x 40'-0\"",
    facing: "East / North Facing",
    description:
      "Engineered ground floor layout with dedicated car parking, expansive living area, modern modular kitchen, master bedroom with ensuite, and external staircase access.",
    features: [
      "Car Parking (10' x 12')",
      "Living Room (16' x 11')",
      "Kitchen (9' x 10')",
      "Master Bedroom (11' x 12')",
      "Attached & Common Baths",
    ],
    src: ASSET_CONFIG.images.groundFloorBlueprint,
  },
  {
    id: "first-floor",
    title: "FIRST FLOOR PLAN",
    type: "first",
    category: "House Plans",
    specs: "3BHK • 22' x 40'",
    builtUp: "940 sq.ft",
    dimensions: "22'-0\" x 40'-0\"",
    facing: "Road Facing Balcony",
    description:
      "Upper floor residential architecture featuring open front balcony, central family lounge, two secondary bedrooms, walk-in dressing space, and cross-ventilation shafts.",
    features: [
      "Open Balcony (22' x 6'6\")",
      "Family Lounge (14' x 11')",
      "Bedroom 2 (10' x 11')",
      "Bedroom 3 (11' x 12')",
      "Dress & Powder Room",
    ],
    src: ASSET_CONFIG.images.firstFloorBlueprint,
  },
  {
    id: "north-facing",
    title: "NORTH FACING PLAN",
    type: "north",
    category: "Facing & Vastu",
    specs: "2BHK • 30' x 40'",
    builtUp: "1,200 sq.ft",
    dimensions: "30'-0\" x 40'-0\"",
    facing: "100% Vastu Compliant North",
    description:
      "Prime Vastu-engineered residential drawing with Northeast (Ishanya) entrance portico, Southeast (Agneya) kitchen, and Southwest (Nairuthi) master bedroom suite.",
    features: [
      "Vastu Compliant North Entry",
      "Entrance Portico (10' x 10')",
      "Spacious Living (14' x 11')",
      "Dining & Utility Area",
      "Master Suite (13' x 11')",
    ],
    src: ASSET_CONFIG.images.northFacingBlueprint,
  },
  {
    id: "west-facing",
    title: "WEST FACING PLAN",
    type: "west",
    category: "2BHK / 3BHK",
    specs: "3BHK • 30' x 50'",
    builtUp: "1,500 sq.ft",
    dimensions: "30'-0\" x 50'-0\"",
    facing: "West Facing Road",
    description:
      "Large executive family duplex layout tailored for 30x50 urban plots. Includes double height living volume, covered parking, and private rear utility courtyard.",
    features: [
      "West Portico (14' x 12')",
      "Living & Dining (16' x 12')",
      "Kitchen & Wet Pantry (10' x 9')",
      "Master Suite with Walk-In",
      "Courtyard & Light Well",
    ],
    src: ASSET_CONFIG.images.westFacingBlueprint,
  },
  {
    id: "site-layout",
    title: "SITE LAYOUT PLAN",
    type: "site",
    category: "Site Layout",
    specs: "SOUTH FACING • 40' x 60'",
    builtUp: "2,400 sq.ft Footprint",
    dimensions: "40'-0\" x 60'-0\"",
    facing: "South Main Road 30'",
    description:
      "Master architectural site layout demarcating statutory municipal setbacks, vehicular ingress/egress, landscaped front lawn, rainwater percolation, and foundation footprint.",
    features: [
      "Municipal Setback Clearances",
      "Landscaped Green Zone",
      "Driveway & Ingress Gate",
      "Septic & Underground Sump",
      "30' Wide Road Access",
    ],
    src: ASSET_CONFIG.images.siteLayoutBlueprint,
  },
];

export const PROJECTS_DATA = [
  {
    id: 1,
    title: "Foundation & Structure",
    caption: "Site Preparation | Foundation Work",
    description:
      "Soil bearing capacity testing, column pit excavation, anti-termite treatment, and heavy PCC raft footing.",
    tag: "Civil Phase 01",
    src: ASSET_CONFIG.images.foundation,
  },
  {
    id: 2,
    title: "Brickwork",
    caption: "Wall Construction | Quality Materials",
    description:
      "Red clay brick and AAC block masonry in 1:6 cement-sand mortar with lintel tie-beams and plumb calibration.",
    tag: "Civil Phase 02",
    src: ASSET_CONFIG.images.brickwork,
  },
  {
    id: 3,
    title: "Residential Construction",
    caption: "Structural Work | Progress Phase",
    description:
      "Multi-storey RCC framed residential villa under progress with external bamboo and steel scaffold framing.",
    tag: "Framing Phase 03",
    src: ASSET_CONFIG.images.residential,
  },
  {
    id: 4,
    title: "RCC Slab Work",
    caption: "Reinforcement | Slab Construction",
    description:
      "Fe-550 TMT bar reinforcement mesh with electrical conduit embedded pipes prior to M25 ready-mix pouring.",
    tag: "Structural Phase 04",
    src: ASSET_CONFIG.images.rccSlab,
  },
  {
    id: 5,
    title: "Interior Finishing",
    caption: "Modern Interiors | Living Spaces",
    description:
      "Architectural floating staircase, tempered glass railing, warm ambient cove lighting, and polished Italian stone.",
    tag: "Finishing Phase 05",
    src: ASSET_CONFIG.images.interior,
  },
  {
    id: 6,
    title: "Completed Work",
    caption: "Handover Ready | Quality Finish",
    description:
      "Turnkey delivery of fully finished, vastu-compliant duplex home ready for immediate occupancy.",
    tag: "Handover Phase 06",
    src: ASSET_CONFIG.images.completed,
  },
];

export const SERVICES_DATA = [
  {
    id: 1,
    iconName: "FaDraftingCompass",
    title: "Architectural Planning",
    description:
      "Custom house plans, layout designs and space planning as per your needs, site geometry, and lifestyle.",
  },
  {
    id: 2,
    iconName: "FaRulerCombined",
    title: "Blueprint & Floor Plans",
    description:
      "Detailed architectural drawings with proper dimensioning, facing & vastu planning, and local authority approval standards.",
  },
  {
    id: 3,
    iconName: "HiOutlineBuildingOffice2",
    title: "Structural Work",
    description:
      "Strong and reliable construction with quality materials, structural engineering practices, and earthquake-resistant designs.",
  },
  {
    id: 4,
    iconName: "FiHome",
    title: "Residential Construction",
    description:
      "Independent houses, villas and residential buildings executed from deep foundation to final keys handover.",
  },
  {
    id: 5,
    iconName: "FaHardHat",
    title: "Site Supervision",
    description:
      "Regular site visits, quality checks, material testing, and technical supervision throughout every phase of the project.",
  },
  {
    id: 6,
    iconName: "HiOutlineSparkles",
    title: "Interior Finishing",
    description:
      "Modern interiors, false ceilings, vitrified & Italian flooring, waterproofing, and custom cabinetry for comfortable living.",
  },
];

export const PROCESS_STEPS = [
  {
    num: "1",
    title: "Consultation",
    desc: "Understand your needs, plot dimensions, and site details.",
  },
  {
    num: "2",
    title: "Planning",
    desc: "Design, custom floor plans, 3D elevations, and technical drawings.",
  },
  {
    num: "3",
    title: "Construction",
    desc: "Quality execution with continuous licensed engineering supervision.",
  },
  {
    num: "4",
    title: "Handover",
    desc: "On-time project delivery with complete quality documentation.",
  },
];
