import Image from "next/image";

import {
  faixaPassageiros,
  type CategoriaFrota,
} from "@/lib/content/frota";

/**
 * Card de categoria de frota (foto + título + faixa de passageiros +
 * descrição). Reaproveitado em toda página que apresenta a frota — home,
 * `/frota`, hub de transfer aeroporto, transporte de idosos e cada página de
 * destino — para que a foto de cada categoria (e o texto que a acompanha)
 * viva em um único lugar. Ver `categoriasFrota` em `@/lib/content/frota` para
 * a fonte dos dados.
 */

type FleetCategoryCardProps = {
  categoria: CategoriaFrota;
  /** Tag do título. `h2` quando o card é o único nível de heading da seção
   * (páginas que não têm uma `SectionHeading` própria acima), `h3` quando já
   * existe uma `SectionHeading` de nível `h2` cobrindo a seção. */
  headingLevel?: "h2" | "h3";
};

export function FleetCategoryCard({
  categoria,
  headingLevel = "h3",
}: FleetCategoryCardProps) {
  const Heading = headingLevel;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border-subtle bg-surface transition-all duration-500 hover:border-primary/30">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={categoria.image}
          alt={categoria.imageAlt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <Heading className="font-display text-2xl text-foreground">
          {categoria.title}
        </Heading>
        <p className="mt-2 text-xs uppercase tracking-[0.15em] text-primary">
          {faixaPassageiros(categoria)}
        </p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral sm:text-base">
          {categoria.description}
        </p>
      </div>
    </article>
  );
}
