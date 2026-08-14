/**
 * Meta title e description das páginas que não têm módulo de conteúdo próprio
 * (home, hubs, frota, sobre, contato).
 *
 * Existe porque essas strings passaram a ter dois consumidores: o `metadata`
 * da própria página e o `llms.txt`, gerado em `@/lib/llms`. Enquanto viviam
 * dentro de cada `page.tsx`, a segunda cópia teria que ser escrita à mão — e
 * duas descrições da mesma página divergem no primeiro ajuste de copy.
 *
 * Serviços e destinos não entram aqui: já têm `metaTitle`/`metaDescription`
 * em `content/servicos.ts` e `content/destinos.ts`.
 */

import { siteConfig } from "@/lib/site";

export type PaginaMeta = {
  /** `<title>` sem o sufixo " | ASTAZ" — o template do layout adiciona. */
  title: string;
  /** Meta description: 120–158 caracteres, conforme `seo.ts`. */
  description: string;
};

export const paginasMeta = {
  home: {
    /**
     * O termo vem ANTES da marca, e a ordem não é estética: a primeira parte
     * do title é a de maior peso, e "ASTAZ" é um nome que ninguém procura
     * ainda. Enquanto a marca não tiver volume de busca própria, gastar essa
     * posição com ela é desperdiçar o sinal mais forte da página. Quando
     * "Astaz" virar busca com volume, vale reavaliar.
     */
    title: "Transporte Executivo em Balneário Camboriú",
    description: siteConfig.description,
  },
  servicos: {
    title: "Serviços de Transporte Executivo",
    description:
      "Transporte executivo em Balneário Camboriú: aeroportos, agendas corporativas, eventos, casamentos, city tour e deslocamentos para idosos.",
  },
  destinos: {
    title: "Destinos Atendidos",
    description:
      "Transfers executivos partindo de Balneário Camboriú para aeroportos, cidades e destinos turísticos do litoral de Santa Catarina.",
  },
  frota: {
    title: "Frota Executiva",
    description:
      "Sedã, SUV e van executiva na frota da Astaz: de 4 a 20 passageiros, bebê conforto sob solicitação e fretamento para grupos e eventos.",
  },
  sobre: {
    // O layout adiciona "| ASTAZ" — repetir a marca aqui empilharia o nome
    // duas vezes no resultado de busca e gastaria o espaço que a cidade ocupa
    // melhor.
    title: "Sobre o transporte executivo em Balneário Camboriú",
    description:
      "Transporte executivo em Balneário Camboriú desde 2022. Mais de 2.000 viagens, agenda confirmada na véspera e voo acompanhado até o embarque.",
  },
  contato: {
    title: "Contato e Orçamento",
    description:
      "Solicite um orçamento de transporte executivo em Balneário Camboriú: preencha data, origem e destino e continue direto no WhatsApp.",
  },
} as const satisfies Record<string, PaginaMeta>;
