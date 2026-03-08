import { useEffect, useState } from 'react';
import { X, CheckCircle2, Loader2 } from 'lucide-react';
import { addEntry } from '@/lib/waitlist';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  const [email, setEmail] = useState('');
  const [sku, setSku] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset form when modal closes
      setEmail('');
      setSku('');
      setError('');
      setLoading(false);
      setSuccess(false);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen) return null;

  const validateEmail = (value: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!validateEmail(email)) {
      setError('Podaj poprawny adres email.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      addEntry(email.trim(), sku);
      setLoading(false);
      setSuccess(true);
    }, 800);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
      style={{ alignItems: 'flex-start', paddingTop: '48px' }}
      onClick={onClose}
    >
      <div
        className="relative w-full mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300"
        style={{ maxWidth: '520px' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient top bar */}
        <div
          className="w-full"
          style={{
            height: '6px',
            background: 'linear-gradient(to right, #1E5F8E, #F0921C)',
          }}
        />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-8">
          {success ? (
            /* ─── Success State ─── */
            <div className="flex flex-col items-center text-center py-6">
              <CheckCircle2 className="h-16 w-16 mb-4" style={{ color: '#1E5F8E' }} />
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#163D5C' }}>
                Jesteś na liście! 🎉
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Odezwiemy się do Ciebie jako pierwsi
                gdy Shoppalyzer będzie gotowy.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-xl text-white font-semibold transition-colors hover:opacity-90"
                style={{ backgroundColor: '#1E5F8E' }}
              >
                Zamknij
              </button>
            </div>
          ) : (
            /* ─── Form State ─── */
            <>
              {/* Badge */}
              <span className="inline-block bg-orange-50 text-xs font-semibold px-3 py-1 rounded-full mb-4" style={{ color: '#F0921C' }}>
                🔒 Wczesny dostęp — liczba miejsc ograniczona
              </span>

              {/* Title */}
              <h2 className="text-2xl font-bold mb-2" style={{ color: '#163D5C' }}>
                Chcę wiedzieć pierwszy, gdzie tracę marżę na Allegro
              </h2>

              {/* Subtitle */}
              <p className="text-sm text-muted-foreground mb-6">
                Dołącz do listy wczesnego dostępu.
                Odezwiemy się jako pierwsi — bez spamu.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Adres e-mail *
                  </label>
                  <input
                    type="email"
                    placeholder="twoj@email.pl"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#1E5F8E]/40 focus:border-[#1E5F8E] transition-colors"
                    required
                  />
                  {error && (
                    <p className="text-red-500 text-xs mt-1">{error}</p>
                  )}
                </div>

                {/* SKU */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Ile masz SKU na Allegro? (opcjonalnie)
                  </label>
                  <select
                    value={sku}
                    onChange={(e) => setSku(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#1E5F8E]/40 focus:border-[#1E5F8E] transition-colors"
                  >
                    <option value="">Wybierz przedział</option>
                    <option value="1-50">1–50 SKU</option>
                    <option value="51-200">51–200 SKU</option>
                    <option value="201-1000">201–1000 SKU</option>
                    <option value="1000+">Powyżej 1000 SKU</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl py-3.5 text-white font-bold text-sm transition-colors hover:opacity-90 disabled:opacity-70 flex items-center justify-center gap-2"
                  style={{ backgroundColor: '#F0921C' }}
                >
                  {loading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    'Zapisz mnie na listę wczesnego dostępu →'
                  )}
                </button>
              </form>

              {/* Trust line */}
              <p className="text-xs text-center text-gray-400 mt-4">
                🔐 Nie wysyłamy spamu. Tylko informacja o dostępie.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
