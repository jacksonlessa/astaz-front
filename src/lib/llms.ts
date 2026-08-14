/**
 * Geração do `/llms.txt` — índice do site em Markdown, no formato proposto em
 * llmstxt.org, para modelos de linguagem que leem o site sem renderizar HTML.
 *
 * A regra central é a mesma do `sitemap.ts`: **nenhuma URL escrita à mão**.
 * Tudo sai de `publishedRoutes`, e título e descrição saem dos módulos de
 * conteúdo que já alimentam o `<title>` e a meta description de cada página.
 * Uma segunda cópia da copy aqui divergiria da primeira no dia seguinte.
 *
 * Toda rota publicada precisa cair em uma seção. Rota que não resolve derruba
 * o build (`buildLlmsTxt` lança) em vez de sumir do arquivo em silêncio — é o
 * que dispensa conferir a lista à mão a cada relatório de SEO: ou o build
 * passa e o arquivo está completo, ou ele não passa.
 */

import { getDestino } from "@/lib/content/destinos";
import { paginasMeta, type PaginaMeta } from "@/lib/content/paginas";
import { getServico } from "@/lib/content/servicos";
import { numerosAstaz } from "@/lib/content/sobre";
import { publishedRoutes, routes } from "@/lib/routes";
import { absoluteUrl } from "@/lib/seo";
import { businessInfo, siteConfig } from "@/lib/site";

/** Ordem das seções no arquivo — do que converte para o institucional. */
const SECTION_ORDER = ["servicos", "destinos", "empresa"] as const;

type SectionId = (typeof SECTION_ORDER)[number];

const sectionHeadings: Record<SectionId, string> = {
  servicos: "Serviços",
  destinos: "Destinos",
  empresa: "A empresa",
};

/**
 * Páginas sem módulo de conteúdo próprio. As filhas de `/servicos` e
 * `/destinos` não entram aqui: resolvem por slug, então publicar um serviço
 * novo não exige tocar neste arquivo.
 */
const paginasEstaticas: Record<string, { section: SectionId; meta: PaginaMeta }> =
  {
    [routes.home]: { section: "empresa", meta: paginasMeta.home },
    [routes.servicos]: { section: "servicos", meta: paginasMeta.servicos },
    [routes.destinos]: { section: "destinos", meta: paginasMeta.destinos },
    [routes.frota]: { section: "empresa", meta: paginasMeta.frota },
    [routes.sobre]: { section: "empresa", meta: paginasMeta.sobre },
    [routes.contato]: { section: "empresa", meta: paginasMeta.contato },
  };

type LlmsEntry = {
  section: SectionId;
  title: string;
  description: string;
  path: string;
};

/** Slug de uma rota filha ("/destinos/beto-carrero" → "beto-carrero"). */
function childSlug(hub: string, path: string) {
  const prefix = `${hub}/`;
  return path.startsWith(prefix) ? path.slice(prefix.length) : null;
}

function resolveRoute(path: string): LlmsEntry | null {
  const servicoSlug = childSlug(routes.servicos, path);
  if (servicoSlug) {
    const servico = getServico(servicoSlug);
    if (!servico) return null;
    return {
      section: "servicos",
      title: servico.metaTitle,
      description: servico.summary,
      path,
    };
  }

  const destinoSlug = childSlug(routes.destinos, path);
  if (destinoSlug) {
    const destino = getDestino(destinoSlug);
    if (!destino) return null;
    return {
      section: "destinos",
      title: destino.metaTitle,
      description: destino.summary,
      path,
    };
  }

  const estatica = paginasEstaticas[path];
  if (!estatica) return null;
  return {
    section: estatica.section,
    title: estatica.meta.title,
    description: estatica.meta.description,
    path,
  };
}

/** "a, b e c" — enumeração em português, com "e" antes do último item. */
function formatList(items: readonly string[]) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}

export function buildLlmsTxt(): string {
  const entries = publishedRoutes.map((route) => {
    const entry = resolveRoute(route.path);
    if (!entry) {
      throw new Error(
        `llms.txt: a rota "${route.path}" está em publishedRoutes mas não ` +
          "resolve título e descrição. Se for uma página estática nova, " +
          "mapeie-a em `paginasEstaticas` (src/lib/llms.ts); se for filha de " +
          "um hub, confira o slug no módulo de conteúdo correspondente.",
      );
    }
    return entry;
  });

  const resumo = `${siteConfig.tagline} em ${siteConfig.baseCity}, com transfers para os aeroportos de ${formatList(siteConfig.airports)}.`;

  const linhas = [
    `# ${businessInfo.businessName}`,
    "",
    `> ${resumo}`,
    "",
    `Site em português do Brasil. Atendimento e orçamento por WhatsApp: ${siteConfig.phone}.`,
    "",
    `- Base: ${siteConfig.baseCity}`,
    `- Cidades atendidas: ${formatList(businessInfo.areaServed)}`,
    `- Categoria: ${businessInfo.category}`,
    `- CNPJ: ${businessInfo.taxId}`,
    ...numerosAstaz.map((numero) => `- ${numero.label}: ${numero.value}`),
  ];

  for (const section of SECTION_ORDER) {
    const doSection = entries.filter((entry) => entry.section === section);
    if (doSection.length === 0) continue;

    linhas.push("", `## ${sectionHeadings[section]}`, "");
    for (const entry of doSection) {
      linhas.push(
        `- [${entry.title}](${absoluteUrl(entry.path)}): ${entry.description}`,
      );
    }
  }

  return `${linhas.join("\n")}\n`;
}
