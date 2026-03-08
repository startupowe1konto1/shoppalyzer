import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

const Feature = ({ included, text }: { included: boolean; text: string }) => (
  <li className="flex items-start gap-2 text-sm">
    {included ? <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" /> : <X className="h-4 w-4 text-muted-foreground/40 mt-0.5 shrink-0" />}
    <span className={included ? 'text-foreground' : 'text-muted-foreground/50'}>{text}</span>
  </li>
);

export const Pricing = () => (
  <section id="cennik" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Prosty cennik. Bez niespodzianek.</h2>
        <p className="text-lg text-muted-foreground">Zacznij za darmo. Skaluj kiedy jesteś gotowy.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
        {/* Starter */}
        <Card className="p-6 shadow-soft">
          <h3 className="font-bold text-xl text-foreground mb-1">Starter</h3>
          <div className="text-3xl font-bold text-foreground mb-1">0 <span className="text-base font-normal text-muted-foreground">PLN/mies.</span></div>
          <p className="text-sm text-muted-foreground mb-6">Dla małych sklepów stawiających pierwsze kroki</p>
          <ul className="space-y-3 mb-8">
            <Feature included text="Do 100 SKU" />
            <Feature included text="Analiza konkurencji na Allegro" />
            <Feature included text="Tygodniowy raport rekomendacji" />
            <Feature included text="Alerty e-mail" />
            <Feature included={false} text="Wykrywacz pasożytów EAN" />
            <Feature included={false} text="Alerty Slack" />
            <Feature included={false} text="Eksport PDF" />
          </ul>
          <Button variant="outline" className="w-full">Zacznij za darmo</Button>
        </Card>

        {/* Pro */}
        <Card className="p-6 shadow-medium border-primary border-2 relative scale-[1.02]">
          <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-brand text-accent-brand-foreground border-0">Najpopularniejszy</Badge>
          <h3 className="font-bold text-xl text-foreground mb-1">Pro</h3>
          <div className="text-3xl font-bold text-foreground mb-1">69 <span className="text-base font-normal text-muted-foreground">PLN/mies.</span></div>
          <p className="text-sm text-muted-foreground mb-6">Dla rosnących sklepów, które chcą działać na danych</p>
          <ul className="space-y-3 mb-8">
            <Feature included text="Do 1000 SKU" />
            <Feature included text="Wszystko ze Startera" />
            <Feature included text="Wykrywacz pasożytów EAN" />
            <Feature included text="Codzienny raport o 9:00" />
            <Feature included text="Alerty Slack" />
            <Feature included text="Rekomendacje marżowe AI" />
            <Feature included text="Eksport CSV i PDF" />
          </ul>
          <Button variant="cta" className="w-full">Wypróbuj 14 dni za darmo</Button>
        </Card>

        {/* Agencja */}
        <Card className="p-6 shadow-soft">
          <h3 className="font-bold text-xl text-foreground mb-1">Agencja</h3>
          <div className="text-3xl font-bold text-foreground mb-1">99 <span className="text-base font-normal text-muted-foreground">PLN/mies.</span></div>
          <p className="text-sm text-muted-foreground mb-6">Dla konsultantów i menedżerów wielu sklepów</p>
          <ul className="space-y-3 mb-8">
            <Feature included text="Do 5000 SKU" />
            <Feature included text="Wszystko z Pro" />
            <Feature included text="Raporty PDF z własnym logo (white-label)" />
            <Feature included text="Panel wielu klientów" />
            <Feature included text="Dostęp do API" />
            <Feature included text="Wsparcie priorytetowe" />
          </ul>
          <Button variant="outline" className="w-full">Skontaktuj się</Button>
        </Card>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-8">
        Wszystkie plany zawierają 14-dniowy bezpłatny okres próbny. Bez karty kredytowej.
      </p>
    </div>
  </section>
);
