import { ImageIcon } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface PhotoSlotProps {
  src: string | null | undefined;
  description: string;
  alt?: string;
  className?: string;
  aspectClass?: string;
  darkSurface?: boolean;
  priority?: boolean;
  scrim?: boolean;
  sizes?: string;
  fit?: 'cover' | 'contain';
  imgClassName?: string;
}

export function PhotoSlot({
  src,
  description,
  alt,
  className,
  aspectClass = 'aspect-[4/3]',
  darkSurface = false,
  priority = false,
  scrim = false,
  sizes = '(max-width: 768px) 92vw, (max-width: 1200px) 45vw, 560px',
  fit = 'cover',
  imgClassName,
}: PhotoSlotProps) {
  if (src) {
    return (
      <div
        className={cn(
          'relative overflow-hidden rounded-[24px]',
          fit === 'contain'
            ? 'border border-border-subtle bg-white p-2 sm:p-3'
            : 'bg-surface',
          aspectClass,
          className
        )}
      >
        <img
          src={src}
          alt={alt || description}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          sizes={sizes}
          referrerPolicy="no-referrer"
          className={cn(
            'h-full w-full transition-transform duration-300',
            fit === 'contain'
              ? 'object-contain'
              : 'object-cover group-hover:scale-[1.02]',
            imgClassName
          )}
        />
        {scrim && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/75 via-navy/25 to-transparent"
          />
        )}
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Replace with photo: ${description}`}
      className={cn(
        'relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[24px] border-2 border-dashed p-6 text-center',
        darkSurface
          ? 'border-white/25 bg-navy-muted/60 text-white/90'
          : 'border-slate-300 bg-slate-100 text-slate-600',
        aspectClass,
        className
      )}
    >
      <div
        className={cn(
          'flex h-11 w-11 items-center justify-center rounded-full',
          darkSurface ? 'bg-white/10 text-brand-green' : 'bg-white text-ocean shadow-xs'
        )}
      >
        <ImageIcon className="h-5 w-5" aria-hidden="true" />
      </div>
      <div className="max-w-[260px]">
        <p
          className={cn(
            'text-xs font-semibold tracking-wide',
            darkSurface ? 'text-brand-green' : 'text-navy'
          )}
        >
          Replace with photo:
        </p>
        <p
          className={cn(
            'mt-1 text-xs leading-relaxed',
            darkSurface ? 'text-white/80' : 'text-slate-600'
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

interface LogoSlotProps {
  src: string | null | undefined;
  lightText?: boolean;
  compact?: boolean;
}

export function BrandLogo({ src, lightText = false, compact = false }: LogoSlotProps) {
  return (
    <span className="inline-flex items-center gap-2 whitespace-nowrap shrink-0 sm:gap-2.5">
      {src ? (
        <span
          className={cn(
            'inline-flex shrink-0 items-center justify-center overflow-hidden rounded-xl bg-navy-deep',
            compact ? 'h-8 w-8 sm:h-9 sm:w-9' : 'h-8 w-8 sm:h-10 sm:w-10',
            lightText ? 'ring-1 ring-white/20' : 'shadow-xs'
          )}
        >
          <img
            src={src}
            alt="Sri Balaji Enterprises logo"
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover"
          />
        </span>
      ) : (
        <span
          aria-label="Logo placeholder"
          className={cn(
            'inline-flex items-center justify-center rounded-xl border border-dashed font-display text-[10px] font-bold tracking-wider uppercase',
            compact ? 'h-8 w-8' : 'h-9 w-9',
            lightText
              ? 'border-brand-green/60 bg-white/10 text-brand-green'
              : 'border-navy/30 bg-surface text-navy'
          )}
        >
          LOGO
        </span>
      )}
      <span
        className={cn(
          'font-display font-bold tracking-tight whitespace-nowrap',
          compact ? 'text-[15px] sm:text-base' : 'text-[15px] sm:text-lg',
          lightText ? 'text-white' : 'text-navy'
        )}
      >
        Sri Balaji Enterprises
      </span>
    </span>
  );
}
