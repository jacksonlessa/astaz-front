import { absoluteUrl } from "@/lib/seo";
import { businessInfo, faqItems, services, siteConfig } from "@/lib/site";

export type JsonLdObject = Record<string, unknown>;

/**
 * Remove chaves nulas, indefinidas ou com array vazio.
 *
 * O JSON-LD só deve declarar o que a ASTAZ realmente tem cadastrado —
 * campo inventado ou vazio no schema é pior que campo ausente.
 */
function compact(input: JsonLdObject): JsonLdObject {
  return Object.fromEntries(
    Object.entries(input).filter(([, value]) => {
      if (value === null || value === undefined) return false;
      if (Array.isArray(value) && value.length === 0) return false;
      return true;
    }),
  );
}

const BUSINESS_ID = `${siteConfig.url}/#business`;

/**
 * Identidade da empresa. Renderizado uma vez, no layout raiz.
 *
 * Sem `address.streetAddress` e sem `geo` de propósito: a Astaz é um
 * service-area business e o GBP não expõe endereço físico. O `address` traz
 * apenas município/UF, que é de onde a operação parte — não uma sede aberta
 * ao público.
 */
export function localBusinessSchema(): JsonLdObject {
  return compact({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: businessInfo.businessName,
    alternateName: siteConfig.name,
    legalName: businessInfo.legalName,
    // Espelha a descrição do GBP, não a meta description da home.
    description: businessInfo.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    priceRange: businessInfo.priceRange,
    address: {
      "@type": "PostalAddress",
      addressLocality: businessInfo.addressLocality,
      addressRegion: businessInfo.addressRegion,
      addressCountry: businessInfo.addressCountry,
    },
    openingHours: businessInfo.openingHours,
    areaServed: businessInfo.areaServed.map((name) => ({
      "@type": "City",
      name,
    })),
    sameAs: [...businessInfo.sameAs],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços de transporte executivo",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
      })),
    },
  });
}

export function websiteSchema(): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "pt-BR",
    publisher: { "@id": BUSINESS_ID },
  };
}

/**
 * Trilha de navegação. Usar nas páginas internas (destinos, serviços) — é o que
 * faz o Google exibir "astaz.com.br › destinos › itajaí" no resultado de busca.
 */
export function breadcrumbSchema(
  items: readonly { name: string; path: string }[],
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Só use em páginas que realmente exibem estas perguntas na tela. Marcar FAQ
 * invisível ao usuário é violação das diretrizes do Google.
 */
export function faqSchema(
  items: readonly { question: string; answer: string }[] = faqItems,
): JsonLdObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
  areaServed?: readonly string[];
}): JsonLdObject {
  return compact({
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    serviceType: input.name,
    provider: { "@id": BUSINESS_ID },
    areaServed: (input.areaServed ?? businessInfo.areaServed).map((name) => ({
      "@type": "City",
      name,
    })),
  });
}
