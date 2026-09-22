/**
 * ============================================================
 *  SITE CONTENT — SINGLE SOURCE OF TRUTH
 * ============================================================
 *  Every fact on this website originates from this file.
 *  Nothing here is inferred beyond the professor's public
 *  profiles and supplied research-interest material.
 * ============================================================
 */

export const profile = {
  fullName: "Dr. Sushant Prabhakar Sahu",
  shortName: "Dr. Sushant P. Sahu",
  role: "Assistant Professor and Ramanujan Faculty Fellow",
  roleShort: "Assistant Professor",
  centre: "Centre for Innovation and Research",
  institution: "Kalinga Institute of Industrial Technology (KIIT) Deemed to be University",
  institutionShort: "Kalinga Institute of Industrial Technology (KIIT)",
  city: "Patia, Bhubaneswar-751024",
  state: "Odisha",
  country: "India",
  address: "110/Central Research Facility Building\nKIIT University Campus 3\nPatia, Bhubaneswar-751024\nOdisha, India",
  email: "sushant.sahu@kiit.ac.in",
  emailAlt: "sushantsahu285@gmail.com",
  phone: "+91 9324076469",
  phoneHref: "+919324076469",
  linkedin: "https://www.linkedin.com/in/sahu-sushant-ramanujan-faculty-fellow",
  scholar: "https://scholar.google.com/citations?hl=en&user=RKUGv88AAAAJ&view_op=list_works&sortby=pubdate",
} as const;

export const bio = {
  lead:
    "Research at the interface of electrochemistry, nanotechnology and bioimaging — developing electrified molecular systems, sensors and membranes for energy, environment and health.",
  paragraphs: [
    "Dr. Sushant Prabhakar Sahu is Assistant Professor and Ramanujan Faculty Fellow at the Centre of Innovation and Research, Kalinga Institute of Industrial Technology (KIIT) Deemed to be University, Bhubaneswar, Odisha.",
    "His research programme is interdisciplinary, spanning electrocatalysis and electrochemical energy conversion, electrochemical sensors, ionic polymers and membranes, and nanoscale optical probes. The work addresses two connected challenges: the efficient and selective conversion of small molecules — including water splitting for hydrogen and the reduction of CO₂ — and the sensitive detection, separation and removal of contaminants such as PFAS compounds and heavy metals from water.",
    "His peer-reviewed work has appeared in journals including Environmental Science & Technology Letters, ACS Omega, ACS ES&T Engineering and Energy & Fuels. Earlier in his career he served on the faculty of Amity University, Mumbai, and undertook collaborative research on electrochemical sensing and photocatalysis at Louisiana State University, Baton Rouge.",
  ],
  facts: [
    { term: "Academic position", value: "Assistant Professor and Ramanujan Faculty Fellow" },
    { term: "Institution", value: "Kalinga Institute of Industrial Technology (KIIT) Deemed to be University" },
    { term: "Centre", value: "Centre of Innovation and Research" },
    { term: "Location", value: "Bhubaneswar 751024, Odisha, India" },
  ],
  interests: [
    "Electrochemistry",
    "Electrocatalysis",
    "Nanotechnology",
    "Electrochemical sensors",
    "Ionic polymers",
    "Membranes",
    "Water treatment",
    "Optical bioimaging",
  ],
  career: [
    {
      period: "Present",
      role: "Assistant Professor & Ramanujan Faculty Fellow",
      org: "Centre of Innovation and Research, KIIT Deemed to be University, Bhubaneswar",
    },
    {
      period: "Prior",
      role: "Faculty, Chemistry",
      org: "Amity Institute of Biotechnology, Amity University, Mumbai",
    },
    {
      period: "Prior",
      role: "Collaborative research",
      org: "Electrochemical sensing and photocatalysis, Louisiana State University, Baton Rouge",
    },
  ],
  careerNote: "Full education and appointment history will be updated shortly.",
} as const;

/* ============================================================
   RESEARCH DIRECTIONS
   ============================================================ */

export type ResearchArea = {
  id: string;
  index: string;
  label: string;
  title: string;
  short: string;
  description: string;
  applications: string[];
  keywords: string[];
  figure: "electrolyser" | "sensor" | "membrane" | "imaging";
  align: "left" | "right";
};

export const researchAreas: ResearchArea[] = [
  {
    id: "electrified-systems",
    index: "01",
    label: "Electrified molecular systems",
    title: "Electrified Molecular Systems for Sustainable Catalysis and Chemical Fuels",
    short:
      "Scalable catalytic materials and tailored electrode surfaces that promote catalysis — including water splitting and CO₂ conversion — through the breaking and making of chemical bonds.",
    description:
      "The laboratory is pursuing the development of scalable catalytic materials and tailored electrode surfaces that promote catalysis, including water splitting and CO₂ conversion, through the breaking and making of chemical bonds. The work aims to produce targeted molecules such as H₂ more efficiently, with high selectivity and rapid rates of production.",
    applications: [
      "Industrial-scale water electrolysers",
      "Fuel cell technologies",
      "CO₂ conversion to chemical fuels",
      "High-selectivity H₂ production",
    ],
    keywords: ["Electrocatalysis", "Water splitting", "CO₂ reduction", "HER", "Electrolyser"],
    figure: "electrolyser",
    align: "left",
  },
  {
    id: "electrochemical-sensors",
    index: "02",
    label: "Electrochemical sensors",
    title: "Design of Electrochemical Sensors for Healthcare and Environmental Technologies",
    short:
      "Engineering electrode surfaces to create highly sensitive electrochemical sensors for detecting small molecules such as PFAS compounds through redox processes.",
    description:
      "Electrode surfaces are engineered to create highly sensitive electrochemical sensors for detecting small molecules such as PFAS compounds through redox processes. The programme also covers potentiometric sensors, ion-selective electrodes and biosensors, including specific biomarker detection, biochemical assays and antibody–antigen interactions.",
    applications: [
      "PFAS compound detection",
      "Potentiometric sensors",
      "Ion-selective electrodes",
      "Biomarker detection and biosensors",
      "Antibody–antigen interaction assays",
    ],
    keywords: ["Biosensors", "Redox sensing", "Ion-selective electrodes", "PFAS", "Point-of-care"],
    figure: "sensor",
    align: "right",
  },
  {
    id: "ionic-polymers",
    index: "03",
    label: "Ionic polymers &amp; membranes",
    title:
      "Ionic Polymers / Polymer Membranes in Water Treatment Technologies and Electrochemical Processes",
    short:
      "Polymerisation techniques — radical and interfacial polymerisation — used to prepare ionic polymer membranes and polymer gels for contaminant removal and electrochemical separation.",
    description:
      "The research utilises polymerisation techniques, including radical polymerisation and interfacial polymerisation, to prepare ionic polymer membranes and polymer gels. These materials are designed for the effective removal of water contaminants, the removal and recovery of precious metals, the removal of toxic heavy metals, and advanced electrochemical separations and electrocatalytic processes.",
    applications: [
      "Removal of water contaminants",
      "Removal / recovery of precious metals",
      "Removal of toxic heavy metals",
      "Advanced electrochemical separations",
      "Electrocatalytic processes",
    ],
    keywords: ["Ionomer membranes", "Radical polymerisation", "Interfacial polymerisation", "Ion exchange", "Separations"],
    figure: "membrane",
    align: "left",
  },
  {
    id: "optical-bioimaging",
    index: "04",
    label: "Optical bioimaging",
    title: "Optical Bioimaging Methods Using Nanoscale Optical Probes as Sensors",
    short:
      "Scattering spectroscopy and nanoscale optical techniques — SHG, Raman scattering, SERS and super-resolution fluorescence microscopy — applied to cells and tissue.",
    description:
      "The research explores scattering spectroscopy and nanoscale optical techniques, including multiphoton second harmonic generation (SHG), Raman scattering, surface-enhanced Raman spectroscopy (SERS) and super-resolution fluorescence microscopy. Objectives include understanding cell membrane–molecule interactions and cellular processes at the nanoscale, using plasmonic nanomaterials and tissue specimens, to image and understand these systems with unprecedented detail.",
    applications: [
      "Cell membrane–molecule interactions",
      "Nanoscale cellular processes",
      "Plasmonic nanomaterials",
      "Tissue specimen imaging",
      "SERS and super-resolution microscopy",
    ],
    keywords: ["SHG", "Raman scattering", "SERS", "Super-resolution microscopy", "Plasmonics"],
    figure: "imaging",
    align: "right",
  },
];

/* ============================================================
   RESEARCH ECOSYSTEM
   ============================================================ */

export type EcosystemNode = {
  id: string;
  label: string;
  description: string;
  technologies: string[];
};

export const ecosystem: EcosystemNode[] = [
  {
    id: "nanotech",
    label: "Nanotechnology",
    description:
      "Nanoscale materials — metal nanoparticles, plasmonic structures and ionic polymers — form the material basis of every programme in the laboratory.",
    technologies: ["Ru nanoparticles", "Plasmonic nanomaterials", "Nanoscale optical probes", "Polymer gels"],
  },
  {
    id: "electrochem",
    label: "Electrochemistry",
    description:
      "Tailored electrode surfaces and interfacial engineering enable controlled electron transfer, redox processes and electrochemical separations.",
    technologies: ["Potentiostat / galvanostat", "Screen-printed electrodes", "Flow cells", "Redox processes"],
  },
  {
    id: "catalysis",
    label: "Catalysis",
    description:
      "Scalable catalytic materials drive the breaking and making of chemical bonds — water splitting to H₂ and the conversion of CO₂.",
    technologies: ["Water splitting", "CO₂ conversion", "Hydrogen evolution", "Electrolyser flow cells"],
  },
  {
    id: "biosensors",
    label: "Biosensors",
    description:
      "Sensitive electrochemical and optical transducers detect small molecules, biomarkers and antibody–antigen interactions in complex matrices.",
    technologies: ["PFAS detection", "Ion-selective electrodes", "Biomarkers", "Antibody–antigen assays"],
  },
  {
    id: "water",
    label: "Water Treatment",
    description:
      "Ionic polymer membranes and gels remove, recover and separate contaminants, precious metals and toxic heavy metals from water.",
    technologies: ["Contaminant removal", "Metal recovery", "Heavy-metal removal", "Electrochemical separation"],
  },
  {
    id: "bioimaging",
    label: "Optical Bioimaging",
    description:
      "Scattering spectroscopy and nanoscale optical probes resolve cell membrane–molecule interactions and cellular processes with unprecedented detail.",
    technologies: ["Multiphoton SHG", "Raman scattering", "SERS", "Super-resolution fluorescence"],
  },
];

/* ============================================================
   PUBLICATIONS
   ============================================================ */

export type Publication = {
  year: number;
  title: string;
  authors: string;
  journal: string;
  volume: string;
  doi: string;
  url: string;
};

export const publications: Publication[] = [
  {
    year: 2025,
    title: "Facile Single-Step Synthesis of PVP-Stabilized Ru NPs for Electrochemical Hydrogen Generation",
    authors:
      "Rahul Bhise, Riddhi Kadrekar, Priti Singh, Nagapradeep Nidamanuri, Priyamvada Arte, Pinku Nath, Yu Wang, Arif D. Sheikh, Mudit Dixit, **Sushant P. Sahu**",
    journal: "Energy & Fuels",
    volume: "39(43), 20896–20907",
    doi: "10.1021/acs.energyfuels.5c02899",
    url: "https://doi.org/10.1021/acs.energyfuels.5c02899",
  },
  {
    year: 2022,
    title:
      "Rapid and Direct Perfluorooctanoic Acid Sensing with Selective Ionomer Coatings on Screen-Printed Electrodes under Environmentally Relevant Concentrations",
    authors: "**Sushant P. Sahu**, Subarna Kole, Christopher G. Arges, Manas Ranjan Gartia",
    journal: "ACS Omega",
    volume: "7(6), 5001–5007",
    doi: "10.1021/acsomega.1c05847",
    url: "https://doi.org/10.1021/acsomega.1c05847",
  },
  {
    year: 2022,
    title: "Insights into the Role of Electrolyte Ionophore on Electrochemical Reduction of CO₂",
    authors:
      "Tam Tran, Laibao Zhang, Nengneng Xu, Guanguang Xia, **Sushant Sahu**, Yudong Wang, Xingwen Yu, Xiao-Dong Zhou",
    journal: "ECS Meeting Abstracts",
    volume: "October 2022",
    doi: "10.1149/MA2022-02491940mtgabs",
    url: "https://doi.org/10.1149/MA2022-02491940mtgabs",
  },
  {
    year: 2021,
    title:
      "Impacts of Reactor Configuration, Degradation Mechanisms, and Water Matrices on Perfluorocarboxylic Acid Treatment Efficiency by the UV/Bi₃O(OH)(PO₄)₂ Photocatalytic Process",
    authors: "Mojtaba Qanbarzadeh, Dawei Wang, Mohamed Ateia, **Sushant P. Sahu**, Ezra L. Cates",
    journal: "ACS ES&T Engineering",
    volume: "1(2), 239–248",
    doi: "10.1021/acsestengg.0c00086",
    url: "https://doi.org/10.1021/acsestengg.0c00086",
  },
  {
    year: 2021,
    title: "Printed Electrode for Measuring Phosphate in Environmental Water",
    authors:
      "Alisha Prasad, **Sushant P. Sahu**, Sara Karoline Figueiredo Stofela, Ardalan Chaichi, Syed Mohammad Abid Hasan, Wokil Bam, Kanchan Maiti, Kevin M. McPeak, Gang Logan Liu, Manas Ranjan Gartia",
    journal: "ACS Omega",
    volume: "6(17), 11297–11306",
    doi: "10.1021/acsomega.1c00132",
    url: "https://doi.org/10.1021/acsomega.1c00132",
  },
  {
    year: 2018,
    title:
      "Rapid Degradation and Mineralization of Perfluorooctanoic Acid by a New Petitjeanite Bi₃O(OH)(PO₄)₂ Microparticle Ultraviolet Photocatalyst",
    authors:
      "**Sushant P. Sahu**, Mojtaba Qanbarzadeh, Mohamed Ateia, Hamed Torkzadeh, Amith S. Maroli, Ezra L. Cates",
    journal: "Environmental Science & Technology Letters",
    volume: "5(8), 533–538",
    doi: "10.1021/acs.estlett.8b00395",
    url: "https://doi.org/10.1021/acs.estlett.8b00395",
  },
];

/* ============================================================
   RESEARCH FACILITIES
   ============================================================ */

export type Facility = {
  id: string;
  name: string;
  detail: string;
  vendor: string;
  description: string;
  application: string;
  figure:
    | "potentiostat"
    | "smartpot"
    | "pem"
    | "autoclave"
    | "stirrer"
    | "sonicator"
    | "vacuumoven"
    | "phmeter"
    | "furnace"
    | "fumehood"
    | "powersupply";
};

export const facilities: Facility[] = [
  {
    id: "potentiostat",
    name: "Potentiostat / Galvanostat",
    detail: "Electrochemical Work Station",
    vendor: "Admiral Instruments, USA",
    description:
      "A full electrochemical workstation for controlled-potential and controlled-current experiments, supporting voltammetry, impedance and long-duration electrolysis.",
    application: "Electrocatalysis, water splitting, CO₂ reduction, sensor characterisation",
    figure: "potentiostat",
  },
  {
    id: "smartpot",
    name: "SensitSmart Smartphone Potentiostat",
    detail: "Portable electrochemical measurements",
    vendor: "PalmSens, Netherlands",
    description:
      "A compact potentiostat that pairs with a smartphone, enabling field measurements outside the laboratory bench without loss of measurement quality.",
    application: "On-site environmental sensing, portable PFAS and ion detection",
    figure: "smartpot",
  },
  {
    id: "pem",
    name: "PEM Electrolyser Flow Cell",
    detail: "Membrane electrode assembly",
    vendor: "Laboratory flow cell",
    description:
      "A proton-exchange membrane electrolyser flow cell for continuous gas evolution experiments under controlled electrolyte flow.",
    application: "Hydrogen evolution, water splitting, electrolyser performance testing",
    figure: "pem",
  },
  {
    id: "autoclave",
    name: "Hydrothermal Autoclaves",
    detail: "High-pressure synthesis",
    vendor: "Laboratory autoclave reactors",
    description:
      "Sealed pressure vessels for hydrothermal and solvothermal synthesis of nanomaterials, catalysts and polymer gels at elevated temperature.",
    application: "Synthesis of catalytic nanomaterials and ionic polymer gels",
    figure: "autoclave",
  },
  {
    id: "stirrer",
    name: "Magnetic Stirrer with Hot Plate",
    detail: "Heating and mixing",
    vendor: "Laboratory hot plate stirrer",
    description:
      "Temperature-controlled stirring for solution preparation, polymerisation reactions and electrodeposition baths.",
    application: "Polymerisation, electrodeposition, solution-phase synthesis",
    figure: "stirrer",
  },
  {
    id: "sonicator",
    name: "Ultrasonicator",
    detail: "Dispersion and homogenisation",
    vendor: "Laboratory ultrasonicator",
    description:
      "Probe and bath ultrasonication for dispersing nanoparticles, degassing solutions and homogenising polymer dispersions.",
    application: "Nanoparticle dispersion, electrode surface preparation",
    figure: "sonicator",
  },
  {
    id: "vacuumoven",
    name: "Vacuum Oven",
    detail: "Drying under reduced pressure",
    vendor: "Laboratory vacuum oven",
    description:
      "Low-pressure drying of membranes, gels and electrode coatings at controlled temperature without thermal degradation.",
    application: "Membrane and polymer gel drying, electrode conditioning",
    figure: "vacuumoven",
  },
  {
    id: "phmeter",
    name: "Digital pH Meter",
    detail: "Solution characterisation",
    vendor: "Bench pH meter",
    description:
      "Precision pH measurement for electrolyte preparation, buffer control and validation of sensing experiments.",
    application: "Electrolyte and sensor matrix preparation",
    figure: "phmeter",
  },
  {
    id: "furnace",
    name: "CVD Tube Furnace with Gas Cylinders",
    detail: "High-temperature processing",
    vendor: "Tube furnace with gas delivery",
    description:
      "A high-temperature tube furnace with gas cylinder delivery for chemical vapour deposition, calcination and controlled-atmosphere heat treatment.",
    application: "Catalyst calcination, CVD growth, thermal treatment of materials",
    figure: "furnace",
  },
  {
    id: "fumehood",
    name: "Fume Hoods",
    detail: "Containment and safe handling",
    vendor: "Laboratory fume enclosures",
    description:
      "Ventilated enclosures providing containment for solvent handling, acidic and alkaline electrolyte preparation and volatile reagent work.",
    application: "Safe handling of electrolytes, solvents and reagents",
    figure: "fumehood",
  },
  {
    id: "powersupply",
    name: "DC Power Supply",
    detail: "Programmable current / voltage source",
    vendor: "Bench DC power supply",
    description:
      "A stabilised direct-current supply for electrodeposition, cell polarisation and constant-current electrochemical experiments.",
    application: "Electrodeposition, constant-current electrolysis",
    figure: "powersupply",
  },
];

/* ============================================================
   FUNDING
   ============================================================ */

export const funding = {
  title: "Ramanujan Fellowship Research Grant",
  summary:
    "Research grant supporting the laboratory's research programme at the Centre of Innovation and Research, KIIT Deemed to be University.",
  note: "Grant administration details and supported project titles will be updated shortly.",
};

/* ============================================================
   OPPORTUNITIES
   ============================================================ */

export const opportunities = [
  {
    title: "PhD Researchers",
    text: "Doctoral candidates with a background in chemistry, materials science, chemical engineering or biotechnology who wish to work across electrochemistry, nanomaterials and sensing.",
  },
  {
    title: "Project Researchers",
    text: "Postdoctoral and project-level researchers seeking an interdisciplinary environment combining experimental electrochemistry, polymer chemistry and optical characterisation.",
  },
  {
    title: "Research Internships",
    text: "Structured research internships for motivated undergraduate and postgraduate students who want hands-on experience in a modern electrochemical and materials laboratory.",
  },
  {
    title: "Collaborations",
    text: "Joint research with academic groups, national laboratories and industry R&D teams working on energy conversion, water treatment and diagnostic sensing.",
  },
  {
    title: "Academic Partnerships",
    text: "Visiting researcher arrangements, seminar series and institutional partnerships that connect the laboratory with the wider research community.",
  },
];

export const researchSpecializations = [
  "Advanced Materials",
  "Photo- and Electrochemical Energy Conversion",
  "Environmental Nanotechnology",
  "Electrochemical Sensors / Biosensors",
  "Optical Imaging",
];

export const educationHistory = [
  {
    degree: "Ph.D. in Chemistry",
    institution: "Clemson University, Clemson, South Carolina",
    year: "August 2007 – December 2014",
    detail: "GPA: 3.61 / 4.0",
    thesis: 'Thesis: "Development of Carbon Dots in Photocatalytic CO2 Conversion"',
  },
  {
    degree: "M.Sc. in Chemistry",
    institution: "Indian Institute of Technology (IIT), Guwahati, India",
    year: "July 2004 – May 2006",
    detail: "GPA: 7.61 / 10.0",
    thesis: "",
  },
  {
    degree: "B.Sc. in Chemistry",
    institution: "University of Mumbai, Mumbai, India",
    year: "July 2000 – May 2003",
    detail: "First Class, 75.75%",
    thesis: "",
  },
];

export const academicAppointments = [
  {
    title: "Assistant Professor and Ramanujan Faculty Fellow",
    org: "Centre for Innovation and Research\nKalinga Institute of Industrial Technology (KIIT) Deemed to be University",
    period: "June 2026 – Present",
    isFeatured: true,
  },
  {
    title: "Assistant Professor and Ramanujan Faculty Fellow",
    org: "Amity University, Navi Mumbai, Maharashtra",
    period: "May 2023 – May 2026",
    isFeatured: false,
  },
  {
    title: "Visiting Scholar",
    org: "Department of Chemistry and Institute of Materials Research and Innovation\nUniversity of Louisiana, Lafayette, Louisiana",
    period: "February 2023 – April 2023",
    host: "Host: Dr. Yu Wang",
    research: "Research Area: Styrene-based Ionic Fluoropolymers in Selective Removal of Perfluoroalkyl Substances at Environmentally Relevant Concentrations",
    isFeatured: false,
  },
  {
    title: "Senior Project Associate",
    org: "CSIR-Institute of Minerals and Materials and Technology\nBhubaneswar, Odisha",
    period: "September 2022 – January 2023",
    host: "Host: Dr. B.K. Jena",
    research: "Research Area: Catalyst Development for Electrolyzers",
    isFeatured: false,
  },
  {
    title: "Visiting Scholar and Chemistry Instructor",
    org: "Department of Chemistry and Institute of Materials Research and Innovation\nUniversity of Louisiana, Lafayette, Louisiana",
    period: "August 2020 – August 2022",
    host: "Host: Dr. Yu Wang",
    research: "Research Area: Development of Anion Exchange Polymeric Materials for Water Treatment and Electrochemical Processes",
    isFeatured: false,
  },
  {
    title: "Postdoctoral Research Scholar",
    org: "Applied Nanophotonics Laboratory\nDepartment of Mechanical Engineering\nLouisiana State University, Baton Rouge, Louisiana",
    period: "February 2018 – August 2020",
    host: "Advisor: Dr. Manas R. Gartia",
    research: "Research Area: Multiphoton Second Harmonic Generation Imaging and Development of Electrochemical Sensors",
    isFeatured: false,
  },
  {
    title: "Postdoctoral Fellow",
    org: "L.G. Rich Environmental Chemistry Laboratory\nDepartment of Environmental Engineering and Earth Sciences\nClemson University, South Carolina",
    period: "May 2015 – February 2018",
    host: "Advisor: Dr. Ezra Cates",
    research: "Research Area: X-ray Driven Materials and Radiation-based Processes for Environmental Applications",
    isFeatured: false,
  },
];

export const awardsTimeline = [
  { year: "2025", title: "Best research paper presentation award in the Water domain at SANKET2025 — Sustainability through Ancient Knowledge & Emerging Technologies Conference, IIT Bombay." },
  { year: "2025", title: "Selected under the Young S&T Leaders category for participation in the Emerging Science, Technology, and Innovation Conclave (ESTIC-2025), New Delhi." },
  { year: "2023–2028", title: "Selected for Ramanujan Fellowship with a total approved budget of Rs. 1,19,00,000 from DST-ANRF, India." },
  { year: "2020–2021", title: "Guest Editor, Frontiers in Chemistry." },
  { year: "2019", title: "National Postdoctoral Fellowship (NPDF) from DST-SERB, India — Declined." },
  { year: "2019", title: "Selected for the 2019 ACS Postdoc to Faculty (ACS P2F) Workshop; total award value $810, sponsored by the American Chemical Society." },
  { year: "2018–2020", title: "Postdoctoral Fellowship from Louisiana State University." },
  { year: "2015–2018", title: "Postdoctoral Fellowship from Clemson University." },
  { year: "2016", title: "Postdoctoral Travel Grant ($250) from Clemson University Postdoctoral Association for oral presentation at the 251st ACS National Meeting, San Diego, California, USA." },
  { year: "2014", title: "Professional Enrichment Grant ($750 Spring + $750 Summer), Clemson University Graduate School." },
  { year: "2013", title: "Professional Enrichment Grant ($400), Clemson University Chemistry Department, for SPASEC-18 Conference presentation." },
  { year: "2012", title: "Fellowship covering all expenses for I-CAMP 2012 summer school on Renewable and Sustainable Energy at University of Colorado, Boulder." },
  { year: "2009", title: "Among the top 50 students selected with travel support for Nanobiophotonics Summer School at the University of Illinois at Urbana-Champaign." },
  { year: "2004–2006", title: "Merit-cum-Means Scholarship covering full tuition fees at IIT Guwahati." },
  { year: "2004", title: "Selected for the All India Level Joint Admission Test for M.Sc. (JAM-2004)." },
  { year: "2004", title: "Sir Ratan Tata and JRD Tata Scholarship for excellence in B.Sc." },
  { year: "2003", title: "Award Winner at D.G. Ruparel College, University of Mumbai, for First Class with Distinction in B.Sc. (Hons.)." },
];

export const scholarlyMetrics = {
  hIndex: 26,
  citations: 6000,
  cumulativeImpactFactor: 301.6,
  scholarLink: "https://scholar.google.com/citations?hl=en&user=RKUGv88AAAAJ&view_op=list_works&sortby=pubdate",
};

export const featuredPublications = [
  "Facile Single-Step Synthesis of PVP-Stabilized Ru NPs for Electrochemical Hydrogen Generation",
  "Monitoring Molecular Interactions with Cell Membranes Using Time-Dependent Second Harmonic Generation Microscopy",
  "Guanine Assisted Contrived Low Pt-Integrated Mo2C/C for Hydrogen Evolution Reaction",
  "Polystyrene-Based Fluorinated Ionic Receptor for Selective Removal of Perfluoroalkyl Contaminants from Water",
  "Machine learning for automated classification of lung collagen in a urethane-induced lung injury mouse model",
  "Rapid and Direct Perfluorooctanoic Acid Sensing with Selective Ionomer Coatings on Screen Printed Electrodes under Environmentally Relevant Concentrations",
];

export const patents = [
  {
    inventors: "Sahu, S. P.; Arges, C. G.; Gartia, M. R.; Bhattacharya, D.; Venugopalan, G.",
    title: "Perfluoroacid Sensor and Method of Use",
    status: "US Patent Filed 2022",
    number: "US20230176006A1",
  },
  {
    inventors: "Sahu, S. P.; Wang, Y.",
    title: "Styrenic Fluoropolymers and Methods for Making and Using Same",
    status: "US Patent Filed 2023",
    number: "US20240307863A1",
  },
  {
    inventors: "Sahu, S. P.; Bhise, R.",
    title: "Scalable Synthesis and Noble Metal Integration on Iron Carbide/Carbon for Electrocatalysis",
    status: "2025 Patent Filed",
    number: "Application No. 202521031243",
  },
];

export const conferencePresentations = [
  { year: 2026, title: "Monitoring Red Blood Cells Agglutination Using Screen-Printed Electrodes: A Multimodal Voltammetric and Impedimetric Study Via Antigen-Antibody Sensing Approach", authors: "Thepade, P., Faldu, D., Sahu, S. P.", venue: "1st International Online Conference on Hematology", location: "Online", format: "Accepted abstract", link: "" },
  { year: 2025, title: "Fighting fire with fire: F-rich ionic polymers to conquer PFAS", authors: "Sahu, S. P.; Wang, Y.", venue: "American Chemical Society National Meeting, Fall 2025", location: "Washington DC, USA", format: "Oral Presentation", link: "https://credentials.acs.org/4170619d-6213-42b8-8c57-9d2df5d111e6#acc.gB0YKxca" },
  { year: 2025, title: "Ru nanospheres prepared by one step hydrothermal route as an efficient hydrogen evolution reaction catalyst", authors: "Sahu, S. P.; Bhise, R.", venue: "American Chemical Society National Meeting, Fall 2025", location: "Washington DC, USA", format: "Oral Presentation", link: "https://credentials.acs.org/4170619d-6213-42b8-8c57-9d2df5d111e6#acc.gB0YKxca" },
  { year: 2025, title: "Probing structure and dynamics at cell membranes using second harmonic Generation Microscopy", authors: "Sahu, S. P.; Hamal, P.; Piers, P. P.; Nguyen, H.; Kamble, S. S.; McCarley, R. L.; Gartia, M. R.; Haber, L. H.", venue: "Global Scientific Conference: Chemistry for Health", location: "IIT Bombay", format: "Oral Presentation", link: "" },
  { year: 2025, title: "Fluorinated Ionic Polymer-Modified Cobalt Sensor: A Selective and Cost-Effective Solution for PFOA Detection in Water Matrices", authors: "Arte, P.; Bhise, R.; Khera, P.; Bhastikar, V.; Sahu, S. P.", venue: "Global Scientific Conference: Chemistry for Health", location: "IIT Bombay", format: "Poster Presentation", link: "" },
  { year: 2024, title: "Highly efficient GenX Removal by polystyrene-based ionic fluoropolymer at environmentally relevant concentrations", authors: "Sahu, S.P.; Wang, Y.", venue: "American Chemical Society National Meeting, Fall 2024", location: "Denver, USA", format: "Oral Presentation", link: "https://credentials.acs.org/e166a1da-3e0c-4f8e-96d5-b8bf561dc31e#acc.R70xm1Ib" },
  { year: 2024, title: "Engineering of iron carbide with a DNA purine base", authors: "Bhise, R.; Nidamanuri, N.; Sheikh, A.D.; Sahu, S. P.", venue: "American Chemical Society National Meeting, Fall 2024", location: "Denver, USA", format: "Oral Presentation", link: "" },
  { year: 2024, title: "Polystyrene-based ionic fluoropolymers for the removal of anionic perfluoroalkyl substances from water", authors: "Sahu, S.P.; Wang, Y.; Donnarumma, F.; Srivastava, R.", venue: "American Chemical Society National Meeting, Spring 2024", location: "New Orleans, USA", format: "Poster Presentation", link: "" },
  { year: 2022, title: "Insights into the Role of Electrolyte Ionophore on Electrochemical Reduction of CO2", authors: "Tran, T.; Zhang, L.; Xu, N.; Xia, G.; Sahu, S.; Wang, Y.; Yu, X.; Zhou, X.-Y.", venue: "242nd ECS Meeting", location: "Atlanta, USA", format: "Abstract", link: "" },
  { year: 2022, title: "Ionic Fluorinated Polymers for Selective Removal of Perfluoroalkyl Substances", authors: "Sahu, S. P.; Clay, A.; Wang, Y.; Donnarumma, F.; Srivastava, R.; Gallo, A.; Junk, T.", venue: "American Chemical Society National Meeting, Spring 2022", location: "USA", format: "Oral Presentation", link: "" },
  { year: 2021, title: "Degradation of PFAS in the UV/BOHP photocatalytic system: Reactor design implications and the effect of operating parameters", authors: "Qanbarzadeh, M.; Wang, D.; Sahu, S. P.; Ateia, M.; Cates, E. L.", venue: "American Chemical Society National Meeting, Fall 2021", location: "USA", format: "Oral Presentation", link: "" },
  { year: 2021, title: "Perfluorinated Anion Exchange Polymeric Materials for Remediation of Perfluoroalkyl Species and Beyond", authors: "Sahu, S.P.; Clay, A.; Nguyen, M.; Wang, Y.", venue: "American Chemical Society National Meeting, Spring 2021", location: "USA", format: "Oral Presentation", link: "" },
  { year: 2020, title: "A One-Shot Learning Framework For Assessment of Fibrillar Collagen From Second Harmonic Generation Images of An Infarcted Myocardium", authors: "Liu, Q.; Mukhopadhyay, S.; Rodriguez, M. X. B.; Fu, X.; Sahu, S.; Burk, D.; Gartia, M.", venue: "2020 IEEE 17th International Symposium on Biomedical Imaging (ISBI)", location: "USA", format: "Oral Presentation", link: "https://doi.org/10.1109/ISBI45749.2020.9098444" },
  { year: 2019, title: "Visible-to-Ultraviolet Upconversion Sensitized Photocatalysis: Fact or Fiction?", authors: "Sahu, S. P.; Cates, E. L.", venue: "Raman Memorial Conference 2019 on Physics of 2D Materials: Theory and Experiments", location: "Pune, India", format: "Oral Presentation", link: "" },
  { year: 2019, title: "Characterizing Differentiation Potential of Adipose-derived Stem Cells using Gold Nanorods by Dark-Field Hyperspectral Scattering Microscopy", authors: "Sahu, S. P.; Mehta, N.; Shaik, S.; Devireddy, R.; Gartia, M. R.", venue: "257th American Chemical Society National Meeting", location: "Orlando, FL, USA", format: "Oral Presentation", link: "" },
  { year: 2019, title: "Development of Electrochemical Sensor for Phosphate Ion Determination in Environmental Water", authors: "Sahu, S. P.; Prasad, A.; Gartia, M. R.", venue: "257th American Chemical Society National Meeting", location: "Orlando, FL, USA", format: "Oral Presentation", link: "" },
  { year: 2019, title: "Orientation Imaging of Single Molecules on Plasmonic Nanohole Arrays by Second Harmonic Generation Microscopy", authors: "Sahu, S. P.; Mahigir, A.; Chidester, B.; Veronis, G.; Gartia, M. R.", venue: "257th American Chemical Society National Meeting", location: "Orlando, FL, USA", format: "Oral Presentation", link: "" },
  { year: 2019, title: "Dark-Field Hyperspectral Imaging of Single Plasmonic Gold Nanorods and Their Scattering Characteristics in Complex Biological Environments", authors: "Mehta, N.†; Sahu, S.†; Shaik, S.; Devireddy, R.; Gartia, M. R.", venue: "SPIE BiOS Conference 2019", location: "San Francisco, California, USA", format: "Oral Presentation", link: "https://doi.org/10.1117/12.2510836" },
  { year: 2019, title: "Non-invasive Spectral Analysis of Osteogenic and Adipogenic Differentiation in Adipose Derived Stem Cells using Dark-field Hyperspectral Imaging Technique", authors: "Mehta, N.; Shaik, S.; Sahu, S.; Devireddy, R.; Gartia, M. R.", venue: "SPIE BiOS Conference 2019", location: "San Francisco, California, USA", format: "Oral Presentation", link: "https://doi.org/10.1117/12.2508731" },
  { year: 2018, title: "Photocatalytic degradation of PFAS by BiPO4 microparticles", authors: "Cates, E. L.; Sahu, S. P.", venue: "255th American Chemical Society National Meeting", location: "New Orleans, LA, USA", format: "Oral Presentation", link: "" },
  { year: 2016, title: "Development of Radiocatalytic Approaches Towards Water Treatment", authors: "Sahu, S.; Cates, E. L.; Johnson, T. A.", venue: "251st American Chemical Society National Meeting", location: "San Diego, USA", format: "Oral Presentation", link: "" },
  { year: 2014, title: "Nanoscale Carbon Dots- From Energy Conversion to Photocatalysts and Mechanistic Implications", authors: "Sahu, S.; Sun, Y.-P.", venue: "247th ACS National Meeting", location: "Dallas, USA", format: "Poster Presentation", link: "" },
  { year: 2013, title: "Nanoscale Dirty Carbon with Plenty of Beauties - From Energy Conversion to Photocatalysts and Mechanistic Implications", authors: "Sahu, S.; Sun, Y.-P.", venue: "The 18th International conference on Semiconductor Photocatalysis and Solar Energy Conversion (SPASEC-18)", location: "San Diego, California, USA", format: "Oral Presentation", link: "" },
];

export const projectFunding = {
  awarded: [
    {
      label: "DST-ANRF Ramanujan Fellowship 2023–2028",
      cost: "Project Cost: ₹119 Lakhs",
      title: "Understanding Photo-electrocatalytic Charge Transfer Processes in CO2 to Solar Chemical Fuel Conversion Using Carbon Dots: Towards Development of Metal Free Electrocatalysts",
      pi: "PI: Dr. Sushant Sahu",
    },
  ],
  submitted: [
    {
      label: "ANRF-ARG 2026",
      title: "Portable Electrochemical Sensor Integrated with Machine Learning Model for Accurate and Quantitative Determination of Perfluoroalkyl Acids from Various Water Sources",
      pi: "PI: Dr. Sushant Sahu (KIIT)",
      coPi: "Co-PI: Prof. Rojalin Sahu (KIIT)",
    },
    {
      label: "ANRF MAHA WATER PROGRAM 2026",
      title: "Remediation of Perfluoroalkyl Substances and Heavy Metals by Fluorinated Polymers: Separation Mechanisms, Role of Polymer Structure, and Performance in a Practical System for Community-Based Water Treatment Technologies in Odisha",
      pi: "PI: Dr. Sushant Sahu",
      coPi: "Co-PIs: Dr. Narayan Jena (KIIT), Prof. Rojalin Sahu (KIIT), Dr. Sushma Chakraborty (ICT Bhubaneswar)",
    },
  ],
};

export const teachingHistory = [
  {
    period: "2024–2026",
    institution: "Amity University",
    details: [
      "Bioanalytical Methods",
      "Advanced Analytical Techniques",
      "Introduction to Bioanalytical Techniques Lab",
      "Selected Topics",
    ],
    audience: "B.Tech., B.Sc., M.Sc., M.Tech. and Ph.D. students",
  },
  {
    period: "Fall/Spring 2021",
    institution: "University of Louisiana at Lafayette",
    details: [
      "General Chemistry Lecture CHEM 107",
      "General Chemistry Lab CHEM 115",
    ],
    audience: "Undergraduate chemistry students",
  },
  {
    period: "Fall/Spring 2021–2022",
    institution: "University of Louisiana at Lafayette",
    details: [
      "Organic Lab I CHEM 233",
      "Inorganic Chemistry Laboratory CHEM 252",
    ],
    audience: "Undergraduate chemistry students",
  },
  {
    period: "Current",
    institution: "KIIT University",
    details: [
      "CH10001 Chemistry",
    ],
    audience: "B.Tech. First Year",
  },
];

export const teachingApproach = [
  "Weekly laboratory experiments",
  "Video lectures",
  "Lab recitations",
  "Homework assignments",
  "Quizzes",
  "Laboratory discussions",
  "Troubleshooting and problem solving",
  "Scientific writing",
  "Project-oriented learning",
  "Cooperative learning",
  "Active learning",
  "Literature-based learning",
  "Online video tutorials and lectures",
  "Regular office hours",
];

export const studentMentoring = [
  {
    name: "Mr. Rahul Bhise",
    degree: "M.Sc., Shivaji University",
    role: "Project Associate / Ph.D. Student at Amity University",
    period: "January 2024 – April 2026",
    project: "Development of catalysts for electrochemical water splitting and beyond",
  },
  {
    name: "Priyamvada Arte",
    degree: "M.Tech. Student",
    role: "Student mentee",
    period: "2024–2025",
    project: "Research project supervision",
  },
  {
    name: "Dhruv Faldu",
    degree: "B.Tech. Student",
    role: "Student mentee",
    period: "2025–2026",
    project: "Capstone and research engagement",
  },
  {
    name: "Prathamesh Thepade",
    degree: "B.Tech. Student",
    role: "Student mentee",
    period: "2025–2026",
    project: "Capstone and research engagement",
  },
  {
    name: "Prachi Singh",
    degree: "M.Sc. Student",
    role: "Student mentee",
    period: "2026",
    project: "Research mentoring",
  },
  {
    name: "Dhruv Singh",
    degree: "M.Sc. Student",
    role: "Student mentee",
    period: "2026",
    project: "Research mentoring",
  },
];

export const labLeadership = [
  "Technical instrument scheduling",
  "Equipment troubleshooting and maintenance",
  "Coordination with vendor engineers",
  "Procedures and standards",
  "Laboratory inventory",
  "Laboratory training",
  "Procurement",
  "Common laboratory infrastructure",
  "Health and safety compliance",
  "Project solicitation",
  "Manuscript editing",
  "Funding-source identification",
  "Grant writing",
  "Staff recruitment",
  "Advisory and judging committees",
  "NBA accreditation documentation",
];

export const professionalAffiliations = [
  { org: "American Chemical Society (ACS)", period: "Member, 2013–Present" },
  { org: "Clemson University Postdoctoral Association (CUPDA)", period: "Member, 2015–2016" },
  { org: "American Association for Advancement of Science (AAAS)", period: "Member, 2012–2014" },
  { org: "Optical Society of America (OSA)", period: "Member, 2008–2016" },
  { org: "Society for Applied Spectroscopy (SAS)", period: "Member, 2015–2016" },
];

export const professionalActivities = [
  "Participated in 6th International Workshop on Photoluminescence in Rare-Earths: Photonic Materials and Devices (PRE'16), Greenville, SC, USA, June 2016.",
  "Participated in 248th ACS National Meeting, San Francisco, California, USA, August 2014.",
  "Participated in 249th ACS National Meeting, Denver, Colorado, USA, March 2015.",
  "Participated in Southeast Regional Meeting of American Chemical Society (SERMACS-2013), Atlanta, Georgia, USA, November 2013.",
  "Participated in The 17th International Conference on Semiconductor Photocatalysis and Solar Energy Conversion (SPASEC-17), Jacksonville, Florida, USA, November 2012.",
  "Participated in Frontiers in the Characterization and Control of Magnetic Carriers Conference at Clemson, SC, April 2009.",
  "Participated in OSA Educational Outreach Presentation at middle school in Anderson, SC, Fall 2008.",
];

export const academicProfileTabs = [
  "Education",
  "Academic Appointments",
  "Awards & Honors",
  "Patents",
  "Conference Presentations",
  "Research Projects",
  "Teaching",
  "Student Mentoring",
  "Research Leadership",
  "Professional Services",
];

export const academicProfileSummary = "The academic profile below captures the broad research expertise, scholarly record, mentoring responsibilities and professional service associated with Dr. Sushant Prabhakar Sahu's role as a faculty member, PI and research leader.";
