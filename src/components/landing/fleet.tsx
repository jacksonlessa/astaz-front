import Link from "next/link";
import { categoriasFrota } from "@/lib/content/frota";
import { routes } from "@/lib/routes";
import { FleetCategoryCard } from "@/components/ui/fleet-category-card";
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
            <FleetCategoryCard key={category.title} categoria={category} />
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
