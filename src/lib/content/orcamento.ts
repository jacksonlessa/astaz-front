import { publishedDestinos } from "@/lib/content/destinos";
import { destinosAtendidos } from "@/lib/content/transporte-idosos";
import { businessInfo, siteConfig } from "@/lib/site";

/**
 * Formulário de orçamento — fonte única de verdade dos campos, dos presets e
 * da montagem da mensagem que abre no WhatsApp.
 *
 * O site não tem backend (ver `docs/seo/mapeamento-de-paginas.md`, seção
 * `/contato`): o formulário não envia nada para servidor nenhum, só monta um
 * texto e entrega para `getWhatsAppUrl()` (`src/lib/site.ts`) abrir a
 * conversa já preenchida. A pessoa revisa e confirma o envio no próprio
 * WhatsApp — o site nunca é o remetente.
 *
 * Vocabulário fechado de campos: cada um é declarado uma única vez em
 * `campos`, e cada página escolhe o subconjunto que faz sentido para ela via
 * `camposIds` de um preset. Página nova = escolher ids, não escrever campo
 * novo. `adultos`, `criancas`, `ingressos` e `aniversariante` ainda não têm
 * preset consumidor — existem para quando `/destinos/beto-carrero` ganhar seu
 * próprio formulário (ver conversa de planejamento registrada no histórico do
 * projeto: Beto Carrero não pergunta "destino", pergunta quantas crianças e
 * se a pessoa já tem ingresso).
 */

export type CampoId =
  | "data"
  | "horario"
  | "origem"
  | "destino"
  | "passageiros"
  | "voo"
  | "observacoes"
  // Vocabulário pronto para as próximas páginas, ainda sem preset consumidor.
  | "adultos"
  | "criancas"
  | "ingressos"
  | "aniversariante";

type CampoBase = {
  /** Rótulo do <label> e, com o mesmo texto, da linha correspondente na mensagem. */
  label: string;
  /** Reflete o "(se houver)" do modelo de mensagem: falso = pode ficar vazio. */
  required: boolean;
  /** Texto de apoio abaixo do campo, ligado via aria-describedby. */
  hint?: string;
};

export type Campo = CampoBase &
  (
    | { tipo: "texto"; placeholder?: string; sugestoes?: readonly string[] }
    | { tipo: "data" }
    | { tipo: "horario" }
    | { tipo: "numero"; min: number; max: number }
    | { tipo: "escolha"; opcoes: readonly string[] }
    | { tipo: "textoLongo"; placeholder?: string }
  );

/**
 * Sugestões de Origem/Destino — não limitam o campo, só ajudam a digitar. Um
 * pedido para um lugar fora desta lista (ex.: Urubici) continua sendo aceito
 * normalmente; nada aqui é copy nova, tudo vem de fontes já verificadas:
 *
 * - os quatro aeroportos atendidos (`siteConfig.airports`) — cobre Joinville
 *   e Curitiba mesmo sem página de destino própria;
 * - os destinos já publicados (`publishedDestinos`), via `breadcrumbLabel` —
 *   é o que adiciona "Beto Carrero World" e mantém a lista sincronizada
 *   conforme novos destinos forem publicados, sem exigir edição aqui;
 * - a área de cobertura declarada no GBP (`businessInfo.areaServed`);
 * - os hospitais e clínicas de `transporte-idosos.ts`, cada um verificado por
 *   endereço antes de entrar naquele arquivo (ver o comentário de
 *   `destinosAtendidos`) — "Nome — Cidade" desambigua as duas unidades da
 *   Clínica São Lucas (Balneário Camboriú e Itajaí).
 *
 * `breadcrumbLabel` dos destinos de aeroporto (ex.: "Aeroporto de
 * Navegantes") é idêntico ao gerado a partir de `siteConfig.airports` — o
 * `Set` abaixo remove a duplicata.
 */
const locaisSugeridos = [
  ...new Set([
    ...siteConfig.airports.map((aeroporto) => `Aeroporto de ${aeroporto}`),
    ...publishedDestinos.map((destino) => destino.breadcrumbLabel),
    ...businessInfo.areaServed,
    ...destinosAtendidos.map((d) => `${d.nome} — ${d.cidade}`),
  ]),
] as const;

export const campos: Record<CampoId, Campo> = {
  data: {
    tipo: "data",
    label: "Data",
    required: true,
  },
  horario: {
    tipo: "horario",
    label: "Horário",
    required: true,
  },
  origem: {
    tipo: "texto",
    label: "Origem",
    required: true,
    placeholder: "Endereço, hotel ou ponto de referência",
    sugestoes: locaisSugeridos,
  },
  destino: {
    tipo: "texto",
    label: "Destino",
    required: true,
    placeholder: "Endereço, hotel ou ponto de referência",
    sugestoes: locaisSugeridos,
  },
  passageiros: {
    tipo: "numero",
    label: "Número de passageiros",
    required: true,
    min: 1,
    max: 20,
  },
  voo: {
    tipo: "texto",
    label: "Número do voo",
    required: false,
    hint: "Se houver — usamos para monitorar o horário do seu voo.",
    placeholder: "Ex.: LA3456",
  },
  observacoes: {
    tipo: "textoLongo",
    label: "Observações",
    required: false,
    hint: "Ida e volta, paradas extras, cadeirinha para criança, bagagem fora do padrão — o que não couber nos campos acima.",
    placeholder: "Conte o que mais precisamos saber",
  },
  adultos: {
    tipo: "numero",
    label: "Número de adultos",
    required: true,
    min: 1,
    max: 20,
  },
  criancas: {
    tipo: "numero",
    label: "Número de crianças",
    required: false,
    min: 0,
    max: 20,
    hint: "Conte quem precisa de cadeirinha ou assento infantil.",
  },
  ingressos: {
    tipo: "escolha",
    label: "Já tem os ingressos?",
    required: true,
    opcoes: ["Sim, já tenho", "Ainda não comprei"],
  },
  aniversariante: {
    tipo: "texto",
    label: "Tem algum aniversariante no grupo?",
    required: false,
    placeholder: "Nome (opcional)",
  },
};

export type OrcamentoPreset = {
  /** Identifica o preset no evento de medição — nunca o conteúdo digitado. */
  id: string;
  /** Primeira linha da mensagem. */
  saudacao: string;
  /** Última linha da mensagem, antes do fechamento em branco. */
  fechamento?: string;
  camposIds: readonly CampoId[];
  submitLabel: string;
  /** Linha abaixo do botão: deixa claro que a mensagem pode ser editada antes do envio. */
  notaEnvio: string;
};

export const orcamentoPresets = {
  contato: {
    id: "contato",
    saudacao: "Olá, ASTAZ! Gostaria de solicitar um orçamento de transporte.",
    fechamento: "Fico no aguardo da proposta.",
    camposIds: [
      "data",
      "horario",
      "origem",
      "destino",
      "passageiros",
      "voo",
      "observacoes",
    ],
    submitLabel: "Continuar no WhatsApp",
    notaEnvio:
      "Abrimos o WhatsApp com a mensagem pronta. Você pode revisar e acrescentar o que precisar antes de enviar.",
  },
} as const satisfies Record<string, OrcamentoPreset>;

/** Formata `YYYY-MM-DD` (valor nativo do `<input type="date">`) para `DD/MM/YYYY`. */
function formatarData(valor: string): string {
  const [ano, mes, dia] = valor.split("-");
  if (!ano || !mes || !dia) return valor;
  return `${dia}/${mes}/${ano}`;
}

/**
 * Monta o texto que abre no WhatsApp a partir de um preset e dos valores
 * preenchidos. Função pura — sem React, sem browser — para ser testável
 * isoladamente. Campo vazio não vira linha: `*Número do voo:*` sem valor
 * pareceria mensagem quebrada.
 */
export function buildOrcamentoMessage(
  preset: OrcamentoPreset,
  valores: Partial<Record<CampoId, string>>,
): string {
  const linhas = preset.camposIds
    .map((id) => {
      const valor = valores[id]?.trim();
      if (!valor) return null;

      const campo = campos[id];
      const valorFormatado = campo.tipo === "data" ? formatarData(valor) : valor;
      return `*${campo.label}:* ${valorFormatado}`;
    })
    .filter((linha): linha is string => linha !== null);

  const blocos = [preset.saudacao, linhas.join("\n"), preset.fechamento].filter(
    (bloco): bloco is string => Boolean(bloco),
  );

  return blocos.join("\n\n");
}

/** Copy da página `/contato`. Nada de texto hardcoded no componente de página. */
export const contatoContent = {
  eyebrow: "Contato",
  // Contém "orçamento" de propósito: é a intenção de busca mapeada para esta
  // página em docs/seo/mapeamento-de-paginas.md, e o <h1> precisa carregá-la.
  title: "Solicite seu orçamento de transporte executivo",
  description:
    "Preencha os dados da viagem e leve a mensagem pronta para o WhatsApp. Se preferir, fale diretamente com nossa equipe.",
  alternativa: {
    title: "Prefere falar diretamente?",
    body: "Conte sua necessidade pelo WhatsApp e ajustamos os detalhes na conversa.",
    ctaLabel: "Falar pelo WhatsApp",
  },
} as const;
