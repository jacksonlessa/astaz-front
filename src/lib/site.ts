export const siteConfig = {
  name: "ASTAZ",
  tagline: "Transporte Executivo",
  description:
    "Transporte executivo em Balneário Camboriú, com transfers para os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba.",
  baseCity: "Balneário Camboriú, SC",
  airports: ["Navegantes", "Florianópolis", "Joinville", "Curitiba"],
  phone: "+55 47 99726-9700",
  phoneRaw: "5547997269700",
  whatsappMessage:
    "Olá, ASTAZ! Gostaria de solicitar um orçamento para transporte executivo.",
  url: "https://astaz.com.br",
} as const;

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message ?? siteConfig.whatsappMessage);
  return `https://wa.me/${siteConfig.phoneRaw}?text=${text}`;
}

export const navLinks = [
  { href: "#servicos", label: "Serviços" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#frota", label: "Frota" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
] as const;

export const brandAttributes = [
  "Pontualidade impecável",
  "Discrição absoluta",
  "Conforto premium",
  "Atendimento personalizado",
] as const;

export const services = [
  {
    title: "Transfer Aeroporto",
    description:
      "Transfers entre Balneário Camboriú e os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba, com monitoramento de voos.",
    image:
      "https://images.unsplash.com/photo-1436491865339-9a61a109fa08?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Aeroporto ao entardecer",
  },
  {
    title: "Corporativo",
    description:
      "Deslocamentos executivos para reuniões, visitas técnicas e agendas intensas, com padrão profissional em cada detalhe.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Edifícios corporativos modernos",
  },
  {
    title: "Eventos & Ocasiões",
    description:
      "Casamentos, jantares, premiações e eventos sociais com presença elegante e coordenação impecável do início ao fim.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mesa elegante para evento",
  },
  {
    title: "Sob Demanda",
    description:
      "Roteiros personalizados, múltiplas paradas e disponibilidade conforme sua agenda — quando e onde precisar.",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sedã executivo em estrada",
  },
] as const;

export const fleetCategories = [
  {
    title: "Sedã Executivo",
    description:
      "Elegância discreta para deslocamentos individuais ou em dupla, com acabamento refinado e ambiente silencioso.",
  },
  {
    title: "SUV Premium",
    description:
      "Amplitude e presença para grupos pequenos, viagens com bagagem extra ou trajetos que pedem mais conforto.",
  },
  {
    title: "Van Executiva",
    description:
      "Capacidade ampliada sem abrir mão do padrão executivo — ideal para equipes, comitivas e transfers em grupo.",
  },
] as const;

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
