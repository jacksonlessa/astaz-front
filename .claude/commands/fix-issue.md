---
description: Analisa e corrige um bug reportado no projeto ASTAZ
argument-hint: [descrição do bug]
---

Bug reportado: $ARGUMENTS

## Passos

1. Entenda o problema descrito e localize o(s) arquivo(s) relevante(s) — normalmente em `src/components/landing/`, `src/components/ui/` ou `src/lib/site.ts`.
2. Reproduza o raciocínio: leia o componente afetado e trace onde o comportamento diverge do esperado.
3. Proponha a correção mínima necessária, seguindo:
   - [.claude/rules/code-style.md](../rules/code-style.md)
   - [.claude/rules/component-patterns.md](../rules/component-patterns.md)
   - [.claude/rules/content-conventions.md](../rules/content-conventions.md)
4. Aplique a correção.
5. Rode `npm run lint` para confirmar que não há novos erros.
6. Resuma: o que causava o bug, o que foi alterado, e quais arquivos foram tocados.

Não amplie o escopo além do necessário para corrigir o bug reportado.
