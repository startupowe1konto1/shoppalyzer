import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroDashboardMockup } from './HeroDashboardMockup';

export const HeroVariant1 = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(207_65%_34%/0.05)] via-white to-[hsl(33_88%_52%/0.05)] border-b">
      <div className="container mx-auto px-4 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              🟢 Ponad 200 sprzedawców na Allegro odzyskało kontrolę
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-tight">
              Ktoś znowu psuje Twoje ceny{' '}
              <span className="text-accent-brand">na Allegro?</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Nieuczciwi sprzedawcy podpinają się pod Twoje kody EAN i zaniżają marżę
              — a Ty dowiadujesz się za późno. Shoppalyzer wykrywa ich automatycznie
              i wysyła Ci alert, zanim zdążą zniszczyć Twoją ofertę.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                Sprawdź swoje oferty za darmo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/sample-report')}>
                Zobacz przykładowy raport
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-5">
              Bez karty kredytowej • Pierwsze 100 SKU gratis • Działa z Allegro
            </p>
          </div>
          <div className="hidden lg:block">
            <HeroDashboardMockup />
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-[hsl(207_65%_34%/0.1)] rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-[hsl(33_88%_52%/0.1)] rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};
