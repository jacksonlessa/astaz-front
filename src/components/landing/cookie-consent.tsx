"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";

import { getStoredConsent, storeConsent } from "@/lib/consent";
import { routes } from "@/lib/routes";

// Não existe evento nativo para "esta aba escreveu no localStorage" — a
// única escrita acontece via `storeConsent`, chamada por este componente, que
// já força a própria re-renderização com o `dismissed` abaixo. O `subscribe`
// não precisa reagir a nada além disso.
function subscribeToConsent() {
  return () => {};
}

// No servidor não existe `localStorage`: assume "accepted" para nunca
// renderizar o banner no HTML enviado pelo servidor (evita flash). O valor
// real é lido assim que o React hidrata no cliente — é para isso que
// `useSyncExternalStore` existe, ao contrário de checar em `useEffect`, que
// dispara um segundo render e cai numa regra de lint do projeto contra
// `setState` dentro de efeito.
function getServerConsentSnapshot() {
  return "accepted" as const;
}

/**
 * Aviso de cookies. Vive no layout raiz (não em `page.tsx` de cada rota,
 * diferente de Header/Footer) porque precisa aparecer em toda página sem
 * depender de ninguém lembrar de importá-lo numa página nova.
 *
 * Recusar tem o mesmo peso visual que aceitar — não é um link pequeno ao lado
 * de um botão grande. Ver a seção "Consentimento e privacidade" em
 * `docs/seo/mapeamento-de-paginas.md`.
 *
 * `z-[60]` fica acima do Header e do FloatingWhatsApp (ambos `z-50`) de
 * propósito: enquanto a escolha não é feita, o aviso tem prioridade.
 */
export function CookieConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getStoredConsent,
    getServerConsentSnapshot,
  );
  const [dismissed, setDismissed] = useState(false);
  const visible = consent === null && !dismissed;

  if (!visible) return null;

  function handleChoice(choice: "accepted" | "rejected") {
    storeConsent(choice);
    setDismissed(true);
  }

  return (
    <div
      role="region"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border-subtle bg-secondary/95 backdrop-blur-xl"
    >
      <div className="container-wide mx-auto flex flex-col gap-4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p className="max-w-2xl text-sm leading-relaxed text-neutral">
          Usamos cookies para medir audiência e melhorar sua experiência. Você
          pode aceitar ou recusar — veja os detalhes na{" "}
          <Link
            href={routes.politicaDePrivacidade}
            className="text-primary underline underline-offset-2 transition-colors hover:text-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-sm"
          >
            Política de Privacidade
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => handleChoice("rejected")}
            className="inline-flex h-11 items-center justify-center rounded-full border border-border-subtle px-6 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => handleChoice("accepted")}
            className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-sm font-semibold text-secondary transition-all duration-300 hover:bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
