import { Card } from '@/components/ui/card';

const benefits = [
  { icon: '☕', title: 'Raport gotowy rano o 9:00', desc: 'Każdego dnia dostajesz gotową analizę: kto jest tańszy, gdzie tracisz pozycję i gdzie możesz zarobić więcej.' },
  { icon: '📈', title: 'Gdzie podnieść marżę', desc: 'Nasz algorytm wskazuje aukcje, gdzie konkurencja wyprzedała zapas — to Twoja szansa na wyższą cenę bez utraty sprzedaży.' },
  { icon: '🗑️', title: 'Co wyciąć z asortymentu', desc: 'Zidentyfikuj produkty, które rotują słabo i zjadają Twój budżet reklamowy. Zasada Pareto w praktyce.' },
  { icon: '📄', title: 'Raporty PDF dla klientów', desc: 'Konsultanci i agencje eksportują raporty pod własną marką w jednym kliknięciu. Bez Excela, bez ręcznej roboty.' },
  { icon: '🔔', title: 'Alerty na e-mail lub Slack', desc: 'Powiadomienie od razu gdy coś ważnego zmieni się w Twojej kategorii. Żadna okazja Cię nie ominie.' },
];

export const BenefitsBento = () => (
  <section id="korzysci" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Wszystko, czego potrzebujesz, żeby sprzedawać mądrzej</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Nie kolejne narzędzie. Twój codzienny analityk rynku na Allegro.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((b) => (
          <Card key={b.title} className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 group">
            <div className="text-3xl mb-4">{b.icon}</div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{b.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-sm">{b.desc}</p>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
