import type { DestinoBlock } from "@/lib/content/destinos";
import { SectionHeading } from "@/components/ui/section-label";

/**
 * Renderiza os blocos opcionais de uma página de destino.
 *
 * Todos os títulos de bloco são `<h2>` — a página já tem seu `<h1>` no topo, e
 * pular níveis de heading quebra tanto a leitura por leitor de tela quanto a
 * interpretação da hierarquia pelo Google.
 */
export function DestinoBlocks({
  blocks,
}: {
  blocks: readonly DestinoBlock[];
}) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "prose":
            return (
              <section key={index} className="mt-16">
                <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                  {block.title}
                </SectionHeading>
                <div className="mt-6 max-w-3xl space-y-4">
                  {block.paragraphs.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-base leading-relaxed text-neutral"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            );

          case "steps":
            return (
              <section key={index} className="mt-16">
                <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                  {block.title}
                </SectionHeading>
                {block.intro ? (
                  <p className="mt-6 max-w-3xl text-base leading-relaxed text-neutral">
                    {block.intro}
                  </p>
                ) : null}
                <ol className="mt-10 grid gap-6 sm:grid-cols-2">
                  {block.items.map((item, i) => (
                    <li
                      key={item.title}
                      className="rounded-2xl border border-border-subtle bg-surface p-6 sm:p-8"
                    >
                      <span
                        className="font-display text-sm text-primary"
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-display text-xl text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-neutral sm:text-base">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ol>
              </section>
            );

          case "highlight":
            return (
              <section
                key={index}
                className="mt-16 rounded-2xl border border-border bg-surface p-8 sm:p-12"
              >
                <SectionHeading as="h2" className="!text-2xl sm:!text-3xl">
                  {block.title}
                </SectionHeading>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral">
                  {block.body}
                </p>
              </section>
            );
        }
      })}
    </>
  );
}
