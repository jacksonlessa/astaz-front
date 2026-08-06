# Imagens de referência

Banco de imagens candidatas para o site, com a licença registrada no momento em
que a imagem entrou nesta lista. Serve para dois propósitos: não perder uma foto
boa que alguém achou, e ter de onde responder "de onde veio essa imagem?" meses
depois.

**Nada aqui está publicado por estar nesta lista.** Isto é uma fila de
candidatas — a decisão de usar é a etapa seguinte.

## Antes de publicar qualquer imagem de banco

O Pexels libera o **direito autoral** (uso comercial, sem exigência de crédito,
modificação permitida). Isso resolve uma parte do problema, não todas. Sobram
três verificações que ninguém faz por nós:

1. **Pessoa identificável.** O Pexels não garante autorização do retratado. No
   Brasil, direito de imagem em peça publicitária é do retratado (art. 20 do
   Código Civil), não do fotógrafo. Prefira foto sem rosto: mão, silhueta,
   contraluz, pessoa de costas.
2. **Veículo que a Astaz não tem.** Publicar uma fila de sedãs alemães sugere
   uma frota que não existe. É a regra que o [briefing da
   frota](seo/briefings/frota.md) já traz: veículo impecável descrito com
   honestidade converte mais que frota inflada.
3. **Cenário que contradiz o texto.** Sinalização estrangeira, neve, placa de
   outro país — numa página sobre o litoral de Santa Catarina, o visitante
   atento percebe.

## Em uso hoje

| Arquivo | Origem | Observação |
| --- | --- | --- |
| `public/images/aeroporto-florianopolis.webp` | [Pexels 37535047](https://www.pexels.com/photo/travelers-with-luggage-at-modern-airport-terminal-37535047/), foto de Mike Mijares | Passageiros com malas em contraluz. P&B, terminal asiático — **não** é Florianópolis. `imageIsPlaceholder: true` |
| `public/images/aeroporto-navegantes.webp` | Fornecida pela operação | Fachada do terminal de Navegantes |
| `public/images/beto-carrero-world.webp` | Fornecida pela operação | Entrada do parque, não o serviço |
| `public/images/hero-transfer-aeroporto.webp` | Fornecida pela operação | Sedã em pista de aeroporto. Serve a home **e** o hero de `/servicos/transfer-aeroporto`, que até 06/08/2026 apontava para um `transfer-aeroporto.webp` inexistente. Repetição assumida enquanto não houver foto do desembarque. `imageIsPlaceholder: true` no hub |
| `public/images/transporte-idosos.webp` | [Pexels 14667496](https://www.pexels.com/photo/back-seat-of-a-car-14667496/), foto de Luke Miller | Banco traseiro vazio, couro preto. Sem pessoa e sem emblema — conferido em 3000px. **Não** é veículo da frota. `imageIsPlaceholder: true` |
| `public/images/frota-sedan-nissan-sentra.jpg` | Fornecida pelo usuário (foto de catálogo do fabricante/concessionária) | Nissan Sentra, categoria Sedã Executivo. Fundo branco de estúdio — estilo diferente das demais fotos do site, que são ambientadas. Usada na seção Frota da home (`src/components/landing/fleet.tsx`) |
| `public/images/frota-suv-aion-v.jpg` | Fornecida pelo usuário (foto de catálogo do fabricante/concessionária) | AION V, categoria SUV Premium. Mesma origem e ressalva de estúdio da foto do Sentra acima |
| `public/images/frota-van-sprinter.jpg` | Fornecida pelo usuário (foto de catálogo do fabricante/concessionária) | Mercedes-Benz Sprinter, categoria Van Executiva. Mesma origem e ressalva de estúdio da foto do Sentra acima |

Além dessas, `src/lib/site.ts` ainda serve três imagens remotas do Unsplash nos
cards de Corporativo, Eventos e Sob Demanda. São genéricas e devem sair quando
houver foto real.

## Candidatas

### Mão abrindo a porta de um sedã preto

<https://www.pexels.com/photo/close-up-shot-of-a-person-opening-the-door-of-a-black-car-8425057/>

Close de uma mão em manga de terno abrindo a porta traseira de um sedã preto,
em dia de chuva, com gotas na lataria. **Sem rosto**, lataria escura, gesto de
recepção — é a imagem mais alinhada ao Manifesto que apareceu até agora:
discrição, elegância, o motorista atendendo sem aparecer.

- **Orientação: vertical (2:3).** É o problema dela. O site usa 16/9 e 21/9; um
  corte horizontal aproveita a porta e a mão, mas perde a roda e o calçamento,
  que é boa parte da composição.
- Onde caberia: capa de `/frota`, ou um bloco de "como funciona" que não use o
  recorte panorâmico.
- Verificar: o modelo do carro não é da frota da Astaz. Como o enquadramento é
  fechado e nenhum emblema aparece, o risco de sugerir frota falsa é baixo — mas
  confirme antes de publicar.

### Fila de sedãs executivos

<https://www.pexels.com/photo/display-of-new-cars-18029637/>

Fila de sedãs escuros estacionados em diagonal, ao ar livre, luz do dia.
Horizontal (3:2), corta bem em 21/9.

- ⚠️ **São BMW Série 7, com grade e emblema perfeitamente identificáveis, e
  placas visíveis.** A frota real é Nissan Sentra, AION V, Jeep Commander e
  Sprinter. Publicar esta foto em `/frota` promete um veículo que o cliente não
  vai receber — é exatamente o cenário que o briefing da frota manda evitar.
- Só faz sentido em contexto onde nenhum veículo específico está sendo
  oferecido, e ainda assim com corte que esconda os emblemas.
- Alternativa melhor para a mesma ideia: foto real dos veículos da Astaz
  enfileirados.

### Motorista ao lado de SUV preto — candidata a hero de `/servicos/transfer-aeroporto`

<https://www.pexels.com/photo/professional-chauffeur-standing-beside-luxury-suv-36377051/>

Motorista de terno em pé ao lado de um SUV preto, ao ar livre, com prédio
moderno ao fundo. Horizontal (aprox. 16/9). Foto de Lee Salem, conta
`@charlotteblackcarservice`.

- É a composição que o briefing do hub pede: alguém esperando ao lado do carro.
- ⚠️ **Verificação visual ainda não feita.** A conta é de uma empresa de
  transporte executivo dos EUA e publicou várias fotos do mesmo ensaio; em pelo
  menos uma delas ([36377058](https://www.pexels.com/photo/chauffeur-standing-by-luxury-black-suv-outdoors-36377058/))
  o rosto do motorista aparece nitidamente. Abrir o arquivo antes de decidir.
- ⚠️ O SUV é bem maior que o Jeep Commander e o AION V da frota.
- Cenário é urbano genérico, não um desembarque de aeroporto — o texto da página
  fala em recepção no desembarque, e a foto não mostra isso.

## Reprovadas após verificação visual

Ficam registradas para ninguém voltar a considerá-las. Nos dois casos, a
descrição da página do Pexels **não** revelava o problema — só abrir o arquivo
revelou. É a razão de a verificação visual ser obrigatória antes de publicar.

### Homem com guarda-chuva abrindo a porta de um sedã preto

<https://www.pexels.com/photo/a-man-opening-a-car-door-while-holding-an-umbrella-8425046/>

Foto de Pavel Danilyuk. Horizontal (2400×1602), dia de chuva, prédio moderno ao
fundo. Composição excelente e alinhada ao Manifesto — e mesmo assim reprovada:

- ❌ **O carro é um Mercedes-Benz Classe S, com a estrela de três pontas legível
  no centro da roda.** Mesmo veto da fila de BMW acima: promete um veículo que
  a frota não tem.
- ❌ **O rosto está identificável**, de perfil. A página do Pexels descreve a
  foto como "de lado, sem rosto visível" — não é o caso.
- ⚠️ O guarda-chuva tem estampa de marca de terceiro, repetida por toda a peça.
- ⚠️ O cenário é um hotel urbano, não um desembarque de aeroporto.

### Mãos acomodando mala no porta-malas

<https://www.pexels.com/photo/close-up-of-man-in-a-suit-putting-a-suitcase-in-the-car-trunk-15535499/>

Foto de Сергей Тарасов. Horizontal (2400×1600). Sem rosto e sem emblema de
veículo, como esperado — mas:

- ❌ **A alça da mala tem "GUCCI" legível e repetido, no centro do
  enquadramento.** É o texto mais nítido da imagem.
- O corte que elimina o logo elimina também as mãos segurando a alça, que é a
  ação inteira da foto. Não sobra imagem aproveitável.

### Busca para `/servicos/transporte-idosos` (ago/2026)

Oito fotos baixadas e abertas. Sete reprovadas. Vale registrar **por que a
busca óbvia não serve**, para ninguém repetir o caminho.

Buscar `helping elderly into car` devolve um universo de **cadeira de rodas,
voluntário, cuidador, máscara e distribuição de doação** — os próprios textos
alternativos do Pexels usam essas palavras. É o equivalente visual do erro de
copy que o [briefing](seo/briefings/transporte-idosos.md) proíbe: sugere serviço
de saúde e assistência social, não transporte executivo. **A busca certa é pela
composição (veículo, porta, banco), não pelo tema "idoso".**

Reprovadas individualmente:

| Foto | Motivo |
| --- | --- |
| [11790230](https://www.pexels.com/photo/vehicle-interior-seen-from-an-open-doors-11790230/) | ❌ Três emblemas Mercedes legíveis: roda, volante e "AMG" na soleira |
| [15264255](https://www.pexels.com/photo/a-car-with-an-open-door-15264255/) | ❌ Estrela Mercedes no volante; e o carro é antigo, com interior gasto |
| [8425056](https://www.pexels.com/photo/a-man-in-gray-suit-opening-the-door-of-a-black-car-8425056/) | ❌ Rosto de frente, totalmente identificável. Mesmo ensaio da 8425046 já reprovada |
| [14541156](https://www.pexels.com/photo/photo-of-a-person-opening-a-car-door-14541156/) e [14541142](https://www.pexels.com/photo/a-person-s-hand-opening-a-car-door-14541142/) | ⚠️ Sem rosto e sem emblema, mas punho rosa, blazer xadrez e pulseira leem como estilo pessoal, não motorista. O gesto é de quem entra no próprio carro |
| [16680842](https://www.pexels.com/photo/man-in-suit-with-cane-16680842/) | ⚠️ Bela foto, paleta certa — mas vertical, e comunica velhice e espera passiva. Chega perto do tom paternalista que o briefing proíbe |
| [11363642](https://www.pexels.com/photo/person-in-red-coat-holding-a-cane-11363642/) | 🟡 **Passa em todos os vetos** (sem rosto, sem marca, digna, horizontal). Barrada só pelo vermelho saturado sobre fundo claro, que briga com a paleta escura do site. Guardar como candidata se algum dia houver contexto claro |

### O padrão que se repete

Foto de banco com carro executivo quase sempre traz sedã alemão de topo de linha
e acessório de grife — é o clichê do gênero. Como a frota da Astaz é outra e a
página fala de serviço, não de luxo de vitrine, **quanto mais fechado o
enquadramento, maior a chance de aprovar**: mão, porta, mala, interior. Plano
aberto com o carro inteiro praticamente sempre carrega emblema legível.

## Como adicionar uma candidata

Registre link, o que a foto mostra, orientação, onde caberia e o que precisa ser
verificado antes de publicar. O "o que verificar" é a parte que evita retrabalho
— sem ele, a imagem volta para a fila quando alguém percebe o problema tarde
demais.
