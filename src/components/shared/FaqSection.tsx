import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FAQS } from '@/src/data/faq';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/src/components/ui/accordion';
import { Reveal } from './MotionPrimitives';
import { cn } from '@/src/lib/utils';

interface FaqSectionProps {
  background?: 'white' | 'surface';
  title?: string;
  subtitle?: string;
}

export function FaqSection({
  background = 'white',
  title = 'Frequently Asked Questions',
  subtitle = 'Clear answers on Bengaluru pickup coverage, source segregation, composite conversion, e-waste routing, and monthly reporting.',
}: FaqSectionProps) {
  return (
    <section
      id="faq"
      className={cn(
        'scroll-mt-24 py-12 md:py-24',
        background === 'surface' ? 'bg-surface' : 'bg-white'
      )}
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="text-sm font-semibold text-brand-green-dark">
            Answers & Guidance
          </p>
          <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-navy sm:text-3xl md:text-4xl">
            {title}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-ink-muted">
            {subtitle}
          </p>
        </Reveal>

        <Accordion type="single" collapsible className="mt-7 space-y-3 sm:mt-8">
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className={cn(
                'rounded-2xl border border-border-subtle px-4 sm:px-6 transition-colors',
                background === 'surface' ? 'bg-white' : 'bg-surface/65'
              )}
            >
              <AccordionTrigger className="min-h-[54px] py-4 text-left text-base font-bold text-navy hover:no-underline sm:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-ink-muted">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-7 flex flex-col items-start justify-between gap-3 rounded-2xl border border-brand-green/35 bg-brand-green-soft/45 p-5 sm:flex-row sm:items-center">
          <p className="text-sm font-medium text-navy">
            Need help setting up segregation or scheduling a pickup in Bengaluru?
          </p>
          <Link
            to="/contact"
            className="inline-flex min-h-[44px] shrink-0 items-center gap-1.5 font-display text-sm font-bold text-ocean hover:text-navy transition-colors"
          >
            <span>Ask Our Team</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
