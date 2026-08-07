/**
 * Política de Privacidade — fonte única de verdade da página
 * `/politica-de-privacidade`.
 *
 * Regra que governa este arquivo: só descrever o que o site realmente faz.
 * Desde a publicação de `/contato`, o site TEM um formulário — mas continua
 * sem backend: o formulário não envia nada para servidor nosso, só monta uma
 * mensagem de WhatsApp no navegador da própria pessoa (ver
 * `src/components/ui/quote-form.tsx`). Essa distinção é o que precisa ficar
 * claro no texto — "tem formulário" e "não tem backend" não se contradizem,
 * e a segunda afirmação continua verificável e forte. Retenção exata de cada
 * provedor (Google, Meta) não é algo que dá para confirmar aqui — por isso o
 * texto aponta para a política de cada um em vez de inventar um prazo.
 *
 * Ao adicionar uma nova tag/cookie no GTM, revise a seção `tecnologias` no
 * mesmo commit — é a lista que descreve o que efetivamente roda no site.
 */

export const privacidadeIntro = {
  eyebrow: "Privacidade",
  title: "Política de Privacidade",
  description:
    "Este documento explica quais dados este site coleta, com quem compartilha e como você pode controlar isso — em linguagem direta, sem juridiquês.",
  lastUpdated: "7 de agosto de 2026",
} as const;

/** Item de lista simples, ou com link quando aponta para a política de um terceiro. */
export type PoliticaItem = string | { label: string; href: string };

export type PoliticaSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  items?: readonly PoliticaItem[];
};

export const politicaSections: readonly PoliticaSection[] = [
  {
    id: "quem-somos",
    title: "Quem trata os seus dados",
    paragraphs: [
      "Este site é operado por Astaz Transporte Executivo (CNPJ 48.403.098/0001-54), empresa de transporte executivo sediada em Balneário Camboriú, SC.",
      "Este site tem um formulário de orçamento, mas não tem banco de dados: os dados que você digita não são enviados a nenhum servidor nosso. O formulário só monta uma mensagem, que abre no seu próprio WhatsApp para você revisar e enviar — a conversa em si acontece fora desta página. O que este documento descreve é o que acontece enquanto você navega, incluindo o preenchimento do formulário — antes de qualquer conversa começar.",
    ],
  },
  {
    id: "o-que-coletamos",
    title: "O que coletamos enquanto você navega",
    paragraphs: [
      "O que você digita no formulário de orçamento (data, endereços, número de passageiros e semelhantes) não é enviado a nós nem armazenado por este site — ele só monta a mensagem que abre no seu WhatsApp. O que este site efetivamente coleta é outra coisa: dado automático, via cookies e tecnologias semelhantes, e só depois da sua autorização no aviso que aparece na primeira visita:",
    ],
    items: [
      "Páginas visitadas, tempo de navegação e origem do acesso (Google Analytics 4)",
      "Cliques no botão de WhatsApp, para medir qual página gera mais contato (Google Analytics 4 e Meta Pixel)",
      "Identificadores de navegador usados para mostrar anúncios mais relevantes no Instagram e Facebook (Meta Pixel)",
    ],
  },
  {
    id: "cookies",
    title: "Cookies e tecnologias de terceiros em uso",
    paragraphs: [
      "Os três itens abaixo passam pelo Google Tag Manager, a ferramenta que organiza o disparo de cada um. Nenhum é ativado antes da sua escolha no aviso de cookies — recusar é tão fácil quanto aceitar, e a decisão pode ser revista a qualquer momento apagando os cookies do navegador.",
    ],
    items: [
      "Google Tag Manager — carrega as demais ferramentas; não coleta dado por conta própria",
      {
        label:
          "Google Analytics 4 — mede audiência e conversão. Política de privacidade do Google",
        href: "https://policies.google.com/privacy",
      },
      {
        label:
          "Meta Pixel — mede resultado de campanhas e permite anúncios direcionados no Instagram/Facebook. Política de privacidade do Meta",
        href: "https://www.facebook.com/privacy/policy/",
      },
    ],
  },
  {
    id: "compartilhamento",
    title: "Com quem os dados são compartilhados",
    paragraphs: [
      "Google e Meta processam os dados descritos acima segundo as próprias políticas de privacidade, vinculadas na seção anterior. A Astaz não vende, aluga nem troca dado de visitante com nenhum terceiro além desses dois provedores, e apenas para as finalidades descritas aqui.",
    ],
  },
  {
    id: "base-legal",
    title: "Base legal",
    paragraphs: [
      "O tratamento descrito neste documento tem como base o seu consentimento (art. 7º, inciso I, e art. 8º da Lei Geral de Proteção de Dados — Lei nº 13.709/2018), coletado no aviso de cookies antes de qualquer tag de medição ou publicidade ser ativada.",
    ],
  },
  {
    id: "seus-direitos",
    title: "Seus direitos",
    paragraphs: [
      "A LGPD garante a você, titular dos dados, os seguintes direitos:",
    ],
    items: [
      "Confirmar se tratamos algum dado seu, e acessar esse dado",
      "Corrigir dado incompleto, inexato ou desatualizado",
      "Solicitar a exclusão dos dados tratados com base no seu consentimento",
      "Revogar o consentimento a qualquer momento, sem afetar a navegação anterior",
      "Solicitar a portabilidade dos dados a outro fornecedor, quando aplicável",
    ],
  },
  {
    id: "como-exercer",
    title: "Como exercer esses direitos",
    paragraphs: [
      "Fale com a Astaz pelo WhatsApp ou telefone informados no rodapé deste site. Como não há conta de usuário nem dado armazenado em nosso servidor, a forma mais rápida de revogar o consentimento de cookies é recusá-lo no aviso ou limpar os cookies do navegador — isso interrompe a coleta pelo Google Analytics e pelo Meta Pixel imediatamente.",
    ],
  },
  {
    id: "alteracoes",
    title: "Alterações nesta política",
    paragraphs: [
      "Esta política pode ser atualizada para refletir mudanças nas ferramentas usadas pelo site ou na legislação aplicável. A data no topo desta página sempre indica a versão vigente.",
    ],
  },
] as const;
