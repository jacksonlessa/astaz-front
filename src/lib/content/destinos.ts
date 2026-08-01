/**
 * Destinos — fonte única de verdade das páginas de `/destinos`.
 *
 * Cada destino é montado a partir de um briefing preenchido em
 * `docs/seo/briefings/`. **Nenhum número entra aqui sem estar no briefing**:
 * distância, tempo de trajeto e capacidade são dados operacionais, e inventar
 * qualquer um deles publica informação falsa num site institucional.
 *
 * Os blocos são opcionais e combináveis. Isso mantém as páginas parecidas o
 * bastante para serem consistentes e diferentes o bastante para não caírem
 * como doorway page — o risco central deste projeto.
 */

export type DestinoBlock =
  | { type: "prose"; title: string; paragraphs: readonly string[] }
  | {
      type: "steps";
      title: string;
      intro?: string;
      items: readonly { title: string; description: string }[];
    }
  | { type: "highlight"; title: string; body: string };

export type Destino = {
  slug: string;
  /** `<h1>` da página. */
  title: string;
  /** Rótulo curto para a trilha de navegação. */
  breadcrumbLabel: string;
  /** Mensagem pré-preenchida do WhatsApp, específica desta rota. */
  whatsappMessage: string;
  /** `<title>`. Máximo 52 caracteres (o layout soma " | ASTAZ"). */
  metaTitle: string;
  /** Meta description. Entre 120 e 158 caracteres. */
  metaDescription: string;
  /** Frase de abertura, abaixo do h1. */
  intro: string;
  /** Card do hub `/destinos`. */
  summary: string;
  image: string;
  imageAlt: string;
  /**
   * TODO: substituir por foto real. Imagem de banco cai mal em página de
   * conversão — o cliente está avaliando exatamente o serviço que vai
   * contratar. Marcador para não esquecer antes da revisão do time.
   */
  imageIsPlaceholder: boolean;
  /** Dados objetivos da rota. Origem obrigatória: briefing. */
  routeFacts: readonly { label: string; value: string; note?: string }[];
  blocks: readonly DestinoBlock[];
  /** Vira schema `FAQPage` — só entra aqui o que é exibido na página. */
  faq: readonly { question: string; answer: string }[];
  /** Enquanto false, a rota não é gerada e não entra no sitemap. */
  published: boolean;
};

export const destinos: readonly Destino[] = [
  {
    slug: "aeroporto-navegantes",
    title: "Transfer entre o Aeroporto de Navegantes e Balneário Camboriú",
    breadcrumbLabel: "Aeroporto de Navegantes",
    whatsappMessage:
      "Olá, ASTAZ! Gostaria de um orçamento para transfer entre o Aeroporto de Navegantes e Balneário Camboriú.",
    metaTitle: "Transfer Aeroporto Navegantes a Balneário Camboriú",
    metaDescription:
      "Transfer executivo entre o Aeroporto de Navegantes e Balneário Camboriú: 40 km, cerca de 40 minutos, com monitoramento de voo e atendimento 24 horas.",
    intro:
      "São 40 quilômetros entre o Aeroporto de Navegantes e Balneário Camboriú. O que muda a experiência não é a distância — é chegar ao desembarque e encontrar o motorista já esperando, sem procurar por ninguém.",
    summary:
      "Recepção no desembarque, monitoramento de voo e atendimento em qualquer horário, inclusive na madrugada.",
    image:
      "https://images.unsplash.com/photo-1436491865339-9a61a109fa08?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Aeroporto ao entardecer, com aeronave na pista",
    imageIsPlaceholder: true,
    routeFacts: [
      { label: "Distância", value: "40 km" },
      {
        label: "Tempo médio",
        value: "40 minutos",
        note: "Sujeito às condições de trânsito no dia",
      },
      {
        label: "Alta temporada",
        value: "Até 1h30",
        note: "Entre dezembro e março, nos horários de pico da BR-101",
      },
      {
        label: "Atendimento",
        value: "24 horas",
        note: "Inclusive voos de madrugada, mediante agendamento",
      },
    ],
    blocks: [
      {
        type: "steps",
        title: "Como funciona a recepção no desembarque",
        intro:
          "A dúvida mais comum de quem contrata um transfer é se o motorista estará realmente lá na hora do desembarque. Este é o percurso do primeiro contato até a chegada.",
        items: [
          {
            title: "Você informa o número do voo",
            description:
              "Com o código do voo, nossa equipe acompanha a chegada e ajusta o horário da recepção sempre que necessário.",
          },
          {
            title: "Enviamos a identificação do motorista",
            description:
              "Antes da sua chegada, você recebe pelo WhatsApp a identificação do motorista, com foto e modelo do veículo. Você sabe quem procurar antes de desembarcar.",
          },
          {
            title: "O motorista aguarda na saída do desembarque",
            description:
              "A recepção acontece na área de desembarque, próximo à saída principal do terminal, ou em outro ponto combinado previamente durante o atendimento.",
          },
          {
            title: "Seguimos para Balneário Camboriú",
            description:
              "O trajeto é planejado considerando as condições da BR-101 no dia, com rota definida antes da saída.",
          },
        ],
      },
      {
        type: "prose",
        title: "O que influencia o tempo de trajeto",
        paragraphs: [
          "O percurso leva cerca de 40 minutos em condições normais. Entre dezembro e março, nos horários de maior movimento, pode chegar a uma hora e meia.",
          "Nos dias úteis, o trânsito costuma ser mais intenso no início da manhã e no fim da tarde, principalmente nos acessos norte e sul de Itajaí.",
          "Aplicativos de navegação calculam a distância, mas não antecipam obras, acidentes ou congestionamentos na BR-101. Nossa equipe acompanha essas condições antes da saída para definir o melhor horário — é o tipo de ajuste que só quem roda a região todos os dias consegue fazer.",
        ],
      },
      {
        type: "highlight",
        title: "Se o seu voo atrasar",
        body: "Atrasos acontecem, e eles são considerados no planejamento. Monitoramos o voo informado e ajustamos o horário da recepção sempre que possível. Em caso de alteração significativa ou remarcação, nossa equipe fará o possível para atender o novo horário, conforme disponibilidade.",
      },
      {
        type: "prose",
        title: "No sentido inverso: de Balneário Camboriú ao aeroporto",
        paragraphs: [
          "A mesma rota atende quem parte de Balneário Camboriú. O horário de saída é planejado considerando o trânsito previsto para o dia, especialmente na BR-101, para que você chegue ao aeroporto dentro da antecedência recomendada pela companhia aérea.",
          "Recomendamos o agendamento com antecedência para garantir disponibilidade, sobretudo na alta temporada. Para solicitações de última hora, consulte nossa equipe.",
        ],
      },
    ],
    faq: [
      {
        question: "O motorista acompanha o atraso do meu voo?",
        answer:
          "Sim. Informando o número do voo, acompanhamos sua chegada para ajustar o horário da recepção sempre que necessário.",
      },
      {
        question: "Vocês atendem voos durante a madrugada?",
        answer:
          "Sim. Realizamos transfers em qualquer horário, inclusive para voos de madrugada, mediante agendamento.",
      },
      {
        question: "Onde encontro o motorista no Aeroporto de Navegantes?",
        answer:
          "O motorista aguarda na saída da área de desembarque, ou em outro ponto combinado previamente. Antes da chegada, enviamos todas as informações pelo WhatsApp.",
      },
      {
        question: "Preciso avisar caso meu voo seja alterado?",
        answer:
          "Sempre que possível, sim. Acompanhamos o voo informado, mas alterações comunicadas pelo cliente ajudam nossa equipe a organizar o atendimento.",
      },
      {
        question:
          "Quanto tempo leva o trajeto entre Navegantes e Balneário Camboriú?",
        answer:
          "São 40 quilômetros, percorridos em cerca de 40 minutos em condições normais de trânsito. Entre dezembro e março, nos horários de pico da BR-101, o trajeto pode chegar a uma hora e meia.",
      },
    ],
    published: true,
  },
  {
    slug: "beto-carrero",
    title: "Transfer de Balneário Camboriú ao Beto Carrero World",
    breadcrumbLabel: "Beto Carrero World",
    whatsappMessage:
      "Olá, ASTAZ! Gostaria de um orçamento para transfer de Balneário Camboriú ao Beto Carrero World.",
    metaTitle: "Transfer para o Beto Carrero World",
    metaDescription:
      "Transfer executivo de Balneário Camboriú ao Beto Carrero World, em Penha: van para até 7 passageiros, cadeirinha sob solicitação e volta no seu horário.",
    intro:
      "Um dia no parque cansa mais do que se imagina. O transfer resolve a parte que ninguém quer administrar no fim da tarde: estacionamento, trânsito de volta e a estrada com a família exausta.",
    summary:
      "Ida e volta para o parque, em Penha, com o motorista aguardando no local ou retornando no horário combinado.",
    // TODO: substituir por foto real da van no parque ou embarque da família.
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80",
    imageAlt: "Veículo executivo em estrada ao amanhecer",
    imageIsPlaceholder: true,
    routeFacts: [
      {
        label: "Volta",
        value: "No seu horário",
        note: "Motorista aguardando no local ou retorno agendado",
      },
      {
        label: "Van executiva",
        value: "7 passageiros",
        note: "Uma mala grande por passageiro",
      },
      {
        label: "Cadeirinha",
        value: "Sob solicitação",
        note: "Informe as idades no momento da reserva",
      },
      {
        label: "Atendimento",
        value: "24 horas",
        note: "Mediante agendamento",
      },
    ],
    blocks: [
      {
        type: "highlight",
        title: "Duas formas de organizar a volta",
        body: "O motorista pode aguardar no local durante toda a permanência no parque, ou retornar em um horário combinado com você. As duas opções são definidas junto com o orçamento, antes do dia — você não decide isso com a família cansada na saída do parque.",
      },
      {
        type: "prose",
        title: "Por que ir de transfer",
        paragraphs: [
          "Quem vai ao Beto Carrero costuma chegar cedo e sair no fim da tarde. Entre uma coisa e outra são muitas horas em pé, e a estrada de volta acontece exatamente quando o cansaço aparece.",
          "Com o transfer, o trajeto até Penha e o retorno a Balneário Camboriú ficam por nossa conta, incluindo o estacionamento — que em dia de alta ocupação é uma preocupação a menos.",
          "Para famílias com crianças pequenas, cadeirinha e bebê conforto ficam disponíveis mediante solicitação no momento da reserva. Basta informar as idades para prepararmos o veículo.",
        ],
      },
      {
        type: "steps",
        title: "Como funciona",
        items: [
          {
            title: "Você informa o grupo e a data",
            description:
              "Número de passageiros, idades das crianças e o dia da visita. Com isso definimos o veículo adequado.",
          },
          {
            title: "Combinamos o formato da volta",
            description:
              "Motorista aguardando no local ou retorno em horário agendado. A escolha é feita junto com o orçamento.",
          },
          {
            title: "Buscamos você em Balneário Camboriú",
            description:
              "No endereço combinado, no horário planejado para chegar ao parque sem correria.",
          },
          {
            title: "O retorno acontece como o combinado",
            description:
              "Sem procurar carro no estacionamento e sem dirigir depois de um dia inteiro em pé.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "O motorista fica esperando durante o dia no parque?",
        answer:
          "Pode ficar. O motorista aguarda no local durante toda a permanência, ou retorna em um horário combinado com você. As duas opções são definidas junto com o orçamento.",
      },
      {
        question: "Vocês têm cadeirinha para crianças?",
        answer:
          "Sim. Cadeirinha e bebê conforto estão disponíveis mediante solicitação no momento da reserva. Informe as idades das crianças para prepararmos o veículo.",
      },
      {
        question: "Quantas pessoas cabem no transfer para o Beto Carrero?",
        answer:
          "A van executiva atende até 7 passageiros, considerando uma mala grande por pessoa. Para grupos menores, sedã e SUV atendem até 3 passageiros.",
      },
      {
        question: "Preciso agendar com antecedência?",
        answer:
          "Recomendamos o agendamento com antecedência para garantir disponibilidade, especialmente em férias escolares e feriados prolongados. Para solicitações de última hora, consulte nossa equipe.",
      },
    ],
    published: true,
  },
];

export function getDestino(slug: string) {
  return destinos.find((destino) => destino.slug === slug);
}

export const publishedDestinos = destinos.filter((destino) => destino.published);
