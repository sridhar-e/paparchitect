"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, Mail, ArrowRight } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav, siteInfo } from "@/lib/data/nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-background shadow-[0_1px_0_0_var(--border)]">
      <div className="hidden lg:flex items-center justify-end gap-7 border-b border-border bg-white px-6 py-2 text-[13px] text-brand-navy/70">
        <a
          href={`mailto:${siteInfo.email}`}
          className="flex items-center gap-1.5 transition-colors hover:text-brand-gold-text"
        >
          <Mail className="size-3.5" />
          {siteInfo.email}
        </a>
        <a
          href={`tel:${siteInfo.mobileHref}`}
          className="flex items-center gap-1.5 transition-colors hover:text-brand-gold-text"
        >
          <Phone className="size-3.5" />
          {siteInfo.mobile}
        </a>
        <span className="h-3.5 w-px bg-brand-navy/15" />
        <span className="text-brand-navy/80">{siteInfo.offices.join(" · ")}</span>
      </div>

      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {mainNav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative px-4 py-2 text-sm font-semibold transition-colors",
                  active ? "text-brand-navy" : "text-foreground/70 hover:text-brand-navy"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-4 -bottom-0.5 h-0.5 bg-brand-gold-deep transition-transform duration-300 origin-left",
                    active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="h-11 gap-2 rounded-none bg-brand-navy px-6 text-sm font-semibold text-white hover:bg-brand-navy-light"
          >
            Get in Touch
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden size-11 rounded-none"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>
                <Logo />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-3 text-base font-semibold text-foreground hover:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
              <Button
                render={<Link href="/contact" />}
                nativeButton={false}
                className="mt-4 h-12 rounded-none bg-brand-navy text-base text-white hover:bg-brand-navy-light"
              >
                Get in Touch
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
