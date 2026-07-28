import { differentials } from "@/lib/site";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";

export function Differentials() {
  return (
    <section
      className="section-padding bg-secondary"
      aria-labelledby="differentials-heading"
    >
      <div className="container-wide mx-auto">
        <div className="mb-16 max-w-2xl">
          <SectionLabel>Diferenciais</SectionLabel>
          <SectionHeading id="differentials-heading" className="mt-4">
            O padrão ASTAZ em cada detalhe
          </SectionHeading>
          <SectionDescription className="mt-4">
            Comprometimento com excelência em tudo o que envolve sua
            experiência — do primeiro contato à chegada ao destino.
          </SectionDescription>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {differentials.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border-subtle bg-surface p-8 transition-all duration-300 hover:border-primary/25"
            >
              <div className="mb-4 h-px w-12 shimmer-border" aria-hidden="true" />
              <h3 className="font-display text-xl text-foreground sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
