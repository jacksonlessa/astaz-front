/**
 * Google Consent Mode v2 — ponte entre a decisão do visitante (aceitar/
 * recusar no banner) e o `dataLayer` que o GTM já lê nativamente.
 *
 * Não carregamos `gtag.js`: o site só usa o contêiner do GTM
 * (`<GoogleTagManager />` no layout raiz), então os comandos de consentimento
 * são empurrados como array — é o formato que `gtag()` monta por baixo dos
 * panos (`function gtag(){dataLayer.push(arguments)}`), documentado pelo
 * Google para páginas que não carregam a lib inteira.
 *
 * As quatro categorias cobrem o que as tags hoje configuradas no GTM
 * verificam: o Meta Pixel exige `ad_storage` e `ad_user_data` concedidos (ver
 * a seção "Consentimento e privacidade" em
 * `docs/seo/mapeamento-de-paginas.md`). O GA4 não tem checagem de
 * consentimento configurada na tag — continua medindo independente da
 * escolha aqui, por decisão registrada no mesmo documento.
 *
 * ATENÇÃO: o valor padrão (antes de qualquer decisão) é definido num script
 * inline separado, em `src/app/layout.tsx`, com `strategy="beforeInteractive"`
 * — precisa rodar antes da hidratação, o que descarta importar este módulo
 * ali. As quatro categorias abaixo precisam continuar idênticas às do script
 * inline se um dia mudarem.
 */

export type ConsentChoice = "accepted" | "rejected";

export const CONSENT_STORAGE_KEY = "astaz_consent";

const CONSENT_TYPES = [
  "ad_storage",
  "ad_user_data",
  "ad_personalization",
  "analytics_storage",
] as const;

// Sem `declare global` próprio: `@next/third-parties/google` já declara
// `Window.dataLayer` globalmente (ver `sendGTMEvent`, usado em
// `src/lib/analytics.ts`), e uma segunda declaração com tipo diferente
// conflita no build (`Object[]` vs. `unknown[]`).

function pushConsentUpdate(choice: ConsentChoice) {
  const value = choice === "accepted" ? "granted" : "denied";
  const state = Object.fromEntries(CONSENT_TYPES.map((type) => [type, value]));

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["consent", "update", state]);
}

/** Lê a decisão salva. `null` = visitante ainda não decidiu (mostrar o banner). */
export function getStoredConsent(): ConsentChoice | null {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    return stored === "accepted" || stored === "rejected" ? stored : null;
  } catch {
    // Navegação privada ou storage bloqueado: trata como decisão inexistente.
    return null;
  }
}

/** Grava a escolha e atualiza o consentimento em tempo real no `dataLayer`. */
export function storeConsent(choice: ConsentChoice) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  } catch {
    // Sem storage disponível, a escolha ainda vale para a sessão atual — só
    // não persiste para a próxima visita.
  }
  pushConsentUpdate(choice);
}
