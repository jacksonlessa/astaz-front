import Image from "next/image";
import Link from "next/link";
import { categoriasFrota, faixaPassageiros } from "@/lib/content/frota";
import { routes } from "@/lib/routes";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";

export function Fleet() {
  return (
    <section
      id="frota"
      className="section-padding bg-secondary"
      aria-labelledby="fleet-heading"
    >
      <div className="container-wide mx-auto">
        <div className="mb-16 text-center">
          <SectionLabel className="block">Frota</SectionLabel>
          <SectionHeading id="fleet-heading" className="mt-4">
            Categorias pensadas para cada necessidade
          </SectionHeading>
          <SectionDescription className="mx-auto mt-4">
            Selecionamos veículos que combinam conforto, elegância e
            funcionalidade — sem comprometer o padrão executivo em nenhum
            trajeto.
          </SectionDescription>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {categoriasFrota.map((category) => (
            <article
              key={category.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-500 hover:border-primary/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h3 className="font-display text-2xl text-foreground">
                  {category.title}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.15em] text-primary">
                  {faixaPassageiros(category)}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral sm:text-base">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href={routes.frota}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
          >
            Ver todas as configurações da frota
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
