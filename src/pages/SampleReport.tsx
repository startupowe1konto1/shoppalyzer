import { useState } from 'react';
import { ArrowLeft, Download, TrendingUp, TrendingDown, Target, FileText, DollarSign, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

interface ProductRecommendation {
  id: string;
  title: string;
  currentPrice: number;
  recommendedPrice: number;
  category: string;
  recommendedCategory: string;
  descriptionScore: number;
  recommendations: {
    pricing: string;
    description: string;
    category: string;
  };
  potentialUplift: number;
}

const generateMockData = (): ProductRecommendation[] => {
  const products = [
    { title: "Słuchawki bezprzewodowe Bluetooth", category: "Elektronika", basePrice: 79.99 },
    { title: "Butelka termiczna ze stali", category: "Sport i rekreacja", basePrice: 24.99 },
    { title: "Lampka biurkowa LED z USB", category: "Dom i ogród", basePrice: 45.99 },
    { title: "Mata do jogi antypoślizgowa", category: "Sport i fitness", basePrice: 29.99 },
    { title: "Ekspres przelewowy 12 filiżanek", category: "Kuchnia", basePrice: 89.99 },
    { title: "Uchwyt samochodowy na telefon", category: "Akcesoria GSM", basePrice: 19.99 },
    { title: "Zestaw poduszek memory foam", category: "Dom i kuchnia", basePrice: 49.99 },
    { title: "Głośnik przenośny Bluetooth", category: "Elektronika", basePrice: 39.99 },
    { title: "Smartwatch z pulsometrem", category: "Elektronika", basePrice: 129.99 },
    { title: "Frytkownica beztłuszczowa 6L", category: "Kuchnia", basePrice: 119.99 },
  ];

  const recommendationTemplates = [
    { pricing: "Podnieś cenę o 15–20% do poziomu rynkowego", description: "Dodaj wypunktowanie kluczowych cech", category: "Przenieś do kategorii premium" },
    { pricing: "Obniż cenę o 10% dla konkurencyjności", description: "Podkreśl ekologiczne materiały", category: "Optymalizuj dla akcesoriów sportowych" },
    { pricing: "Cena optymalna, rozważ bundling", description: "Dodaj specyfikację techniczną w tytule", category: "Lepsza pozycja w kategorii dom" },
    { pricing: "Wdróż dynamiczną strategię cenową", description: "Uwzględnij rozmiar i materiał", category: "Kieruj na kategorię fitness" },
  ];

  return Array.from({ length: 100 }, (_, index) => {
    const baseProduct = products[index % products.length];
    const template = recommendationTemplates[index % recommendationTemplates.length];
    const priceVariation = (Math.random() - 0.5) * 0.4;
    const recommendedPrice = baseProduct.basePrice * (1 + priceVariation);
    const potentialUplift = Math.random() * 40 + 10;

    return {
      id: `PROD-${String(index + 1).padStart(3, '0')}`,
      title: `${baseProduct.title}${index > 9 ? ` — Model ${Math.floor(index / 10) + 1}` : ''}`,
      currentPrice: baseProduct.basePrice,
      recommendedPrice: Math.round(recommendedPrice * 100) / 100,
      category: baseProduct.category,
      recommendedCategory: baseProduct.category,
      descriptionScore: Math.floor(Math.random() * 40) + 60,
      recommendations: template,
      potentialUplift: Math.round(potentialUplift),
    };
  });
};

const SampleReport = () => {
  const navigate = useNavigate();
  const mockData = generateMockData();
  const [pdfLoading, setPdfLoading] = useState(false);

  const getPriceChangeIcon = (current: number, recommended: number) => {
    if (recommended > current) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (recommended < current) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Target className="h-4 w-4 text-muted-foreground" />;
  };

  const getPriceChangePercentage = (current: number, recommended: number) => {
    return Math.round(((recommended - current) / current) * 100);
  };

  const getDescriptionScoreBadge = (score: number) => {
    if (score >= 90) return <Badge variant="secondary" className="bg-green-100 text-green-800">Wysoka</Badge>;
    if (score >= 80) return <Badge variant="secondary" className="bg-primary/10 text-primary">Dobra</Badge>;
    if (score >= 70) return <Badge variant="secondary" className="bg-accent-brand/10 text-accent-brand">Średnia</Badge>;
    return <Badge variant="destructive">Niska</Badge>;
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Wysoka';
    if (score >= 80) return 'Dobra';
    if (score >= 70) return 'Średnia';
    return 'Niska';
  };

  const handleExportPDF = async () => {
    setPdfLoading(true);

    await new Promise(resolve => setTimeout(resolve, 800));

    try {
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();
      const margin = 15;

      // --- LOGO ---
      try {
        const response = await fetch('/shoppalyzer_2.png');
        const blob = await response.blob();
        const base64 = await new Promise<string>((res) => {
          const reader = new FileReader();
          reader.onloadend = () => res(reader.result as string);
          reader.readAsDataURL(blob);
        });
        doc.addImage(base64, 'PNG', margin, 8, 38, 16);
      } catch {
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(16);
        doc.setTextColor('#1E5F8E');
        doc.text('Shoppalyzer', margin, 18);
      }

      // Report title (right-aligned)
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(13);
      doc.setTextColor('#1E5F8E');
      doc.text('Raport Analityczny', pageW - margin, 13, { align: 'right' });

      // Date
      const today = new Date();
      const dateStr = today.toLocaleDateString('pl-PL', {
        day: '2-digit', month: '2-digit', year: 'numeric'
      });
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor('#666666');
      doc.text(`Wygenerowano: ${dateStr}`, pageW - margin, 19, { align: 'right' });

      // Header separator
      doc.setDrawColor('#1E5F8E');
      doc.setLineWidth(0.8);
      doc.line(margin, 26, pageW - margin, 26);

      // --- SUMMARY ---
      let y = 33;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor('#1E5F8E');
      doc.text('Podsumowanie analizy', margin, y);
      y += 6;

      const summaryItems = [
        ['Przeanalizowane produkty', '100'],
        ['Średni potencjalny wzrost', '27%'],
        ['Optymalizacje cenowe', '73'],
        ['Propozycje zmian', '89'],
      ];

      const boxW = (pageW - margin * 2 - 6) / 2;
      const boxH = 10;
      summaryItems.forEach((item, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const bx = margin + col * (boxW + 6);
        const by = y + row * (boxH + 3);
        doc.setFillColor('#EBF4FB');
        doc.roundedRect(bx, by, boxW, boxH, 2, 2, 'F');
        doc.setFont('helvetica', 'normal');
        doc.setFontSize(8);
        doc.setTextColor('#1E5F8E');
        doc.text(item[0], bx + 4, by + 4.5);
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(9);
        doc.text(item[1], bx + boxW - 4, by + 6.5, { align: 'right' });
      });
      y += 2 * (boxH + 3) + 6;

      // --- TABLE ---
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.setTextColor('#1E5F8E');
      doc.text('Rekomendacje produktowe', margin, y);
      y += 5;

      const tableData = mockData.map(product => {
        const change = Math.round(
          ((product.recommendedPrice - product.currentPrice) / product.currentPrice) * 100
        );
        return [
          product.id,
          product.title.substring(0, 35),
          `${product.currentPrice.toFixed(2)} zł`,
          `${product.recommendedPrice.toFixed(2)} zł`,
          `${change > 0 ? '+' : ''}${change}%`,
          `${product.descriptionScore}/100`,
          `+${product.potentialUplift}%`,
        ];
      });

      autoTable(doc, {
        startY: y,
        head: [[
          'ID', 'Nazwa produktu', 'Cena aktualna',
          'Cena rekomend.', 'Zmiana', 'Opis', 'Potencjał'
        ]],
        body: tableData,
        margin: { left: margin, right: margin, bottom: 18 },
        styles: {
          fontSize: 7.5,
          cellPadding: 2.5,
          lineColor: '#DDDDDD',
          lineWidth: 0.3,
        },
        headStyles: {
          fillColor: '#1E5F8E',
          textColor: '#FFFFFF',
          fontStyle: 'bold',
          fontSize: 8,
        },
        alternateRowStyles: {
          fillColor: '#F0F7FF',
        },
        columnStyles: {
          0: { cellWidth: 18 },
          1: { cellWidth: 55 },
          2: { cellWidth: 22 },
          3: { cellWidth: 22 },
          4: { cellWidth: 16 },
          5: { cellWidth: 16 },
          6: { cellWidth: 18 },
        },
        didParseCell: (data: any) => {
          if (data.column.index === 4 && data.section === 'body') {
            const val = String(data.cell.raw);
            if (val.startsWith('+')) data.cell.styles.textColor = '#16A34A';
            else if (val.startsWith('-')) data.cell.styles.textColor = '#DC2626';
          }
        },
        didDrawPage: () => {
          const pCount = doc.getNumberOfPages();
          const pCurrent = doc.getCurrentPageInfo().pageNumber;
          doc.setDrawColor('#DDDDDD');
          doc.setLineWidth(0.3);
          doc.line(margin, pageH - 12, pageW - margin, pageH - 12);
          doc.setFont('helvetica', 'normal');
          doc.setFontSize(7);
          doc.setTextColor('#999999');
          doc.text('© 2025 Shoppalyzer — shoppalyzer.pl', margin, pageH - 7);
          doc.text('Dokument poufny — wygenerowany automatycznie',
            pageW / 2, pageH - 7, { align: 'center' });
          doc.text(`Strona ${pCurrent} z ${pCount}`,
            pageW - margin, pageH - 7, { align: 'right' });
        },
      });

      const fileName = `Shoppalyzer_Raport_${dateStr.replace(/\./g, '-')}.pdf`;
      doc.save(fileName);

    } catch (error) {
      console.error('PDF generation error:', error);
    } finally {
      setPdfLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/')} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Wróć na stronę główną
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-primary">Przykładowy Raport Shoppalyzer</h1>
            <p className="text-muted-foreground mt-2">Rekomendacje dla 100 produktów na Allegro — wygenerowane przez algorytm Shoppalyzera</p>
          </div>
          <Button
            variant="cta"
            className="flex items-center gap-2"
            onClick={handleExportPDF}
            disabled={pdfLoading}
          >
            {pdfLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Generowanie...
              </>
            ) : (
              <>
                <Download className="h-4 w-4" />
                Pobierz raport PDF
              </>
            )}
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-brand">100</p>
                <p className="text-sm text-muted-foreground">Przeanalizowanych produktów</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-brand">27%</p>
                <p className="text-sm text-muted-foreground">Średni potencjał wzrostu</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-primary/10 rounded-lg">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-brand">73</p>
                <p className="text-sm text-muted-foreground">Optymalizacje cenowe</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-accent-brand/10 rounded-lg">
                <Target className="h-6 w-6 text-accent-brand" />
              </div>
              <div>
                <p className="text-2xl font-bold text-accent-brand">89</p>
                <p className="text-sm text-muted-foreground">Propozycje zmian treści</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Data Table */}
        <Card className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-primary mb-2">Rekomendacje produktowe</h2>
            <p className="text-sm text-muted-foreground">Szczegółowe rekomendacje cenowe i asortymentowe</p>
          </div>

          <div className="rounded-md border overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">ID Produktu</TableHead>
                  <TableHead className="min-w-[300px]">Nazwa produktu</TableHead>
                  <TableHead>Cena aktualna</TableHead>
                  <TableHead>Cena rekomendowana</TableHead>
                  <TableHead>Zmiana</TableHead>
                  <TableHead>Ocena opisu</TableHead>
                  <TableHead>Potencjał</TableHead>
                  <TableHead className="min-w-[200px]">Rekomendacje</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.slice(0, 20).map((product) => {
                  const priceChange = getPriceChangePercentage(product.currentPrice, product.recommendedPrice);
                  return (
                    <TableRow key={product.id}>
                      <TableCell className="font-mono text-sm">{product.id}</TableCell>
                      <TableCell className="font-medium">{product.title}</TableCell>
                      <TableCell>{product.currentPrice.toFixed(2)} zł</TableCell>
                      <TableCell className="font-semibold">{product.recommendedPrice.toFixed(2)} zł</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          {getPriceChangeIcon(product.currentPrice, product.recommendedPrice)}
                          <span className={`text-sm ${priceChange > 0 ? 'text-green-600' : priceChange < 0 ? 'text-red-600' : 'text-muted-foreground'}`}>
                            {priceChange > 0 ? '+' : ''}{priceChange}%
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="text-sm">{product.descriptionScore}</span>
                          {getDescriptionScoreBadge(product.descriptionScore)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                          +{product.potentialUplift}%
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        <div className="space-y-1">
                          <div>• {product.recommendations.pricing}</div>
                          <div>• {product.recommendations.description}</div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>

          <div className="mt-4 text-center">
            <p className="text-sm text-muted-foreground">
              Wyświetlono 20 z 100 produktów.
              <Button variant="link" className="px-2">Zobacz wszystkie produkty →</Button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SampleReport;
