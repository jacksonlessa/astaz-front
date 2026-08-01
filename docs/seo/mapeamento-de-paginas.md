# Mapeamento de páginas e intenções de busca

Documento vivo. É a fonte de verdade para **qual página responde qual busca**.
Antes de criar qualquer página nova, ela precisa ter uma linha aqui — e essa
linha precisa descrever uma intenção que **nenhuma outra página já cobre**.

## A regra que governa este documento

> **1 URL = 1 intenção de busca.**

Duas páginas disputando a mesma busca não somam: o Google escolhe uma e
descarta as outras, ou desconfia das duas. Toda vez que houver dúvida entre
"crio uma página nova" e "reforço uma existente", a resposta padrão é
**reforçar a existente**.

## Aviso sobre volume de busca

**Nenhum número de volume de busca aparece neste documento.** As prioridades
abaixo são raciocínio sobre intenção comercial e concorrência aparente — não
são dados. Antes de investir esforço pesado em qualquer página, valide com:

- **Google Search Console** (depois que o site tiver histórico) — mostra as
  buscas reais que já trazem gente, incluindo as que você não previu
- **Google Keyword Planner** — volume estimado por termo/região
- **Autocomplete e "Pesquisas relacionadas"** do próprio Google, buscando de
  Balneário Camboriú

Se os dados contradisserem a priorização daqui, os dados ganham.

---

## Conflitos identificados e como foram resolvidos

Estes conflitos existiam na lista original de páginas. Ficam registrados para
não voltarem.

| Descartado | Motivo | Quem cobre a intenção |
| --- | --- | --- |
| `/transfer-aeroporto-navegantes-balneario-camboriu` | Mesma intenção do destino | `/destinos/aeroporto-navegantes` |
| `/transfer-balneario-camboriu-aeroporto-navegantes` | O Google não distingue direção de rota — seria conteúdo duplicado do item acima | `/destinos/aeroporto-navegantes` (cobre ida e volta) |
| `/transporte-executivo-balneario-camboriu` | A empresa é sediada em BC; a home já é a página local | `/` |
| `/transporte-corporativo-balneario-camboriu` | Idem — o título da página de serviço já carrega a cidade | `/servicos/transporte-corporativo` |
| `/transfer-beto-carrero` | Duplicaria o destino | `/destinos/beto-carrero` |
| `/transporte-executivo-itajai` | Intenção de origem, não de destino — uma página forte serve as duas | `/destinos/itajai` |
| Menu `/rotas` | A origem é sempre BC; "rota" e "destino" seriam a mesma coisa | `/destinos/*` |
| `/destinos/oktoberfest` | Oktoberfest é um evento em Blumenau, não um destino | `/eventos/oktoberfest-blumenau` + `/destinos/blumenau` |

---

## Conflito resolvido: `/servicos/transporte-executivo` × home

A home tem como título `ASTAZ | Transporte Executivo em Balneário Camboriú`.
Uma página `/servicos/transporte-executivo` disputaria a mesma busca — e
perderia, porque a home concentra os links externos e a autoridade do domínio.

**Decisão**: `/servicos` vira **hub** e não existe `/servicos/transporte-executivo`
separado. O termo genérico continua sendo da home; o hub organiza e distribui
para os serviços específicos.

O ângulo "motorista à disposição" virou `/servicos/motorista-particular`, que é
intenção distinta e está cadastrado como serviço no GBP (junto de "Táxi
Executivo").

---

## Serviços do GBP → páginas do site

O Google Business Profile tem **19 serviços cadastrados**; o site terá **6
páginas**. Isso não é inconsistência: no GBP, serviço funciona como etiqueta de
palavra-chave e quantidade ajuda. No site, cada página precisa responder uma
intenção que nenhuma outra cobre — quantidade prejudica.

O mapa vive em `src/lib/content/servicos.ts`, no campo `gbpServices`, para
garantir que nenhuma etiqueta do perfil fique sem página correspondente.

| Página do site | Etiquetas do GBP que absorve |
| --- | --- |
| `/servicos/transfer-aeroporto` | Serviço de transporte para aeroporto · Transfer Aeroporto · Transfer para Aeroporto de Navegantes · Transfer para Aeroporto de Florianópolis · Transporte para Aeroportos · Recepção em Aeroportos |
| `/servicos/transporte-corporativo` | Transporte Corporativo · Transporte para Reuniões · Transporte para Empresas · Empresa de transporte |
| `/servicos/transporte-eventos` | Transporte para Eventos · Transporte para Congressos · Transporte para Feiras · Transporte para Shows |
| `/servicos/transporte-casamentos` | Transporte para Casamentos |
| `/servicos/motorista-particular` | Motorista Particular · Táxi Executivo · Transporte Executivo |
| `/servicos/city-tour` | — *(não cadastrado no GBP; vale adicionar)* |
| `/destinos/beto-carrero` | Transfer para Beto Carrero |

**Congressos e feiras** aparecem em corporativo e em eventos. A divisão
adotada: `/servicos/transporte-eventos` fica com congressos, feiras e shows;
`/servicos/transporte-corporativo` fica com a agenda executiva do dia a dia
(reuniões, visitas técnicas, deslocamentos entre compromissos).

**Ação no GBP**: adicionar "City Tour" à lista de serviços.

---

## Tabela mestre

Orçamento de caracteres: **título ≤ 52** (o template do layout acrescenta
` | ASTAZ`, 8 caracteres, totalizando ≤ 60) e **description entre 120 e 158**.

| URL | Intenção que responde | Título (sem sufixo) | Prioridade | Status |
| --- | --- | --- | --- | --- |
| `/` | transporte executivo balneário camboriú | *(default do layout)* | — | ✅ publicada |
| `/destinos/aeroporto-navegantes` | transfer aeroporto navegantes bc | Transfer Aeroporto Navegantes a Balneário Camboriú | 🔴 alta | ✅ publicada |
| `/servicos/transfer-aeroporto` | transfer aeroporto executivo sc *(hub)* | Transfer Executivo para Aeroportos | 🔴 alta | Fase 1 |
| `/destinos/beto-carrero` | transporte / transfer para beto carrero | Transfer para o Beto Carrero World | 🔴 alta | Fase 1 |
| `/destinos/aeroporto-florianopolis` | transfer aeroporto florianópolis bc | Transfer Aeroporto de Florianópolis a Balneário Camboriú ⚠️ | 🟡 média | Fase 1 |
| `/frota` | frota / veículos disponíveis | Nossa Frota Executiva | 🟡 média | Fase 1 |
| `/contato` | contato, orçamento | Contato e Orçamento | 🟡 média | Fase 1 |
| `/sobre` | quem é a astaz *(confiança, E-E-A-T)* | Sobre a Astaz | 🟢 baixa | Fase 1 |
| `/servicos` | hub — o que a empresa faz | Serviços de Transporte Executivo | 🟡 média | ✅ publicada |
| `/destinos` | hub de destinos | Destinos Atendidos | 🟡 média | ✅ publicada |
| `/eventos` | hub de eventos sazonais | Transporte para Eventos em SC | 🟢 baixa | Fase 3 |
| `/servicos/transporte-corporativo` | transporte corporativo bc | Transporte Corporativo em Balneário Camboriú | 🟡 média | Fase 2 |
| `/servicos/motorista-particular` | motorista particular / à disposição | Motorista Particular à Disposição | 🟡 média | Fase 2 |
| `/servicos/transporte-eventos` | transporte para eventos e congressos | Transporte para Eventos e Congressos | 🟢 baixa | Fase 2 |
| `/servicos/transporte-casamentos` | carro para casamento bc | Transporte para Casamentos | 🟢 baixa | Fase 2 |
| `/servicos/city-tour` | city tour balneário camboriú | City Tour em Balneário Camboriú | 🟢 baixa | Fase 2 |
| `/destinos/itajai` | transporte executivo itajaí | Transporte Executivo e Transfer em Itajaí | 🟡 média | Fase 2 |
| `/destinos/balneario-camboriu` | ⚠️ risco de canibalizar a home | *a definir* | 🟢 baixa | Fase 2 |
| `/destinos/bombinhas` | transfer para bombinhas | Transfer para Bombinhas | 🟢 baixa | Fase 2 |
| `/destinos/penha` | transfer para penha | Transfer para Penha | 🟢 baixa | Fase 2 |
| `/destinos/blumenau` | transporte executivo blumenau | Transfer para Blumenau | 🟢 baixa | Fase 2 |
| `/eventos/oktoberfest-blumenau` | transporte oktoberfest blumenau | Transporte para a Oktoberfest de Blumenau | sazonal | Fase 3 |
| `/eventos/marejada-itajai` | transporte marejada itajaí | Transporte para a Marejada de Itajaí | sazonal | Fase 3 |
| `/eventos/fenarreco-brusque` | transporte fenarreco brusque | Transporte para a Fenarreco de Brusque | sazonal | Fase 3 |
| `/faq` | dúvidas gerais | Perguntas Frequentes | 🟢 baixa | Fase 2 |

⚠️ **Títulos acima do orçamento** — `/destinos/aeroporto-florianopolis` tem 56
caracteres e estoura para 64 com o sufixo. Precisa ser encurtado antes de
publicar.

⚠️ **`/destinos/balneario-camboriu`** — a home já é a página de BC. Só criar se
tiver um recorte próprio (ex.: *receptivo para quem chega a BC*). Caso
contrário, cortar.

### Cobertura vs. GBP

Área de cobertura atual, espelhada em `businessInfo.areaServed`: Balneário
Camboriú, Camboriú, Itajaí, Navegantes, Itapema, Bombinhas, Penha, Brusque,
Blumenau, Joinville, São Francisco do Sul, Florianópolis. ✅ site e GBP alinhados.

**Regra**: nenhuma cidade pode ser citada como atendida numa página se não
estiver em `areaServed` — e nada entra em `areaServed` antes de entrar no GBP.
Site e perfil precisam contar a mesma história.

---

## Detalhamento das páginas da Fase 1

Para cada página: os blocos de conteúdo, os links internos e — o mais
importante — **o que só você sabe**, que é o insumo que impede a página de
virar template genérico.

### `/destinos/aeroporto-navegantes` 🔴 piloto

**Intenção**: alguém que vai chegar ou sair pelo Aeroporto de Navegantes (NVT)
e precisa de transporte até Balneário Camboriú. Intenção comercial altíssima —
essa pessoa já vai contratar alguém, é só decidir quem.

**Blocos**:
1. Hero com o par origem/destino explícito
2. Dados objetivos da rota: distância, tempo médio, tempo em alta temporada
3. Como funciona a recepção no desembarque (placa? onde encontra o motorista?)
4. Monitoramento de voo — o que acontece se o voo atrasa
5. Veículos disponíveis para essa rota + capacidade de bagagem
6. FAQ específica da rota (`FAQPage` schema)
7. CTA WhatsApp com mensagem pré-preenchida citando a rota

**Links internos**: → `/servicos/transfer-aeroporto` (hub), → `/frota`,
← recebe link da home e do hub.

**Só você sabe**:
- Distância e tempo real BC ↔ NVT, e quanto piora entre dezembro e março
- Ponto exato de encontro no desembarque de Navegantes
- Política de espera se o voo atrasa — quanto tempo, cobra a mais?
- Faixa de preço da rota (mesmo que "a partir de")
- Se atende voos de madrugada

### `/servicos/transfer-aeroporto` 🔴

**Intenção**: quem busca transfer de aeroporto sem especificar qual. Esta é a
página **hub** — não deve competir com Navegantes; deve apresentar os quatro
aeroportos e distribuir o tráfego para os destinos.

**Blocos**: o que é o serviço → tabela comparativa dos 4 aeroportos (distância
e tempo de cada um até BC) → como funciona → FAQ → CTA.

**Links internos**: → cada `/destinos/aeroporto-*`. É o principal distribuidor
de autoridade interna do site.

**Só você sabe**: distância e tempo de cada aeroporto até BC; qual compensa
para cada situação (ex.: quando vale ir a Florianópolis em vez de Navegantes).

### `/destinos/beto-carrero` 🔴

**Intenção**: famílias e grupos indo ao parque. Busca sazonal com pico em
férias escolares e feriados.

**Blocos**: rota BC → Penha, tempo e distância → por que ir de transfer em vez
de dirigir (estacionamento, cansaço, volta à noite) → veículos por tamanho de
grupo → política de espera durante o dia no parque → FAQ → CTA.

**Só você sabe**: tempo real até Penha; como funciona a espera (motorista fica?
volta depois? cobra por hora?); se tem cadeirinha para criança — **isto é
decisivo para esse público**.

### `/destinos/aeroporto-florianopolis` 🟡

Mesma estrutura de Navegantes. Prioridade menor porque Navegantes é o aeroporto
natural de BC — quem busca Florianópolis geralmente tem um motivo específico
(voo internacional, tarifa melhor). Vale explorar esse ângulo no conteúdo.

### `/frota` 🟡

**Intenção**: comparação — a pessoa já quer contratar e está avaliando veículo.
Página de **conversão**, não de captação.

**Só você sabe**: modelos reais, ano, capacidade de passageiros, capacidade de
malas, e **fotos reais dos veículos**. Foto de banco de imagem aqui destrói a
credibilidade da página inteira.

### `/contato` 🟡

Formulário de orçamento que monta uma mensagem estruturada de WhatsApp.

Campos sugeridos: data, horário, origem, destino, nº de passageiros, nº de
malas, tipo de veículo, observações. O envio abre o WhatsApp via
`getWhatsAppUrl()` com o texto já formatado.

⚠️ **Nenhum dado do formulário deve ir para query string de URL nossa nem para
backend** — não existe backend, e não vamos criar um só para isso. O formulário
monta o texto no cliente e entrega ao WhatsApp.

### `/sobre` 🟢

Prioridade baixa em tráfego, mas alta em **confiança**. Sinal de E-E-A-T
(experiência, especialização, autoridade, confiabilidade) que sustenta todas as
outras páginas — e é a página que fecha a venda para quem está em dúvida.

**Só você sabe**: história real da Astaz, quem conduz, tempo de operação,
critérios de seleção de motorista, formação/certificações, foto real da equipe.

---

## Checklist obrigatório por página nova

- [ ] Tem linha na tabela mestre acima, com intenção que nenhuma outra cobre
- [ ] Usa `buildMetadata()` de `src/lib/seo.ts` (garante canonical)
- [ ] Título ≤ 52 caracteres, description entre 120 e 158
- [ ] Um único `<h1>`, contendo a intenção principal
- [ ] Entrada adicionada em `publishedRoutes` (`src/lib/routes.ts`) — sem isso
      não entra no sitemap
- [ ] `BreadcrumbList` via `breadcrumbSchema()`
- [ ] `FAQPage` **apenas** se as perguntas aparecem na tela
- [ ] Recebe link de pelo menos uma outra página (página órfã não ranqueia)
- [ ] Copy validada contra o [Manifesto](../../Manifesto.md), seções 8 a 11
- [ ] Zero copy hardcoded fora de `src/lib/`
- [ ] `npm run lint` e `npm run build` sem erros
