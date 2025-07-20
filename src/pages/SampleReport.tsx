import { ArrowLeft, Download, TrendingUp, TrendingDown, Target, FileText, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';

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
    { title: "Wireless Bluetooth Headphones", category: "Electronics", basePrice: 79.99 },
    { title: "Stainless Steel Water Bottle", category: "Sports & Outdoors", basePrice: 24.99 },
    { title: "LED Desk Lamp with USB Charging", category: "Home & Garden", basePrice: 45.99 },
    { title: "Yoga Mat Non-Slip Exercise Mat", category: "Sports & Fitness", basePrice: 29.99 },
    { title: "Coffee Maker 12-Cup Programmable", category: "Kitchen & Dining", basePrice: 89.99 },
    { title: "Smartphone Car Mount Holder", category: "Cell Phones & Accessories", basePrice: 19.99 },
    { title: "Memory Foam Pillow Set", category: "Home & Kitchen", basePrice: 49.99 },
    { title: "Portable Bluetooth Speaker", category: "Electronics", basePrice: 39.99 },
    { title: "Fitness Tracker Smart Watch", category: "Electronics", basePrice: 129.99 },
    { title: "Air Fryer 6-Quart Digital", category: "Kitchen & Dining", basePrice: 119.99 },
  ];

  const recommendationTemplates = [
    { pricing: "Increase price by 15-20% to match market premium", description: "Add bullet points highlighting key features", category: "Move to premium electronics category" },
    { pricing: "Reduce price by 10% to increase competitiveness", description: "Emphasize eco-friendly materials", category: "Optimize for sports accessories" },
    { pricing: "Price is optimal, consider bundling", description: "Add technical specifications in title", category: "Better positioning in home improvement" },
    { pricing: "Implement dynamic pricing strategy", description: "Include size and material details", category: "Target fitness enthusiasts category" },
  ];

  return Array.from({ length: 100 }, (_, index) => {
    const baseProduct = products[index % products.length];
    const template = recommendationTemplates[index % recommendationTemplates.length];
    const priceVariation = (Math.random() - 0.5) * 0.4; // -20% to +20%
    const recommendedPrice = baseProduct.basePrice * (1 + priceVariation);
    const potentialUplift = Math.random() * 40 + 10; // 10-50% potential uplift
    
    return {
      id: `PROD-${String(index + 1).padStart(3, '0')}`,
      title: `${baseProduct.title} ${index > 9 ? `- Model ${Math.floor(index / 10) + 1}` : ''}`,
      currentPrice: baseProduct.basePrice,
      recommendedPrice: Math.round(recommendedPrice * 100) / 100,
      category: baseProduct.category,
      recommendedCategory: baseProduct.category,
      descriptionScore: Math.floor(Math.random() * 40) + 60, // 60-100 score
      recommendations: template,
      potentialUplift: Math.round(potentialUplift),
    };
  });
};

const SampleReport = () => {
  const navigate = useNavigate();
  const mockData = generateMockData();

  const getPriceChangeIcon = (current: number, recommended: number) => {
    if (recommended > current) return <TrendingUp className="h-4 w-4 text-green-600" />;
    if (recommended < current) return <TrendingDown className="h-4 w-4 text-red-600" />;
    return <Target className="h-4 w-4 text-muted-foreground" />;
  };

  const getPriceChangePercentage = (current: number, recommended: number) => {
    return Math.round(((recommended - current) / current) * 100);
  };

  const getDescriptionScoreBadge = (score: number) => {
    if (score >= 90) return <Badge variant="secondary" className="bg-green-100 text-green-800">Excellent</Badge>;
    if (score >= 80) return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Good</Badge>;
    if (score >= 70) return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Fair</Badge>;
    return <Badge variant="destructive">Needs Work</Badge>;
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Button 
            variant="outline" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-foreground">Sample Recommendations Report</h1>
            <p className="text-muted-foreground mt-2">
              AI-powered optimization recommendations for 100 Amazon marketplace products
            </p>
          </div>
          <Button className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Report
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
                <p className="text-2xl font-bold">100</p>
                <p className="text-sm text-muted-foreground">Products Analyzed</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">27%</p>
                <p className="text-sm text-muted-foreground">Avg. Potential Uplift</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-blue-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">73</p>
                <p className="text-sm text-muted-foreground">Price Optimizations</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-orange-100 rounded-lg">
                <Target className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">89</p>
                <p className="text-sm text-muted-foreground">Content Improvements</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Data Table */}
        <Card className="p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Product Recommendations</h2>
            <p className="text-sm text-muted-foreground">
              Detailed recommendations for pricing, content, and categorization optimization
            </p>
          </div>
          
          <div className="rounded-md border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Product ID</TableHead>
                  <TableHead className="min-w-[300px]">Product Title</TableHead>
                  <TableHead>Current Price</TableHead>
                  <TableHead>Recommended Price</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Description Score</TableHead>
                  <TableHead>Potential Uplift</TableHead>
                  <TableHead className="min-w-[200px]">Key Recommendations</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockData.slice(0, 20).map((product) => {
                  const priceChange = getPriceChangePercentage(product.currentPrice, product.recommendedPrice);
                  return (
                    <TableRow key={product.id}>
                      <TableCell className="font-mono text-sm">{product.id}</TableCell>
                      <TableCell className="font-medium">{product.title}</TableCell>
                      <TableCell>${product.currentPrice}</TableCell>
                      <TableCell className="font-semibold">${product.recommendedPrice}</TableCell>
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
              Showing 20 of 100 products. 
              <Button variant="link" className="px-2">View all products →</Button>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SampleReport;