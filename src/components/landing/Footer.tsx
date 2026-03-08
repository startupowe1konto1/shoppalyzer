import { Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const scrollTo = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
};

export const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div>
          <img src="/shoppalyzer_2.png" alt="Shoppalyzer" className="h-8 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/70 mb-4">Inteligentna analiza rynku dla sprzedawców na Allegro.</p>
          <div className="flex gap-3">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground"><Linkedin className="h-5 w-5" /></a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground"><Facebook className="h-5 w-5" /></a>
          </div>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-semibold mb-4 text-sm">Produkt</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><button onClick={() => scrollTo('#korzysci')} className="hover:text-primary-foreground">Korzyści</button></li>
            <li><button onClick={() => scrollTo('#jak-to-dziala')} className="hover:text-primary-foreground">Jak to działa</button></li>
            <li><button onClick={() => scrollTo('#cennik')} className="hover:text-primary-foreground">Cennik</button></li>
            <li><a href="/sample-report" className="hover:text-primary-foreground">Przykładowy raport</a></li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-semibold mb-4 text-sm">Prawo</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-primary-foreground">Polityka prywatności</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Regulamin</a></li>
            <li><a href="#" className="hover:text-primary-foreground">Polityka cookies</a></li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-semibold mb-4 text-sm">Newsletter</h4>
          <p className="text-sm text-primary-foreground/70 mb-3">Cotygodniowe wskazówki dla sprzedawców Allegro</p>
          <div className="flex gap-2">
            <Input placeholder="Twój e-mail" className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 h-9 text-sm" />
            <Button variant="cta" size="sm">Zapisz się</Button>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/10 py-4">
      <p className="text-center text-xs text-primary-foreground/50">© 2025 Shoppalyzer. Wszelkie prawa zastrzeżone.</p>
    </div>
  </footer>
);
