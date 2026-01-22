import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Factory, Building2, Shirt, Truck, FlaskConical, TrendingUp, ArrowRight } from 'lucide-react';

const sectorStyles = {
  msme: {
    bg: 'bg-sector-msme/10',
    text: 'text-sector-msme',
  },
  parks: {
    bg: 'bg-sector-parks/10',
    text: 'text-sector-parks',
  },
  textile: {
    bg: 'bg-sector-textile/10',
    text: 'text-sector-textile',
  },
  logistics: {
    bg: 'bg-sector-logistics/10',
    text: 'text-sector-logistics',
  },
  rd: {
    bg: 'bg-sector-rd/10',
    text: 'text-sector-rd',
  },
  investment: {
    bg: 'bg-sector-investment/10',
    text: 'text-sector-investment',
  },
} as const;

type SectorVariant = keyof typeof sectorStyles;

const sectors: Array<{
  key: string;
  icon: typeof Factory;
  variant: SectorVariant;
  stats: string;
  description: string;
}> = [
  {
    key: 'msmeCluster',
    icon: Factory,
    variant: 'msme',
    stats: '45,000+ Units',
    description: 'Supporting small and medium enterprises with cluster development initiatives and growth programs.',
  },
  {
    key: 'industrialParks',
    icon: Building2,
    variant: 'parks',
    stats: '230+ Estates',
    description: 'Strategic industrial parks and Special Economic Zones across Gujarat.',
  },
  {
    key: 'textileApparel',
    icon: Shirt,
    variant: 'textile',
    stats: '₹85,000 Cr',
    description: 'Gujarat\'s thriving textile and apparel manufacturing ecosystem.',
  },
  {
    key: 'logisticsInfra',
    icon: Truck,
    variant: 'logistics',
    stats: '15+ Hubs',
    description: 'World-class logistics infrastructure and connectivity networks.',
  },
  {
    key: 'rdTesting',
    icon: FlaskConical,
    variant: 'rd',
    stats: '50+ Labs',
    description: 'Research & development facilities and certified testing laboratories.',
  },
  {
    key: 'investmentOpportunities',
    icon: TrendingUp,
    variant: 'investment',
    stats: '₹5L Cr+ FDI',
    description: 'Explore lucrative investment opportunities in Gujarat\'s industrial landscape.',
  },
];

export function IndustrialEcosystem() {
  const { t } = useAccessibility();

  return (
    <section className="py-12 bg-background" aria-labelledby="ecosystem-heading">
      <div className="container">
        <div className="text-center mb-10">
          <h2 id="ecosystem-heading" className="text-3xl font-bold text-foreground mb-3">
            {t('industrialEcosystem')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore Gujarat's comprehensive industrial ecosystem spanning multiple sectors, 
            designed to foster growth, innovation, and sustainable development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => {
            const Icon = sector.icon;
            return (
              <a
                key={sector.key}
                href={`/ecosystem/${sector.variant}`}
                className={`sector-card sector-card-${sector.variant} group`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${sectorStyles[sector.variant].bg}`}>
                    <Icon className={`h-6 w-6 ${sectorStyles[sector.variant].text}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {t(sector.key)}
                    </h3>
                    <p className="text-2xl font-bold text-primary mt-1">{sector.stats}</p>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                      {sector.description}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1 mt-4 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('explore')}
                  <ArrowRight className="h-4 w-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
