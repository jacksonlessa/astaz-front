import { brandAttributes } from "@/lib/site";

export function BrandStrip() {
  return (
    <section
      className="border-y border-border-subtle bg-tertiary"
      aria-label="Atributos da marca"
    >
      <div className="container-wide mx-auto px-5 py-8 sm:px-8 lg:px-12">
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {brandAttributes.map((attribute) => (
            <li
              key={attribute}
              className="flex items-center gap-3 border-l border-primary/30 pl-4"
            >
              <span
                className="size-1.5 shrink-0 rounded-full bg-primary"
                aria-hidden="true"
              />
              <span className="text-sm font-medium tracking-wide text-neutral-light sm:text-base">
                {attribute}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
