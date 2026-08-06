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
} as const;

export function servicoPath(slug: string) {
  return `${routes.servicos}/${slug}`;
}

export function destinoPath(slug: string) {
  return `${routes.destinos}/${slug}`;
}

export type SitemapEntry = {
  path: string;
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly";
  priority: number;
};

/**
 * Rotas que já existem e devem ser indexadas.
 *
 * O `sitemap.ts` é gerado exclusivamente a partir desta lista — uma página só
 * entra aqui depois de existir de fato, para o sitemap nunca apontar para 404.
 * Ao publicar uma página nova, adicione a entrada aqui no mesmo commit.
 */
export const publishedRoutes: readonly SitemapEntry[] = [
  { path: routes.home, changeFrequency: "monthly", priority: 1 },
  { path: routes.servicos, changeFrequency: "monthly", priority: 0.8 },
  {
    path: servicoPath("transfer-aeroporto"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: servicoPath("transporte-idosos"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: routes.destinos, changeFrequency: "monthly", priority: 0.8 },
  {
    path: destinoPath("aeroporto-navegantes"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: destinoPath("beto-carrero"),
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: destinoPath("aeroporto-florianopolis"),
    changeFrequency: "monthly",
    priority: 0.8,
  },
  { path: routes.frota, changeFrequency: "monthly", priority: 0.7 },
  { path: routes.sobre, changeFrequency: "yearly", priority: 0.6 },
] as const;
