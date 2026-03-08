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
              📊 Dla sprzedawców na Allegro którzy chcą zarabiać więcej — nie pracować więcej
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              <span style={{ color: '#163D5C' }}>Codziennie tracisz marżę,</span>
              <br />
              <span style={{ color: '#F0921C' }}>bo nie wiesz gdzie jej szukać.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Shoppalyzer analizuje Twoją konkurencję na Allegro
              i pokazuje dokładnie gdzie zostawiasz pieniądze na stole —
              i co zrobić żeby jutro zarobić więcej.
              Bez Excela. Bez godzin przeklikiwania.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" onClick={() => { document.getElementById('cennik')?.scrollIntoView({ behavior: 'smooth' }); }}>
                Sprawdź za darmo ile tracisz →
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/sample-report')}>
                Zobacz przykładowy raport
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-5">
              Bez karty kredytowej  •  Pierwsze 100 SKU gratis  •  Wyniki już po pierwszym raporcie
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
