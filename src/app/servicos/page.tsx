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
import { paginasMeta } from "@/lib/content/paginas";
import { servicos } from "@/lib/content/servicos";
import { destinoPath, routes, servicoPath } from "@/lib/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  ...paginasMeta.servicos,
  path: routes.servicos,
  // O `noIndex` saiu com a publicação de `/servicos/transfer-aeroporto`: o hub
  // agora linka uma filha real e passa a ter função própria de distribuição.
  // Enquanto era um índice sem nenhum link, era só uma reformulação da seção de
  // serviços da home — URL indexável sem conteúdo que lhe pertencesse.
});

export default function ServicosPage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: routes.home },
          { name: "Serviços", path: routes.servicos },
        ])}
      />
      <Header />

      <main id="conteudo" className="pt-16 sm:pt-20">
        <section
          className="section-padding bg-secondary"
          aria-labelledby="servicos-heading"
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
                  Serviços
                </li>
              </ol>
            </nav>

            <div className="max-w-2xl">
              <SectionLabel>Serviços</SectionLabel>
              <SectionHeading as="h1" id="servicos-heading" className="mt-4">
                Serviços de transporte executivo
              </SectionHeading>
              <SectionDescription className="mt-4">
                Transporte executivo em {siteConfig.baseCity} e no litoral
                catarinense, organizado por tipo de necessidade. Todos os
                serviços são atendidos mediante agendamento, com disponibilidade
                24 horas.
              </SectionDescription>
            </div>

            <ul className="mt-16 grid gap-6 sm:grid-cols-2">
              {servicos.map((servico) => (
                <li key={servico.slug}>
                  <article className="group relative flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-500 hover:border-primary/30 hover:gold-glow sm:p-8">
                    {/*
                      Enquanto `published` for false, a página de detalhe não
                      existe — o card fica sem link (e sem a seta de rodapé)
                      para não gerar 404 nem prometer uma navegação que não
                      acontece. Publicada a filha, o card passa a seguir o mesmo
                      padrão do hub de destinos, sem mais nenhuma alteração
                      aqui.
                    */}
                    <h2
                      className={`font-display text-2xl text-foreground ${
                        servico.published
                          ? "transition-colors group-hover:text-primary"
                          : ""
                      }`}
                    >
                      {servico.published ? (
                        <CardTitleLink href={servicoPath(servico.slug)}>
                          {servico.title}
                        </CardTitleLink>
                      ) : (
                        servico.title
                      )}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral sm:text-base">
                      {servico.summary}
                    </p>
                    {servico.published ? (
                      <CardLinkArrow>Ver detalhes do serviço</CardLinkArrow>
                    ) : null}
                  </article>
                </li>
              ))}
            </ul>

            {/*
              Rotas com página própria.

              Existe por dois motivos. Para quem lê: dos seis serviços acima,
              quatro ainda não têm página, então o hub terminava numa lista em
              que a maior parte dos cards não leva a lugar nenhum — este bloco
              devolve destino real à página. Para o buscador: o hub tinha o
              conteúdo mais fino do site indexado (~270 palavras) e nenhum link
              para os destinos, apesar de ser a página que o menu principal
              aponta.
            */}
            <section className="mt-16" aria-labelledby="rotas-heading">
              <SectionHeading
                as="h2"
                id="rotas-heading"
                className="!text-2xl sm:!text-3xl"
              >
                Rotas com página própria
              </SectionHeading>
              <SectionDescription className="mt-4">
                Algumas rotas têm detalhes que mudam o planejamento — tempo de
                trajeto, horário de saída recomendado e como funciona a
                recepção. Essas ganharam página própria.
              </SectionDescription>
              <ul className="mt-8 grid gap-6 sm:grid-cols-2">
                {publishedDestinos.map((destino) => (
                  <li key={destino.slug}>
                    {/* `relative flex h-full flex-col` é requisito do
                        CardTitleLink — ver o comentário em card-link.tsx. */}
                    <article className="group relative flex h-full flex-col rounded-2xl border border-border-subtle bg-surface p-6 transition-colors hover:border-primary/30 sm:p-8">
                      <h3 className="font-display text-xl text-foreground transition-colors group-hover:text-primary">
                        <CardTitleLink href={destinoPath(destino.slug)}>
                          {destino.breadcrumbLabel}
                        </CardTitleLink>
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral">
                        {destino.summary}
                      </p>
                      <CardLinkArrow>Ver detalhes da rota</CardLinkArrow>
                    </article>
                  </li>
                ))}
              </ul>
            </section>

            <div className="mt-16 rounded-2xl border border-border-subtle bg-surface p-8 sm:p-12">
              <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                Roteiros sob demanda
              </SectionHeading>
              <SectionDescription className="mt-4">
                Roteiros com múltiplas paradas, agendas fora do padrão e
                necessidades específicas são atendidos sob demanda. Conte o que
                você precisa e retornamos com uma proposta.
              </SectionDescription>
              <div className="mt-8">
                <WhatsAppButton>Solicitar orçamento</WhatsAppButton>
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
