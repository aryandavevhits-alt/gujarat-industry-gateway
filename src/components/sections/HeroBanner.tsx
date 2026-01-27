import { useAccessibility } from '@/contexts/AccessibilityContext';
import { TrendingUp, Users, Building, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroBanner() {
  const { t } = useAccessibility();

  const highlights = [
    { icon: Building, value: '1.25L+', label: 'Industrial Units' },
    { icon: Users, value: '₹5L Cr', label: 'Investment' },
    { icon: TrendingUp, value: '850+', label: 'Clusters' },
    { icon: Award, value: '#1', label: 'Manufacturing Hub' },
  ];

  return (
    <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-foreground rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-foreground rounded-full translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container relative py-16 lg:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Gujarat's Industrial Ecosystem
            <span className="block text-primary-foreground/80 text-2xl md:text-3xl mt-2">
              Powering Growth, Innovation & Investment
            </span>
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
            The Industries Commissionerate serves as the nodal agency driving industrial 
            development, facilitating investment, and fostering sustainable growth across 
            Gujarat's diverse manufacturing landscape.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              {t('explore')} {t('industrialEcosystem')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground text-primary-foreground bg-transparent hover:bg-primary-foreground/10"
            >
              {t('investmentOpportunities')}
            </Button>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-4 text-center"
              >
                <Icon className="h-6 w-6 mx-auto mb-2 text-primary-foreground/80" />
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-primary-foreground/70">{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
