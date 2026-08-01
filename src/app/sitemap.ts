import type { MetadataRoute } from "next";

import { publishedRoutes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";

/**
 * Gerado a partir de `publishedRoutes` — nunca liste uma URL aqui à mão.
 * Página nova só aparece no sitemap depois de entrar naquele registro, o que
 * impede que o Google receba um 404 vindo do nosso próprio sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publishedRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
