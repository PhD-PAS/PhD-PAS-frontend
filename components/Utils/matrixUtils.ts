// export const programExpanded = [
//   "BT",
//   "BS",
//   "DoubleMajor",
//   "DualA",
//   "DualB",
//   "DualC",
//   "MT",
//   "MSR",
//   "MSc",
//   "MDes",
//   "MBA",
//   "PhD",
// ];

export const programPhDExpanded = ["PhD"];

// export const programCondensed = [
//   "BT/BS/Double Major",
//   "Dual",
//   "MT/MSc/MSR",
//   "MDes",
//   "MBA",
//   "PhD",
// ];

export const StagesofPhD = [
  "Open seminar given, thesis yet to submit",
  "Thesis submitted, yet to defend",
  "Thesis defended. degree will be awarded in next convocation",
  "PhD degree awarded in current year",
];

export const Branches = [
  "MSE",
  "ME",
  "EE",
  "ES",
  "CHE",
  "BSBE",
  "SEE",
  "DOMS",
  "CSE",
  "CGS",
  "HSS",
  "CE",
  "PSEP",
  "PHY",
  "AE",
  "DES",
  "MSP",
  "CHM",
  "MTH",
];

export type programType = {
  BT: number;
  BS: number;
  MT: number;
  DoubleMajor: number;
  DualA: number;
  DualB: number;
  DualC: number;
  MDes: number;
  MBA: number;
  PhD: number;
  MSc: number;
  MSR: number;
};

export const func = {
  MSE: {
    "Field-assisted-sintering": "1",
    Catalysis: "2",
    "High-entropy-oxides/alloys": "3",
    "Additive-manufacturing": "4",
    "Opto-electronic-devices": "5",
    "Lightweight-alloys": "6",
    "Solar-cells": "7",
    "Memory-devices": "8",
    "Phase-field-modeling": "9",
    "Image-processing": "10",
    Biomaterials: "11",
    "Organic-electronics": "12",
    Batteries: "13",
    "Fuel-cells": "14",
    "Hydrogen-production-and-storage": "15",
    "Recovery-and-recycling-of-materials": "16",
  },
  ME: {
    Combustion: "17",
    CFD: "18",
    FEM: "19",
    "Additive-manufacturing": "20",
    "Non-conventional-Machining": "21",
    "Material-Modelling": "22",
    Robotic: "23",
    Acoustic: "24",
    "Non-linear-dynamics": "25",
    Engine: "26",
  },
  EE: {
    "Energy-Harvesting,": "27",
    "Optical-Wireless-Communication-(LI-Fi,-VLC,-IRS)": "28",
    "Optical-Networks-(PON,-EON)": "29",
    "5G/6G-Networks-(NOMA,-RSMA,-IRS)": "30",
    "Wireless-Sensor-Networks": "31",
    "RF-IC-Design": "32",
    "Flexible-Electronics": "33",
    "Mixed-Signal-and-Analog-IC-design": "34",
    Optimization: "35",
    "Big-Data": "36",
    "Machine-Learning": "37",
    "Audio-Video-Speech-Processing": "38",
    "BMS-and-Smart-Charger": "39",
    "RF-antenna-for-5G-networks": "40",
  },
  ES: {
    "Exploration-Seismology,-Geophysics,-&-Resource-Exploration": "41",
    "Earthquake-cycle-modeling,-Friction-Experiments": "42",
    "Tectonics,-Geodynamics-&-Crustal-Evolution": "43",
    "Sedimentology-and-Basin-Analysis": "44",
    "Planetary-&-Terrestrial-Remote-Sensing": "45",
    "Structural-Geology-&-Rock-Mechanics": "46",
    "Economic-Geology-&-Mineral-Exploration": "47",
    "River-Science,-Morphology,-Dynamics,-&-Climate-Change": "48",
    "Global-Water-Cycle,-Glacier-Mass-Budget": "49",
    "Cryospheric-Processes,-Glaciology,-Paleoclimate": "50",
    "Active-Tectonics-&-Paleoseismology": "51",
    "Impact-Cratering-&-Rock-Magnetism": "52",
    "Hydrology,-Geomorphology,-Flood-Hazards": "53",
    "Petrology,-Geochemistry-&-Mantle-Dynamics": "54",
  },
  CHE: {
    "Materials-and-Nanotechnology": "55",
    "Biotechnology-and-Bio-systems": "56",
    "Catalysis-and-Reaction-Engineering": "57",
    "Complex-fluids-and-Soft-Matter": "58",
    "Theory,-Computation-and-Machine-Learning": "59",
    "Energy-and-Sustainability": "60",
    "Applied-mathematics": "61",
    "Multiphase-flow": "62",
    "Process-Engineering-and-Design": "63",
    "Sensor-development": "64",
  },
  BSBE: {
    Biomaterials: "65",
    "Protein-biochemistry": "66",
    "Developmental-biology": "67",
    "Microscopy-and-imaging": "68",
    Neurobiology: "69",
    Microbiology: "70",
    Biophysics: "71",
    "Genetic-engineering": "72",
    "Tissue-engineering": "73",
    Oncology: "74",
  },
  SEE: {
    "Solar-Thermal": "75",
    "Solar-Photovoltaics": "76",
    "Wind-Energy": "77",
    "Batteries-and-Supercapacitors": "78",
    "Fuel-Cells-and-Electrolyzers": "79",
    "Electric-Vehicle": "80",
    "Hydrogen-and-Alternative-Fuels": "81",
    "Energy-Policy-and-Regulation": "82",
    "Efficient-Buildings": "83",
    "Battery-Thermal-Mangement-System": "84",
  },
  DOMS: {
    "Human-resource-Analytics": "85",
    "Talent-management": "86",
    "Data-analysis": "87",
    "Machine-Learning": "88",
    "Human-Resource-strategy": "89",
    "Data-Administration": "90",
    "Strategic-management": "91",
    Entrepreneurship: "92",
    "Social-entrepreneurship": "93",
    "Sustainable-entrepreneurship": "94",
    "Airline-Operations-Management": "95",
    "Operations-Research": "96",
    "Crew-Management": "97",
    "Maintenance-Operations": "98",
  },
  CSE: {
    "Theoretical-computer-science": "99",
    "Machine-learning": "100",
    "Computer-systems": "101",
    "Computer-networks": "102",
    Bioinformatics: "103",
    "Big-data-analytics": "104",
    "Deep-learning": "105",
    "Programming-languages": "106",
    "Cyber-security": "107",
    Algorithms: "108",
    "Compiler-design": "109",
    "Natural-language-processing-(NLP)": "110",
  },
  CGS: {
    "Data-analysis": "111",
    "Experiment-design": "112",
    "Behavior-modeling": "113",
    "Behavioral-interventions": "114",
    "Assessing-learning-systems": "115",
    "Human-computer-interface-design": "116",
    "Statistical-inference": "117",
    "Scientific-communication": "118",
    "Systems-thinking": "119",
    "Thinking-and-reasoning": "120",
  },
  HSS: {
    "Field-linguistics": "121",
    "dalit-studies": "122",
    "migration-studies": "123",
    "teaching-methods": "124",
    "Environmental-art": "125",
    "visual-design": "126",
    printmaking: "127",
    "Philosophy-of-science": "128",
    "feminist-aesthetics": "129",
    "environment-aesthetics": "130",
    "Organisational-and-Social-cognition": "131",
    "self-formation": "132",
    "neurodevelopmental-disorders": "133",
    digital: "134",
    economy: "135",
    environment: "136",
    "urban-sociology": "137",
    gerentology: "138",
    demography: "139",
  },
  CE: {
    "Hydrology-and-Hydraulics": "140",
    "Structural-Dynamics/Health-Assessment": "141",
    "Management-of-Solid-Waste-and-Waste-Water": "142",
    "Pollution-Mitigation-Technologies": "143",
    "Pavement-Engineering": "144",
    "Traffic-Engineering-and-Intelligent-Transportation-System-(ITS)": "145",
    "Sustainability-and-Life-Cycle-Cost-Analysis-(LCCA)": "146",
    "Remote-Sensing/Lidar/-Geodesy": "147",
    "Soil-Dynamics-and-Earthquake-Engineering": "148",
    "Environmental-Geotechnics-and-Ground-Improvement-Techniques": "149",
  },
  PSEP: {
    "Photonic-Devices-&-Circuits": "150",
    "Biomedical-Imaging": "151",
    "Ultrafast-Laser-&-Spectroscopy": "152",
    Metamaterials: "153",
    "Semiconductor-Devices": "154",
    Nanophotonics: "155",
    "Optical-Fiber-Communication": "156",
    "Nonlinear-Spectroscopy": "157",
    "Quantum-Optics": "158",
    "Light-Matter-Interaction": "159",
  },
  PHY: {
    Keyword: "160",
    "High-Performance-Computing": "161",
    "Computational-Fluid-Dynamics-and-Turbulence": "162",
    "Condensed-Matter-Physics": "163",
    "Soft-Matter-Physics": "164",
    "Atomic-and-Molecular-Physics": "165",
    "Optics-and-its-Application": "166",
    "Astronomy-and-Astrophysics": "167",
    "High-Energy-Physics": "168",
    "Plasma-Physics": "169",
    "Quantitative-Finance": "170",
  },
  AE: {
    "Turbulence-Modeling": "171",
    "Computational-Fluid-Dynamics": "172",
    "Hydrodynamic-Stability": "173",
    "Direct-Numerical-Simulation": "174",
    "Finite-Element/volume-Analysis/Modeling": "175",
    "3D-modelling-tools-Ansys-Abaqus-etc.": "176",
    "Parallel-Computing": "177",
    "Simulink-software": "178",
    "Nonlinear-controls": "179",
    "Fluid-structure-interactions.": "180",
  },
  DES: {
    "Product-and-industrial-design": "181",
    "Music-Technology": "182",
    Robotics: "183",
    "Mobility-design": "184",
    "Visual-communication": "185",
    "Engineering-design": "186",
    "User-Experience-design": "187",
    "Interaction-design": "188",
    "Film-making": "189",
    "Systems-design": "190",
    "Design-theory": "191",
    "Design-management": "192",
  },
  MSP: {
    "Fuel-cells": "193",
    Battery: "194",
    Supercapacitor: "195",
    "RF-sensors": "196",
    "Microwave-absorbers": "197",
    Nanomaterials: "198",
    "Electrochemical-sensors": "199",
    "Polymer-composites": "200",
    "Flexible-electronics": "201",
    "Magnetic-materials": "202",
  },
  CHM: {
    "Organic-Chemistry": "203",
    "Inorganic-Chemistry": "204",
    "Analytical-Chemistry": "205",
    "Physical-Chemistry": "206",
    "Biochemistry/Chemical-Biology": "207",
    "Environmental-Chemistry": "208",
    "Materials-Science": "209",
    Nanotechnology: "210",
    "Computational/Theoretical-Chemistry": "211",
    "Medicinal/Synthetic-Chemistry": "212",
  },
  MTH: {
    "Computational-Methods": "213",
    Optimization: "214",
    "Statistical-Signal-Processing": "215",
    "Data-Mining": "216",
    Econometrics: "217",
    "Regression-Analysis": "218",
    "Bayesian-Computation": "219",
    "Spatial-Statistics": "220",
    "Stochastic-PDE-and-process": "221",
    "Design-of-Experiments": "222",
  },
};

export const rev = {
  1: "MSE-Field-assisted-sintering",
  2: "MSE-Catalysis",
  3: "MSE-High-entropy-oxides/alloys",
  4: "MSE-Additive-manufacturing",
  5: "MSE-Opto-electronic-devices",
  6: "MSE-Lightweight-alloys",
  7: "MSE-Solar-cells",
  8: "MSE-Memory-devices",
  9: "MSE-Phase-field-modeling",
  10: "MSE-Image-processing",
  11: "MSE-Biomaterials",
  12: "MSE-Organic-electronics",
  13: "MSE-Batteries",
  14: "MSE-Fuel-cells",
  15: "MSE-Hydrogen-production-and-storage",
  16: "MSE-Recovery-and-recycling-of-materials",
  17: "ME-Combustion",
  18: "ME-CFD",
  19: "ME-FEM",
  20: "ME-Additive-manufacturing",
  21: "ME-Non-conventional-Machining",
  22: "ME-Material-Modelling",
  23: "ME-Robotic",
  24: "ME-Acoustic",
  25: "ME-Non-linear-dynamics",
  26: "ME-Engine",
  27: "EE-Energy-Harvesting,",
  28: "EE-Optical-Wireless-Communication-(LI-Fi,-VLC,-IRS)",
  29: "EE-Optical-Networks-(PON,-EON)",
  30: "EE-5G/6G-Networks-(NOMA,-RSMA,-IRS)",
  31: "EE-Wireless-Sensor-Networks",
  32: "EE-RF-IC-Design",
  33: "EE-Flexible-Electronics",
  34: "EE-Mixed-Signal-and-Analog-IC-design",
  35: "EE-Optimization",
  36: "EE-Big-Data",
  37: "EE-Machine-Learning",
  38: "EE-Audio-Video-Speech-Processing",
  39: "EE-BMS-and-Smart-Charger",
  40: "EE-RF-antenna-for-5G-networks",
  41: "ES-Exploration-Seismology,-Geophysics,-&-Resource-Exploration",
  42: "ES-Earthquake-cycle-modeling,-Friction-Experiments",
  43: "ES-Tectonics,-Geodynamics-&-Crustal-Evolution",
  44: "ES-Sedimentology-and-Basin-Analysis",
  45: "ES-Planetary-&-Terrestrial-Remote-Sensing",
  46: "ES-Structural-Geology-&-Rock-Mechanics",
  47: "ES-Economic-Geology-&-Mineral-Exploration",
  48: "ES-River-Science,-Morphology,-Dynamics,-&-Climate-Change",
  49: "ES-Global-Water-Cycle,-Glacier-Mass-Budget",
  50: "ES-Cryospheric-Processes,-Glaciology,-Paleoclimate",
  51: "ES-Active-Tectonics-&-Paleoseismology",
  52: "ES-Impact-Cratering-&-Rock-Magnetism",
  53: "ES-Hydrology,-Geomorphology,-Flood-Hazards",
  54: "ES-Petrology,-Geochemistry-&-Mantle-Dynamics",
  55: "CHE-Materials-and-Nanotechnology",
  56: "CHE-Biotechnology-and-Bio-systems",
  57: "CHE-Catalysis-and-Reaction-Engineering",
  58: "CHE-Complex-fluids-and-Soft-Matter",
  59: "CHE-Theory,-Computation-and-Machine-Learning",
  60: "CHE-Energy-and-Sustainability",
  61: "CHE-Applied-mathematics",
  62: "CHE-Multiphase-flow",
  63: "CHE-Process-Engineering-and-Design",
  64: "CHE-Sensor-development",
  65: "BSBE-Biomaterials",
  66: "BSBE-Protein-biochemistry",
  67: "BSBE-Developmental-biology",
  68: "BSBE-Microscopy-and-imaging",
  69: "BSBE-Neurobiology",
  70: "BSBE-Microbiology",
  71: "BSBE-Biophysics",
  72: "BSBE-Genetic-engineering",
  73: "BSBE-Tissue-engineering",
  74: "BSBE-Oncology",
  75: "SEE-Solar-Thermal",
  76: "SEE-Solar-Photovoltaics",
  77: "SEE-Wind-Energy",
  78: "SEE-Batteries-and-Supercapacitors",
  79: "SEE-Fuel-Cells-and-Electrolyzers",
  80: "SEE-Electric-Vehicle",
  81: "SEE-Hydrogen-and-Alternative-Fuels",
  82: "SEE-Energy-Policy-and-Regulation",
  83: "SEE-Efficient-Buildings",
  84: "SEE-Battery-Thermal-Mangement-System",
  85: "DOMS-Human-resource-Analytics",
  86: "DOMS-Talent-management",
  87: "DOMS-Data-analysis",
  88: "DOMS-Machine-Learning",
  89: "DOMS-Human-Resource-strategy",
  90: "DOMS-Data-Administration",
  91: "DOMS-Strategic-management",
  92: "DOMS-Entrepreneurship",
  93: "DOMS-Social-entrepreneurship",
  94: "DOMS-Sustainable-entrepreneurship",
  95: "DOMS-Airline-Operations-Management",
  96: "DOMS-Operations-Research",
  97: "DOMS-Crew-Management",
  98: "DOMS-Maintenance-Operations",
  99: "CSE-Theoretical-computer-science",
  100: "CSE-Machine-learning",
  101: "CSE-Computer-systems",
  102: "CSE-Computer-networks",
  103: "CSE-Bioinformatics",
  104: "CSE-Big-data-analytics",
  105: "CSE-Deep-learning",
  106: "CSE-Programming-languages",
  107: "CSE-Cyber-security",
  108: "CSE-Algorithms",
  109: "CSE-Compiler-design",
  110: "CSE-Natural-language-processing-(NLP)",
  111: "CGS-Data-analysis",
  112: "CGS-Experiment-design",
  113: "CGS-Behavior-modeling",
  114: "CGS-Behavioral-interventions",
  115: "CGS-Assessing-learning-systems",
  116: "CGS-Human-computer-interface-design",
  117: "CGS-Statistical-inference",
  118: "CGS-Scientific-communication",
  119: "CGS-Systems-thinking",
  120: "CGS-Thinking-and-reasoning",
  121: "HSS-Field-linguistics",
  122: "HSS-dalit-studies",
  123: "HSS-migration-studies",
  124: "HSS-teaching-methods",
  125: "HSS-Environmental-art",
  126: "HSS-visual-design",
  127: "HSS-printmaking",
  128: "HSS-Philosophy-of-science",
  129: "HSS-feminist-aesthetics",
  130: "HSS-environment-aesthetics",
  131: "HSS-Organisational-and-Social-cognition",
  132: "HSS-self-formation",
  133: "HSS-neurodevelopmental-disorders",
  134: "HSS-digital",
  135: "HSS-economy",
  136: "HSS-environment",
  137: "HSS-urban-sociology",
  138: "HSS-gerentology",
  139: "HSS-demography",
  140: "CE-Hydrology-and-Hydraulics",
  141: "CE-Structural-Dynamics/Health-Assessment",
  142: "CE-Management-of-Solid-Waste-and-Waste-Water",
  143: "CE-Pollution-Mitigation-Technologies",
  144: "CE-Pavement-Engineering",
  145: "CE-Traffic-Engineering-and-Intelligent-Transportation-System-(ITS)",
  146: "CE-Sustainability-and-Life-Cycle-Cost-Analysis-(LCCA)",
  147: "CE-Remote-Sensing/Lidar/-Geodesy",
  148: "CE-Soil-Dynamics-and-Earthquake-Engineering",
  149: "CE-Environmental-Geotechnics-and-Ground-Improvement-Techniques",
  150: "PSEP-Photonic-Devices-&-Circuits",
  151: "PSEP-Biomedical-Imaging",
  152: "PSEP-Ultrafast-Laser-&-Spectroscopy",
  153: "PSEP-Metamaterials",
  154: "PSEP-Semiconductor-Devices",
  155: "PSEP-Nanophotonics",
  156: "PSEP-Optical-Fiber-Communication",
  157: "PSEP-Nonlinear-Spectroscopy",
  158: "PSEP-Quantum-Optics",
  159: "PSEP-Light-Matter-Interaction",
  160: "PHY-Keyword",
  161: "PHY-High-Performance-Computing",
  162: "PHY-Computational-Fluid-Dynamics-and-Turbulence",
  163: "PHY-Condensed-Matter-Physics",
  164: "PHY-Soft-Matter-Physics",
  165: "PHY-Atomic-and-Molecular-Physics",
  166: "PHY-Optics-and-its-Application",
  167: "PHY-Astronomy-and-Astrophysics",
  168: "PHY-High-Energy-Physics",
  169: "PHY-Plasma-Physics",
  170: "PHY-Quantitative-Finance",
  171: "AE-Turbulence-Modeling",
  172: "AE-Computational-Fluid-Dynamics",
  173: "AE-Hydrodynamic-Stability",
  174: "AE-Direct-Numerical-Simulation",
  175: "AE-Finite-Element/volume-Analysis/Modeling",
  176: "AE-3D-modelling-tools-Ansys-Abaqus-etc.",
  177: "AE-Parallel-Computing",
  178: "AE-Simulink-software",
  179: "AE-Nonlinear-controls",
  180: "AE-Fluid-structure-interactions.",
  181: "DES-Product-and-industrial-design",
  182: "DES-Music-Technology",
  183: "DES-Robotics",
  184: "DES-Mobility-design",
  185: "DES-Visual-communication",
  186: "DES-Engineering-design",
  187: "DES-User-Experience-design",
  188: "DES-Interaction-design",
  189: "DES-Film-making",
  190: "DES-Systems-design",
  191: "DES-Design-theory",
  192: "DES-Design-management",
  193: "MSP-Fuel-cells",
  194: "MSP-Battery",
  195: "MSP-Supercapacitor",
  196: "MSP-RF-sensors",
  197: "MSP-Microwave-absorbers",
  198: "MSP-Nanomaterials",
  199: "MSP-Electrochemical-sensors",
  200: "MSP-Polymer-composites",
  201: "MSP-Flexible-electronics",
  202: "MSP-Magnetic-materials",
  203: "CHM-Organic-Chemistry",
  204: "CHM-Inorganic-Chemistry",
  205: "CHM-Analytical-Chemistry",
  206: "CHM-Physical-Chemistry",
  207: "CHM-Biochemistry/Chemical-Biology",
  208: "CHM-Environmental-Chemistry",
  209: "CHM-Materials-Science",
  210: "CHM-Nanotechnology",
  211: "CHM-Computational/Theoretical-Chemistry",
  212: "CHM-Medicinal/Synthetic-Chemistry",
  213: "MTH-Computational-Methods",
  214: "MTH-Optimization",
  215: "MTH-Statistical-Signal-Processing",
  216: "MTH-Data-Mining",
  217: "MTH-Econometrics",
  218: "MTH-Regression-Analysis",
  219: "MTH-Bayesian-Computation",
  220: "MTH-Spatial-Statistics",
  221: "MTH-Stochastic-PDE-and-process",
  222: "MTH-Design-of-Experiments",
};

export const totalDeptKeywords = 222;

export default { Branches, rev, func, totalDeptKeywords };
