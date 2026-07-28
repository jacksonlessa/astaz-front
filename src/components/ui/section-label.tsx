type SectionLabelProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold uppercase tracking-[0.25em] text-primary ${className}`}
    >
      {children}
    </span>
  );
}

type SectionHeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  id?: string;
};

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <Tag
      id={id}
      className={`font-display text-3xl leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl ${className}`}
    >
      {children}
    </Tag>
  );
}

type SectionDescriptionProps = {
  children: React.ReactNode;
  className?: string;
};

export function SectionDescription({
  children,
  className = "",
}: SectionDescriptionProps) {
  return (
    <p
      className={`max-w-2xl text-base leading-relaxed text-neutral sm:text-lg ${className}`}
    >
      {children}
    </p>
  );
}
