/**
 * Transfer para aeroportos — fonte única de verdade de
 * `/servicos/transfer-aeroporto`.
 *
 * Esta é a página **hub**. Ela não disputa "transfer aeroporto navegantes" —
 * essa busca pertence a `/destinos/aeroporto-navegantes`, que já ranqueia. Se o
 * hub repetir o conteúdo das rotas, as duas páginas se canibalizam e o Google
 * escolhe uma só.
 *
 * O que só esta página faz, e nenhuma outra do site faz, é a **comparação**:
 * os quatro aeroportos lado a lado, e a comparação com as alternativas que o
 * cliente realmente considera. Por isso o conteúdo mais valioso aqui são as
 * duas tabelas — não o "como funciona", que as rotas já contam em detalhe.
 *
 * Origem dos dados: `docs/seo/briefings/transfer-aeroporto.md`. Distância,
 * tempo de trajeto e antecedência de saída são dados operacionais confirmados
 * pela Astaz — **nenhum deles pode ser alterado aqui sem passar pelo briefing**.
 *
 * O que ficou deliberadamente de fora, e por quê:
 * - Preço, de passagem ou de transfer: a Astaz não publica valor, e comparar
 *   tarifa aérea entre aeroportos é dado de terceiro que muda de temporada em
 *   temporada — publicado em `FAQPage`, viraria informação errada na página.
 * - Número de malas por veículo: não existe número definido; é alinhado no
 *   orçamento.
 * - Emoji na tabela comparativa: a marcação é textual e usa os tokens de cor do
 *   design system, conforme o Manifesto.
 */

import { destinos } from "@/lib/content/destinos";

export const transferAeroportoIntro = {
  eyebrow: "Serviço",
  title: "Transfer executivo para aeroportos",
  /**
   * Abre pela objeção que trava a decisão — "vai ter alguém me esperando?" —
   * e não pela descrição do serviço. Foi a dúvida nº 1 levantada pela operação.
   */
  description:
    "A dúvida de quem contrata um transfer nunca é o trajeto. É se o motorista vai estar lá quando a porta do desembarque abrir. Atendemos os quatro aeroportos que servem Balneário Camboriú, com o voo acompanhado e o motorista identificado antes de você pousar.",
  /**
   * TODO: foto real do serviço. O briefing pede veículo da frota no desembarque
   * com o motorista em posição de recepção — é a tradução visual da abertura
   * acima. Enquanto não existir, `imageIsPlaceholder` continua true.
   */
  image: "/images/transfer-aeroporto.webp",
  imageAlt:
    "Motorista executivo de terno aguardando ao lado de veículo preto na área de desembarque de um aeroporto",
  imageIsPlaceholder: true,
  whatsappMessage:
    "Olá, ASTAZ! Gostaria de um orçamento para transfer de aeroporto.",
} as const;

/**
 * Os quatro aeroportos, com os dados que a página existe para comparar.
 *
 * `destinoSlug` liga a linha à página da rota, quando ela existe. É o que faz
 * deste hub o principal distribuidor de autoridade interna do site. Joinville e
 * Curitiba ainda não têm página de destino: aparecem na tabela sem link, porque
 * o dado de trajeto é verdadeiro mesmo sem a rota estar publicada.
 */
export type Aeroporto = {
  nome: string;
  sigla: string;
  cidade: string;
  distancia: string;
  tempoMedio: string;
  altaTemporada: string;
  /** Antecedência de saída de Balneário Camboriú, para quem vai embarcar. */
  saidaDeBc: string;
  destinoSlug?: string;
};

export const aeroportos: readonly Aeroporto[] = [
  {
    nome: "Navegantes",
    sigla: "NVT",
    cidade: "Navegantes",
    distancia: "40 km",
    tempoMedio: "40 min",
    altaTemporada: "Até 1h30",
    saidaDeBc: "2h a 3h antes do embarque",
    destinoSlug: "aeroporto-navegantes",
  },
  {
    nome: "Florianópolis",
    sigla: "FLN",
    cidade: "Florianópolis",
    distancia: "100 km",
    tempoMedio: "1h30",
    altaTemporada: "Até 3h",
    saidaDeBc: "3h a 4h antes do embarque",
    destinoSlug: "aeroporto-florianopolis",
  },
  {
    nome: "Joinville",
    sigla: "JOI",
    cidade: "Joinville",
    distancia: "120 km",
    tempoMedio: "1h45",
    altaTemporada: "Até 3h",
    saidaDeBc: "3h30 a 4h antes do embarque",
  },
  {
    nome: "Curitiba",
    sigla: "CWB",
    // O Afonso Pena não fica na capital. É a dúvida de quem vai buscar alguém.
    cidade: "São José dos Pinhais",
    distancia: "220 km",
    tempoMedio: "3h",
    altaTemporada: "Até 6h",
    saidaDeBc: "5h a 6h antes do embarque",
  },
];

export const notaTabelaAeroportos =
  "Os tempos são médias de operação em condições normais de trânsito, não promessa de horário — a estrada não se controla. O horário de saída de cada viagem é definido no agendamento, considerando o movimento previsto para o dia.";

/** Filtra as rotas que já têm página, para nenhum link apontar para 404. */
export function getAeroportoDestino(aeroporto: Aeroporto) {
  if (!aeroporto.destinoSlug) return undefined;
  return destinos.find(
    (destino) => destino.slug === aeroporto.destinoSlug && destino.published,
  );
}

/**
 * O critério de escolha entre os dois aeroportos que realmente concorrem.
 *
 * A pergunta original do briefing era "em que situação vale ir a Florianópolis
 * em vez de Navegantes?". A operação corrigiu a premissa: o cliente fecha o voo
 * primeiro e só então procura o transfer. Por isso a página não manda escolher
 * aeroporto — mostra o que cada um significa em estrada, que é a parte da
 * decisão em que a Astaz tem o que dizer.
 */
export const criterioEscolha = {
  title: "Florianópolis ou Navegantes: o que muda",
  paragraphs: [
    "Quase todo mundo que voa para Balneário Camboriú decide o aeroporto pelo voo — pelo horário, pelo destino ou pela conexão que fecha. A escolha do transfer vem depois. Ainda assim, vale saber o que cada aeroporto significa em quilômetro rodado.",
    "Florianópolis tem a malha aérea maior da região: mais opções de horário, mais destinos e voos internacionais. O custo disso é estrada — 100 quilômetros e cerca de uma hora e meia, com a entrada da Ilha como gargalo conhecido.",
    "Navegantes fica a 40 quilômetros, cerca de 40 minutos. A malha é menor e há menos opções de horário, mas é o aeroporto que menos tempo tira do seu dia.",
  ],
  /** A frase que resume o critério. Fica em destaque na página. */
  resumo:
    "Quem prioriza opção de voo embarca em Florianópolis. Quem prioriza menos tempo de estrada embarca em Navegantes. Atendemos os dois com o mesmo serviço.",
} as const;

/**
 * Curitiba. É o único trajeto em que o sentido natural é aeroporto → BC, e o
 * único em que a variação de tempo não vem do trânsito de litoral.
 */
export const trajetoCuritiba = {
  title: "Curitiba e a Serra do Mar",
  paragraphs: [
    "Curitiba raramente é a escolha de quem mora em Balneário Camboriú. Na prática, o movimento é o contrário: o cliente aterrissa no Afonso Pena — que fica em São José dos Pinhais, não na capital — e segue para o litoral catarinense, porque foi ali que o voo dele fechou.",
    "São 220 quilômetros e cerca de três horas em condições normais. Na alta temporada, esse tempo pode dobrar, e o motivo não é o trânsito de praia: é a Serra do Mar. A descida da serra para por completo com alguma frequência, e nossa operação já enfrentou mais de duas horas parada no trecho.",
    "É o trajeto de maior variação entre os quatro que atendemos. Por isso ele é planejado com margem maior, e a saída de Balneário Camboriú acontece com cinco a seis horas de antecedência quando o embarque é por lá.",
  ],
} as const;

/**
 * Comparação com as alternativas reais.
 *
 * BlaBlaCar saiu do material original: carona compartilhada não é a opção que
 * este cliente considera, e comparar com um adversário fácil enfraquece a
 * tabela. Ficaram app de corrida e táxi comum.
 *
 * REGRA AO EDITAR: a tabela afirma o que a Astaz faz e descreve o funcionamento
 * conhecido das alternativas — não as ataca. Onde o app ou o táxi são
 * equivalentes, a tabela diz que são (ver "Viagem"). É essa honestidade que dá
 * credibilidade ao resto da página; transformá-la em peça de marketing com tudo
 * negativo do outro lado destrói exatamente o que a faz funcionar.
 */
export const comparativoAlternativas = {
  title: "Transfer executivo, app de corrida ou táxi",
  intro:
    "As três opções levam você do aeroporto ao hotel. A diferença aparece no que já está resolvido antes de você pousar.",
  colunas: ["Astaz", "App de corrida", "Táxi comum"],
  linhas: [
    {
      criterio: "Reserva",
      celulas: [
        "Confirmada com antecedência, para data e horário definidos",
        "Solicitada na hora, conforme motorista disponível",
        "No ponto do aeroporto, por ordem de chegada",
      ],
    },
    {
      criterio: "Veículo",
      celulas: [
        "Definido na reserva, adequado ao grupo e à bagagem",
        "O modelo varia conforme a disponibilidade",
        "Varia conforme o carro do ponto",
      ],
    },
    {
      criterio: "Horário de saída",
      celulas: [
        "Escolhido por você",
        "Depende de encontrar motorista no momento",
        "Depende da fila do ponto",
      ],
    },
    {
      criterio: "Monitoramento do voo",
      celulas: [
        "Acompanhamos atrasos e antecipações",
        "Não acompanha",
        "Não acompanha",
      ],
    },
    {
      criterio: "Recepção",
      celulas: [
        "O motorista aguarda no desembarque",
        "É preciso localizar o veículo no ponto de embarque",
        "É preciso ir até o ponto de táxi",
      ],
    },
    {
      criterio: "Preço",
      celulas: [
        "Fechado na reserva, sem tarifa dinâmica",
        "Pode variar com tarifa dinâmica em horário de pico",
        "Taxímetro ou tabela, conforme o trajeto",
      ],
    },
    {
      criterio: "Bagagem",
      celulas: [
        "Veículo dimensionado para o volume combinado no orçamento",
        "Nem sempre adequado ao volume",
        "Varia conforme o veículo",
      ],
    },
    {
      criterio: "Cadeirinha e bebê conforto",
      celulas: [
        "Sob solicitação no momento da reserva",
        "Disponibilidade variável",
        "Raramente disponível",
      ],
    },
    {
      criterio: "Para empresas",
      celulas: [
        "Atendimento profissional e comprovante para prestação de contas",
        "Limitado",
        "Recibo avulso",
      ],
    },
    {
      criterio: "Viagem",
      celulas: [
        "Exclusiva, em veículo executivo revisado",
        "Exclusiva, com padrão de veículo variável",
        "Exclusiva, com padrão de veículo variável",
      ],
    },
  ],
} as const;

/**
 * O "como funciona" fica curto de propósito: as páginas de rota contam o mesmo
 * processo em detalhe, e repetir o texto palavra por palavra aqui é o caminho
 * mais rápido para as duas páginas se canibalizarem.
 */
export const comoFunciona = {
  title: "Como funciona a recepção",
  intro:
    "O mesmo processo nos quatro aeroportos. Atender um terminal pequeno ou um terminal grande não muda o encontro no desembarque.",
  items: [
    {
      title: "Você informa o número do voo",
      description:
        "Com o código do voo, nossa equipe acompanha a chegada e ajusta o horário da recepção sempre que necessário.",
    },
    {
      title: "Enviamos a identificação antes da chegada",
      description:
        "Você recebe pelo WhatsApp a identificação do motorista e do veículo, com foto e modelo. Ao desembarcar, já sabe o que procurar.",
    },
    {
      title: "O motorista aguarda no desembarque",
      description:
        "Na área de desembarque, próximo à saída principal, ou em outro ponto combinado previamente durante o atendimento.",
    },
    {
      title: "Seguimos com a rota definida",
      description:
        "O trajeto é planejado antes da saída, considerando as condições da estrada no dia — não pelo tempo que o aplicativo de navegação mostra na hora da consulta.",
    },
  ],
} as const;

export const atrasoDeVoo = {
  title: "Se o seu voo atrasar",
  body: "Atrasos acontecem, e eles são considerados no planejamento. Monitoramos o voo informado e ajustamos o horário da recepção sempre que possível. Em caso de alteração significativa ou remarcação, nossa equipe fará o possível para atender o novo horário, conforme disponibilidade.",
} as const;

/**
 * FAQ do hub. Vira schema `FAQPage`.
 *
 * REGRA: aqui só entram perguntas de **comparação e de serviço em geral**.
 * Pergunta de rota ("onde encontro o motorista em Navegantes?", "vocês atendem
 * de madrugada?") pertence às páginas de destino, que já as respondem — repetir
 * aqui é canibalização, e FAQ duplicada entre páginas irmãs é sinal de página
 * fina.
 */
export const transferAeroportoFaq = [
  {
    question: "Quais aeroportos a Astaz atende a partir de Balneário Camboriú?",
    answer:
      "Navegantes, Florianópolis, Joinville e Curitiba. O Aeroporto Afonso Pena, que atende Curitiba, fica em São José dos Pinhais.",
  },
  {
    question: "Qual aeroporto fica mais perto de Balneário Camboriú?",
    answer:
      "Navegantes, a 40 quilômetros — cerca de 40 minutos de trajeto em condições normais de trânsito. Entre dezembro e março, o percurso pode chegar a uma hora e meia.",
  },
  {
    question: "Vale a pena embarcar em Florianópolis em vez de Navegantes?",
    answer:
      "Depende do que pesa mais na sua viagem. Florianópolis tem mais opções de voo, mais destinos e voos internacionais; Navegantes fica a menos da metade da distância e reduz o tempo de estrada. Quem prioriza a malha aérea embarca em Florianópolis; quem prioriza menos tempo em trânsito, em Navegantes. Atendemos os dois com o mesmo serviço.",
  },
  {
    question:
      "O transfer atende quem está saindo de outra cidade, não só de Balneário Camboriú?",
    answer:
      "Sim. Atendemos toda a região, incluindo Itajaí, Camboriú, Itapema, Bombinhas, Penha, Brusque, Blumenau, Joinville e Florianópolis. Informe o endereço de embarque no momento do orçamento.",
  },
  {
    question: "Quanto tempo a mais devo considerar na alta temporada?",
    answer:
      "Entre dezembro e março, o tempo de trajeto pode dobrar em qualquer um dos quatro percursos. No caminho para Curitiba a variação é maior, por causa da Serra do Mar.",
  },
  {
    question:
      "Por que contratar um transfer executivo em vez de um app de corrida?",
    answer:
      "Pelo que já está resolvido antes de você pousar: a reserva está confirmada, o veículo está definido, o voo é acompanhado e o valor foi fechado no agendamento, sem tarifa dinâmica. Em vez de procurar um carro depois de um voo longo, você encontra o motorista esperando.",
  },
] as const;

export const transferAeroportoCta = {
  title: "Agende seu transfer",
  body: "Informe o aeroporto, a data e o número do voo. Nossa equipe retorna com a confirmação, o horário de saída recomendado e os detalhes da recepção.",
} as const;
