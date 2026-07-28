import { getWhatsAppUrl, navLinks, siteConfig } from "@/lib/site";
import { WhatsAppIconButton } from "@/components/ui/whatsapp-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-secondary">
      <div className="container-wide mx-auto px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#"
              className="inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              aria-label={`${siteConfig.name} — página inicial`}
            >
              <span className="font-display text-2xl tracking-[0.15em] text-foreground">
                {siteConfig.name}
              </span>
              <span className="mt-1 block text-xs font-medium uppercase tracking-[0.3em] text-neutral">
                {siteConfig.tagline}
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral">
              Transporte executivo com requinte, discrição e pontualidade para
              quem exige o melhor em cada trajeto, com sede em Balneário
              Camboriú.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-neutral transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Contato
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-neutral transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="text-sm text-neutral transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <span className="text-sm text-neutral">
                  {siteConfig.baseCity}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-start sm:items-end">
            <WhatsAppIconButton label="Contato via WhatsApp" />
            <p className="mt-4 text-xs text-neutral-dark">
              Atendimento via WhatsApp
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-subtle pt-8 sm:flex-row">
          <p className="text-xs text-neutral-dark">
            &copy; {currentYear} {siteConfig.name}. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-col items-center gap-1 sm:items-end">
            <p className="text-xs text-neutral-dark">
              Transporte Executivo Premium
            </p>
            <p className="text-xs text-neutral-dark">
              Desenvolvido por{" "}
              <a
                href="https://www.jackssolutions.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
              >
                Jackson Lessa · Jack&apos;s Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
