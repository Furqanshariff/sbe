import { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { PARTNERSHIP } from '@/src/data/partnership';
import { cn } from '@/src/lib/utils';

export function MunicipalPartnerBadge({
  className,
}: {
  className?: string;
}) {
  const [imgError, setImgError] = useState(false);
  const showLogo = Boolean(PARTNERSHIP.logoSrc) && !imgError;

  return (
    <div
      className={cn(
        'inline-flex flex-col items-center gap-2.5 rounded-2xl border border-brand-green/70 bg-white px-4 py-3 text-center shadow-xs sm:flex-row sm:items-center sm:gap-3.5 sm:text-left',
        className
      )}
    >
      {showLogo ? (
        <img
          src={PARTNERSHIP.logoSrc}
          alt={PARTNERSHIP.logoAlt}
          loading="lazy"
          decoding="async"
          onError={() => setImgError(true)}
          className="h-12 max-h-12 w-auto shrink-0 object-contain"
        />
      ) : (
        <div
          aria-label="Municipal Authority Partner"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-green/50 bg-brand-green-soft text-brand-green-dark"
        >
          <ShieldCheck className="h-6 w-6" aria-hidden="true" />
        </div>
      )}

      <div className="min-w-0">
        <p className="font-display text-sm font-bold leading-tight text-navy">
          {showLogo ? PARTNERSHIP.title : 'Municipal Authority Partner'}
        </p>
        <p className="mt-0.5 text-xs font-medium leading-tight text-ink-muted">
          {PARTNERSHIP.subtitle}
        </p>
      </div>
    </div>
  );
}
