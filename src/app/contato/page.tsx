import Link from "next/link";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { JsonLd } from "@/components/seo/json-ld";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";
import { QuoteForm } from "@/components/ui/quote-form";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { contatoContent, orcamentoPresets } from "@/lib/content/orcamento";
import { routes } from "@/lib/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contato e Orçamento",
  description:
    "Solicite um orçamento de transporte executivo em Balneário Camboriú: preencha data, origem e destino e continue direto no WhatsApp.",
  path: routes.contato,
});

export default function ContatoPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: routes.home },
          { name: "Contato", path: routes.contato },
        ])}
      />
      <Header />

      <main id="conteudo" className="pt-16 sm:pt-20">
        <section
          className="section-padding bg-secondary"
          aria-labelledby="contato-heading"
        >
          <div className="container-wide mx-auto">
            <nav aria-label="Trilha de navegação" className="mb-8">
              <ol className="flex items-center gap-2 text-xs text-neutral-dark">
                <li>
                  <Link
                    href={routes.home}
                    className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                  >
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral" aria-current="page">
                  Contato
                </li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              <SectionLabel>{contatoContent.eyebrow}</SectionLabel>
              <SectionHeading as="h1" id="contato-heading" className="mt-4">
                {contatoContent.title}
              </SectionHeading>
              <SectionDescription className="mt-4">
                {contatoContent.description}
              </SectionDescription>
            </div>

            <div className="mt-12 max-w-3xl">
              <QuoteForm preset={orcamentoPresets.contato} />
            </div>

            <div className="mt-8 max-w-3xl rounded-2xl border border-border-subtle bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-xl sm:!text-2xl">
                {contatoContent.alternativa.title}
              </SectionHeading>
              <SectionDescription className="mt-3">
                {contatoContent.alternativa.body}
              </SectionDescription>
              <div className="mt-6">
                <WhatsAppButton variant="outline">
                  {contatoContent.alternativa.ctaLabel}
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
