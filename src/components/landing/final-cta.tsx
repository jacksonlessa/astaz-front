import { WhatsAppButton } from "@/components/ui/whatsapp-button";

export function FinalCTA() {
  return (
    <section
      className="section-padding bg-secondary"
      aria-labelledby="cta-heading"
    >
      <div className="container-narrow mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-tertiary via-surface to-secondary p-10 text-center sm:p-16 gold-glow">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/5 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-primary/5 blur-3xl"
            aria-hidden="true"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Pronto para viajar
          </p>
          <h2
            id="cta-heading"
            className="mt-4 font-display text-3xl leading-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Sua próxima experiência executiva começa aqui
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-neutral">
            Entre em contato pelo WhatsApp e receba uma proposta personalizada
            para o seu próximo deslocamento.
          </p>
          <div className="mt-10">
            <WhatsAppButton size="lg">
              Solicitar orçamento agora
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
}
