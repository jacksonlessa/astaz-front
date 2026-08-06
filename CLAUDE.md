@AGENTS.md

# Instruções do Claude Code

## Visão Geral do Projeto

ASTAZ é uma landing page de uma pessoa jurídica de transporte executivo em Balneário Camboriú (SC), com transfers para os aeroportos de Navegantes, Florianópolis, Joinville e Curitiba. É um site institucional de página única (one-page), sem backend, sem autenticação e sem banco de dados — o objetivo é converter visitantes em contatos via WhatsApp.

## Stack Técnica

| Camada | Tecnologia |
| --- | --- |
| Framework | Next.js 16.2.12 (App Router) |
| UI | React 19 |
| Linguagem | TypeScript (strict) |
| Estilo | Tailwind CSS 4 |
| Lint | ESLint 9 (`eslint-config-next`) |
| Fontes | `next/font/google` (Libre Caslon Text, Manrope) |

## Arquitetura

```
src/
├── app/
│   ├── layout.tsx      # Root layout: metadata, fontes, <html lang="pt-BR">
│   ├── page.tsx         # Página única: compõe as seções de landing/
│   └── globals.css      # Tokens de design (cores, tipografia) e estilos globais
├── components/
│   ├── landing/          # Uma seção da página = um arquivo (Hero, Fleet, FAQ, etc.)
│   └── ui/                # Componentes reutilizáveis e genéricos (whatsapp-button, section-label)
└── lib/
    └── site.ts            # Fonte única de verdade para copy e dados de negócio
```

Regras de dependência:
- `src/app/page.tsx` apenas compõe seções de `src/components/landing/`, sem lógica própria.
- Seções em `landing/` podem importar de `ui/` e `lib/site.ts`, nunca o inverso.
- Nenhuma copy, telefone, cidade ou dado de negócio deve ser hardcoded em componentes — tudo vem de `src/lib/site.ts`.

## Convenções de Código

Resumo: TypeScript strict, sem `any`, imports via alias `@/*`, componentes com export nomeado em PascalCase, Server Components por padrão. Ver detalhes em:
- [.claude/rules/code-style.md](.claude/rules/code-style.md)
- [.claude/rules/component-patterns.md](.claude/rules/component-patterns.md)
- [.claude/rules/content-conventions.md](.claude/rules/content-conventions.md)

## Convenções de Commit

Seguir Conventional Commits, mensagens em português:

- `feat: adiciona seção de depoimentos`
- `fix: corrige contraste do botão de WhatsApp`
- `chore: atualiza dependências`
- `docs: atualiza README`
- `style: ajusta espaçamento da hero`
- `refactor: extrai componente de card de serviço`

## Pull Requests

**Título**: curto, no formato `tipo: descrição` (igual ao commit).

**Corpo**: o que mudou e por quê, com screenshots/GIF quando houver mudança visual.

**Checklist antes de abrir o PR**:
- [ ] `npm run lint` sem erros
- [ ] `npm run build` sem erros
- [ ] Revisão visual em `npm run dev` (desktop e mobile)
- [ ] Nenhuma copy/dado hardcoded fora de `src/lib/site.ts`

## Infraestrutura

Sem Docker, CI/CD ou banco de dados configurados hoje. Deploy previsto na Vercel (padrão do `create-next-app`). Ver [.claude/commands/deploy.md](.claude/commands/deploy.md) para o checklist de deploy.

## Scripts Importantes

| Script | Descrição |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento em `localhost:3000` |
| `npm run build` | Build de produção |
| `npm run start` | Sobe o build de produção localmente |
| `npm run lint` | Roda o ESLint |

## Variáveis de Ambiente

`.env*` está no `.gitignore`; use `.env.local` (não versionado) para valores reais e mantenha `.env.example` como referência de quais variáveis existem.

| Variável | Descrição |
| --- | --- |
| `NEXT_PUBLIC_GTM_ID` | ID do contêiner do Google Tag Manager (`GTM-XXXXXXX`). GA4 e Meta Pixel são configurados **dentro** do contêiner do GTM — não existem variáveis próprias para eles. Sem esta variável, `<GoogleTagManager />` não é renderizado e o site funciona normalmente sem medição. |

Ao adicionar uma variável nova, documente aqui e no `.env.example` no mesmo commit.

## O que NÃO Fazer

- Não hardcodar telefone, cidades, serviços ou qualquer copy diretamente em componentes — usar `src/lib/site.ts`.
- Não montar a URL do WhatsApp manualmente — usar `getWhatsAppUrl()` de `src/lib/site.ts`.
- Não marcar componentes como `"use client"` sem necessidade real de estado, efeitos ou APIs de browser.
- Não commitar arquivos `.env*` ou segredos.
- Não remover os atributos de acessibilidade existentes (`aria-label`, `focus-visible`).
