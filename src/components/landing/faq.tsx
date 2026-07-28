import { faqItems } from "@/lib/site";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";

export function FAQ() {
  return (
    <section
      id="faq"
      className="section-padding bg-tertiary"
      aria-labelledby="faq-heading"
    >
      <div className="container-narrow mx-auto">
        <div className="mb-12 text-center">
          <SectionLabel className="block">FAQ</SectionLabel>
          <SectionHeading id="faq-heading" className="mt-4">
            Perguntas frequentes
          </SectionHeading>
          <SectionDescription className="mx-auto mt-4">
            Respostas às dúvidas mais comuns sobre nossos serviços de
            transporte executivo.
          </SectionDescription>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-border-subtle bg-surface transition-all duration-300 open:border-primary/30"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-left font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-tertiary [&::-webkit-details-marker]:hidden">
                <span className="text-base sm:text-lg">{item.question}</span>
                <span
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border-subtle text-primary transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="border-t border-border-subtle px-6 pb-6 pt-4">
                <p className="text-sm leading-relaxed text-neutral sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
