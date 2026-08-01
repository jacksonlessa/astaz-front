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
    "Sedã, SUV e van executiva na frota da Astaz: até 7 passageiros, uma mala grande por pessoa e cadeirinha sob solicitação.",
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
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-secondary focus:outline-none"
      >
        Pular para o conteúdo
      </a>
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
                Três categorias, escolhidas pelo número de passageiros e pelo
                volume de bagagem. Se a sua necessidade não se encaixar em
                nenhuma delas, converse com nossa equipe antes de agendar.
              </SectionDescription>
            </div>

            <div className="mt-16 grid gap-6 lg:grid-cols-3">
              {categoriasFrota.map((categoria) => (
                <article
                  key={categoria.title}
                  className="flex flex-col rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
                >
                  <h2 className="font-display text-2xl text-foreground">
                    {categoria.title}
                  </h2>
                  <p className="mt-2 text-sm text-primary">
                    {categoria.modelos.join(" · ")}
                  </p>

                  <dl className="mt-6 flex gap-8 border-y border-border-subtle py-4">
                    <div>
                      <dt className="text-xs uppercase tracking-[0.15em] text-neutral-dark">
                        Passageiros
                      </dt>
                      <dd className="mt-1 font-display text-2xl text-foreground">
                        {categoria.passageiros}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-[0.15em] text-neutral-dark">
                        Malas grandes
                      </dt>
                      <dd className="mt-1 font-display text-2xl text-foreground">
                        {categoria.malasGrandes}
                      </dd>
                    </div>
                  </dl>

                  <p className="mt-6 text-sm leading-relaxed text-neutral">
                    {categoria.description}
                  </p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-dark">
                    <span className="text-neutral">Indicado para: </span>
                    {categoria.indicadoPara}
                  </p>
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
                Informe quantas pessoas viajam e quantas malas levam. Indicamos
                a categoria adequada antes de você fechar o agendamento.
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
