import { useState } from 'react';
import { ArrowRight, TrendingUp, DollarSign, Target, Upload, FileText, CheckCircle, BarChart3, Globe, Brain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUpload } from '@/components/FileUpload';
import { UrlInput } from '@/components/UrlInput';
import { FeatureCard } from '@/components/FeatureCard';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const Index = () => {
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [urls, setUrls] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    toast({
      title: t('toast.fileUploaded'),
      description: `${file.name} ${t('toast.fileReady')}`,
    });
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
  };

  const handleUrlAdd = (url: string) => {
    setUrls([...urls, url]);
  };

  const handleUrlRemove = (index: number) => {
    setUrls(urls.filter((_, i) => i !== index));
  };

  const handleProcess = () => {
    if (!selectedFile && urls.length === 0) {
      toast({
        title: t('toast.noData'),
        description: t('toast.noDataDesc'),
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: t('toast.recommendationsReady'),
        description: t('toast.recommendationsDesc'),
      });
    }, 3000);
  };

  const canProcess = selectedFile || urls.length > 0;

  return (
    <div className="min-h-screen bg-background">
      {/* Language Selector */}
      <div className="absolute top-4 right-4 z-50">
        <LanguageSelector />
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
              <span className="text-foreground">{t('hero.title.smart')}</span>{' '}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {t('hero.title.recommendations')}
              </span>{' '}
              <span className="text-foreground">{t('hero.title.forEvery')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="w-full sm:w-auto">
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full sm:w-auto"
                onClick={() => navigate('/sample-report')}
              >
                {t('hero.cta.secondary')}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              {t('hero.freeOffer')}
            </p>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-y-1/2"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      </section>

      {/* Main Processing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t('upload.title')}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t('upload.subtitle')}
              </p>
            </div>

            <Card className="p-8 shadow-medium">
              <Tabs defaultValue="upload" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="upload" className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    {t('upload.tab.file')}
                  </TabsTrigger>
                  <TabsTrigger value="urls" className="flex items-center gap-2">
                    <Globe className="h-4 w-4" />
                    {t('upload.tab.urls')}
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="upload" className="space-y-6">
                  <FileUpload 
                    onFileSelect={handleFileSelect}
                    onFileRemove={handleFileRemove}
                    selectedFile={selectedFile}
                  />
                </TabsContent>
                
                <TabsContent value="urls" className="space-y-6">
                  <UrlInput 
                    urls={urls}
                    onUrlAdd={handleUrlAdd}
                    onUrlRemove={handleUrlRemove}
                  />
                </TabsContent>

                <div className="pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      onClick={handleProcess}
                      disabled={!canProcess || isProcessing}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          {t('upload.button.generating')}
                        </>
                      ) : (
                        <>
                          <BarChart3 className="mr-2 h-4 w-4" />
                          {t('upload.button.generate')}
                        </>
                      )}
                    </Button>
                    {canProcess && (
                      <p className="text-sm text-muted-foreground flex items-center justify-center">
                        <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                        {t('upload.status.ready')} {selectedFile ? t('upload.status.file') : `${urls.length} ${t('upload.status.urls')}`}
                      </p>
                    )}
                  </div>
                </div>
              </Tabs>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t('features.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon={<DollarSign className="h-8 w-8" />}
              title={t('features.pricing.title')}
              description={t('features.pricing.description')}
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title={t('features.content.title')}
              description={t('features.content.description')}
            />
            <FeatureCard
              icon={<Target className="h-8 w-8" />}
              title={t('features.category.title')}
              description={t('features.category.description')}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">{t('stats.accuracy')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500k+</div>
              <div className="text-muted-foreground">{t('stats.recommendations')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25%</div>
              <div className="text-muted-foreground">{t('stats.increase')}</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2min</div>
              <div className="text-muted-foreground">{t('stats.generation')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              {t('cta.subtitle')}
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90"
              onClick={() => navigate('/sample-report')}
            >
              {t('hero.cta.primary')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;