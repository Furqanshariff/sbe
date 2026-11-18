import { Link } from 'react-router-dom';
import { ArrowRight, Award, CheckCircle2, FileText, ShieldCheck } from 'lucide-react';
import { COMPANY } from '@/src/data/company';
import { CERTIFICATIONS } from '@/src/data/certifications';
import { PARTNERSHIP } from '@/src/data/partnership';
import { COMPANY_IMAGES } from '@/src/data/images';
import { LEADERSHIP_PLACEHOLDERS, TEAM_GALLERY_SLOTS } from '@/src/data/team';
import { Button } from '@/src/components/ui/button';
import { SeoHead } from '@/src/components/shared/SeoHead';
import { PhotoSlot } from '@/src/components/shared/PhotoSlot';
import { MunicipalPartnerBadge } from '@/src/components/shared/MunicipalPartnerBadge';
import { Reveal } from '@/src/components/shared/MotionPrimitives';
import { FinalCtaBanner } from '@/src/components/shared/FinalCtaBanner';

const VALUES = [
  {
    title: 'Compliance',
    description:
      'Disciplined adherence to Solid Waste Management norms, safe e-waste routing, and municipal standards.',
  },
  {
    title: 'Transparency',
    description:
      'Clear communication, honest reporting, and documented waste trails from pickup to recovery.',
  },
  {
    title: 'Sustainability',
    description:
      'Prioritising composting, recycling, and composite waste conversion over landfilling.',
  },
  {
    title: 'Community',
    description:
      'Hands-on workshops and awareness sessions that empower schools, residents, and staff.',
  },
  {
    title: 'Reliability',
    description:
      'Punctual doorstep pickups, uniformed crews, and consistent service across Bengaluru.',
  },
];

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title="About Us | Sri Balaji Enterprises – Waste Management Bengaluru"
        description="Learn about Sri Balaji Enterprises, a Bengaluru-based environmental management company with over a decade of experience in recycling, composting, and composite waste conversion."
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-14 md:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-green">About Sri Balaji Enterprises</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Who We Are
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            A Bengaluru-based environmental management company with over a decade of experience, working alongside businesses, residential communities, schools, and municipal stakeholders.
          </p>
        </div>
      </section>

      {/* Company Story + Mission + Vision */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 md:gap-12 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-6 space-y-6">
            <h2 className="font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              A Trusted Waste Management Partner
            </h2>
            <p className="text-base leading-relaxed text-ink-muted">
              Founded in Bengaluru and operating from Koramangala, Sri Balaji Enterprises has spent over ten years building dependable waste collection, segregation, and recovery operations across the city.
            </p>
            <p className="text-base leading-relaxed text-ink-muted">
              Our commitment goes beyond collection: we educate communities, support corporate sustainability goals, and ensure that every kilogram of waste is managed responsibly.
            </p>

            {/* Mission quote block */}
            <blockquote className="rounded-[24px] border-2 border-brand-green bg-brand-green-soft/45 p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-green-dark">
                Our Mission
              </p>
              <p className="mt-2 font-display text-lg font-semibold leading-relaxed text-navy">
                “{COMPANY.mission}”
              </p>
            </blockquote>

            {/* Vision card */}
            <div className="rounded-[24px] border border-border-subtle bg-surface p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-ocean">
                Our Vision
              </p>
              <p className="mt-2 text-base font-medium leading-relaxed text-navy">
                {COMPANY.vision}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.06} className="lg:col-span-6 space-y-6">
            <PhotoSlot
              src={COMPANY_IMAGES.mrfFacilityFleet.src}
              description={COMPANY_IMAGES.mrfFacilityFleet.alt}
              aspectClass="aspect-[4/3]"
            />

            {/* Expertise Highlight */}
            <div className="rounded-[24px] bg-navy p-6 text-white sm:p-8">
              <p className="text-xs font-bold uppercase tracking-wider text-brand-green">
                Our Expertise Highlight
              </p>
              <h3 className="mt-2 font-display text-2xl font-bold text-white">
                Specialists in Converting Composite Waste into Reusable Products
              </h3>
              <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-sm">
                Most waste handlers stop at pickup and disposal. Sri Balaji Enterprises specialises in sorting, processing, and converting composite and mixed multi-material waste into useful everyday products—closing the circular loop across Bengaluru.
              </p>
              <div className="mt-5">
                <Button asChild variant="primary" className="min-h-[44px] w-full sm:w-auto">
                  <Link to="/services#composite-waste">
                    Explore Composite Conversion
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green-dark">Our Values</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Principles That Guide Every Pickup
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {VALUES.map((val, idx) => (
              <Reveal
                key={val.title}
                delay={idx * 0.04}
                className="rounded-[24px] border border-border-subtle bg-white p-6"
              >
                <CheckCircle2 className="h-6 w-6 text-brand-green-dark" aria-hidden="true" />
                <h3 className="mt-4 font-display text-lg font-bold text-navy">
                  {val.title}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-ink-muted sm:text-sm">
                  {val.description}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance & Municipal Partnership */}
      <section className="bg-white py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-3xl">
            <p className="text-sm font-semibold text-brand-green-dark">
              Governance & Authorisations
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Compliance & Municipal Partnership
            </h2>
          </Reveal>

          {/* Municipal Partnership block */}
          <Reveal className="mt-8 flex flex-col items-center gap-6 rounded-[24px] border border-brand-green/50 bg-surface p-6 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:p-9 md:text-left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ocean">
                <ShieldCheck className="h-4 w-4 text-brand-green-dark" aria-hidden="true" />
                <span>{PARTNERSHIP.subtitle}</span>
              </div>
              <h3 className="mt-2 font-display text-2xl font-bold text-navy">
                {PARTNERSHIP.sectionHeading}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-ink-muted">
                {PARTNERSHIP.sectionSummary}
              </p>
            </div>
            <div className="shrink-0">
              <MunicipalPartnerBadge />
            </div>
          </Reveal>

          {/* Authorisation cards */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex flex-col justify-between rounded-[24px] border border-border-subtle bg-white p-6"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-ocean/10 text-ocean">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-navy">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-muted sm:text-xs">{cert.authority}</p>
                </div>

                <div className="mt-6 rounded-xl border border-dashed border-slate-300 bg-slate-50 px-3.5 py-2.5 text-xs font-medium text-slate-600">
                  <span className="inline-flex items-center gap-1.5">
                    <FileText className="h-3.5 w-3.5 text-ocean" aria-hidden="true" />
                    {cert.certificateNumber ? cert.certificateNumber : cert.note}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team & Fleet Gallery + Leadership Placeholders */}
      <section className="bg-surface py-14 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="max-w-2xl">
            <p className="text-sm font-semibold text-brand-green-dark">People & Operations</p>
            <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl">
              Our Team, Fleet & Facilities
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {TEAM_GALLERY_SLOTS.map((slot) => (
              <div key={slot.id} className="space-y-3">
                <PhotoSlot
                  src={slot.photoSrc}
                  description={slot.photoDescription}
                  aspectClass="aspect-[4/3]"
                  imgClassName={slot.imgClassName}
                />
                <h3 className="font-display text-base font-bold text-navy">
                  {slot.title}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <h3 className="font-display text-2xl font-bold text-navy">
              Leadership Profiles
            </h3>
            <p className="mt-1 text-base text-ink-muted sm:text-sm">
              Experienced operations and sustainability leadership guiding collection routes, facility compliance, and community awareness across Bengaluru.
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {LEADERSHIP_PLACEHOLDERS.map((leader) => (
                <div
                  key={leader.id}
                  className="rounded-[24px] border border-border-subtle bg-white p-5"
                >
                  <PhotoSlot
                    src={leader.photoSrc}
                    description={leader.photoDescription}
                    aspectClass="aspect-square"
                  />
                  <h4 className="mt-4 font-display text-lg font-bold text-navy">
                    {leader.name}
                  </h4>
                  <p className="text-sm font-semibold text-ocean">{leader.role}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-xs">
                    {leader.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCtaBanner />
    </>
  );
}
