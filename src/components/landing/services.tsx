import Image from "next/image";
import { services } from "@/lib/site";
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
      </div>
    </section>
  );
}
