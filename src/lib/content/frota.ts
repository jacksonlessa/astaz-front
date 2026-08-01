/**
 * Frota — fonte única de verdade da página `/frota` e da seção de frota da home.
 *
 * Modelos e capacidades vieram da Astaz. A regra de bagagem informada foi
 * "uma mala grande por passageiro", aplicada abaixo.
 *
 * NÃO acrescente aqui característica de veículo que não tenha sido confirmada
 * pela operação — nem mesmo especificação pública do fabricante. O cliente usa
 * esta página para decidir se a bagagem cabe; errar aqui gera problema no dia
 * do embarque, não só no site.
 */

export type CategoriaFrota = {
  /** Categoria comercial, usada como título do card. */
  title: string;
  /** Modelos que atendem a categoria. O primeiro é o principal. */
  modelos: readonly string[];
  passageiros: number;
  malasGrandes: number;
  description: string;
  /** Situação em que esta categoria é a escolha mais adequada. */
  indicadoPara: string;
};

export const categoriasFrota: readonly CategoriaFrota[] = [
  {
    title: "Sedã Executivo",
    modelos: ["Nissan Sentra"],
    passageiros: 3,
    malasGrandes: 3,
    description:
      "Elegância discreta para deslocamentos individuais ou em dupla, com acabamento refinado e ambiente silencioso.",
    indicadoPara:
      "Deslocamentos executivos, reuniões e transfers com bagagem de mão ou uma mala por passageiro.",
  },
  {
    title: "SUV Premium",
    modelos: ["AION V", "Jeep Commander"],
    passageiros: 3,
    malasGrandes: 3,
    description:
      "Amplitude e presença para grupos pequenos, viagens com bagagem extra ou trajetos que pedem mais conforto.",
    indicadoPara:
      "Transfers de aeroporto, trajetos mais longos e quem prefere posição de condução mais alta.",
  },
  {
    title: "Van Executiva",
    modelos: ["Sprinter"],
    passageiros: 7,
    malasGrandes: 7,
    description:
      "Capacidade ampliada sem abrir mão do padrão executivo — ideal para equipes, comitivas e transfers em grupo.",
    indicadoPara:
      "Famílias, grupos, comitivas e eventos que exigem que todos cheguem juntos.",
  },
];

/**
 * Itens confirmados pela operação. Cadeirinha é frequentemente o item que
 * decide a contratação por famílias — por isso aparece com destaque próprio.
 */
export const itensFrota = [
  {
    title: "Cadeirinha e bebê conforto",
    description:
      "Disponíveis mediante solicitação no momento da reserva, para que a família viaje com a segurança que a criança precisa.",
  },
  {
    title: "Bagagem planejada",
    description:
      "Considere uma mala grande por passageiro. Se o volume for maior, informe no contato e indicamos a categoria adequada.",
  },
] as const;
