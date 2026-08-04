import Image from "next/image";
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
import {
  fechamentoSobre,
  interiorAstaz,
  numerosAstaz,
  paraEmpresas,
  pilares,
  preparoAstaz,
  quemConduz,
  recorrencia,
  sobreIntro,
} from "@/lib/content/sobre";
import { routes } from "@/lib/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { businessInfo } from "@/lib/site";

export const metadata = buildMetadata({
  // O layout adiciona "| ASTAZ" — repetir a marca aqui empilharia o nome duas
  // vezes no resultado de busca e gastaria o espaço que a cidade ocupa melhor.
  title: "Sobre o transporte executivo em Balneário Camboriú",
  description:
    "Transporte executivo em Balneário Camboriú desde 2022. Mais de 2.000 viagens, agenda confirmada na véspera e voo acompanhado até o embarque.",
  path: routes.sobre,
  image: sobreIntro.image,
});

export default function SobrePage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: routes.home },
          { name: "Sobre", path: routes.sobre },
        ])}
      />
      <Header />

      <main id="conteudo" className="pt-16 sm:pt-20">
        <section
          className="section-padding bg-secondary"
          aria-labelledby="sobre-heading"
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
                  Sobre
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <SectionLabel>{sobreIntro.eyebrow}</SectionLabel>
              <SectionHeading as="h1" id="sobre-heading" className="mt-4">
                {sobreIntro.title}
              </SectionHeading>
              <SectionDescription className="mt-6 max-w-3xl">
                {sobreIntro.description}
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton message={sobreIntro.whatsappMessage}>
                  Falar pelo WhatsApp
                </WhatsAppButton>
              </div>
            </div>

            {/*
              16/9 em todos os tamanhos, sem a variante 21/9 usada nas páginas
              de destino: a foto original é retrato e já foi recortada para
              16/9. Um contêiner mais largo cortaria o teto e as rodas do
              veículo pela segunda vez.
            */}
            <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={sobreIntro.image}
                alt={sobreIntro.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1408px) 100vw, 1408px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>

            {/*
              Foto à direita e texto à esquerda. A foto é retrato (4:5) porque é
              retrato de pessoa: cortá-la em paisagem para casar com o banner
              acima cortaria justamente o rosto.
            */}
            <section className="mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
              <div>
                <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                  {quemConduz.title}
                </SectionHeading>
                {quemConduz.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm leading-relaxed text-neutral sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-2xl lg:mt-0">
                <Image
                  src={quemConduz.image}
                  alt={quemConduz.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 704px"
                />
              </div>
            </section>

            <section className="mt-16" aria-labelledby="numeros-heading">
              <SectionHeading
                as="h2"
                id="numeros-heading"
                className="!text-2xl sm:!text-3xl"
              >
                {recorrencia.title}
              </SectionHeading>

              <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {numerosAstaz.map((numero) => (
                  <div
                    key={numero.label}
                    className="rounded-2xl border border-border-subtle bg-surface p-6"
                  >
                    <dt className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {numero.label}
                    </dt>
                    <dd className="mt-3 font-display text-3xl text-foreground">
                      {numero.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {recorrencia.paragraphs.map((paragraph) => (
                <SectionDescription key={paragraph} className="mt-8">
                  {paragraph}
                </SectionDescription>
              ))}
            </section>

            <div className="mt-16 grid gap-6 lg:grid-cols-2">
              {pilares.map((pilar) => (
                <article
                  key={pilar.title}
                  className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
                >
                  <h2 className="font-display text-2xl text-foreground">
                    {pilar.title}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-neutral sm:text-base">
                    {pilar.intro}
                  </p>
                  <ul className="mt-6 space-y-4 border-t border-border-subtle pt-6">
                    {pilar.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-relaxed text-neutral-dark"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <section className="mt-16 lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src={interiorAstaz.image}
                  alt={interiorAstaz.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 704px"
                />
              </div>

              <div className="mt-8 lg:mt-0">
                <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                  {interiorAstaz.title}
                </SectionHeading>
                {interiorAstaz.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-sm leading-relaxed text-neutral sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>

            <section className="mt-16 grid gap-6 sm:grid-cols-2">
              <article className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
                <h2 className="font-display text-xl text-foreground">
                  {preparoAstaz.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                  {preparoAstaz.description}
                </p>
              </article>

              <article className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8">
                <h2 className="font-display text-xl text-foreground">
                  {paraEmpresas.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                  {paraEmpresas.description}
                </p>
                <p className="mt-4 text-xs uppercase tracking-[0.15em] text-neutral-dark">
                  CNPJ {businessInfo.taxId}
                </p>
              </article>
            </section>

            <div className="mt-16 rounded-2xl border border-border-subtle bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {fechamentoSobre.title}
              </SectionHeading>
              <SectionDescription className="mt-4">
                {fechamentoSobre.description}
              </SectionDescription>
              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <WhatsAppButton message={fechamentoSobre.whatsappMessage}>
                  Falar pelo WhatsApp
                </WhatsAppButton>
                <a
                  href={businessInfo.googleProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                >
                  {fechamentoSobre.googleLinkLabel}
                </a>
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
