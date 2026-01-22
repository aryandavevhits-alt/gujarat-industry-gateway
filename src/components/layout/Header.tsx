import { useState } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Search, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const emblemUrl = 'https://upload.wikimedia.org/wikipedia/commons/5/55/Emblem_of_India.svg';

export function Header() {
  const { t } = useAccessibility();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const navItems = [
    { key: 'home', href: '/' },
    { key: 'aboutUs', href: '/about' },
    { 
      key: 'industrialEcosystem', 
      href: '/ecosystem',
      children: [
        { key: 'msmeCluster', href: '/ecosystem/msme' },
        { key: 'industrialParks', href: '/ecosystem/parks' },
        { key: 'textileApparel', href: '/ecosystem/textile' },
        { key: 'logisticsInfra', href: '/ecosystem/logistics' },
        { key: 'rdTesting', href: '/ecosystem/rd' },
        { key: 'investmentOpportunities', href: '/ecosystem/investment' },
      ]
    },
    { 
      key: 'policiesSchemes', 
      href: '/policies',
      children: [
        { key: 'actsRules', href: '/policies/acts' },
        { key: 'policies', href: '/policies/policies' },
        { key: 'schemesIncentives', href: '/policies/schemes' },
        { key: 'grCirculars', href: '/policies/circulars' },
        { key: 'notifications', href: '/policies/notifications' },
        { key: 'formsGuidelines', href: '/policies/forms' },
      ]
    },
    { key: 'kyd', href: '/kyd' },
    { key: 'services', href: '/services' },
    { key: 'mediaGallery', href: '/media' },
    { key: 'contactUs', href: '/contact' },
  ];

  return (
    <header className="gov-header shadow-gov">
      {/* Main Header */}
      <div className="container py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <img 
              src={emblemUrl} 
              alt="Government of India Emblem" 
              className="h-16 w-auto"
              loading="eager"
            />
            <div className="flex flex-col">
              <span className="text-sm text-muted-foreground font-medium">
                {t('govTitle')}
              </span>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                {t('deptTitle')}
              </h1>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center gap-2 flex-1 max-w-md ml-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                type="search"
                placeholder={t('searchPlaceholder')}
                className="pl-10 pr-4"
                aria-label={t('searchPlaceholder')}
              />
            </div>
            <Button variant="outline" size="sm" className="whitespace-nowrap">
              {t('advancedSearch')}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-muted"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav 
        className={`bg-primary text-primary-foreground ${mobileMenuOpen ? 'block' : 'hidden lg:block'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container">
          <ul className="flex flex-col lg:flex-row lg:items-center">
            {navItems.map((item) => (
              <li 
                key={item.key} 
                className="relative group"
                onMouseEnter={() => item.children && setActiveMenu(item.key)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-3 hover:bg-primary-foreground/10 transition-colors text-sm font-medium"
                  aria-haspopup={item.children ? 'true' : undefined}
                  aria-expanded={item.children ? activeMenu === item.key : undefined}
                >
                  {t(item.key)}
                  {item.children && <ChevronDown className="h-3 w-3" />}
                </a>
                
                {/* Mega Menu */}
                {item.children && activeMenu === item.key && (
                  <div className="absolute left-0 top-full mega-menu min-w-64 py-2 z-50 animate-fade-in">
                    <ul>
                      {item.children.map((child) => (
                        <li key={child.key}>
                          <a
                            href={child.href}
                            className="block px-4 py-2 text-foreground hover:bg-muted text-sm"
                          >
                            {t(child.key)}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="breadcrumb" aria-label="Breadcrumb">
        <nav>
          <ol className="flex items-center gap-2">
            <li>
              <a href="/" className="hover:text-primary">{t('home')}</a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
  );
}
