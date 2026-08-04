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
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { categoriasFrota, itensFrota } from "@/lib/content/frota";
import { routes } from "@/lib/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Frota Executiva",
  description:
    "Sedã, SUV e van executiva na frota da Astaz: de 4 a 20 passageiros, bebê conforto sob solicitação e fretamento para grupos e eventos.",
  path: routes.frota,
});

export default function FrotaPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: routes.home },
          { name: "Frota", path: routes.frota },
        ])}
      />
      <Header />

      <main id="conteudo" className="pt-16 sm:pt-20">
        <section
          className="section-padding bg-secondary"
          aria-labelledby="frota-heading"
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
                  Frota
                </li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              <SectionLabel>Frota</SectionLabel>
              <SectionHeading as="h1" id="frota-heading" className="mt-4">
                A frota que leva você
              </SectionHeading>
              <SectionDescription className="mt-4">
                Três categorias e seis configurações, de 4 a 20 passageiros. Se
                a sua necessidade não se encaixar em nenhuma delas, converse com
                nossa equipe antes de agendar.
              </SectionDescription>
            </div>

            {/*
              Categoria à esquerda (prosa escrita uma vez) e configurações à
              direita (só os números). É o que permite três Sprinters no mesmo
              card sem repetir descrição.
            */}
            <div className="mt-16 space-y-6">
              {categoriasFrota.map((categoria) => (
                <article
                  key={categoria.title}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8 lg:grid lg:grid-cols-3 lg:gap-12"
                >
                  <div>
                    <h2 className="font-display text-2xl text-foreground">
                      {categoria.title}
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-neutral">
                      {categoria.description}
                    </p>
                  </div>

                  <ul className="mt-6 divide-y divide-border-subtle border-t border-border-subtle lg:col-span-2 lg:mt-0 lg:border-t-0">
                    {categoria.configuracoes.map((config) => (
                      <li
                        key={config.modelo}
                        className="py-5 first:pt-5 last:pb-0 lg:first:pt-0"
                      >
                        {/*
                          No mobile o par empilha sempre: deixar quebrar por
                          conta do `justify-between` alinhava uma linha à
                          direita e as outras à esquerda.
                        */}
                        <div className="flex flex-col items-start gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-6">
                          <h3 className="font-display text-lg text-foreground">
                            {config.modelo}
                          </h3>
                          <p className="text-xs uppercase tracking-[0.15em] text-primary">
                            {config.passageiros} passageiros
                          </p>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-neutral-dark">
                          {config.indicadoPara}
                        </p>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                Antes de agendar
              </SectionHeading>
              <div className="mt-8 grid gap-6 sm:grid-cols-2">
                {itensFrota.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
                  >
                    <h3 className="font-display text-xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                      {item.description}
                    </p>
                  </article>
                ))}
              </div>
            </section>

            <div className="mt-16 rounded-2xl border border-border-subtle bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                Ajudamos a escolher o veículo
              </SectionHeading>
              <SectionDescription className="mt-4">
                Informe quantas pessoas viajam e o contexto do trajeto.
                Indicamos a configuração adequada antes de você fechar o
                agendamento.
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton message="Olá, ASTAZ! Gostaria de saber qual veículo é o mais adequado para a minha viagem.">
                  Falar pelo WhatsApp
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
