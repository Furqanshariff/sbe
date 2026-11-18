import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  GraduationCap,
  Quote,
  Recycle,
  ShieldCheck,
  Sprout,
  Truck,
} from 'lucide-react';
import { COMPANY } from '@/src/data/company';
import { IMPACT_METRICS } from '@/src/data/impact';
import { COMPANY_IMAGES } from '@/src/data/images';
import { SERVICES } from '@/src/data/services';
import { TESTIMONIALS } from '@/src/data/testimonials';
import { useLanguage } from '@/src/context/LanguageContext';
import { Button } from '@/src/components/ui/button';
import { SeoHead } from '@/src/components/shared/SeoHead';
import { PhotoSlot } from '@/src/components/shared/PhotoSlot';
import { MunicipalPartnerBadge } from '@/src/components/shared/MunicipalPartnerBadge';
import { AnimatedCounter, Reveal } from '@/src/components/shared/MotionPrimitives';
import { CompositeSpotlight } from '@/src/components/shared/CompositeSpotlight';
import { FaqSection } from '@/src/components/shared/FaqSection';
import { FinalCtaBanner } from '@/src/components/shared/FinalCtaBanner';

const ICON_MAP = {
  Cpu,
  Recycle,
  Sprout,
  Truck,
  ClipboardCheck,
  GraduationCap,
} as const;

const TRUST_ITEMS = [
  'Compliant Operations',
  'City-Wide Coverage',
  'Doorstep Collection',
  'Trained Team',
];

const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'Results-Driven Approach',
    description:
      'Focused on measurable landfill diversion, consistent pickup schedules, and clean material recovery across every site.',
  },
  {
    number: '02',
    title: 'Customized Solutions',
    description:
      'Tailored collection frequencies, bin setups, and recycling workflows matched to your apartment, campus, or office volume.',
  },
  {
    number: '03',
    title: 'Experienced Team',
    description:
      'Over a decade of operational experience in Bengaluru with trained field staff, supervisors, and dedicated route crews.',
  },
  {
    number: '04',
    title: 'Full-Service Digital Support',
    description:
      'Clear pickup coordination, responsive WhatsApp and phone support, and structured waste reporting.',
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const impactSectionRef = useRef<HTMLElement | null>(null);
  const [impactVisible, setImpactVisible] = useState(false);

  useEffect(() => {
    const node = impactSectionRef.current;
    if (!node || impactVisible) return;
    if (typeof IntersectionObserver === 'undefined') {
      setImpactVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setImpactVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [impactVisible]);

  const prevTestimonial = () =>
    setActiveTestimonial((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));
  const nextTestimonial = () =>
    setActiveTestimonial((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <>
      <SeoHead
        title="Sri Balaji Enterprises | Waste Management Company in Bangalore"
        description="Innovative Waste Solutions for a Better Tomorrow. Reliable, compliant waste management, e-waste recycling, composting, and composite waste conversion in Bengaluru."
      />

      {/* 1. HERO (Full-bleed Navy, mobile-first simplified layout) */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-70" />
        <div className="pointer-events-none hidden md:block absolute -left-32 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-ocean/35 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-7 px-4 py-10 sm:px-6 sm:py-14 md:gap-12 md:py-24 lg:grid-cols-12 lg:px-8">
          <div className="lg:col-span-6">
            <h1 className="font-display text-[32px] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[54px]">
              {t.hero.headline}
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:mt-5 sm:text-lg">
              {t.hero.subhead}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
              <Button asChild variant="primary" size="lg" className="min-h-[48px] w-full sm:w-auto">
                <Link to="/contact">
                  {t.cta.schedulePickup}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outlineLight" size="lg" className="min-h-[48px] w-full sm:w-auto">
                <Link to="/services">{t.cta.exploreServices}</Link>
              </Button>
            </div>
          </div>

          {/* Right side: balanced 3-image collage on both mobile and desktop with navy scrim overlay */}
          <div className="relative lg:col-span-6">
            <div className="grid grid-cols-12 items-stretch gap-3 sm:gap-4">
              <div className="col-span-7">
                <PhotoSlot
                  src={COMPANY_IMAGES.mrfFacilityFleet.src}
                  description={COMPANY_IMAGES.mrfFacilityFleet.alt}
                  aspectClass="h-full min-h-[220px] aspect-[4/5]"
                  darkSurface
                  priority
                  scrim
                />
              </div>
              <div className="col-span-5 flex flex-col gap-3 sm:gap-4">
                <PhotoSlot
                  src={COMPANY_IMAGES.composterMachine.src}
                  description={COMPANY_IMAGES.composterMachine.alt}
                  aspectClass="aspect-[6/5] sm:aspect-square"
                  darkSurface
                  priority
                  scrim
                />
                <PhotoSlot
                  src={COMPANY_IMAGES.bulkContainerTruck.src}
                  description={COMPANY_IMAGES.bulkContainerTruck.alt}
                  aspectClass="aspect-[6/5] sm:aspect-[4/3]"
                  darkSurface
                  priority
                  scrim
                />
              </div>
            </div>

            <div className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-brand-green/50 bg-navy-deep px-5 py-3.5 shadow-xl sm:absolute sm:-bottom-4 sm:left-6 sm:mt-0 sm:w-auto">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-green font-display text-base font-extrabold text-navy tabular-nums">
                10+
              </span>
              <div>
                <p className="font-display text-sm font-bold text-white">
                  {t.hero.experienceBadge}
                </p>
                <p className="text-xs text-white/75">Serving Bengaluru Communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <section className="border-b border-border-subtle bg-surface py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="grid w-full grid-cols-2 gap-3 text-sm font-semibold text-navy sm:flex sm:w-auto sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2">
            {TRUST_ITEMS.map((item, idx) => (
              <span key={item} className="inline-flex items-center gap-2">
                {idx > 0 && (
                  <span aria-hidden="true" className="hidden sm:inline text-border-subtle">
                    |
                  </span>
                )}
                <ShieldCheck className="h-4 w-4 text-brand-green-dark shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </span>
            ))}
          </div>

          <div className="flex w-full justify-center lg:w-auto lg:justify-end">
            <MunicipalPartnerBadge />
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE (Short) */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 sm:px-6 md:gap-12 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-5">
            <PhotoSlot
              src={COMPANY_IMAGES.lightPickupFleet.src}
              description={COMPANY_IMAGES.lightPickupFleet.alt}
              aspectClass="aspect-[4/3]"
            />
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-7">
            <p className="text-sm font-semibold text-brand-green-dark">Who We Are</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Over a Decade of Responsible Waste Management in Bengaluru
            </h2>
            <p className="mt-4 text-base leading-relaxed text-ink-muted">
              Sri Balaji Enterprises is a Bengaluru-based environmental management company partnering with residential societies, corporate campuses, schools, and municipal initiatives to manage waste scientifically from doorstep pickup to resource recovery.
            </p>

            <blockquote className="mt-6 rounded-[24px] border-2 border-brand-green bg-brand-green-soft/45 p-6 md:p-7">
              <p className="font-display text-base font-semibold leading-relaxed text-navy md:text-lg">
                “{COMPANY.mission}”
              </p>
            </blockquote>

            <div className="mt-6">
              <Link
                to="/about"
                className="inline-flex min-h-[44px] items-center gap-2 font-display text-base font-bold text-ocean hover:text-navy transition-colors sm:text-sm"
              >
                {t.cta.readOurStory}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. CORE SERVICES (Swipeable horizontal carousel on mobile, 3-col grid on tablet/desktop) */}
      <section className="relative bg-surface py-14 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-halftone-light opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-brand-green-dark">Core Services</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                End-to-End Waste Solutions Built for Bengaluru
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex min-h-[44px] items-center gap-2 font-display text-base font-bold text-ocean hover:text-navy whitespace-nowrap sm:text-sm"
            >
              View All Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>

          <div className="mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 -mx-4 px-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3">
            {SERVICES.map((service, idx) => {
              const Icon = ICON_MAP[service.iconName];
              return (
                <Reveal
                  key={service.id}
                  delay={idx * 0.04}
                  className="w-[82vw] max-w-[340px] shrink-0 snap-start sm:w-auto sm:max-w-none"
                >
                  <Link
                    to={`/services#${service.slug}`}
                    className="group flex h-full flex-col justify-between rounded-[24px] border border-border-subtle bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-ocean/40 hover:shadow-md sm:p-7"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-brand-green transition-colors group-hover:bg-ocean group-hover:text-white">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span className="font-display text-sm font-bold text-ink-muted tabular-nums">
                          {service.number}
                        </span>
                      </div>
                      <h3 className="mt-5 font-display text-xl font-bold text-navy group-hover:text-ocean transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2.5 text-base leading-relaxed text-ink-muted sm:text-sm">
                        {service.shortDesc}
                      </p>
                    </div>
                    <span className="mt-5 inline-flex min-h-[44px] items-center gap-1.5 text-base font-semibold text-brand-green-dark sm:text-sm">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
          <p className="mt-2 text-xs text-ink-muted sm:hidden">
            Swipe left or right to explore all 6 services
          </p>
        </div>
      </section>

      {/* 5. SPOTLIGHT: Composite Waste -> Reusable Products */}
      <CompositeSpotlight compact />

      {/* 6. IMPACT COUNTERS */}
      {(() => {
        const visibleMetrics = IMPACT_METRICS.filter(
          (m) =>
            m.value !== null &&
            m.value !== undefined &&
            m.value !== '' &&
            Number.isFinite(Number(m.value)) &&
            Number(m.value) > 0
        ).map((m) => ({ ...m, numericValue: Number(m.value) }));
        if (visibleMetrics.length === 0) return null;

        const gridColsClass =
          visibleMetrics.length === 1
            ? 'grid-cols-1 max-w-sm'
            : visibleMetrics.length === 2
            ? 'grid-cols-2 max-w-3xl'
            : visibleMetrics.length === 3
            ? 'grid-cols-2 lg:grid-cols-3'
            : visibleMetrics.length === 4
            ? 'grid-cols-2 lg:grid-cols-4'
            : 'grid-cols-2 lg:grid-cols-5';

        return (
          <section ref={impactSectionRef} className="bg-white py-14 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <Reveal className="max-w-2xl">
                <p className="text-sm font-semibold text-brand-green-dark">Verified Impact</p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                  Measurable Resource Recovery
                </h2>
                <p className="mt-3 text-base leading-relaxed text-ink-muted">
                  Our work, in numbers.
                </p>
              </Reveal>

              <div className={`mt-8 grid gap-4 sm:gap-5 ${gridColsClass}`}>
                {visibleMetrics.map((metric, idx) => {
                  const isFifthCenteredOnMobile = visibleMetrics.length === 5 && idx === 4;
                  return (
                    <div
                      key={metric.id}
                      className={`flex flex-col justify-between rounded-[24px] border border-border-subtle bg-navy p-5 text-white xl:p-6 ${
                        isFifthCenteredOnMobile
                          ? 'col-span-2 items-center text-center lg:col-span-1 lg:items-start lg:text-left'
                          : ''
                      }`}
                    >
                      <div className={isFifthCenteredOnMobile ? 'flex flex-col items-center lg:items-start' : ''}>
                        <AnimatedCounter
                          value={metric.numericValue}
                          suffix={metric.suffix ?? '+'}
                          unit={metric.unit}
                          startWhen={impactVisible}
                        />
                        <p className="mt-2.5 font-display text-base font-bold text-white">
                          {metric.label}
                        </p>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-white/80 sm:text-xs">
                        {metric.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })()}

      {/* 7. WHY CHOOSE US + Ocean Blue Highlight Panel */}
      <section className="bg-surface py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green-dark">Why Choose Us</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
              Built for Municipal & Enterprise Reliability
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_US.map((item, idx) => (
              <Reveal
                key={item.number}
                delay={idx * 0.05}
                className="rounded-[24px] border border-border-subtle bg-white p-6"
              >
                <span className="font-display text-sm font-bold text-ocean tabular-nums">
                  {item.number}.
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-sm">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 rounded-[24px] bg-ocean p-6 text-white sm:p-8 md:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <p className="max-w-3xl font-display text-xl font-bold leading-snug text-white md:text-2xl">
                “We prioritize measurable results, transparent communication, and strategies tailored to your objectives.”
              </p>
              <Button asChild variant="primary" className="min-h-[48px] w-full sm:w-auto shrink-0">
                <Link to="/process">See Our Process</Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 8. TESTIMONIALS (Swipeable cards on mobile, interactive carousel on tablet/desktop) */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-semibold text-brand-green-dark">Client Feedback</p>
              <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
                Trusted by Societies, Schools & Workplaces
              </h2>
            </div>

            <div className="hidden sm:flex items-center gap-2">
              <button
                type="button"
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-white text-navy transition-colors hover:bg-surface cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border-subtle bg-white text-navy transition-colors hover:bg-surface cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          {/* Mobile swipeable horizontal testimonial cards */}
          <div className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3 -mx-4 px-4 no-scrollbar sm:hidden">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="flex w-[86vw] max-w-[360px] shrink-0 snap-start flex-col justify-between rounded-[24px] border border-border-subtle bg-surface p-6"
              >
                <div>
                  <Quote className="h-7 w-7 text-brand-green-dark" aria-hidden="true" />
                  <blockquote className="mt-4 font-display text-base font-semibold leading-relaxed text-navy">
                    “{item.quote}”
                  </blockquote>
                </div>
                <div className="mt-5 border-t border-border-subtle pt-4">
                  <p className="font-display text-base font-bold text-navy">{item.name}</p>
                  <p className="text-sm text-ink-muted">
                    {item.role} · {item.organisation}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-2 text-xs text-ink-muted sm:hidden">
            Swipe left or right to read more client feedback
          </p>

          {/* Tablet / Desktop carousel */}
          <div className="mt-8 hidden sm:block rounded-[24px] border border-border-subtle bg-surface p-8 md:p-12">
            <Quote className="h-9 w-9 text-brand-green-dark" aria-hidden="true" />
            <blockquote className="mt-5 font-display text-xl font-semibold leading-relaxed text-navy md:text-2xl">
              “{TESTIMONIALS[activeTestimonial].quote}”
            </blockquote>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border-subtle pt-5">
              <div>
                <p className="font-display text-base font-bold text-navy">
                  {TESTIMONIALS[activeTestimonial].name}
                </p>
                <p className="text-sm text-ink-muted">
                  {TESTIMONIALS[activeTestimonial].role} ·{' '}
                  {TESTIMONIALS[activeTestimonial].organisation}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    aria-label={`Show testimonial from ${item.name}`}
                    className={`min-h-[44px] min-w-[28px] flex items-center justify-center cursor-pointer`}
                  >
                    <span
                      className={`h-2.5 rounded-full transition-all ${
                        idx === activeTestimonial
                          ? 'w-8 bg-brand-green-dark'
                          : 'w-2.5 bg-border-subtle hover:bg-ocean/50'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <FaqSection background="surface" />

      {/* 10. FINAL CTA BANNER */}
      <FinalCtaBanner />
    </>
  );
}
