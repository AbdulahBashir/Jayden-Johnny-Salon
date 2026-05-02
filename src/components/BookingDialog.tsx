import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const services = [
  "Men's Mastercuts",
  "Beard & Grooming",
  "Specialized Treatments",
  "Skincare & Facials",
  "Women's Styling",
];

export const BookingDialog = ({ open, onOpenChange }: BookingDialogProps) => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onOpenChange(false);
      toast.success(`Thank you, ${name}. We'll confirm your appointment shortly via WhatsApp.`);
    }, 700);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px] bg-card border-border/60">
        <DialogHeader>
          <p className="hairline text-gold">Reserve</p>
          <DialogTitle className="font-display text-3xl font-light">Book Your Experience</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Tell us when you'd like to visit and we'll confirm your slot.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required placeholder="Your name" className="bg-input border-border/60" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" required placeholder="03XX XXXXXXX" className="bg-input border-border/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" name="date" type="date" required className="bg-input border-border/60" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" name="time" type="time" required className="bg-input border-border/60" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service</Label>
              <select
                id="service"
                name="service"
                required
                className="h-10 w-full rounded-sm border border-border/60 bg-input px-3 text-sm text-foreground"
              >
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (optional)</Label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              placeholder="Any preferences for your stylist or treatment"
              className="w-full rounded-sm border border-border/60 bg-input p-3 text-sm text-foreground"
            />
          </div>
          <Button type="submit" disabled={submitting} className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90 font-medium tracking-wide">
            {submitting ? "Reserving…" : "Confirm Reservation"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
