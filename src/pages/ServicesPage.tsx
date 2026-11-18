import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CheckCircle2,
  ClipboardCheck,
  Cpu,
  Factory,
  GraduationCap,
  Home,
  Recycle,
  School,
  Sprout,
  Truck,
} from 'lucide-react';
import {
  SEGREGATION_GUIDE,
  SERVICES,
  TRAINING_STEPS,
  WHO_WE_SERVE,
} from '@/src/data/services';
import { COMPANY_IMAGES } from '@/src/data/images';
import { useLanguage } from '@/src/context/LanguageContext';
import { Button } from '@/src/components/ui/button';
import { SeoHead } from '@/src/components/shared/SeoHead';
import { PhotoSlot } from '@/src/components/shared/PhotoSlot';
import { Reveal } from '@/src/components/shared/MotionPrimitives';
import { CompositeSpotlight } from '@/src/components/shared/CompositeSpotlight';
import { FaqSection } from '@/src/components/shared/FaqSection';
import { FinalCtaBanner } from '@/src/components/shared/FinalCtaBanner';
import { cn } from '@/src/lib/utils';

const SERVICE_ICONS = {
  Cpu,
  Recycle,
  Sprout,
  Truck,
  ClipboardCheck,
  GraduationCap,
} as const;

const AUDIENCE_ICONS = [Home, Building2, School, Factory, CalendarDays];

export default function ServicesPage() {
  const { t } = useLanguage();
  const [activeBin, setActiveBin] = useState(SEGREGATION_GUIDE[0].id);
  const currentBin =
    SEGREGATION_GUIDE.find((b) => b.id === activeBin) || SEGREGATION_GUIDE[0];

  return (
    <>
      <SeoHead
        title="Services | Sri Balaji Enterprises – Recycling, E-Waste & Composting Bengaluru"
        description="Explore end-to-end waste management services in Bengaluru: e-waste recycling, dry waste sorting, organic composting, residential & corporate pickup, consulting, and composite waste conversion."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-14 md:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-green">Our Services</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            What We Do
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            At Sri Balaji Enterprises, we provide end-to-end waste management solutions designed to make Bangalore cleaner and more sustainable. From collection and segregation to recycling and compliance, we manage every step responsibly and efficiently.
          </p>

          {/* Anchor navigation (44px+ tap targets, horizontal scroll on narrow mobile) */}
          <div className="mt-7 flex snap-x snap-mandatory gap-2.5 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                className="inline-flex min-h-[44px] shrink-0 snap-start items-center rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-colors hover:border-brand-green hover:text-brand-green whitespace-nowrap"
              >
                {service.number}. {service.title}
              </a>
            ))}
            <a
              href="#composite-waste"
              className="inline-flex min-h-[44px] shrink-0 snap-start items-center rounded-xl border border-brand-green/60 bg-brand-green/15 px-4 py-2 text-xs font-semibold text-brand-green transition-colors hover:bg-brand-green hover:text-navy whitespace-nowrap"
            >
              Composite Waste Conversion
            </a>
          </div>
        </div>
      </section>

      {/* Alternating Service Sections */}
      <section className="bg-white py-6 md:py-16">
        <div className="mx-auto max-w-7xl divide-y divide-border-subtle px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[service.iconName];
            const imageFirst = idx % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid scroll-mt-24 items-center gap-8 py-12 md:gap-10 md:py-14 lg:grid-cols-12"
              >
                <Reveal
                  className={cn(
                    'lg:col-span-5',
                    imageFirst ? 'lg:order-1' : 'lg:order-2'
                  )}
                >
                  <PhotoSlot
                    src={service.photoSrc}
                    description={service.photoDescription}
                    aspectClass={service.photoFit === 'contain' ? 'aspect-square' : 'aspect-[4/3]'}
                    fit={service.photoFit}
                  />
                </Reveal>

                <Reveal
                  delay={0.05}
                  className={cn(
                    'lg:col-span-7',
                    imageFirst ? 'lg:order-2' : 'lg:order-1'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-brand-green">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-display text-sm font-bold text-ocean tabular-nums">
                      Service {service.number}
                    </span>
                  </div>

                  <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-navy md:text-3xl">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-base leading-relaxed text-ink-muted">
                    {service.whatItIs}
                  </p>

                  <div className="mt-4 rounded-2xl bg-surface px-4 py-3.5 text-base text-navy sm:text-sm">
                    <span className="font-bold">Ideal for: </span>
                    <span className="text-ink-muted">{service.whoItIsFor}</span>
                  </div>

                  <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                    {service.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-base text-ink sm:text-sm"
                      >
                        <CheckCircle2
                          className="mt-1 h-4 w-4 shrink-0 text-brand-green-dark"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7">
                    <Button asChild variant="primaryDarkText" size="lg" className="min-h-[48px] w-full sm:w-auto">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                      >
                        {t.cta.requestQuote}
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </Button>
                  </div>
                </Reveal>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURED SECTION: Composite Waste to Reusable Products */}
      <CompositeSpotlight compact={false} />

      {/* Interactive Mini Segregation Guide */}
      <section className="bg-surface py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green-dark">
              Quick Reference Guide
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              What Goes in Which Bin?
            </h2>
            <p className="mt-3 text-base text-ink-muted">
              Select a waste stream below to check proper Bengaluru segregation before scheduled pickup.
            </p>
          </Reveal>

          <div className="mt-6 grid items-start gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex snap-x snap-mandatory gap-2 overflow-x-auto pb-2 -mx-4 px-4 no-scrollbar sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
                {SEGREGATION_GUIDE.map((bin) => (
                  <button
                    key={bin.id}
                    type="button"
                    onClick={() => setActiveBin(bin.id)}
                    className={cn(
                      'min-h-[44px] shrink-0 snap-start rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap',
                      activeBin === bin.id
                        ? 'bg-navy text-white shadow-xs'
                        : 'border border-border-subtle bg-white text-navy hover:bg-white/80'
                    )}
                  >
                    {bin.title}
                  </button>
                ))}
              </div>

              <div className="mt-5 rounded-[24px] border border-border-subtle bg-white p-6 md:p-8">
                <div>
                  <span
                    className={cn(
                      'inline-block rounded-lg border px-3 py-1 text-xs font-bold',
                      currentBin.accentClass
                    )}
                  >
                    {currentBin.binColor}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-navy">
                    {currentBin.title}
                  </h3>
                </div>
                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div className="rounded-2xl bg-surface p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-ocean">
                      Accepted Items
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-ink sm:text-sm">
                      {currentBin.examples}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-surface p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">
                      How Sri Balaji Processes It
                    </p>
                    <p className="mt-2 text-base leading-relaxed text-ink sm:text-sm">
                      {currentBin.action}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <PhotoSlot
                src={COMPANY_IMAGES.segregationGuidePoster.src}
                description={COMPANY_IMAGES.segregationGuidePoster.alt}
                aspectClass="aspect-[738/800]"
                fit="contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Awareness & Training Programs (5-step zig-zag timeline) */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-green-dark">
              Education & Behavioural Change
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Awareness & Training Programs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              We educate communities and organizations on responsible waste management. Through workshops, campaigns, and hands-on training, we promote segregation, recycling, and composting across schools, apartments, corporates, and communities.
            </p>
          </Reveal>

          <div className="relative mt-10 space-y-5">
            {TRAINING_STEPS.map((item, idx) => {
              const isRight = idx % 2 === 1;
              return (
                <Reveal
                  key={item.step}
                  delay={idx * 0.04}
                  className={cn(
                    'flex flex-col md:flex-row',
                    isRight ? 'md:justify-end' : 'md:justify-start'
                  )}
                >
                  <div className="flex w-full items-start gap-4 rounded-[24px] border border-border-subtle bg-surface p-5 sm:gap-5 sm:p-6 md:w-[68%]">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-green font-display text-sm font-extrabold text-navy tabular-nums sm:h-12 sm:w-12 sm:text-base">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-bold text-navy sm:text-xl">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-base leading-relaxed text-ink-muted sm:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who We Serve (Swipeable on mobile, 5-col grid on desktop) */}
      <section className="bg-navy py-14 md:py-24 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green">Sector Coverage</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Who We Serve
            </h2>
          </Reveal>

          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 -mx-4 px-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
            {WHO_WE_SERVE.map((item, idx) => {
              const Icon = AUDIENCE_ICONS[idx % AUDIENCE_ICONS.length];
              return (
                <Reveal
                  key={item.title}
                  delay={idx * 0.04}
                  className="w-[78vw] max-w-[300px] shrink-0 snap-start rounded-[24px] border border-white/15 bg-navy-muted/70 p-6 sm:w-auto sm:max-w-none"
                >
                  <Icon className="h-6 w-6 text-brand-green" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-white/80 sm:text-sm">
                    {item.description}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <FaqSection
        background="white"
        title="Common Questions About Our Services"
      />

      <FinalCtaBanner />
    </>
  );
}
