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
  /**
   * Recorte 5:4 do original, que é retrato. No hero a imagem ocupa uma coluna
   * à direita e some num degradê à esquerda — é o que permite usar uma foto
   * vertical em faixa larga sem esticar nem cortar o veículo.
   */
  image: "/images/sobre-astaz-hero.webp",
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
   *
   * O tamanho da equipe também ficou fora por decisão do proprietário. O
   * argumento que interessa não é o número: é que quem responde a mensagem é
   * quem acompanha a reserva. Isso se sustenta por procedimento, e procedimento
   * não precisa de headcount para ser verificável.
   */
  paragraphs: [
    "Quem conduz a Astaz é Vinícius Dalpra Pieper, que atende empresários, investidores, turistas e artistas em Balneário Camboriú e região, direto no veículo.",
    "O que acontece antes da viagem — organizar a agenda, confirmar a reserva, acompanhar o voo — fica com quem responde a sua mensagem. Do primeiro contato ao destino, quem atende você sabe quem vai dirigir.",
  ],
  /**
   * Duas fotos, dois trabalhos diferentes — é por isso que nenhuma substitui a
   * outra.
   *
   * O retrato responde "com quem eu vou entrar num carro?": rosto nítido e
   * olhar direto, que é o que o visitante hesitante procura nesta página. Por
   * isso é a imagem principal, com legenda ligando o rosto ao nome.
   *
   * A foto ao volante responde "isso existe mesmo?": operação real, veículo
   * real, sem estúdio. Entra menor e como apoio, porque prova contexto, não
   * identidade — mas prova algo que retrato de estúdio nenhum prova.
   */
  retrato: {
    image: "/images/sobre-astaz-vinicius-perfil.webp",
    imageAlt:
      "Vinícius Dalpra Pieper, de terno azul-marinho e gravata, braços cruzados, em retrato de estúdio",
    name: "Vinícius Dalpra Pieper",
    role: "Motorista executivo",
  },
  aoVolante: {
    image: "/images/sobre-astaz-motorista.webp",
    imageAlt:
      "Vinícius Dalpra Pieper, de terno, no banco do motorista do veículo executivo da Astaz, visto do banco traseiro de couro caramelo",
  },
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
    "A conta dá cerca de dez viagens por cliente. Metade dos passageiros contrata a Astaz mais de uma vez, e dez empresas mantêm atendimento recorrente.",
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
  /**
   * A discrição aqui é do passageiro, não do veículo.
   *
   * Até 08/2026 esta seção dizia que o carro não levava identificação da
   * empresa. Deixou de ser verdade quando o adesivo da Astaz foi instalado nas
   * portas, e a frase saiu no mesmo dia — numa página cuja função é ser
   * verificável, uma afirmação que o cliente desmente ao ver o carro chegar
   * custa mais que o argumento que ela sustentava.
   *
   * O que segue de pé, e é o que o passageiro realmente contrata: de fora não
   * se vê quem está dentro, e nada do que acontece na viagem sai dela.
   */
  {
    title: "Discrição",
    intro:
      "Os vidros têm película dentro do que a lei permite: protege o interior do sol e, de fora, não se enxerga quem está no banco de trás.",
    items: [
      "O motorista segue o ritmo do passageiro: conversa se houver vontade de conversar, silêncio se o trajeto for para trabalhar ou descansar.",
      "O que acontece na viagem não sai da viagem — nem quem viajou, nem para onde, nem o que foi dito.",
      "A Astaz não fotografa nem filma passageiro. Quando existe uma foto publicada, é porque o próprio passageiro pediu.",
    ],
  },
] as const;

/**
 * A higienização é descrita por gatilho ("antes de cada atendimento"), não por
 * frequência ("diariamente"): é a versão confirmada pela operação e a que o
 * passageiro consegue verificar ao embarcar.
 *
 * Sobre "mimo": a palavra é da operação e fica. Ela pertence ao vocabulário de
 * hospitalidade, não ao de informalidade — o que o Manifesto §10 barra é o
 * adjetivo elogioso ("quitutes deliciosos"), não o substantivo. O que sustenta
 * o registro aqui é o fato de o mimo variar: item escolhido a cada atendimento
 * diz mais sobre cuidado do que qualquer adjetivo diria.
 *
 * A água não é prometida gelada porque não é gelada em toda viagem.
 */
export const interiorAstaz = {
  title: "O carro, por dentro",
  paragraphs: [
    "No banco de trás, água mineral e um mimo esperam por você — em toda viagem, sem precisar pedir. O mimo muda de uma viagem para outra: é escolhido a cada atendimento, não é item de estoque.",
    "Antes de cada atendimento o veículo passa por higienização e inspeção: sai limpo por dentro e por fora e é conferido antes de o próximo passageiro embarcar. A manutenção segue plano preventivo, sem exceção — o carro é a ferramenta central do trabalho, e veículo com problema significa compromisso perdido.",
  ],
  image: "/images/sobre-astaz-interior.webp",
  imageAlt:
    "Banco traseiro em couro caramelo do veículo executivo da Astaz, com uma garrafa de água no porta-copos e um pacote de biscoitos sobre o apoio de braço",
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
} as const;

/**
 * Fechamento da página. A mensagem é genérica de propósito: quem chega até aqui
 * pode ser passageiro particular ou empresa, e abrir o WhatsApp já falando de
 * contrato corporativo erraria a metade das pessoas.
 */
export const fechamentoSobre = {
  title: "Vamos combinar a sua viagem",
  description:
    "Informe data, horário, origem e destino. A proposta volta com a configuração de veículo adequada e o horário de embarque combinado com você.",
  whatsappMessage:
    "Olá, ASTAZ! Vi a página sobre a empresa e gostaria de solicitar um orçamento.",
  googleLinkLabel: "Ver a Astaz no Google",
} as const;
