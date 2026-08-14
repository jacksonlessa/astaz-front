/**
 * Registro central de rotas do site.
 *
 * Toda URL interna deve sair daqui — nav, footer, breadcrumbs e sitemap
 * consomem este arquivo, então renomear uma rota é uma mudança em um lugar só.
 */

export const routes = {
  home: "/",
  servicos: "/servicos",
  destinos: "/destinos",
  frota: "/frota",
  sobre: "/sobre",
  contato: "/contato",
  faq: "/faq",
  /**
   * Página utilitária (`noIndex: true`), não entra em `publishedRoutes` — não
   * é conteúdo de busca. Linkada só no rodapé e no banner de cookies.
   */
  politicaDePrivacidade: "/politica-de-privacidade",
} as const;

export function servicoPath(slug: string) {
  return `${routes.servicos}/${slug}`;
}

export function destinoPath(slug: string) {
  return `${routes.destinos}/${slug}`;
}

export type SitemapEntry = {
  path: string;
  /**
   * Data da última mudança de **conteúdo** da página, em `AAAA-MM-DD`.
   *
   * MANTIDA À MÃO, e é para ser assim. A versão anterior deste arquivo não
   * tinha o campo: o `sitemap.ts` chamava `new Date()` e carimbava o instante
   * do build nas 11 URLs. Todo deploy passava a afirmar que o site inteiro
   * havia mudado — o deploy que só cadastrou uma variável de ambiente, em
   * 13/08/2026, reescreveu a data de páginas intocadas desde 06/08.
   *
   * Isso não é detalhe cosmético: o Google usa `lastmod` **enquanto ele for
   * confiável**. Um sitemap que grita "tudo mudou" a cada deploy ensina o
   * buscador a ignorar o campo, e aí o sinal deixa de existir justamente
   * quando você precisa dele — ao publicar ou reescrever uma página.
   *
   * Só conta o que o visitante lê. Refatoração que move string de arquivo,
   * ajuste de token de cor ou mudança de build **não** alteram esta data.
   */
  lastModified: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

/**
 * Rotas que já existem e devem ser indexadas.
 *
 * O `sitemap.ts` é gerado exclusivamente a partir desta lista — uma página só
 * entra aqui depois de existir de fato, para o sitemap nunca apontar para 404.
 * Ao publicar uma página nova, adicione a entrada aqui no mesmo commit.
 *
 * As datas abaixo foram levantadas no histórico do git em 14/08/2026, tomando
 * o último commit que mudou o conteúdo renderizado de cada página — não o
 * último commit que tocou o arquivo.
 */
export const publishedRoutes: readonly SitemapEntry[] = [
  {
    path: routes.home,
    lastModified: "2026-08-10",
    changeFrequency: "monthly",
    priority: 1,
  },
  {
    path: routes.servicos,
    lastModified: "2026-08-10",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: servicoPath("transfer-aeroporto"),
    lastModified: "2026-08-06",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: servicoPath("transporte-idosos"),
    lastModified: "2026-08-13",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: routes.destinos,
    lastModified: "2026-08-14",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: destinoPath("aeroporto-navegantes"),
    lastModified: "2026-08-13",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: destinoPath("beto-carrero"),
    lastModified: "2026-08-10",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: destinoPath("aeroporto-florianopolis"),
    lastModified: "2026-08-13",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: routes.frota,
    lastModified: "2026-08-06",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: routes.contato,
    lastModified: "2026-08-07",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: routes.sobre,
    lastModified: "2026-08-06",
    changeFrequency: "yearly",
    priority: 0.6,
  },
] as const;
