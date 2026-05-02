import { Phone, MessageCircle } from "lucide-react";

const PHONE = "03219434906";
const WA_MSG = encodeURIComponent("Hi Jayden & Johnny Salon, I'd like to book an appointment.");

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={`https://wa.me/92${PHONE.slice(1)}?text=${WA_MSG}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-deep transition-transform hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:+92${PHONE.slice(1)}`}
        aria-label="Call salon"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold text-primary-foreground shadow-gold transition-transform hover:scale-110"
      >
        <Phone className="h-5 w-5" />
      </a>
    </div>
  );
};
