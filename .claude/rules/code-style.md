# Code Style

Regras específicas do projeto ASTAZ (Next.js 16 App Router + TypeScript + Tailwind 4).

## TypeScript

- `strict: true` está ativo em `tsconfig.json` — nunca usar `any`; prefira `unknown` + narrowing quando o tipo for genuinamente desconhecido.
- Use o alias `@/*` para imports de `src/` (ex.: `@/lib/site`, `@/components/ui/whatsapp-button`), nunca caminhos relativos longos (`../../../lib/site`).
- Listas de dados estáticos usam `as const` (ver `src/lib/site.ts`) para preservar tipos literais — siga o mesmo padrão ao adicionar novos dados.

## Componentes

- Export nomeado em PascalCase (`export function Hero()`), não `export default`, exceto nos arquivos especiais do App Router (`page.tsx`, `layout.tsx`) que exigem default export.
- Um componente por arquivo, nome do arquivo em kebab-case (`whatsapp-button.tsx` exporta `WhatsAppButton`/`WhatsAppIconButton`).

## Tailwind

- Use os tokens de design definidos em `src/app/globals.css` (`bg-secondary`, `text-primary`, `text-foreground`, `text-neutral`, `border-border-subtle`, `container-wide`) em vez de cores/valores arbitrários (`bg-[#123456]`).
- Classes de foco/acessibilidade seguem o padrão já usado no `Header`: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50`.

## Lint

- O projeto usa `eslint-config-next` (`core-web-vitals` + `typescript`). Rode `npm run lint` antes de considerar qualquer mudança pronta e corrija todos os erros/warnings antes de finalizar.
