export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  category: "Firm News" | "Project Features" | "Architecture" | "Engineering" | "Sustainability";
  excerpt: string;
  image: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "a-century-of-building-1919-to-today",
    title: "A Century of Building: The Pithavadian And Partners Story, 1919 to Today",
    date: "2025-01-15",
    category: "Firm News",
    excerpt:
      "From Jackson and Baker in 1919 to Pithavadian And Partners today — a look back at over a hundred years of architecture and engineering practice.",
    image: "/images/blog-century-of-building.jpg",
    body: [
      "Our firm's story begins in 1919, with the foundation of the parent practice, Jackson and Baker. The oldest drawings in our archives date to this year — a reminder of just how long the firm has been shaping the built environment of South India.",
      "In 1947 the practice was reconstituted as Pryne, Abbot & Davis, and in 1956 Kiffin Peterson and F.B. Pithavadian were inducted as partners. Between 1967 and 1972, F.B. Pithavadian ran the practice as a proprietorship firm, before Pithavadian And Partners was formally founded in 1972 — the name under which we continue to practise today.",
      "Over a century of continuous work, the firm's portfolio has grown to more than 3,000 built works, spanning stadiums, aircraft hangars, townships, process plants, institutions and corporate interiors across India.",
    ],
  },
  {
    slug: "inside-air-india-mro-hangar-92-metre-span",
    title: "Inside the Air India MRO Hangar: Engineering a 92-Metre Span",
    date: "2025-03-22",
    category: "Project Features",
    excerpt:
      "A look at the structural engineering behind the 92-metre span Air India MRO hangar in Shamshabad, Hyderabad — built to house a Boeing 747 and two Airbus A320s.",
    image: "/images/transport-hangar.jpg",
    body: [
      "The Air India MRO facility in Shamshabad, Hyderabad, called for a hangar with a clear span of 92 metres — large enough to accommodate one Boeing 747 or two Airbus A320s simultaneously, served by two under-slung 7.5-tonne cranes.",
      "Spans of this scale demand close coordination between architectural design and structural engineering from the earliest concept stage. Our in-house structural team worked alongside the architectural design team to resolve the long-span roof structure, crane loads and door systems within a single, integrated design process.",
      "Projects like this reflect the value of a full in-house capability — architecture, structural design and MEP working under one roof, from concept through to handover.",
    ],
  },
  {
    slug: "designing-at-scale-25-lakh-sq-ft-township-housing",
    title: "Designing at Scale: Lessons from 25 Lakh Sq Ft of Township Housing",
    date: "2025-05-10",
    category: "Project Features",
    excerpt:
      "Notes from the Chattisgarh Housing Board project in Naya Raipur — 1,832 housing units across 25,00,000 sq ft.",
    image: "/images/township.jpg",
    body: [
      "The Chattisgarh Housing Board development in Naya Raipur comprises 1,832 units across roughly 25,00,000 sq ft — one of the larger township projects in our portfolio.",
      "At this scale, repeatable design logic matters as much as individual unit design: unit typologies, structural grids and service cores need to be standardised without producing a monotonous environment for residents.",
      "Our approach combines a limited palette of well-tested unit types with variation in blocking, landscaping and public amenity placement, so the township reads as a coherent neighbourhood rather than a repeated stamp.",
    ],
  },
  {
    slug: "what-green-building-design-means-for-indian-industry",
    title: "What Green Building Design Means for Indian Industry",
    date: "2025-06-18",
    category: "Sustainability",
    excerpt:
      "Green building design is now a core part of our services — here's what that looks like in practice for industrial and institutional clients.",
    image: "/images/blog-green-building.jpg",
    body: [
      "Green building design has moved from a niche request to a standard client expectation, particularly among our industrial and institutional clients. It sits alongside our existing energy audit and building management systems capabilities as part of a broader sustainability offering.",
      "In practice, this means factoring passive design strategies, material selection and energy performance into the earliest design decisions, rather than retrofitting sustainability measures after the design is fixed.",
      "As our Vision states, enlarging our scope of services — including Green Building Consultancy and Landscape Design — is a stated part of the firm's ongoing growth.",
    ],
  },
];
