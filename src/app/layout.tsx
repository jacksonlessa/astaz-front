import type { Metadata } from "next";
import { Libre_Caslon_Text, Manrope } from "next/font/google";
import "./globals.css";

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
  title: "ASTAZ | Transporte Executivo em Balneário Camboriú",
  description:
    "Transporte executivo em Balneário Camboriú e transfers para os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba.",
  keywords: [
    "transporte executivo",
    "transfer aeroporto",
    "carro executivo",
    "ASTAZ",
    "transporte corporativo",
    "motorista particular",
    "transporte executivo Balneário Camboriú",
    "transfer aeroporto Navegantes",
    "transfer aeroporto Florianópolis",
    "transfer aeroporto Joinville",
    "transfer aeroporto Curitiba",
  ],
  openGraph: {
    title: "ASTAZ | Transporte Executivo em Balneário Camboriú",
    description:
      "Transfers executivos de Balneário Camboriú para os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba.",
    type: "website",
    locale: "pt_BR",
    siteName: "ASTAZ",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASTAZ | Transporte Executivo em Balneário Camboriú",
    description:
      "Transfers executivos para Navegantes, Florianópolis, Joinville e Curitiba.",
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
      </body>
    </html>
  );
}
