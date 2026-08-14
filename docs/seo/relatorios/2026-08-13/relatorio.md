# Relatório de SEO — Baseline

**Data de fechamento**: 13/08/2026
**Tipo**: baseline (primeira edição — não há contra o que comparar)
**Versão do site auditada**: commit `8206dc5`, confirmado idêntico ao que está
em produção em `https://www.astaz.com.br`
**Próxima edição**: 13/09/2026

**Períodos dos dados** (não coincidem — cada número carrega o seu):

| Fonte | Período | Observação |
| --- | --- | --- |
| Google Search Console | 28/07 a 11/08/2026 (15 dias) | Primeira data com dado é 28/07. O GSC tem ~2 dias de atraso |
| Google Analytics 4 | 05/08 a 13/08/2026 (9 dias) | Medição começou em 06/08 |
| Google Business Profile | estado em 13/08/2026 | Sem série histórica exportada |
| Código e produção | commit `8206dc5` | — |

---

## 0. O que este relatório é

É a **foto do ponto de partida**, para que a edição de 13/09 tenha contra o que
comparar. O site é novo e o histórico é curto: 15 dias de busca, 9 de analytics.
Nada aqui é tendência — são valores de partida.

Duas coisas mudaram em relação ao que se esperava desta edição. A primeira é que
os dados chegaram, e são mais reveladores do que o volume sugeria. A segunda é
que **os dois achados mais graves do relatório não estavam no site**: estão na
medição e no índice do Google.

Onde um número é **estimado** e não medido, ele vem marcado com **≈** e o método
está aberto na [seção 11](#11-estimativas--método-aberto). Estimativa nunca
entra na tabela de comparação da seção 12 como se fosse medida.

---

## 1. Sumário executivo

O site está tecnicamente correto — canonical, sitemap, robots, headings, dados
estruturados e o redirecionamento de domínio foram conferidos no HTML de
produção e não têm defeito. **O problema é que quase nada disso chegou a ser
exercitado**, por três motivos que se somam:

1. **O GA4 não está medindo.** Não existe evento `page_view`: em 9 dias, o
   relatório de páginas mostra **0 visualizações** em todas as URLs. No lugar
   dele, chegam 107 eventos chamados `gtm.js`. Consequência: 100% do tráfego é
   atribuído a "Direct", e os **5 cliques orgânicos que o GSC registrou no mesmo
   período aparecem como zero sessões orgânicas** no GA4. O `whatsapp_click`
   ausente é um sintoma disso, não o problema todo.

2. **9 das 11 páginas indexáveis estão fora do índice do Google.** Só `/` e
   `/destinos` estão indexadas. Nenhuma página de destino ou de serviço — as que
   carregam a intenção comercial — foi indexada. Isso explica sozinho por que a
   Astaz aparece "fora" nos 7 termos testados: não dá para ranquear uma página
   que não está no índice. *Ressalva importante: essas páginas foram publicadas
   entre 06 e 10/08 e o sitemap foi lido em 11/08. Não estarem indexadas com 2 a
   7 dias de vida é normal.* Vira defeito se continuar assim em setembro.

3. **29% das impressões vão para a URL sem `www`, que redireciona — e rendem
   zero clique.** A versão `www` aparece na posição 2,24 com CTR de 22%; a versão
   sem `www` aparece na posição 8,66 com CTR de 0%. A correção de canonical feita
   em 06/08 está certa; a consolidação simplesmente ainda não aconteceu.

**O que já funciona**: com apenas a home indexada, o site converteu **17 cliques
em 84 impressões — CTR de 20,2%, posição média 2,2**. Isso é bom. O problema não
é a qualidade do que está publicado; é quanto ainda não está sendo visto.

**Performance também está boa**: 92, 98 e 96 no PageSpeed celular, com CLS zero
nas três páginas medidas. Sobraram dois ajustes pequenos e concretos — o LCP da
home em 3,1 s (5.9) e um token de cor que reprova no mínimo de contraste da WCAG
no breadcrumb de todas as páginas internas (5.10). O segundo é uma linha de CSS.

**Fora do site**: o perfil no Google tem nota 5,0 com **9 avaliações**, contra 67
do JrSá e 36 da Roberta Transporte Executivo — os dois concorrentes que ocupam o
pacote local nos termos de "executivo". Nos termos de transfer e destino, quem
ocupa não é motorista local: é a **Tour Fácil**, um site de turismo, em 4 dos 7
termos. São dois jogos diferentes, com adversários diferentes.

---

## 2. Estado do site — linha de base congelada

11 URLs indexáveis + 1 `noindex` intencional. As 11 batem **1:1** com o sitemap
e com as rotas do build: nenhuma rota fora do sitemap, nenhuma entrada do
sitemap apontando para 404.

| URL | Título* | Desc. | Palavras** | Breadcrumb | FAQPage | Links editoriais | Indexada |
| --- | ---: | ---: | ---: | :---: | :---: | ---: | :---: |
| `/` | 50 | 147 | 749 | raiz | ✅ | nav | ✅ |
| `/servicos` | 40 | 137 | 369 | ✅ | — | nav | ❌ |
| `/servicos/transfer-aeroporto` | 42 | 139 | **1.393** | ✅ | ✅ | **2** | ❌ |
| `/servicos/transporte-idosos` | 52 | 145 | 872 | ✅ | ✅ | **3** | ❌ |
| `/destinos` | 26 | 128 | **220** | ✅ | — | nav | ✅ |
| `/destinos/aeroporto-navegantes` | 58 | 155 | 827 | ✅ | ✅ | 6 | ❌ |
| `/destinos/beto-carrero` | 60 | 148 | 962 | ✅ | ✅ | 5 | ❌ |
| `/destinos/aeroporto-florianopolis` | **61** ⚠️ | 152 | 890 | ✅ | ✅ | 6 | ❌ |
| `/frota` | 23 | 133 | 402 | ✅ | — | nav | ❌ |
| `/contato` | 27 | 131 | **189** | ✅ | — | nav | ❌ |
| `/sobre` | 58 | 140 | 576 | ✅ | — | nav | ❌ |
| `/politica-de-privacidade` `noindex` | 31 | 144 | 679 | ✅ | — | nav | ❌ *(correto)* |

<sub>\* Caracteres **já com o sufixo ` | ASTAZ`**. Orçamento: ≤ 60.
\*\* Texto renderizado, incluindo cabeçalho e rodapé (~150 palavras de
boilerplate em toda página). Serve para comparar páginas entre si e mês a mês,
não como contagem absoluta de conteúdo.
"nav" = a página está no menu/rodapé e recebe link de todas as outras; o número
só aparece para páginas cujos links são todos editoriais, que é o que de fato
sinaliza importância ao buscador.</sub>

**Cobertura de intenção** (contra a tabela mestre do
[mapeamento](../../mapeamento-de-paginas.md)):

| Grupo | Publicadas | Indexadas | Planejadas |
| --- | ---: | ---: | ---: |
| Páginas de serviço | 2 | 0 | 6 |
| Destinos | 3 | 0 | 8 |
| Eventos sazonais | 0 | 0 | 3 |
| Institucionais | 6 | 2 | 6 |

---

## 3. Indexação e cobertura

| Etapa | Valor | Fonte |
| --- | ---: | --- |
| Rotas geradas pelo build | 11 | `npm run build` |
| URLs no `sitemap.xml` | 11 | produção |
| URLs descobertas pelo GSC no sitemap | 11 | GSC → Sitemaps |
| **Indexadas** | **2** | GSC → Indexação |
| **Não indexadas** | **10** | GSC → Indexação |
| Com impressão | 3 URLs | `gsc-paginas.csv` |
| Com clique | 1 URL | `gsc-paginas.csv` |

Sitemap enviado e lido pela última vez em **11/08/2026**, com as 11 URLs
descobertas. Do lado da descoberta, está tudo certo — o Google sabe que as
páginas existem.

**Não indexadas** (8 confirmadas na lista exportada; as outras 2 são `/contato`
e `/politica-de-privacidade`, esta última `noindex` por decisão):

```
/destinos/aeroporto-florianopolis    /servicos
/destinos/aeroporto-navegantes       /servicos/transfer-aeroporto
/destinos/beto-carrero               /servicos/transporte-idosos
/frota                               /sobre
```

⚠️ **O export não trouxe o motivo por URL.** É a informação que decide se isso é
espera normal ou problema: "Descoberta — não indexada" (fila de rastreamento,
questão de tempo e autoridade) é muito diferente de "Rastreada — não indexada"
(o Google viu e decidiu não indexar, o que apontaria para qualidade percebida).
**Na próxima coleta, exportar a coluna de motivo.**

Leitura honesta do prazo: as páginas foram publicadas entre 06 e 10/08 e o
sitemap foi lido em 11/08. Entre 2 e 7 dias de vida, não estar indexado é o
comportamento normal de um domínio novo e sem links externos. Isso **não** é um
defeito hoje — é o principal número a acompanhar em setembro.

Verificado em produção e correto: `astaz.com.br` responde **308** para
`www.astaz.com.br`, que responde **200**; canonicals, `og:url`, `<loc>` do
sitemap e `Host` do robots apontam todos para a versão `www`.

---

## 4. Desempenho de busca (GSC)

**Período**: 28/07 a 11/08/2026 · **Fonte**: `gsc-*.csv`

| Métrica | Valor |
| --- | ---: |
| Cliques | **17** |
| Impressões | **84** |
| CTR | **20,2%** |
| Posição média (Brasil) | **2,2** |

> **Ressalva de reconciliação**: três tabelas do export (datas, dispositivos,
> países) fecham em 84 impressões; a tabela de páginas soma 123. Adotei 84 como
> total da propriedade e a tabela de páginas apenas como distribuição relativa.
> Na próxima edição, exportar tudo numa única passada resolve.

### 4.1 Por página

| URL | Cliques | Impressões | CTR | Posição |
| --- | ---: | ---: | ---: | ---: |
| `https://www.astaz.com.br/` | 17 | 76 | 22,4% | **2,24** |
| `https://astaz.com.br/` *(sem www, redireciona)* | **0** | **35** | **0%** | **8,66** |
| `https://www.astaz.com.br/destinos` | 0 | 12 | 0% | 10,08 |

Três observações, em ordem de importância:

**A home carrega o site inteiro.** 100% dos cliques. Não porque as outras
páginas sejam ruins, mas porque não estão no índice.

**A variante sem `www` é um vazamento medível.** 35 impressões — quase um terço
do total — servidas numa URL que só redireciona, seis posições abaixo da versão
canônica, com CTR zero. Aplicando o CTR da versão `www` (22,4%) a essas
impressões, o vazamento vale **≈ 8 cliques em 15 dias, ou ≈ 16 por mês**. É o
número que mais deve cair até setembro, e ele cai sozinho: a consolidação já
está encaminhada pelo canonical, só precisa de tempo. *(Que a propriedade seja
de domínio, e não de prefixo em `www`, dá para deduzir daqui: só uma propriedade
de domínio mostraria a URL sem `www` nesta tabela.)*

**`/destinos` aparece na posição 10,08 com CTR 0%.** É a segunda página
indexada, e é a mais fina do site (220 palavras). Aparece na virada da primeira
para a segunda página de resultados e não ganha clique nenhum — o que confirma
o achado 5.4 com dado, e não com opinião.

### 4.2 Por consulta — marca × não-marca

Apenas **13 das 84 impressões** (15%) vêm de consultas visíveis; o GSC anonimiza
buscas raras, e com este volume quase tudo é raro.

| Consulta | Tipo | Cliques | Impressões | CTR | Posição |
| --- | --- | ---: | ---: | ---: | ---: |
| `astaz` | **marca** | 4 | 10 | 40% | 1,4 |
| `transporte executivo navegantes` | não-marca | 0 | 2 | 0% | 6 |
| `transporte` | ambíguo | 0 | 1 | 0% | 1 |

Dos cliques identificáveis, **100% são de marca**. Considerando as consultas
anonimizadas, a estimativa é de **≈ 60% a 85% dos cliques vindos de busca por
marca** (método na seção 11).

Isso é esperado num site com 15 dias de histórico e uma página indexada — mas é
exatamente a métrica que precisa se inverter. O objetivo do site é captar quem
ainda não conhece a Astaz. **`transporte executivo navegantes` na posição 6 é a
primeira evidência real de busca não-marca**: é uma pessoa procurando o serviço
em Navegantes, e quem está respondendo é a home, porque não existe página para
isso. É uma *query órfã* legítima, e a primeira a entrar de volta na tabela
mestre do mapeamento.

### 4.3 Por dispositivo e país

| Dispositivo | Cliques | Impressões | CTR | Posição |
| --- | ---: | ---: | ---: | ---: |
| Computador | 12 | 56 | 21,4% | 2,84 |
| Celular | 5 | 28 | 17,9% | 2,39 |

Dois terços das impressões em desktop contraria a expectativa para transporte
local. Pode ser sinal real (cliente corporativo pesquisando do escritório, o que
seria coerente com o posicionamento) ou apenas amostra pequena. **Com n=84, não
dá para concluir** — é uma leitura a confirmar em setembro, não uma conclusão.

Brasil: 17 cliques / 79 impressões. Estados Unidos: 0 / 5 — ruído, mas vale
reparar se crescer: turista internacional chegando por Navegantes ou
Florianópolis é público plausível.

---

## 5. Saúde técnica

### 🔴 Crítico

**5.1 — O GA4 não registra `page_view`; a medição inteira está comprometida**

Em 9 dias, os únicos eventos que chegaram foram:

| Evento | Contagem |
| --- | ---: |
| `gtm.js` | 107 |
| `session_start` | 10 |
| `first_visit` | 7 |

Não existe `page_view`, e por isso o relatório "Páginas e telas" mostra
**0 visualizações em todas as 9 URLs visitadas**. O nome `gtm.js` é o evento que
o próprio GTM empurra no `dataLayer` quando carrega — ele estar chegando ao GA4
como *nome de evento* indica que a tag configurada no contêiner está enviando a
variável `{{Event}}` como nome, em vez de ser uma tag de configuração do Google
com o disparo de pageview ativo.

Os efeitos em cascata, todos visíveis nos dados:

- **Atribuição destruída**: 10 sessões, 100% `(direct) / (none)`. Nenhuma sessão
  orgânica. No mesmo intervalo, o GSC registrou **5 cliques vindos da busca** —
  ou seja, ≈ 5 sessões orgânicas que o GA4 não viu.
- **Relatório de páginas inutilizável**: sem `page_view`, nenhuma métrica de
  conteúdo funciona.
- **`whatsapp_click` inexistente**: confirmado no painel. O código dispara o
  evento (testado), mas o acionador e a tag correspondente nunca foram criados
  no GTM. A única conversão do site não é medida.

*Correção*: no GTM, revisar a tag do GA4 que dispara em "All Pages" — ela precisa
ser a tag do Google (configuração) com envio de pageview, não uma tag de evento
com nome dinâmico. Depois, criar o acionador de evento personalizado
`whatsapp_click`, a tag de evento GA4 correspondente e marcá-lo como evento
principal. Tudo no painel; nada disso é código.

**5.2 — 9 de 11 páginas indexáveis fora do índice**

Detalhado na seção 3. Crítico pelo impacto, com a ressalva de prazo já
registrada: pode ser espera normal. **Sem a coluna de motivo do GSC, não dá para
distinguir** — e essa distinção é a diferença entre "esperar" e "agir".

**5.3 — 29% das impressões na URL sem `www`, com CTR zero**

Detalhado em 4.1. ≈ 16 cliques/mês de perda estimada. A causa já foi corrigida
em 06/08; falta a consolidação acontecer.

### 🟡 Importante

**5.4 — A autoridade interna só desce; nada sobe de volta ao hub**

`/servicos/transfer-aeroporto` — a página mais densa do site (1.393 palavras,
prioridade 🔴) — recebe link de apenas duas páginas: a home e `/servicos`. As
três páginas de destino linkam entre si e para a navegação global, mas **nenhuma
linka para o hub de transfer**, embora o mapeamento descreva exatamente esse
link. `/servicos/transporte-idosos` está no outro extremo: **zero link editorial
de saída** — quem chega ali só sai pelo menu.

Com 9 páginas fora do índice, link interno deixa de ser refinamento e passa a ser
o principal caminho de descoberta que o site controla.

**5.5 — `/destinos` é o hub mais fraco, e agora há dado**

220 palavras, posição 10,08, 12 impressões, **0 cliques**. Um hub que só lista os
filhos não ranqueia para o termo genérico nem passa contexto para baixo.
(`/contato`, com 189 palavras, é menor — mas ali é adequado: é página
transacional, o formulário é o conteúdo.)

**5.6 — Título de `/destinos/aeroporto-florianopolis` estourou o orçamento**

61 caracteres com o sufixo, contra o teto de 60. A reescrita de 10/08 (que
inverteu a ordem para "cidade antes de aeroporto", decisão correta) trouxe o
título de volta acima do limite. O registro no mapeamento também precisa ser
reconciliado: ele documenta esse título em **dois lugares que se contradizem** —
uma nota fala em 53 caracteres, e o parágrafo de conferência de 06/08 afirma que
o maior título do site tem 51. Nenhum descreve o valor atual.

**5.7 — Uma imagem de banco, remota, na home**

O card "Transporte Corporativo" ainda aponta para uma URL do Unsplash
(`src/lib/content/servicos.ts:90`). É o único hotlink para domínio de terceiro
que restou, e está na única página que hoje traz tráfego.

**5.8 — `<h1>` de `/servicos/transporte-idosos` perdeu a cidade**

O `<title>` é "Transporte para Idosos em Balneário Camboriú"; o `<h1>` é apenas
"Transporte para Idosos". A intenção registrada é local, e o `h1` é o sinal
on-page de maior peso.

**5.9 — A home é a página mais lenta do site, e não é por causa da imagem**

PageSpeed Insights, celular, as três URLs medidas:

| URL | Desemp. | Acess. | Práticas | SEO | LCP | CLS |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| `/` | 92 | 96 | 100 | 100 | **3,1 s** | 0 |
| `/servicos/transfer-aeroporto` | 98 | **93** | 100 | 100 | 2,3 s | 0 |
| `/destinos/aeroporto-navegantes` | 96 | **89** | 100 | 100 | 2,5 s | 0 |

A home é a **mais leve em conteúdo** e mesmo assim a mais lenta: 3,1 s de LCP,
acima do limite de 2,5 s que o Google considera bom, contra 2,3 s de uma página
com o dobro de texto.

> **Correção de uma hipótese anterior.** A primeira leitura desta edição
> atribuiu o LCP alto ao peso do hero (`hero-transfer-aeroporto.webp`, 283 KB).
> **Os dados novos descartam isso**: `/servicos/transfer-aeroporto` usa
> *exatamente a mesma imagem*, com o mesmo `priority` e a mesma transformação do
> otimizador — e marca 2,3 s. O arquivo não é a diferença.

O que de fato distingue a home: **9 imagens contra 4**, mais seções e mais DOM,
e uma imagem remota do Unsplash que passa pelo otimizador do Next — o que obriga
o servidor a buscar em `images.unsplash.com` antes de servir (o mesmo achado
5.7, agora com custo de performance além do custo de credibilidade).

Verificado e descartado como causa: todas as imagens têm `sizes` e `srcset`
corretos, com candidatos de 640 px a 3840 px; o lazy-loading está certo (só o
hero e o logo são `eager`); e o CLS é **0** nas três páginas.

Duas ressalvas honestas: é medição de **laboratório**, com rede e CPU de celular
modesto simulados, e **execução única** — o PSI varia algumas centenas de
milissegundos entre rodadas, então parte da diferença de 0,8 s pode ser ruído.
Com nota 92 e CLS zero, isso é afinação e não emergência. O próximo passo certo
não é adivinhar: é abrir a seção de **diagnóstico** do relatório da home no PSI,
que aponta o elemento de LCP nominalmente.

**5.10 — Contraste abaixo do mínimo de acessibilidade em todas as páginas internas**

As notas de acessibilidade caem conforme se afasta da home: 96 → 93 → **89**.
O padrão tem uma explicação exata no código.

O token `--color-neutral-dark` (`#6a6a6a`) sobre o fundo `--color-secondary`
(`#121212`) dá **3,46:1**. O mínimo da WCAG AA para texto normal é **4,5:1** —
e ele é usado em `text-xs` e `text-sm`, que são texto normal para a norma, não
texto grande.

Onde ele aparece: na **trilha de breadcrumb de todas as páginas internas** e em
parágrafos de corpo de `/destinos/[slug]`, `/frota`, `/sobre`,
`/servicos/transporte-idosos` e `/politica-de-privacidade`. Na home, quase não
aparece — daí a nota mais alta lá e a mais baixa em `/destinos/*`, que é onde
ele é mais usado.

Os outros tokens passam com folga e não precisam mudar: `--color-neutral`
(`#a0a0a0`) dá 7,16:1 e `--color-primary` (`#c5a059`) dá 7,62:1 — ambos AAA.

*Correção*: uma linha em `src/app/globals.css`. `#858585` dá **5,08:1**, passa AA
com margem e preserva a hierarquia visual de texto secundário.

Isso não é achado de SEO — acessibilidade não é fator de ranqueamento direto.
Entra aqui porque as regras do projeto tratam acessibilidade como obrigatória, e
porque é uma falha objetiva, medida e de correção trivial.

**5.11 — Sem dados de campo (CrUX): INP e os Core Web Vitals reais não existem**

Não é falha de coleta. **INP é métrica de campo por definição** — mede o tempo
entre uma interação real e o próximo quadro pintado, e teste de laboratório não
clica em nada. Nenhuma ferramenta de lab produz INP.

Os dados de campo vêm do CrUX, que só publica quando a URL ou a origem passa de
um volume mínimo de tráfego. Este site não passa — por isso o bloco de campo do
PSI não aparece, e por isso o relatório de Core Web Vitals do GSC também vem
vazio: é a mesma fonte.

Consequência prática: **enquanto o tráfego não crescer, a experiência real do
visitante não é observável por ferramenta do Google.** No lugar, esta edição
registra o **TBT** do laboratório como proxy. Existe um caminho para medir INP
real sem depender do limiar do CrUX (`useReportWebVitals` do `next/web-vitals`
mandando para o GA4), mas ele fica **depois** da correção 5.1 — instrumentar
métrica nova em cima de um GA4 que não registra `page_view` só gera dado
ilegível.

### 🟢 Sugestões

- 4 imagens seguem marcadas `imageIsPlaceholder: true` e 2 têm `TODO: foto real`.
- `/frota` e `/contato` não têm bloco de FAQ; são as duas páginas de conversão do
  site e as dúvidas que aparecem ali (bagagem, cadeirinha, pagamento) são as que
  travam o fechamento.
- O mapeamento está desatualizado em dois pontos já resolvidos: o logo do rodapé
  **já** usa o SVG da identidade, e `/frota` **já** tem as três fotos reais.

### ✅ Verificado e correto — não reauditar sem motivo

- Canonical presente, absoluto e auto-referente em **12/12** páginas.
- Exatamente **um `<h1>` por página** em 12/12, sem salto de nível de heading.
- Meta descriptions entre **128 e 155** caracteres — todas dentro de 120–158.
- JSON-LD: `LocalBusiness` + `WebSite` no layout raiz; `BreadcrumbList` em
  **11/11** páginas internas; `FAQPage` em 6 páginas, **todas** exibindo as
  perguntas na tela; `Service` nas duas páginas de serviço.
- O `alt=""` dos dois logos **está certo**: o link que os envolve tem
  `aria-label`. Preencher o `alt` faria o leitor de tela anunciar duas vezes.
- `npm run lint` e `npm run build` sem erro ou aviso.
- Produção idêntica ao `HEAD` do repositório.

---

## 6. Analytics (GA4)

**Período**: 05/08 a 13/08/2026 · **Fonte**: `ga4-*.csv`

| Métrica | Valor |
| --- | ---: |
| Sessões | 10 |
| Usuários | 7 |
| Sessões engajadas | 8 (80%) |
| Visualizações de página | **0** ⚠️ |
| Sessões orgânicas | **0** ⚠️ |
| Eventos principais (conversões) | **0** ⚠️ |

Aquisição: **100% `(direct) / (none)`**. Cidade: **100% Balneário Camboriú**.
Dispositivo: 7 usuários desktop, 3 mobile. Da contagem total de eventos, **97 de
124 estão na home**.

Sete usuários, todos na cidade-sede, todos diretos, concentrados na home, em
desktop, na mesma semana em que o site foi editado — **≈ a maior parte desse
tráfego é a própria operação testando o site**, não visitante real. Com a
atribuição quebrada (5.1), não dá para separar com certeza; é leitura por
convergência de indícios, não medição.

**Conclusão prática: os dados de GA4 desta edição não são utilizáveis para
decisão.** Servem para uma coisa só — provar que a instrumentação está quebrada,
o que já é o suficiente para tornar a correção a ação nº 1.

---

## 7. Presença local (GBP)

**Fonte**: `coleta-manual.md`. A série de desempenho do perfil (visualizações,
rotas, chamadas) **não foi exportada** — fica para setembro, e sem ela não há
como saber quanto do contato atual vem do Maps.

| Item | Valor |
| --- | --- |
| Categoria principal | Serviço de transporte *(sem secundárias)* |
| Serviços cadastrados | 19 |
| Avaliações | **9** · nota **5,0** |
| Fotos | 13 · última em 12/08/2026 |
| NAP (telefone, horário, área) | ✅ bate com `src/lib/site.ts` |

**Ações do mapeamento — situação:**

| Ação | Status |
| --- | --- |
| Remover "Motorista Particular" | ✅ feito |
| Adicionar "Transporte de Idosos" | ✅ feito — cadastrado como "Transporte para Idosos", que é **melhor**: bate literalmente com o `<h1>` e o `<title>` da página |
| Adicionar "City Tour" | ❌ pendente |

Os 19 serviços do perfil cobrem todas as etiquetas mapeadas em `gbpServices`,
com a única exceção do City Tour. Consistência entre perfil e site está boa.

---

## 8. Posicionamento local

Busca anônima, localização em Balneário Camboriú, 13/08/2026.

| Termo | Pacote local | Orgânico |
| --- | --- | --- |
| transporte executivo balneário camboriú | fora | fora |
| transfer aeroporto navegantes | fora | fora |
| transfer balneário camboriú aeroporto navegantes | fora | fora |
| transfer aeroporto florianópolis balneário camboriú | fora | fora |
| transporte para beto carrero | fora | fora |
| motorista executivo balneário camboriú | fora | fora |
| transporte de idosos balneário camboriú | fora | fora |

**7 de 7 fora, nos dois blocos.** É o resultado mais duro do relatório, e ele
tem duas causas separadas que exigem respostas diferentes:

- **No orgânico**, a explicação é suficiente e já conhecida: as páginas que
  respondem a esses termos **não estão no índice**. Não há o que otimizar
  enquanto isso não mudar.
- **No pacote local**, o site não tem influência. Ali pesam proximidade,
  relevância do perfil e **volume de avaliações** — e é onde está o gap real
  (seção 9).

---

## 9. Concorrência

| Concorrente | Nota | Avaliações | Praça | Onde aparece |
| --- | ---: | ---: | --- | --- |
| **San Rafael Transporte Executivo** | 4,9 | **127** | Balneário Camboriú | **Anúncio pago** no bloco local |
| Transportes Executivo | 4,6 | **2.400** | Blumenau | Bloco local ampliado |
| JrSá Prime Executive — Motorista Executivo | 4,9 | 67 | Balneário Camboriú | transporte executivo BC · motorista executivo BC |
| Roberta Transporte Executivo | 5,0 | 36 | Balneário Camboriú | motorista executivo BC · transporte de idosos BC |
| MOTORISTA TRANSFER EXECUTIVO | 4,5 | 11 | — | — |
| **Astaz** | **5,0** | **9** | Balneário Camboriú | — |
| Tour Fácil *(site de turismo)* | — | — | — | os 4 termos de transfer e destino |

<sub>San Rafael e Transportes Executivo entraram em 13/08/2026, a partir de uma
captura do bloco local. **Ressalva de método**: aquela busca foi feita com a
conta da Astaz logada — o selo "Você gerencia o perfil desta empresa" aparece na
captura — e nessa condição o Google destaca o próprio perfil do usuário. Os
dados dos concorrentes (nota, avaliações, praça, anúncio) são confiáveis; **a
ordem em que aparecem, não**. A tabela de posicionamento da seção 8 continua
valendo, porque foi coletada em janela anônima.</sub>

### O que os dois novos mudam

**San Rafael é o concorrente mais forte mapeado até agora — e o único pagando.**
127 avaliações, mais de 10 anos de operação, 90+ fotos no perfil, e um anúncio
ativo dentro do bloco local: *"Motorista Premium bc — Motorista particular com
segurança e conforto premium"*, apontando para `sanrafaelturismo.com.br`. A
categoria principal dela é **"Agência de locação de vans"**, não "Serviço de
transporte" — ou seja, chega no mesmo resultado por outra porta, o que sugere
que a disputa de categoria é menos travada do que parece.

Detalhe estratégico: ela está comprando exatamente o território de "motorista
particular/premium" que o mapeamento **descartou de propósito**, por ser busca
com forte intenção de emprego. A decisão anterior segue valendo — e agora tem um
efeito colateral bom: é dinheiro de concorrente indo para um termo que a Astaz
concluiu que não converte.

**Transportes Executivo (Blumenau) recalibra a escala das avaliações.** 2.400
avaliações em 35 anos de operação. Não é competidor direto de praça — a base é
Blumenau — mas aparece na lista ampliada e mostra o teto do mercado. Serve para
dimensionar a meta: o alvo realista da Astaz é a faixa dos 30 a 130 (Roberta,
JrSá, San Rafael), não os milhares.

### Quatro leituras que mudam prioridade

**São dois jogos diferentes.** Nos termos de "executivo" e "motorista", os
adversários são motoristas locais com perfil no Google — competição de **pacote
local**, decidida por avaliações e proximidade. Nos termos de transfer e destino,
quem ocupa é a **Tour Fácil, um marketplace de turismo** — competição de
**orgânico**, decidida por conteúdo e autoridade de domínio. As páginas de
destino do site estão no segundo jogo, não no primeiro, e é bom que o conteúdo
delas já seja denso: contra OTA, página rasa não tem chance.

**A alavanca mais barata é avaliação, e ela é 100% da operação.** Nota 5,0 com 9
avaliações, contra 4,9 com **127** da San Rafael e 4,9 com 67 do JrSá. A nota não
é o problema — a Astaz tem a melhor da lista. O volume é. É o único item deste
relatório que não depende de código, nem de indexação, nem do Google: depende de
pedir.

**A Astaz é a única da lista sem o selo "Mais de X anos no mercado".** San Rafael
("mais de 10 anos"), Roberta ("mais de 5") e Transportes Executivo ("mais de 35")
exibem todos. Esse selo vem de um campo do GBP — a **data de abertura** — que
está em branco no perfil. A operação existe desde 2022, o que já daria "mais de
3 anos no mercado". É um sinal de confiança que os concorrentes têm e a Astaz
não, e o custo de corrigir é preencher um campo. Vale junto: **13 fotos contra
90+ da San Rafael.**

**"Motorista executivo" merece revisão no mapeamento.** O mapeamento descartou
`/servicos/motorista-particular` com um argumento correto: "motorista particular"
é busca de quem procura **vaga**. Mas "motorista **executivo**" é outro termo — e
os dois concorrentes que aparecem nele são empresas de transporte, não anúncios
de emprego. Um deles inclusive carrega o termo no nome. Vale uma checagem antes
de aceitar que a home cubra isso sozinha.

---

## 10. Ações do próximo ciclo

| # | Ação | Onde | Destrava |
| --- | --- | --- | --- |
| 1 | **Corrigir a tag do GA4 no GTM** para enviar `page_view` (hoje chega `gtm.js`); depois criar acionador + tag de `whatsapp_click` e marcá-lo como evento principal | painel | Toda a seção 6. Sem isso, setembro repete "dados não utilizáveis" |
| 2 | **Exportar a coluna de motivo** das páginas não indexadas no GSC e, se for "Rastreada — não indexada", pedir indexação manual das 3 páginas de destino | painel | Decide se 5.2 é espera ou problema |
| 3 | **Reforçar o perfil no Google**: pedir avaliações (meta: de 9 para 25 até 13/09), preencher a **data de abertura** para destravar o selo "mais de 3 anos no mercado", subir fotos e adicionar o serviço "City Tour" | operação | Única alavanca de pacote local disponível hoje (seção 9) |
| 4 | **Lote de correções de código**, detalhado abaixo | código | 5.4, 5.6, 5.8 e 5.10 — todas pequenas, todas verificáveis |
| 5 | **Publicar `/servicos/transporte-corporativo`** | código + foto | Cobre uma intenção 🟡 e elimina o último Unsplash da home (5.7 e 5.9) |

O lote da nº 4, em ordem de valor:

- **Contraste** (5.10): `--color-neutral-dark` de `#6a6a6a` para `#858585` em
  `src/app/globals.css`. Uma linha, e resolve uma falha de WCAG AA que hoje
  atinge o breadcrumb de **todas** as páginas internas.
- **Link interno** (5.4): os 3 destinos linkando de volta para
  `/servicos/transfer-aeroporto`, e saída contextual em
  `/servicos/transporte-idosos`.
- **Título** (5.6): `/destinos/aeroporto-florianopolis` para ≤ 60 caracteres, e
  reconciliar o registro no mapeamento.
- **`<h1>`** (5.8): cidade no `<h1>` de `/servicos/transporte-idosos`.
- Atualizar os dois pontos vencidos do mapeamento (logo do rodapé, fotos da
  frota).

**O que deliberadamente não está na lista**: otimizar as páginas de destino.
Enquanto não estiverem indexadas, qualquer ajuste nelas é trabalho sem
retorno mensurável — e sem forma de saber se funcionou.

---

## 11. Estimativas — método aberto

Quatro números deste relatório são estimados, não medidos. Todos aparecem
marcados com **≈**, e nenhum entra na tabela da seção 12. Ficam aqui com o
método à vista para poderem ser contestados.

**≈ 8 cliques perdidos em 15 dias (≈ 16/mês) na URL sem `www`** — apliquei o CTR
medido da versão `www` (22,4%) às 35 impressões da versão sem `www`.
*Limite superior*: parte dessas impressões pode ser da mesma busca em que a `www`
também apareceu, e consolidar as URLs não garante herdar a posição 2,24.
*Piso razoável*: ~4 cliques.

**≈ 60% a 85% dos cliques vindos de busca por marca** — as consultas visíveis
somam 4 cliques (todos de marca, em `astaz`) e 13 impressões; sobram 13 cliques
e 71 impressões anonimizadas. O CTR implícito desses cliques anônimos é de ~18%,
alto demais para busca genérica e compatível com variações de marca
("astaz transporte", "astaz balneário camboriú") — que são individualmente raras
e por isso anonimizadas. O piso de 60% assume que parte do anônimo é não-marca;
o teto de 85% assume que quase todo o CTR alto é marca. **Substituir por medição
real quando houver volume acima do limiar de privacidade do GSC.**

**≈ 5 sessões orgânicas perdidas pelo GA4** — o GSC registrou 5 cliques entre
05 e 11/08; o GA4 registrou 0 sessões orgânicas no mesmo intervalo. Cliques do
GSC e sessões do GA4 não são a mesma unidade (abandono antes do carregamento,
bloqueadores), então o número real é *no máximo* 5.

**≈ a maior parte do tráfego do GA4 é a própria operação** — convergência de
indícios, não medição: 7 usuários, 100% em Balneário Camboriú, 100% direto,
majoritariamente desktop, 97 de 124 eventos na home, na mesma semana de edição
do site. Não há como separar com a atribuição quebrada.

**Não estimado, de propósito**: os Core Web Vitals de campo. As notas de
**laboratório** do PageSpeed foram todas medidas à mão, nas três URLs (5.9), e
por isso entram na tabela da seção 12 como valores reais. Já LCP, CLS e INP **de
campo** não são estimáveis por definição — dependem de usuário real, e o CrUX não
publica nada neste volume de tráfego (5.11). Chutar não faria sentido: o número
que importa ali é justamente o comportamento que ainda não existe.

---

## 12. O que comparar em 13/09/2026

Só o que foi **medido**. Estimativas ficam fora — se entrassem, a variação do mês
que vem mediria a mudança do meu chute, não a do site.

| Métrica | 13/08/2026 | 13/09/2026 |
| --- | ---: | ---: |
| **Indexação** | | |
| URLs indexáveis | 11 | |
| URLs no sitemap | 11 | |
| URLs no `llms.txt` | — *(criado em 14/08)* | |
| Páginas indexadas (GSC) | **2** | |
| Páginas não indexadas | 10 | |
| **Busca** | | |
| Cliques (GSC) | 17 | |
| Impressões (GSC) | 84 | |
| CTR | 20,2% | |
| Posição média (Brasil) | 2,2 | |
| Impressões na URL sem `www` | 35 (29%) | |
| URLs com ao menos 1 impressão | 3 | |
| URLs com ao menos 1 clique | 1 | |
| Consultas visíveis no GSC | 3 | |
| Cliques de não-marca *(visíveis)* | 0 | |
| **Analytics** | | |
| Sessões (GA4) | 10 | |
| Sessões orgânicas (GA4) | 0 | |
| Visualizações de página (GA4) | 0 | |
| `whatsapp_click` | não existe | |
| **Local** | | |
| Avaliações no GBP | **9** | |
| Nota média | 5,0 | |
| Fotos no perfil | 13 | |
| Selo "Mais de X anos no mercado" | não exibido | |
| Avaliações do concorrente mais forte *(San Rafael)* | 127 | |
| Concorrentes locais anunciando no Ads | 1 *(San Rafael)* | |
| Termos no pacote local *(de 7)* | 0 | |
| Termos no orgânico *(de 7)* | 0 | |
| **Site** | | |
| Páginas de serviço publicadas | 2 de 6 | |
| Destinos publicados | 3 de 8 | |
| Links editoriais → `/servicos/transfer-aeroporto` | 2 | |
| Achados 🔴 / 🟡 | 3 / 8 | |
| Imagens de banco ou placeholder | 5 | |
| **Performance e acessibilidade** *(PSI celular, laboratório)* | | |
| Desempenho — `/` · transfer-aeroporto · navegantes | **92 · 98 · 96** | |
| Acessibilidade — `/` · transfer-aeroporto · navegantes | **96 · 93 · 89** | |
| Práticas recomendadas / SEO — nas três | 100 / 100 | |
| LCP — `/` · transfer-aeroporto · navegantes | **3,1 s · 2,3 s · 2,5 s** | |
| CLS — nas três | 0 | |
| Menor contraste de token em uso | **3,46:1** *(mínimo AA: 4,5)* | |
| Origem tem dados de campo no CrUX? | **não** | |

**As três linhas que definem se o mês foi bem**: páginas indexadas (2 → ?),
avaliações no GBP (9 → ?) e sessões orgânicas no GA4 (0 → ?). As duas primeiras
são o insumo do crescimento; a terceira é a prova de que se consegue enxergá-lo.
