import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageSquare, Clock, Headphones, Sparkles } from "lucide-react";

export const Contact = () => {
  const contactItems = [
    {
      icon: Phone,
      title: "Teléfono",
      value: "+34 123 456 789",
      href: "tel:+34123456789",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      value: "Enviar mensaje",
      href: "https://wa.me/34123456789",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@estudiotattoo.com",
      href: "mailto:info@estudiotattoo.com",
    },
    {
      icon: MapPin,
      title: "Dirección",
      value: "Calle Principal 123, Madrid",
      href: null,
    },
  ];

  const schedule = [
    { day: "Lunes - Viernes", hours: "10:00 - 20:00" },
    { day: "Sábados", hours: "11:00 - 18:00" },
    { day: "Domingos", hours: "Cerrado" },
  ];

  return (
    <section id="contacto" className="relative py-24 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-accent-foreground/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary-foreground">Estamos aquí para ti</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            <span className="text-gradient">Contáctanos</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            ¿Tienes dudas sobre tu próximo tatuaje? Estamos disponibles para ayudarte en todo momento.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {contactItems.map((item, i) => {
              const Icon = item.icon;
              const content = (
                <div 
                  key={i}
                  className="group p-6 rounded-2xl bg-card/5 border border-primary/10 hover:border-primary/30 hover:bg-card/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent-foreground/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-primary-foreground/50 mb-1">{item.title}</p>
                      <p className="font-semibold text-primary-foreground text-lg">{item.value}</p>
                    </div>
                  </div>
                </div>
              );

              return item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>

          {/* Schedule Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent-foreground/10 border border-primary/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-primary-foreground text-xl">Horario</h3>
                <p className="text-primary-foreground/50 text-sm">de atención</p>
              </div>
            </div>
            
            <div className="space-y-4">
              {schedule.map((item, i) => (
                <div 
                  key={i} 
                  className="flex justify-between items-center py-3 border-b border-primary/10 last:border-0"
                >
                  <span className="text-primary-foreground/80">{item.day}</span>
                  <span className={`font-semibold ${item.hours === "Cerrado" ? "text-destructive" : "text-primary"}`}>
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-primary/10">
              <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <Headphones className="w-4 h-4" />
                <span>Atención personalizada garantizada</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-12">
          <Button size="lg" className="pulse-glow shadow-lg" asChild>
            <a href="tel:+34123456789" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Llamar ahora
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-green-500/50 text-green-400 hover:bg-green-500/10 hover:text-green-300"
            asChild
          >
            <a href="https://wa.me/34123456789" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <MessageSquare className="w-5 h-5" />
              WhatsApp
            </a>
          </Button>
        </div>

        {/* Map placeholder */}
        <div className="mt-16 relative">
          <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-accent-foreground/20 rounded-3xl blur-xl opacity-50" />
          <div className="relative rounded-2xl overflow-hidden border border-primary/20 bg-card/5 h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <p className="text-primary-foreground font-semibold text-lg">Calle Principal 123</p>
              <p className="text-primary-foreground/60">28001 Madrid, España</p>
              <Button variant="outline" size="sm" className="mt-4 border-primary/30" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                  Ver en Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
