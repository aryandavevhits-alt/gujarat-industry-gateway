import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Building, Users, FileText, Landmark, Lightbulb, Link2, RefreshCw, BarChart3 } from 'lucide-react';

const stats = [
  {
    key: 'registeredUnits',
    icon: Building,
    value: '1,25,000+',
    trend: '+12%',
    color: 'primary',
  },
  {
    key: 'activeClusters',
    icon: Users,
    value: '850+',
    trend: '+8%',
    color: 'success',
  },
  {
    key: 'policyRepository',
    icon: FileText,
    value: '2,500+',
    trend: 'Updated',
    color: 'accent',
  },
  {
    key: 'industrialInfra',
    icon: Landmark,
    value: '230+',
    trend: '+15 New',
    color: 'warning',
  },
];

const initiatives = [
  {
    title: 'Gujarat Industrial Infrastructure Snapshot 2024-25',
    date: 'January 2026',
    type: 'Report',
  },
  {
    title: 'Cluster Development Programme – Operational Guidelines',
    date: 'December 2025',
    type: 'Guideline',
  },
  {
    title: 'Textile Parks Expansion Initiative',
    date: 'November 2025',
    type: 'Initiative',
  },
];

export function DepartmentSnapshot() {
  const { t } = useAccessibility();

  return (
    <section className="py-12 bg-muted/30" aria-labelledby="snapshot-heading">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Statistics Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h2 id="snapshot-heading" className="text-2xl font-bold text-foreground">
                {t('departmentSnapshot')}
              </h2>
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Link2 className="h-3 w-3" />
                  {t('connectedSystems')}
                </span>
                <span className="flex items-center gap-1">
                  <RefreshCw className="h-3 w-3" />
                  {t('autoUpdated')}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.key}
                    className="dashboard-card animate-count-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <Icon className={`h-5 w-5 text-${stat.color}`} />
                      <span className="text-xs font-medium text-success bg-success/10 px-2 py-0.5 rounded-full">
                        {stat.trend}
                      </span>
                    </div>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{t(stat.key)}</p>
                  </div>
                );
              })}
            </div>

            {/* Dashboard Indicator */}
            <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg flex items-center gap-3">
              <BarChart3 className="h-5 w-5 text-primary" />
              <div>
                <p className="text-sm font-medium text-foreground">{t('dataDashboard')}</p>
                <p className="text-xs text-muted-foreground">
                  Real-time industrial statistics powered by integrated government systems
                </p>
              </div>
              <a href="/dashboard" className="ml-auto text-sm text-primary font-medium hover:underline">
                {t('viewAll')} →
              </a>
            </div>
          </div>

          {/* Latest Initiatives */}
          <div className="lg:w-80">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="h-5 w-5 text-accent" />
              <h3 className="font-semibold text-foreground">{t('latestInitiatives')}</h3>
            </div>
            <div className="space-y-3">
              {initiatives.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                >
                  <span className="cms-badge cms-badge-published mb-2">{item.type}</span>
                  <h4 className="text-sm font-medium text-foreground line-clamp-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{item.date}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
