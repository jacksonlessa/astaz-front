/**
 * Frota — fonte única de verdade da página `/frota` e da seção de frota da home.
 *
 * Modelos e capacidades vieram da Astaz. Capacidade de bagagem NÃO é publicada
 * em lugar nenhum do site: não existe um número definido de volumes por
 * veículo, e a bagagem é alinhada com o cliente no momento do orçamento. Um
 * número publicado aqui viraria promessa que a operação não fez.
 *
 * NÃO acrescente aqui característica de veículo que não tenha sido confirmada
 * pela operação — nem mesmo especificação pública do fabricante. O cliente usa
 * esta página para decidir qual veículo pedir; errar aqui gera problema no dia
 * do embarque, não só no site.
 *
 * A categoria carrega a prosa (escrita uma vez) e as configurações carregam só
 * os números. É o que impede que três Sprinters virem três cards idênticos com
 * um número trocado.
 */

export type ConfiguracaoFrota = {
  /** Modelo ou configuração de lugares. Vira o rótulo da linha. */
  modelo: string;
  passageiros: number;
  /** Situação em que esta configuração é a escolha certa, em uma frase. */
  indicadoPara: string;
};

export type CategoriaFrota = {
  /** Categoria comercial, usada como título do card. */
  title: string;
  /**
   * Blurb reutilizado na home, em `/frota` e nas páginas de destino. Vale para
   * todas as configurações da categoria — mantenha neutro quanto a capacidade,
   * porque o número exato já vive em cada `ConfiguracaoFrota`.
   */
  description: string;
  /**
   * Foto do modelo principal da categoria (a primeira `configuracao`). Usada
   * na seção de frota da home e em `/frota` — um só campo para não duplicar
   * caminho de imagem entre os dois lugares.
   */
  image: string;
  imageAlt: string;
  /** A primeira é a configuração principal da categoria. */
  configuracoes: readonly ConfiguracaoFrota[];
};

export const categoriasFrota: readonly CategoriaFrota[] = [
  {
    title: "Sedã Executivo",
    description:
      "Elegância discreta e conforto de sedã para quem viaja sozinho, em dupla ou em família.",
    image: "/images/frota-sedan-nissan-sentra.jpg",
    imageAlt: "Nissan Sentra preto, sedã executivo da frota Astaz",
    configuracoes: [
      {
        modelo: "Nissan Sentra",
        passageiros: 4,
        indicadoPara:
          "Transfers de aeroporto, reuniões e deslocamentos executivos do dia a dia.",
      },
    ],
  },
  {
    title: "SUV Premium",
    description:
      "Posição de condução mais alta e amplitude interna, para trajetos que pedem mais espaço a bordo.",
    image: "/images/frota-suv-aion-v.jpg",
    imageAlt: "AION V preto, SUV premium da frota Astaz",
    configuracoes: [
      {
        modelo: "AION V",
        passageiros: 4,
        indicadoPara:
          "Transfers de aeroporto e trajetos de estrada com conforto adicional.",
      },
      {
        modelo: "Jeep Commander",
        passageiros: 6,
        indicadoPara:
          "Famílias e grupos pequenos que preferem seguir todos no mesmo veículo.",
      },
    ],
  },
  {
    title: "Van Executiva",
    description:
      "Capacidade ampliada sem abrir mão do padrão executivo, em três configurações de lugares.",
    image: "/images/frota-van-sprinter.jpg",
    imageAlt: "Mercedes-Benz Sprinter preta, van executiva da frota Astaz",
    configuracoes: [
      {
        modelo: "Sprinter 9 lugares",
        passageiros: 9,
        indicadoPara:
          "Famílias grandes, comitivas e grupos que seguem juntos no mesmo transfer.",
      },
      {
        modelo: "Sprinter 18 lugares",
        passageiros: 18,
        indicadoPara:
          "Fretamento de equipes, delegações e grupos em programação de evento.",
      },
      {
        modelo: "Sprinter 20 lugares",
        passageiros: 20,
        indicadoPara:
          "Fretamento de grupos maiores, com roteiro e paradas combinados antes.",
      },
    ],
  },
];

/**
 * Faixa de passageiros da categoria, já formatada ("4 passageiros", "9 a 20
 * passageiros"). Derivada das configurações para que a capacidade nunca precise
 * ser escrita à mão em dois lugares.
 */
export function faixaPassageiros(categoria: CategoriaFrota): string {
  const valores = categoria.configuracoes.map((config) => config.passageiros);
  const minimo = Math.min(...valores);
  const maximo = Math.max(...valores);

  return minimo === maximo
    ? `${maximo} passageiros`
    : `${minimo} a ${maximo} passageiros`;
}

/**
 * Itens confirmados pela operação. Cadeirinha é frequentemente o item que
 * decide a contratação por famílias — por isso aparece com destaque próprio.
 *
 * O item de bagagem existe para responder à pergunta sem publicar um número:
 * a dúvida é real e chega no WhatsApp, mas a capacidade é alinhada caso a caso.
 */
export const itensFrota = [
  {
    title: "Bebê conforto",
    description:
      "Disponível para crianças de até 13 kg, mediante solicitação no momento da reserva. Informe a idade e o peso da criança para prepararmos o veículo.",
  },
  {
    title: "Bagagem",
    description:
      "A acomodação da bagagem é definida junto com o orçamento, conforme o veículo, o número de passageiros e o tipo de viagem. Informe o que vai com você e indicamos a configuração adequada.",
  },
  {
    title: "Grupos e eventos",
    description:
      "As configurações de 18 e 20 lugares atendem delegações, equipes e programações de evento. Informe o número de participantes e o roteiro para definirmos a configuração.",
  },
] as const;

/**
 * Nota exibida abaixo dos cards de veículo nas páginas de destino.
 *
 * Vive aqui, e não no componente, porque é copy de negócio: repete em toda
 * página de destino e precisa mudar em um lugar só quando a operação mudar.
 */
export const notaVeiculosDestino =
  "Bebê conforto para crianças de até 13 kg mediante solicitação na reserva. A acomodação da bagagem é definida junto com o orçamento.";
