import { useState } from "react";
import { Star, MapPin, Clock, Instagram, Facebook, Scissors, Sparkles, Droplets, Wind, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { BookingDialog } from "@/components/BookingDialog";
import { FloatingContact } from "@/components/FloatingContact";

import heroImg from "@/assets/hero-salon.jpg";
import sMens from "@/assets/service-mens.jpg";
import sBeard from "@/assets/service-beard.jpg";
import sFacial from "@/assets/service-facial.jpg";
import sTreatment from "@/assets/service-treatment.jpg";
import sWomen from "@/assets/service-women.jpg";

const services = [
  {
    title: "Men's Mastercuts",
    icon: Scissors,
    image: sMens,
    items: ["Fade Cut", "Custom Cut", "Buzz Cut", "Scissor Cut", "Razor Cut", "Head Shave"],
  },
  {
    title: "Beard & Grooming",
    icon: Wind,
    image: sBeard,
    items: ["Beard Trim", "Conditioning", "Beard Dyeing", "Maintenance"],
  },
  {
    title: "Specialized Treatments",
    icon: Droplets,
    image: sTreatment,
    items: ["Capillary Hair Treatment", "Hair Straightening", "Rebounding", "Xtenso"],
  },
  {
    title: "Skincare & Facials",
    icon: Sparkles,
    image: sFacial,
    items: ["24K Gold Facial", "Janssen Facial", "Johnson Facial", "Scalp Treatments"],
  },
  {
    title: "Women's Styling",
    icon: Palette,
    image: sWomen,
    items: ["Hair Color", "Styling", "Cut & Blow-dry", "Premium Care"],
  },
];

const testimonials = [
  { name: "Ahmed R.", text: "Hands down the best fade I've had in Lahore. The ambience is unmatched — they treat every client like royalty.", rating: 5 },
  { name: "Hassan K.", text: "Late-night appointments saved my schedule. Beard trim was sharp, the gold facial left my skin glowing.", rating: 5 },
  { name: "Sara M.", text: "Booked for hair color and walked out feeling brand new. Truly a luxury experience worth every rupee.", rating: 5 },
  { name: "Bilal A.", text: "Professional, punctual and seriously skilled. The Xtenso treatment results lasted months.", rating: 5 },
  { name: "Zara H.", text: "The 24K gold facial is a must-try. Beautiful interior, calming environment, and the staff is incredibly polite.", rating: 5 },
  { name: "Omar S.", text: "My go-to spot. Open till 2 AM is a game changer for late-night grooming before flights.", rating: 5 },
];

const Index = () => {
  const [bookingOpen, setBookingOpen] = useState(false);
  const openBooking = () => setBookingOpen(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBook={openBooking} />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImg}
          alt="Luxury barber chair inside Jayden & Johnny Salon Lahore"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "var(--gradient-fade)" }} />

        <div className="container relative z-10 mx-auto px-4 text-center pt-20">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-background/40 px-4 py-1.5 backdrop-blur-sm">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs tracking-widest text-foreground/90">5.0 · GOOGLE RATED</span>
            </div>

            <p className="hairline text-gold mt-8">Luxury Barber & Beauty</p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light mt-4 leading-[1.05]">
              Jayden <span className="text-gradient-gold italic">&</span> Johnny
              <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 text-foreground/80">Salon</span>
            </h1>

            <p className="mt-6 max-w-xl mx-auto text-muted-foreground text-base md:text-lg">
              Where precision craft meets modern luxury. A signature grooming experience in the heart of Gulberg III.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                onClick={openBooking}
                className="bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-sm px-8 h-12 text-sm tracking-widest font-medium shadow-gold"
              >
                BOOK YOUR EXPERIENCE
              </Button>
              <a href="#services" className="text-sm tracking-widest text-foreground/80 hover:text-gold transition-colors">
                EXPLORE SERVICES →
              </a>
            </div>

            <div className="mt-12 inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-gold" />
              Opposite Monal, Gulberg III, Lahore
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="hairline text-gold">Our Craft</p>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-3">The Services</h2>
            <div className="gold-divider w-24 mx-auto mt-6" />
            <p className="mt-6 text-muted-foreground">
              From signature cuts to indulgent skincare — every service is performed by master stylists using premium products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-sm border border-border/60 bg-card transition-all duration-500 hover:border-gold/60 hover:shadow-gold hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm border border-gold/40">
                      <Icon className="h-4 w-4 text-gold" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-light">{s.title}</h3>
                    <div className="gold-divider w-12 my-4" />
                    <ul className="space-y-2">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="h-1 w-1 rounded-full bg-gold" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}

            {/* CTA card */}
            <div className="relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-br from-card to-background p-8 flex flex-col justify-center">
              <Sparkles className="h-8 w-8 text-gold" />
              <h3 className="font-display text-3xl font-light mt-4">Bespoke Consultations</h3>
              <p className="text-muted-foreground mt-3 text-sm">
                Not sure what you need? Let our master stylists curate the perfect experience for you.
              </p>
              <Button
                onClick={openBooking}
                className="mt-6 bg-gradient-gold text-primary-foreground hover:opacity-90 rounded-sm self-start"
              >
                Book a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / TIMINGS */}
      <section id="about" className="py-24 md:py-32 bg-card/40 border-y border-border/40">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="hairline text-gold">Visit Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-light mt-3">
              Late nights, <span className="italic text-gold">crafted</span> for you.
            </h2>
            <div className="gold-divider w-24 mt-6" />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              At Jayden & Johnny, we believe great grooming should fit your lifestyle — not the other way around.
              That's why we stay open late, with a calm, intimate atmosphere built for those who appreciate the finer details.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40">
                  <Clock className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="text-sm hairline text-gold">Hours</p>
                  <p className="text-foreground mt-1">Open daily until <span className="text-gold">2:00 AM</span></p>
                  <p className="text-sm text-muted-foreground">For your convenience, after work or after dinner.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40">
                  <MapPin className="h-4 w-4 text-gold" />
                </div>
                <div>
                  <p className="text-sm hairline text-gold">Address</p>
                  <p className="text-foreground mt-1">Shop G12, Ground Floor, Block E2</p>
                  <p className="text-sm text-muted-foreground">Gulberg III, Lahore — Opposite Monal</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 row-span-2 aspect-square overflow-hidden rounded-sm border border-border/60">
              <img src={sMens} alt="Salon interior" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm border border-border/60">
              <img src={sBeard} alt="Beard service" loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-square overflow-hidden rounded-sm border border-border/60">
              <img src={sFacial} alt="Facial treatment" loading="lazy" className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="hairline text-gold">Reviews</p>
            <h2 className="font-display text-4xl md:text-6xl font-light mt-3">Loved by Lahore</h2>
            <div className="gold-divider w-24 mx-auto mt-6" />
            <div className="mt-6 inline-flex items-center gap-3">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium">5.0 / 5.0</span> · 17 Google Reviews
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-sm border border-border/60 bg-card p-8 transition-all hover:border-gold/40 hover:-translate-y-1"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-foreground/90 leading-relaxed font-display text-lg italic">
                  "{t.text}"
                </p>
                <div className="gold-divider w-8 my-5" />
                <p className="hairline text-muted-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 md:py-32 bg-card/40 border-t border-border/40">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <p className="hairline text-gold">Reserve</p>
          <h2 className="font-display text-4xl md:text-6xl font-light mt-3">
            Begin your <span className="italic text-gradient-gold">experience</span>
          </h2>
          <div className="gold-divider w-24 mx-auto mt-6" />
          <p className="mt-6 text-muted-foreground">
            Reach out via WhatsApp, call us directly, or book online. We'll have everything ready when you arrive.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <a
              href="https://wa.me/923219434906"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-border/60 bg-card p-6 hover:border-gold/60 transition-all group"
            >
              <p className="hairline text-gold">WhatsApp / Call</p>
              <p className="font-display text-2xl mt-2 group-hover:text-gold transition-colors">0321 9434906</p>
            </a>
            <button
              onClick={openBooking}
              className="rounded-sm bg-gradient-gold text-primary-foreground p-6 hover:opacity-90 transition-opacity"
            >
              <p className="hairline">Online</p>
              <p className="font-display text-2xl mt-2">Book Appointment</p>
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-4">
            <a
              href="https://instagram.com/jaydenjohnnybynsk"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border hover:border-gold hover:text-gold transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">@jaydenjohnnybynsk</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/40 py-10">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg">
            <span className="text-gold">J</span>ayden & <span className="text-gold">J</span>ohnny Salon
          </p>
          <p className="text-xs text-muted-foreground tracking-widest uppercase">
            © {new Date().getFullYear()} · Crafted in Gulberg III, Lahore
          </p>
        </div>
      </footer>

      <FloatingContact />
      <BookingDialog open={bookingOpen} onOpenChange={setBookingOpen} />
    </div>
  );
};

export default Index;
