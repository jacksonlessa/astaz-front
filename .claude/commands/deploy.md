---
description: Checklist de deploy do projeto ASTAZ
---

Execute o checklist abaixo antes de considerar o projeto pronto para deploy.

## Checklist

1. `npm run lint` — deve passar sem erros.
2. `npm run build` — deve completar sem erros nem warnings de build.
3. Suba `npm run dev` e revise visualmente a página em desktop e mobile (a landing é single-page, então revise todas as seções: Hero, Serviços, Experiência, Frota, Jornada, Diferenciais, FAQ, CTA final, Footer).
4. Confirme que `src/app/layout.tsx` tem `metadata` (title, description, Open Graph) atualizado caso a copy tenha mudado.
5. Confirme que não há variáveis de ambiente pendentes — hoje o projeto não usa `.env`; se alguma mudança introduziu uma, documente em [CLAUDE.md](../../CLAUDE.md#variáveis-de-ambiente) e crie `.env.example`.
6. Confirme que nenhum arquivo `.env*` está staged para commit (`git status`).
7. Revise `next.config.ts` caso tenha sido alterado.

## Saída

Relate o resultado de cada item do checklist (ok / falhou / não aplicável) antes de recomendar o deploy.
