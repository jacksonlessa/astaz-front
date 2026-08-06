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
| `/servicos/motorista-particular` | "motorista particular" é busca de quem procura **vaga de emprego**, não de quem contrata transporte | `/servicos/transporte-corporativo` e `/servicos/city-tour` (ver seção abaixo) |

---

## Conflito resolvido: `/servicos/transporte-executivo` × home

A home tem como título `ASTAZ | Transporte Executivo em Balneário Camboriú`.
Uma página `/servicos/transporte-executivo` disputaria a mesma busca — e
perderia, porque a home concentra os links externos e a autoridade do domínio.

**Decisão**: `/servicos` vira **hub** e não existe `/servicos/transporte-executivo`
separado. O termo genérico continua sendo da home; o hub organiza e distribui
para os serviços específicos.

---

## Conflito resolvido: `/servicos/motorista-particular` descartado

A página existia para o ângulo "motorista à disposição". Foi **removida** depois
de uma checagem das buscas reais: "motorista particular" é dominado por intenção
de **emprego** — gente procurando vaga de motorista, não gente contratando
transporte. Uma página otimizada para esse termo atrairia tráfego que nunca
converte e diluiria a autoridade das páginas que convertem.

**Quem cobre a intenção comercial que sobrou**:

| Ângulo | Página que absorve |
| --- | --- |
| Veículo à disposição por período, roteiro que muda no dia | `/servicos/transporte-corporativo` |
| Passeio com paradas à escolha do cliente | `/servicos/city-tour` |
| Roteiros fora do padrão | bloco "Roteiros sob demanda" do hub `/servicos` |

**Ação no GBP**: remover a etiqueta "Motorista Particular" do perfil, pelo mesmo
motivo — ela atrai candidatos a vaga, não clientes.

---

## Página nova: `/servicos/transporte-idosos`

Entrou no lugar de `motorista-particular`. Intenção comercial clara e
concorrência local baixa: famílias organizando o deslocamento de um pai, mãe ou
avô para consultas, exames e compromissos recorrentes — frequência alta e
relação de longo prazo, não corrida avulsa.

**Limite que a copy não pode ultrapassar**: o serviço é *transporte com
acompanhamento* — apoio no embarque e no desembarque, espera durante o
atendimento, contato com a família. **Não** é serviço de saúde: nada de sugerir
cuidador, enfermagem, remoção de paciente ou qualquer procedimento clínico.
Prometer isso é problema regulatório, não só de tom de voz.

O léxico fechado — palavra a palavra, o que pode e o que não pode ser
publicado — está em [briefings/transporte-idosos.md](briefings/transporte-idosos.md).
A descrição "transporte com acompanhamento" vale aqui, em documento interno; no
texto do site, não.

**Só você sabe**: se o motorista acompanha até a recepção da clínica; como
funciona a espera e a cobrança durante a consulta; se atende cadeira de rodas ou
passageiro com mobilidade reduzida (e como); se existe contato/aviso para a
família na chegada; se há formato recorrente (mensal, semanal).

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
| `/servicos/transporte-idosos` | Transporte para Idosos *(cadastrado no GBP em ago/2026)* |
| `/servicos/city-tour` | — *(não cadastrado no GBP; vale adicionar)* |
| `/destinos/beto-carrero` | Transfer para Beto Carrero |
| `/` *(home)* | Transporte Executivo · Táxi Executivo — termos genéricos, cobertos pelo título da home |

**Congressos e feiras** aparecem em corporativo e em eventos. A divisão
adotada: `/servicos/transporte-eventos` fica com congressos, feiras e shows;
`/servicos/transporte-corporativo` fica com a agenda executiva do dia a dia
(reuniões, visitas técnicas, deslocamentos entre compromissos).

**Ações no GBP**: adicionar "City Tour" e "Transporte de Idosos" à lista de
serviços; remover "Motorista Particular" (ver conflito resolvido abaixo).

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
| `/servicos/transporte-idosos` | transporte de idosos para consultas e exames | Transporte para Idosos em Balneário Camboriú | 🟡 média | Fase 2 |
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
5. Veículos disponíveis para essa rota (sem capacidade de bagagem — não há
   número definido, é alinhado no orçamento)
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

**Só você sabe**: modelos reais, ano, capacidade de passageiros e **fotos reais
dos veículos**. Foto de banco de imagem aqui destrói a credibilidade da página
inteira. Capacidade de bagagem não entra: é alinhada no orçamento.

### `/contato` 🟡

Formulário de orçamento que monta uma mensagem estruturada de WhatsApp.

Campos sugeridos: data, horário, origem, destino, nº de passageiros, tipo de
veículo, observações. O envio abre o WhatsApp via
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
