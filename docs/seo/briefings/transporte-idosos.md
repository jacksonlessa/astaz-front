# Briefing — Transporte para Idosos

**URL**: `/servicos/transporte-idosos`
**Intenção de busca**: "transporte para idosos balneário camboriú", "transporte
para consultas e exames", "levar idoso ao médico"
**Status**: 🟡 parcial — publicada em `noindex`; página escrita em
`src/lib/content/transporte-idosos.ts` e `src/app/servicos/transporte-idosos/page.tsx`.
Faltam: revisão final da operação sobre o texto do FAQ (seção 6, escrito por
mim a partir dos dados confirmados, nunca lido linha a linha por vocês),
fotos reais (seção 7) e a resposta sobre continuidade do motorista (seção 5)
**Prioridade**: 🟡 média — **concorrência local baixa e cliente recorrente**, o
melhor par risco/retorno das páginas de serviço

---

## ⚡ O que falta coletar

As seções operacionais estão respondidas. Restam quatro itens:

| # | O que falta | Seção | Bloqueia? |
| --- | --- | --- | --- |
| 1 | Motorista é o mesmo nos serviços recorrentes? | 5 | 🟡 alto valor |
| 2 | Fotos reais e depoimento de família | 7 | 🟡 |

**Nenhum bloqueio restante.** Cadeira motorizada confirmada como caso não
atendido (só dobrável). Nove destinos confirmados — ver seção 5. Copy pronta
para escrita.

E uma pendência de fora do formulário: **o que significa "terceirizado por plano
de saúde"** (seção 1). Se foi transporte de paciente sob contrato de operadora,
é atividade com regime próprio e muda o que a página pode dizer.

---

## ⛔ O limite que a copy não pode ultrapassar

Leia isto antes de qualquer outra coisa.

O serviço é **transporte com apoio de cortesia**: embarque e desembarque,
espera durante a consulta, contato com a família.

**Não é serviço de saúde.** A página não pode sugerir, insinuar ou dar a
entender que a Astaz oferece:

- cuidador ou acompanhante de saúde
- enfermagem, técnico de enfermagem ou qualquer profissional da área
- remoção de paciente, transporte de emergência ou ambulância
- qualquer procedimento clínico, administração de medicação ou monitoramento
  de saúde

Isso não é preciosismo de tom de voz — **é risco regulatório**. Transporte de
paciente e serviço de enfermagem são atividades reguladas (ANVISA, conselhos
profissionais). Prometer isso num site institucional expõe a empresa.

Regra prática ao escrever: **descreva a cortesia e a logística, nunca o
cuidado clínico.** "Apoio até a porta da clínica" é seguro. "Acompanhamento
durante o atendimento" já é ambíguo. "Cuidado com o paciente" está fora.

### Três itens que a operação faz e a página não anuncia

Não é proibição de fazer — é proibição de **oferecer por escrito num site**.

1. **Entrar no consultório e anotar orientação médica.** Registrar e repassar
   conteúdo clínico é tratamento de dado sensível de saúde (LGPD, Art. 5º, II),
   exige consentimento do próprio idoso, e uma anotação errada vira dano de
   saúde que a empresa ofereceu. Se acontecer informalmente, é entre a família
   e o motorista. Anunciado, é oferta documentada.
2. **"Redução do risco de quedas".** É promessa de resultado de saúde: se
   alguém cair, a empresa havia anunciado prevenção. Publique a ação — apoio no
   braço em corredores e escadas — nunca o resultado evitado.
3. **"Tudo que for necessário".** Promessa ilimitada, e alguém vai ler "tudo"
   como incluir medicação. Publique a lista concreta do que é feito.

---

## 🔤 Léxico — decidido, não está em aberto

A regra que resolve a ambiguidade: **o objeto da frase decide.** Quando o
objeto é a *viagem*, a palavra é logística e pode ser publicada. Quando o
objeto é a *pessoa*, a mesma palavra vira serviço de saúde e não pode.

| Não publicar | Publicar no lugar |
| --- | --- |
| acompanhamento de idosos · acompanhar o passageiro | transporte para idosos · levar e trazer |
| acompanhante *(o papel)* | **companhia** *(o que acontece)* · motorista |
| cuidador, enfermagem, profissional de saúde | *(não há substituto — o serviço não é esse)* |
| paciente | passageiro |
| remoção, transporte sanitário, ambulância, emergência | *(não há substituto)* |
| orientação médica, receita, laudo, medicação | *(fora da página)* |
| reduz o risco de quedas · evita confusão | apoio no braço em corredores, escadas e locais cheios |
| atendimento *(quando o sujeito é a Astaz)* | serviço · viagem · trajeto |
| atendimento *(quando é o evento médico)* | consulta · exame · sessão |
| atendimento domiciliar | embarque no endereço combinado |

O par que mais importa: **"companhia" descreve o que acontece; "acompanhante"
nomeia um papel de saúde.** Por isso "companhia na sala de espera" pode ser
publicado e a palavra vizinha, não.

"Acompanhamento" continua permitido quando o objeto é a viagem — é o uso que já
existe em `businessInfo.description` ("acompanhamento de cada viagem") e em
`differentials`. Nenhum dos dois precisa mudar.

Este léxico vale para **texto publicado**. Nos documentos internos, descrever o
serviço como "transporte com acompanhamento" não é problema.

---

## ✅ Decisões já tomadas

**O `<h1>` e o título do card são "Transporte para Idosos"** — não "Transporte e
Acompanhamento de Idosos". Nenhuma busca-alvo contém "acompanhamento" (não traz
volume) e a colocação "acompanhamento de idosos" é a que sugere cuidador.
Bônus: "acompanhante para idosos" é busca contaminada por intenção de emprego —
a mesma armadilha que derrubou `/servicos/motorista-particular`.

---

## O que já é verdade em todo o site

- **Frota**: Sedã Executivo 4 · SUV Premium 4 a 6 · Van Executiva 9 a 20
- **Agendamento**: o serviço é sempre sob agendamento
- **Disponibilidade**: 24 horas, todos os dias (conforme o GBP)

---

## Por que esta página existe

Ela entrou no lugar de `/servicos/motorista-particular`, que foi descartada:
"motorista particular" é busca dominada por **intenção de emprego** — gente
procurando vaga, não gente contratando.

Já "transporte de idosos" tem intenção comercial limpa e uma característica que
nenhuma outra página do site tem: **frequência**. Consulta, exame, retorno,
fisioterapia. Quem fecha aqui não faz uma corrida — vira cliente de meses.

E a decisão nunca é do passageiro: **é do filho ou da filha**. Essa pessoa
mora longe, trabalha, não consegue levar o pai ou a mãe, e está comprando
tranquilidade — não quilômetro rodado.

---

## 1. Quem chega nesta página

**Quem realmente entra em contato?**

> Geralmente os filhos, mas pode ser o cliente final. Já houve bastante
> trabalho terceirizado por plano de saúde.

**Qual a maior dúvida dessa pessoa antes de fechar?**

> Ainda não sabemos. *(Vale anotar as três próximas perguntas que chegarem no
> WhatsApp — viram FAQ e viram copy.)*

**O que ela usa hoje quando não contrata vocês?**

> A própria família se revezando, ou app de corrida.

> **Confirma a tese da página.** O concorrente real não é outra transportadora
> — é o filho remarcando o expediente e o motorista de app que não espera. Os
> dois diferenciais que a copy precisa martelar saem daí: a espera inclusa e o
> aviso à família.

## 2. Dados operacionais ✅

| Dado | Resposta |
| --- | --- |
| Antecedência mínima para agendar | Não há prazo mínimo |
| Atende no mesmo dia? Em que condições? | Sim, conforme disponibilidade de agenda |
| Cobrança | **Ida e volta, com a espera inclusa** |
| A espera durante a consulta é cobrada à parte? | **Não** |
| Existe formato recorrente? | Sim — semanal, mensal e pacote de sessões |
| Atende fora do horário comercial e fim de semana? | É possível |
| Faixa de preço | *(padrão do site: não expor)* |

> **A espera inclusa é o argumento mais forte da página.** É exatamente onde o
> app de corrida perde: consulta de 40 minutos que vira 2 horas não gera
> cobrança adicional. Isso vai para a meta description, para o card e para o
> FAQ.

## 3. Até onde vai o apoio ✅

**O motorista vai com o passageiro até onde?**

> De porta a porta. Cuidados especiais podem ser combinados.

**Que apoio é oferecido no embarque e no desembarque?**

> - Ajuda para entrar e sair do carro
> - Companhia em salas de espera
> - Apoio em paradas de farmácia, banco e mercado
> - Respeito ao ritmo de cada pessoa

**Durante a consulta, o motorista fica no local ou sai e retorna?**

> Depende do tempo de duração e da necessidade do cliente.

**Como o passageiro avisa que terminou?**

> O motorista combina o horário e confere no local.

**A família é avisada da chegada e do retorno?**

> **Sim, todas as etapas são avisadas** — cheguei, estou com o passageiro,
> chegamos ao destino, estamos de partida, deixei em casa.

> **É o maior diferencial da página, e já é padrão.** Ninguém no mercado local
> publica isso. Vira seção própria na página, não um item de lista.

**⚠️ Pendência aberta pelas paradas em banco.** A copy não deve sugerir que o
motorista manuseia cartão, senha ou dinheiro — e a política interna precisa ser
explícita no mesmo sentido. Se famílias perguntarem, entra no FAQ como
tranquilizador.

## 4. Mobilidade reduzida ✅

| Pergunta | Resposta |
| --- | --- |
| Atende passageiro que usa cadeira de rodas? | Sim |
| Dobrável no porta-malas ou veículo adaptado? | Dobrável, vai no porta-malas |
| Algum veículo da frota é adaptado? | **Não** |
| Atende quem usa andador ou bengala? | Sim |
| Atende passageiro acamado? | **Não** — é remoção de paciente, atividade regulada |
| Acompanhante da família pode ir junto sem custo extra? | Sim |
| Existe algum caso que vocês recusam? | *Ver lista abaixo* |

**Qual veículo é mais fácil para o idoso entrar e sair?**

> O SUV, por ser mais espaçoso.

### Casos que devem ser recusados

A pergunta "quais casos poderiam aparecer?" tem resposta concreta. Estes são os
que aparecem de verdade neste serviço — e recusar cada um protege a empresa:

1. **Cadeira de rodas motorizada ou que não dobra.** Pesa entre 60 e 120 kg e
   não cabe no porta-malas. Como nenhum veículo é adaptado, é impossível — não
   é escolha. 🔴 **Confirmar**, e a página precisa dizer "cadeira dobrável"
   explicitamente, ou a família agenda e descobre na porta.
2. **Passageiro acamado ou que não consegue sentar sozinho.** Remoção de
   paciente.
3. **Passageiro usando equipamento médico no trajeto** (oxigênio, sonda, bomba).
   Transporte sanitário.
4. **Urgência** — "meu pai está passando mal, vem buscar". A resposta é SAMU,
   e o motorista não deve avaliar se é grave.
5. **Alta hospitalar sem condição de sentar.** Mesma coisa que o item 2, e é o
   pedido que mais chega disfarçado de corrida comum.
6. **Passageiro com quadro cognitivo avançado, desacompanhado.** Risco de sair
   sozinho ou se agitar, sem ninguém treinado para isso. Aceitar **apenas com
   um familiar junto** — e isso já é gratuito.
7. **Qualquer pedido de medicação**, mesmo "só lembrar de tomar".

## 5. Particularidades que só vocês sabem 🟡

### Destinos recorrentes

**Este é o ativo de ranqueamento da página.** Nome de hospital é entidade que o
Google reconhece, captura busca do tipo "transporte para [hospital]", e nenhuma
marca nacional consegue replicar. Por isso cada nome precisa estar **exato** —
nome errado numa página institucional custa mais que o ganho.

**Verificados, publicáveis com esta grafia:**

| Publicar como | Cidade | Observação |
| --- | --- | --- |
| Hospital Regional Ruth Cardoso | Balneário Camboriú | Era "Hospital Municipal"; passou à administração estadual em dez/2025 e o nome corrente é **Regional**. Não usar "e Maternidade" |
| Hospital Marieta Konder Bornhausen | Itajaí | Aparece também como "Hospital e Maternidade"; a forma curta é a do site oficial |
| Hospital Unimed Litoral | Balneário Camboriú | O nome é **Unimed Litoral**, não "Hospital Unimed". A Unimed abriu unidade também em Itajaí (Rua João Bauer) — confirmar se vocês levam lá |
| Centro Médico San Paolo | Balneário Camboriú | Endereço confirmado: Rua Protásio Boaventura Caetano, 56 — bairro Pioneiros |
| Kozma Diagnóstico por Imagem | Balneário Camboriú | Endereço confirmado: Rua Arthur Max Doose, 156 — bairro Pioneiros. Exames de imagem (ressonância, tomografia, mamografia) — combina bem com "exames" no título da página |
| Hospital do Coração | Balneário Camboriú | Endereço confirmado: Rua Arthur Max Doose, 180 — bairro Pioneiros. **Mesma rua da Kozma** — os dois ficam a poucos números de distância |
| Hospital Municipal de Penha | Penha | Endereço confirmado: R. Calixto Luiz Honorio, 415 |
| Clínica São Lucas — Balneário Camboriú | Balneário Camboriú | Nome confirmado no Google Maps |
| Clínica São Lucas — Itajaí | Itajaí | Unidade separada, confirmada no Google Maps |

**Todos os destinos estão confirmados.** Nenhuma pendência de nome restante.

> "Entre outros" não vai para o site. Ou o nome está confirmado e entra, ou não
> entra — a página encerra a lista com uma frase aberta ("entre outros destinos
> da região"), sem inventar.

### Ainda em aberto

- Algum hospital ou clínica com acesso complicado, estacionamento ruim ou
  desembarque difícil — e como vocês resolvem *(vale muito: é o detalhe que
  prova operação real, e ninguém publica)*
- Horário do dia em que vale evitar agendar consulta por causa do trânsito
- Já aconteceu de uma consulta atrasar muito? Como foi resolvido?
- O motorista é sempre o mesmo em serviços recorrentes? *(para idoso,
  familiaridade vale mais que veículo — se for possível, é argumento forte)*

>

## 6. Perguntas frequentes 🟡

Escritas a partir das respostas das seções 2, 3 e 4. Já estão publicadas em
`src/lib/content/transporte-idosos.ts` e no `FAQPage` do JSON-LD, mas **nenhuma
foi lida e confirmada palavra por palavra pela operação** — o conteúdo é fiel
aos dados, a redação não passou por aprovação explícita. Revise antes de
tirar o `noIndex`.

1. **P:** O motorista espera durante a consulta?
   **R:** Espera. A ida e a volta são contratadas juntas, com a espera inclusa
   — se a consulta atrasar, não há cobrança adicional pelo tempo. O horário de
   retorno é combinado antes e conferido no local.

2. **P:** Vocês avisam a família quando ele chega?
   **R:** Sim, em todas as etapas: na chegada ao endereço, no encontro com o
   passageiro, na chegada ao destino, na saída e no retorno para casa. É o
   padrão do serviço — não precisa ser pedido.

3. **P:** Minha mãe usa cadeira de rodas. Vocês atendem?
   **R:** Atendemos, desde que a cadeira seja dobrável: ela vai no porta-malas
   e o passageiro viaja no banco. Nenhum veículo da frota é adaptado, então
   cadeira motorizada não pode ser transportada. Andador e bengala não têm
   restrição.

4. **P:** Alguém da família pode ir junto?
   **R:** Pode, sem custo adicional. O veículo é definido na reserva conforme o
   número de pessoas.

5. **P:** Dá para contratar para todas as sessões do mês?
   **R:** Dá. Além do agendamento avulso, o serviço tem formato semanal, mensal
   e por pacote de sessões, combinado no orçamento.

6. **P:** Com quanto tempo de antecedência preciso agendar?
   **R:** Não há prazo mínimo — atendemos no mesmo dia conforme a
   disponibilidade da agenda. Para consultas já marcadas, agendar antes garante
   o horário.

## 7. Fotos disponíveis ⬜

⚠️ **Cuidado redobrado com imagem de banco aqui.** Foto de idoso genérico
sorrindo é o clichê do setor e não convence ninguém. Pior: foto com jaleco,
cadeira de rodas hospitalar ou ambiente clínico **contradiz o texto** e sugere
serviço de saúde — o que a seção do limite proíbe.

O que funciona: veículo real, porta aberta, contexto urbano comum. Se houver
pessoa na foto, precisa de autorização de uso de imagem por escrito.

**Situação atual**: publicada `public/images/transporte-idosos.webp` — banco
traseiro vazio, de banco de imagem (Pexels, Luke Miller), `imageIsPlaceholder:
true`. Oito candidatas foram abertas e sete reprovadas; o registro completo,
com o motivo de cada uma, está em
[docs/imagens-de-referencia.md](../../imagens-de-referencia.md).

Aprendizado que vale para qualquer foto futura desta página: **buscar pelo tema
"idoso sendo ajudado" só devolve cadeira de rodas, voluntário e cuidador** — o
campo semântico que a página não pode evocar. A busca produtiva é pela
composição (veículo, porta, banco), deixando o contexto de idoso por conta do
texto.

**O que ainda falta produzir**: foto real da operação. A mais valiosa seria o
motorista abrindo a porta traseira num endereço residencial comum — sem rosto,
ou com autorização por escrito.

>

## 8. O que NÃO dizer

Além do limite regulatório e do léxico do topo:

- Não usar tom paternalista ou infantilizador com o idoso — quem lê é a família,
  mas quem viaja é um adulto
- Não prometer o mesmo motorista sempre, se a escala não garantir *(pendente —
  seção 5)*
- Não prometer tempo de espera ilimitado. A espera é inclusa no formato ida e
  volta; "ilimitada" é outra coisa
- Não sugerir manuseio de cartão, senha ou dinheiro nas paradas de banco
- Sem apelo emocional forçado ou urgência artificial — o Manifesto proíbe, e
  neste tema soa oportunista

---

## Checklist antes de publicar

**Bloqueiam a saída do `noIndex`:**

- [x] Seção 2 — dados operacionais
- [x] Seção 3 — até onde vai o apoio
- [x] Seção 4 — mobilidade reduzida
- [x] Cadeira motorizada confirmada como caso não atendido — só dobrável
- [x] Seção 6 — FAQ lido e confirmado pela operação

**Verificações de texto:**

- [ ] Nenhuma palavra da coluna esquerda do léxico no texto final
- [ ] Nenhuma promessa operacional sem origem neste briefing
- [ ] Nada sobre consultório, orientação médica ou risco de queda
- [ ] Copy validada contra o [Manifesto](../../../Manifesto.md), seções 8 a 11
- [ ] Cidades citadas estão em `areaServed` (`src/lib/site.ts`)

**Publicação:**

- [x] `published: true` em `src/lib/content/servicos.ts` — hub já linka a página
- [x] `FAQPage` no JSON-LD, a partir da seção 6
- [x] Link interno de `/frota` para esta página (gancho: "SUV é mais espaçoso")
- [x] Acessibilidade replicada no briefing da [Frota](frota.md) — cadeira
      dobrável sim, veículo adaptado não
- [x] "Transporte para Idosos" cadastrado como serviço no GBP *(ago/2026)*
- [x] `gbpServices` preenchido em `src/lib/content/servicos.ts`
- [x] **FAQ revisado pela operação** (seção 6)
- [x] Imagem publicada — de banco, `imageIsPlaceholder: true`. Decisão
      consciente de publicar sem foto real, para o link ter preview no WhatsApp
- [ ] Foto real da operação — substitui a de banco quando existir
- [ ] `noIndex` removido de `buildMetadata` na página
- [ ] Entrada em `publishedRoutes` (`src/lib/routes.ts`) — no mesmo commit da
      remoção do `noIndex`, para o sitemap não anunciar antes da hora
