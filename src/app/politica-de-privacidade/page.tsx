import Link from "next/link";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { JsonLd } from "@/components/seo/json-ld";
import { SectionHeading } from "@/components/ui/section-label";
import {
  politicaSections,
  privacidadeIntro,
} from "@/lib/content/privacidade";
import { routes } from "@/lib/routes";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

// Página utilitária: não compete por busca, por isso `noIndex: true` e fora
// de `publishedRoutes` (não entra no sitemap). Ver `src/lib/routes.ts`.
export const metadata = buildMetadata({
  title: privacidadeIntro.title,
  description: privacidadeIntro.description,
  path: routes.politicaDePrivacidade,
  noIndex: true,
});

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <JsonLd
        schema={breadcrumbSchema([
          { name: "Início", path: routes.home },
          { name: "Política de Privacidade", path: routes.politicaDePrivacidade },
        ])}
      />
      <Header />

      <main id="conteudo" className="pt-16 sm:pt-20">
        <section className="section-padding bg-secondary">
          <div className="container-narrow mx-auto">
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
                  Política de Privacidade
                </li>
              </ol>
            </nav>

            <div className="max-w-3xl">
              <SectionHeading as="h1">{privacidadeIntro.title}</SectionHeading>
              <p className="mt-6 text-base leading-relaxed text-neutral sm:text-lg">
                {privacidadeIntro.description}
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.15em] text-neutral-dark">
                Última atualização: {privacidadeIntro.lastUpdated}
              </p>
            </div>

            <div className="mt-16 max-w-3xl space-y-12">
              {politicaSections.map((section) => (
                <section key={section.id} aria-labelledby={section.id}>
                  <h2
                    id={section.id}
                    className="font-display text-xl text-foreground sm:text-2xl"
                  >
                    {section.title}
                  </h2>
                  {section.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-sm leading-relaxed text-neutral sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.items ? (
                    <ul className="mt-4 space-y-3 border-l border-border-subtle pl-5">
                      {section.items.map((item) => {
                        const key = typeof item === "string" ? item : item.href;
                        return (
                          <li
                            key={key}
                            className="text-sm leading-relaxed text-neutral-dark sm:text-base"
                          >
                            {typeof item === "string" ? (
                              item
                            ) : (
                              <a
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                              >
                                {item.label}
                              </a>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                </section>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
