import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'Czy jest plan bezpłatny?', a: 'Tak. Plan Starter jest całkowicie darmowy do 100 SKU, bez karty kredytowej. Możesz przejść na wyższy plan w dowolnym momencie.' },
  { q: 'Czy Shoppalyzer działa tylko z Allegro?', a: 'Allegro to nasz główny rynek, ale obsługujemy też WooCommerce, Shopify, Ceneo i Google Shopping. Kolejne integracje już w drodze.' },
  { q: 'Czym różni się Shoppalyzer od monitorowania cen?', a: 'Narzędzia do monitorowania cen pokazują tylko liczby. Shoppalyzer analizuje dane i daje Ci konkretne rekomendacje: co przepricować, co wypromować, czego się pozbyć — i ostrzega przed pasożytami EAN.' },
  { q: 'Czy mogę zrezygnować w dowolnym momencie?', a: 'Tak. Żadnych długoterminowych umów. Anulujesz subskrypcję kiedy chcesz, bezpośrednio z ustawień konta.' },
  { q: 'Jestem konsultantem z wieloma klientami. Czy to zadziała?', a: 'Tak — plan Agencja daje Ci panel wielu klientów oraz raporty PDF z własnym logo, które możesz wysyłać klientom pod swoją marką.' },
  { q: 'Ile czasu zajmuje konfiguracja?', a: 'Mniej niż 5 minut. Wczytaj CSV z produktami lub podaj link do swojego sklepu i jesteś gotowy. Zero technikaliów.' },
];

export const FAQ = () => (
  <section id="faq" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Często zadawane pytania</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
