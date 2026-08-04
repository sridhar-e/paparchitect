export type ProjectCategory =
  | "Sports Facilities"
  | "Industries"
  | "Process Plants"
  | "Transportation"
  | "Private Residences"
  | "Apartments & Township Development"
  | "Institutions"
  | "Offices & IT Parks"
  | "Commercial"
  | "Corporate Interiors"
  | "Banks & Interiors"
  | "Auditorium & Conference";

export type Project = {
  slug: string;
  title: string;
  location?: string;
  size?: string;
  category: ProjectCategory;
  featured?: boolean;
  image: string;
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
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const raw: Omit<Project, "slug" | "image">[] = [
  // Sports Facilities
  { title: "M.A. Chidambaram Stadium", location: "Chennai", size: "Capacity 45,000", category: "Sports Facilities", featured: true },
  { title: "Volleyball Association Stadium", location: "Chennai", category: "Sports Facilities" },
  { title: "NIT Calicut — Indoor Stadium / Gymkhana", category: "Sports Facilities" },

  // Industries
  { title: "Cheyyar SEZ Developers", location: "Krishnagiri, Tamil Nadu", size: "14,50,000 sq ft", category: "Industries" },
  { title: "Cheyyar SEZ Developers", location: "Cheyyar, Tamil Nadu", size: "12,50,000 sq ft", category: "Industries" },
  { title: "Bosch — Vehicle Testing Facility", location: "Bengaluru", category: "Industries" },
  { title: "Century Development Corporation India — Aerospace Park", location: "Bengaluru", size: "70 acres", category: "Industries" },
  { title: "Freudenberg Regional Corporate Center India (Vibracoustics & Freudenberg NOK)", location: "Chandigarh", size: "4,50,000 sq ft", category: "Industries" },
  { title: "Temico Motor India — Aerospace Park", location: "Bengaluru", size: "85,000 sq ft", category: "Industries" },
  { title: "Amann Sewing & Embroidery Threads", location: "SIPCOT Ranipet", size: "1,26,000 sq ft", category: "Industries" },
  { title: "Ashok Leyland (Ashley Alteams)", location: "Cheyyar, Tamil Nadu", size: "1,78,000 sq ft", category: "Industries" },
  { title: "Rieter Nittoku", location: "Oragadam", size: "55,000 sq ft", category: "Industries" },
  { title: "Klueber Industries — Group Development", location: "Mysore", size: "1,40,000 sq ft", category: "Industries" },
  { title: "Hwaseung", location: "Sriperumbudur, Tamil Nadu", size: "55,000 sq ft", category: "Industries" },

  // Process Plants
  { title: "Bio Security Lab — Ministry of Agriculture & Animal Husbandry", location: "Bengaluru", category: "Process Plants" },
  { title: "NDDB — Dairy & Powder Plant", location: "Channarayapatna, Karnataka", category: "Process Plants" },
  { title: "OMFED — Dairy & Powder Plant", location: "Bhubaneswar", category: "Process Plants" },
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

  // Apartments & Township Development
  { title: "Appaswamy Real Estates (Bloomingdale)", location: "Pammal, Chennai", size: "1,09,000 sq ft", category: "Apartments & Township Development" },
  { title: "Township Development", size: "23,00,000 sq ft", category: "Apartments & Township Development" },
  { title: "Rajiv Gandhi Rural Housing Corporation — Affordable Housing", location: "Bengaluru", size: "75,000 sq ft", category: "Apartments & Township Development" },
  { title: "Chattisgarh Housing Board", location: "Naya Raipur", size: "25,00,000 sq ft, 1832 units", category: "Apartments & Township Development", featured: true },
  { title: "VNC Residence", location: "Alwarpet, Chennai", size: "8,500 sq ft", category: "Apartments & Township Development" },
  { title: "Tamil Nadu Housing Board", location: "Chennai", size: "71,000 sq ft", category: "Apartments & Township Development" },
  { title: "State Bank of India — Officer's Accommodation", location: "Mumbai", size: "2,58,000 sq ft, 126 units", category: "Apartments & Township Development" },

  // Institutions
  { title: "Indian Institute of Astrophysics — Laboratory Building", location: "Bengaluru", size: "1,17,000 sq ft", category: "Institutions" },
  { title: "CIPET — Students Hostel", location: "Chennai", size: "1,06,000 sq ft", category: "Institutions" },
  { title: "Kodaikanal International School", size: "56,000 sq ft", category: "Institutions" },
  { title: "NIT Calicut — 1000-Bed Hostel", size: "5,38,000 sq ft", category: "Institutions" },
  { title: "IIT Indore — Administration Building", size: "75,000 sq ft", category: "Institutions", featured: true },
  { title: "IIT Indore — Food Court & Dining Hall", size: "75,000 sq ft", category: "Institutions" },

  // Offices & IT Parks
  { title: "Laxmi Cyber City", location: "Hyderabad", size: "7,00,000 sq ft", category: "Offices & IT Parks", featured: true },
  { title: "Vodafone — Data Center", location: "Chennai", size: "30,000 sq ft", category: "Offices & IT Parks" },
  { title: "Klueber — Admin Office", location: "Mysore", size: "29,200 sq ft", category: "Offices & IT Parks" },
  { title: "Infopark Phase 2", location: "Kochi", size: "3,70,000 sq ft", category: "Offices & IT Parks", featured: true },
  { title: "Hexaware — Corporate Campus", category: "Offices & IT Parks" },
  { title: "Cognizant Technology Solutions — Kochi Campus", category: "Offices & IT Parks" },
  { title: "SETS", location: "Chennai", category: "Offices & IT Parks" },

  // Commercial
  { title: "Tidel Park", location: "Vellore", size: "55,000 sq ft", category: "Commercial" },
  { title: "Tidel Park", location: "Villupuram", size: "60,000 sq ft", category: "Commercial" },
  { title: "Container Freight Station — Warehouse", location: "Kochi", category: "Commercial" },
  { title: "CMDA — Wholesale Grain Market", location: "Chennai", size: "2,67,000 sq ft", category: "Commercial" },

  // Corporate Interiors
  { title: "Cyber Park", location: "Kozhikode", category: "Corporate Interiors" },
  { title: "Info Park", location: "Koratty", category: "Corporate Interiors" },
  { title: "Grobest", location: "Kozhikode", category: "Corporate Interiors" },
  { title: "Bosch", location: "Chennai", category: "Corporate Interiors" },

  // Banks & Interiors
  { title: "Indian Institute of Banking and Finance", location: "Chennai", category: "Banks & Interiors" },
  { title: "HSBC", location: "Bengaluru", size: "1,75,000 sq ft", category: "Banks & Interiors" },
  { title: "State Bank of India", location: "Chennai", category: "Banks & Interiors" },

  // Auditorium & Conference
  { title: "NIOT — Auditorium & Conference Room", location: "Chennai", category: "Auditorium & Conference" },
  { title: "Cheyyar SEZ — Auditorium", size: "5000-seater", category: "Auditorium & Conference" },
];

export const categoryImage: Record<ProjectCategory, string> = {
  "Sports Facilities": img.sports,
  Industries: img.industry,
  "Process Plants": img.process,
  Transportation: img.transport,
  "Private Residences": img.residence,
  "Apartments & Township Development": img.township,
  Institutions: img.institution,
  "Offices & IT Parks": img.office,
  Commercial: img.commercial,
  "Corporate Interiors": img.interiors,
  "Banks & Interiors": img.bank,
  "Auditorium & Conference": img.auditorium,
};

const seen = new Map<string, number>();

export const projects: Project[] = raw.map((p) => {
  const base = slugify(`${p.title}-${p.location ?? ""}`);
  const count = seen.get(base) ?? 0;
  seen.set(base, count + 1);
  const slug = count === 0 ? base : `${base}-${count}`;
  return { ...p, slug, image: categoryImage[p.category] };
});

export const featuredProjects = projects.filter((p) => p.featured);

export const categories: ProjectCategory[] = [
  "Sports Facilities",
  "Industries",
  "Process Plants",
  "Transportation",
  "Private Residences",
  "Apartments & Township Development",
  "Institutions",
  "Offices & IT Parks",
  "Commercial",
  "Corporate Interiors",
  "Banks & Interiors",
  "Auditorium & Conference",
];
