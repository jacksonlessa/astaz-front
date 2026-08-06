import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

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
import { categoriasFrota, faixaPassageiros } from "@/lib/content/frota";
import { getServico } from "@/lib/content/servicos";
import {
  compromissosRecorrentes,
  destinosFechamento,
  destinosNota,
  destinosPorCidade,
  esperaInclusa,
  mobilidadeReduzida,
  oQueIncluiIdosos,
  protocoloAvisos,
  transporteIdososCta,
  transporteIdososFaq,
  transporteIdososIntro,
} from "@/lib/content/transporte-idosos";
import { routes, servicoPath } from "@/lib/routes";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const SLUG = "transporte-idosos";
const servico = getServico(SLUG);

export const metadata = buildMetadata({
  title: servico?.metaTitle ?? "",
  description: servico?.metaDescription ?? "",
  path: servicoPath(SLUG),
  image: transporteIdososIntro.image,
  // `noIndex` fica ligado até: 1) o texto ter uma leitura final da operação
  // (o FAQ desta página ainda não foi confirmado frase a frase — ver
  // `docs/seo/briefings/transporte-idosos.md`) e 2) existir foto real ou uma
  // decisão consciente de publicar sem. Tirar o `noIndex` e adicionar a rota
  // em `publishedRoutes` (`src/lib/routes.ts`) no mesmo commit.
  noIndex: true,
});

export default function TransporteIdososPage() {
  // O `published` de `content/servicos.ts` é a chave única: enquanto for
  // false, o card do hub não vira link e esta rota não deve responder.
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
            name: servico.title,
            description: servico.metaDescription,
            path: servicoPath(SLUG),
          }),
          // Válido: estas perguntas são exibidas na seção de FAQ abaixo.
          faqSchema(transporteIdososFaq),
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
              <SectionLabel>{transporteIdososIntro.eyebrow}</SectionLabel>
              <SectionHeading as="h1" className="mt-4">
                {transporteIdososIntro.title}
              </SectionHeading>
              <SectionDescription className="mt-6 max-w-3xl">
                {transporteIdososIntro.description}
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton message={transporteIdososIntro.whatsappMessage}>
                  Solicitar orçamento
                </WhatsAppButton>
              </div>
            </div>

            {/*
              Imagem de banco, não do serviço. Fica abaixo da abertura e não no
              topo de propósito: quem decide aqui quer ler o que está incluído,
              não ver um carro. Sai quando houver foto real da operação — ver
              seção 7 de `docs/seo/briefings/transporte-idosos.md`.
            */}
            <div className="relative mt-14 aspect-[16/9] overflow-hidden rounded-2xl sm:aspect-[21/9]">
              <Image
                src={transporteIdososIntro.image}
                alt={transporteIdososIntro.imageAlt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1408px) 100vw, 1408px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 to-transparent" />
            </div>

            <section className="mt-16" aria-labelledby="inclui-heading">
              <SectionHeading
                as="h2"
                id="inclui-heading"
                className="!text-2xl sm:!text-3xl"
              >
                O que o serviço inclui
              </SectionHeading>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {oQueIncluiIdosos.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
                  >
                    <h3 className="font-display text-xl text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {protocoloAvisos.title}
              </SectionHeading>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral">
                {protocoloAvisos.body}
              </p>
            </section>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {esperaInclusa.title}
              </SectionHeading>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral">
                {esperaInclusa.body}
              </p>
            </section>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                {mobilidadeReduzida.title}
              </SectionHeading>
              <div className="mt-6 max-w-3xl space-y-4">
                {mobilidadeReduzida.paragraphs.map((paragraph) => (
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
                {compromissosRecorrentes.title}
              </SectionHeading>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral">
                {compromissosRecorrentes.body}
              </p>
            </section>

            <section className="mt-16" aria-labelledby="destinos-heading">
              <SectionHeading
                as="h2"
                id="destinos-heading"
                className="!text-2xl sm:!text-3xl"
              >
                Destinos atendidos
              </SectionHeading>
              <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral">
                Alguns dos hospitais, clínicas e laboratórios para onde mais
                levamos passageiros em consultas, exames e sessões
                recorrentes.
              </p>
              <div className="mt-8 grid gap-6 sm:grid-cols-3">
                {destinosPorCidade().map((grupo) => (
                  <article
                    key={grupo.cidade}
                    className="rounded-2xl border border-border-subtle bg-surface p-6"
                  >
                    <h3 className="font-display text-lg text-foreground">
                      {grupo.cidade}
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral">
                      {grupo.nomes.map((nome) => (
                        <li key={nome}>{nome}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
              <p className="mt-6 max-w-3xl text-sm leading-relaxed text-neutral-dark">
                {destinosNota}
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-neutral-dark">
                {destinosFechamento}
              </p>
            </section>

            <section className="mt-16">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                Veículos para o serviço
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
                O SUV costuma ser mais fácil para entrar e sair, por ser mais
                alto e espaçoso; o sedã é a opção mais baixa.{" "}
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
                {transporteIdososFaq.map((item) => (
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
                {transporteIdososCta.title}
              </SectionHeading>
              <SectionDescription className="mt-4">
                {transporteIdososCta.body}
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton message={transporteIdososIntro.whatsappMessage}>
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
