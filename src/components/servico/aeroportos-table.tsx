import Link from "next/link";

import {
  aeroportos,
  getAeroportoDestino,
  notaTabelaAeroportos,
} from "@/lib/content/transfer-aeroporto";
import { destinoPath } from "@/lib/routes";

/**
 * Os quatro aeroportos lado a lado. É a razão de existir da página hub: o
 * conteúdo que nenhuma página de rota pode ter, porque cada uma delas fala de
 * um aeroporto só.
 *
 * A tabela é larga por natureza (cinco colunas de dado). Em telas estreitas ela
 * rola dentro do próprio contêiner — a página nunca rola na horizontal. O
 * contêiner recebe `tabIndex={0}` porque região com scroll precisa ser
 * alcançável pelo teclado, e `role="region"` com rótulo para que o leitor de
 * tela anuncie o que está sendo rolado.
 */
export function AeroportosTable() {
  return (
    <>
      <div
        role="region"
        aria-label="Comparativo dos aeroportos atendidos"
        tabIndex={0}
        className="mt-10 overflow-x-auto rounded-2xl border border-border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
      >
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <caption className="sr-only">
            Distância, tempo médio de trajeto, tempo na alta temporada e
            antecedência de saída de Balneário Camboriú para cada aeroporto
            atendido
          </caption>
          <thead>
            <tr className="border-b border-border-subtle bg-surface">
              {[
                "Aeroporto",
                "Distância",
                "Tempo médio",
                "Alta temporada",
                "Saída de Balneário Camboriú",
              ].map((coluna) => (
                <th
                  key={coluna}
                  scope="col"
                  className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary"
                >
                  {coluna}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {aeroportos.map((aeroporto) => {
              const destino = getAeroportoDestino(aeroporto);

              return (
                <tr key={aeroporto.sigla} className="align-top">
                  <th scope="row" className="px-5 py-5 font-normal">
                    <span className="font-display text-lg text-foreground">
                      {destino ? (
                        <Link
                          href={destinoPath(destino.slug)}
                          className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
                        >
                          {aeroporto.nome}
                        </Link>
                      ) : (
                        aeroporto.nome
                      )}
                    </span>
                    <span className="mt-1 block text-xs text-neutral-dark">
                      {aeroporto.sigla} · {aeroporto.cidade}
                    </span>
                  </th>
                  <td className="px-5 py-5 text-sm text-neutral">
                    {aeroporto.distancia}
                  </td>
                  <td className="px-5 py-5 text-sm text-neutral">
                    {aeroporto.tempoMedio}
                  </td>
                  <td className="px-5 py-5 text-sm text-neutral">
                    {aeroporto.altaTemporada}
                  </td>
                  <td className="px-5 py-5 text-sm text-neutral">
                    {aeroporto.saidaDeBc}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-6 max-w-3xl text-sm leading-relaxed text-neutral-dark">
        {notaTabelaAeroportos}
      </p>
    </>
  );
}
