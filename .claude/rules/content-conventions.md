# Content Conventions

## Fonte única de verdade

Toda copy e dado de negócio (nome da empresa, telefone, cidades atendidas, serviços, frota, FAQ, passos da jornada) vive em `src/lib/site.ts`. Componentes de `src/components/landing/` **consomem** esses dados — nunca duplicam texto ou números hardcoded.

Ao adicionar um novo dado (ex.: um novo serviço ou item de FAQ), edite o array/objeto correspondente em `src/lib/site.ts` seguindo a mesma forma (`as const`, mesmos campos) e não escreva o conteúdo direto no componente.

## WhatsApp

Sempre gerar links de WhatsApp com `getWhatsAppUrl()` de `src/lib/site.ts`. Nunca montar a URL `https://wa.me/...` manualmente em um componente — isso garante que o número (`phoneRaw`) e a mensagem padrão (`whatsappMessage`) fiquem centralizados e consistentes.

## Tom de voz

Português formal, elegante e direto, coerente com um serviço de transporte executivo premium. Evite gírias, exclamações excessivas ou emojis. Veja `siteConfig.description`, `brandAttributes` e `faqItems` em `src/lib/site.ts` como referência de tom.
