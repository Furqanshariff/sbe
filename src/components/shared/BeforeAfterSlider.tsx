import { useState } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { PhotoSlot } from './PhotoSlot';

interface BeforeAfterSliderProps {
  title: string;
  subtitle: string;
  beforeLabel: string;
  beforeDescription: string;
  beforeSrc: string | null;
  afterLabel: string;
  afterDescription: string;
  afterSrc: string | null;
}

export function BeforeAfterSlider({
  title,
  subtitle,
  beforeLabel,
  beforeDescription,
  beforeSrc,
  afterLabel,
  afterDescription,
  afterSrc,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="rounded-[24px] border border-border-subtle bg-white p-5 shadow-xs sm:p-6">
      <div className="mb-5">
        <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
        <p className="mt-1 text-base text-ink-muted sm:text-sm">{subtitle}</p>
      </div>

      <div className="relative select-none overflow-hidden rounded-[20px] aspect-[16/10] bg-surface">
        {/* After layer */}
        <div className="absolute inset-0">
          {afterSrc ? (
            <img
              src={afterSrc}
              alt={afterDescription}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          ) : (
            <PhotoSlot
              src={null}
              description={afterDescription}
              aspectClass="h-full w-full"
              className="rounded-none border-0 bg-brand-green-soft/70"
            />
          )}
          <span className="absolute right-2.5 top-2.5 rounded-lg bg-navy/85 px-2.5 py-1 text-[11px] font-semibold text-white sm:right-3 sm:top-3 sm:px-3 sm:text-xs">
            {afterLabel}
          </span>
        </div>

        {/* Before layer */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          {beforeSrc ? (
            <img
              src={beforeSrc}
              alt={beforeDescription}
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover"
            />
          ) : (
            <PhotoSlot
              src={null}
              description={beforeDescription}
              aspectClass="h-full w-full"
              className="rounded-none border-0 bg-slate-200"
            />
          )}
          <span className="absolute left-2.5 top-2.5 rounded-lg bg-navy/85 px-2.5 py-1 text-[11px] font-semibold text-white sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
            {beforeLabel}
          </span>
        </div>

        {/* Vertical divider line & handle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-brand-green shadow-md"
          style={{ left: `${position}%` }}
        >
          <div className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-brand-green text-navy shadow-md">
            <MoveHorizontal className="h-4 w-4" />
          </div>
        </div>

        {/* Accessible range input */}
        <input
          type="range"
          min={5}
          max={95}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`Before and after comparison slider for ${title}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-muted">
        <span>Drag slider left or right ({position}%)</span>
        <span>{beforeLabel} vs {afterLabel}</span>
      </div>
    </div>
  );
}
