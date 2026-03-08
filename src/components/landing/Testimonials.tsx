import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    initials: 'MK',
    quote: 'Miałam 3 sprzedawców podpiętych pod moje EAN-y i nie wiedziałam o tym przez 2 tygodnie. Teraz dostaję alert od razu. Odzyskałam marżę na 18 produktach w pierwszym tygodniu.',
    name: 'Marta K.',
    role: 'właścicielka sklepu, ModaPolska.pl',
  },
  {
    initials: 'PW',
    quote: 'Wcześniej 6 godzin w tygodniu w Excelu. Teraz otwieram raport przy kawie i wiem dokładnie co zrobić. Shoppalyzer zwrócił się w pierwszym miesiącu.',
    name: 'Piotr W.',
    role: 'e-commerce manager, SportZone',
  },
  {
    initials: 'AN',
    quote: 'Raporty PDF z własnym logo wysyłam klientom co tydzień. Myślą, że mam za sobą cały dział analiz. Oszczędzam 7–8 godzin tygodniowo.',
    name: 'Anna N.',
    role: 'konsultantka e-commerce',
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="h-4 w-4 fill-accent-brand text-accent-brand" />
    ))}
  </div>
);

export const Testimonials = () => (
  <section className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Sprzedawcy na Allegro już to wiedzą</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Dołącz do setek sklepów, które podjęły mądrzejsze decyzje dzięki Shoppalyzerowi</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {testimonials.map((t) => (
          <Card key={t.initials} className="p-6 shadow-soft">
            <Stars />
            <p className="text-sm text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 bg-primary">
                <AvatarFallback className="bg-primary text-primary-foreground text-sm font-bold">{t.initials}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold text-sm text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
