import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";
import { destinoPath, routes } from "@/lib/routes";
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
          <SectionHeading id="services-heading" className="mt-4">
            Soluções para cada ocasião
          </SectionHeading>
          <SectionDescription className="mt-4">
            Do transfer aeroportuário ao evento mais exclusivo, oferecemos
            transporte executivo com padrão premium em cada detalhe do
            trajeto.
          </SectionDescription>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-500 hover:border-primary/30 hover:gold-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent" />
              </div>
              <div className="relative p-6 sm:p-8">
                <h3 className="font-display text-2xl text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-4">
          <Link
            href={destinoPath("aeroporto-navegantes")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-sm"
          >
            Transfer para o Aeroporto de Navegantes
            <span aria-hidden="true">→</span>
          </Link>
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
