# Content Conventions

## Fonte única de verdade

Toda copy e dado de negócio (nome da empresa, telefone, cidades atendidas, serviços, frota, FAQ, passos da jornada) vive em `src/lib/site.ts`. Componentes de `src/components/landing/` **consomem** esses dados — nunca duplicam texto ou números hardcoded.

Ao adicionar um novo dado (ex.: um novo serviço ou item de FAQ), edite o array/objeto correspondente em `src/lib/site.ts` seguindo a mesma forma (`as const`, mesmos campos) e não escreva o conteúdo direto no componente.

## WhatsApp

Sempre gerar links de WhatsApp com `getWhatsAppUrl()` de `src/lib/site.ts`. Nunca montar a URL `https://wa.me/...` manualmente em um componente — isso garante que o número (`phoneRaw`) e a mensagem padrão (`whatsappMessage`) fiquem centralizados e consistentes.

## Tom de voz

A fonte oficial do tom de voz e da personalidade da marca é [Manifesto.md](../../Manifesto.md) — consulte-o (seções 8 a 11) antes de escrever ou revisar qualquer copy nova. `siteConfig.description`, `brandAttributes` e `faqItems` em `src/lib/site.ts` são exemplos já aplicados desse tom.

Resumo acionável do Manifesto:

- **Personalidade**: profissional, elegante, próxima, tranquila, segura.
- **Utilizar**: linguagem clara, frases objetivas, informações organizadas, comunicação cordial e profissional.
- **Evitar**: excesso de emojis, linguagem de promoção/urgência artificial, termos muito informais, mensagens genéricas de aplicativo, argumento baseado só em preço.
- **Emojis**: não usar em excesso; só pontualmente se contribuírem para humanizar, nunca substituindo organização ou clareza.
- **Teste antes de publicar** (regra final do Manifesto): "Isso transmite profissionalismo, elegância, proximidade, tranquilidade e segurança?" — se a resposta for não, a copy não representa a Astaz.
