import type { Metadata } from "next";
import { Phone, Smartphone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { ContactForm } from "@/components/contact-form";
import { InstagramIcon, FacebookIcon, LinkedInIcon } from "@/components/social-icons";
import { telHref } from "@/lib/utils";
import { siteInfo } from "@/lib/data/nav";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with our Chennai head office and branches in Bengaluru, Chandigarh and Kochi.",
  keywords: [
    "contact Pithavadian And Partners",
    "architects Chennai contact",
    "architecture firm Bengaluru Chandigarh Kochi",
    "get a quote architecture engineering firm",
    "architecture firm office address Chennai",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Pithavadian And Partners",
    description:
      "Get in touch with our Chennai head office and branches in Bengaluru, Chandigarh and Kochi.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Section noBottomPadding>
        <SectionHeading
          eyebrow="Contact"
          title="Get in Touch"
          description="Whether it's a single residence or a multi-million-square-foot development, we'd be glad to hear about your project."
        />
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-12">
          <div className="lg:col-span-3">
            <div className="border border-border bg-card p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-8 lg:col-span-2">
            <div className="border border-border bg-brand-cream p-6">
              <h3 className="font-heading text-lg font-semibold text-brand-navy">
                {siteInfo.headOffice.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-foreground">
                Pithavadian And Partners
              </p>
              <ul className="mt-4 space-y-3.5 text-sm text-muted-foreground">
                <li className="flex gap-2.5">
                  <MapPin className="size-4 shrink-0 mt-0.5 text-brand-gold-text" />
                  {siteInfo.headOffice.address}
                </li>
                <li className="flex gap-2.5">
                  <Phone className="size-4 shrink-0 mt-0.5 text-brand-gold-text" />
                  <span className="flex flex-col">
                    {siteInfo.landlines.map((number) => (
                      <a key={number} href={telHref(number)} className="hover:text-brand-navy">
                        {number}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <Smartphone className="size-4 shrink-0 mt-0.5 text-brand-gold-text" />
                  <span className="flex flex-col">
                    {siteInfo.mobiles.map((number) => (
                      <a key={number} href={telHref(number)} className="hover:text-brand-navy">
                        {number}
                      </a>
                    ))}
                  </span>
                </li>
                <li className="flex gap-2.5">
                  <Mail className="size-4 shrink-0 mt-0.5 text-brand-gold-text" />
                  <a href={`mailto:${siteInfo.email}`} className="hover:text-brand-navy">
                    {siteInfo.email}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-semibold text-brand-navy">
                Branch Offices
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {siteInfo.offices.join(" · ")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:hidden">
              <a
                href={`tel:${siteInfo.mobileHref}`}
                className="flex min-h-16 flex-col items-center justify-center gap-1.5 border border-border bg-card text-xs font-medium text-brand-navy"
              >
                <Phone className="size-5" />
                Call Now
              </a>
              <a
                href={`https://wa.me/${siteInfo.mobileHref.replace("+", "")}`}
                className="flex min-h-16 flex-col items-center justify-center gap-1.5 border border-border bg-card text-xs font-medium text-brand-navy"
              >
                <MessageCircle className="size-5" />
                WhatsApp
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex min-h-16 flex-col items-center justify-center gap-1.5 border border-border bg-card text-xs font-medium text-brand-navy"
              >
                <Mail className="size-5" />
                Email Us
              </a>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={siteInfo.social.instagram}
                aria-label="Instagram"
                className="flex size-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-brand-navy hover:text-brand-navy"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={siteInfo.social.facebook}
                aria-label="Facebook"
                className="flex size-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-brand-navy hover:text-brand-navy"
              >
                <FacebookIcon className="size-5" />
              </a>
              <a
                href={siteInfo.social.linkedin}
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center border border-border text-muted-foreground transition-colors hover:border-brand-navy hover:text-brand-navy"
              >
                <LinkedInIcon className="size-5" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section noTopPadding>
        <div className="overflow-hidden border border-border">
          <iframe
            title="Pithavadian And Partners, Head Office, Ashok Nagar, Chennai"
            src={siteInfo.mapEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Section>
    </>
  );
}
