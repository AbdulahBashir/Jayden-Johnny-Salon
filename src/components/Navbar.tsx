import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = ({ onBook }: { onBook: () => void }) => {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="font-display text-xl tracking-wide">
          <span className="text-gold">J</span>ayden <span className="text-muted-foreground">&</span> <span className="text-gold">J</span>ohnny
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm tracking-wide text-muted-foreground hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button onClick={onBook} className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-sm">
            Book Now
          </Button>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-gold">
                {l.label}
              </a>
            ))}
            <Button onClick={() => { setOpen(false); onBook(); }} className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-sm w-full">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
