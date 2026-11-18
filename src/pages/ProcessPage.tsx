import { useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Download,
  FileSpreadsheet,
  MapPin,
  Recycle,
  RefreshCw,
  ShieldCheck,
  Truck,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SAMPLE_MONTHLY_REPORT } from '@/src/data/sampleReport';
import { SeoHead } from '@/src/components/shared/SeoHead';
import { Reveal } from '@/src/components/shared/MotionPrimitives';
import { FaqSection } from '@/src/components/shared/FaqSection';
import { FinalCtaBanner } from '@/src/components/shared/FinalCtaBanner';
import { cn } from '@/src/lib/utils';

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Assessment & Planning',
    icon: ClipboardList,
    summary: 'Site walkthrough, waste stream audit, and tailored bin & pickup schedule design.',
    details:
      'We inspect daily waste volumes across wet, dry, composite, and e-waste streams, align bin locations with your staff workflow, and establish pickup frequencies that prevent overflow.',
  },
  {
    step: '02',
    title: 'Collection & Segregation',
    icon: CheckCircle2,
    summary: 'Trained crews collect segregated streams at your doorstep or central waste bay.',
    details:
      'Our uniformed collection team verifies source segregation at pickup and maintains strict separation between wet organics, dry recyclables, composite materials, and e-waste.',
  },
  {
    step: '03',
    title: 'Transportation & Disposal',
    icon: Truck,
    summary: 'Dedicated vehicles transport each stream safely along scheduled Bengaluru routes.',
    details:
      'Covered collection vehicles carry sorted streams directly to designated processing units and authorised partner facilities without cross-contamination.',
  },
  {
    step: '04',
    title: 'Recycling & Resource Recovery',
    icon: Recycle,
    summary: 'Material recovery, scientific composting, and composite waste conversion into products.',
    details:
      'Wet waste goes to composting, dry recyclables are graded and baled, e-waste goes to authorised recyclers, and composite waste is converted into reusable utility products.',
  },
  {
    step: '05',
    title: 'Performance Tracking',
    icon: BarChart3,
    summary: 'Stream-level tracking of collection consistency and diversion progress.',
    details:
      'We monitor pickup completion, segregation quality, and material stream trends so facility managers and RWAs can spot opportunities to reduce rejects.',
  },
  {
    step: '06',
    title: 'Monitoring & Reporting',
    icon: FileSpreadsheet,
    summary: 'Regular reviews and monthly summary reports supporting compliance goals.',
    details:
      'Ongoing coordination with site teams, refresher awareness guidance when needed, and structured summary reporting for internal or municipal compliance.',
  },
];

const CIRCULAR_LOOP_STEPS = [
  { number: '01', label: 'Waste Collection' },
  { number: '02', label: 'Segregation at Source' },
  { number: '03', label: 'Scheduled Collection' },
  { number: '04', label: 'Safe Transportation' },
  { number: '05', label: 'Processing & Recycling' },
  { number: '06', label: 'End User Reuse' },
];

const WASTE_TRAIL = [
  {
    stream: 'Wet / Organic Waste',
    destination: 'Scientific Composting',
    note: 'Turned into nutrient-rich compost for gardens and landscaping.',
    color: 'border-brand-green bg-brand-green-soft/60',
  },
  {
    stream: 'Dry Recyclable Waste',
    destination: 'Material Grading & Recycling',
    note: 'Paper, cardboard, plastics, glass, and metals routed to recycling streams.',
    color: 'border-ocean bg-ocean/10',
  },
  {
    stream: 'Composite / Mixed Waste',
    destination: 'Processed into Reusable Products',
    note: 'Converted at our facility into durable utility products, closing the circular loop.',
    color: 'border-navy bg-navy/5',
  },
  {
    stream: 'E-Waste',
    destination: 'Authorised E-Waste Recyclers',
    note: 'Safe handling and compliant routing of discarded electronics and cables.',
    color: 'border-amber-600 bg-amber-50/70',
  },
];

export default function ProcessPage() {
  const [expandedStep, setExpandedStep] = useState<string>('01');
  const prefersReduced = useReducedMotion();

  return (
    <>
      <SeoHead
        title="Our Process | Sri Balaji Enterprises – Scientific Waste Management Bengaluru"
        description="Discover how Sri Balaji Enterprises manages waste from doorstep assessment and segregated collection to recycling, composting, and composite product conversion."
      />

      {/* Navy Hero */}
      <section className="relative overflow-hidden bg-navy py-14 md:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-green">How We Work</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Our Process
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            We start by assessing your waste needs and designing a tailored plan. Our team ensures efficient collection, segregation, and safe disposal, while maximizing recycling and resource recovery.
          </p>
        </div>
      </section>

      {/* 6-step Connected Icon Timeline (vertical timeline on mobile, 3x2 grid on desktop) */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green-dark">
              6-Step Operational Workflow
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Structured Execution From Audit to Reporting
            </h2>
            <p className="mt-2 text-base text-ink-muted sm:text-sm">
              Tap any step below to view full operational details.
            </p>
          </Reveal>

          <div className="relative mt-10">
            {/* Draw-on-scroll horizontal connector lines on desktop */}
            <svg
              aria-hidden="true"
              className="pointer-events-none hidden lg:block absolute inset-x-12 top-12 h-2 w-[calc(100%-6rem)]"
              preserveAspectRatio="none"
            >
              <motion.line
                x1="0"
                y1="4"
                x2="100%"
                y2="4"
                stroke="#6AAA00"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={prefersReduced ? false : { pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: 'easeOut' }}
              />
            </svg>

            {/* Vertical spine on mobile */}
            <div
              aria-hidden="true"
              className="absolute bottom-8 left-6 top-8 w-0.5 bg-brand-green/35 md:hidden"
            />

            <div className="grid gap-5 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
              {PROCESS_STEPS.map((item) => {
                const Icon = item.icon;
                const isOpen = expandedStep === item.step;
                return (
                  <button
                    key={item.step}
                    type="button"
                    onClick={() => setExpandedStep(isOpen ? '' : item.step)}
                    aria-expanded={isOpen}
                    className={cn(
                      'relative ml-4 flex min-h-[44px] flex-col items-start rounded-[24px] border p-5 text-left transition-all duration-200 cursor-pointer sm:p-6 md:ml-0',
                      isOpen
                        ? 'border-ocean bg-surface shadow-sm'
                        : 'border-border-subtle bg-white hover:border-ocean/40'
                    )}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-green text-navy shadow-xs">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span className="font-display text-sm font-bold text-ocean tabular-nums">
                        Step {item.step}
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-sm">
                      {item.summary}
                    </p>

                    {isOpen && (
                      <p className="mt-4 border-t border-border-subtle pt-4 text-base leading-relaxed text-navy sm:text-sm">
                        {item.details}
                      </p>
                    )}

                    <span className="mt-4 inline-flex min-h-[32px] items-center text-sm font-semibold text-brand-green-dark sm:text-xs">
                      {isOpen ? 'Hide details' : 'Expand details'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Circular Loop Diagram: Vertical connected list on mobile, 6-col grid on desktop */}
      <section className="relative overflow-hidden bg-navy py-14 md:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-green">Closed-Loop System</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              How Our Collection Works: From Your Doorstep to Sustainable Reuse
            </h2>
          </Reveal>

          <div className="mt-10 flex flex-col gap-3 lg:mt-12 lg:grid lg:grid-cols-6 lg:gap-4">
            {CIRCULAR_LOOP_STEPS.map((step, idx) => (
              <div key={step.number} className="flex flex-col">
                <div className="flex items-center justify-between gap-4 rounded-[20px] border border-white/15 bg-navy-muted/80 p-4 lg:h-full lg:flex-col lg:items-start lg:justify-between lg:rounded-[24px] lg:p-5">
                  <div className="flex items-center gap-3 lg:w-full lg:justify-between">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-green font-display text-sm font-extrabold text-navy tabular-nums">
                      {step.number}
                    </span>
                    <p className="font-display text-base font-bold text-white lg:hidden">
                      {step.label}
                    </p>
                    <ArrowRight
                      className="hidden h-4 w-4 text-brand-green lg:block"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="hidden font-display text-base font-bold text-white lg:mt-5 lg:block">
                    {step.label}
                  </p>
                </div>

                {idx < CIRCULAR_LOOP_STEPS.length - 1 && (
                  <div className="flex justify-center py-1 lg:hidden" aria-hidden="true">
                    <ArrowDown className="h-4 w-4 text-brand-green" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-brand-green/40 bg-brand-green/10 px-5 py-4 text-sm font-semibold text-brand-green">
            <RefreshCw
              className={cn(
                'h-4 w-4 shrink-0',
                !prefersReduced && 'md:animate-spin'
              )}
              style={{ animationDuration: '9s' }}
              aria-hidden="true"
            />
            <span>
              End-user reusable products return back into everyday circulation, closing the resource loop.
            </span>
          </div>
        </div>
      </section>

      {/* Where Your Waste Goes + Sample Monthly Waste Report */}
      <section className="bg-surface py-14 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-6">
            <p className="text-sm font-semibold text-brand-green-dark">
              Material Accountability
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Where Your Waste Goes
            </h2>
            <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-sm">
              Every segregated waste stream is weighed, tracked, and routed from doorstep pickup to its dedicated composting, recycling, or authorised recovery channel.
            </p>

            <div className="mt-6 space-y-4">
              {WASTE_TRAIL.map((item) => (
                <div
                  key={item.stream}
                  className={cn(
                    'flex flex-col justify-between gap-3 rounded-[24px] border p-5 sm:flex-row sm:items-center',
                    item.color
                  )}
                >
                  <div>
                    <p className="font-display text-base font-bold text-navy">
                      {item.stream}
                    </p>
                    <p className="mt-1 text-base text-ink-muted sm:text-sm">{item.note}</p>
                  </div>
                  <div className="inline-flex items-center gap-2 self-start rounded-xl bg-white px-4 py-2 text-xs font-bold text-navy shadow-xs shrink-0 sm:self-center">
                    <ArrowRight className="h-3.5 w-3.5 text-brand-green-dark" aria-hidden="true" />
                    <span>{item.destination}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-6">
            <div className="rounded-[24px] border border-border-subtle bg-white p-6 shadow-xs md:p-8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 border-b border-border-subtle pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-ocean">
                    {SAMPLE_MONTHLY_REPORT.eyebrow}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-bold text-navy sm:text-2xl">
                    {SAMPLE_MONTHLY_REPORT.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-lg border border-brand-green/40 bg-brand-green-soft px-2.5 py-1 text-xs font-bold text-brand-green-dark">
                  {SAMPLE_MONTHLY_REPORT.badgeLabel}
                </span>
              </div>

              {/* Client & Reporting Period (stacked on mobile, 2 columns on desktop) */}
              <div className="mt-5 grid gap-4 border-b border-border-subtle pb-5 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                    Client / Campus
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-navy">
                    {SAMPLE_MONTHLY_REPORT.clientCampus}
                  </p>
                </div>
                <div className="sm:text-right">
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                    Reporting Period
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-navy">
                    {SAMPLE_MONTHLY_REPORT.reportingPeriod}
                  </p>
                </div>
              </div>

              {/* Key Highlights: Total Diverted & Segregation Compliance Gauge */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-navy p-4 text-white">
                  <p className="text-xs font-medium text-white/75">
                    Total Waste Diverted from Landfill
                  </p>
                  <p className="mt-1.5 font-display text-2xl font-extrabold text-white tabular-nums sm:text-3xl">
                    {SAMPLE_MONTHLY_REPORT.formattedTotalDiverted}
                  </p>
                  <p className="mt-1 inline-block rounded-md bg-brand-green/20 px-2 py-0.5 text-xs font-bold text-brand-green">
                    {SAMPLE_MONTHLY_REPORT.diversionRateNote}
                  </p>
                </div>

                <div className="flex flex-col justify-between rounded-2xl border border-brand-green/40 bg-brand-green-soft/55 p-4">
                  <div>
                    <p className="text-xs font-medium text-ink-muted">
                      Segregation Compliance
                    </p>
                    <div className="mt-1.5 flex items-baseline gap-2">
                      <span className="font-display text-2xl font-extrabold text-brand-green-dark tabular-nums sm:text-3xl">
                        {SAMPLE_MONTHLY_REPORT.segregationCompliancePercent}%
                      </span>
                      <span className="text-xs font-bold text-navy">
                        ({SAMPLE_MONTHLY_REPORT.segregationComplianceRating})
                      </span>
                    </div>
                  </div>
                  <div className="mt-3">
                    <div
                      role="progressbar"
                      aria-valuenow={SAMPLE_MONTHLY_REPORT.segregationCompliancePercent}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-label={`Segregation Compliance ${SAMPLE_MONTHLY_REPORT.segregationCompliancePercent}% (${SAMPLE_MONTHLY_REPORT.segregationComplianceRating})`}
                      className="h-2.5 w-full overflow-hidden rounded-full bg-white"
                    >
                      <div
                        className="h-full rounded-full bg-brand-green transition-all duration-700"
                        style={{
                          width: `${SAMPLE_MONTHLY_REPORT.segregationCompliancePercent}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Waste Split Donut Chart + 4 Stream Metrics */}
              <div className="mt-6 grid items-center gap-6 border-t border-border-subtle pt-6 sm:grid-cols-12">
                <div className="flex flex-col items-center justify-center sm:col-span-5">
                  {(() => {
                    const radius = 56;
                    const circumference = 2 * Math.PI * radius;
                    let cumulative = 0;
                    return (
                      <div className="relative h-36 w-36 sm:h-40 sm:w-40">
                        <svg
                          viewBox="0 0 160 160"
                          className="h-full w-full"
                          role="img"
                          aria-label="Waste stream split donut chart: Wet Waste Composted, Dry Waste Recycled, Composite Converted, and E-Waste Routed"
                        >
                          <circle
                            cx="80"
                            cy="80"
                            r={radius}
                            fill="none"
                            stroke="#EEF2F5"
                            strokeWidth="22"
                          />
                          <g transform="rotate(-90 80 80)">
                            {SAMPLE_MONTHLY_REPORT.streams.map((stream) => {
                              const fraction =
                                stream.amountKg /
                                SAMPLE_MONTHLY_REPORT.totalDivertedKg;
                              const dashLength = fraction * circumference;
                              const dashOffset = -cumulative;
                              cumulative += dashLength;
                              return (
                                <circle
                                  key={stream.id}
                                  cx="80"
                                  cy="80"
                                  r={radius}
                                  fill="none"
                                  stroke={stream.colorHex}
                                  strokeWidth="22"
                                  strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                                  strokeDashoffset={dashOffset}
                                />
                              );
                            })}
                          </g>
                        </svg>
                        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-[11px] font-medium uppercase tracking-wider text-ink-muted">
                            Total Split
                          </span>
                          <span className="font-display text-base font-extrabold text-navy tabular-nums sm:text-lg">
                            {SAMPLE_MONTHLY_REPORT.formattedTotalDiverted}
                          </span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                <div className="grid grid-cols-2 gap-2.5 sm:col-span-7 sm:gap-3">
                  {SAMPLE_MONTHLY_REPORT.streams.map((stream) => (
                    <div
                      key={stream.id}
                      className="rounded-2xl border border-border-subtle bg-surface p-3 sm:p-3.5"
                    >
                      <div className="flex items-center gap-1.5">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'h-2.5 w-2.5 shrink-0 rounded-full',
                            stream.swatchClass
                          )}
                        />
                        <p className="text-[11px] font-medium leading-tight text-ink-muted sm:text-xs">
                          {stream.label}
                        </p>
                      </div>
                      <p className="mt-1.5 font-display text-lg font-extrabold text-navy tabular-nums sm:text-xl">
                        {stream.formattedAmount}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 border-t border-border-subtle pt-5">
                <button
                  type="button"
                  disabled={!SAMPLE_MONTHLY_REPORT.downloadHref}
                  title="Sample PDF report export will be enabled for client accounts"
                  className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-border-subtle bg-surface px-5 py-2.5 font-display text-sm font-bold text-ink-muted/80 opacity-75 cursor-not-allowed"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{SAMPLE_MONTHLY_REPORT.downloadButtonLabel}</span>
                </button>
              </div>
            </div>

            <p className="mt-3 px-2 text-center text-xs text-ink-muted sm:text-left">
              {SAMPLE_MONTHLY_REPORT.footnote}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Facilities & Reach */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green-dark">Infrastructure</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Facilities & Bengaluru Reach
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-border-subtle bg-surface p-6">
              <MapPin className="h-6 w-6 text-ocean" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-navy">
                Collection Hubs
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-sm">
                Anchored from Koramangala with route staging designed for reliable morning and scheduled pickups.
              </p>
            </div>
            <div className="rounded-[24px] border border-border-subtle bg-surface p-6">
              <Recycle className="h-6 w-6 text-brand-green-dark" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-navy">
                Sorting & Processing Units
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-sm">
                Dedicated facilities for grading dry recyclables, composting organic streams, and converting composite waste.
              </p>
            </div>
            <div className="rounded-[24px] border border-border-subtle bg-surface p-6">
              <ShieldCheck className="h-6 w-6 text-ocean" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-bold text-navy">
                City-Wide Bengaluru Coverage
              </h3>
              <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-sm">
                Serving residential apartments, corporate offices, schools, industries, and events across Bengaluru.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection
        background="surface"
        title="Process & Reporting FAQs"
        subtitle="Answers to common questions about waste audits, monthly reporting, composite conversion, and scheduled pickups."
      />

      <FinalCtaBanner />
    </>
  );
}
