import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { JsonLd } from "@/components/seo/json-ld";
import { AeroportosTable } from "@/components/servico/aeroportos-table";
import { ComparativoTable } from "@/components/servico/comparativo-table";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import {
  categoriasFrota,
  faixaPassageiros,
  notaVeiculosDestino,
} from "@/lib/content/frota";
import { getServico } from "@/lib/content/servicos";
import {
  atrasoDeVoo,
  comoFunciona,
  comparativoAlternativas,
  criterioEscolha,
  trajetoCuritiba,
  transferAeroportoCta,
  transferAeroportoFaq,
  transferAeroportoIntro,
} from "@/lib/content/transfer-aeroporto";
import { destinoPath, routes, servicoPath } from "@/lib/routes";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const SLUG = "transfer-aeroporto";
const servico = getServico(SLUG);

export const metadata = buildMetadata({
  title: servico?.metaTitle ?? "",
  description: servico?.metaDescription ?? "",
  path: servicoPath(SLUG),
  image: transferAeroportoIntro.image,
});

export default function TransferAeroportoPage() {
  // O `published` de `content/servicos.ts` é a chave única: enquanto for false,
  // o card do hub não vira link e esta rota não deve responder. Mesma regra das
  // páginas de destino — não há como publicar por engano.
  if (!servico?.published) notFound();

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: "Início", path: routes.home },
            { name: "Serviços", path: routes.servicos },
            { name: servico.title, path: servicoPath(SLUG) },
          ]),
          serviceSchema({
            name: "Transfer executivo para aeroportos",
            description: servico.metaDescription,
            path: servicoPath(SLUG),
          }),
          // Válido: estas perguntas são exibidas na seção de FAQ abaixo.
          faqSchema(transferAeroportoFaq),
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
                    href={routes.servicos}
                    className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                  >
                    Serviços
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-neutral" aria-current="page">
                  {servico.title}
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <SectionLabel>{transferAeroportoIntro.eyebrow}</SectionLabel>
              <SectionHeading as="h1" className="mt-4">
                {transferAeroportoIntro.title}
              </SectionHeading>
              <SectionDescription className="mt-6 max-w-3xl">
                {transferAeroportoIntro.description}
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton
                  message={transferAeroportoIntro.whatsappMessage}
                >
                  Solicitar orçamento
                </WhatsAppButton>
              </div>
            </div>

            <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[21/9]">
              <Image
                src={transferAeroportoIntro.image}
                alt={transferAeroportoIntro.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1408px) 100vw, 1408px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>

            <section className="mt-16" aria-labelledby="aeroportos-heading">
              <SectionHeading
                as="h2"
                id="aeroportos-heading"
                className="!text-2xl sm:!text-3xl"
              >
                Os quatro aeroportos que servem Balneário Camboriú
              </SectionHeading>
              <AeroportosTable />
            </section>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {criterioEscolha.title}
              </SectionHeading>
              <div className="mt-6 max-w-3xl space-y-4">
                {criterioEscolha.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-neutral"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-8 max-w-3xl border-l-2 border-primary pl-6 font-display text-xl leading-relaxed text-foreground">
                {criterioEscolha.resumo}
              </p>
            </section>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {trajetoCuritiba.title}
              </SectionHeading>
              <div className="mt-6 max-w-3xl space-y-4">
                {trajetoCuritiba.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-relaxed text-neutral"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {comoFunciona.title}
              </SectionHeading>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral">
                {comoFunciona.intro}
              </p>
              <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                {comoFunciona.items.map((item, index) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
                  >
                    <span
                      className="font-display text-sm text-primary"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 font-display text-xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ol>
              <p className="mt-8 max-w-3xl text-sm leading-relaxed text-neutral-dark">
                Cada rota tem detalhes próprios de recepção e de trajeto. Veja a
                página do{" "}
                <Link
                  href={destinoPath("aeroporto-navegantes")}
                  className="text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                >
                  Aeroporto de Navegantes
                </Link>{" "}
                ou do{" "}
                <Link
                  href={destinoPath("aeroporto-florianopolis")}
                  className="text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                >
                  Aeroporto de Florianópolis
                </Link>
                .
              </p>
            </section>

            <section className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {atrasoDeVoo.title}
              </SectionHeading>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral">
                {atrasoDeVoo.body}
              </p>
            </section>

            <section className="mt-16" aria-labelledby="comparativo-heading">
              <SectionHeading
                as="h2"
                id="comparativo-heading"
                className="!text-2xl sm:!text-3xl"
              >
                {comparativoAlternativas.title}
              </SectionHeading>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral">
                {comparativoAlternativas.intro}
              </p>
              <ComparativoTable />
            </section>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                Veículos para o transfer
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
                {transferAeroportoFaq.map((item) => (
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

            <div className="mt-16 rounded-2xl border border-border-subtle bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {transferAeroportoCta.title}
              </SectionHeading>
              <SectionDescription className="mt-4">
                {transferAeroportoCta.body}
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton
                  message={transferAeroportoIntro.whatsappMessage}
                >
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
