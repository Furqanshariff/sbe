import { Link } from 'react-router-dom';
import { PhoneCall, ArrowRight } from 'lucide-react';
import { COMPANY } from '@/src/data/company';
import { useLanguage } from '@/src/context/LanguageContext';
import { Button } from '@/src/components/ui/button';
import { Reveal } from './MotionPrimitives';

export function FinalCtaBanner({
  subtitle = 'Partner with Sri Balaji Enterprises for reliable, compliant, and circular waste management across Bengaluru.',
}: {
  subtitle?: string;
}) {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-navy py-14 md:py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-70" />
      <div className="pointer-events-none hidden md:block absolute -right-24 -top-24 h-72 w-72 rounded-full bg-ocean/40 blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-start justify-between gap-6 rounded-[24px] border border-white/15 bg-navy-muted/60 p-6 sm:p-8 md:flex-row md:items-center md:p-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {t.closingLine}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85 md:text-lg">
              {subtitle}
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center shrink-0">
            <Button asChild variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto">
              <Link to="/contact">
                {t.cta.partnerWithUs}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outlineLight" size="lg" className="min-h-[48px] w-full sm:w-auto">
              <a href={COMPANY.telHref}>
                <PhoneCall className="h-4 w-4" aria-hidden="true" />
                {t.cta.callNow}
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
