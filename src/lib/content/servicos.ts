/**
 * Serviços da Astaz — fonte única de verdade das páginas de `/servicos`.
 *
 * O Google Business Profile lista 19 serviços, mas ali "serviço" funciona como
 * etiqueta de palavra-chave: quanto mais, melhor. No site a lógica é oposta —
 * cada página precisa responder uma intenção de busca que nenhuma outra cobre.
 * Por isso os 19 do GBP se consolidam nos 6 abaixo, e o campo `gbpServices`
 * registra quais etiquetas cada página absorve.
 *
 * Ver `docs/seo/mapeamento-de-paginas.md` antes de adicionar um serviço novo.
 */

export type Servico = {
  slug: string;
  /** Título curto, usado no card do hub e como `<h1>` da página. */
  title: string;
  /** `<title>` da página. Máximo 52 caracteres (o layout soma " | ASTAZ"). */
  metaTitle: string;
  /** Meta description. Entre 120 e 158 caracteres. */
  metaDescription: string;
  /** Descrição exibida no card do hub. */
  summary: string;
  /**
   * Etiquetas de serviço do GBP que esta página absorve. Serve para conferir
   * que nenhum serviço cadastrado no perfil ficou sem página correspondente.
   */
  gbpServices: readonly string[];
  /**
   * A página de detalhe existe? Enquanto for `false`, o card do hub não vira
   * link — evita link morto em produção — e a rota não é gerada.
   */
  published: boolean;
};

export const servicos: readonly Servico[] = [
  {
    slug: "transfer-aeroporto",
    title: "Transfer Aeroporto",
    metaTitle: "Transfer Executivo para Aeroportos",
    metaDescription:
      "Transfers executivos entre Balneário Camboriú e os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba, com monitoramento de voo.",
    summary:
      "Traslados entre Balneário Camboriú e os aeroportos da região, com monitoramento de voo e recepção no desembarque.",
    gbpServices: [
      "Serviço de transporte para aeroporto",
      "Transfer Aeroporto",
      "Transfer para Aeroporto de Navegantes",
      "Transfer para Aeroporto de Florianópolis",
      "Transporte para Aeroportos",
      "Recepção em Aeroportos",
    ],
    published: false,
  },
  {
    slug: "transporte-corporativo",
    title: "Transporte Corporativo",
    metaTitle: "Transporte Corporativo em Balneário Camboriú",
    metaDescription:
      "Transporte executivo para reuniões, visitas técnicas e agendas corporativas em Balneário Camboriú e região, com pontualidade e discrição.",
    summary:
      "Deslocamentos para reuniões, visitas técnicas e agendas executivas, com previsibilidade de horários e discrição.",
    gbpServices: [
      "Transporte Corporativo",
      "Transporte para Reuniões",
      "Transporte para Empresas",
      "Empresa de transporte",
    ],
    published: false,
  },
  {
    slug: "transporte-eventos",
    title: "Transporte para Eventos",
    metaTitle: "Transporte para Eventos e Congressos",
    metaDescription:
      "Transporte executivo para congressos, feiras, shows e eventos empresariais em Balneário Camboriú e no litoral de Santa Catarina.",
    summary:
      "Congressos, feiras, shows e eventos empresariais, com coordenação de horários para grupos e comitivas.",
    gbpServices: [
      "Transporte para Eventos",
      "Transporte para Congressos",
      "Transporte para Feiras",
      "Transporte para Shows",
    ],
    published: false,
  },
  {
    slug: "transporte-casamentos",
    title: "Transporte para Casamentos",
    metaTitle: "Transporte para Casamentos",
    metaDescription:
      "Transporte executivo para casamentos em Balneário Camboriú e região, com veículos impecáveis e coordenação de horários para noivos e convidados.",
    summary:
      "Veículos impecáveis e horários coordenados para noivos, padrinhos e convidados, do primeiro traslado ao último.",
    gbpServices: ["Transporte para Casamentos"],
    published: false,
  },
  {
    slug: "motorista-particular",
    title: "Motorista Particular",
    metaTitle: "Motorista Particular à Disposição",
    metaDescription:
      "Motorista particular por período em Balneário Camboriú: agenda com múltiplas paradas, veículo à disposição e condução discreta.",
    summary:
      "Motorista e veículo à disposição por período, para agendas com múltiplas paradas ou roteiros que mudam durante o dia.",
    gbpServices: [
      "Motorista Particular",
      "Táxi Executivo",
      "Transporte Executivo",
    ],
    published: false,
  },
  {
    slug: "city-tour",
    title: "City Tour",
    metaTitle: "City Tour em Balneário Camboriú",
    metaDescription:
      "City tour privativo em Balneário Camboriú e no litoral catarinense, com roteiro flexível, veículo executivo e motorista à disposição.",
    summary:
      "Roteiros privativos por Balneário Camboriú e pelo litoral catarinense, no seu ritmo e com paradas à sua escolha.",
    gbpServices: [],
    published: false,
  },
];

export function getServico(slug: string) {
  return servicos.find((servico) => servico.slug === slug);
}
