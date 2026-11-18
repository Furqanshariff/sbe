import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useForm, type FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { COMPANY } from '@/src/data/company';
import { SERVICES } from '@/src/data/services';
import { useLanguage } from '@/src/context/LanguageContext';
import { Button } from '@/src/components/ui/button';
import { Input, Textarea } from '@/src/components/ui/input';
import { SeoHead } from '@/src/components/shared/SeoHead';
import { Reveal } from '@/src/components/shared/MotionPrimitives';
import { cn } from '@/src/lib/utils';

const CUSTOMER_TYPES = [
  'Residential',
  'Apartment/Society',
  'Corporate',
  'School/Institution',
  'Industry',
  'Event',
] as const;

const SERVICE_OPTIONS = [
  ...SERVICES.map((s) => s.title),
  'Composite waste conversion',
];

const contactFormSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name (at least 2 characters)'),
  phone: z
    .string()
    .trim()
    .min(7, 'Please enter a valid phone number')
    .regex(/^[+\d\s()-]{7,20}$/, 'Please enter a valid phone number'),
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  organisation: z.string().trim().optional().or(z.literal('')),
  areaPincode: z.string().trim().min(3, 'Please enter your Bengaluru area or pincode'),
  customerType: z.string().min(1, 'Please select a customer type'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  approxQuantity: z.string().trim().optional().or(z.literal('')),
  preferredDate: z.string().trim().optional().or(z.literal('')),
  message: z.string().trim().optional().or(z.literal('')),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function buildWhatsAppUrl(values: Partial<ContactFormValues>): string {
  const lines = [
    'Hello Sri Balaji Enterprises,',
    'I would like to schedule a waste pickup / request a quote:',
  ];
  if (values.name) lines.push(`Name: ${values.name}`);
  if (values.phone) lines.push(`Phone: ${values.phone}`);
  if (values.organisation) lines.push(`Organisation/Society: ${values.organisation}`);
  if (values.areaPincode) lines.push(`Area / Pincode: ${values.areaPincode}`);
  if (values.customerType) lines.push(`Customer Type: ${values.customerType}`);
  if (values.services && values.services.length > 0) {
    lines.push(`Services Needed: ${values.services.join(', ')}`);
  }
  if (values.approxQuantity) lines.push(`Approx. Quantity: ${values.approxQuantity}`);
  if (values.preferredDate) lines.push(`Preferred Date: ${values.preferredDate}`);
  if (values.message) lines.push(`Notes: ${values.message}`);

  return `${COMPANY.whatsappHref}?text=${encodeURIComponent(lines.join('\n'))}`;
}

export default function ContactPage() {
  const { t } = useLanguage();
  const [searchParams] = useSearchParams();
  const prefersReduced = useReducedMotion();
  const [submittedValues, setSubmittedValues] = useState<ContactFormValues | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const preselectedService = searchParams.get('service');

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      organisation: '',
      areaPincode: '',
      customerType: 'Apartment/Society',
      services:
        preselectedService && SERVICE_OPTIONS.includes(preselectedService)
          ? [preselectedService]
          : [],
      approxQuantity: '',
      preferredDate: '',
      message: '',
    },
  });

  const liveValues = watch();
  const selectedServices = liveValues.services;

  useEffect(() => {
    if (preselectedService && SERVICE_OPTIONS.includes(preselectedService)) {
      setValue('services', [preselectedService]);
    }
  }, [preselectedService, setValue]);

  const toggleService = (service: string) => {
    const current = selectedServices || [];
    const next = current.includes(service)
      ? current.filter((item) => item !== service)
      : [...current, service];
    setValue('services', next, { shouldValidate: true });
  };

  // Auto-scroll and focus on the first field with a validation error
  const onInvalid = (fieldErrors: FieldErrors<ContactFormValues>) => {
    const firstKey = Object.keys(fieldErrors)[0] as keyof ContactFormValues | undefined;
    if (!firstKey) return;
    const targetId = firstKey === 'services' ? 'services-group' : firstKey;
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({
        behavior: prefersReduced ? 'auto' : 'smooth',
        block: 'center',
      });
      if ('focus' in el && typeof el.focus === 'function') {
        el.focus({ preventScroll: true });
      }
    }
  };

  const onSubmit = async (values: ContactFormValues) => {
    setServerError(null);
    try {
      // Optional direct Web3Forms forwarding if configured in src/data/company.ts
      if (COMPANY.web3FormsAccessKey) {
        await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: COMPANY.web3FormsAccessKey,
            subject: `New Pickup / Quote Request from ${values.name}`,
            from_name: 'Sri Balaji Enterprises Website',
            to_email: COMPANY.email,
            ...values,
            services: values.services.join(', '),
          }),
        });
      } else if (COMPANY.formspreeOrWebhookEndpoint) {
        await fetch(COMPANY.formspreeOrWebhookEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(values),
        });
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || 'Unable to submit request. Please call us directly.');
      }

      setSubmittedValues(values);
      reset();
    } catch (err) {
      setServerError(
        err instanceof Error
          ? err.message
          : 'Unable to submit request. Please try again or call us.'
      );
    }
  };

  const whatsappHref = buildWhatsAppUrl(submittedValues ?? liveValues);

  const mapsDirectionHref =
    'https://maps.google.com/?q=265+1st+B+Main+Rd+Koramangala+8th+Block+Bengaluru+560095';

  return (
    <>
      <SeoHead
        title="Contact Us | Sri Balaji Enterprises – Schedule Waste Pickup Bengaluru"
        description="Schedule a waste pickup or request a quote from Sri Balaji Enterprises in Bengaluru. Call +91 81058 02463 or submit your requirement online."
      />

      {/* Navy Hero */}
      <section className="relative overflow-hidden bg-navy py-14 md:py-24 text-white">
        <div className="pointer-events-none absolute inset-0 bg-halftone-dark opacity-70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-brand-green">Get in Touch</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s Work Together
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            Partner with Sri Balaji Enterprises to build a cleaner, greener Bangalore.
          </p>
        </div>
      </section>

      {/* Two-Column Contact Section */}
      <section className="bg-surface py-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-12 lg:px-8">
          {/* Left: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[24px] border border-border-subtle bg-white p-5 shadow-xs sm:p-8 md:p-10">
              {submittedValues ? (
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 text-center"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-green-soft text-brand-green-dark">
                    <CheckCircle2 className="h-9 w-9" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 font-display text-2xl font-bold text-navy">
                    Request Sent
                  </h2>
                  <p className="mt-2 text-base font-medium text-ink">
                    We&apos;ll call you within 24 hours.
                  </p>
                  <p className="mt-2 text-sm text-ink-muted">
                    Your details have been prepared for {COMPANY.email}. You can also send your filled details directly on WhatsApp below.
                  </p>
                  <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                    <Button
                      type="button"
                      variant="outlineNavy"
                      size="lg"
                      className="min-h-[48px] w-full sm:w-auto"
                      onClick={() => setSubmittedValues(null)}
                    >
                      Submit Another Request
                    </Button>
                    <Button asChild variant="primaryDarkText" size="lg" className="min-h-[48px] w-full sm:w-auto">
                      <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4" aria-hidden="true" />
                        {t.cta.whatsappChat}
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit(onSubmit, onInvalid)}
                  noValidate
                  className="space-y-5"
                >
                  <div>
                    <h2 className="font-display text-2xl font-bold text-navy">
                      Schedule a Pickup or Request a Quote
                    </h2>
                    <p className="mt-1 text-base text-ink-muted sm:text-sm">
                      Fields marked with * are required. Submissions notify {COMPANY.email}.
                    </p>
                  </div>

                  {serverError && (
                    <div
                      role="alert"
                      className="rounded-xl border border-rose-300 bg-rose-50 px-4 py-3 text-sm text-rose-800"
                    >
                      {serverError}
                    </div>
                  )}

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-navy">
                        Name*
                      </label>
                      <Input
                        id="name"
                        autoComplete="name"
                        placeholder="Your full name"
                        {...register('name')}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs font-medium text-rose-700">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-navy">
                        Phone*
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="+91 98XXX XXXXX"
                        {...register('phone')}
                      />
                      {errors.phone && (
                        <p className="mt-1.5 text-xs font-medium text-rose-700">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-semibold text-navy">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="you@organisation.com"
                        {...register('email')}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs font-medium text-rose-700">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="organisation"
                        className="mb-1.5 block text-sm font-semibold text-navy"
                      >
                        Organisation / Society name
                      </label>
                      <Input
                        id="organisation"
                        autoComplete="organization"
                        placeholder="Apartment, school, or company name"
                        {...register('organisation')}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="areaPincode"
                        className="mb-1.5 block text-sm font-semibold text-navy"
                      >
                        Area / Pincode*
                      </label>
                      <Input
                        id="areaPincode"
                        placeholder="e.g. Koramangala, 560095"
                        {...register('areaPincode')}
                      />
                      {errors.areaPincode && (
                        <p className="mt-1.5 text-xs font-medium text-rose-700">
                          {errors.areaPincode.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="customerType"
                        className="mb-1.5 block text-sm font-semibold text-navy"
                      >
                        Customer Type*
                      </label>
                      <select
                        id="customerType"
                        {...register('customerType')}
                        className="flex h-12 w-full rounded-xl border border-border-subtle bg-white px-4 py-2 text-base text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
                      >
                        {CUSTOMER_TYPES.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Multi-select services (>= 44px touch targets) */}
                  <div id="services-group" tabIndex={-1}>
                    <span className="mb-2 block text-sm font-semibold text-navy">
                      Service Needed* (select one or more)
                    </span>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {SERVICE_OPTIONS.map((service) => {
                        const checked = (selectedServices || []).includes(service);
                        return (
                          <label
                            key={service}
                            className={cn(
                              'flex min-h-[48px] cursor-pointer items-center gap-3 rounded-xl border px-3.5 py-2.5 text-sm transition-colors',
                              checked
                                ? 'border-ocean bg-ocean/5 font-semibold text-navy'
                                : 'border-border-subtle bg-white text-ink-muted hover:border-ocean/40'
                            )}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleService(service)}
                              className="h-5 w-5 shrink-0 accent-navy"
                            />
                            <span>{service}</span>
                          </label>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="mt-1.5 text-xs font-medium text-rose-700">
                        {errors.services.message}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="approxQuantity"
                        className="mb-1.5 block text-sm font-semibold text-navy"
                      >
                        Approx. Waste Quantity
                      </label>
                      <Input
                        id="approxQuantity"
                        placeholder="e.g. 50 kg/day or 20 laptops"
                        {...register('approxQuantity')}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="preferredDate"
                        className="mb-1.5 block text-sm font-semibold text-navy"
                      >
                        Preferred Date
                      </label>
                      <Input
                        id="preferredDate"
                        type="date"
                        {...register('preferredDate')}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-semibold text-navy"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your waste streams, pickup timings, or composite waste requirements..."
                      {...register('message')}
                    />
                  </div>

                  <div className="flex flex-col gap-3 pt-1 sm:flex-row">
                    <Button
                      type="submit"
                      variant="primaryDarkText"
                      size="lg"
                      disabled={isSubmitting}
                      className="min-h-[48px] w-full flex-1"
                    >
                      <Send className="h-4 w-4" aria-hidden="true" />
                      {isSubmitting ? 'Submitting Request...' : 'Submit Pickup Request'}
                    </Button>
                    <Button
                      asChild
                      variant="outlineNavy"
                      size="lg"
                      className="min-h-[48px] w-full sm:w-auto"
                    >
                      <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 text-brand-green-dark" aria-hidden="true" />
                        {t.cta.whatsappChat}
                      </a>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Contact Details, WhatsApp, Opening Hours, Location Card */}
          <div className="space-y-6 lg:col-span-5">
            <Reveal className="rounded-[24px] bg-navy p-6 text-white sm:p-8">
              <h2 className="font-display text-2xl font-bold text-white">
                Direct Contact
              </h2>
              <p className="mt-2 text-base text-white/80 sm:text-sm">
                Reach our Bengaluru coordination desk directly by phone, email, or WhatsApp.
              </p>

              <ul className="mt-6 space-y-4 text-base sm:text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/65">Phone</p>
                    <a
                      href={COMPANY.telHref}
                      className="inline-flex min-h-[44px] items-center font-display text-base font-bold text-white hover:text-brand-green tabular-nums"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/65">Email</p>
                    <a
                      href={`mailto:${COMPANY.email}`}
                      className="inline-flex min-h-[44px] items-center break-all font-medium text-white hover:text-brand-green"
                    >
                      {COMPANY.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/65">Website</p>
                    <span className="font-medium text-white">{COMPANY.website}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/65">Office Address</p>
                    <span className="leading-relaxed text-white/90">{COMPANY.address}</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-brand-green" aria-hidden="true" />
                  <div>
                    <p className="text-xs text-white/65">Opening Hours</p>
                    <span className="text-white/85">{COMPANY.openingHours}</span>
                  </div>
                </li>
              </ul>

              <div className="mt-7">
                <Button asChild variant="primary" size="lg" className="min-h-[48px] w-full">
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {t.cta.whatsappChat}
                  </a>
                </Button>
              </div>
            </Reveal>

            {/* Map Card */}
            <Reveal
              delay={0.05}
              className="rounded-[24px] border border-border-subtle bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold text-navy">
                Koramangala Office Location
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-muted sm:text-xs">
                {COMPANY.address}
              </p>

              <div className="mt-4 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-100 p-6 text-center aspect-[16/10]">
                <MapPin className="h-7 w-7 text-ocean" aria-hidden="true" />
                <p className="mt-2 text-sm font-semibold text-navy sm:text-xs">
                  Koramangala 8th Block, Bengaluru 560095
                </p>
                <p className="mt-1 max-w-xs text-xs text-slate-600">
                  Material Recovery Facility &amp; Operations Desk — get turn-by-turn directions directly in Google Maps.
                </p>
                <a
                  href={mapsDirectionHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-ocean transition-colors sm:text-xs"
                >
                  Open in Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Closing Quote */}
      <section className="bg-navy py-14 text-center text-white">
        <div className="mx-auto max-w-4xl px-4">
          <p className="font-display text-2xl font-extrabold tracking-tight text-white md:text-3xl">
            “{t.closingLine}”
          </p>
        </div>
      </section>
    </>
  );
}
