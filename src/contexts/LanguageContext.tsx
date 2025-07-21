import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'pl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation & Common
    'nav.home': 'Home',
    'nav.sampleReport': 'Sample Report',
    'nav.backToHome': 'Back to Home',
    'nav.exportReport': 'Export Report',
    'common.loading': 'Loading...',
    'common.getStarted': 'Get Started',
    'common.learnMore': 'Learn More',
    
    // Hero Section
    'hero.title.smart': 'Get Smart',
    'hero.title.recommendations': 'Recommendations',
    'hero.title.forEvery': 'for Every Product',
    'hero.subtitle': 'Upload your product listings and get AI-powered recommendations to optimize pricing, improve descriptions, and perfect marketplace categorization.',
    'hero.cta.primary': 'Get My Recommendations',
    'hero.cta.secondary': 'See Sample Report',
    'hero.freeOffer': 'No credit card required • Get recommendations for 100 products free',
    
    // Upload Section
    'upload.title': 'Upload Your Product Data',
    'upload.subtitle': 'Upload a spreadsheet or provide URLs to get personalized recommendations',
    'upload.tab.file': 'Upload File',
    'upload.tab.urls': 'Add URLs',
    'upload.button.generate': 'Generate Recommendations',
    'upload.button.generating': 'Generating Recommendations...',
    'upload.status.ready': 'Ready to generate recommendations for',
    'upload.status.file': '1 file',
    'upload.status.urls': 'URLs',
    
    // Features Section
    'features.title': 'Smart Recommendations for Every Product',
    'features.subtitle': 'Our AI analyzes your product listings and delivers actionable recommendations to boost performance across all marketplaces',
    'features.pricing.title': 'Price Optimization',
    'features.pricing.description': 'Get data-driven pricing recommendations based on competitor analysis, market trends, and performance metrics.',
    'features.content.title': 'Content Enhancement',
    'features.content.description': 'Receive suggestions to improve product titles, descriptions, and bullet points for better conversion rates.',
    'features.category.title': 'Category Targeting',
    'features.category.description': 'Optimize product categorization across different marketplaces for maximum visibility and discoverability.',
    
    // Stats Section
    'stats.accuracy': 'Accuracy Rate',
    'stats.recommendations': 'Recommendations Generated',
    'stats.increase': 'Avg. Sales Increase',
    'stats.generation': 'Report Generation',
    
    // CTA Section
    'cta.title': 'Ready to Optimize Your Products?',
    'cta.subtitle': 'Get personalized recommendations for every product. Start boosting your sales today.',
    
    // Sample Report
    'report.title': 'Sample Recommendations Report',
    'report.subtitle': 'AI-powered optimization recommendations for 100 Amazon marketplace products',
    'report.summary.products': 'Products Analyzed',
    'report.summary.uplift': 'Avg. Potential Uplift',
    'report.summary.optimizations': 'Price Optimizations',
    'report.summary.improvements': 'Content Improvements',
    'report.table.title': 'Product Recommendations',
    'report.table.subtitle': 'Detailed recommendations for pricing, content, and categorization optimization',
    'report.table.productId': 'Product ID',
    'report.table.productTitle': 'Product Title',
    'report.table.currentPrice': 'Current Price',
    'report.table.recommendedPrice': 'Recommended Price',
    'report.table.change': 'Change',
    'report.table.descriptionScore': 'Description Score',
    'report.table.potentialUplift': 'Potential Uplift',
    'report.table.recommendations': 'Key Recommendations',
    'report.table.showing': 'Showing 20 of 100 products.',
    'report.table.viewAll': 'View all products →',
    
    // Score badges
    'score.excellent': 'Excellent',
    'score.good': 'Good',
    'score.fair': 'Fair',
    'score.needsWork': 'Needs Work',
    
    // Toast messages
    'toast.fileUploaded': 'File uploaded',
    'toast.fileReady': 'is ready for processing',
    'toast.noData': 'No data provided',
    'toast.noDataDesc': 'Please upload a file or add URLs to process',
    'toast.recommendationsReady': 'Recommendations ready!',
    'toast.recommendationsDesc': 'Your personalized product optimization recommendations are complete',
  },
  pl: {
    // Navigation & Common
    'nav.home': 'Strona główna',
    'nav.sampleReport': 'Przykładowy raport',
    'nav.backToHome': 'Powrót do strony głównej',
    'nav.exportReport': 'Eksportuj raport',
    'common.loading': 'Ładowanie...',
    'common.getStarted': 'Rozpocznij',
    'common.learnMore': 'Dowiedz się więcej',
    
    // Hero Section
    'hero.title.smart': 'Otrzymaj inteligentne',
    'hero.title.recommendations': 'rekomendacje',
    'hero.title.forEvery': 'dla każdego produktu',
    'hero.subtitle': 'Prześlij swoje oferty produktów i otrzymaj rekomendacje oparte na sztucznej inteligencji, aby zoptymalizować ceny, poprawić opisy i udoskonalić kategoryzację na marketplace.',
    'hero.cta.primary': 'Otrzymaj moje rekomendacje',
    'hero.cta.secondary': 'Zobacz przykładowy raport',
    'hero.freeOffer': 'Nie wymagamy karty kredytowej • Otrzymaj rekomendacje dla 100 produktów za darmo',
    
    // Upload Section
    'upload.title': 'Prześlij dane produktów',
    'upload.subtitle': 'Prześlij arkusz kalkulacyjny lub podaj adresy URL, aby otrzymać spersonalizowane rekomendacje',
    'upload.tab.file': 'Prześlij plik',
    'upload.tab.urls': 'Dodaj linki',
    'upload.button.generate': 'Generuj rekomendacje',
    'upload.button.generating': 'Generowanie rekomendacji...',
    'upload.status.ready': 'Gotowe do wygenerowania rekomendacji dla',
    'upload.status.file': '1 pliku',
    'upload.status.urls': 'linków',
    
    // Features Section
    'features.title': 'Inteligentne rekomendacje dla każdego produktu',
    'features.subtitle': 'Nasza sztuczna inteligencja analizuje Twoje oferty produktów i dostarcza praktyczne rekomendacje, aby zwiększyć wydajność na wszystkich marketplace',
    'features.pricing.title': 'Optymalizacja cen',
    'features.pricing.description': 'Otrzymaj rekomendacje cenowe oparte na danych z analizy konkurencji, trendów rynkowych i wskaźników wydajności.',
    'features.content.title': 'Ulepszanie treści',
    'features.content.description': 'Otrzymaj sugestie dotyczące poprawy tytułów produktów, opisów i punktów dla lepszej konwersji.',
    'features.category.title': 'Targetowanie kategorii',
    'features.category.description': 'Zoptymalizuj kategoryzację produktów na różnych marketplace dla maksymalnej widoczności i wykrywalności.',
    
    // Stats Section
    'stats.accuracy': 'Wskaźnik dokładności',
    'stats.recommendations': 'Wygenerowane rekomendacje',
    'stats.increase': 'Średni wzrost sprzedaży',
    'stats.generation': 'Generowanie raportu',
    
    // CTA Section
    'cta.title': 'Gotowy na optymalizację swoich produktów?',
    'cta.subtitle': 'Otrzymaj spersonalizowane rekomendacje dla każdego produktu. Zacznij zwiększać swoją sprzedaż już dziś.',
    
    // Sample Report
    'report.title': 'Przykładowy raport rekomendacji',
    'report.subtitle': 'Rekomendacje optymalizacji oparte na AI dla 100 produktów z marketplace Amazon',
    'report.summary.products': 'Przeanalizowane produkty',
    'report.summary.uplift': 'Średni potencjalny wzrost',
    'report.summary.optimizations': 'Optymalizacje cen',
    'report.summary.improvements': 'Ulepszenia treści',
    'report.table.title': 'Rekomendacje produktów',
    'report.table.subtitle': 'Szczegółowe rekomendacje dotyczące optymalizacji cen, treści i kategoryzacji',
    'report.table.productId': 'ID produktu',
    'report.table.productTitle': 'Tytuł produktu',
    'report.table.currentPrice': 'Aktualna cena',
    'report.table.recommendedPrice': 'Zalecana cena',
    'report.table.change': 'Zmiana',
    'report.table.descriptionScore': 'Ocena opisu',
    'report.table.potentialUplift': 'Potencjalny wzrost',
    'report.table.recommendations': 'Kluczowe rekomendacje',
    'report.table.showing': 'Pokazuje 20 z 100 produktów.',
    'report.table.viewAll': 'Zobacz wszystkie produkty →',
    
    // Score badges
    'score.excellent': 'Doskonały',
    'score.good': 'Dobry',
    'score.fair': 'Wystarczający',
    'score.needsWork': 'Wymaga pracy',
    
    // Toast messages
    'toast.fileUploaded': 'Plik przesłany',
    'toast.fileReady': 'jest gotowy do przetworzenia',
    'toast.noData': 'Brak danych',
    'toast.noDataDesc': 'Proszę przesłać plik lub dodać linki do przetworzenia',
    'toast.recommendationsReady': 'Rekomendacje gotowe!',
    'toast.recommendationsDesc': 'Twoje spersonalizowane rekomendacje optymalizacji produktów są gotowe',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};