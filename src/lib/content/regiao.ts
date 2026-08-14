/**
 * Região atendida — a descrição de cada cidade da área de cobertura, exibida
 * no bloco "Região atendida" de `/destinos`.
 *
 * **O que entra aqui**: o papel operacional da cidade — por que alguém pede
 * uma corrida de lá ou para lá. Nada de enquadramento turístico genérico
 * ("cidade charmosa do litoral"), que ocupa espaço sem informar.
 *
 * **O que NÃO entra**: distância e tempo de trajeto. Nas páginas de destino
 * eles fazem sentido porque a origem é explícita (Balneário Camboriú ↔ X).
 * Aqui não há origem definida — quem lê pode estar em Itapema indo para o
 * aeroporto de Florianópolis —, então um "40 km" seria um número correto no
 * lugar errado. Distância só em página de rota, e só vinda de briefing
 * (ver o cabeçalho de `content/destinos.ts`).
 *
 * O `Record` é tipado pela própria `businessInfo.areaServed`: o TypeScript
 * exige uma descrição para cada cidade da cobertura e recusa chave que não
 * esteja lá. Ou seja, a sincronia com o GBP continua sendo resolvida em um
 * lugar só (`src/lib/site.ts`) — ao adicionar uma cidade no perfil e na
 * `areaServed`, o build quebra aqui até que ela ganhe uma descrição.
 *
 * `destinoSlug` é opcional e é o gancho de link interno: quando existe e o
 * destino está publicado, o nome da cidade vira link para a página da rota.
 * As páginas de cidade previstas na Fase 2 (`/destinos/itajai`,
 * `/destinos/bombinhas`, `/destinos/blumenau` — ver
 * `docs/seo/mapeamento-de-paginas.md`) só precisam declarar o slug aqui para
 * receberem o link; enquanto não existirem, o nome fica em texto puro.
 */

import { businessInfo } from "@/lib/site";

type CidadeAtendida = (typeof businessInfo.areaServed)[number];

export type CidadeDescrita = {
  descricao: string;
  /** `slug` de um destino de `content/destinos.ts`. Só vira link se publicado. */
  destinoSlug?: string;
};

export const regiaoAtendida: Record<CidadeAtendida, CidadeDescrita> = {
  "Balneário Camboriú": {
    descricao:
      "Base da operação. Atendemos hotéis, residenciais e escritórios do centro e da orla, com saída em qualquer horário mediante agendamento.",
  },
  Camboriú: {
    descricao:
      "Vizinha imediata de Balneário Camboriú, integrada ao mesmo dia a dia. Deslocamentos diários e conexões com os aeroportos da região.",
  },
  Itajaí: {
    descricao:
      "Porto, terminal de cruzeiros e polo empresarial. Atendemos embarques e desembarques de navio, compromissos corporativos e conexões com Navegantes.",
  },
  Navegantes: {
    descricao:
      "Onde fica o aeroporto mais próximo de Balneário Camboriú. Recepção no desembarque e acompanhamento do voo, inclusive na madrugada.",
    destinoSlug: "aeroporto-navegantes",
  },
  Itapema: {
    descricao:
      "No litoral entre Balneário Camboriú e Florianópolis. Transfers de hotel, trajetos de veraneio e conexões com os dois aeroportos da região.",
  },
  Bombinhas: {
    descricao:
      "Península de acessos estreitos e estacionamento disputado no verão. O transfer resolve ida e volta no mesmo dia, sem depender de vaga.",
  },
  Penha: {
    descricao:
      "Cidade do Beto Carrero World. Ida e volta combinadas antes do passeio, com horário de retorno definido no agendamento.",
    destinoSlug: "beto-carrero",
  },
  Brusque: {
    descricao:
      "Polo têxtil e destino de compras do Vale do Itajaí. Atendemos roteiros com várias paradas e deslocamentos corporativos.",
  },
  Blumenau: {
    descricao:
      "Centro industrial do Vale do Itajaí. Deslocamentos corporativos ao longo do ano e demanda concentrada durante a Oktoberfest.",
  },
  Joinville: {
    descricao:
      "Maior cidade de Santa Catarina, com aeroporto próprio e movimento corporativo constante. Atendemos transfers de e para o terminal.",
  },
  "São Francisco do Sul": {
    descricao:
      "Ilha com porto e centro histórico, no norte do litoral catarinense. Embarques, visitas técnicas e roteiros com múltiplas paradas.",
  },
  Florianópolis: {
    descricao:
      "Capital do estado e segundo aeroporto internacional da região. Recepção no desembarque e trajetos para o centro, praias e centros de eventos.",
    destinoSlug: "aeroporto-florianopolis",
  },
  Curitiba: {
    descricao:
      "Capital do Paraná e o trajeto mais longo que atendemos. Comum quando o voo aterrissa em Curitiba e o destino final é o litoral catarinense.",
  },
  "São José dos Pinhais": {
    descricao:
      "Onde fica o Aeroporto Afonso Pena, que serve Curitiba. Percurso longo, sempre agendado com antecedência e com o voo acompanhado.",
  },
};
