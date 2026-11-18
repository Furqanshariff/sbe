import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPOSITE_STORY, RECYCLED_PRODUCTS } from '@/src/data/products';
import { Button } from '@/src/components/ui/button';
import { PhotoSlot } from './PhotoSlot';
import { Reveal } from './MotionPrimitives';

export function CompositeSpotlight({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <section
      id="composite-waste"
      className="relative overflow-hidden bg-navy py-14 md:py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-brand-green">
              Circular Resource Conversion
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
              {COMPOSITE_STORY.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
              {COMPOSITE_STORY.summary}
            </p>
          </div>
        </Reveal>

        {/* 3-step before -> processing -> after strip */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {COMPOSITE_STORY.steps.map((item, idx) => (
            <Reveal key={item.step} delay={idx * 0.06} className="relative flex flex-col">
              <div className="flex flex-1 flex-col rounded-[24px] border border-white/15 bg-navy-muted/70 p-4 sm:p-5">
                <PhotoSlot
                  src={item.photoSrc}
                  description={item.photoDescription}
                  aspectClass="aspect-[4/3]"
                  darkSurface
                />
                <div className="mt-5 flex items-baseline gap-2.5">
                  <span className="font-display text-sm font-bold text-brand-green tabular-nums">
                    {item.step}.
                  </span>
                  <h3 className="font-display text-lg font-bold text-white">
                    {item.label}
                  </h3>
                </div>
                <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-sm">
                  {item.description}
                </p>
              </div>
              {idx < COMPOSITE_STORY.steps.length - 1 && (
                <div
                  aria-hidden="true"
                  className="hidden md:flex absolute -right-4 top-1/2 z-10 h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-brand-green text-navy shadow-md"
                >
                  <ArrowRight className="h-4 w-4" />
                </div>
              )}
            </Reveal>
          ))}
        </div>

        {/* Benefits row */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COMPOSITE_STORY.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-2xl border border-white/15 bg-white/5 p-5"
            >
              <div className="flex items-center gap-2.5">
                <CheckCircle2
                  className="h-5 w-5 shrink-0 text-brand-green"
                  aria-hidden="true"
                />
                <h3 className="font-display text-base font-bold text-white">
                  {benefit.title}
                </h3>
              </div>
              <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Products row */}
        {!compact ? (
          <div className="mt-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">
                Products Made From Recycled Waste
              </h3>
              <p className="mt-1 text-base text-white/80 sm:text-sm">
                Sample utility items from our brochure; material specifications are confirmed with each client batch.
              </p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {RECYCLED_PRODUCTS.map((product) => (
                <div
                  key={product.id}
                  className="rounded-[24px] border border-white/15 bg-navy-muted/80 p-4"
                >
                  <PhotoSlot
                    src={product.photoSrc}
                    description={product.photoDescription}
                    aspectClass="aspect-square"
                    darkSurface
                  />
                  <h4 className="mt-4 font-display text-base font-bold text-white">
                    {product.name}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-brand-green">
                    {product.materialNote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-[24px] border border-brand-green/40 bg-ocean/35 p-6 md:flex-row md:items-center">
          <p className="font-display text-lg font-bold text-white">
            {COMPOSITE_STORY.cta}
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            {compact && (
              <Button asChild variant="outlineLight" className="min-h-[48px] w-full sm:w-auto">
                <Link to="/services#composite-waste">
                  Explore Conversion Process
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            )}
            <Button asChild variant="primary" className="min-h-[48px] w-full sm:w-auto">
              <Link to="/contact?service=Composite%20waste%20conversion">
                Talk to Our Experts
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
