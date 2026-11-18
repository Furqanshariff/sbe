import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, MessageCircle, Phone, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '@/src/data/company';
import { useLanguage } from '@/src/context/LanguageContext';
import { cn } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';
import { BrandLogo } from '@/src/components/shared/PhotoSlot';

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navItems = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/process', label: t.nav.process },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-40 w-full border-b transition-all duration-200',
          scrolled
            ? 'h-16 border-border-subtle bg-white/95 backdrop-blur-md shadow-xs'
            : 'h-[68px] sm:h-20 border-border-subtle/70 bg-white'
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            aria-label="Sri Balaji Enterprises home"
            className="min-h-[44px] inline-flex items-center shrink-0 focus-visible:rounded-lg"
          >
            <BrandLogo src={COMPANY.logoSrc} compact={scrolled} />
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary navigation"
            className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'relative inline-flex min-h-[44px] items-center whitespace-nowrap shrink-0 transition-colors hover:text-ocean',
                    isActive
                      ? 'font-semibold text-navy after:absolute after:bottom-2 after:left-0 after:h-0.5 after:w-full after:bg-brand-green'
                      : 'text-ink-muted'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <a
              href={COMPANY.telHref}
              className="hidden xl:inline-flex min-h-[44px] items-center gap-1.5 text-sm font-semibold text-navy hover:text-ocean whitespace-nowrap shrink-0 tabular-nums"
            >
              <Phone className="h-4 w-4 text-brand-green-dark" aria-hidden="true" />
              {COMPANY.phoneDisplay}
            </a>

            {/* EN | ಕನ್ನಡ language toggle */}
            <div
              role="group"
              aria-label="Language toggle"
              title={lang === 'kn' ? 'Kannada navigation & CTAs (TO BE REVIEWED)' : 'Switch language'}
              className="inline-flex min-h-[44px] items-center rounded-xl border border-border-subtle bg-surface p-1 text-xs font-semibold shrink-0"
            >
              <button
                type="button"
                onClick={() => setLang('en')}
                className={cn(
                  'min-h-[34px] rounded-lg px-2.5 transition-colors cursor-pointer whitespace-nowrap',
                  lang === 'en'
                    ? 'bg-navy text-white'
                    : 'text-ink-muted hover:text-navy'
                )}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLang('kn')}
                className={cn(
                  'min-h-[34px] rounded-lg px-2.5 transition-colors cursor-pointer whitespace-nowrap',
                  lang === 'kn'
                    ? 'bg-navy text-white'
                    : 'text-ink-muted hover:text-navy'
                )}
              >
                ಕನ್ನಡ
              </button>
            </div>

            <Button asChild variant="primaryDarkText" size="default">
              <Link to="/contact">{t.cta.schedulePickup}</Link>
            </Button>
          </div>

          {/* Mobile Controls (>= 44px tap targets) */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setLang(lang === 'en' ? 'kn' : 'en')}
              aria-label="Toggle English or Kannada"
              className="min-h-[44px] min-w-[44px] rounded-xl border border-border-subtle bg-surface px-2.5 text-xs font-semibold text-navy cursor-pointer"
            >
              {lang === 'en' ? 'ಕನ್ನಡ' : 'EN'}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border-subtle bg-white text-navy hover:bg-surface cursor-pointer"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Animated Full-Screen Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={prefersReduced ? { opacity: 1 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-navy text-white lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            <div className="flex h-[68px] items-center justify-between border-b border-white/10 px-4 sm:px-6">
              <BrandLogo src={COMPANY.logoSrc} lightText />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col justify-center gap-2 overflow-y-auto px-5 py-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'flex min-h-[52px] items-center rounded-2xl px-4 py-3 font-display text-2xl font-bold transition-colors',
                      isActive
                        ? 'bg-white/10 text-brand-green'
                        : 'text-white hover:bg-white/5'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="border-t border-white/10 px-5 pb-[calc(1.25rem+env(safe-area-inset-bottom))] pt-5 space-y-3">
              <Button asChild variant="primary" size="lg" className="min-h-[48px] w-full">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  {t.cta.schedulePickup}
                </Link>
              </Button>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={COMPANY.telHref}
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/25 text-sm font-semibold text-white"
                >
                  <Phone className="h-4 w-4 text-brand-green" aria-hidden="true" />
                  <span>{t.cta.call}</span>
                </a>
                <a
                  href={COMPANY.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-brand-green/50 bg-brand-green/15 text-sm font-semibold text-brand-green"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{t.cta.whatsapp}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
