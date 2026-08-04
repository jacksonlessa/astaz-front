import Image from "next/image";
import Link from "next/link";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { JsonLd } from "@/components/seo/json-ld";
import { CardLinkArrow, CardTitleLink } from "@/components/ui/card-link";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { publishedDestinos } from "@/lib/content/destinos";
import { destinoPath, routes } from "@/lib/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Destinos Atendidos",
  description:
    "Transfers executivos partindo de Balneário Camboriú para aeroportos, cidades e destinos turísticos do litoral de Santa Catarina.",
  path: routes.destinos,
});

export default function DestinosPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: routes.home },
          { name: "Destinos", path: routes.destinos },
        ])}
      />
      <Header />

      <main id="conteudo" className="pt-16 sm:pt-20">
        <section
          className="section-padding bg-secondary"
          aria-labelledby="destinos-heading"
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
                  Destinos
                </li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              <SectionLabel>Destinos</SectionLabel>
              <SectionHeading as="h1" id="destinos-heading" className="mt-4">
                Para onde levamos você
              </SectionHeading>
              <SectionDescription className="mt-4">
                Cada destino tem suas particularidades de trajeto, horário e
                veículo. Reunimos aqui o que você precisa saber antes de
                agendar.
              </SectionDescription>
            </div>

            <ul className="mt-16 grid gap-6 sm:grid-cols-2">
              {publishedDestinos.map((destino) => (
                <li key={destino.slug}>
                  <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-500 hover:border-primary/30 hover:gold-glow">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={destino.image}
                        alt={destino.imageAlt}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <h2 className="font-display text-2xl text-foreground transition-colors group-hover:text-primary">
                        <CardTitleLink href={destinoPath(destino.slug)}>
                          {destino.breadcrumbLabel}
                        </CardTitleLink>
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral sm:text-base">
                        {destino.summary}
                      </p>
                      <CardLinkArrow>Ver detalhes do trajeto</CardLinkArrow>
                    </div>
                  </article>
                </li>
              ))}
            </ul>

            <section className="mt-16 rounded-2xl border border-border-subtle bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                Região atendida
              </SectionHeading>
              <SectionDescription className="mt-4">
                Além dos destinos acima, atendemos deslocamentos em todo o
                litoral catarinense e no Vale do Itajaí.
              </SectionDescription>
              <ul className="mt-8 flex flex-wrap gap-3">
                {businessInfo.areaServed.map((cidade) => (
                  <li
                    key={cidade}
                    className="rounded-full border border-border-subtle px-4 py-2 text-sm text-neutral"
                  >
                    {cidade}
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <WhatsAppButton>Consultar outro destino</WhatsAppButton>
              </div>
            </section>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
