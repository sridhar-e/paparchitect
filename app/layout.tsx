import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const siteDescription =
  "A firm of architects, planners and engineers trusted over 100 years. Architecture, engineering, interiors and turnkey design solutions across India. Offices in Chennai, Bengaluru, Chandigarh & Kochi.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paparchitect.com"),
  title: {
    default: "Pithavadian And Partners | Architects, Planners & Engineers in Chennai since 1919",
    template: "%s | Pithavadian And Partners",
  },
  description: siteDescription,
  keywords: [
    "architects in Chennai",
    "architecture and engineering firm India",
    "structural engineering consultants",
    "MEP design consultants Chennai",
    "turnkey construction consultants",
    "project management consultants India",
    "interior design firm Chennai",
    "Pithavadian And Partners",
  ],
  authors: [{ name: "Pithavadian And Partners" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Pithavadian And Partners",
    type: "website",
    locale: "en_IN",
    title: "Pithavadian And Partners | Architects, Planners & Engineers",
    description: siteDescription,
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Pithavadian And Partners, Architects, Planners & Engineers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pithavadian And Partners | Architects, Planners & Engineers",
    description: siteDescription,
    images: ["/images/hero.jpg"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Pithavadian And Partners",
  alternateName: "PNP",
  url: "https://paparchitect.com",
  logo: "https://paparchitect.com/favicon.ico",
  image: "https://paparchitect.com/images/hero.jpg",
  description: siteDescription,
  foundingDate: "1919",
  address: {
    "@type": "PostalAddress",
    streetAddress: "New No. 113, Old No. 5, 86th Street, (North) Ashok Nagar",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600083",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 13.0427041,
    longitude: 80.2112923,
  },
  telephone: "+91-44-24470044",
  email: "mail@paparchitect.com",
  areaServed: "IN",
  sameAs: ["https://instagram.com", "https://facebook.com", "https://linkedin.com"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
