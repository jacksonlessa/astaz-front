import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

/** Converte um path interno ("/destinos/itajai") em URL absoluta. */
export function absoluteUrl(path: string) {
  if (path === "/") return siteConfig.url;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataInput = {
  /** Título da página, sem o sufixo "| ASTAZ" — o template do layout adiciona. */
  title: string;
  /** Meta description: 120–158 caracteres, sem repetir o título literalmente. */
  description: string;
  /** Path interno da página, usado para gerar o canonical. */
  path: string;
  /** OG image específica. Sem valor, herda a `opengraph-image` mais próxima. */
  image?: string;
  /** Use em páginas utilitárias (obrigado, políticas) que não devem ranquear. */
  noIndex?: boolean;
};

/**
 * Monta o `Metadata` de uma página com canonical, Open Graph e Twitter Card
 * consistentes. Toda página nova deve usar este helper em vez de escrever o
 * objeto `metadata` à mão — é o que garante que nenhuma página fique sem
 * canonical (principal causa de conteúdo duplicado).
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "pt_BR",
      type: "website",
      ...(image ? { images: [{ url: image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}
