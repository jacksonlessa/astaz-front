import { journeySteps } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";

export function Journey() {
  return (
    <section
      id="como-funciona"
      className="section-padding bg-tertiary"
      aria-labelledby="journey-heading"
    >
      <div className="container-wide mx-auto">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Como funciona</SectionLabel>
          <SectionHeading id="journey-heading" className="mt-4">
            Reserva simples, experiência impecável
          </SectionHeading>
          <SectionDescription className="mt-4">
            Três passos para transformar seu deslocamento em uma experiência
            executiva sem complicações.
          </SectionDescription>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {journeySteps.map((step, index) => (
            <article
              key={step.step}
              className="relative rounded-2xl border border-border-subtle bg-surface p-8 transition-all duration-300 hover:border-primary/30"
            >
              {index < journeySteps.length - 1 && (
                <div
                  className="absolute -right-4 top-1/2 hidden h-px w-8 bg-primary/30 md:block"
                  aria-hidden="true"
                />
              )}
              <span className="font-display text-4xl text-primary/40">
                {step.step}
              </span>
              <h3 className="mt-4 font-display text-2xl text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <WhatsAppButton size="lg">
            Iniciar reserva pelo WhatsApp
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
