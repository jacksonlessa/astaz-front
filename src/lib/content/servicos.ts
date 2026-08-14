/**
 * Serviços da Astaz — fonte única de verdade das páginas de `/servicos`.
 *
 * O Google Business Profile lista 20 serviços, mas ali "serviço" funciona como
 * etiqueta de palavra-chave: quanto mais, melhor. No site a lógica é oposta —
 * cada página precisa responder uma intenção de busca que nenhuma outra cobre.
 * Por isso os 20 do GBP se consolidam nos 6 abaixo, e o campo `gbpServices`
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
  /**
   * Aparece na seção de Serviços da home? A home mostra um recorte, não a
   * lista inteira — o hub `/servicos` é que existe para isso. Os dois
   * publicados entram sempre; os demais só com `image`/`imageAlt`
   * preenchidos, porque o card da home é ilustrado (o do hub não é).
   */
  featuredOnHome: boolean;
  /**
   * Imagem do card — na home e, se um dia o hub ganhar imagem, lá também.
   * Ausente para serviços que não aparecem na home.
   */
  image?: string;
  imageAlt?: string;
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
    published: true,
    featuredOnHome: true,
    image: "/images/aeroporto-navegantes.webp",
    imageAlt:
      "Fachada do terminal do Aeroporto Internacional de Navegantes, com veículos no desembarque",
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
    featuredOnHome: true,
    // TODO: foto real. Placeholder de banco até existir imagem própria — ver
    // docs/imagens-de-referencia.md.
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Edifícios corporativos modernos",
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
    /**
     * Fora do recorte da home desde 10/08/2026: o card ilustrado precisa de
     * foto, e a única que existia era um Unsplash genérico de mesa posta.
     * Cedeu a vaga para Casamentos, que ganhou foto real. Volta quando houver
     * foto própria de congresso/feira — ver docs/imagens-de-referencia.md.
     */
    featuredOnHome: false,
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
    featuredOnHome: true,
    // Foto real da operação — cliente em veículo da frota, não banco de imagem.
    // Uso condicionado à autorização de imagem da retratada; ver
    // docs/imagens-de-referencia.md.
    image: "/images/transporte-casamentos.webp",
    imageAlt:
      "Noiva de vestido longo sentada no banco traseiro de um SUV executivo preto, com a porta aberta e interior em couro caramelo",
  },
  {
    slug: "transporte-idosos",
    /**
     * "Acompanhamento" saiu do título de propósito, e não volta sem decisão
     * explícita: nenhuma busca-alvo contém a palavra (não traz volume) e
     * "acompanhamento de idosos" sugere cuidador — atividade regulada que a
     * Astaz não exerce. O léxico completo do que pode e não pode ser publicado
     * nesta página está em `docs/seo/briefings/transporte-idosos.md`.
     *
     * "Companhia" descreve o que acontece; "acompanhante" nomeia um papel de
     * saúde. Por isso a sala de espera pode ser citada e a palavra vizinha,
     * não. Pelo mesmo motivo nada aqui menciona o interior do consultório,
     * orientação médica ou risco de queda: o serviço descreve a cortesia e a
     * logística, nunca o cuidado clínico nem um resultado de saúde.
     */
    title: "Transporte para Idosos",
    metaTitle: "Transporte para Idosos em Balneário Camboriú",
    metaDescription:
      "Transporte para idosos em Balneário Camboriú: consultas, exames e compromissos, com ida e volta, espera inclusa e a família avisada a cada etapa.",
    summary:
      "Consultas, exames e compromissos do dia a dia, com ida e volta, espera inclusa e a família avisada a cada etapa.",
    gbpServices: ["Transporte para Idosos"],
    published: true,
    featuredOnHome: true,
    // Banco traseiro vazio, sem pessoa nem emblema — não é veículo da frota.
    // Ver docs/imagens-de-referencia.md.
    image: "/images/transporte-idosos.webp",
    imageAlt: "Banco traseiro vazio, em couro preto, de veículo executivo",
  },
  {
    slug: "city-tour",
    title: "City Tour",
    metaTitle: "City Tour em Balneário Camboriú",
    metaDescription:
      "City tour privativo em Balneário Camboriú e no litoral catarinense, com roteiro flexível, veículo executivo e motorista à disposição.",
    summary:
      "Roteiros privativos por Balneário Camboriú e pelo litoral catarinense, no seu ritmo e com paradas à sua escolha.",
    gbpServices: ["City Tour"],
    published: false,
    featuredOnHome: false,
  },
];

/** Recorte exibido na seção de Serviços da home — não a lista inteira. */
export const servicosFeaturedOnHome = servicos.filter(
  (servico) => servico.featuredOnHome,
);

export function getServico(slug: string) {
  return servicos.find((servico) => servico.slug === slug);
}
