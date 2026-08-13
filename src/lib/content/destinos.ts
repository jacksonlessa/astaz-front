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

import { getServico } from "@/lib/content/servicos";
import { servicoPath } from "@/lib/routes";

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
  /**
   * CTA final, específico do destino. Existe porque um texto genérico aqui
   * produz erro factual: pedir "número do voo" numa página de parque temático
   * é a assinatura de template com nome trocado.
   */
  cta: { title: string; body: string };
  /**
   * Slugs de destinos irmãos, exibidos no fim da página. Existe para que rotas
   * próximas — dois aeroportos que servem a mesma cidade — troquem link entre
   * si em vez de disputarem a mesma busca isoladas.
   */
  relacionados?: readonly string[];
  /**
   * Serviço-mãe desta rota, em `content/servicos.ts`. Existe porque a
   * autoridade interna só descia: os destinos linkavam entre si e para a
   * navegação global, mas nenhum subia de volta para o hub do serviço, que é a
   * página mais densa do site e recebia link editorial de duas páginas só.
   *
   * É campo opcional, e não regra por slug: destino que não pertence a um
   * serviço (um parque, por exemplo) simplesmente não o declara, e nada é
   * renderizado. A copy vem junto porque texto não mora em componente — e
   * porque uma frase genérica aqui erraria: cada rota tem um motivo diferente
   * para mandar o leitor ao hub.
   */
  servicoRelacionado?: {
    /** `slug` de um serviço publicado em `content/servicos.ts`. */
    slug: string;
    /** Frase de contexto exibida antes do link. */
    nota: string;
    /** Texto do link. Âncora descritiva — nunca "clique aqui". */
    linkLabel: string;
  };
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
    /**
     * A cidade vem antes do aeroporto porque é a ordem em que as pessoas
     * digitam ("transfer balneário camboriú aeroporto navegantes"), e o "e"
     * no lugar de "a" declara o que a página realmente cobre: os dois
     * sentidos, incluindo o <h2> "No sentido inverso". O título anterior
     * anunciava só aeroporto → cidade.
     *
     * Sem "de" antes de Navegantes: 50 caracteres em vez de 53, dentro do
     * orçamento de ≤ 52 da tabela mestre, e igual à forma usada em
     * Florianópolis — é assim que a busca é digitada.
     */
    metaTitle: "Transfer Balneário Camboriú e Aeroporto Navegantes",
    metaDescription:
      "Transfer executivo do Aeroporto de Navegantes a Balneário Camboriú: 40 km em cerca de 40 minutos, com monitoramento de voo e atendimento agendado 24 horas.",
    intro:
      "São 40 quilômetros entre o Aeroporto de Navegantes e Balneário Camboriú. O que muda a experiência não é a distância — é chegar ao desembarque e encontrar o motorista já esperando, sem procurar por ninguém.",
    summary:
      "Recepção no desembarque, monitoramento de voo e atendimento em qualquer horário, inclusive na madrugada.",
    image: "/images/aeroporto-navegantes.webp",
    imageAlt:
      "Fachada do terminal do Aeroporto Internacional de Navegantes, com veículos no desembarque",
    imageIsPlaceholder: false,
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
          "Aplicativos de navegação calculam a distância, mas não antecipam obras, acidentes ou congestionamentos na BR-101. Nossa equipe acompanha essas condições antes da saída para definir o melhor horário de partida.",
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
    cta: {
      title: "Agende seu transfer",
      body: "Informe a data, o horário e o número do voo. Nossa equipe retorna com a confirmação e todos os detalhes da recepção.",
    },
    servicoRelacionado: {
      slug: "transfer-aeroporto",
      nota: "Navegantes é o aeroporto mais próximo de Balneário Camboriú, mas não é o único que atendemos: o serviço cobre também Florianópolis, Joinville e Curitiba.",
      linkLabel: "Conheça o serviço de transfer para aeroportos",
    },
    relacionados: ["aeroporto-florianopolis", "beto-carrero"],
    published: true,
  },
  {
    slug: "beto-carrero",
    title: "Transfer de Balneário Camboriú ao Beto Carrero World",
    breadcrumbLabel: "Beto Carrero World",
    whatsappMessage:
      "Olá, ASTAZ! Gostaria de um orçamento para transfer de Balneário Camboriú ao Beto Carrero World.",
    // Com a cidade de origem: "transfer para o Beto Carrero" é buscado por
    // quem já está em qualquer lugar de SC, e sem "Balneário Camboriú" o
    // título não diz de onde a Astaz sai.
    metaTitle: "Transfer de Balneário Camboriú ao Beto Carrero World",
    metaDescription:
      "Transfer executivo de Balneário Camboriú ao Beto Carrero World, em Penha: 45 km em cerca de 45 minutos, com ida e volta combinadas antes do passeio.",
    intro:
      "São 45 quilômetros entre Balneário Camboriú e o parque, em Penha. O passeio ocupa o dia inteiro, e a volta costuma ser a parte menos planejada — com o transfer, estacionamento, trânsito e estrada ficam por nossa conta.",
    summary:
      "45 quilômetros até Penha, com embarque na entrada do parque e o retorno combinado antes do passeio.",
    // TODO: idealmente trocar por foto da van no parque ou do embarque da
    // família — a imagem atual é do parque, não do serviço.
    image: "/images/beto-carrero-world.webp",
    imageAlt:
      "Castelo colorido na entrada do Beto Carrero World, em Penha, com a serra ao fundo",
    imageIsPlaceholder: false,
    routeFacts: [
      { label: "Distância", value: "45 km" },
      {
        label: "Tempo médio",
        value: "45 minutos",
        note: "Sujeito às condições de trânsito no dia",
      },
      {
        label: "Feriados e fins de semana",
        value: "Até 2 horas",
        note: "O acesso a Penha concentra o movimento nesses dias",
      },
      {
        label: "Agendamento",
        value: "A partir de 1 dia antes",
        note: "Em férias escolares e feriados, quanto antes melhor",
      },
    ],
    blocks: [
      {
        type: "highlight",
        title: "Duas formas de organizar a volta",
        body: "No formato mais comum, o motorista deixa vocês na entrada do parque e retorna no horário combinado. Se preferir que ele permaneça à disposição durante a visita, isso está incluído no valor da ida e volta. As duas opções são definidas junto com o orçamento, antes do dia — nada fica para ser resolvido na saída do parque.",
      },
      {
        type: "prose",
        title: "Por que ir de transfer",
        paragraphs: [
          "Quem vai ao Beto Carrero costuma chegar cedo e sair no fim da tarde. Entre uma coisa e outra são muitas horas em pé, e a estrada de volta acontece exatamente quando o cansaço aparece.",
          "Com o transfer, o trajeto até Penha e o retorno a Balneário Camboriú ficam por nossa conta — e não há carro para estacionar em dia de parque cheio.",
          "Para famílias com crianças pequenas, o bebê conforto atende até 13 quilos e fica disponível mediante solicitação no momento da reserva. Basta informar a idade e o peso da criança para prepararmos o veículo.",
        ],
      },
      {
        type: "prose",
        title: "O trajeto até Penha",
        paragraphs: [
          "São 45 quilômetros entre Balneário Camboriú e o parque, percorridos em cerca de 45 minutos em condições normais de trânsito.",
          "Em feriados e fins de semana, o acesso a Penha concentra o movimento e o trajeto pode chegar a duas horas. É por isso que o horário de saída é definido conforme o dia da visita, e não por uma tabela fixa.",
          "O embarque e o desembarque acontecem na entrada do parque — o mesmo ponto na ida e na volta, sem caminhada extra com criança cansada no fim do dia.",
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
              "Retorno em horário agendado ou motorista à disposição durante a visita. A escolha é feita junto com o orçamento.",
          },
          {
            title: "Buscamos você em Balneário Camboriú",
            description:
              "No endereço combinado, no horário planejado para chegar ao parque sem correria.",
          },
          {
            title: "O retorno acontece na entrada do parque",
            description:
              "No horário combinado — ou antes, se preferirem encerrar o dia mais cedo. Basta avisar pelo WhatsApp.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "Quanto tempo leva de Balneário Camboriú até o Beto Carrero?",
        answer:
          "São 45 quilômetros, percorridos em cerca de 45 minutos em condições normais de trânsito. Em feriados e fins de semana, quando o acesso a Penha fica mais movimentado, o trajeto pode chegar a duas horas.",
      },
      {
        question: "O motorista fica esperando durante o dia no parque?",
        answer:
          "Pode ficar. No formato mais comum, o motorista deixa vocês na entrada e retorna no horário combinado, mas ele também pode permanecer à disposição durante a visita — nesse caso, a espera está incluída no valor da ida e volta.",
      },
      {
        question: "Onde o transfer deixa e busca o grupo no parque?",
        answer:
          "Na entrada do parque, o mesmo ponto na ida e na volta. O local e o horário são confirmados pelo WhatsApp antes do dia da visita.",
      },
      {
        question: "Posso voltar antes do horário combinado?",
        answer:
          "Sim. Basta avisar pelo WhatsApp e organizamos o retorno o quanto antes, conforme a disponibilidade do motorista no momento.",
      },
      {
        question: "Vocês têm cadeirinha para crianças?",
        answer:
          "Sim. Temos bebê conforto para crianças de até 13 quilos, mediante solicitação no momento da reserva. Informe a idade e o peso da criança para prepararmos o veículo.",
      },
      {
        question: "Quantas pessoas cabem no transfer para o Beto Carrero?",
        answer:
          "As vans executivas atendem de 9 a 20 passageiros, conforme a configuração. Para grupos menores, o sedã atende 4 passageiros e o SUV, até 6.",
      },
      {
        question: "Preciso agendar com antecedência?",
        answer:
          "Recomendamos agendar com pelo menos um dia de antecedência e, em férias escolares e feriados prolongados, o quanto antes. Para solicitações de última hora, consulte nossa equipe.",
      },
    ],
    cta: {
      title: "Agende o transfer para o parque",
      body: "Informe a data da visita, quantas pessoas viajam e as idades das crianças. Definimos junto com você o formato da volta e retornamos com o orçamento.",
    },
    /**
     * Os dois aeroportos, e não é link decorativo: quem visita o parque quase
     * sempre chega de avião, então a próxima dúvida real de quem está nesta
     * página é como sair do aeroporto. Sem isto, esta era a única página de
     * destino sem `relacionados` — recebia link de uma página só em todo o
     * site (o hub `/destinos`).
     */
    relacionados: ["aeroporto-navegantes", "aeroporto-florianopolis"],
    published: true,
  },
  {
    slug: "aeroporto-florianopolis",
    title: "Transfer entre o Aeroporto de Florianópolis e Balneário Camboriú",
    breadcrumbLabel: "Aeroporto de Florianópolis",
    whatsappMessage:
      "Olá, ASTAZ! Gostaria de um orçamento para transfer entre o Aeroporto de Florianópolis e Balneário Camboriú.",
    /**
     * Sem "de" antes de Florianópolis, e cidade antes do aeroporto: é a ordem
     * em que a busca é digitada.
     *
     * O "e" virou travessão — a mesma forma já usada em versões anteriores
     * deste título — para caber no orçamento. Com "e" eram 53 caracteres, 61
     * com o sufixo " | ASTAZ", acima do teto de 60; assim são 51 (59 com o
     * sufixo), e o título deixa de ser a única exceção do site. Abreviar
     * "Florianópolis" ou usar "Floripa" continua fora de questão: informal
     * demais para a marca.
     */
    metaTitle: "Transfer Balneário Camboriú–Aeroporto Florianópolis",
    metaDescription:
      "Transfer executivo entre o Aeroporto de Florianópolis e Balneário Camboriú: 100 km em cerca de 1h30, com monitoramento de voo e recepção no desembarque.",
    intro:
      "São 100 quilômetros entre Balneário Camboriú e o Aeroporto de Florianópolis — cerca de uma hora e meia de estrada. Quem embarca por lá costuma ter um motivo: um voo, uma conexão ou um horário que só fecham pela capital.",
    summary:
      "100 quilômetros até o aeroporto da capital, com horário de saída planejado pelo seu voo e recepção no desembarque.",
    // Banco de imagem (Pexels, licença livre para uso comercial). NÃO é o
    // Aeroporto de Florianópolis nem o serviço da Astaz — por isso
    // `imageIsPlaceholder` continua true até existir foto real.
    image: "/images/aeroporto-florianopolis.webp",
    imageAlt:
      "Passageiros com malas de rodinhas caminhando pelo desembarque de um aeroporto, em contraluz",
    imageIsPlaceholder: true,
    routeFacts: [
      { label: "Distância", value: "100 km" },
      {
        label: "Tempo médio",
        value: "1h30",
        note: "Sujeito às condições de trânsito no dia",
      },
      {
        label: "Alta temporada",
        value: "Até 3 horas",
        note: "A saída de Balneário Camboriú e a entrada da capital concentram o movimento",
      },
      {
        label: "Agendamento",
        value: "A partir de 1 dia antes",
        note: "Recomendado com mais folga entre dezembro e março",
      },
    ],
    blocks: [
      {
        type: "prose",
        title: "Cem quilômetros mudam o planejamento, não o serviço",
        paragraphs: [
          "Navegantes é o aeroporto mais próximo de Balneário Camboriú, a cerca de 40 minutos. Florianópolis fica a 100 quilômetros, e o trajeto leva por volta de uma hora e meia em condições normais.",
          "Entre dezembro e março, com o litoral cheio, esse mesmo percurso pode chegar a três horas. A diferença não está no serviço — está no horário em que precisamos sair.",
          "Por isso, para quem embarca pela capital, o planejamento do horário de saída pesa mais do que em qualquer outra rota que atendemos.",
        ],
      },
      {
        type: "highlight",
        title: "Quando sair de Balneário Camboriú",
        body: "Para embarques em Florianópolis, a saída costuma acontecer cerca de três horas antes do horário do voo — o número exato depende do horário do embarque e do movimento previsto para o dia. Definimos isso com você no agendamento, e não na véspera.",
      },
      {
        type: "prose",
        title: "Onde o trajeto costuma prender",
        paragraphs: [
          "Dois pontos concentram a lentidão nesta rota: a saída de Balneário Camboriú e a entrada de Florianópolis. Nos dois casos, o horário do dia pesa mais que a distância.",
          "Aplicativos de navegação calculam o percurso pelo trânsito do momento da consulta, não pelo trânsito que existirá na hora da viagem. Nossa equipe acompanha as condições da BR-101 antes da saída e define a partida com essa margem embutida.",
        ],
      },
      {
        type: "steps",
        title: "Como funciona a recepção no desembarque",
        intro:
          "O terminal da capital é maior e mais movimentado que o de Navegantes, e por isso a identificação prévia importa ainda mais aqui.",
        items: [
          {
            title: "Você informa o número do voo",
            description:
              "Com o código do voo, acompanhamos a chegada e ajustamos o horário da recepção sempre que necessário.",
          },
          {
            title: "Enviamos a identificação antes da chegada",
            description:
              "Você recebe pelo WhatsApp a identificação do motorista e do veículo, com foto e modelo. Ao desembarcar, já sabe exatamente o que procurar.",
          },
          {
            title: "O encontro acontece na área de desembarque",
            description:
              "O motorista aguarda na área de desembarque do terminal, ou em outro ponto combinado previamente durante o atendimento.",
          },
          {
            title: "Seguimos para Balneário Camboriú",
            description:
              "Com a rota definida antes da saída, considerando as condições da BR-101 no dia.",
          },
        ],
      },
    ],
    faq: [
      {
        question:
          "Quanto tempo leva de Balneário Camboriú até o Aeroporto de Florianópolis?",
        answer:
          "São 100 quilômetros, percorridos em cerca de uma hora e meia em condições normais de trânsito. Entre dezembro e março, o trajeto pode chegar a três horas.",
      },
      {
        question:
          "Com quanta antecedência preciso sair de Balneário Camboriú para embarcar em Florianópolis?",
        answer:
          "Em geral, cerca de três horas antes do horário do voo. O horário exato depende do embarque e do movimento previsto para o dia, e é definido com você no agendamento.",
      },
      {
        question:
          "Vale mais a pena usar o Aeroporto de Florianópolis ou o de Navegantes?",
        answer:
          "Depende do seu voo. Navegantes fica a 40 quilômetros de Balneário Camboriú, cerca de 40 minutos; Florianópolis fica a 100 quilômetros, cerca de uma hora e meia. Atendemos os dois com o mesmo serviço.",
      },
      {
        question:
          "Onde o motorista aguarda no desembarque do Aeroporto de Florianópolis?",
        answer:
          "Na área de desembarque do terminal, ou em outro ponto combinado previamente. Antes da sua chegada, enviamos pelo WhatsApp a identificação do motorista e do veículo.",
      },
      {
        question: "Com quanta antecedência preciso agendar o transfer?",
        answer:
          "Recomendamos agendar com pelo menos um dia de antecedência. Entre dezembro e março, quanto antes melhor — é o período de maior procura.",
      },
    ],
    cta: {
      title: "Agende o transfer para Florianópolis",
      body: "Informe a data, o horário e o número do voo. Nossa equipe retorna com a confirmação, o horário de saída recomendado de Balneário Camboriú e os detalhes da recepção.",
    },
    servicoRelacionado: {
      slug: "transfer-aeroporto",
      nota: "Quem embarca pela capital costuma comparar aeroportos antes de decidir a rota. Atendemos Florianópolis, Navegantes, Joinville e Curitiba, com a mesma recepção no desembarque.",
      linkLabel: "Conheça o serviço de transfer para aeroportos",
    },
    relacionados: ["aeroporto-navegantes", "beto-carrero"],
    published: true,
  },
];

export function getDestino(slug: string) {
  return destinos.find((destino) => destino.slug === slug);
}

export const publishedDestinos = destinos.filter((destino) => destino.published);

/**
 * Destinos irmãos que já estão publicados. Filtrar por `published` aqui evita
 * que um link interno aponte para uma rota que ainda não existe.
 */
export function getDestinosRelacionados(destino: Destino) {
  return (destino.relacionados ?? [])
    .map(getDestino)
    .filter((item): item is Destino => Boolean(item?.published));
}

/**
 * O serviço-mãe do destino, já resolvido e conferido. Devolve `null` quando o
 * destino não declara `servicoRelacionado` ou quando o serviço apontado ainda
 * não está publicado — mesma proteção de `getDestinosRelacionados`: nenhum link
 * interno pode apontar para uma rota que não existe.
 */
export function getServicoRelacionado(destino: Destino) {
  const { servicoRelacionado } = destino;
  if (!servicoRelacionado) return null;

  const servico = getServico(servicoRelacionado.slug);
  if (!servico?.published) return null;

  return {
    path: servicoPath(servico.slug),
    nota: servicoRelacionado.nota,
    linkLabel: servicoRelacionado.linkLabel,
  };
}
