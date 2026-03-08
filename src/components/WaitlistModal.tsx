import { useEffect } from 'react';
import { X } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-xl w-full mx-4 bg-white rounded-2xl shadow-2xl p-8 animate-in slide-in-from-bottom-4 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Badge */}
        <span className="inline-block bg-orange-50 text-[#F0921C] text-xs font-semibold px-3 py-1 rounded-full mb-4">
          🔒 Wczesny dostęp — liczba miejsc ograniczona
        </span>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-2" style={{ color: '#163D5C' }}>
          Chcę wiedzieć pierwszy, gdzie tracę marżę na Allegro
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-muted-foreground mb-4">
          Dołącz do listy wczesnego dostępu. Odezwiemy się do Ciebie jako pierwsi.
        </p>

        {/* Tally iframe — no logo, no scroll, full height */}
        {/* marginTop negative to compensate for Tally's internal top padding */}
        <div style={{ 
          overflow: 'hidden', 
          height: '220px',
          marginTop: '-50px',   /* hides Tally logo area at top */
          paddingTop: '50px',   /* keeps content visible below logo */
        }}>
          <iframe
            src="https://tally.so/embed/ZjVdl0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=0"
            width="100%"
            height="270"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            scrolling="no"
            style={{ 
              display: 'block',
              border: 'none',
              marginTop: '-60px', /* shift iframe up to hide Tally logo */
            }}
            title="Waitlist Shoppalyzer"
          />
        </div>

        {/* Trust line */}
        <p className="text-xs text-center text-gray-400 mt-3">
          🔐 Nie wysyłamy spamu. Tylko informacja o dostępie.
        </p>
      </div>
    </div>
  );
};
