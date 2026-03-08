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
        className="relative max-w-lg w-full mx-4 bg-white rounded-2xl shadow-2xl p-8 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        <span className="inline-block bg-orange-50 text-[#F0921C] text-xs font-semibold px-3 py-1 rounded-full mb-4">
          🔒 Wczesny dostęp — liczba miejsc ograniczona
        </span>

        <h2 className="text-2xl font-bold mb-2" style={{ color: '#163D5C' }}>
          Chcę wiedzieć pierwszy, gdzie tracę marżę na Allegro
        </h2>

        <p className="text-sm text-muted-foreground mb-6">
          Dołącz do listy wczesnego dostępu. Odezwiemy się do Ciebie jako pierwsi.
        </p>

        <iframe
          src="https://tally.so/embed/ZjVdl0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="320"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Waitlist Shoppalyzer"
        />

        <p className="text-xs text-center text-gray-400 mt-4">
          🔐 Nie wysyłamy spamu. Tylko informacja o dostępie.
        </p>
      </div>
    </div>
  );
};
