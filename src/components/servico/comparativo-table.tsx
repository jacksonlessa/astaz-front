import { comparativoAlternativas } from "@/lib/content/transfer-aeroporto";

/**
 * Comparação entre transfer executivo, app de corrida e táxi comum.
 *
 * A primeira coluna de dado é a da Astaz e recebe destaque visual — mas o
 * destaque é a única marcação. Sem emoji, sem check verde contra x vermelho: o
 * texto de cada célula descreve o funcionamento das três opções, e onde elas
 * são equivalentes a tabela diz que são. Ver a regra em
 * `content/transfer-aeroporto.ts` antes de editar.
 */
export function ComparativoTable() {
  const { colunas, linhas } = comparativoAlternativas;

  return (
    <div
      role="region"
      aria-label="Comparação entre transfer executivo, app de corrida e táxi"
      tabIndex={0}
      className="mt-10 overflow-x-auto rounded-2xl border border-border-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <table className="w-full min-w-[52rem] border-collapse text-left">
        <caption className="sr-only">
          O que está resolvido antes do desembarque em cada uma das três opções
          de transporte
        </caption>
        <thead>
          <tr className="border-b border-border-subtle bg-surface">
            <th scope="col" className="px-5 py-4">
              <span className="sr-only">Critério</span>
            </th>
            {colunas.map((coluna, index) => (
              <th
                key={coluna}
                scope="col"
                className={`px-5 py-4 text-xs font-semibold uppercase tracking-[0.15em] ${
                  index === 0 ? "text-primary" : "text-neutral-dark"
                }`}
              >
                {coluna}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {linhas.map((linha) => (
            <tr key={linha.criterio} className="align-top">
              <th
                scope="row"
                className="px-5 py-5 font-display text-base font-normal text-foreground"
              >
                {linha.criterio}
              </th>
              {linha.celulas.map((celula, index) => (
                <td
                  key={index}
                  className={`px-5 py-5 text-sm leading-relaxed ${
                    index === 0
                      ? "bg-surface text-neutral-light"
                      : "text-neutral-dark"
                  }`}
                >
                  {celula}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
