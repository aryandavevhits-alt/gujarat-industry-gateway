import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Rss, ExternalLink } from 'lucide-react';

export function Footer() {
  const { t } = useAccessibility();
  const currentYear = new Date().getFullYear();

  const policyLinks = [
    { key: 'copyrightPolicy', href: '/copyright' },
    { key: 'privacyPolicy', href: '/privacy' },
    { key: 'termsConditions', href: '/terms' },
    { key: 'hyperlinkPolicy', href: '/hyperlink-policy' },
    { key: 'accessibilityStatement', href: '/accessibility' },
    { key: 'disclaimer', href: '/disclaimer' },
  ];

  const quickLinks = [
    { label: 'India.gov.in', href: 'https://india.gov.in', external: true },
    { label: 'Gujarat.gov.in', href: 'https://gujarat.gov.in', external: true },
    { label: 'Digital India', href: 'https://digitalindia.gov.in', external: true },
    { label: 'Make in India', href: 'https://makeinindia.com', external: true },
  ];

  return (
    <footer className="gov-footer">
      {/* Main Footer */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t('deptTitle')}</h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                The Industries Commissionerate is the nodal agency for industrial development in Gujarat, 
                facilitating growth, investment, and sustainable industrialization.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-sm text-primary-foreground/80 hover:text-primary-foreground flex items-center gap-1"
                    >
                      {link.label}
                      {link.external && <ExternalLink className="h-3 w-3" />}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-lg mb-4">{t('contactUs')}</h3>
              <address className="text-sm text-primary-foreground/80 not-italic space-y-2">
                <p>Industries Commissionerate</p>
                <p>Block No. 14, Udyog Bhavan</p>
                <p>Sector-11, Gandhinagar</p>
                <p>Gujarat - 382010</p>
                <p className="mt-3">
                  <strong>Phone:</strong> +91-79-23252601
                </p>
                <p>
                  <strong>Email:</strong> ic-guj@gujarat.gov.in
                </p>
              </address>
            </div>

            {/* RSS & Stats */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
              <div className="flex items-center gap-3 mb-4">
                <a
                  href="/rss"
                  className="flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-primary-foreground"
                  aria-label="RSS Feed"
                >
                  <Rss className="h-4 w-4" />
                  RSS Feed
                </a>
              </div>
              <div className="bg-primary-foreground/10 rounded-lg p-4">
                <p className="text-xs text-primary-foreground/60 mb-1">{t('visitorCount')}</p>
                <p className="text-2xl font-bold">2,45,67,890</p>
              </div>
              <p className="text-xs text-primary-foreground/60 mt-3">
                {t('lastUpdated')}: January 22, 2026
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Links */}
      <div className="border-b border-primary-foreground/10">
        <div className="container py-4">
          <nav aria-label="Policy links">
            <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              {policyLinks.map((link, index) => (
                <li key={link.key} className="flex items-center">
                  <a
                    href={link.href}
                    className="text-xs text-primary-foreground/80 hover:text-primary-foreground hover:underline"
                  >
                    {t(link.key)}
                  </a>
                  {index < policyLinks.length - 1 && (
                    <span className="ml-4 text-primary-foreground/30">|</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Copyright */}
      <div className="container py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-primary-foreground/70">
          <p>© {currentYear} {t('contentOwnedBy')}</p>
          <p>Designed, Developed and Hosted by NIC</p>
        </div>
      </div>
    </footer>
  );
}
