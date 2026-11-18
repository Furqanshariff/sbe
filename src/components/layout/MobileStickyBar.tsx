import { MessageCircle, Phone } from 'lucide-react';
import { COMPANY } from '@/src/data/company';
import { useLanguage } from '@/src/context/LanguageContext';

export function MobileStickyBar() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-white/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)] shadow-[0_-6px_20px_rgba(8,54,82,0.08)] md:hidden">
      <div className="flex h-[52px]">
        <a
          href={COMPANY.telHref}
          className="flex flex-1 items-center justify-center gap-2 border-r border-border-subtle text-sm font-semibold text-navy active:bg-surface"
        >
          <Phone className="h-4 w-4 text-ocean" aria-hidden="true" />
          <span>{t.cta.call}</span>
        </a>
        <a
          href={COMPANY.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 bg-brand-green-dark text-sm font-semibold text-white active:opacity-90"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          <span>{t.cta.whatsapp}</span>
        </a>
      </div>
    </div>
  );
}

export function FloatingWhatsApp() {
  return (
    <a
      href={COMPANY.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Sri Balaji Enterprises on WhatsApp"
      className="fixed bottom-6 right-6 z-40 hidden md:inline-flex min-h-[48px] items-center gap-2.5 rounded-full bg-brand-green-dark px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-brand-green-dark/95"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
}
