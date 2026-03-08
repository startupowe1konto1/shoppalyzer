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
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingTop: '48px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '24px',
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '540px',
          background: 'white',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.2)',
          overflow: 'hidden',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gradient top bar */}
        <div style={{
          height: '6px',
          background: 'linear-gradient(90deg, #1E5F8E, #F0921C)',
        }} />

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#aaa',
            zIndex: 10,
            padding: '4px',
            lineHeight: 1,
          }}
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div style={{ padding: '28px 32px 0 32px' }}>

          {/* Badge */}
          <div style={{
            display: 'inline-block',
            background: '#FFF5E6',
            color: '#F0921C',
            fontSize: '11px',
            fontWeight: 700,
            padding: '4px 12px',
            borderRadius: '999px',
            marginBottom: '14px',
          }}>
            🔒 Wczesny dostęp — liczba miejsc ograniczona
          </div>

          {/* Title */}
          <h2 style={{
            color: '#163D5C',
            fontSize: '22px',
            fontWeight: 800,
            lineHeight: 1.3,
            margin: '0 0 6px 0',
          }}>
            Chcę wiedzieć pierwszy,<br />
            gdzie tracę marżę na Allegro
          </h2>

          {/* Subtitle */}
          <p style={{
            color: '#888',
            fontSize: '13px',
            margin: '0',
            lineHeight: 1.5,
          }}>
            Dołącz do listy wczesnego dostępu.
            Odezwiemy się jako pierwsi — bez spamu.
          </p>
        </div>

        {/* Tally iframe */}
        <div style={{ padding: '0 16px' }}>
          <iframe
            src="https://tally.so/embed/ZjVdl0?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=0"
            width="100%"
            height="310"
            style={{
              border: 'none',
              display: 'block',
            }}
            scrolling="no"
            title="Waitlist Shoppalyzer"
          />
        </div>

        {/* Trust line */}
        <div style={{
          textAlign: 'center',
          fontSize: '11px',
          color: '#bbb',
          padding: '0 32px 24px',
          marginTop: '-8px',
        }}>
          🔐 Nie wysyłamy spamu. Tylko informacja o dostępie.
        </div>
      </div>
    </div>
  );
};
