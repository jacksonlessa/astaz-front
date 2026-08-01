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
import { servicos } from "@/lib/content/servicos";
import { routes, servicoPath } from "@/lib/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Serviços de Transporte Executivo",
  description:
    "Transporte executivo em Balneário Camboriú para aeroportos, agendas corporativas, eventos e casamentos, com motorista particular e city tour.",
  path: routes.servicos,
  // Enquanto nenhuma página de serviço estiver publicada, este hub não linka
  // nenhuma filha e apenas reformula a seção de serviços da home — uma URL
  // indexável sem função própria. `follow` permanece, para o Google seguir os
  // links de navegação. Remover o noIndex assim que a primeira filha existir.
  noIndex: true,
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
                  <article className="h-full rounded-2xl border border-border-subtle bg-surface p-6 transition-all duration-500 hover:border-primary/30 hover:gold-glow sm:p-8">
                    <h2 className="font-display text-2xl text-foreground">
                      {/*
                        Enquanto `published` for false, a página de detalhe não
                        existe — o card fica sem link para não gerar 404.
                      */}
                      {servico.published ? (
                        <Link
                          href={servicoPath(servico.slug)}
                          className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                        >
                          {servico.title}
                        </Link>
                      ) : (
                        servico.title
                      )}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                      {servico.summary}
                    </p>
                  </article>
                </li>
              ))}
            </ul>

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
