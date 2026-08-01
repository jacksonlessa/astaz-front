import type { Metadata } from "next";

import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { BrandStrip } from "@/components/landing/brand-strip";
import { Services } from "@/components/landing/services";
import { Experience } from "@/components/landing/experience";
import { Fleet } from "@/components/landing/fleet";
import { Journey } from "@/components/landing/journey";
import { Differentials } from "@/components/landing/differentials";
import { FAQ } from "@/components/landing/faq";
import { FinalCTA } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { FloatingWhatsApp } from "@/components/landing/floating-whatsapp";
import { JsonLd } from "@/components/seo/json-ld";
import { faqSchema } from "@/lib/schema";

// Título e descrição vêm do layout raiz; aqui só declaramos o canonical, para
// que variações de URL (utm, www, barra final) não gerem conteúdo duplicado.
export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      {/* Válido porque estas perguntas são exibidas na seção <FAQ /> abaixo. */}
      <JsonLd schema={faqSchema()} />
      <a
        href="#inicio"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-secondary focus:outline-none"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <BrandStrip />
        <Services />
        <Experience />
        <Fleet />
        <Journey />
        <Differentials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
