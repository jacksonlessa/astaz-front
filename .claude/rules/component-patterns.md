# Component Patterns

## Server Components por padrão

No App Router (Next.js 16), todo componente é Server Component por padrão. Só adicione `"use client"` no topo do arquivo quando o componente realmente precisar de:
- estado (`useState`), efeitos (`useEffect`) ou outros hooks de interação
- APIs de browser (ex.: `window`, eventos de clique com handlers)

Exemplos reais no projeto: `src/components/ui/whatsapp-button.tsx` e `src/components/landing/floating-whatsapp.tsx` usam `"use client"` porque têm interação de UI. Componentes puramente apresentacionais como `Hero`, `Fleet`, `Services` **não** devem ter a diretiva.

## Estrutura de seções

- Cada seção visível da landing page é um arquivo em `src/components/landing/` (ex.: `hero.tsx`, `fleet.tsx`, `faq.tsx`), exportando um componente nomeado em PascalCase.
- `src/app/page.tsx` apenas importa e compõe essas seções em ordem, sem lógica adicional — ao criar uma seção nova, adicione o import e o elemento no lugar apropriado dentro de `<main>`.
- Componentes pequenos e reutilizáveis entre seções (botões, labels) vão em `src/components/ui/`, nunca duplicados dentro de `landing/`.

## Acessibilidade (obrigatório, não opcional)

Siga o padrão já estabelecido no `Header` (`src/components/landing/header.tsx`):
- Links de navegação e botões de ícone precisam de `aria-label` quando o texto não é autoexplicativo.
- Elementos interativos precisam de `focus-visible:ring-2` visível.
- Mantenha o `id="conteudo"` do `<main>` — é o alvo de âncora das páginas.
- Use `alt` descritivo em toda imagem (ver `imageAlt` em `src/lib/site.ts`).
