"use client";

import { useId, useState, useSyncExternalStore, type FormEvent } from "react";
import { usePathname } from "next/navigation";

import { trackWhatsAppClick } from "@/lib/analytics";
import {
  buildOrcamentoMessage,
  campos,
  type Campo,
  type CampoId,
  type OrcamentoPreset,
} from "@/lib/content/orcamento";
import { getWhatsAppUrl } from "@/lib/site";

/**
 * Formulário de orçamento reutilizável entre páginas — cada uma passa um
 * `OrcamentoPreset` de `src/lib/content/orcamento.ts` com o subconjunto de
 * campos que faz sentido para ela.
 *
 * O botão não envia nada: ele abre o WhatsApp com a mensagem já escrita na
 * caixa de texto, e a pessoa revisa e completa antes de enviar de verdade —
 * por isso o rótulo do preset é "Continuar no WhatsApp", nunca "Enviar". Sete
 * campos não cobrem todo pedido (ida e volta, cadeirinha, parada extra), e o
 * formulário precisa deixar isso óbvio, não assumir que a pessoa vai
 * descobrir sozinha.
 *
 * Sem backend: nada aqui é armazenado ou enviado para servidor nenhum, só
 * monta texto e entrega para `getWhatsAppUrl()`.
 */
type QuoteFormProps = {
  preset: OrcamentoPreset;
  /** Sobrescreve a saudação do preset — é como cada destino personaliza a mensagem. */
  saudacao?: string;
  className?: string;
};

type Valores = Partial<Record<CampoId, string>>;

const inputClasses =
  "block w-full rounded-lg border border-border-subtle bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-neutral-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50";

// "Hoje" não é estado do React, é leitura de um relógio externo — por isso
// `useSyncExternalStore`, e não `useState`+`useEffect` (que dispararia
// `setState` dentro de efeito, contra a regra de lint do projeto; mesmo
// padrão já usado em `cookie-consent.tsx`). Não há evento nativo de "o dia
// virou", então o `subscribe` não precisa reagir a nada.
function subscribeToClock() {
  return () => {};
}

// No servidor não há como saber a data local do visitante: `undefined`
// deixa o campo sem `min`, igual ao primeiro render do cliente antes da
// hidratação — evita mismatch. Depois de hidratar, `getClientDate` já
// calcula "hoje" de verdade.
function getServerDateSnapshot() {
  return undefined;
}

function getClientDateSnapshot() {
  return new Date().toISOString().slice(0, 10);
}

export function QuoteForm({ preset, saudacao, className = "" }: QuoteFormProps) {
  const pathname = usePathname();
  const idPrefix = useId();
  const [valores, setValores] = useState<Valores>({});
  const dataMinima = useSyncExternalStore(
    subscribeToClock,
    getClientDateSnapshot,
    getServerDateSnapshot,
  );

  function handleChange(id: CampoId, value: string) {
    setValores((prev) => ({ ...prev, [id]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const presetEfetivo = saudacao ? { ...preset, saudacao } : preset;
    const mensagem = buildOrcamentoMessage(presetEfetivo, valores);
    const url = getWhatsAppUrl(mensagem);

    // Metadado apenas — nunca o conteúdo preenchido pelo usuário. Ver a nota
    // de LGPD em `src/lib/analytics.ts`.
    trackWhatsAppClick(pathname, presetEfetivo.saudacao, {
      ctaType: "form",
      ctaForm: preset.id,
    });

    // `window.open(url, "_blank", "noopener")` foi tentado antes e tinha um
    // bug: com `noopener`, o browser devolve `null` de propósito (não dá
    // referência da janela nova ao opener) — então o fallback de
    // `location.href` disparava *sempre*, mesmo com a aba nova aberta,
    // redirecionando a aba atual junto. Um link real, clicado
    // programaticamente, evita essa ambiguidade e é o mesmo padrão já usado
    // em `WhatsAppButton`.
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.click();
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="grid gap-6 sm:grid-cols-2">
        {preset.camposIds.map((campoId) => {
          const campo = campos[campoId];
          const fieldId = `${idPrefix}-${campoId}`;
          const hintId = campo.hint ? `${fieldId}-hint` : undefined;
          const ocupaLinhaInteira = campo.tipo === "textoLongo";

          return (
            <div
              key={campoId}
              className={ocupaLinhaInteira ? "sm:col-span-2" : undefined}
            >
              <label
                htmlFor={fieldId}
                className="block text-sm font-semibold text-foreground"
              >
                {campo.label}
                {!campo.required && (
                  <span className="ml-1 font-normal text-neutral-dark">
                    {" "}
                    (opcional)
                  </span>
                )}
              </label>

              <div className="mt-2">
                <QuoteFormField
                  campo={campo}
                  fieldId={fieldId}
                  hintId={hintId}
                  value={valores[campoId] ?? ""}
                  dataMinima={dataMinima}
                  onChange={(value) => handleChange(campoId, value)}
                />
              </div>

              {campo.hint && (
                <p
                  id={hintId}
                  className="mt-1.5 text-xs leading-relaxed text-neutral-dark"
                >
                  {campo.hint}
                </p>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <button
          type="submit"
          className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold tracking-wide text-secondary transition-all duration-300 hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
        >
          {preset.submitLabel}
        </button>
        <p className="mt-3 max-w-md text-xs leading-relaxed text-neutral-dark">
          {preset.notaEnvio}
        </p>
      </div>
    </form>
  );
}

type QuoteFormFieldProps = {
  campo: Campo;
  fieldId: string;
  hintId?: string;
  value: string;
  dataMinima?: string;
  onChange: (value: string) => void;
};

function QuoteFormField({
  campo,
  fieldId,
  hintId,
  value,
  dataMinima,
  onChange,
}: QuoteFormFieldProps) {
  switch (campo.tipo) {
    case "texto": {
      const listId = campo.sugestoes ? `${fieldId}-lista` : undefined;
      return (
        <>
          <input
            id={fieldId}
            type="text"
            required={campo.required}
            placeholder={campo.placeholder}
            list={listId}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            aria-describedby={hintId}
            className={inputClasses}
          />
          {campo.sugestoes && (
            <datalist id={listId}>
              {campo.sugestoes.map((sugestao) => (
                <option key={sugestao} value={sugestao} />
              ))}
            </datalist>
          )}
        </>
      );
    }

    case "textoLongo":
      return (
        <textarea
          id={fieldId}
          required={campo.required}
          placeholder={campo.placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hintId}
          rows={3}
          className={`${inputClasses} resize-none`}
        />
      );

    case "data":
      return (
        <input
          id={fieldId}
          type="date"
          required={campo.required}
          min={dataMinima}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hintId}
          className={inputClasses}
        />
      );

    case "horario":
      return (
        <input
          id={fieldId}
          type="time"
          required={campo.required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hintId}
          className={inputClasses}
        />
      );

    case "numero":
      return (
        <input
          id={fieldId}
          type="number"
          required={campo.required}
          min={campo.min}
          max={campo.max}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hintId}
          className={inputClasses}
        />
      );

    case "escolha":
      return (
        <select
          id={fieldId}
          required={campo.required}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-describedby={hintId}
          className={inputClasses}
        >
          <option value="" disabled>
            Selecione
          </option>
          {campo.opcoes.map((opcao) => (
            <option key={opcao} value={opcao}>
              {opcao}
            </option>
          ))}
        </select>
      );
  }
}
