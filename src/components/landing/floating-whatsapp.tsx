import { WhatsAppIconButton } from "@/components/ui/whatsapp-button";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-8">
      <WhatsAppIconButton
        className="size-14 shadow-lg shadow-primary/10 hover:scale-105 hover:shadow-primary/20"
        label="Abrir conversa no WhatsApp"
      />
    </div>
  );
}
