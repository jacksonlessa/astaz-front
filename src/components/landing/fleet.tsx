import Image from "next/image";
import { categoriasFrota } from "@/lib/content/frota";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";

const fleetImages = [
  {
    src: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80",
    alt: "Sedã executivo em perspectiva lateral",
  },
  {
    src: "https://images.unsplash.com/photo-1519641471654-76ce0107a851?auto=format&fit=crop&w=800&q=80",
    alt: "SUV premium em ambiente urbano",
  },
  {
    src: "https://images.unsplash.com/photo-1544622651-a3d4b7d31766?auto=format&fit=crop&w=800&q=80",
    alt: "Van executiva em estrada",
  },
] as const;

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
          {categoriasFrota.map((category, index) => (
            <article
              key={category.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-500 hover:border-primary/30"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={fleetImages[index].src}
                  alt={fleetImages[index].alt}
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
                <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral sm:text-base">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
