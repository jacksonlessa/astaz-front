---
description: Checklist de deploy do projeto ASTAZ
---

Execute o checklist abaixo antes de considerar o projeto pronto para deploy.

## Checklist

1. `npm run lint` — deve passar sem erros.
2. `npm run build` — deve completar sem erros nem warnings de build.
3. Suba `npm run dev` e revise visualmente a página em desktop e mobile (a landing é single-page, então revise todas as seções: Hero, Serviços, Experiência, Frota, Jornada, Diferenciais, FAQ, CTA final, Footer).
4. Confirme que `src/app/layout.tsx` tem `metadata` (title, description, Open Graph) atualizado caso a copy tenha mudado.
5. Confira as variáveis de ambiente — o projeto usa `.env` (hoje `NEXT_PUBLIC_GTM_ID`), e a falta de uma variável em produção não quebra o build nem gera erro visível:
   - toda variável listada em `.env.example` precisa estar cadastrada no provedor de hospedagem (Vercel), no ambiente **Production** — conferir uma a uma, não presumir;
   - variáveis `NEXT_PUBLIC_*` são embutidas no bundle durante o build: cadastrar na Vercel **sem refazer o deploy** não tem efeito nenhum, o build antigo continua sem o valor;
   - se alguma mudança introduziu uma variável nova, documente em [CLAUDE.md](../../CLAUDE.md#variáveis-de-ambiente) e adicione ao `.env.example` antes do deploy;
   - **depois** do deploy, abra a URL de produção e confirme no HTML/rede que o contêiner do GTM carregou (`view-source:` deve conter o `GTM-` esperado e a requisição para `googletagmanager.com/gtm.js` deve aparecer nas ferramentas de desenvolvedor). Só considere a medição ativa depois de ver o evento chegando no GA4 a partir do domínio de produção — tráfego apenas de `localhost` é sinal de que a variável não subiu.
6. Confirme que nenhum arquivo `.env*` está staged para commit (`git status`).
7. Revise `next.config.ts` caso tenha sido alterado.

## Saída

Relate o resultado de cada item do checklist (ok / falhou / não aplicável) antes de recomendar o deploy.
