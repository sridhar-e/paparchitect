export type ProjectCategory =
  | "Sports"
  | "Industrial"
  | "Process Plants"
  | "Transportation"
  | "Private Residences"
  | "Residential"
  | "Institutions"
  | "Commercial & IT buildings"
  | "Interiors"
  | "Auditorium";

export type Project = {
  slug: string;
  title: string;
  location?: string;
  size?: string;
  category: ProjectCategory;
  featured?: boolean;
  /** Total site area, as provided by the client. */
  siteArea?: string;
  /** Total built-up area, as provided by the client. */
  builtUpArea?: string;
  status?: string;
  year?: string;
  description?: string;
  image: string;
  /** Gallery shown in the project popup; the first entry is the main image. */
  images: string[];
};

const img = {
  sports: "/images/sports.jpg",
  industry: "/images/industry.jpg",
  process: "/images/process.jpg",
  transport: "/images/transport-hangar.jpg",
  residence: "/images/residence.jpg",
  township: "/images/township.jpg",
  institution: "/images/institution.jpg",
  office: "/images/office.jpg",
  commercial: "/images/commercial.jpg",
  interiors: "/images/interiors.jpg",
  bank: "/images/bank.jpg",
  auditorium: "/images/auditorium.jpg",
  cheyyar1: "/images/Cheyyar-Auditorium-1.jpg",
  cheyyar2: "/images/Cheyyar-Auditorium-2.jpg",
  niot1: "/images/NIOT-Auditorium-1.png",
  niot2: "/images/NIOT-Auditorium-2.png",
  niot3: "/images/NIOT-Auditorium-3.png",
  raniMeyyammai1: "/images/Rani-Meyyammai-Raja-Muthaiya-Halls-1.jpg",
  raniMeyyammai2: "/images/Rani-Meyyammai-Raja-Muthaiya-Halls-2.jpg",
  amman1: "/images/amman-1.jpeg",
  amman2: "/images/amman-2.jpeg",
  amman3: "/images/amman-3.jpeg",
  bosch1: "/images/BOSCH-1.png",
  bosch2: "/images/BOSCH-2.png",
  bosch3: "/images/BOSCH-3.png",
  cdci1: "/images/CDCI-1.jpg",
  cdci2: "/images/CDCI-2.jpg",
  cdci3: "/images/CDCI-3.jpg",
  fairway1: "/images/FA-1-FA-2-1.jpg",
  fairway2: "/images/FA-1-FA-2-2.jpg",
  fni: "/images/FNI.jpeg",
  frcci1: "/images/FRCCI-1.jpg",
  frcci2: "/images/FRCCI-2.jpg",
  frcci3: "/images/FRCCI-3.jpg",
  nsurePilot1: "/images/N-Sure-Pilot-plant-1.jpg",
  nsurePilot2: "/images/N-Sure-Pilot-plant-2.jpg",
  nsureGiga1: "/images/Nsure-Giga-Plant-1.jpeg",
  nsureGiga2: "/images/Nsure-Giga-Plant-2.jpeg",
  nsureGiga3: "/images/Nsure-Giga-Plant-3.jpeg",
  nsureGiga4: "/images/Nsure-Giga-Plant-4.jpeg",
  omfed1: "/images/OMFED-1.png",
  omfed2: "/images/OMFED-2.png",
  omfed3: "/images/OMFED-3.png",
  omfed4: "/images/OMFED-4.png",
  temico1: "/images/Temico-1.png",
  temico2: "/images/Temico-2.png",
  temico3: "/images/Temico-3.jpeg",
  klueberAdmin: "/images/Freudenberg-Klueber-Admin-Building.jpeg",
  infopark1: "/images/Info-Park-Kochi-1.png",
  infopark2: "/images/Info-Park-Kochi-2.png",
  infopark3: "/images/Info-Park-Kochi-3.jpg",
  laxmiCyberCity: "/images/Laxmi-Cyber-City.png",
  tidelVillupuram1: "/images/Tidel-Neo-Villupuram-1.jpeg",
  tidelVillupuram2: "/images/Tidel-Neo-Villupuram-2.jpeg",
  iia1: "/images/IIA-Bangalore-1.jpg",
  iia2: "/images/IIA-Bangalore-2.jpg",
  iia3: "/images/IIA-Bangalore-3.jpg",
  iitAdmin1: "/images/IIT-Indore-Admin-Block-1.jpeg",
  iitAdmin2: "/images/IIT-Indore-Admin-Block-2.jpg",
  iitAdmin3: "/images/IIT-Indore-Admin-Block-3.jpeg",
  iitDining1: "/images/IIT-Indore-Dining-Block-1.jpg",
  iitDining2: "/images/IIT-Indore-Dining-Block-2.jpg",
  iibf1: "/images/Indian-Institute-of-Banking-Finance-1.png",
  iibf2: "/images/Indian-Institute-of-Banking-Finance-2.png",
  iibf3: "/images/Indian-Institute-of-Banking-Finance-3.png",
  icai1: "/images/Institute-of-Chartered-Accountants-of-India-1.png",
  icai2: "/images/Institute-of-Chartered-Accountants-of-India-2.png",
  kis1: "/images/Kodaikanal-International-School-1.jpg",
  kis2: "/images/Kodaikanal-International-School-2.jpg",
  kis3: "/images/Kodaikanal-International-School-3.jpg",
  kis4: "/images/Kodaikanal-International-School-4.jpg",
  mccTambaram1: "/images/MCC-Tambaram-1.png",
  mccTambaram2: "/images/MCC-Tambaram-2.png",
  mccTambaram3: "/images/MCC-Tambaram-3.png",
  sets1: "/images/SETS-Taramani-1.jpg",
  sets2: "/images/SETS-Taramani-2.jpg",
  sets3: "/images/SETS-Taramani-3.jpg",
  sets4: "/images/SETS-Taramani-4.jpg",
  sets5: "/images/SETS-Taramani-5.jpg",
  boschOragadam1: "/images/BOSCH-oragadam-1.png",
  boschOragadam2: "/images/BOSCH-oragadam-2.png",
  boschOragadam3: "/images/BOSCH-oragadam-3.png",
  grobest1: "/images/GROBEST-1.png",
  grobest2: "/images/GROBEST-2.png",
  grobest3: "/images/GROBEST-3.png",
  infoParkInteriors1: "/images/Info-park-1.jpg",
  infoParkInteriors2: "/images/Info-park-2.jpg",
  infoParkInteriors3: "/images/Info-park-3.jpg",
  infoParkInteriors4: "/images/Info-park-4.jpg",
  yazaki1: "/images/YAZAKI-1.jpg",
  yazaki2: "/images/YAZAKI-2.jpg",
  yazaki3: "/images/YAZAKI-3.jpg",
  yazaki4: "/images/YAZAKI-4.jpg",
  bloomingdale: "/images/Appasamy-Bloomingdale-Pammal.jpg",
  chhattisgarh: "/images/Chattisgarh-Housing-Board-Raipur.jpg",
  rghcl1: "/images/Rajiv-Gandhi-Rural-Housing-Corporation-1.jpg",
  rghcl2: "/images/Rajiv-Gandhi-Rural-Housing-Corporation-2.jpg",
  neelankarai1: "/images/Residence-at-Neelankarai-1.jpg",
  neelankarai2: "/images/Residence-at-Neelankarai-2.jpg",
  neelankarai3: "/images/Residence-at-Neelankarai-3.jpg",
  neelankarai4: "/images/Residence-at-Neelankarai-4.jpg",
  sbiQuarters1: "/images/SBI-Residential-Quarters-Mumbai-1.jpg",
  sbiQuarters2: "/images/SBI-Residential-Quarters-Mumbai-2.jpg",
  sbiQuarters3: "/images/SBI-Residential-Quarters-Mumbai-3.jpg",
  spic: "/images/SPIC1.jpg",
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const raw: (Omit<Project, "slug" | "image" | "images"> & { images?: string[] })[] = [
  // Sports
  { title: "MAC stadium", location: "Chennai, Tamil Nadu", size: "Capacity 45,000", category: "Sports", featured: true },
  { title: "Volleyball stadium", location: "Chennai", category: "Sports" },
  { title: "CMDA – Parks and Playground - Kannigapuram", location: "Chennai, Tamil Nadu", category: "Sports" },
  { title: "CMDA – Parks and Playground - Shenoy nagar", location: "Chennai, Tamil Nadu", category: "Sports" },
  { title: "NIT Calicut — Indoor Stadium / Gymkhana", category: "Sports" },

  // Industrial
  { title: "Cheyyar SEZ Developers", location: "Krishnagiri, Tamil Nadu", size: "14,50,000 sq ft", category: "Industrial" },
  { title: "Cheyyar SEZ Developers", location: "Cheyyar, Tamil Nadu", size: "12,50,000 sq ft", category: "Industrial" },
  { title: "BOSCH", location: "Bengaluru, Karnataka", size: "5 acres", siteArea: "5 acres", builtUpArea: "1,92,000 sq m", status: "Completed", year: "1999 / 2021", description: "An integrated facility comprising vehicle monitoring, oil and gas storage, car parking, office spaces, and conference facilities.", category: "Industrial", images: [img.bosch1, img.bosch2, img.bosch3] },
  { title: "CDCI - Master Plan", location: "Bengaluru, Karnataka", size: "70.1 acres", siteArea: "70.1 acres (2,83,670.90 sq m)", status: "Ongoing", year: "2018", category: "Industrial", images: [img.cdci1, img.cdci2, img.cdci3] },
  { title: "FRCCI - Freudenberg Regional Corporate Centre India Private Limited", location: "Morinda, Punjab", size: "25 acres", siteArea: "25.00 acres (1,01,171.40 sq m)", builtUpArea: "45,540.71 sq m", status: "Completed", year: "2022–2024", description: "An integrated, self-sufficient manufacturing campus for Vibracoustic India and Freudenberg NOK India, featuring optimized infrastructure, efficient logistics, dedicated utilities, traffic management, and future-ready expansion planning across a 1,04,737.70 sq m site.", category: "Industrial", images: [img.frcci1, img.frcci2, img.frcci3] },
  { title: "FNI NOK", location: "Chennai, Tamil Nadu", size: "14.05 acres", siteArea: "14.05 acres (56,858.33 sq m)", builtUpArea: "14,958.33 sq m", status: "Completed", year: "2018–2019", category: "Industrial", images: [img.fni] },
  { title: "TEMICO Motors India Private Limited", location: "Bengaluru, Karnataka", size: "4.56 acres", siteArea: "4.56 acres (18,471.77 sq m)", builtUpArea: "5,791.03 sq m", status: "Completed", year: "2023", category: "Industrial", images: [img.temico1, img.temico2, img.temico3] },
  { title: "AMANN SEWING & Embroidery Threads Private Limited", location: "Ranipet, Tamil Nadu", size: "12 acres", siteArea: "12 acres (1,26,000 sq m)", builtUpArea: "5,791.03 sq m", status: "Completed", year: "2025", description: "An integrated 800-tonnes-per-year sewing thread manufacturing facility serving apparel, automotive, footwear, and leather industries, with end-to-end production, advanced utilities including ZLD, efficient logistics, administrative spaces, and comprehensive employee welfare facilities.", category: "Industrial", images: [img.amman1, img.amman2, img.amman3] },
  { title: "Nsure Pilot", location: "Bengaluru, Karnataka", size: "5.2 acres", siteArea: "5.2 acres (22,156.20 sq m)", builtUpArea: "11,036.70 sq m", status: "Ongoing", year: "2023 – Ongoing", description: "Nsure is conceived as a future-ready clean energy manufacturing campus, marking RCCL Group's diversification into advanced energy technologies, including lithium-ion cells, advanced chemistries, and fuel cells. The five-block facility combines PEB structures for the pilot plant and warehouse with RCC buildings for administration and accommodation, creating an efficient and scalable industrial environment.", category: "Industrial", images: [img.nsurePilot1, img.nsurePilot2] },
  { title: "Nsure Giga Plant", location: "Bengaluru, Karnataka", size: "50 acres", status: "Ongoing", description: "The giga plant developed across a 50-acre site, integrating comprehensive manufacturing and processing operations with stores, formation buildings, utilities, toilet blocks, and MEP-support infrastructure. The facility is designed as a scalable industrial ecosystem, with provision for future expansion through six additional plants within the larger industrial development.", category: "Industrial", images: [img.nsureGiga1, img.nsureGiga2, img.nsureGiga3, img.nsureGiga4] },
  { title: "ZF Wind Power Private Limited", location: "Coimbatore, Tamil Nadu", size: "11,753.18 sq m built-up", builtUpArea: "11,753.18 sq m", status: "Completed", year: "2024", description: "A sustainable brownfield industrial development integrating a three-storey RCC office and dining block with a PEB production facility, featuring high-stack storage, temperature-controlled production, paint shop, solar-ready roofing, green building principles, and provision for future expansion.", category: "Industrial" },
  { title: "Fairway Enterprises Private Ltd - FA 1 and FA 2", location: "Bargur, Tamil Nadu", size: "146.72 acres", siteArea: "146.72 acres (5,93,754.77 sq m)", builtUpArea: "2,32,680.25 sq m", status: "Completed", year: "2022", description: "A large-scale leather goods manufacturing campus comprising PEB production and warehouse facilities, canteens, and a G+1 RCC main office with a sloped roof, complemented by a G+1 RCC RTC building for guest accommodation. The development integrates industrial, administrative, and support functions within a well-planned campus to support large-scale operations.", category: "Industrial", images: [img.fairway1, img.fairway2] },
  { title: "Ashok Leyland (Ashley Alteams)", location: "Cheyyar, Tamil Nadu", size: "1,78,000 sq ft", category: "Industrial" },
  { title: "Rieter Nittoku", location: "Oragadam", size: "55,000 sq ft", category: "Industrial" },
  { title: "Klueber Industries — Group Development", location: "Mysore", size: "1,40,000 sq ft", category: "Industrial" },
  { title: "Hwaseung", location: "Sriperumbudur, Tamil Nadu", size: "55,000 sq ft", category: "Industrial" },
  { title: "OMFED", location: "Govindpur, Odisha", size: "8 acres", siteArea: "8 acres (32,000 sq m)", builtUpArea: "21,138.93 sq m", status: "Completed", year: "2021", description: "A state-of-the-art automated dairy processing facility with a capacity of 5 lakh litres per day, designed for efficient production of milk powder, cheese, paneer, butter, and other value-added dairy products. The facility integrates advanced processing technology, hygienic planning, and streamlined production workflows.", category: "Industrial", images: [img.omfed1, img.omfed2, img.omfed3, img.omfed4] },

  // Process Plants
  { title: "Bio Security Lab — Ministry of Agriculture & Animal Husbandry", location: "Bengaluru", category: "Process Plants" },
  { title: "NDDB — Dairy & Powder Plant", location: "Channarayapatna, Karnataka", category: "Process Plants" },
  { title: "Mother Dairy", location: "Etawah, Uttar Pradesh", size: "1,21,000 sq ft", category: "Process Plants" },

  // Transportation
  { title: "Kingfisher — Hangar (48 m span)", location: "Chennai", category: "Transportation" },
  { title: "Indian Airlines — Ground Support Complex", location: "Chennai", category: "Transportation" },
  { title: "Air India — Ground Support Complex", location: "Chennai", category: "Transportation" },
  { title: "Air India MRO — Hangar (92 m span, 2 under-slung 7.5T cranes; 1 no. Boeing 747 / 2 no. Airbus A320)", location: "Shamshabad, Hyderabad", size: "92 m span hangar", category: "Transportation", featured: true },

  // Private Residences
  { title: "Private Residence", location: "Chennai", size: "8,500 sq ft", category: "Private Residences" },
  { title: "Private Residence", location: "Chennai", size: "10,000 sq ft", category: "Private Residences" },
  { title: "Private Residence", location: "Chennai", size: "4,000 sq ft", category: "Private Residences" },

  // Residential
  { title: "Appaswamy Bloomingdale Pammal", location: "Pammal, Chennai", size: "1,09,000 sq ft", status: "Completed", category: "Residential", images: [img.bloomingdale] },
  { title: "Urbenest for Appaswamy Real Estate", size: "993 sq m built-up", siteArea: "500 sq m", builtUpArea: "993 sq m", status: "Completed", year: "2023", description: "Residential units in Stilt + 4 floors consisting of 8 units of 3BHK.", category: "Residential" },
  { title: "The Alton for Appaswamy Real Estate", location: "Coimbatore, Tamil Nadu", status: "Completed", year: "2023", description: "A Stilt + 4-storey residential development comprising 12 apartments, with 8 units of 3BHK and 4 units of 2BHK, planned for efficient residential circulation and optimized space utilization.", category: "Residential" },
  { title: "Township Development", size: "23,00,000 sq ft", category: "Residential" },
  { title: "Rajiv Gandhi Housing Corporation Limited (RGHCL)", location: "Bengaluru, Karnataka", size: "75,000 sq ft", status: "Completed", category: "Residential", images: [img.rghcl1, img.rghcl2] },
  { title: "Chhattisgarh Housing Board", location: "New Raipur, Chhattisgarh", size: "153.99 acres", siteArea: "153.99 acres (6,23,175.00 sq m)", builtUpArea: "2,40,848.97 sq m", status: "Completed", year: "2010", description: "A large-scale integrated residential township comprising flatted, plotted, and EWS housing, with Stilt+6 apartment blocks, G+3 EWS blocks, and dedicated community retail through two strategically located malls. The master plan emphasizes diverse housing, efficient zoning, accessibility, and a balanced community-oriented living environment.", category: "Residential", featured: true, images: [img.chhattisgarh] },
  { title: "VNC Residence", location: "Alwarpet, Chennai", size: "8,500 sq ft", category: "Residential" },
  { title: "Tamil Nadu Housing Board", location: "Chennai", size: "71,000 sq ft", category: "Residential" },
  { title: "SBI Residential Quarters", location: "Mumbai, Maharashtra", size: "1.246 acres, 126 units", siteArea: "1.246 acres (5,045 sq m)", builtUpArea: "25,028.39 sq m", status: "Ongoing", description: "A 10-storey residential development comprising 126 apartments, with 2BHK and 3BHK units efficiently planned across the upper floors, supported by ground and first-floor parking. The design integrates landscaped outdoor spaces to enhance the residential environment and occupant experience.", category: "Residential", images: [img.sbiQuarters1, img.sbiQuarters2, img.sbiQuarters3] },
  { title: "BPCL residential quarters", location: "Kochi, Kerala", size: "4.93 acres", siteArea: "4.93 acres (19,988.42 sq m)", builtUpArea: "15,843.64 sq m", status: "Ongoing", description: "A Stilt + 13-storey residential development comprising 66 apartments, with dedicated car parking at stilt/ground level and two-wheeler parking at basement level. The planning ensures efficient vertical residential zoning with optimized parking and circulation.", category: "Residential" },
  { title: "Residence at Neelankarai", location: "Neelankarai, Chennai", category: "Residential", images: [img.neelankarai1, img.neelankarai2, img.neelankarai3, img.neelankarai4] },

  // Institutions
  { title: "Indian Institute of Astrophysics", location: "Bengaluru, Karnataka", size: "5 acres", siteArea: "5 acres (20,348.95 sq m)", builtUpArea: "10,755.30 sq m", status: "Ongoing", description: "A Basement + Ground + 5-storey RCC laboratory building within the existing IIA campus, designed to support advanced research and laboratory functions in astronomy and astrophysics. The facility integrates specialized research spaces within a contemporary institutional framework, complementing the existing campus environment.", category: "Institutions", images: [img.iia1, img.iia2, img.iia3] },
  { title: "CIPET — Students Hostel", location: "Chennai", size: "1,06,000 sq ft", category: "Institutions" },
  { title: "Kodaikanal International School", location: "Kodaikanal, Tamil Nadu", size: "4.84 acres", siteArea: "4.84 acres (19,580.06 sq m)", builtUpArea: "4,862.79 sq m", status: "Completed", year: "2015", description: "A G+1 residential campus development comprising dormitory blocks and staff quarters with sloped roofs, sensitively designed to integrate with Kodaikanal’s hill landscape. The architecture emphasizes a warm, campus-oriented character and climate-responsive design, creating a comfortable residential environment within the 43-acre educational campus.", category: "Institutions", images: [img.kis1, img.kis2, img.kis3, img.kis4] },
  { title: "NIT Calicut — 1000-Bed Hostel", size: "5,38,000 sq ft", category: "Institutions" },
  { title: "IIT Indore Admin Block", location: "Indore, Madhya Pradesh", size: "7,592.62 sq m built-up", siteArea: "3,596.00 sq m", builtUpArea: "7,592.62 sq m", status: "Completed", year: "2021", description: "A G+9 administrative building comprising east and west wings, strategically planned for executive offices, meeting rooms, boardroom, and support spaces. The rotated upper floors enhance architectural character and provide effective solar shading, contributing to improved energy efficiency and occupant comfort.", category: "Institutions", featured: true, images: [img.iitAdmin1, img.iitAdmin2, img.iitAdmin3] },
  { title: "IIT Indore Dining Block", location: "Indore, Madhya Pradesh", size: "12,215.85 sq m built-up", siteArea: "8,863.25 sq m", builtUpArea: "12,215.85 sq m", status: "Completed", year: "2020", description: "A four-storey dining and kitchen facility designed as a vibrant social and dining hub, accommodating 2,000 users across multiple dining halls with supporting kitchen, storage, student activity, food court, and concourse spaces. The building integrates indoor, outdoor, and rooftop dining areas to create a flexible and engaging campus environment.", category: "Institutions", images: [img.iitDining1, img.iitDining2] },
  { title: "MCC Tambaram", location: "Chennai, Tamil Nadu", status: "Completed", category: "Institutions", images: [img.mccTambaram1, img.mccTambaram2, img.mccTambaram3] },
  { title: "SETS Taramani", location: "Taramani, Chennai", size: "2.81 acres", siteArea: "2.81 acres (11,357.00 sq m)", builtUpArea: "4,540.06 sq m", status: "Completed", year: "2014", description: "A high-security research and administrative facility designed with clearly zoned security levels, integrating administrative offices, secure research areas, and highly restricted research zones. The architectural planning prioritizes security, controlled access, functional segregation, and research efficiency while creating a distinctive institutional presence along Chennai’s IT corridor.", category: "Institutions", images: [img.sets1, img.sets2, img.sets3, img.sets4, img.sets5] },
  { title: "Indian Institute of Banking Finance", location: "Chennai, Tamil Nadu", size: "3,169.5 sq m built-up", siteArea: "1,116.43 sq m", builtUpArea: "3,169.5 sq m", status: "Ongoing", year: "2023", description: "A B+G+4 office and training centre integrating classrooms, tutorial rooms, offices, and limited accommodation, strategically planned at a prominent urban junction. The building adopts sustainable design principles targeting IGBC Platinum certification, balancing institutional functionality with environmental performance.", category: "Institutions", images: [img.iibf1, img.iibf2, img.iibf3] },
  { title: "Institute of Chartered Accountants of India (ICAI)", location: "Chennai, Tamil Nadu", size: "1,723 sq m built-up", siteArea: "3,719 sq m", builtUpArea: "1,723 sq m", status: "Completed", year: "2026", description: "A G+1 institutional building for ICAI, planned with classrooms, laboratories, and a conference hall within a compact 3,719 sq m site. The design focuses on efficient academic planning, functional zoning, and a cohesive institutional environment.", category: "Institutions", images: [img.icai1, img.icai2] },
  { title: "Little Flower Nursery School & Residential Quarters", location: "Chennai, Tamil Nadu", size: "1,742.64 sq m built-up", siteArea: "1,934.37 sq m", builtUpArea: "1,742.64 sq m", status: "Completed", year: "2025", description: "A G+1 nursery school accommodating classrooms, staff, and administrative spaces, complemented by Stilt + 3 residential quarters. The development integrates educational and residential functions within a compact, efficient campus layout.", category: "Institutions" },
  { title: "IISC - MASTERPLAN / Landscaping / Infrastructure Development", location: "Bengaluru, Karnataka", size: "400 acres", siteArea: "400 acres", status: "Ongoing", description: "Developing a comprehensive master plan for the IISc main campus through detailed surveying and integrated planning. The project encompasses campus infrastructure, buildings, parking, open spaces, landscaping, utilities, external lighting, signage, and hardscaping, creating a cohesive, sustainable, and functional campus environment for future growth and improved user experience.", category: "Institutions" },

  // Commercial & IT buildings
  { title: "Laxmi Cyber City", location: "Hyderabad, Telangana", size: "2.96 acres", siteArea: "2.96 acres (12,005.90 sq m)", builtUpArea: "40,937.82 sq m", status: "Completed", category: "Commercial & IT buildings", featured: true, images: [img.laxmiCyberCity] },
  { title: "Vodafone — Data Center", location: "Chennai", size: "30,000 sq ft", category: "Commercial & IT buildings" },
  { title: "Freudenberg Klueber Admin Building", location: "Mysore, Karnataka", category: "Commercial & IT buildings", images: [img.klueberAdmin] },
  { title: "Infopark Kochi", location: "Kakkanad, Kerala", size: "7.26 acres", siteArea: "7.26 acres (27,518.62 sq m)", builtUpArea: "49,901.03 sq m", status: "Completed", year: "2017", description: "A 10-storey glass-clad IT office building designed with bioclimatic principles, featuring a distinctive boomerang form that maximizes riverfront views and enhances thermal comfort. The campus integrates landscaped waterfront spaces, engineering services, and a 460-car multi-level parking facility for a cohesive and efficient workplace environment.", category: "Commercial & IT buildings", featured: true, images: [img.infopark1, img.infopark2, img.infopark3] },
  { title: "Hexaware — Corporate Campus", category: "Commercial & IT buildings" },
  { title: "Cognizant Technology Solutions — Kochi Campus", category: "Commercial & IT buildings" },
  { title: "Tidel Neo Vellore", location: "Vellore, Tamil Nadu", size: "55,000 sq ft", status: "Completed", year: "2025", description: "A state-wide IT and commercial hub development integrating IT/ITES offices, business services, and public-facing commercial spaces, designed to extend digital infrastructure and economic opportunities beyond major cities. TIDEL Neo promotes a distributed, community-oriented urban model that connects global technology with local growth.", category: "Commercial & IT buildings" },
  { title: "Tidel Neo Villupuram", location: "Villupuram, Tamil Nadu", size: "5.27 acres", siteArea: "5.27 acres (21,136.77 sq m)", builtUpArea: "5,612.96 sq m", status: "Completed", year: "2024", description: "A state-wide IT and commercial hub development integrating IT/ITES offices, business services, and public-facing commercial spaces, designed to extend digital infrastructure and economic opportunities beyond major cities. TIDEL Neo promotes a distributed, community-oriented urban model that connects global technology with local growth.", category: "Commercial & IT buildings", images: [img.tidelVillupuram1, img.tidelVillupuram2] },
  { title: "Container Freight Station — Warehouse", location: "Kochi", category: "Commercial & IT buildings" },
  { title: "CMDA — Wholesale Grain Market", location: "Chennai", size: "2,67,000 sq ft", category: "Commercial & IT buildings" },
  { title: "SPIC", category: "Commercial & IT buildings", images: [img.spic] },

  // Interiors
  { title: "Cyber Park", location: "Kerala", category: "Interiors" },
  { title: "Info Park", location: "Kakkanad, Kerala", category: "Interiors", images: [img.infoParkInteriors1, img.infoParkInteriors2, img.infoParkInteriors3, img.infoParkInteriors4] },
  { title: "Technopark", location: "Kerala", category: "Interiors" },
  { title: "Grobest", category: "Interiors", images: [img.grobest1, img.grobest2, img.grobest3] },
  { title: "Bosch – Oragadam", location: "Oragadam, Chennai", category: "Interiors", images: [img.boschOragadam1, img.boschOragadam2, img.boschOragadam3] },
  { title: "Yazaki Interior", location: "Bengaluru, Karnataka", size: "0.175 acres", siteArea: "0.175 acres (706.78 sq m)", builtUpArea: "613.76 sq m", status: "Completed", category: "Interiors", images: [img.yazaki1, img.yazaki2, img.yazaki3, img.yazaki4] },
  { title: "Bharat Insurance", location: "Chennai, Tamil Nadu", size: "0.8 acres", siteArea: "0.8 acres (3,236.69 sq m)", builtUpArea: "1,955.82 sq m", status: "Ongoing", category: "Interiors" },
  { title: "HSBC", location: "Bengaluru", size: "1,75,000 sq ft", category: "Interiors" },
  { title: "State Bank of India", location: "Chennai", category: "Interiors" },
  { title: "IOB Cathedral Branch", location: "Chennai, Tamil Nadu", category: "Interiors" },
  { title: "Bank of Baroda", location: "Chennai, Tamil Nadu", category: "Interiors" },

  // Auditorium
  { title: "NIOT AUDITORIUM", location: "Chennai", category: "Auditorium", images: [img.niot1, img.niot2, img.niot3] },
  { title: "Cheyyar Auditorium", size: "5000-seater", category: "Auditorium", images: [img.cheyyar1, img.cheyyar2] },
  { title: "MCC AUDITORIUM", category: "Auditorium" },
  { title: "Rani Meyyammai Raja Muthaiya Halls", category: "Auditorium", images: [img.raniMeyyammai1, img.raniMeyyammai2] },
];

export const categoryImage: Record<ProjectCategory, string> = {
  "Sports": img.sports,
  Industrial: img.industry,
  "Process Plants": img.process,
  Transportation: img.transport,
  "Private Residences": img.residence,
  "Residential": img.township,
  Institutions: img.institution,
  "Commercial & IT buildings": img.office,
  "Interiors": img.interiors,
  "Auditorium": img.auditorium,
};

// Placeholder galleries: until per-project photography is supplied, a project
// falls back to its category image followed by two related sector images.
// Add an `images` array on a raw entry to override this for that project.
const categoryGallery: Record<ProjectCategory, string[]> = {
  "Sports": [img.sports, img.auditorium, img.institution],
  Industrial: [img.industry, img.process, img.office],
  "Process Plants": [img.process, img.industry, img.transport],
  Transportation: [img.transport, img.industry, img.commercial],
  "Private Residences": [img.residence, img.interiors, img.township],
  "Residential": [img.township, img.residence, img.commercial],
  Institutions: [img.institution, img.auditorium, img.sports],
  "Commercial & IT buildings": [img.office, img.commercial, img.interiors],
  "Interiors": [img.interiors, img.bank, img.office],
  "Auditorium": [img.auditorium, img.institution, img.interiors],
};

const seen = new Map<string, number>();

export const projects: Project[] = raw.map((p) => {
  const base = slugify(`${p.title}-${p.location ?? ""}`);
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  const slug = count === 0 ? base : `${base}-${count}`;
  const images = p.images?.length ? p.images : categoryGallery[p.category];
  return { ...p, slug, image: images[0] ?? categoryImage[p.category], images };
});

export const featuredProjects = projects.filter((p) => p.featured);

export const categories: ProjectCategory[] = [
  "Sports",
  "Industrial",
  "Process Plants",
  "Transportation",
  "Private Residences",
  "Residential",
  "Institutions",
  "Commercial & IT buildings",
  "Interiors",
  "Auditorium",
];
