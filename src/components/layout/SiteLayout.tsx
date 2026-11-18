import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp, MobileStickyBar } from './MobileStickyBar';

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const { pathname, hash } = useLocation();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      const scrollToTarget = () => {
        const target = document.getElementById(id);
        if (target) {
          target.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
          return true;
        }
        return false;
      };
      if (scrollToTarget()) return;
      const timer = window.setTimeout(scrollToTarget, 160);
      return () => window.clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash, prefersReduced]);

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <motion.main
        id="main-content"
        key={pathname}
        initial={prefersReduced ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
      <MobileStickyBar />
      <FloatingWhatsApp />
    </div>
  );
}
