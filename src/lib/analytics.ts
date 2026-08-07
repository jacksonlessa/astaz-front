import { sendGTMEvent } from "@next/third-parties/google";

import { siteConfig } from "@/lib/site";

/**
 * Evento de conversão do WhatsApp — único ponto de saída do site, medido aqui
 * para que `whatsapp-button.tsx` e `quote-form.tsx` não dupliquem a lógica.
 *
 * `sendGTMEvent` só empurra para `window.dataLayer`; funciona mesmo sem
 * `NEXT_PUBLIC_GTM_ID` definida (o array fica sem leitor, inofensivo) — não é
 * necessário condicionar a chamada à existência do GTM.
 *
 * REGRA QUE NÃO PODE SER QUEBRADA: `message` é sempre copy estática (a
 * mensagem pré-preenchida de um botão, ou a saudação de um preset de
 * formulário) — nunca o texto que o formulário monta a partir do que o
 * visitante digitou. Endereço, data e destino da viagem são dado pessoal;
 * mandar isso para o GA4/Meta é problema de LGPD e viola os termos de uso do
 * Google Analytics (proibição de PII). Quem chama esta função com conteúdo
 * preenchido pelo usuário está violando essa regra, não só uma convenção.
 */
export function trackWhatsAppClick(
  pathname: string,
  message?: string,
  extra?: { ctaType?: "button" | "form"; ctaForm?: string },
) {
  sendGTMEvent({
    event: "whatsapp_click",
    cta_page: pathname,
    cta_message: message ?? siteConfig.whatsappMessage,
    ...(extra?.ctaType ? { cta_type: extra.ctaType } : {}),
    ...(extra?.ctaForm ? { cta_form: extra.ctaForm } : {}),
  });
}
