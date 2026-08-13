# Coleta manual — edição 2026-08-13

O que nenhuma ferramenta exporta em CSV. Preencha substituindo os `—`.
Se algo não existir, escreva **"não configurado"** — é um resultado, não uma
lacuna a preencher com estimativa.

---

## Datas de referência

| Item | Valor |
| --- | --- |
| Domínio no ar desde | — |
| Primeiro deploy do site atual | — |
| GTM/GA4 medindo desde | 06/08/2026 *(confirmado no código)* |
| Propriedade do GSC criada em | — |
| GBP criado / verificado em | — |

---

## Google Search Console

| Item | Valor |
| --- | --- |
| Propriedade existe e está verificada? | — |
| Tipo (domínio ou prefixo de URL) | — |
| Páginas **indexadas** | 2 |
| Páginas **não indexadas** | 10 |
| Sitemap enviado? | Sim |
| Data da última leitura do sitemap | 11/08/2026 |
| URLs descobertas no sitemap *(esperado: 11)* | 11 |
| Core Web Vitals tem dados? | — |
| Alguma ação manual ou problema de segurança? | — |

---

## Google Analytics 4

| Item | Valor |
| --- | --- |
| Evento `whatsapp_click` aparece em Administrador → Eventos? | — |
| Está marcado como **principal** (conversão)? | — |
| Acionador `whatsapp_click` criado no GTM? | — |
| Tag de evento GA4 correspondente criada? | — |
| Tag do Meta Pixel condicionada a `ad_storage` / `ad_user_data`? | — |
| Sinais do Google ativos? | — |

> As quatro primeiras linhas decidem se a seção de conversão do relatório
> existe. Enquanto forem "não", o site mede audiência e não negócio.

---

## Google Business Profile

| Item | Valor |
| --- | --- |
| Categoria principal | Serviço de transporte |
| Categorias secundárias | sem outras |
| Nº de serviços cadastrados *(esperado: 19)* | 19 |
| "City Tour" adicionado? | Não |
| "Transporte de Idosos" adicionado? | Não, está "Transporte para Idosos" |
| "Motorista Particular" removido? | Sim |
| Nº de avaliações | 9 |
| Nota média | 5 |
| Nº de fotos | 13 |
| Data da última publicação/foto | 12/08/2026 |
| Área de atendimento bate com `areaServed`? | sim |
| Telefone bate com `siteConfig.phone` (+55 47 99726-9700)? | Sim |
| Horário bate com `businessInfo.openingHours` (24h)? | Sim |
| Edições sugeridas pendentes ou perfil duplicado? | publicado |


### Lista completa 

Serviço de transporte para aeroporto
Empresa de transporte
Transporte Executivo
Transfer Aeroporto
Táxi Executivo
Transfer para Aeroporto de Navegantes
Transporte executivo com monitoramento de voo, pontualidade e atendimento 24 horas mediante agendamento.
Transfer para Aeroporto de Florianópolis
Recepção em Aeroportos
Transporte para Aeroportos
Transporte Corporativo
Transporte para Reuniões
Transporte para Empresas
Transporte para Eventos
Atendimento para congressos, casamentos, shows e eventos empresariais.
Transporte para Casamentos
Transporte para Congressos
Transporte para Feiras
Transporte para Shows
Transfer para Beto Carrero
Transporte privativo com conforto e segurança para famílias e grupos.
Transporte para Idosos
Transporte executivo para idosos em Balneário Camboriú e região: consultas, exames, terapias e compromissos de família. O motorista apoia no embarque e no desembarque, aguarda durante o atendimento e avisa a família na chegada. Agendamento com antecedência e o mesmo padrão de conforto de sempre.
---

## Posicionamento local

Busca **anônima** (janela privada, sem estar logado), com localização em
Balneário Camboriú. Registre em que posição a Astaz aparece no **pacote local**
(o bloco do mapa, com 3 resultados) e no **orgânico** (a lista azul abaixo).
Se não aparecer, escreva "fora".

| Termo buscado | Pacote local | Orgânico |
| --- | --- | --- |
| transporte executivo balneário camboriú | Fora | Fora |
| transfer aeroporto navegantes | Fora | Fora |
| transfer balneário camboriú aeroporto navegantes | Fora | Fora |
| transfer aeroporto florianópolis balneário camboriú | Fora | Fora |
| transporte para beto carrero | Fora | Fora |
| motorista executivo balneário camboriú | Fora | Fora|
| transporte de idosos balneário camboriú | Fora | Fora |

*Esta é a tabela que mais importa repetir igual no mês que vem — mesmos termos,
mesma forma de buscar. Termo trocado no meio do caminho invalida a comparação.*

---

## PageSpeed Insights (celular)

Números do **laboratório** (bloco do Lighthouse, o de baixo na página do PSI).

| URL | Desemp. | Acess. | Práticas | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 92 | 96 | 100 | 100 | 3,1 s | 0 | — |
| `/servicos/transfer-aeroporto` | 98 | 93 | 100 | 100 | 2,3 | 0 | — |
| `/destinos/aeroporto-navegantes` | 96 | 89 | 100 | 100 | 2,5 | 0 | — |

> **A coluna de INP saiu daqui de propósito — era um erro do template.**
> INP é métrica de **campo**: mede o tempo entre uma interação real e o próximo
> quadro pintado. O teste de laboratório carrega a página e não clica em nada,
> então não tem o que medir — nenhuma ferramenta de lab produz INP, nunca.
>
> No PSI, INP só aparece no **bloco de cima** (dados de usuários reais, vindos do
> CrUX), e o CrUX só publica quando a URL ou a origem passa de um volume mínimo
> de tráfego. Este site não passa, e por isso esse bloco nem aparece. O mesmo
> vale para o relatório de Core Web Vitals do GSC, que lê da mesma fonte.
>
> No lugar, a coluna é **TBT** (Total Blocking Time): existe sempre no
> laboratório e é o proxy aceito de INP. Quando o site tiver tráfego de verdade,
> o bloco de campo do PSI passa a aparecer sozinho e aí o INP entra na tabela.

### Campo (CrUX) — preencher só quando existir

| URL | Origem tem dados de campo? | LCP | CLS | INP |
| --- | --- | --- | --- | --- |
| `/` | não *(tráfego abaixo do limiar)* | — | — | — |

---

## Concorrência

Dois ou três concorrentes locais que aparecem nas buscas acima. O que eles
cobrem que a Astaz não cobre.

motorista executivo balneário camboriú

| Concorrente | Onde aparece | Observação |
| --- | --- | --- |
| JrSá | transporte executivo balneário camboriú | principal concorrente |
| JrSá | motorista executivo balneário camboriú | principal concorrente |
| Roberta Gomez | motorista executivo balneário camboriú |  |
| Roberta Gomez | transporte de idosos balneário camboriú | trip advisor |
| Tour Facil | transfer aeroporto navegantes | site de turismo |
| Tour Facil | transfer balneário camboriú aeroporto navegantes | site de turismo |
| Tour Facil | transfer aeroporto florianópolis balneário camboriú | site de turismo |
| Tour Facil | transporte para beto carrero | site de turismo |


### Perfis no Google — repetir estas colunas em toda edição

| Concorrente | Nota | Avaliações | Fotos | Anos no mercado | Categoria principal | Anuncia? |
| --- | ---: | ---: | ---: | --- | --- | --- |
| San Rafael Transporte Executivo | 4,9 | 127 | 90+ | mais de 10 | Agência de locação de vans | **sim** |
| Transportes Executivo *(Blumenau)* | 4,6 | 2.400 | — | mais de 35 | Serviço de transporte | — |
| JrSá Prime Executive — Motorista Executivo | 4,9 | 67 | — | — | — | — |
| Roberta Transporte Executivo | 5,0 | 36 | — | mais de 5 | Serviço de transporte | — |
| MOTORISTA TRANSFER EXECUTIVO | 4,5 | 11 | — | — | — | — |
| **Astaz** | **5,0** | **9** | **13** | **não exibido** | Serviço de transporte | não |

> ⚠️ **A captura de 13/08/2026 que trouxe San Rafael e Transportes Executivo foi
> feita com a conta da Astaz logada** (selo "Você gerencia o perfil desta
> empresa"). Nota, avaliações, fotos e anúncio são confiáveis; **a ordem dos
> resultados não é**. Para posição, vale só a tabela anônima acima.

**Anúncios de concorrentes** — anotar sempre que aparecer um "Patrocinado":

| Anunciante | Termo | Texto do anúncio | Destino |
| --- | --- | --- | --- |
| San Rafael | *(bloco local, 13/08)* | "Motorista Premium bc — Motorista particular com segurança e conforto premium. Solicite orçamento agora!" | `sanrafaelturismo.com.br` |