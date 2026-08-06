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
        {/*
          Hero no padrão da home, adaptado a uma foto retrato: em vez de ocupar
          a largura inteira (o que cortaria o veículo numa faixa estreita), a
          imagem ocupa uma coluna à direita e se dissolve num degradê para o
          fundo. O degradê é o que faz a borda esquerda parecer intencional em
          vez de recortada.
        */}
        <section
          className="relative flex min-h-[540px] items-end overflow-hidden bg-secondary lg:min-h-[620px]"
          aria-labelledby="sobre-heading"
        >
          <div className="absolute inset-y-0 right-0 w-full lg:w-[70%]">
            <Image
              src={sobreIntro.image}
              alt={sobreIntro.imageAlt}
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 70vw"
            />
            {/*
              Dissolve a borda esquerda da foto no fundo da seção. As paradas
              são explícitas porque o degradê precisa ser longo: um fade curto
              deixa uma emenda vertical visível onde a imagem começa.
            */}
            <div className="absolute inset-0 bg-gradient-to-r from-secondary from-18% via-secondary/55 via-50% to-transparent to-92%" />
            {/* No mobile a foto fica atrás do texto e precisa de contraste. */}
            <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/20 lg:hidden" />
          </div>

          <div className="relative z-10 w-full section-padding">
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

              <div className="max-w-xl animate-fade-up">
                <SectionLabel>{sobreIntro.eyebrow}</SectionLabel>
                <SectionHeading as="h1" id="sobre-heading" className="mt-4">
                  {sobreIntro.title}
                </SectionHeading>
                <SectionDescription className="mt-6">
                  {sobreIntro.description}
                </SectionDescription>
                <div className="mt-8">
                  <WhatsAppButton message={sobreIntro.whatsappMessage}>
                    Falar pelo WhatsApp
                  </WhatsAppButton>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-wide mx-auto">
            {/*
              Duas fotos em composição editorial. As colunas são posicionadas
              explicitamente porque a ordem que funciona no desktop não é a que
              funciona no mobile: empilhado, o retrato precisa vir logo depois
              do texto (é ele que responde à pergunta que o texto acabou de
              levantar), com a foto ao volante fechando. No desktop o retrato
              ocupa a coluna direita inteira e a foto de apoio senta embaixo do
              texto, preenchendo o vazio que a coluna curta deixava.

              Ambas em 4:5 porque são retratos de pessoa: recorte em paisagem
              cortaria justamente o rosto.
            */}
            <section className="lg:grid lg:grid-cols-2 lg:gap-12">
              <div className="lg:col-start-1 lg:row-start-1">
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

              <figure className="mt-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0">
                {/*
                  Proporção nativa do arquivo (872×1024), não 4:5 como as
                  demais: o retrato veio de estúdio com grafismo próprio até a
                  borda, e qualquer recorte fatia a coluna de pontos da
                  esquerda — o corte fica visível e parece defeito.
                */}
                <div className="relative aspect-[872/1024] overflow-hidden rounded-2xl">
                  <Image
                    src={quemConduz.retrato.image}
                    alt={quemConduz.retrato.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 704px"
                  />
                </div>
                <figcaption className="mt-4 text-sm text-neutral">
                  <span className="text-foreground">
                    {quemConduz.retrato.name}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-[0.15em] text-neutral-dark">
                    {quemConduz.retrato.role}
                  </span>
                </figcaption>
              </figure>

              <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-2xl lg:col-start-1 lg:row-start-2 lg:max-w-[300px] lg:self-end">
                <Image
                  src={quemConduz.aoVolante.image}
                  alt={quemConduz.aoVolante.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 300px"
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
              {/* 3:4 acompanha o enquadramento retrato do original. */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
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
