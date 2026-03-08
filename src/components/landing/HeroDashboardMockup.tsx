import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const rows = [
  { product: 'Słuchawki BT Pro X2', price: '149,00 zł', minComp: '139,00 zł', rec: 'Obniż cenę', badge: 'destructive' as const, margin: '18%' },
  { product: 'Kabel USB-C 2m', price: '19,90 zł', minComp: '24,90 zł', rec: 'Podnieś cenę', badge: 'default' as const, margin: '42%' },
  { product: 'Etui iPhone 15', price: '39,00 zł', minComp: '38,50 zł', rec: 'Monitoruj', badge: 'secondary' as const, margin: '31%' },
  { product: 'Powerbank 20000mAh', price: '89,00 zł', minComp: '95,00 zł', rec: 'Podnieś cenę', badge: 'default' as const, margin: '28%' },
];

export const HeroDashboardMockup = () => (
  <Card className="p-4 shadow-strong rotate-1 border-primary/10">
    <div className="text-xs font-semibold text-primary mb-3">📊 Raport dzienny — 8 marca 2026</div>
    <div className="overflow-x-auto">
      <table className="w-full text-xs">
        <thead>
          <tr className="border-b text-muted-foreground">
            <th className="text-left py-1.5 pr-2 font-medium">Produkt</th>
            <th className="text-right py-1.5 px-2 font-medium">Twoja cena</th>
            <th className="text-right py-1.5 px-2 font-medium">Min. konk.</th>
            <th className="text-center py-1.5 px-2 font-medium">Rekomendacja</th>
            <th className="text-right py-1.5 pl-2 font-medium">Marża</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b last:border-0">
              <td className="py-2 pr-2 font-medium text-foreground whitespace-nowrap">{r.product}</td>
              <td className="py-2 px-2 text-right text-foreground">{r.price}</td>
              <td className="py-2 px-2 text-right text-foreground">{r.minComp}</td>
              <td className="py-2 px-2 text-center">
                <Badge variant={r.badge} className="text-[10px] px-1.5 py-0.5">{r.rec}</Badge>
              </td>
              <td className="py-2 pl-2 text-right font-semibold text-accent-brand">{r.margin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </Card>
);
