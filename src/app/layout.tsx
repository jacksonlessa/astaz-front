import type { Metadata } from "next";
import { Libre_Caslon_Text, Manrope } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/seo/json-ld";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

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
    // Usado pela home e por qualquer página que não defina o próprio título.
    default: `${siteConfig.name} | Transporte Executivo em Balneário Camboriú`,
    // Páginas filhas informam só o título próprio; o sufixo entra automático.
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
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
        <JsonLd schema={[localBusinessSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
