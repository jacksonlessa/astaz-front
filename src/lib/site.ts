import { routes } from "@/lib/routes";

export const siteConfig = {
  name: "ASTAZ",
  tagline: "Transporte Executivo",
  /**
   * Meta description da home. Não confundir com `businessInfo.description`:
   * esta é a linha que aparece no resultado de busca e obedece ao limite de
   * 120–158 caracteres documentado em `seo.ts`.
   */
  description:
    "Transporte executivo em Balneário Camboriú: transfers para os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba, corporativo e eventos.",
  baseCity: "Balneário Camboriú, SC",
  airports: ["Navegantes", "Florianópolis", "Joinville", "Curitiba"],
  phone: "+55 47 99726-9700",
  phoneRaw: "5547997269700",
  whatsappMessage:
    "Olá, ASTAZ! Gostaria de solicitar um orçamento para transporte executivo.",
  /**
   * COM `www`, e a escolha não é estética.
   *
   * O servidor responde 308 de `astaz.com.br` para `www.astaz.com.br`. Enquanto
   * esta constante ficou no domínio sem `www`, tudo o que deriva dela —
   * canonical, `og:url`, `<loc>` do sitemap, `Host` e `Sitemap` do robots.txt —
   * apontava para URLs que redirecionam. Um sitemap inteiro de redirects é o
   * que o Semrush acusou em 06/08/2026; o canonical apontando para redirect é
   * o problema maior, porque manda o buscador consolidar sinais numa URL que
   * não é a que serve a página.
   *
   * Se um dia a hospedagem inverter o redirect (www → raiz), esta linha muda
   * junto, no mesmo dia. Confira com:
   * `curl -sI https://astaz.com.br/ | grep -i location`
   */
  url: "https://www.astaz.com.br",
  /**
   * Imagem padrão de compartilhamento (Open Graph / Twitter Card).
   *
   * Sem isso definido, o Next.js não declara `og:image` nenhum e cada rede
   * social escolhe uma imagem por conta própria a partir do que encontra na
   * página — o resultado é imprevisível (já apareceu até carro de terceiro
   * nos previews). Path relativo porque `metadataBase` já resolve para
   * `siteConfig.url`.
   */
  /**
   * 1200×630 (proporção 1,91:1), que é o formato que WhatsApp, Facebook e
   * LinkedIn esperam. A versão anterior apontava para
   * `sobre-astaz-motorista.webp`, que é 1200×1500 — retrato. Em preview de
   * link, retrato é cortado com força nas laterais ou reduzido a miniatura
   * quadrada; num negócio em que o link circula por WhatsApp, é o preview
   * que decide se a pessoa abre.
   *
   * É um recorte da MESMA foto, não uma imagem de banco: continua sendo a
   * operação real. Se um dia entrar uma foto própria já em paisagem, troque
   * aqui e apague o recorte.
   */
  ogImage: {
    url: "/images/og-astaz-1200x630.jpg",
    width: 1200,
    height: 630,
    alt: "Vinícius Dalpra Pieper, de terno, no banco do motorista do veículo executivo da Astaz, visto do banco traseiro de couro caramelo",
  },
} as const;

/**
 * Dados cadastrais usados no JSON-LD.
 *
 * ESPELHO DO GOOGLE BUSINESS PROFILE — este objeto não é um lugar para
 * "melhorar" a informação. Cada campo deve bater literalmente com o que está
 * cadastrado no GBP; divergência de NAP (Name, Address, Phone) entre site e
 * perfil enfraquece o ranking local em vez de reforçá-lo. Ao alterar algo no
 * GBP, altere aqui no mesmo dia (e vice-versa).
 *
 * A Astaz é um *service-area business*: atende no local do cliente, sem
 * endereço público. Por isso não há `streetAddress` nem `geo` — declarar um
 * endereço físico aqui contradiria o GBP. A cobertura é expressa por
 * `areaServed`.
 */
export const businessInfo = {
  /** Nome exato no GBP. Difere de `siteConfig.name`, que é a marca visual. */
  businessName: "Astaz Transporte Executivo",
  /** Razão social do CNPJ, se houver. Omitido do schema enquanto for null. */
  legalName: null as string | null,
  /**
   * CNPJ da empresa. Informação pública e sinal forte de confiabilidade para
   * cliente corporativo — exibido no rodapé e declarado como `taxID` no
   * JSON-LD. Formatado como aparece em documento, não só dígitos.
   */
  taxId: "48.403.098/0001-54",
  /**
   * Perfil no Google, em forma canônica (derivada do CID do perfil). Link curto
   * de compartilhamento (`share.google/...`) não serve aqui: redireciona para
   * uma página de busca e carrega parâmetros de sessão que expiram.
   */
  googleProfileUrl: "https://maps.google.com/?cid=12272972188567551431",
  /** Categoria principal no GBP. */
  category: "Serviço de transporte",
  /**
   * Descrição cadastrada no GBP (limite de 750 caracteres), reaproveitada como
   * `description` do LocalBusiness no JSON-LD. Aqui em texto corrido; no GBP o
   * mesmo texto está quebrado em parágrafos. Ao editar a descrição do perfil,
   * atualize esta string no mesmo dia — divergência entre site e GBP confunde
   * o Google sobre qual é a entidade.
   */
  description:
    "A Astaz Transporte Executivo atende Balneário Camboriú e região com transfers para os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba. Também realizamos deslocamentos corporativos, transporte para eventos e ocasiões especiais e roteiros sob demanda com múltiplas paradas, sempre sob agendamento. Trabalhamos com veículos executivos, motoristas profissionais e acompanhamento de cada viagem, do primeiro contato ao desembarque. Pontualidade, discrição e conforto não são diferencial: são o combinado. Atendemos executivos, passageiros de aeroporto, hotéis, eventos e empresas que precisam de um serviço confiável em Santa Catarina. Mais que transporte. A tranquilidade de chegar bem.",
  addressLocality: "Balneário Camboriú",
  addressRegion: "SC",
  addressCountry: "BR",
  /** GBP: aberto 24 horas, todos os dias. */
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$$",
  /** Perfis oficiais — confirmam ao Google que site, GBP e Instagram são a mesma entidade. */
  sameAs: [
    "https://www.instagram.com/astaz.executivo/",
    "https://maps.google.com/?cid=12272972188567551431",
  ],
  /**
   * Área de cobertura. **O conjunto** precisa ser idêntico ao do GBP — cidade a
   * cidade, sem sobra dos dois lados. Antes de adicionar uma aqui, adicione-a
   * no perfil.
   *
   * A ORDEM não precisa bater, e não adianta tentar. O painel do GBP exibe as
   * áreas ordenadas pelo comprimento da string formatada ("Penha, SC, Brasil"
   * antes de "São Francisco do Sul, SC, 89240-000, Brasil") — é artefato de
   * renderização, não uma ordem que alguém escolheu. No JSON-LD, `areaServed` é
   * lido como conjunto: a ordem não é sinal de nada. Aqui a lista segue ordem
   * geográfica, do centro da operação para fora, porque é o que se lê melhor.
   *
   * Curitiba e São José dos Pinhais são as duas únicas fora de Santa Catarina.
   * Entraram porque o Aeroporto Afonso Pena (CWB) fica em São José dos Pinhais
   * e a rota existe de verdade — quase sempre no sentido aeroporto → Balneário
   * Camboriú, quando o voo do cliente aterrissa em Curitiba.
   */
  areaServed: [
    "Balneário Camboriú",
    "Camboriú",
    "Itajaí",
    "Navegantes",
    "Itapema",
    "Bombinhas",
    "Penha",
    "Brusque",
    "Blumenau",
    "Joinville",
    "São Francisco do Sul",
    "Florianópolis",
    "Curitiba",
    "São José dos Pinhais",
  ],
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.phoneRaw}?text=${text}`;
}

/**
 * Navegação principal.
 *
 * `/#faq` é âncora absoluta (não `#faq`) porque o site deixou de ser uma
 * página só: a partir de `/servicos`, uma âncora relativa não encontraria a
 * seção e o link morreria. É temporária por design — vira `/faq` (rota
 * própria) quando essa página for publicada, na Fase 2
 * (`docs/seo/mapeamento-de-paginas.md`).
 *
 * "Como funciona" saiu do menu em 07/08/2026: era o único item que não
 * levava a um destino real — a partir de qualquer página que não a home,
 * clicar mandava a pessoa de volta pra ler um resumo genérico de 3 passos,
 * interrompendo a navegação numa página de conversão (`/frota`,
 * `/servicos/*`) para isso. A seção continua na home
 * (`src/components/landing/journey.tsx`, `id="como-funciona"`), só não tem
 * mais entrada no menu.
 */
export const navLinks = [
  { href: routes.servicos, label: "Serviços" },
  { href: routes.destinos, label: "Destinos" },
  { href: routes.frota, label: "Frota" },
  { href: routes.sobre, label: "Sobre" },
  { href: "/#faq", label: "FAQ" },
  { href: routes.contato, label: "Contato" },
] as const;

export const brandAttributes = [
  "Pontualidade impecável",
  "Discrição absoluta",
  "Conforto premium",
  "Atendimento personalizado",
] as const;

// Os serviços vivem em `src/lib/content/servicos.ts` — a home usa
// `servicosFeaturedOnHome`, um recorte, não a lista inteira.
// A frota vive em `src/lib/content/frota.ts`, com modelos e capacidades.

export const journeySteps = [
  {
    step: "01",
    title: "Contato",
    description:
      "Entre em contato pelo WhatsApp e informe data, horário, origem, destino e preferências de veículo.",
  },
  {
    step: "02",
    title: "Proposta",
    description:
      "Receba uma proposta personalizada com valores, detalhes do serviço e confirmação de disponibilidade.",
  },
  {
    step: "03",
    title: "Experiência",
    description:
      "Motorista pontual, veículo impecável e uma viagem conduzida com a discrição que você espera.",
  },
] as const;

export const differentials = [
  {
    title: "Motoristas selecionados",
    description:
      "Profissionais experientes, apresentação impecável e condução segura em cada trajeto.",
  },
  {
    title: "Veículos impecáveis",
    description:
      "Frota cuidadosamente mantida, higienizada e preparada para receber você com conforto.",
  },
  {
    title: "Atendimento humano",
    description:
      "Comunicação direta, respostas ágeis e acompanhamento personalizado do primeiro contato à chegada.",
  },
  {
    title: "Flexibilidade total",
    description:
      "Adaptamos roteiros, horários e necessidades especiais para atender sua agenda com precisão.",
  },
] as const;

export const faqItems = [
  {
    question: "Como faço para reservar um transporte?",
    answer:
      "Basta entrar em contato pelo WhatsApp informando data, horário, endereços de origem e destino, número de passageiros e qualquer preferência especial. Nossa equipe retorna com a proposta personalizada.",
  },
  {
    question: "Para quais aeroportos vocês realizam transfers?",
    answer:
      "Partindo de Balneário Camboriú, realizamos transfers para os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba, com recepção personalizada, monitoramento de voos e planejamento de rota.",
  },
  {
    question: "É possível contratar para eventos e ocasiões especiais?",
    answer:
      "Sim. Atendemos casamentos, jantares, premiações e eventos sociais com o mesmo padrão de elegância e discrição dos deslocamentos corporativos.",
  },
  {
    question: "Posso solicitar múltiplas paradas ou roteiros personalizados?",
    answer:
      "Claro. Nosso serviço sob demanda permite roteiros flexíveis, múltiplas paradas e disponibilidade conforme sua necessidade.",
  },
] as const;
