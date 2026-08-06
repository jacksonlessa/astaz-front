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
| `/servicos/transfer-aeroporto` | transfer aeroporto executivo sc *(hub)* | Transfer Executivo para Aeroportos | 🔴 alta | ✅ publicada |
| `/destinos/beto-carrero` | transporte / transfer para beto carrero | Transfer para o Beto Carrero World | 🔴 alta | ✅ publicada |
| `/destinos/aeroporto-florianopolis` | transfer aeroporto florianópolis bc | Transfer Aeroporto Florianópolis–Balneário Camboriú | 🟡 média | ✅ publicada |
| `/frota` | frota / veículos disponíveis | Frota Executiva | 🟡 média | ✅ publicada |
| `/contato` | contato, orçamento | Contato e Orçamento | 🟡 média | **Fase 1 — única página que falta** |
| `/sobre` | quem é a astaz *(confiança, E-E-A-T)* | Sobre o transporte executivo em Balneário Camboriú | 🟢 baixa | ✅ publicada |
| `/servicos` | hub — o que a empresa faz | Serviços de Transporte Executivo | 🟡 média | ✅ publicada |
| `/destinos` | hub de destinos | Destinos Atendidos | 🟡 média | ✅ publicada |
| `/eventos` | hub de eventos sazonais | Transporte para Eventos em SC | 🟢 baixa | Fase 3 |
| `/servicos/transporte-corporativo` | transporte corporativo bc | Transporte Corporativo em Balneário Camboriú | 🟡 média | Fase 2 |
| `/servicos/transporte-idosos` | transporte de idosos para consultas e exames | Transporte para Idosos em Balneário Camboriú | 🟡 média | ✅ publicada *(antecipada da Fase 2)* |
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

✅ **Títulos** — conferidos em 06/08/2026: todas as páginas publicadas estão
dentro do orçamento. O maior é `/destinos/aeroporto-florianopolis`, com 51
caracteres (59 com o sufixo), depois de encurtado para
`Transfer Aeroporto Florianópolis–Balneário Camboriú`.

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

## Fase 1 — o que ainda falta

A Fase 1 deixou de ser só uma lista de páginas. Além de `/contato`, entraram
cinco frentes que não são página nova, mas que travam o site: imagem que não
carrega, home desatualizada em relação às páginas já publicadas, identidade
visual provisória, ausência total de medição e a base legal que a medição exige.

Ordem de execução:

| # | Frente | Bloqueado por |
| --- | --- | --- |
| 1 | GTM + GA4 | ✅ feito em 06/08/2026 — falta o acionador `whatsapp_click` no painel |
| 2 | Revisão da home | — |
| 3 | `/contato` | — |
| 4 | Banner de consentimento + `/politica-de-privacidade` | — |
| 5 | Meta Pixel | item 4 no ar |
| 6 | Logo e favicon | ✅ feito em 06/08/2026 — falta só `Footer` e `opengraph-image` |
| 7 | Fotos reais (frota, desembarque, serviços) | operação |

`opengraph-image` do item 6, aliás, também já saiu do zero: `siteConfig.ogImage`
(`src/lib/site.ts`) alimenta `openGraph.images` e `twitter.images` no
[layout raiz](../../src/app/layout.tsx) com a foto real do motorista. Falta
só o `Footer` para o item 6 fechar de vez.

**Medição primeiro.** Enquanto não houver GTM, cada dia de tráfego é dado
perdido que não se recupera depois. Os itens 6 e 7 dependem de material externo
e correm em paralelo — não seguram os demais.

### 1. Imagens quebradas e provisórias

Levantamento de 06/08/2026, conferido contra `https://www.astaz.com.br`.

**Quebrada de verdade (1)** — ✅ corrigida em 06/08/2026:

| Referência | Onde aparecia | Situação |
| --- | --- | --- |
| `/images/transfer-aeroporto.webp` | hero de `/servicos/transfer-aeroporto`, com `priority` | O arquivo nunca existiu em `public/images/` — a página principal de captação abria com 404 no lugar da capa. **Resolvido** reapontando para `hero-transfer-aeroporto.webp`, com o `alt` reescrito para descrever a foto real. Continua `imageIsPlaceholder: true` até haver foto do desembarque |

**Imagens de banco genéricas (7)** — carregam, mas são fotos remotas do
Unsplash, de veículos que a Astaz não tem. Nenhuma passou pelas verificações
descritas em [imagens-de-referencia.md](../imagens-de-referencia.md):

| Arquivo | Onde | Card / bloco |
| --- | --- | --- |
| `src/lib/site.ts` | home → Serviços | Corporativo |
| `src/lib/site.ts` | home → Serviços | Eventos & Ocasiões |
| `src/lib/site.ts` | home → Serviços | Sob Demanda |
| `src/components/landing/fleet.tsx` | home → Frota | Sedã Executivo |
| `src/components/landing/fleet.tsx` | home → Frota | SUV Premium |
| `src/components/landing/fleet.tsx` | home → Frota | Van Executiva |
| `src/components/landing/experience.tsx` | home → Experiência | interior do veículo |

Duas observações que valem mais que a lista:

- As três imagens de frota e a de experiência estão **hardcoded no componente**,
  contra a regra de conteúdo do projeto. Ao substituí-las, o caminho certo é
  movê-las para `src/lib/content/frota.ts` e `src/lib/site.ts`.
- **`/frota` não tem uma única foto.** É a página de conversão do site, e o
  detalhamento abaixo já registra que foto de banco ali destrói a credibilidade
  da página inteira. Foto real dos veículos é o insumo que só a operação tem.

**Placeholders assumidos (2)** — já marcados com `imageIsPlaceholder: true` e
registrados em [imagens-de-referencia.md](../imagens-de-referencia.md).
Carregam, não são urgentes, mas continuam na fila:
`aeroporto-florianopolis.webp` (terminal que não é o de Florianópolis) e
`transporte-idosos.webp` (banco traseiro que não é da frota).

### 2. Revisão da home

A home foi escrita quando o site tinha uma página só. Desde então nasceram sete
páginas, e ela não aponta para quase nenhuma.

- **Os cards de Serviços não são links.** São `<article>` estáticos. `/servicos/transfer-aeroporto`
  e `/servicos/transporte-idosos` estão publicados e não recebem link da home —
  só do hub. A home é a página com mais autoridade do site; é dela que o link
  interno vale mais.
- **Os títulos dos cards não batem com as páginas.** "Transfer Aeroporto",
  "Corporativo", "Eventos & Ocasiões" e "Sob Demanda" são de antes do mapa de
  serviços; hoje existem seis serviços definidos em `src/lib/content/servicos.ts`.
- **A seção de frota linka para `/frota`, mas os cards não linkam para nada.**
- **`navLinks` ainda tem duas âncoras** (`/#como-funciona`, `/#faq`). O próprio
  comentário em `src/lib/site.ts` prevê que virem rota conforme a Fase 1 avança
  — `/faq` está na Fase 2, então a âncora fica por ora.
- **Nenhum caminho para `/contato`** — a decidir junto com a criação da página.

### 3. Logo e favicon

✅ **Resolvido em 06/08/2026** — a operação forneceu o arquivo vetorial
oficial da identidade (pasta `Identidade Visual - Astaz/Logotipo/SVG (vetor)`).

- **Favicon**: `src/app/favicon.ico` (16/32px), `icon.png` (512px) e
  `apple-icon.png` (180px) substituem o ícone padrão do `create-next-app`.
  Composição: o ícone oficial (`Ícone Dourado.svg`, arco dourado) sobre círculo
  cheio `#121212` (`--color-secondary`), traço recolorido para `#c5a059`
  (`--color-primary` — o arquivo original usa `#d6b050`, levemente diferente do
  token do site). Gerado via `qlmanage` (rasterização do SVG) + script Python
  que empacota os PNGs num `.ico` válido — não há `rsvg-convert`/ImageMagick
  disponível no ambiente. Os SVGs de origem ficam versionados em
  `public/images/icone-astaz-dourado.svg` e
  `public/images/logo-astaz-vertical-branco.svg`, para não depender de novo
  acesso à pasta local se precisar regenerar.
- **Logo do header**: `Header` (`src/components/landing/header.tsx`) trocou o
  lettering em Libre Caslon por `public/images/logo-astaz-vertical-branco.svg`
  (a versão "Vertical Branco" da identidade — vetor real de "ASTAZ" +
  "TRANSPORTE EXECUTIVO", não fonte web). Renderizado com `<img>` simples (não
  `next/image`): é um asset estático, não precisa do otimizador, e evita
  configurar `dangerouslyAllowSVG`.
- ✅ **`opengraph-image`**: `siteConfig.ogImage` (`src/lib/site.ts`) alimenta
  `openGraph.images` e `twitter.images` no layout raiz, usando a foto real do
  motorista (`sobre-astaz-motorista.webp`) — não é o arquivo especial
  `opengraph-image.tsx` do App Router, é a meta tag `og:image` populada por
  metadata. Resolve o link do WhatsApp saindo sem imagem.
- **Pendente**: o mesmo ajuste de logo no `Footer`
  (`src/components/landing/footer.tsx`, que ainda tem o lettering antigo).

### 4. GTM com Google Analytics e Meta Pixel

✅ **GTM + GA4 no ar desde 06/08/2026.** O Meta Pixel continua pendente do
item 5 (consentimento).

Decisão de arquitetura mantida: **um único container do GTM no código**; GA4 e
Meta Pixel configurados dentro do GTM, não no repositório. Trocar ou
acrescentar tag não exige deploy.

- Contêiner: `GTM-KQMGLBGM`. GA4 já configurado dentro do GTM pela operação
  (measurement ID `G-DKP3RR8H95`), disparando pageview em `All Pages`.
- Código: `<GoogleTagManager gtmId={...} />` de `@next/third-parties/google` no
  [layout raiz](../../src/app/layout.tsx), lendo de `NEXT_PUBLIC_GTM_ID`
  (`.env.local`, não versionada; `.env.example` documenta a variável). Sem ela
  definida, o componente não renderiza e o site funciona normal — não é
  obrigatória para rodar local.
- **Evento que importa**: clique no WhatsApp. Implementado em
  [`whatsapp-button.tsx`](../../src/components/ui/whatsapp-button.tsx) — o
  único ponto de saída para o WhatsApp no site, por isso é ali (e não em cada
  página) que o clique é medido. Virou Client Component (`usePathname` +
  `sendGTMEvent`) e cobre `WhatsAppButton`, `WhatsAppIconButton` e, por
  consequência, `FloatingWhatsApp`, que usa o segundo.
  - Evento: `whatsapp_click`, com `cta_page` (pathname atual) e `cta_message`
    (a mensagem pré-preenchida, que já varia por página — funciona como sinal
    de intenção sem precisar de uma prop nova em cada chamador).
  - Testado manualmente disparando o clique via console: o evento chega ao
    `dataLayer` com os dois parâmetros. **Falta**: criar o acionador de evento
    personalizado `whatsapp_click` no GTM, a tag de evento GA4 correspondente,
    e marcar como conversão no GA4 — isso é feito no painel, não no código.

### 5. Consentimento e privacidade (LGPD)

Entrou na Fase 1 por decisão de 06/08/2026, junto com o Pixel. O Meta Pixel
envia dado pessoal para terceiro; a LGPD (art. 8º) exige base legal e
informação clara antes disso.

Escopo:

- **Banner de consentimento**, com recusa tão fácil quanto o aceite. Client
  Component, decisão guardada localmente.
- **`/politica-de-privacidade`** — página utilitária, `noIndex: true` via
  `buildMetadata()`, linkada no rodapé. Não entra em `publishedRoutes`: não é
  página de busca.
- **Disparo condicionado**: GTM sobe sempre; o Pixel só dispara depois do
  aceite, via Consent Mode. GA4 pode operar em modo restrito antes do aceite —
  decidir na configuração do container, não no código.

O container do GTM e o GA4 podem subir antes do banner ficar pronto; o Pixel,
não.

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
