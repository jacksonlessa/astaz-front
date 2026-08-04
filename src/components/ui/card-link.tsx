import Link from "next/link";

/**
 * Padrão de card que leva a uma página de detalhe (hubs de destinos e de
 * serviços). São duas peças que trabalham juntas:
 *
 * - `CardTitleLink` vai no título e estica a área clicável para o card inteiro;
 * - `CardLinkArrow` vai no rodapé e é apenas o sinal visual de "isto tem
 *   página", reaproveitando o link dourado com seta já usado no resto do site.
 *
 * A seta é `aria-hidden` de propósito: assim o leitor de tela anuncia um único
 * link por card, nomeado pelo destino/serviço, em vez de vários rótulos
 * genéricos e idênticos.
 *
 * Requisitos do `<article>` que envolve o card:
 * `relative flex h-full flex-col` — sem `relative` o link estica para a
 * viewport; sem `flex-col` a seta não fica ancorada no rodapé.
 */

type CardTitleLinkProps = {
  href: string;
  children: React.ReactNode;
};

export function CardTitleLink({ href, children }: CardTitleLinkProps) {
  return (
    <Link
      href={href}
      className="rounded-sm after:absolute after:inset-0 after:content-[''] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      {children}
    </Link>
  );
}

type CardLinkArrowProps = {
  children: React.ReactNode;
  className?: string;
};

export function CardLinkArrow({
  children,
  className = "",
}: CardLinkArrowProps) {
  return (
    <p
      aria-hidden="true"
      className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-primary-light ${className}`}
    >
      {children}
      <span>→</span>
    </p>
  );
}
