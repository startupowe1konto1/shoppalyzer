import { Card } from '@/components/ui/card';

const steps = [
  { icon: '📥', title: 'Wgraj swoje produkty', desc: 'Wczytaj plik CSV lub połącz się przez API WooCommerce / Shopify. Do 100 SKU zupełnie za darmo.' },
  { icon: '🔍', title: 'Analizujemy rynek za Ciebie', desc: 'Shoppalyzer automatycznie identyfikuje Twoją konkurencję na Allegro i zbiera dane o cenach, pozycjach i zapasach.' },
  { icon: '📊', title: 'Dostajesz gotowy raport', desc: 'Konkretne rekomendacje: co przepricować, co promować, czego się pozbyć. Eksport do CSV lub PDF jednym kliknięciem.' },
];

export const HowItWorks = () => (
  <section id="jak-to-dziala" className="py-20 bg-muted/30">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Gotowy raport w 3 prostych krokach</h2>
        <p className="text-lg text-muted-foreground">Zero konfiguracji technicznej. Zero developera.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
        {steps.map((s, i) => (
          <div key={s.title} className="relative flex flex-col items-center text-center">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-primary/20" />
            )}
            <Card className="p-6 shadow-soft w-full">
              <div className="w-12 h-12 rounded-full bg-accent-brand/10 flex items-center justify-center text-2xl mx-auto mb-4">
                {s.icon}
              </div>
              <div className="text-xs font-bold text-accent-brand mb-2">Krok {i + 1}</div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  </section>
);
