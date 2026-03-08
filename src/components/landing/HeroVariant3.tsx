import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroDashboardMockup } from './HeroDashboardMockup';

export const HeroVariant3 = () => {
  const navigate = useNavigate();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[hsl(207_65%_34%/0.05)] via-white to-[hsl(33_88%_52%/0.05)] border-b">
      <div className="container mx-auto px-4 py-16 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              🟢 Sprzedawcy zwiększają marżę średnio o 12–18%
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-foreground leading-tight">
              Nie zawsze musisz być najtańszy,{' '}
              <span className="text-accent-brand">żeby wygrywać na Allegro.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
              Shoppalyzer wskazuje dokładnie te produkty, na których możesz
              bezpiecznie podnieść cenę — bo konkurencja wyprzedała zapas
              lub w ogóle jej tam nie ma. Przestań zostawiać pieniądze na stole.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg">
                Pobierz darmowy raport marż
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
