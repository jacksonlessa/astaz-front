import Image from "next/image";
import Link from "next/link";
import { CardLinkArrow, CardTitleLink } from "@/components/ui/card-link";
import { publishedDestinos } from "@/lib/content/destinos";
import { servicosFeaturedOnHome } from "@/lib/content/servicos";
import { destinoPath, routes, servicoPath } from "@/lib/routes";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";

export function Services() {
  return (
    <section
      id="servicos"
      className="section-padding bg-secondary"
      aria-labelledby="services-heading"
    >
      <div className="container-wide mx-auto">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Serviços</SectionLabel>
          {/*
            Era "Soluções para cada ocasião". Nenhum dos 7 <h2> da home
            continha "transporte executivo", "transfer" ou "aeroporto" — os
            dois termos que trazem cliente. Este <h2> e o da <Fleet /> passaram
            a carregá-los; os outros cinco seguem sendo copy de marca, que é o
            equilíbrio certo (título de seção existe para orientar o leitor,
            não para repetir palavra-chave).
          */}
          <SectionHeading id="services-heading" className="mt-4">
            Transporte executivo e transfer para aeroportos
          </SectionHeading>
          <SectionDescription className="mt-4">
            Do transfer aeroportuário ao evento mais exclusivo, oferecemos
            transporte executivo com padrão premium em cada detalhe do
            trajeto.
          </SectionDescription>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {servicosFeaturedOnHome.map((servico) => (
            <article
              key={servico.slug}
              className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-500 ${
                servico.published ? "hover:border-primary/30 hover:gold-glow" : ""
              }`}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {/* `image`/`imageAlt` sempre existem aqui: só entra em
                    `servicosFeaturedOnHome` quem tem os dois preenchidos. */}
                <Image
                  src={servico.image!}
                  alt={servico.imageAlt!}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
              </div>
              <div className="relative flex flex-1 flex-col p-6 sm:p-8">
                <h3
                  className={`font-display text-2xl text-foreground ${
                    servico.published ? "transition-colors group-hover:text-primary" : ""
                  }`}
                >
                  {servico.published ? (
                    <CardTitleLink href={servicoPath(servico.slug)}>
                      {servico.title}
                    </CardTitleLink>
                  ) : (
                    servico.title
                  )}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral sm:text-base">
                  {servico.summary}
                </p>
                {/*
                  Serviço ainda sem página própria: sem seta, sem link — o
                  card fica informativo, mesmo padrão do hub /servicos. Evita
                  prometer uma navegação que não acontece.
                */}
                {servico.published ? (
                  <CardLinkArrow>Ver detalhes do serviço</CardLinkArrow>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          <Link
            href={routes.servicos}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
          >
            Todos os serviços
            <span aria-hidden="true">→</span>
          </Link>
          {/*
            Os três destinos publicados, não só Navegantes.

            A home é a página que mais recebe link externo, e por isso é a que
            mais tem autoridade para distribuir. Enquanto linkava um destino
            só, `/destinos/beto-carrero` recebia link de uma única página do
            site (o hub) — página nova sem link interno demora muito mais para
            o buscador considerar relevante. Vem de `publishedDestinos` para
            que destino novo entre aqui sozinho.
          */}
          {publishedDestinos.map((destino) => (
            <Link
              key={destino.slug}
              href={destinoPath(destino.slug)}
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
            >
              Transfer para o {destino.breadcrumbLabel}
              <span aria-hidden="true">→</span>
            </Link>
          ))}
          <Link
            href={routes.destinos}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
          >
            Todos os destinos
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
