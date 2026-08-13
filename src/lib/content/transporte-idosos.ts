/**
 * Transporte para Idosos — fonte única de verdade de
 * `/servicos/transporte-idosos`.
 *
 * Origem dos dados: `docs/seo/briefings/transporte-idosos.md`. Todo dado
 * operacional aqui (política de espera, apoio no embarque, aviso à família,
 * mobilidade reduzida, destinos) foi confirmado pela operação — nenhum deles
 * pode ser alterado sem passar pelo briefing primeiro.
 *
 * LÉXICO — leia antes de editar qualquer string deste arquivo. O objeto da
 * frase decide o que pode ser publicado: quando o objeto é a *viagem*, a
 * palavra é logística ("companhia", "apoio no embarque"); quando o objeto é a
 * *pessoa*, a mesma ideia vira serviço de saúde e não pode aparecer
 * ("acompanhante", "cuidador", "paciente", "remoção", "orientação médica").
 * O léxico completo, com a tabela de substituições, está no briefing.
 *
 * O que ficou deliberadamente de fora, e por quê:
 * - Foto de pessoa: toda a iconografia do gênero ("idoso sendo ajudado") vem
 *   carregada de cadeira de rodas, voluntário e cuidador — exatamente o campo
 *   semântico que a página não pode evocar. A imagem escolhida mostra o banco
 *   traseiro vazio: fala do serviço, e deixa o contexto de idoso por conta do
 *   texto. Ver `docs/imagens-de-referencia.md` para as reprovadas.
 * - Continuidade do motorista em atendimentos recorrentes: pergunta em aberto
 *   no briefing (seção 5). Não afirmar até confirmar.
 * - Casos de recusa alem da cadeira motorizada e do passageiro acamado: eram
 *   sugestão do briefing, não resposta confirmada pela operação — não entram
 *   na página.
 * - Preço: padrão do site, não expor.
 */

export const transporteIdososIntro = {
  eyebrow: "Serviço",
  /**
   * Alimenta o `<h1>` da página, e por isso traz a cidade: a intenção
   * registrada no mapeamento é local, o `<title>` já é "Transporte para Idosos
   * em Balneário Camboriú" e o `h1` é o sinal on-page de maior peso — os dois
   * precisam contar a mesma história.
   *
   * O rótulo curto continua em `servicos.ts` (`title`), que é o que aparece no
   * card do hub e no fim do breadcrumb, onde a cidade só faria repetição.
   */
  title: "Transporte para Idosos em Balneário Camboriú",
  /**
   * Abre falando com quem decide, não com quem viaja — é o filho ou a filha
   * organizando o deslocamento, muitas vezes de outra cidade. A dúvida nº 1
   * levantada pela operação foi "vai dar tudo certo sem eu estar lá?".
   */
  description:
    "Quem decide contratar quase nunca é quem viaja. É o filho ou a filha organizando a rotina de consultas, exames e compromissos do pai, da mãe ou de um avô — muitas vezes morando em outra cidade. O motorista atende de porta a porta, a espera durante o atendimento está incluída na viagem, e cada etapa do trajeto é avisada a quem ficou de fora.",
  whatsappMessage:
    "Olá, ASTAZ! Gostaria de um orçamento para transporte de idosos.",
  /**
   * Banco de imagem (Pexels, foto de Luke Miller). Banco traseiro vazio, sem
   * pessoa e sem emblema de fabricante — verificado em alta resolução, só o
   * rótulo "ISOFIX", que é norma técnica e não marca.
   *
   * NÃO é um veículo da frota da Astaz, por isso `imageIsPlaceholder: true`.
   * Serve principalmente como imagem de compartilhamento: o CTA desta página é
   * WhatsApp, e é lá que a família manda o link para os irmãos — link sem
   * preview perde muito. Sai quando houver foto real.
   */
  image: "/images/transporte-idosos.webp",
  imageAlt:
    "Banco traseiro de um veículo executivo, em couro preto, com cintos de segurança à vista",
  imageIsPlaceholder: true,
} as const;

/**
 * O que o serviço inclui — respostas confirmadas da seção 3 do briefing.
 */
export const oQueIncluiIdosos = [
  {
    title: "Apoio no embarque e no desembarque",
    description:
      "O motorista desce, abre a porta e oferece o braço de apoio na entrada e na saída do veículo.",
  },
  {
    title: "Companhia na sala de espera",
    description:
      "Durante a consulta ou o exame, o motorista aguarda no local — não no carro. O tempo depende da necessidade do dia.",
  },
  {
    title: "Paradas do dia a dia",
    description:
      "Farmácia, banco e mercado também fazem parte do trajeto, com o mesmo apoio no embarque e no desembarque.",
  },
  {
    title: "No ritmo de quem viaja",
    description: "O trajeto segue o tempo do passageiro, não um cronômetro.",
  },
] as const;

/**
 * O protocolo de avisos — o maior diferencial confirmado pela operação (seção
 * 3 do briefing). Já é padrão hoje, não precisa ser pedido.
 */
export const protocoloAvisos = {
  title: "Você é avisado a cada etapa",
  body: "A família recebe uma mensagem em cada momento do trajeto: a chegada ao endereço combinado, o encontro com o passageiro, a chegada ao compromisso, a saída e o retorno para casa. É o padrão do serviço — não precisa ser solicitado.",
} as const;

/**
 * Espera inclusa — o argumento que decide a venda (seção 2 do briefing).
 */
export const esperaInclusa = {
  title: "A espera já está inclusa",
  body: "A ida e a volta são contratadas juntas, com a espera durante a consulta ou o exame incluída no valor combinado. Se o horário previsto se estender, não há cobrança adicional pelo tempo parado.",
} as const;

/**
 * Mobilidade reduzida — seção 4 do briefing, obrigatória e integralmente
 * confirmada. Nada aqui é dedução: cada frase corresponde a uma resposta
 * direta da operação.
 */
export const mobilidadeReduzida = {
  title: "Mobilidade reduzida",
  paragraphs: [
    "Atendemos passageiro que usa cadeira de rodas dobrável — ela vai no porta-malas, e o passageiro viaja no banco. Andador e bengala não têm restrição.",
    "Nenhum veículo da frota é adaptado. Por isso, cadeira de rodas motorizada não pode ser transportada.",
    "Passageiro acamado também não é atendido: é uma atividade de saúde regulada, fora do que a Astaz oferece.",
    "Uma pessoa da família pode ir junto, sem custo adicional.",
  ],
} as const;

/**
 * Formato recorrente — seção 2 do briefing.
 */
export const compromissosRecorrentes = {
  title: "Compromissos recorrentes",
  body: "Consultas, exames e sessões de fisioterapia costumam se repetir. Por isso o serviço também é contratado por semana, por mês ou por pacote de sessões, combinado no orçamento.",
  /**
   * Saída contextual para `/contato`. Esta página não tinha link editorial
   * nenhum para a rota de conversão — quem chegava aqui só saía pelo menu.
   * O bloco de agenda recorrente é o lugar natural: é quem tem uma sequência
   * de sessões para organizar que ganha com o formulário, e não com uma
   * mensagem escrita do zero.
   */
  nota: "Quem já tem as datas em mãos pode enviar tudo de uma vez: o formulário reúne endereço, horários e observações em uma mensagem só.",
  notaLinkLabel: "Solicitar um orçamento",
} as const;

/**
 * Destinos confirmados — o ativo de ranqueamento da página (seção 5 do
 * briefing). Cada nome foi verificado por endereço real antes de entrar aqui.
 * NUNCA adicione um destino sem essa verificação — nome de hospital errado
 * numa página institucional custa mais que o ganho de SEO.
 */
export type DestinoAtendido = {
  nome: string;
  cidade: string;
};

export const destinosAtendidos: readonly DestinoAtendido[] = [
  { nome: "Hospital Regional Ruth Cardoso", cidade: "Balneário Camboriú" },
  { nome: "Hospital Unimed Litoral", cidade: "Balneário Camboriú" },
  { nome: "Hospital do Coração", cidade: "Balneário Camboriú" },
  { nome: "Centro Médico San Paolo", cidade: "Balneário Camboriú" },
  { nome: "Kozma Diagnóstico por Imagem", cidade: "Balneário Camboriú" },
  { nome: "Clínica São Lucas", cidade: "Balneário Camboriú" },
  { nome: "Hospital Marieta Konder Bornhausen", cidade: "Itajaí" },
  { nome: "Clínica São Lucas", cidade: "Itajaí" },
  { nome: "Hospital Municipal de Penha", cidade: "Penha" },
] as const;

/**
 * Agrupa os destinos por cidade, na ordem de aparição da primeira ocorrência.
 */
export function destinosPorCidade(): { cidade: string; nomes: string[] }[] {
  const grupos = new Map<string, string[]>();
  for (const destino of destinosAtendidos) {
    const lista = grupos.get(destino.cidade) ?? [];
    lista.push(destino.nome);
    grupos.set(destino.cidade, lista);
  }
  return Array.from(grupos, ([cidade, nomes]) => ({ cidade, nomes }));
}

export const destinosNota =
  "O Hospital do Coração, a Kozma e o Centro Médico San Paolo ficam no mesmo bairro, a poucos números de distância — o que reduz o tempo entre uma consulta e um exame no mesmo dia.";

export const destinosFechamento =
  "Atendemos também outros hospitais, clínicas e laboratórios da região, combinados no momento do agendamento.";

/**
 * FAQ — rascunho escrito a partir das respostas confirmadas das seções 2, 3 e
 * 4 do briefing. AINDA PENDENTE de revisão final da operação sobre o texto
 * exato (o conteúdo é fiel aos dados, a redação não foi validada frase a
 * frase). Vira `FAQPage` no JSON-LD.
 */
export const transporteIdososFaq = [
  {
    question: "O motorista espera durante a consulta?",
    answer:
      "Espera. A ida e a volta são contratadas juntas, com a espera inclusa — se a consulta atrasar, não há cobrança adicional pelo tempo. O horário de retorno é combinado antes e conferido no local.",
  },
  {
    question: "Vocês avisam a família quando ele chega?",
    answer:
      "Sim, em todas as etapas: na chegada ao endereço, no encontro com o passageiro, na chegada ao destino, na saída e no retorno para casa. É o padrão do serviço — não precisa ser pedido.",
  },
  {
    question: "Meu pai ou minha mãe usa cadeira de rodas. Vocês atendem?",
    answer:
      "Atendemos, desde que a cadeira seja dobrável: ela vai no porta-malas e o passageiro viaja no banco. Nenhum veículo da frota é adaptado, então cadeira motorizada não pode ser transportada. Andador e bengala não têm restrição.",
  },
  {
    question: "Alguém da família pode ir junto?",
    answer:
      "Pode, sem custo adicional. O veículo é definido na reserva conforme o número de pessoas.",
  },
  {
    question: "Dá para contratar para todas as sessões do mês?",
    answer:
      "Dá. Além do agendamento avulso, o serviço tem formato semanal, mensal e por pacote de sessões, combinado no orçamento.",
  },
  {
    question: "Com quanto tempo de antecedência preciso agendar?",
    answer:
      "Não há prazo mínimo — atendemos no mesmo dia conforme a disponibilidade da agenda. Para consultas já marcadas, agendar antes garante o horário.",
  },
] as const;

export const transporteIdososCta = {
  title: "Agende o transporte",
  body: "Informe o compromisso, o endereço e o horário. Nossa equipe retorna com a confirmação e os detalhes do atendimento.",
} as const;
