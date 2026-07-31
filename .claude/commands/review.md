---
description: Revisa o diff atual do projeto ASTAZ (code review automático)
---

Faça um code review completo das mudanças pendentes neste repositório.

## Passos

1. Rode `git status` e `git diff` (ou `git diff --staged` se houver mudanças staged) para ver exatamente o que mudou.
2. Rode `npm run lint` e reporte quaisquer erros ou warnings.
3. Para cada arquivo alterado em `src/`, verifique aderência a:
   - [.claude/rules/code-style.md](../rules/code-style.md)
   - [.claude/rules/component-patterns.md](../rules/component-patterns.md)
   - [.claude/rules/content-conventions.md](../rules/content-conventions.md)
4. Verifique especificamente:
   - Componentes marcados `"use client"` sem necessidade real de interatividade
   - Copy, telefone ou dados de negócio hardcoded fora de `src/lib/site.ts`
   - Acessibilidade: `aria-label`, `alt`, `focus-visible` em elementos novos
   - Uso de tokens do design system do Tailwind em vez de valores arbitrários
5. Se o diff tocar em `src/app/page.tsx` ou adicionar uma seção nova, confira se a seção foi corretamente registrada em `<main>`.

## Saída

Produza uma lista com prioridade (🔴 crítico / 🟡 importante / 🟢 sugestão), cada item com arquivo e linha quando aplicável. Termine com um checklist de aprovação (lint ok / build ok / acessibilidade ok).
