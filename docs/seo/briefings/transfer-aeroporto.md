# Briefing — Transfer Executivo para Aeroportos (hub)

**URL**: `/servicos/transfer-aeroporto`
**Intenção de busca**: quem procura transfer de aeroporto **sem especificar
qual** — "transfer aeroporto balneário camboriú", "transporte executivo
aeroporto SC"
**Status**: ✅ publicada — dados operacionais, critério de escolha e FAQ
confirmados; falta só a foto real
**Prioridade**: 🔴 alta — é o principal distribuidor de autoridade interna do
site

---

## O papel desta página (leia antes de preencher)

Esta é uma página **hub**. Ela não disputa "transfer aeroporto navegantes" —
essa busca é de `/destinos/aeroporto-navegantes`, que já está publicada e
ranqueando. Se este hub repetir o conteúdo de Navegantes, as duas se
canibalizam e o Google escolhe uma só.

O trabalho desta página é: **apresentar os quatro aeroportos lado a lado,
ajudar a pessoa a escolher qual serve para ela, e mandá-la para a página do
destino certo.** O que só ela pode fazer e nenhuma outra faz é a **comparação**.

Por isso, o dado mais valioso aqui não é "como funciona o transfer" (isso as
páginas de rota já contam) — é a **tabela comparativa** da seção 2 e o
**critério de escolha** da seção 3.

---

## Respostas já fornecidas pela Astaz

Vindas dos briefings de [Navegantes](aeroporto-navegantes.md),
[Florianópolis](aeroporto-florianopolis.md) e [Frota](frota.md). **Não precisa
responder de novo** — está aqui só para o texto do hub ficar consistente com as
páginas de rota.

- **Identificação do motorista**: foto e modelo do veículo enviados por WhatsApp
  antes da chegada
- **Ponto de encontro**: área de desembarque, próximo à saída principal, ou
  outro ponto combinado previamente
- **Monitoramento de voo**: informando o número do voo, a equipe acompanha a
  chegada e ajusta o horário da recepção
- **Atraso de voo**: atrasos são considerados; em caso de remarcação, a equipe
  faz o possível para atender o novo horário, conforme disponibilidade
- **Sentido BC → aeroporto**: o horário de saída é planejado considerando o
  trânsito do dia para chegar dentro da antecedência da companhia aérea
- **Voos de madrugada**: atendidos, mediante agendamento
- **Antecedência para agendar**: 1 dia (referência das rotas já publicadas)
- **Frota**: Sedã 4 · SUV 4 a 6 · Van 9 a 20 passageiros
- **Bagagem**: não se publica número — é alinhada no orçamento
- **Cadeirinha / bebê conforto**: disponíveis mediante solicitação na reserva
  (bebê conforto até 13 kg)

---

## Pendências abertas (o que ainda falta decidir ou confirmar)

1. **Fotos** (seção 7) — briefing de produção escrito, fotos ainda não existem.
   A página está no ar com `imageIsPlaceholder: true`. Duas candidatas de banco
   registradas em [imagens-de-referencia.md](../../imagens-de-referencia.md)

Resolvidas: antecedência de saída para Joinville e Curitiba confirmada pela
operação; Curitiba e São José dos Pinhais incluídas no GBP e em
`businessInfo.areaServed`.

---

## 1. Quem chega nesta página

Diferente das páginas de rota, aqui a pessoa **ainda não decidiu o aeroporto**,
ou não sabe que existe diferença. Costuma ser:

- quem está montando a viagem e comparando de onde voar
- quem vai receber um cliente/convidado e não sabe por onde ele chega
- empresa organizando o deslocamento de uma comitiva

### As dúvidas reais, agrupadas por objeção

As dez perguntas levantadas pela operação não são dez assuntos — são **quatro
objeções**. Agrupadas assim, cada uma vira um bloco da página em vez de virar
FAQ solta (e FAQ solta aqui canibalizaria Navegantes).

| # | Objeção | Perguntas que ela reúne | Onde é respondida na página |
| --- | --- | --- | --- |
| 1 | **"Vai ter alguém me esperando quando eu desembarcar?"** | Como encontro o motorista? O motorista espera se meu voo atrasar? Ele acompanha atrasos? | Bloco "Como funciona a recepção" — resumido, com link para a rota |
| 2 | **"Quanto vai custar, e o valor pode mudar depois?"** | Quanto custa? O valor muda depois da reserva? Por que não usar um app? | Tabela comparativa desta seção + CTA de orçamento |
| 3 | **"O veículo dá conta do meu grupo e da bagagem?"** | Qual veículo será utilizado? Quantas malas cabem? | Bloco de frota, com link para `/frota` |
| 4 | **"Vocês atendem no meu horário e no meu aeroporto?"** | Atendem de madrugada? Como reservo? | Tabela dos 4 aeroportos + antecedência |

**A objeção nº 1 é a que trava a decisão** — é ela que deve aparecer no topo da
página, antes de qualquer outra coisa. O mesmo já valeu para a página de
Navegantes.

**Sobre "quanto custa"**: é a segunda pergunta mais frequente e a página **não
responde com número** (a Astaz não publica preço). O que a página responde é a
parte da dúvida que realmente importa: *o valor não muda depois*. Preço fechado
na reserva, sem tarifa dinâmica — essa é a resposta, e ela é uma vantagem.

### O que faria a pessoa escolher um app de corrida ou um táxi

A comparação abaixo é material para a página. **BlaBlaCar saiu**: é carona
compartilhada, não é a alternativa que este cliente considera de verdade — e
comparar com um adversário fácil enfraquece a tabela. Ficam as duas opções
reais: **app de corrida** e **táxi comum**.

> **Como isso vai para o site**: sem emoji. A marcação visual da tabela usa os
> ícones do próprio site (traço, círculo, check) nos tokens de cor do design
> system. Ver seção 8.

| Critério | Astaz | App de corrida | Táxi comum |
| --- | --- | --- | --- |
| **Reserva** | Confirmada com antecedência, para data e hora definidas | Solicitada na hora; depende de motorista disponível | No ponto do aeroporto, por ordem de chegada |
| **Veículo** | Definido na reserva, adequado ao grupo e à bagagem | O modelo varia conforme a disponibilidade | Varia conforme o carro do ponto |
| **Horário de saída** | Escolhido pelo cliente | Depende de encontrar motorista no momento | Depende da fila do ponto |
| **Monitoramento do voo** | Sim — a equipe acompanha atrasos e antecipações | Não | Não |
| **Recepção** | Motorista aguarda no desembarque | É preciso localizar o veículo no ponto de embarque do app | É preciso ir até o ponto de táxi |
| **Preço** | Fechado na reserva, sem tarifa dinâmica | Pode variar com tarifa dinâmica em horário de pico | Taxímetro ou tabela, conforme o trajeto |
| **Bagagem** | Veículo dimensionado para o volume combinado no orçamento | Nem sempre adequado ao volume | Varia conforme o veículo |
| **Cadeirinha / bebê conforto** | Sob solicitação na reserva | Disponibilidade variável | Raramente disponível |
| **Empresas** | Atendimento profissional e comprovante para prestação de contas | Limitado | Recibo avulso |
| **Viagem** | Exclusiva, em veículo executivo revisado | Exclusiva; padrão do veículo varia | Exclusiva; padrão do veículo varia |

**Regra ao publicar**: a tabela afirma o que a Astaz faz e descreve o
funcionamento conhecido das alternativas — não as ataca. Onde o app ou o táxi
são equivalentes (viagem exclusiva, por exemplo), a tabela diz que são. Essa
honestidade é o que dá credibilidade ao resto.

## 2. Dados operacionais — tabela comparativa (obrigatório)

**Esta tabela é a razão de existir da página.** É o conteúdo que nenhum
concorrente local publica e que responde a pergunta real de quem chega aqui.

| Aeroporto | Sigla | Distância até BC | Tempo médio | Tempo em alta temporada |
| --- | --- | --- | --- | --- |
| Navegantes | NVT | 40 km ✅ | 40 min ✅ | 1h30 ✅ |
| Florianópolis | FLN | 100 km ✅ | 1h30 ✅ | 3h ✅ |
| Joinville | JOI | 120 km ✅ | 1h45 ✅ | 3h ✅ |
| Curitiba | CWB | 220 km ✅ | 3h ✅ | 6h ✅ |

O aeroporto de Curitiba (Afonso Pena) fica em **São José dos Pinhais**, não na
capital — vale citar na página, porque é a dúvida de quem vai buscar alguém lá.

**Antecedência recomendada de saída de BC, por aeroporto**:

| Aeroporto | Sair de BC com quanta antecedência | Origem do dado |
| --- | --- | --- |
| Navegantes | 2h a 3h antes do embarque | ✅ confirmado |
| Florianópolis | 3h a 4h antes do embarque | ✅ confirmado |
| Joinville | 3h30 a 4h antes do embarque | ✅ confirmado |
| Curitiba | 5h a 6h antes do embarque | ✅ confirmado — considera a Serra do Mar |

## 3. Como a pessoa escolhe o aeroporto (o coração da página)

**O enquadramento mudou.** A pergunta original deste briefing era "em que
situação vale ir a Florianópolis em vez de Navegantes?", partindo da ideia de
que a pessoa escolhe o aeroporto e depois o transporte. A operação corrigiu: na
prática, **o cliente fecha o voo primeiro e só então procura o transfer**.

Isso não elimina a comparação — muda o que ela serve para fazer. A página não
diz "escolha este aeroporto"; ela diz **"seja qual for o aeroporto do seu voo,
veja o que ele significa em estrada"**. O critério é o tempo de trajeto, não a
malha aérea.

### Florianópolis × Navegantes

| Aeroporto | O que ele oferece | O que custa |
| --- | --- | --- |
| **Florianópolis (FLN)** | Mais opções de voo, mais destinos e **voos internacionais** | 100 km e 1h30 de estrada — o dobro do tempo, com a entrada da Ilha como gargalo |
| **Navegantes (NVT)** | Menos tempo em trânsito: 40 km, 40 min | Malha aérea menor, menos opções de horário |

A frase que resume o critério, e que deve aparecer na página: **quem prioriza
opção de voo embarca em Florianópolis; quem prioriza menos tempo de estrada
embarca em Navegantes.**

### Joinville e Curitiba

Curitiba raramente é a escolha de quem mora em BC — é quase sempre o
**movimento contrário**: o cliente chega de Curitiba para Balneário Camboriú,
porque o voo dele aterrissou lá (tarifa, conexão ou malha internacional).

Isso muda o texto da página: para CWB, o sentido natural é **aeroporto → BC**,
não BC → aeroporto. É um ângulo que nenhuma outra página do site cobre.

### Pendência de consistência — encaminhada

Curitiba aparece em `siteConfig.airports` e na descrição do GBP, mas não estava
em `businessInfo.areaServed`. **Decisão da operação: incluir Curitiba e São José
dos Pinhais no Google Business Profile.**

Ordem obrigatória, pela regra do mapeamento:

1. Curitiba e São José dos Pinhais entram no GBP
2. Só depois entram em `businessInfo.areaServed` (`src/lib/site.ts`)
3. Só então a página pode citá-las como área atendida

Enquanto o passo 1 não estiver concluído, a página cita os quatro aeroportos na
tabela (é informação de trajeto, não de cobertura) mas não afirma cobertura em
Curitiba.

## 4. Particularidades que só vocês sabem

- **Navegantes** — o trecho imprevisível é a passagem por **Itajaí**, nos
  trevos norte e sul
- **Florianópolis** — o gargalo é a **entrada da Ilha**
- **Joinville** — sem particularidade relevante além do próprio tempo de BR-101
- **Curitiba** — a **Serra do Mar**. É o motivo de o tempo dobrar em alta
  temporada: a serra pode parar por completo, e a operação já enfrentou **mais
  de 2 horas parado** no trecho. Não é congestionamento comum de rodovia; é o
  fator que torna esse trajeto o de maior variação dos quatro
- Atender um aeroporto pequeno (NVT/JOI) ou grande (FLN/CWB) **não muda** a
  recepção no desembarque
- **Nenhum** dos quatro tem acesso ou estacionamento que complique a recepção
- A época que muda o cálculo em todos os trajetos é a **alta temporada**

## 5. Perguntas frequentes reais

⚠️ **Não repita as FAQs de Navegantes nem de Florianópolis.** As perguntas
daqui são de **comparação e de serviço em geral**, não de rota.

1. **P:** Quais aeroportos a Astaz atende a partir de Balneário Camboriú?
   **R:** Navegantes, Florianópolis, Joinville e Curitiba. O aeroporto de
   Curitiba (Afonso Pena) fica em São José dos Pinhais.

2. **P:** Qual aeroporto fica mais perto de Balneário Camboriú?
   **R:** Navegantes — 40 km, cerca de 40 minutos de trajeto fora da alta
   temporada.

3. **P:** Vale a pena embarcar em Florianópolis em vez de Navegantes?
   **R:** Depende do que pesa mais na sua viagem. Florianópolis tem mais opções
   de voo, mais destinos e voos internacionais; Navegantes fica a menos de
   metade da distância e reduz o tempo de estrada. Quem prioriza a malha aérea
   embarca em Florianópolis; quem prioriza menos tempo em trânsito, em
   Navegantes.

   > *Ajustada conforme revisão: a versão anterior afirmava que os voos de FLN
   > são mais baratos. Preço de passagem é dado de terceiro e muda de temporada
   > em temporada — publicado em schema `FAQPage`, viraria informação errada na
   > página. A resposta agora se apoia em malha aérea e distância, que são
   > estáveis.*

4. **P:** O transfer atende quem está saindo de outra cidade da região, não só
   de Balneário Camboriú?
   **R:** Sim. *(Listar na copy as cidades de `businessInfo.areaServed`, não uma
   lista escrita à mão — a lista da página precisa bater com o GBP.)*

5. **P:** Quanto tempo a mais devo considerar em alta temporada?
   **R:** Entre dezembro e março o tempo de trajeto pode dobrar em qualquer um
   dos quatro trajetos. No caminho para Curitiba a variação é maior, por causa
   da Serra do Mar.

6. **P:** Por que contratar um transfer executivo em vez de um app de corrida?
   **R:** *(Resumir a tabela da seção 1: reserva confirmada, veículo definido,
   monitoramento do voo, preço fechado sem tarifa dinâmica. Sem atacar o app.)*

## 6. Veículos e capacidade

A frota é a mesma das páginas de rota — este hub não precisa repetir a tabela
inteira, só linkar para `/frota`.

**O trajeto não muda a recomendação de veículo**, nem nos percursos mais longos
(CWB, FLN). A escolha segue o número de passageiros e o volume de bagagem,
alinhados no orçamento.

## 7. Fotos disponíveis

O hub não é uma rota específica, então foto de um terminal em particular
confunde — a fachada de Navegantes já pertence à página daquela rota.

**Status**: as duas fotos serão produzidas pela operação. Registrar em
[docs/imagens-de-referencia.md](../../imagens-de-referencia.md) quando
existirem. Até lá, `imageIsPlaceholder: true`.

> Verificado no banco de imagens: **hoje não existe candidata que sirva**. A
> foto da mão abrindo a porta do sedã é a mais alinhada ao Manifesto, mas é
> vertical (2:3) e o site usa 16/9 e 21/9. A outra candidata é uma fila de BMW
> Série 7 com emblema visível — a frota real é Nissan Sentra, AION V, Jeep
> Commander e Sprinter, e publicá-la prometeria um veículo que o cliente não vai
> receber.

### Foto 1 — hero (21/9 ou 16/9, horizontal)

**O que mostrar**: um veículo da frota parado na área de desembarque, com o
motorista de pé ao lado da porta traseira aberta, em posição de recepção. É a
tradução visual da objeção nº 1 da seção 1 — *"vai ter alguém me esperando?"*.

- Fotografar **na horizontal**, com folga nas laterais: o corte 21/9 come as
  bordas, e a composição precisa sobreviver a isso
- Motorista **de costas ou de perfil**, sem rosto nítido. Resolve direito de
  imagem e é o que o Manifesto pede: o motorista atende sem aparecer
- Enquadrar de forma que a **placa não fique legível**
- Luz do início da manhã ou fim de tarde. Sol a pino cria sombra dura na
  lataria escura e estoura o concreto do desembarque
- Se algum terminal aparecer ao fundo, que seja **irreconhecível** — o hub não
  é a página de nenhum aeroporto específico

### Foto 2 — conteúdo (16/9, horizontal)

**O que mostrar**: as mãos do motorista acomodando a mala no porta-malas
aberto. Responde a objeção nº 3 (*"cabe minha bagagem?"*) sem publicar número de
malas, que é justamente o que a Astaz não quer afirmar.

- Sem rosto, mesma regra da foto 1
- Porta-malas **organizado** — uma mala jogada contradiz o texto sobre cuidado
- Alternativa, se a primeira não render: interior do veículo limpo, banco
  traseiro, porta aberta

### Regras que valem para as duas

- **Fotografar o veículo que está em `/frota`.** Se o hero mostra um carro que
  não aparece na página de frota, as duas páginas se contradizem
- Mínimo de 3000 px de largura, para sobrar resolução depois do corte
- Sem passageiro identificável. Se aparecer alguém além do motorista, precisa de
  autorização de uso de imagem por escrito
- Veículo lavado, sem adesivo de terceiro e sem lixo visível na cabine

## 8. O que NÃO dizer

- Não prometer tempo exato de trajeto — trânsito não se controla, e a Serra do
  Mar é o exemplo mais claro disso
- Não repetir o texto de recepção no desembarque palavra por palavra das
  páginas de rota — resumir e linkar
- Não afirmar cobertura em Curitiba antes de a cidade entrar no GBP e em
  `areaServed`
- Não publicar comparação de **preço de passagem aérea** entre aeroportos — é
  dado de terceiro e volátil
- Não usar emoji na tabela comparativa nem no restante da página. A marcação
  visual usa os tokens e ícones do design system, conforme o Manifesto

---

## Checklist antes de publicar

- [x] Tabela comparativa da seção 2 completa — **bloqueava a publicação**
- [x] Antecedência de saída para Joinville e Curitiba confirmada pela operação
- [x] Seção 3 respondida: critério de escolha definido (malha aérea × tempo de
      estrada) e sentido invertido de Curitiba registrado
- [x] FAQ não repete Navegantes nem Florianópolis
- [x] Curitiba e São José dos Pinhais incluídas no GBP
- [x] Cidades citadas estão em `areaServed` (`src/lib/site.ts`)
- [x] Linka para os `/destinos/aeroporto-*` publicados e para `/frota`
- [x] Recebe link do hub `/servicos` (`published: true` em
      `src/lib/content/servicos.ts`; o `noIndex` do hub saiu junto)
- [x] Entrada adicionada em `publishedRoutes` (`src/lib/routes.ts`)
- [ ] Fotos 1 e 2 produzidas e registradas em `imagens-de-referencia.md`
      *(não bloqueia — está no ar com `imageIsPlaceholder: true`)*
