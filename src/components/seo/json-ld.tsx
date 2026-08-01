import type { JsonLdObject } from "@/lib/schema";

type JsonLdProps = {
  /** Um ou mais schemas. Vários grafos podem coexistir na mesma página. */
  schema: JsonLdObject | readonly JsonLdObject[];
};

/**
 * Injeta JSON-LD no HTML.
 *
 * O caractere "<" é escapado na saída porque a string é inserida via
 * `dangerouslySetInnerHTML` — sem isso, um dado de conteúdo que contivesse
 * uma tag de fechamento de script encerraria a tag e abriria brecha de XSS.
 */
export function JsonLd({ schema }: JsonLdProps) {
  const payload = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
