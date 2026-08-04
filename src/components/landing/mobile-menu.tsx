"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks } from "@/lib/site";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const PANEL_ID = "menu-mobile";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [lastPathname, setLastPathname] = useState(pathname);

  // Fecha o menu ao navegar para outra rota (inclui voltar/avançar do browser).
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        aria-controls={PANEL_ID}
        className="inline-flex size-10 items-center justify-center rounded-full border border-border-subtle text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
      >
        <span className="relative block h-3.5 w-5" aria-hidden="true">
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ${
              isOpen ? "top-1/2 rotate-45" : "top-0"
            }`}
          />
          <span
            className={`absolute left-0 top-1/2 block h-px w-full -translate-y-1/2 bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute left-0 block h-px w-full bg-current transition-transform duration-300 ${
              isOpen ? "top-1/2 -rotate-45" : "bottom-0"
            }`}
          />
        </span>
      </button>

      {/*
        O painel vai para o <body> via portal: o `backdrop-blur` do header cria
        um bloco de contenção que recortaria um `fixed` renderizado aqui dentro.
      */}
      {isOpen &&
        createPortal(
          <div
            id={PANEL_ID}
            className="fixed inset-x-0 bottom-0 top-16 z-40 border-t border-border-subtle bg-secondary sm:top-20 lg:hidden"
          >
            <nav
              className="container-wide mx-auto flex h-full flex-col gap-2 overflow-y-auto px-5 py-8 sm:px-8"
              aria-label="Navegação principal"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-sm border-b border-border-subtle py-4 font-display text-2xl text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                >
                  {link.label}
                </Link>
              ))}

              <WhatsAppButton size="md" className="mt-6 w-full">
                Falar no WhatsApp
              </WhatsAppButton>
            </nav>
          </div>,
          document.body,
        )}
    </div>
  );
}
