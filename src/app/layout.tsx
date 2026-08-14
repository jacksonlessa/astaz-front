import type { Metadata } from "next";
import { Libre_Caslon_Text, Manrope } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";
import { CookieConsent } from "@/components/landing/cookie-consent";
import { JsonLd } from "@/components/seo/json-ld";
import { CONSENT_STORAGE_KEY } from "@/lib/consent";
import { paginasMeta } from "@/lib/content/paginas";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

/**
 * GA4 e Meta Pixel são configurados DENTRO do contêiner do GTM (tags e
 * acionadores), não aqui — o código só carrega o contêiner. Ver a seção
 * "GTM com Google Analytics e Meta Pixel" em
 * `docs/seo/mapeamento-de-paginas.md` para o racional e o passo a passo.
 *
 * Sem `NEXT_PUBLIC_GTM_ID` definida, o componente não é renderizado e o site
 * funciona normalmente sem medição — não é obrigatória para rodar local.
 */
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

/**
 * Consentimento padrão (Google Consent Mode v2), antes de qualquer tag rodar.
 *
 * Precisa ser `beforeInteractive` — roda antes da hidratação e sempre é
 * injetado no `<head>`, não importa onde o componente fica na árvore (é o que
 * a documentação do `next/script` garante). É por isso que este script é JS
 * puro em vez de importar `src/lib/consent.ts`: aquele módulo só pode rodar
 * depois que o React hidrata.
 *
 * Lê a decisão salva para não negar de novo o consentimento de quem já
 * aceitou numa visita anterior — sem isso, cada carregamento de página
 * reabriria a janela de "negado" até o `CookieConsent` hidratar.
 *
 * As quatro categorias e a chave de storage precisam continuar idênticas às
 * de `src/lib/consent.ts` — são o mesmo contrato, duplicado por necessidade
 * técnica, não por descuido.
 */
const CONSENT_BOOTSTRAP_SCRIPT = `
(function () {
  var granted = false;
  try {
    granted = localStorage.getItem('${CONSENT_STORAGE_KEY}') === 'accepted';
  } catch (e) {}
  var value = granted ? 'granted' : 'denied';
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(['consent', 'default', {
    ad_storage: value,
    ad_user_data: value,
    ad_personalization: value,
    analytics_storage: value,
    wait_for_update: 500
  }]);
})();
`;

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  // Permite que cada página declare `canonical` e OG images com path relativo.
  metadataBase: new URL(siteConfig.url),
  title: {
    /**
     * Usado pela home e por qualquer página que não defina o próprio título.
     * O texto vive em `content/paginas.ts` porque o `llms.txt` também o
     * consome — ver a nota de motivo naquele arquivo.
     */
    default: `${paginasMeta.home.title} | ${siteConfig.name}`,
    // Páginas filhas informam só o título próprio; o sufixo entra automático.
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    images: [siteConfig.ogImage.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${libreCaslon.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-secondary text-foreground">
        {/*
          Os dois ficam dentro do body, nessa ordem: o consentimento default
          precisa existir no dataLayer antes da primeira tag do GTM avaliar
          se dispara.

          Em `next dev` com Turbopack, o `<Script strategy="beforeInteractive">`
          gera um warning de hidratação no console mesmo posicionado
          corretamente (testado também como irmão de <body>, direto em
          <html> — mesmo erro nos dois lugares). DOM final após hidratar é
          válido (`document.documentElement.children` = [HEAD, BODY]) e o
          warning não aparece em `next build && next start` — é diagnóstico
          do dev overlay, não bug funcional. Ver aviso do AGENTS.md sobre
          este Next ter comportamento fora do treinamento.
        */}
        <Script id="consent-default" strategy="beforeInteractive">
          {CONSENT_BOOTSTRAP_SCRIPT}
        </Script>
        {gtmId ? <GoogleTagManager gtmId={gtmId} /> : null}
        <JsonLd schema={[localBusinessSchema(), websiteSchema()]} />
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
