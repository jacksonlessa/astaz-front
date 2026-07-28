import Image from "next/image";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import {
  SectionDescription,
  SectionHeading,
  SectionLabel,
} from "@/components/ui/section-label";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="section-padding bg-tertiary"
      aria-labelledby="experience-heading"
    >
      <div className="container-wide mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border-subtle lg:aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80"
              alt="Interior luxuoso de veículo executivo com acabamento em couro"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-primary/20 bg-secondary/80 p-5 backdrop-blur-sm">
              <p className="font-display text-lg text-foreground">
                &ldquo;Cada detalhe pensado para que você chegue com presença.&rdquo;
              </p>
            </div>
          </div>

          <div>
            <SectionLabel>Experiência</SectionLabel>
            <SectionHeading id="experience-heading" className="mt-4">
              Requinte que se sente em cada quilômetro
            </SectionHeading>
            <SectionDescription className="mt-4">
              Na ASTAZ, transporte executivo vai além do deslocamento. É a
              certeza de um ambiente silencioso, acolhedor e impecável — onde
              conforto, discrição e atendimento personalizado convergem.
            </SectionDescription>

            <ul className="mt-10 space-y-5">
              {[
                "Ambiente climatizado e silencioso para trabalhar ou descansar",
                "Motoristas com apresentação impecável e condução segura",
                "Comunicação direta e acompanhamento do início ao fim",
                "Flexibilidade para adaptar roteiros e horários",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="mt-2 size-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-neutral-light sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <WhatsAppButton variant="outline">
                Falar com a equipe
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
