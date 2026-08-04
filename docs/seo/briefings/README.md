# Briefings de conteúdo

Cada página nova tem um briefing aqui. É onde entra o **conhecimento que só a
operação da Astaz tem** — distâncias reais, tempos de trajeto, políticas de
espera, particularidades de cada rota.

## Por que isso existe

O maior risco do projeto é publicar várias páginas quase idênticas com o nome
do destino trocado. O Google trata isso como *doorway page* e pode penalizar o
domínio inteiro. O que diferencia uma página real de um template preenchido é
exatamente a informação que está nestes arquivos.

A regra que sustenta tudo: **nenhum número vai para o site sem estar num
briefing preenchido.** Distância, tempo de trajeto e preço são dados
operacionais — inventar qualquer um deles publica informação falsa num site
institucional.

## Como funciona o ciclo

1. A estrutura da página é montada primeiro, com os campos de conteúdo
   pendentes e a página marcada como `noIndex`
2. Você preenche o briefing — pode ser aos poucos, quando tiver tempo
3. A copy é escrita a partir do briefing
4. Os agentes `copy-astaz`, `seo-auditor` e `code-reviewer` validam em paralelo
5. `npm run lint` e `npm run build`
6. A rota entra em `publishedRoutes`, o `noIndex` sai, e a página vai ao ar

Uma página só sai do `noIndex` quando **todos os campos obrigatórios** do
briefing estiverem respondidos.

## Como preencher

- Responda em linguagem normal — a adequação ao tom de voz é feita depois
- **"Não sei" é uma resposta válida e útil.** Melhor um campo vazio do que um
  número aproximado que vira texto publicado
- Se um número varia (alta temporada, madrugada), diga a faixa e o que a causa
- Marque `[x]` no checklist de status quando terminar

## Arquivos

| Briefing | Página | Status |
| --- | --- | --- |
| [aeroporto-navegantes.md](aeroporto-navegantes.md) | `/destinos/aeroporto-navegantes` | 🟡 parcial — publicada; faltam fotos reais |
| [aeroporto-florianopolis.md](aeroporto-florianopolis.md) | `/destinos/aeroporto-florianopolis` | 🟡 parcial — publicada; falta o motivo de escolher FLN em vez de NVT, e foto real |
| [beto-carrero.md](beto-carrero.md) | `/destinos/beto-carrero` | 🟡 parcial — publicada; faltam melhor horário de saída e fotos reais |
| [frota.md](frota.md) | `/frota` | 🟡 parcial — publicada; faltam ano dos veículos, acessibilidade, manutenção e fotos reais |
| [sobre.md](sobre.md) | `/sobre` | ⬜ vazio |

Para uma página nova, copie [_template.md](_template.md).

## Imagens

Fotos candidatas, com licença e ressalvas registradas, ficam em
[docs/imagens-de-referencia.md](../../imagens-de-referencia.md). Imagem de banco
não passa pelo ciclo acima, mas tem as próprias verificações — direito de
imagem, veículo que a frota não tem, cenário que contradiz o texto.
