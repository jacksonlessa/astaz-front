/**
 * Sobre — fonte única de verdade da página `/sobre`.
 *
 * Cada afirmação daqui saiu do briefing em `docs/seo/briefings/sobre.md` e foi
 * confirmada pela operação. Esta é a página de E-E-A-T do domínio: é onde o
 * Google decide o quanto confia no site e onde o visitante hesitante decide se
 * entra no carro. Por isso vale uma regra mais dura que a do resto do site:
 *
 * NÃO acrescente aqui nada que não possa ser verificado se um cliente
 * perguntar. Adjetivo elogioso ("excelência", "referência") e número
 * arredondado para cima não fazem a página parecer melhor — fazem o resto dela
 * parecer duvidoso.
 *
 * O que ficou deliberadamente de fora, e por quê:
 * - Seguro: a empresa não possui cobertura para passageiros. A página não
 *   menciona o assunto em lugar nenhum.
 * - Critérios de seleção de motorista: não confirmados item a item.
 * - Nota do Google: a base de avaliações ainda é pequena demais para publicar
 *   número ou marcar `AggregateRating`. Só o link para o perfil.
 * - Nome de cliente: contradiria a política de discrição que a própria página
 *   descreve.
 */

export const sobreIntro = {
  eyebrow: "Sobre",
  title: "Sobre a Astaz",
  description:
    "A Astaz nasceu em 2022, em Balneário Camboriú, a partir de uma constatação simples: quem precisa chegar a um compromisso importante não quer negociar preço no momento do embarque. Quer saber que o carro vai estar lá.",
  image: "/images/sobre-astaz-veiculo.webp",
  imageAlt:
    "SUV executivo preto da Astaz, visto de frente em três quartos, estacionado em dia de sol",
  whatsappMessage:
    "Olá, ASTAZ! Vi a página sobre a empresa e gostaria de solicitar um orçamento.",
} as const;

export const quemConduz = {
  title: "Quem conduz",
  /**
   * Só o Vinícius é nomeado. A segunda pessoa da operação aparece como parte do
   * time, sem nome, por decisão do proprietário — publicar o nome de terceiro
   * exigiria autorização dela.
   */
  paragraphs: [
    "Quem conduz a Astaz é Vinícius Dalpra Pieper, que atende turistas, executivos e artistas em Balneário Camboriú e região, direto no veículo. O administrativo e a organização das agendas ficam com a outra metade do time.",
    "São duas pessoas. Quem responde a sua mensagem é quem organiza o atendimento — nunca um atendente que não sabe quem vai dirigir.",
  ],
  image: "/images/sobre-astaz-motorista.webp",
  imageAlt:
    "Vinícius Dalpra Pieper, de terno, no banco do motorista do veículo executivo da Astaz",
} as const;

/**
 * Números da operação. A base é a média de 10 viagens por semana desde 2022,
 * arredondada para baixo — forma defensável de publicar uma estimativa
 * operacional.
 *
 * Viagem e passageiro medem coisas diferentes: a mesma pessoa repete o mesmo
 * trajeto muitas vezes. É justamente a razão entre os dois (cerca de dez
 * viagens por cliente) que prova recorrência, e por isso os dois números só
 * aparecem juntos.
 */
export const numerosAstaz = [
  { value: "2022", label: "Em operação desde" },
  { value: "2.000+", label: "Viagens realizadas" },
  { value: "200+", label: "Passageiros atendidos" },
  { value: "10", label: "Empresas com atendimento recorrente" },
] as const;

export const recorrencia = {
  title: "O que os números dizem",
  paragraphs: [
    "A conta dá cerca de dez viagens por cliente. É o que acontece quando as pessoas voltam: metade delas contrata de novo, e dez empresas mantêm atendimento recorrente com a Astaz.",
  ],
} as const;

/**
 * Pontualidade descrita como procedimento, não como promessa.
 *
 * A antecedência no embarque é combinada com cada cliente — não existe número
 * padrão, e publicar um ("chegamos 15 minutos antes") criaria uma promessa que
 * a operação não fez.
 */
export const pilares = [
  {
    title: "Como a pontualidade acontece",
    intro: "Pontualidade não é promessa, é procedimento.",
    items: [
      "A viagem é confirmada com você na véspera.",
      "O trajeto é estudado antes, considerando trânsito e horário.",
      "Se o destino é aeroporto, o voo é acompanhado — voo que atrasa ou adianta muda o plano antes de você precisar avisar.",
      "O horário de embarque é o que foi combinado com você, não uma estimativa de aplicativo.",
    ],
  },
  {
    title: "Discrição",
    intro:
      "O veículo não leva identificação da empresa, e os vidros têm película dentro do que a lei permite. Ninguém precisa saber quem está no carro.",
    items: [
      "O motorista segue o ritmo do passageiro: conversa se houver vontade de conversar, silêncio se não houver.",
      "O que acontece na viagem não sai da viagem — nem quem viajou, nem para onde, nem o que foi dito.",
      "Passageiro não vira conteúdo. Quando há foto, é porque ele mesmo pediu.",
    ],
  },
] as const;

export const interiorAstaz = {
  title: "O carro, por dentro",
  paragraphs: [
    "Água e algo para comer esperam você no banco de trás, em toda viagem, sem precisar pedir.",
    "A frota é higienizada diariamente: o veículo sai limpo por dentro e por fora e volta para a rotina antes do próximo passageiro. A manutenção é feita em dia, sem exceção — o carro é a ferramenta central do trabalho, e veículo com problema significa compromisso perdido.",
  ],
  image: "/images/sobre-astaz-interior.webp",
  imageAlt:
    "Banco traseiro do veículo executivo da Astaz, com água e um lanche à disposição do passageiro",
} as const;

export const preparoAstaz = {
  title: "Preparo",
  description:
    "Condução defensiva, primeiros socorros e inglês avançado — o que resolve o embarque de um passageiro estrangeiro sem intermediário.",
} as const;

export const paraEmpresas = {
  title: "Para empresas",
  description:
    "A Astaz é pessoa jurídica com CNPJ ativo e emite nota fiscal em todo atendimento. Reembolso, prestação de contas e contrato ficam resolvidos, sem improviso na hora de fechar o mês.",
  whatsappMessage:
    "Olá, ASTAZ! Gostaria de conversar sobre atendimento corporativo recorrente.",
} as const;
