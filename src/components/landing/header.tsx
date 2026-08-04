import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site";
import { routes } from "@/lib/routes";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { MobileMenu } from "@/components/landing/mobile-menu";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border-subtle bg-secondary/80 backdrop-blur-xl">
      <div className="container-wide mx-auto flex h-16 items-center justify-between px-5 sm:h-20 sm:px-8 lg:px-12">
        <Link
          href={routes.home}
          className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          aria-label={`${siteConfig.name} — página inicial`}
        >
          <span className="font-display text-xl tracking-[0.15em] text-foreground transition-colors group-hover:text-primary sm:text-2xl">
            {siteConfig.name}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-neutral sm:text-xs">
            {siteConfig.tagline}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <WhatsAppButton size="sm">WhatsApp</WhatsAppButton>
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
