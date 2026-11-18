import { Link } from 'react-router-dom';
import { Globe, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY } from '@/src/data/company';
import { SERVICES } from '@/src/data/services';
import { useLanguage } from '@/src/context/LanguageContext';
import { BrandLogo } from '@/src/components/shared/PhotoSlot';

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/process', label: t.nav.process },
    { to: '/gallery', label: t.nav.gallery },
    { to: '/services#faq', label: 'FAQs' },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <footer className="bg-navy-deep text-white pb-[calc(5rem+env(safe-area-inset-bottom))] md:pb-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div>
            <Link to="/" className="inline-flex min-h-[44px] items-center">
              <BrandLogo src={COMPANY.logoSrc} lightText />
            </Link>
            <p className="mt-3 text-base leading-relaxed text-white/75 md:text-sm">
              {COMPANY.tagline} Serving apartments, corporates, schools, and communities across Bengaluru with scientific recycling, composting, and composite waste conversion.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {COMPANY.socialLinks.map((social) => {
                const Icon = social.label === 'LinkedIn' ? Linkedin : Instagram;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Sri Balaji Enterprises on ${social.label}`}
                    title={social.label}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/80 transition-colors hover:border-brand-green hover:text-brand-green"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-1 text-base text-white/80 md:text-sm">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-brand-green"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Services</h3>
            <ul className="mt-4 space-y-1 text-base text-white/80 md:text-sm">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-brand-green"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services#composite-waste"
                  className="inline-flex min-h-[44px] items-center font-semibold text-brand-green hover:underline"
                >
                  Composite Waste Conversion
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="font-display text-base font-bold text-white">Contact Us</h3>
            <ul className="mt-4 space-y-4 text-base text-white/85 md:text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                <a
                  href={COMPANY.telHref}
                  className="inline-flex min-h-[44px] items-center hover:text-brand-green tabular-nums"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="break-all hover:text-brand-green"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Globe className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                <span>{COMPANY.website}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-brand-green" aria-hidden="true" />
                <span className="leading-relaxed">{COMPANY.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 text-xs text-white/65 sm:flex-row sm:items-center">
          <p>Presented by {COMPANY.name}</p>
          <span>Bengaluru, Karnataka 560095</span>
        </div>
      </div>
    </footer>
  );
}
