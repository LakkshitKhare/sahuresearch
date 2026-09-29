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
  tocGraphic?: string;
  keywords?: string[];
};

function archivedPublication(
  year: number,
  title: string,
  authors: string,
  journal: string,
  doi: string,
  volume = "",
  tocGraphic?: string,
): Publication {
  return {
    year,
    title,
    authors,
    journal,
    volume,
    doi,
    url: `https://doi.org/${doi}`,
    ...(tocGraphic ? { tocGraphic } : {}),
  };
}

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
    tocGraphic: "/lab/1stpub.png",
    keywords: ["hydrogen generation", "Ru nanoparticles", "electrochemistry", "catalysis"],
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
    tocGraphic: "/lab/5thpub.png",
    keywords: ["PFAS", "screen-printed electrode", "sensing", "ionomer coating"],
  },
  {
    year: 2020,
    title:
      "Impacts of Reactor Configuration, Degradation Mechanisms, and Water Matrices on Perfluorocarboxylic Acid Treatment Efficiency by the UV/Bi₃O(OH)(PO₄)₂ Photocatalytic Process",
    authors: "Mojtaba Qanbarzadeh, Dawei Wang, Mohamed Ateia, **Sushant P. Sahu**, Ezra L. Cates",
    journal: "ACS ES&T Engineering",
    volume: "1(2), 239–248",
    doi: "10.1021/acsestengg.0c00086",
    url: "https://doi.org/10.1021/acsestengg.0c00086",
    tocGraphic: "/lab/impact.png",
    keywords: ["PFAS", "photocatalysis", "water treatment", "reactor configuration"],
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
    tocGraphic: "/lab/slide12.png",
    keywords: ["phosphate", "printed electrode", "environmental sensing", "water quality"],
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
    tocGraphic: "/lab/slide23.png",
    keywords: ["PFAS", "photocatalyst", "degradation", "ultraviolet"],
  },
  archivedPublication(
    2025,
    "Monitoring Molecular Interactions with Cell Membranes Using Time-Dependent Second Harmonic Generation Microscopy",
    "Prakash Hamal, **Sushant P. Sahu**, Peter P. Piers, Huy Nguyen, Shashank S. Kamble, Robin L. McCarley, Manas R. Gartia, Louis H. Haber",
    "Biochemistry",
    "10.1021/acs.biochem.4c00302",
    "64(7), 1476–1483",
    "/lab/2ndpub.png",
  ),
  archivedPublication(
    2025,
    "Guanine-Assisted Contrived Low Pt-Integrated Mo₂C/C for Hydrogen Evolution Reaction",
    "Tapan Ping, Smruti Vardhan Purohit, **Sushant P. Sahu**, Bibek Dash, Bikash Kumar Jena",
    "Langmuir",
    "10.1021/acs.langmuir.4c04383",
    "41(5), 3392–3401",
    "/lab/3rdpub.png",
  ),
  archivedPublication(
    2025,
    "Polystyrene-Based Fluorinated Ionic Receptor for Selective Removal of Perfluoroalkyl Contaminants from Water",
    "**Sushant P. Sahu**, Oluwaseun T. Adeleye, Samuel Antwi, Fabrizio Donnarumma, Nagapradeep Nidamanuri, Rahul Bhise, Eknath Gadekar, Sanjay Sharma, Radhey Srivastava, Yu Wang",
    "Reactive and Functional Polymers",
    "10.1016/j.reactfunctpolym.2024.106138",
    "204, 106138",
    "/lab/4th.png",
  ),
  archivedPublication(
    2024,
    "Machine Learning for Automated Classification of Lung Collagen in a Urethane-Induced Lung Injury Mouse Model",
    "Khalid Hamad Alnafisah, Amit Ranjan, **Sushant P. Sahu**, Jianhua Chen, Sarah Mohammad Alhejji, Alexandra Noël, Manas Ranjan Gartia, Supratik Mukhopadhyay",
    "Biomedical Optics Express",
    "10.1364/BOE.527972",
    "15(10), 5980–5995",
    "/lab/2024_2.png",
  ),
  archivedPublication(
    2023,
    "Efficient Synthesis of High-Performance Anion Exchange Membranes by Applying Clickable Tetrakis(dialkylamino)phosphonium Cations",
    "Yu Wang, Yudong Wang, **Sushant P. Sahu**, August A. Gallo, Xiao-Dong Zhou",
    "Polymers",
    "10.3390/polym15020352",
    "15(2), 352",
    "/lab/2023_1.png",
  ),
  archivedPublication(
    2023,
    "Current Prospects of Carbon-Based Nanodots in Photocatalytic CO₂ Conversion",
    "**Sushant P. Sahu**, Christabel Adjah-Tetteh, Nagapradeep Nidamanuri, Sumit K. Sonkar, Erin U. Antia, Tam Tran, Guanguang Xia, Yudong Wang, Ryan Simon, Manas Ranjan Gartia, Supratik Mukhopadhyay, Yu Wang, Xiao-Dong Zhou",
    "Carbon Quantum Dots for Sustainable Energy and Optoelectronics",
    "10.1016/B978-0-323-90895-5.00020-5",
    "2023, Chapter 20",
    "/lab/2023_2.png",
  ),
  archivedPublication(
    2022,
    "Miscellaneous Dimensional Coordination Polymers and Luminescence Emission Properties of Cadmium(II)-Pseudohalide Complexes",
    "Franz A. Mautner, Roland C. Fischer, Nahed M. H. Salem, Andre J. Darbonne, Shea L. Silhan, Zahra Haghighijoo, **Sushant P. Sahu**, Febee R. Louka, Salah S. Massoud",
    "Inorganica Chimica Acta",
    "10.1016/j.ica.2022.120871",
    "535, 120871",
    "/lab/2022_2.png",
  ),
  archivedPublication(
    2021,
    "Mmp12 Is Upregulated by in utero Second-Hand Smoke Exposures and Is a Key Factor Contributing to Aggravated Lung Responses in Adult Emphysema, Asthma, and Lung Cancer Mouse Models",
    "Alexandra Noël, Zakia Perveen, Rui Xiao, Harriet Hammond, Viviana Le Donne, Kelsey Legendre, Manas Ranjan Gartia, **Sushant P. Sahu**, Daniel B. Paulsen, Arthur L. Penn",
    "Frontiers in Physiology",
    "10.3389/fphys.2021.704401",
    "12, 704401",
    "/lab/2021_3.png",
  ),
  archivedPublication(
    2021,
    "Concurrent Atom Transfer Radical Polymerization and Nitroxide Radical Coupling Relay Polymerization",
    "Yu Wang, **Sushant P. Sahu**, Alec J. Clay, Amanda J. Gildersleeve",
    "Chemical Communications",
    "10.1039/d1cc00682g",
    "57(27), 3331–3334",
    "/lab/2021_4.png",
  ),
  archivedPublication(
    2022,
    "In utero Exposure to Electronic-Cigarette Aerosols Decreases Lung Fibrillar Collagen Content, Increases Newtonian Resistance and Induces Sex-Specific Molecular Signatures in Neonatal Mice",
    "Kerin M. Cahill, Manas R. Gartia, **Sushant P. Sahu**, Sarah R. Bergeron, Linda M. Heffernan, Daniel B. Paulsen, Arthur L. Penn",
    "Toxicological Research",
    "10.1007/s43188-021-00103-3",
    "37(4), 497–508",
    "/lab/2022_3.png",
  ),
  archivedPublication(
    2021,
    "Stereochemical Geometries and Photoluminescence in Pseudo-Halido-Zinc(II) Complexes. Structural Comparison between the Corresponding Cadmium(II) Analogs",
    "Franz A. Mautner, Roland C. Fischer, Ana Torvisco, Nahed M. H. Salem, Amber R. Dugas, Shelby F. Aaron, **Sushant P. Sahu**, Febee R. Louka, Salah S. Massoud",
    "Inorganics",
    "10.3390/inorganics9070053",
    "9(7), 53",
    "/lab/2021_5.png",
  ),
  archivedPublication(
    2021,
    "Multimodal Label-Free Monitoring of Adipogenic Stem Cell Differentiation Using Endogenous Optical Biomarkers",
    "Nishir Mehta, Shahensha Shaik, Alisha Prasad, Ardalan Chaichi, **Sushant P. Sahu**, Qianglin Liu, Syed Mohammad Abid Hasan, Elnaz Sheikh, Fabrizio Donnarumma, Kermit K. Murray, Xing Fu, Ram Devireddy, Manas Ranjan Gartia",
    "Advanced Functional Materials",
    "10.1002/adfm.202103955",
    "31(43), 2103955",
    "/lab/2021_6.png",
  ),
  archivedPublication(
    2021,
    "Characterization of Fibrillar Collagen Isoforms in Infarcted Mouse Hearts Using Second Harmonic Generation Imaging",
    "**Sushant P. Sahu**, Qianglin Liu, Alisha Prasad, Syed Mohammad Abid Hasan, Qun Liu, Maria Ximena Bastidas Rodriguez, Orna Mukhopadhyay, David Burk, Joseph Francis, Supratik Mukhopadhyay, Xing Fu, Manas Ranjan Gartia",
    "Biomedical Optics Express",
    "10.1364/BOE.410347",
    "11(11), 6429–6444",
    "/lab/2021_7.png",
  ),
  archivedPublication(
    2021,
    "Dark-Field Hyperspectral Imaging (DF-HSI) Modalities for Characterization of Single Molecule and Cellular Processes",
    "Nishir Mehta, **Sushant P. Sahu**, Shahensha Shaik, Ram Devireddy, Manas Ranjan Gartia",
    "Nanophotonics in Biomedical Engineering",
    "10.1007/978-981-15-6137-5_8",
    "2020, 231–262",
    "/lab/2021_8.png",

  ),
  archivedPublication(
    2021,
    "Dark-Field Hyperspectral Imaging for Label-Free Detection of Nano-Bio-Materials",
    "Nishir Mehta, **Sushant P. Sahu**, Shahensha Shaik, Ram Devireddy, Manas Ranjan Gartia",
    "WIREs Nanomedicine and Nanobiotechnology",
    "10.1002/wnan.1661",
    "13(1), e1661",
    "/lab/2021_9.png",
  ),
  archivedPublication(
    2021,
    "Comment on ‘Enhanced Photocatalytic Degradation of Perfluorooctanoic Acid Using Carbon-Modified Bismuth Phosphate Composite: Effectiveness, Material Synergy, and Roles of Carbon’",
    "Ezra L. Cates, Mojtaba Qanbarzadeh, **Sushant P. Sahu**",
    "Chemical Engineering Journal",
    "10.1016/j.cej.2020.127060",
    "404, 127060",
    "/lab/2021_10.png",
  ),
  archivedPublication(
    2019,
    "Ultrasensitive Three-Dimensional Orientation Imaging of Single Molecules on Plasmonic Nanohole Arrays Using Second Harmonic Generation",
    "**Sushant P. Sahu**, Amirreza Mahigir, Benjamin Chidester, Georgios Veronis, Manas Ranjan Gartia",
    "Nano Letters",
    "10.1021/acs.nanolett.9b02239",
    "19(9), 6192–6202",
    "/lab/2019_1.png",
  ),
  archivedPublication(
    2019,
    "Ripple-Mediated Surface-Enhanced Raman Spectroscopy on Graphene",
    "Alisha Prasad, Ardalan Chaichi, Amirreza Mahigir, **Sushant P. Sahu**, Deepak Ganta, Georgios Veronis, Manas Ranjan Gartia",
    "Carbon",
    "10.1016/j.carbon.2019.09.078",
    "",
    "/lab/2019_2.png",
  ),
  archivedPublication(
    2018,
    "The Myth of Visible Light Photocatalysis Using Lanthanide Upconversion Materials",
    "**Sushant P. Sahu**, Stephanie L. Cates, Hyoung-Il Kim, Jae-Hong Kim, Ezra L. Cates",
    "Environmental Science & Technology",
    "10.1021/acs.est.7b05941",
    "52(5), 2973–2980",
    "/lab/2018_2.png",
  ),
  archivedPublication(
    2017,
    "Carbon Nanotubes for Photoinduced Energy Conversion Applications",
    "Ge Peng, **Sushant P. Sahu**, Mohammed J. Meziani, Li Cao, Yamin Liu, Ya-Ping Sun",
    "Nanomaterials Handbook",
    "10.1201/9781315371795-10",
    "2017, 273–308",
    "/lab/2017_1.png",

  ),
  archivedPublication(
    2017,
    "X-Ray Radiocatalytic Activity and Mechanisms of Bismuth Complex Oxides",
    "**Sushant P. Sahu**, Ezra L. Cates",
    "The Journal of Physical Chemistry C",
    "10.1021/acs.jpcc.7b00776",
    "121(19), 10538–10545",
    "/lab/2017_2.png",
  ),
  archivedPublication(
    2016,
    "Bacteria Inactivation via X-Ray-Induced UVC Radioluminescence: Toward in Situ Biofouling Prevention in Membrane Modules",
    "Timothy A. Johnson, Elisa A. Rehak, **Sushant P. Sahu**, David A. Ladner, Ezra L. Cates",
    "Environmental Science & Technology",
    "10.1021/acs.est.6b04239",
    "50(21), 11912–11921",
    "/lab/2016_1.png",
  ),
  archivedPublication(
    2015,
    "Carbon Quantum Dots and Applications in Photocatalytic Energy Conversion",
    "K. A. Shiral Fernando, **Sushant P. Sahu**, Yamin Liu, William K. Lewis, Elena A. Guliants, Amirhossein Jafariyan, Ping Wang, Christopher E. Bunker, Ya-Ping Sun",
    "ACS Applied Materials & Interfaces",
    "10.1021/acsami.5b00448",
    "7(17), 8363–8376",
    "/lab/6th.png",
  ),
  archivedPublication(
    2015,
    "Carbon Dioxide Photoconversion Driven by Visible-Light Excitation of Small Carbon Nanoparticles in Various Configurations",
    "**Sushant P. Sahu**, Li Cao, Mohammed J. Meziani, Christopher E. Bunker, K. A. Shiral Fernando, Ping Wang, Ya-Ping Sun",
    "Chemical Physics Letters",
    "10.1016/j.cplett.2015.05.073",
    "630, 49–54",
    "/lab/2015_2.png",
  ),
  archivedPublication(
    2014,
    "Visible-Light Photoconversion of Carbon Dioxide into Organic Acids in an Aqueous Solution of Carbon Dots",
    "**Sushant P. Sahu**, Yamin Liu, Ping Wang, Christopher E. Bunker, K. A. Shiral Fernando, William K. Lewis, Elena A. Guliants, Fan Yang, Jinping Wang, Ya-Ping Sun",
    "Langmuir",
    "10.1021/la5010209",
    "30(29), 8631–8636",
    "/lab/2014_1.png"
  ),
  archivedPublication(
    2013,
    "Carbon ‘Quantum’ Dots for Optical Bioimaging",
    "Pengju G. Luo, **Sushant P. Sahu**, Sheng-Tao Yang, Sumit K. Sonkar, Jinping Wang, Haifang Wang, Gregory E. LeCroy, Li Cao, Ya-Ping Sun",
    "Journal of Materials Chemistry B",
    "10.1039/c3tb00018d",
    "1(16), 2116–2127",
    "/lab/2013_1.png"
  ),
  archivedPublication(
    2013,
    "Versatility with Carbon Dots – from Overcooked BBQ to Brightly Fluorescent Agents and Photocatalysts",
    "Jinping Wang, **Sushant P. Sahu**, Sumit K. Sonkar, Kenneth N. Tackett II, Katherine W. Sun, Yamin Liu, Halidan Maimaiti, Parambath Anilkumar, Ya-Ping Sun",
    "RSC Advances",
    "10.1039/c3ra42302f",
    "3, 15604–15607",
    "/lab/2013_2.png"
  ),
  archivedPublication(
    2013,
    "Carbon-Core Silver-Shell Nanodots as Sensitizers for Phototherapy and Radiotherapy",
    "Andrius Kleinauskas, Sandra Rocha, **Sushant P. Sahu**, Ya-Ping Sun, Petras Juzenas",
    "Nanotechnology",
    "10.1088/0957-4484/24/32/325103",
    "24(32), 325103",
    "/lab/2013_3.png"
  ),
  archivedPublication(
    2012,
    "Competitive Performance of Carbon ‘Quantum’ Dots in Optical Bioimaging",
    "Li Cao, Sheng-Tao Yang, Xin Wang, Pengju G. Luo, Jia-Hui Liu, **Sushant P. Sahu**, Yamin Liu, Ya-Ping Sun",
    "Theranostics",
    "10.7150/thno.3912",
    "2(4), 295–301",
    "/lab/2012_1.png"
  ),
  archivedPublication(
    2012,
    "Linear and Nonlinear Optical Properties of Modified Graphene-Based Materials",
    "Li Cao, **Sushant P. Sahu**, Parambath Anilkumar, Chang Yi Kong, Ya-Ping Sun",
    "MRS Bulletin",
    "10.1557/mrs.2012.178",
    "37(12), 1283–1289",
    "/lab/2012_2.png",
  ),
  archivedPublication(
    2013,
    "Photoluminescence Properties of Graphene versus Other Carbon Nanomaterials",
    "Li Cao, Mohammed J. Meziani, **Sushant P. Sahu**, Ya-Ping Sun",
    "Accounts of Chemical Research",
    "10.1021/ar300128j",
    "46(1), 171–180",
    "/lab/2013_4.png",
  ),
  archivedPublication(
    2013,
    "Efficient Fluorescence Quenching in Carbon Dots by Surface-Doped Metals: Disruption of Excited State Redox Processes and Mechanistic Implications",
    "Juan Xu, **Sushant P. Sahu**, Li Cao, Christopher E. Bunker, Ge Peng, Yamin Liu, K. A. Shiral Fernando, Ping Wang, Elena A. Guliants, Mohammed J. Meziani, Haijun Qian, Ya-Ping Sun",
    "Langmuir",
    "10.1021/la302506e",
    "28(38), 134 ಆಡ",
    "/lab/2013_5.png",

  ),
  archivedPublication(
    2011,
    "Fullerenes for Applications in Biology and Medicine",
    "Parambath Anilkumar, Fushen Lu, Li Cao, Pengju G. Luo, Jia-Hui Liu, **Sushant P. Sahu**, Kenneth N. Tackett II, Yu Wang, Ya-Ping Sun",
    "Current Medicinal Chemistry",
    "10.2174/092986711795656225",
    "18(14), 2045–2059",
    "/lab/2011_1.png",
  ),
  archivedPublication(
    2011,
    "Carbon Nanoparticles as Chromophores for Photon Harvesting and Photoconversion",
    "Juan Xu, **Sushant P. Sahu**, Li Cao, Parambath Anilkumar, Kenneth N. Tackett II, Haijun Qian, Christopher E. Bunker, Elena A. Guliants, Alexander Parenzan, Ya-Ping Sun",
    "ChemPhysChem",
    "10.1002/cphc.201100640",
    "12(18), 3604–3608",
    "/lab/2011_2.png",
  ),
  archivedPublication(
    2011,
    "Carbon Nanoparticles as Visible-Light Photocatalysts for Efficient CO₂ Conversion and Beyond",
    "Li Cao, **Sushant P. Sahu**, Parambath Anilkumar, Christopher E. Bunker, Juan Xu, K. A. Shiral Fernando, Ping Wang, Elena A. Guliants, Kenneth N. Tackett, Ya-Ping Sun",
    "Journal of the American Chemical Society",
    "10.1021/ja200804h",
    "133(39), 15522–15529",
    "/lab/2011_3.png",
  ),
  archivedPublication(
    2011,
    "Toward Quantitatively Fluorescent Carbon-Based ‘Quantum’ Dots",
    "Parambath Anilkumar, Xin Wang, Li Cao, **Sushant P. Sahu**, Jia-Hui Liu, Ping Wang, Katerina Korch, Kenneth N. Tackett II, Alexander Parenzan, Ya-Ping Sun",
    "Nanoscale",
    "10.1039/c0nr00962h",
    "3(5), 2023–2027",
    "/lab/2011_4.png",
  ),
  archivedPublication(
    2011,
    "Carbon Dots of Different Composition and Surface Functionalization: Cytotoxicity Issues Relevant to Fluorescence Cell Imaging",
    "Yanli Wang, Parambath Anilkumar, Li Cao, Jia-Hui Liu, Pengju G. Luo, Kenneth N. Tackett, **Sushant P. Sahu**, Ping Wang, Xin Wang, Ya-Ping Sun",
    "Experimental Biology and Medicine",
    "10.1258/ebm.2011.011132",
    "236(11), 1231–1238",
    "/lab/2011_5.png",
  ),
  archivedPublication(
    2011,
    "Noncovalent Interactions of Derivatized Pyrenes with Metallic and Semiconducting Single-Walled Carbon Nanotubes",
    "Parambath Anilkumar, K. A. Shiral Fernando, Li Cao, Fushen Lu, Fengchun Yang, Wei-Li Song, **Sushant P. Sahu**, Haijun Qian, Tim J. Thorne, Ankoma Anderson, Ya-Ping Sun",
    "The Journal of Physical Chemistry C",
    "10.1021/jp202508r",
    "",
    "/lab/2011_6.png",
  ),
  archivedPublication(
    2011,
    "Reverse Stern–Volmer Behavior for Luminescence Quenching in Carbon Nanoparticles",
    "Li Cao, Parambath Anilkumar, Xin Wang, Jia-Hui Liu, **Sushant P. Sahu**, Mohammed J. Meziani, Ethan Myers, Ya-Ping Sun",
    "Canadian Journal of Chemistry",
    "10.1139/V10-096",
    "89(2), 104–112",
    "/lab/2011_7.png",
  ),
  archivedPublication(
    2009,
    "Nanoscale 3D Tracking with Conjugated Polymer Nanoparticles",
    "Jiangbo Yu, Changfeng Wu, **Sushant P. Sahu**, Lawrence P. Fernando, Craig Szymanski, Jason McNeill",
    "Journal of the American Chemical Society",
    "10.1021/ja907228q",
    "131(51), 18410–18414",
    "/lab/2009_1.png",
  ),
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
