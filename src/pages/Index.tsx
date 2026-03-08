import { useSearchParams } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { HeroVariant1 } from '@/components/landing/HeroVariant1';
import { HeroVariant2 } from '@/components/landing/HeroVariant2';
import { HeroVariant3 } from '@/components/landing/HeroVariant3';
import { SocialProofBar } from '@/components/landing/SocialProofBar';
import { BenefitsBento } from '@/components/landing/BenefitsBento';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { Pricing } from '@/components/landing/Pricing';
import { Testimonials } from '@/components/landing/Testimonials';
import { FAQ } from '@/components/landing/FAQ';
import { FinalCTA } from '@/components/landing/FinalCTA';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  const [searchParams] = useSearchParams();
  const variant = searchParams.get('v') || '1';

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {variant === '2' ? <HeroVariant2 /> : variant === '3' ? <HeroVariant3 /> : <HeroVariant1 />}
      <SocialProofBar />
      <BenefitsBento />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
