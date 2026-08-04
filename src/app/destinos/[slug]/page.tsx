import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { DestinoBlocks } from "@/components/destino/destino-blocks";
import { JsonLd } from "@/components/seo/json-ld";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import {
  getDestino,
  getDestinosRelacionados,
  publishedDestinos,
} from "@/lib/content/destinos";
import { destinoPath, routes } from "@/lib/routes";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  categoriasFrota,
  faixaPassageiros,
  notaVeiculosDestino,
} from "@/lib/content/frota";

type PageProps = { params: Promise<{ slug: string }> };

/**
 * Só destinos com `published: true` viram rota. Um destino em preparação fica
 * no arquivo de conteúdo sem gerar página — não há como publicar por engano.
 */
export function generateStaticParams() {
  return publishedDestinos.map((destino) => ({ slug: destino.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const destino = getDestino(slug);

  if (!destino?.published) return {};

  return buildMetadata({
    title: destino.metaTitle,
    description: destino.metaDescription,
    path: destinoPath(destino.slug),
    image: destino.image,
  });
}

export default async function DestinoPage({ params }: PageProps) {
  const { slug } = await params;
  const destino = getDestino(slug);

  if (!destino?.published) notFound();

  const relacionados = getDestinosRelacionados(destino);

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Início", path: routes.home },
            { name: "Destinos", path: routes.destinos },
            // Rótulo curto: é o texto que o Google exibe na trilha do
            // resultado de busca, onde o título completo seria truncado.
            { name: destino.breadcrumbLabel, path: destinoPath(destino.slug) },
          ]),
          // Válido: estas perguntas são exibidas na seção de FAQ abaixo.
          faqSchema(destino.faq),
        ]}
      />
      <Header />

      <main id="conteudo" className="pt-16 sm:pt-20">
        <section className="section-padding bg-secondary">
          <div className="container-wide mx-auto">
            <nav aria-label="Trilha de navegação" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-xs text-neutral-dark">
                <li>
                  <Link
                    href={routes.home}
                    className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                  >
                    Início
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link
                    href={routes.destinos}
                    className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                  >
                    Destinos
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral" aria-current="page">
                  {destino.breadcrumbLabel}
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <SectionLabel>Destino</SectionLabel>
              <SectionHeading as="h1" className="mt-4">
                {destino.title}
              </SectionHeading>
              <SectionDescription className="mt-6 max-w-3xl">
                {destino.intro}
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton message={destino.whatsappMessage}>
                  Solicitar orçamento
                </WhatsAppButton>
              </div>
            </div>

            <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[21/9]">
              <Image
                src={destino.image}
                alt={destino.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1408px) 100vw, 1408px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>

            <dl className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {destino.routeFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-border-subtle bg-surface p-6"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    {fact.label}
                  </dt>
                  <dd className="mt-3 font-display text-2xl text-foreground">
                    {fact.value}
                  </dd>
                  {fact.note ? (
                    <p className="mt-2 text-xs leading-relaxed text-neutral-dark">
                      {fact.note}
                    </p>
                  ) : null}
                </div>
              ))}
            </dl>

            <DestinoBlocks blocks={destino.blocks} />

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                Veículos para esta rota
              </SectionHeading>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {categoriasFrota.map((categoria) => (
                  <article
                    key={categoria.title}
                    className="rounded-2xl border border-border-subtle bg-surface p-6"
                  >
                    <h3 className="font-display text-xl text-foreground">
                      {categoria.title}
                    </h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-primary">
                      {faixaPassageiros(categoria)}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-neutral">
                      {categoria.description}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-neutral-dark">
                {notaVeiculosDestino}{" "}
                <Link
                  href={routes.frota}
                  className="text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                >
                  Conheça a frota
                </Link>
                .
              </p>
            </section>

            <section className="mt-16" aria-labelledby="faq-heading">
              <SectionHeading
                as="h2"
                id="faq-heading"
                className="!text-2xl sm:!text-3xl"
              >
                Perguntas frequentes
              </SectionHeading>
              <dl className="mt-8 max-w-3xl divide-y divide-border-subtle border-y border-border-subtle">
                {destino.faq.map((item) => (
                  <div key={item.question} className="py-6">
                    <dt className="font-display text-lg text-foreground">
                      {item.question}
                    </dt>
                    <dd className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            {relacionados.length > 0 ? (
              <section className="mt-16" aria-labelledby="relacionados-heading">
                <SectionHeading
                  as="h2"
                  id="relacionados-heading"
                  className="!text-2xl sm:!text-3xl"
                >
                  Outros destinos
                </SectionHeading>
                <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                  {relacionados.map((relacionado) => (
                    <li key={relacionado.slug}>
                      <article className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-primary/30 sm:p-8">
                        <h3 className="font-display text-xl text-foreground">
                          <Link
                            href={destinoPath(relacionado.slug)}
                            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                          >
                            {relacionado.breadcrumbLabel}
                          </Link>
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-neutral">
                          {relacionado.summary}
                        </p>
                      </article>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <div className="mt-16 rounded-2xl border border-border-subtle bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {destino.cta.title}
              </SectionHeading>
              <SectionDescription className="mt-4">
                {destino.cta.body}
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton message={destino.whatsappMessage}>
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
