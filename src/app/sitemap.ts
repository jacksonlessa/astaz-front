import type { MetadataRoute } from "next";

import { publishedRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

/**
 * Gerado a partir de `publishedRoutes` — nunca liste uma URL aqui à mão.
 * Página nova só aparece no sitemap depois de entrar naquele registro, o que
 * impede que o Google receba um 404 vindo do nosso próprio sitemap.
 *
 * `lastModified` vem do registro, nunca de `new Date()`. Carimbar o instante
 * do build faria as 11 URLs anunciarem mudança a cada deploy — inclusive as
 * intocadas — e `lastmod` só vale enquanto for verdade. Ver o comentário do
 * campo em `src/lib/routes.ts`.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return publishedRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
