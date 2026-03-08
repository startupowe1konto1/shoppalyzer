import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const FinalCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Gotowy, żeby przestać zgadywać i zacząć zarabiać więcej?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Dołącz do ponad 200 sprzedawców na Allegro, którzy podejmują mądrzejsze decyzje każdego dnia dzięki Shoppalyzerowi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg">
              Sprawdź swoje oferty za darmo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate('/sample-report')}
            >
              Zobacz przykładowy raport
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/70 mt-5">
            Bez karty kredytowej • Konfiguracja w 5 minut
          </p>
        </div>
      </div>
    </section>
  );
};
