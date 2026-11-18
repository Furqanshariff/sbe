import { useCallback, useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import {
  BEFORE_AFTER_TRANSFORMATIONS,
  GALLERY_CATEGORIES,
  GALLERY_ITEMS,
  type GalleryCategory,
} from '@/src/data/gallery';
import { Dialog, DialogContent, DialogTitle } from '@/src/components/ui/dialog';
import { SeoHead } from '@/src/components/shared/SeoHead';
import { PhotoSlot } from '@/src/components/shared/PhotoSlot';
import { Reveal } from '@/src/components/shared/MotionPrimitives';
import { BeforeAfterSlider } from '@/src/components/shared/BeforeAfterSlider';
import { FinalCtaBanner } from '@/src/components/shared/FinalCtaBanner';
import { cn } from '@/src/lib/utils';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const activeItem =
    lightboxIndex !== null && filteredItems[lightboxIndex]
      ? filteredItems[lightboxIndex]
      : null;

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return prev === 0 ? filteredItems.length - 1 : prev - 1;
    });
  }, [filteredItems.length]);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) => {
      if (prev === null || filteredItems.length === 0) return null;
      return prev === filteredItems.length - 1 ? 0 : prev + 1;
    });
  }, [filteredItems.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, goPrev, goNext]);

  return (
    <>
      <SeoHead
        title="Gallery | Sri Balaji Enterprises – Waste Management & Upcycling Bengaluru"
        description="View Sri Balaji Enterprises operations across Bengaluru: collection drives, fleet, training workshops, e-waste sorting, and composite waste to reusable products."
      />

      {/* Navy Hero */}
      <section className="relative overflow-hidden bg-navy py-14 md:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-green">Field Operations & Impact</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Gallery
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Collection drives, processing units, awareness workshops, e-waste sorting, and composite waste transformations across Bengaluru.
          </p>
        </div>
      </section>

      {/* Before / After Sliders */}
      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green-dark">
              Transformation Showcase
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Before & After Resource Recovery
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            {BEFORE_AFTER_TRANSFORMATIONS.map((pair) => (
              <BeforeAfterSlider key={pair.id} {...pair} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter + Masonry Grid */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto border-b border-border-subtle pb-5 -mx-4 px-4 no-scrollbar sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setSelectedCategory(category);
                  setLightboxIndex(null);
                }}
                className={cn(
                  'min-h-[44px] shrink-0 rounded-xl px-4 py-2 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap',
                  selectedCategory === category
                    ? 'bg-navy text-white'
                    : 'bg-surface text-ink-muted hover:text-navy'
                )}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                className="group break-inside-avoid rounded-[24px] border border-border-subtle bg-white p-4 transition-shadow hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open ${item.title} in lightbox`}
                  className="relative block w-full text-left cursor-pointer"
                >
                  <PhotoSlot
                    src={item.photoSrc}
                    description={item.photoDescription}
                    fit={item.fit}
                    imgClassName={item.imgClassName}
                    aspectClass={
                      item.aspect === 'tall'
                        ? 'aspect-[3/4]'
                        : item.aspect === 'square'
                        ? 'aspect-square'
                        : 'aspect-[4/3]'
                    }
                  />
                  <span className="absolute bottom-3 right-3 inline-flex h-11 w-11 items-center justify-center rounded-full bg-navy/85 text-white opacity-95 transition-opacity group-hover:opacity-100">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </button>
                <div className="mt-4 px-1">
                  <p className="text-xs font-medium text-ocean">
                    {item.category} · {item.location}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-bold text-navy">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Dialog */}
      <Dialog
        open={activeItem !== null}
        onOpenChange={(open) => {
          if (!open) setLightboxIndex(null);
        }}
      >
        <DialogContent className="p-4 sm:p-6">
          {activeItem && (
            <div>
              <DialogTitle className="pr-12">{activeItem.title}</DialogTitle>
              <p className="mt-1 text-xs font-medium text-ink-muted">
                {activeItem.category} · {activeItem.location}
              </p>

              <div className="mt-4">
                <PhotoSlot
                  src={activeItem.photoSrc}
                  description={activeItem.photoDescription}
                  fit={activeItem.fit}
                  imgClassName={activeItem.imgClassName}
                  aspectClass="aspect-[16/10]"
                />
              </div>

              <div className="mt-4 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={goPrev}
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-border-subtle px-4 text-sm font-semibold text-navy hover:bg-surface cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                  Previous
                </button>
                <span className="text-xs font-medium text-ink-muted tabular-nums">
                  {(lightboxIndex ?? 0) + 1} / {filteredItems.length}
                </span>
                <button
                  type="button"
                  onClick={goNext}
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-border-subtle px-4 text-sm font-semibold text-navy hover:bg-surface cursor-pointer"
                >
                  Next
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <FinalCtaBanner />
    </>
  );
}
