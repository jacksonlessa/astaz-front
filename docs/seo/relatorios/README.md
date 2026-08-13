# Relatórios de SEO

Uma pasta por edição, nomeada pela data de fechamento no formato `YYYY-MM-DD`.
O valor da série está na **comparação entre edições** — um relatório isolado
não diz nada. Por isso o formato não muda entre edições: se uma métrica sai da
tabela, ela some do histórico.

> Pastas e arquivos sem acento, em kebab-case, como todo o resto do repositório
> (`relatorios`, não `relatórios`). Caminho com acento quebra link em algumas
> ferramentas e complica `grep`.

## Estrutura de cada edição

```
YYYY-MM-DD/
├── relatorio.md          # o relatório em si — a única coisa que se lê
└── exports/              # dados brutos que sustentam o relatório
    ├── README.md         # o que precisa estar aqui, com nome exato de arquivo
    ├── coleta-manual.md  # o que não sai em CSV, preenchido à mão
    ├── gsc-*.csv
    ├── ga4-*.csv
    └── gbp-*.csv
```

Os exports ficam versionados junto. Sem eles, um número do relatório vira
afirmação sem fonte daqui a três meses — e a regra do
[mapeamento de páginas](../mapeamento-de-paginas.md) vale aqui também:
**nenhum número sem fonte declarada**.

## Cadência

Mensal. Quinzenal em site novo captura ruído, não tendência.

## Como abrir uma edição nova

1. Copie a pasta da edição anterior, renomeie para a data de fechamento e
   apague os CSVs — a edição anterior é o template.
2. Leia `exports/README.md` e junte os arquivos de GSC, GA4 e GBP.
3. Preencha `exports/coleta-manual.md` (o que nenhuma ferramenta exporta).
4. Reescreva `relatorio.md`. **Toda métrica ganha a coluna de variação** contra
   a edição anterior — número absoluto sozinho não informa.

## Regras que o relatório respeita

- Nenhum número sem fonte declarada (GSC, GA4, GBP, código ou coleta manual).
- Delta obrigatório: valor atual, variação e base de comparação.
- **"Não medido" é resposta válida** e melhor que estimativa. Nunca preencha
  uma lacuna com aproximação.
- Nada de métrica de vaidade: posição média do site inteiro, "keywords no top
  100", nota de ferramenta terceira.
- Busca de **marca** e de **não-marca** aparecem sempre separadas. O objetivo do
  site é captar quem ainda não conhece a Astaz; misturar as duas faz o
  crescimento da marca mascarar o fracasso do resto.

## Edições

| Data | Tipo | Observação |
| --- | --- | --- |
| [2026-08-13](2026-08-13/relatorio.md) | Baseline | Ponto de partida: 17 cliques, 2 de 11 páginas indexadas, GA4 sem `page_view`, 9 avaliações no GBP. |
