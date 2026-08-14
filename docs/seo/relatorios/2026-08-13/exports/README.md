# Exports — edição 2026-08-13 (baseline)

O que precisa cair nesta pasta, de onde vem e com que nome. **O nome do arquivo
importa**: o relatório cita a fonte pelo nome, e a edição seguinte compara
arquivo com arquivo.

**Período de todos os exports**: do início da medição até **13/08/2026**.
Para o GA4 isso significa **06/08 a 13/08/2026** (7 dias — o GTM subiu em
06/08). Para o GSC e o GBP, use o período máximo disponível; o histórico
anterior à medição própria ainda existe do lado do Google.

> Se alguma fonte não estiver configurada, **não improvise**: anote em
> `coleta-manual.md` que ela não existe. "Não medido" é um resultado — e nesse
> caso vira a ação prioritária do ciclo.

---

## 1. Google Search Console

**Propriedade**: confirme que está usando a de `https://www.astaz.com.br`
(ou a propriedade de domínio). O site redireciona 308 de `astaz.com.br` para
`www` — uma propriedade cadastrada na versão sem `www` mostra dados vazios.

### 1.1 Desempenho na busca → um único ZIP

Menu **Desempenho → Resultados da pesquisa**:

1. Período: **Personalizado → desde a data mais antiga disponível** até 13/08/2026.
   Não use "Últimos 3 meses" se o site for mais novo que isso.
2. Deixe **todos os tipos de dispositivo e países** (sem filtro).
3. Marque as quatro métricas no topo: **Cliques, Impressões, CTR, Posição média**.
4. Botão **Exportar → Baixar CSV**. Vem um ZIP com um CSV por aba.

Descompacte aqui e renomeie:

| Arquivo do ZIP | Renomear para |
| --- | --- |
| `Consultas.csv` | `gsc-consultas.csv` |
| `Páginas.csv` | `gsc-paginas.csv` |
| `Países.csv` | `gsc-paises.csv` |
| `Dispositivos.csv` | `gsc-dispositivos.csv` |
| `Datas.csv` | `gsc-datas.csv` |

`gsc-consultas.csv` é o arquivo mais importante do pacote inteiro: é a única
fonte que mostra **as buscas reais** que já trazem gente — inclusive as que
ninguém previu. É ele que vai corrigir ou confirmar as prioridades da tabela
mestre do [mapeamento](../../../mapeamento-de-paginas.md).

### 1.2 Indexação

Menu **Indexação → Páginas**:

- Exporte a tabela **"Por que as páginas não são indexadas"** → `gsc-nao-indexadas.csv`
- Anote em `coleta-manual.md` os dois números do topo: **páginas indexadas** e
  **páginas não indexadas**.

### 1.3 Sitemap

Menu **Indexação → Sitemaps**: anote em `coleta-manual.md` se
`https://www.astaz.com.br/sitemap.xml` está enviado, a data da última leitura e
quantas URLs foram descobertas. **Esperado: 11.**

### 1.4 Core Web Vitals

Menu **Experiência → Core Web Vitals**: se houver dados, exporte →
`gsc-core-web-vitals.csv`. Com site novo e pouco tráfego é normal aparecer
"dados insuficientes" — nesse caso, anote isso em `coleta-manual.md` e pronto.

---

## 2. Google Analytics 4

**Período em todos os relatórios**: 06/08/2026 a 13/08/2026.
Em cada relatório, use **Compartilhar → Fazer download do arquivo → CSV**.

| Onde no GA4 | Nome do arquivo | Para quê |
| --- | --- | --- |
| Aquisição → Aquisição de tráfego (dimensão: *Grupo de canais padrão*) | `ga4-aquisicao-canal.csv` | Quanto do tráfego é orgânico vs. direto vs. social |
| Aquisição → Aquisição de tráfego (troque a dimensão para *Origem/mídia da sessão*) | `ga4-origem-midia.csv` | Separa `google/organic` de `google/cpc` e do tráfego do GBP |
| Engajamento → Páginas e telas | `ga4-paginas.csv` | Quais páginas realmente recebem gente |
| Dados demográficos → Detalhes demográficos (dimensão: *Cidade*) | `ga4-cidades.csv` | Se o visitante está em BC ou na cidade de origem da viagem — muda a leitura de tudo |
| Tecnologia → Detalhes (dimensão: *Categoria do dispositivo*) | `ga4-dispositivos.csv` | Transporte é busca de celular; se não for, algo está errado |
| Engajamento → Eventos | `ga4-eventos.csv` | Confirma se `whatsapp_click` está chegando |

**Além dos CSVs**, confira e anote em `coleta-manual.md`:

- Em **Administrador → Eventos**: o evento `whatsapp_click` aparece na lista?
- Em **Administrador → Principais eventos**: ele está marcado como principal
  (conversão)? Hoje o código dispara o evento, mas o acionador e a tag
  correspondente **ainda não foram criados no painel do GTM** — se a resposta
  for "não aparece", a seção de conversão do relatório fica sem dado e essa
  vira a ação nº 1 do ciclo.
- Em **Administrador → Coleta de dados**: os sinais do Google estão ativos?

---

## 3. Google Business Profile

Acesse o perfil pela Busca do Google logado, ou por
[business.google.com](https://business.google.com).

### 3.1 Desempenho

Menu **Desempenho**, período máximo disponível (6 meses):

- Botão de exportar → `gbp-desempenho.csv`. Precisa conter, mês a mês:
  visualizações do perfil separadas por **Pesquisa** e **Maps**, e as
  interações: **cliques no site, solicitações de rota, chamadas, mensagens**.
- Aba **"Buscas que mostraram sua empresa"** → `gbp-consultas.csv`.
  Este é o equivalente local do `gsc-consultas.csv` e, para transporte em
  cidade turística, costuma valer **mais** que o resultado orgânico.

### 3.2 Estado do perfil (anotar em `coleta-manual.md`)

Nada disso exporta; é conferência visual:

- Categoria principal e categorias secundárias
- Quantidade de serviços cadastrados (**esperado: 20**). As três ações do
  mapeamento foram concluídas em ago/2026 — "Motorista Particular" removido,
  "Transporte para Idosos" e "City Tour" adicionados; a conferência agora é
  só de contagem e de etiquetas novas que tenham aparecido
- Número de avaliações e nota média
- Quantidade de fotos e data da última publicada
- Área de atendimento cadastrada — precisa bater **cidade a cidade** com
  `businessInfo.areaServed` em `src/lib/site.ts`
- Telefone e horário — precisam bater com o mesmo arquivo (divergência de NAP
  entre site e perfil enfraquece o ranking local)
- Existe alguma "edição sugerida" pendente ou perfil duplicado?

---

## 4. PageSpeed / Core Web Vitals de laboratório

Rode o [PageSpeed Insights](https://pagespeed.web.dev/) em **modo celular**
para três URLs e anote as notas em `coleta-manual.md`:

- `https://www.astaz.com.br/`
- `https://www.astaz.com.br/servicos/transfer-aeroporto`
- `https://www.astaz.com.br/destinos/aeroporto-navegantes`

De cada uma: as 4 notas (Desempenho, Acessibilidade, Práticas recomendadas,
SEO) e os três números de LCP, CLS e INP.

*(A API pública do PSI recusou as chamadas em 13/08/2026 por cota diária
esgotada — por isso a coleta manual. Dá para automatizar depois com chave
própria.)*

---

## Checklist de fechamento

- [x] `gsc-consultas.csv`, `gsc-paginas.csv`, `gsc-paises.csv`, `gsc-dispositivos.csv`, `gsc-graficos.csv` *(a aba "Datas" veio com o nome "Gráficos")*
- [x] `gsc-nao-indexadas.md` *(sem a coluna de motivo — ver abaixo)*
- [ ] `gsc-core-web-vitals.csv` — **não existe**: o relatório do GSC lê do CrUX, que não publica neste volume de tráfego
- [x] PageSpeed de laboratório nas 3 URLs, em `coleta-manual.md`
- [x] `ga4-aquisicao-canal.csv`, `ga4-origem-midia.csv`, `ga4-paginas.csv`, `ga4-cidades.csv`, `ga4-dispositivos.csv`, `ga4-eventos.csv`
- [ ] `gbp-desempenho.csv`, `gbp-consultas.csv` — **não coletados**
- [x] `coleta-manual.md` preenchido

---

## Para a próxima coleta (13/09/2026)

O que esta edição ensinou. Quatro ajustes e a coleta fecha inteira.

**1. Exportar a coluna de MOTIVO das páginas não indexadas.**
Foi a lacuna mais cara desta edição. A lista de URLs sozinha não diz se o
Google ainda não chegou lá ou se chegou e recusou — e a resposta muda a ação.
No GSC: **Indexação → Páginas**, a tabela do meio já vem agrupada por motivo
("Descoberta — não indexada", "Rastreada — não indexada", "Página alternativa
com tag canônica adequada"…). Exporte **essa tabela**, com a coluna de motivo,
não a lista de URLs.

**2. Exportar o GSC numa única passada.**
Nesta edição as abas não fecharam entre si: datas, dispositivos e países somaram
84 impressões, e a de páginas somou 123. Um único **Exportar → Baixar CSV**, sem
mudar filtro ou período entre um clique e outro, elimina a dúvida.

**3. O desempenho do GBP ficou de fora — é o buraco maior.**
Sem `gbp-desempenho.csv` e `gbp-consultas.csv`, não há como saber quanto contato
vem do Maps, e para transporte local isso costuma ser a maior fatia. Em setembro
o perfil já terá 6 meses de série disponível.

**4. PageSpeed: repetir as mesmas 3 URLs, no mesmo modo celular.**
Nesta edição as três foram medidas à mão e a tabela fechou. Dois lembretes para
manter a comparação válida: **não procure INP no bloco de laboratório** (ele não
existe ali — ver a nota em `coleta-manual.md`), e vale rodar **duas vezes** cada
URL, porque o PSI varia algumas centenas de milissegundos entre execuções e a
diferença que interessa neste site é dessa ordem.

**5. Anotar o elemento de LCP da home.**
Ficou em aberto nesta edição: na página do PSI da home, a seção de diagnóstico
nomeia qual é o "Maior elemento de exibição de conteúdo". Copiar essa linha
resolve a dúvida da seção 5.9 do relatório sem precisar de dedução.

**Nomes de arquivo**: sem duplicar extensão (`.csv.csv`) e sem trocar `.csv` por
`.md` quando houver export real — o `.md` é para o que a ferramenta de fato não
exporta.
