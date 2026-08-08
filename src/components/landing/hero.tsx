import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end overflow-hidden pt-16 sm:pt-20"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-transfer-aeroporto.webp"
          alt="Sedã executivo escuro estacionado em pista de aeroporto ao lado de uma aeronave"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/50 to-transparent" />
      </div>

      <div className="relative z-10 w-full section-padding pb-16 sm:pb-24">
        <div className="container-wide mx-auto">
          <div className="max-w-3xl animate-fade-up">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Balneário Camboriú · Transporte Executivo
            </p>
            <h1
              id="hero-heading"
              className="font-display text-4xl leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-7xl"
            >
              O caminho entre{" "}
              <span className="text-gradient-gold">elegância</span> e destino
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-light sm:text-lg animate-fade-up-delay-1">
              A ASTAZ conduz cada trajeto com requinte, discrição e
              pontualidade. Uma experiência sob medida para quem valoriza
              conforto, presença e atendimento impecável — em Balneário
              Camboriú e nos principais aeroportos da região.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row animate-fade-up-delay-2">
              <Link
                href={routes.contato}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-primary px-8 text-base font-semibold tracking-wide text-secondary transition-all duration-300 hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                Solicitar orçamento
              </Link>
              <a
                href="#servicos"
                className="inline-flex h-14 items-center justify-center rounded-full border border-border-subtle px-8 text-base font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
              >
                Conhecer serviços
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-dark">
          Role
        </span>
        <div className="h-12 w-px bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
}
