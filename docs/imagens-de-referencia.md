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

## Como adicionar uma candidata

Registre link, o que a foto mostra, orientação, onde caberia e o que precisa ser
verificado antes de publicar. O "o que verificar" é a parte que evita retrabalho
— sem ele, a imagem volta para a fila quando alguém percebe o problema tarde
demais.
