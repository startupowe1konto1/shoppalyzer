import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useWaitlist } from '@/context/WaitlistContext';

const navLinks = [
  { label: 'Korzyści', href: '#korzysci' },
  { label: 'Jak to działa', href: '#jak-to-dziala' },
  { label: 'Cennik', href: '#cennik' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar = () => {
  const navigate = useNavigate();
  const { openWaitlist } = useWaitlist();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  };

  const logoStyle = { filter: 'drop-shadow(0px 1px 2px rgba(30, 95, 142, 0.15))' };

  return (
    <nav
      className={`sticky top-0 z-50 bg-background border-b border-primary/20 transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_2px_12px_-2px_hsl(207_58%_23%/0.15)]' : ''
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between" style={{ minHeight: '88px', alignItems: 'center' }}>
        <a
          href="/"
          className="flex items-center"
          onClick={(e) => { e.preventDefault(); navigate('/'); }}
        >
          <img
            src="/shoppalyzer_2.png"
            alt="Shoppalyzer"
            style={{
              height: '72px',
              width: 'auto',
              objectFit: 'contain' as const,
              display: 'block',
              filter: 'drop-shadow(0px 1px 4px rgba(30,95,142,0.2))'
            }}
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="cta" size="sm" onClick={openWaitlist}>
            Wypróbuj za darmo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background px-4 pb-4 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-2 text-sm font-medium text-foreground/80 hover:text-primary"
            >
              {link.label}
            </button>
          ))}
          <Button variant="cta" size="sm" className="w-full" onClick={() => { setMobileOpen(false); openWaitlist(); }}>
            Wypróbuj za darmo
          </Button>
        </div>
      )}
    </nav>
  );
};
