import Link from "next/link";
import { Mail, Phone, Smartphone, MapPin } from "lucide-react";
import { Logo } from "@/components/logo";
import { InstagramIcon, FacebookIcon, LinkedInIcon } from "@/components/social-icons";
import { mainNav, siteInfo } from "@/lib/data/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative isolate border-t-2 border-brand-gold-deep bg-brand-navy-dark text-white">
      {/* From lg up, the intro panel's white ground continues past the divider
          to the very bottom of the footer. Mirrors the grid geometry below so
          the band lines up with that column exactly. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <div className="container h-full px-8">
          <div className="grid h-full grid-cols-4 gap-8">
            <div className="col-span-2 bg-white" />
          </div>
        </div>
      </div>

      <div className="container grid gap-10 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:gap-8 lg:px-8">
        <div className="-mt-16 bg-white px-7 pt-[92px] pb-7 lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {siteInfo.footerTagline}
          </p>
          <div className="mt-7 flex items-center gap-3">
            <a
              href={siteInfo.social.instagram}
              aria-label="Instagram"
              className="flex size-11 items-center justify-center border border-brand-navy/15 text-brand-navy/70 transition-colors hover:border-brand-gold-text hover:text-brand-gold-text"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={siteInfo.social.facebook}
              aria-label="Facebook"
              className="flex size-11 items-center justify-center border border-brand-navy/15 text-brand-navy/70 transition-colors hover:border-brand-gold-text hover:text-brand-gold-text"
            >
              <FacebookIcon className="size-5" />
            </a>
            <a
              href={siteInfo.social.linkedin}
              aria-label="LinkedIn"
              className="flex size-11 items-center justify-center border border-brand-navy/15 text-brand-navy/70 transition-colors hover:border-brand-gold-text hover:text-brand-gold-text"
            >
              <LinkedInIcon className="size-5" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:col-span-2">
          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-brand-gold-light">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {mainNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-white/70 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-brand-gold-light">
              Head Office
            </h3>
            <ul className="mt-5 space-y-3.5 text-sm text-white/70">
              <li className="flex gap-2.5">
                <MapPin className="size-4 shrink-0 mt-0.5 text-brand-gold-light" />
                <span>{siteInfo.headOffice.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="size-4 shrink-0 mt-0.5 text-brand-gold-light" />
                <span className="flex flex-col">
                  {siteInfo.landlines.map((number) => (
                    <span key={number}>{number}</span>
                  ))}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Smartphone className="size-4 shrink-0 mt-0.5 text-brand-gold-light" />
                <span className="flex flex-col">
                  {siteInfo.mobiles.map((number) => (
                    <span key={number}>{number}</span>
                  ))}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="size-4 shrink-0 mt-0.5 text-brand-gold-light" />
                <a href={`mailto:${siteInfo.email}`} className="hover:text-white transition-colors">
                  {siteInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container flex flex-col gap-2 px-4 py-6 text-xs text-[#5c6478] sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          {/* pl-7 lines the notice up with the panel text above it. */}
          <p className="pl-7">© {year} Pithavadian And Partners. All rights reserved.</p>
          <p>Offices: {siteInfo.offices.join(" · ")}</p>
        </div>
      </div>
    </footer>
  );
}
