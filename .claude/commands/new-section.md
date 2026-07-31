---
description: Cria o scaffold de uma nova seção da landing page ASTAZ
argument-hint: [nome da seção, ex. "depoimentos"]
---

Criar uma nova seção da landing page: $ARGUMENTS

## Passos

1. Escolha um nome de arquivo em kebab-case dentro de `src/components/landing/` (ex.: `depoimentos.tsx`) e um nome de componente em PascalCase com export nomeado (ex.: `export function Depoimentos()`).
2. Componente é Server Component por padrão — só adicione `"use client"` se a seção precisar de interatividade real (ver [.claude/rules/component-patterns.md](../rules/component-patterns.md)).
3. Se a seção precisar de dados/copy (títulos, textos, listas), adicione-os em `src/lib/site.ts` seguindo o padrão `as const` já usado ali — não hardcode texto no componente (ver [.claude/rules/content-conventions.md](../rules/content-conventions.md)).
4. Use os tokens Tailwind do design system existentes (`bg-secondary`, `text-primary`, `container-wide`, etc.) e siga o padrão visual das seções vizinhas.
5. Inclua acessibilidade básica: heading semântico (`h2`/`h3`), `aria-label` quando necessário.
6. Registre a nova seção em `src/app/page.tsx`: adicione o import e o elemento dentro de `<main>`, na posição indicada pelo usuário (ou no fim, antes de `<FinalCTA />`, se não especificado).
7. Rode `npm run lint` e confirme que não há erros.

## Saída

Resuma os arquivos criados/alterados e onde a seção foi posicionada na página.
