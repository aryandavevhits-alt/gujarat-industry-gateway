import { useState } from 'react';
import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Download, Eye, Filter, Calendar, Archive, FileText, Scale, Gift, Bell, ClipboardList } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const tabs = [
  { key: 'actsRules', icon: Scale },
  { key: 'policies', icon: FileText },
  { key: 'schemesIncentives', icon: Gift },
  { key: 'grCirculars', icon: ClipboardList },
  { key: 'notifications', icon: Bell },
  { key: 'formsGuidelines', icon: FileText },
];

const documents = [
  {
    title: 'Gujarat Industrial Policy 2020',
    category: 'policies',
    year: '2020',
    sector: 'All Sectors',
    status: 'published',
    downloads: 15420,
  },
  {
    title: 'MSME Development Act Amendment 2024',
    category: 'actsRules',
    year: '2024',
    sector: 'MSME',
    status: 'published',
    downloads: 8750,
  },
  {
    title: 'Textile Cluster Incentive Scheme',
    category: 'schemesIncentives',
    year: '2023',
    sector: 'Textile',
    status: 'published',
    downloads: 12300,
  },
  {
    title: 'GR No. IND/2024/Policy/123 - Land Allocation Guidelines',
    category: 'grCirculars',
    year: '2024',
    sector: 'Industrial Parks',
    status: 'published',
    downloads: 5600,
  },
  {
    title: 'Environmental Compliance Notification 2025',
    category: 'notifications',
    year: '2025',
    sector: 'All Sectors',
    status: 'published',
    downloads: 3200,
  },
  {
    title: 'Application Form - Industrial Land Allotment',
    category: 'formsGuidelines',
    year: '2024',
    sector: 'Industrial Parks',
    status: 'published',
    downloads: 22100,
  },
];

export function PolicyHub() {
  const { t } = useAccessibility();
  const [activeTab, setActiveTab] = useState('policies');

  const filteredDocs = documents.filter(doc => 
    activeTab === 'all' || doc.category === activeTab
  );

  return (
    <section className="py-12 bg-background" aria-labelledby="policy-heading">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">
          <div>
            <h2 id="policy-heading" className="text-2xl font-bold text-foreground">
              {t('policySchemeHub')}
            </h2>
            <p className="text-muted-foreground mt-1">
              Access comprehensive repository of policies, schemes, and regulatory documents
            </p>
          </div>
          
          {/* Filters */}
          <div className="flex items-center gap-3">
            <Select>
              <SelectTrigger className="w-[140px]" aria-label={t('filterByYear')}>
                <Calendar className="h-4 w-4 mr-2" />
                <SelectValue placeholder={t('filterByYear')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
                <SelectItem value="2022">2022</SelectItem>
              </SelectContent>
            </Select>
            
            <Select>
              <SelectTrigger className="w-[160px]" aria-label={t('filterBySector')}>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder={t('filterBySector')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sectors</SelectItem>
                <SelectItem value="msme">MSME</SelectItem>
                <SelectItem value="textile">Textile</SelectItem>
                <SelectItem value="parks">Industrial Parks</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-border mb-6 overflow-x-auto" role="tablist">
          <div className="flex min-w-max">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`policy-tab flex items-center gap-2 whitespace-nowrap ${
                    activeTab === tab.key ? 'policy-tab-active' : 'text-muted-foreground hover:text-foreground'
                  }`}
                  role="tab"
                  aria-selected={activeTab === tab.key}
                >
                  <Icon className="h-4 w-4" />
                  {t(tab.key)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Document List */}
        <div className="space-y-3" role="tabpanel">
          {filteredDocs.map((doc, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
            >
              <FileText className="h-8 w-8 text-primary shrink-0" />
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <h3 className="font-medium text-foreground">{doc.title}</h3>
                  <span className="cms-badge cms-badge-published">{doc.status}</span>
                  {doc.year < '2023' && (
                    <span className="cms-badge cms-badge-archived flex items-center gap-1">
                      <Archive className="h-3 w-3" />
                      Archived
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{doc.year}</span>
                  <span>•</span>
                  <span>{doc.sector}</span>
                  <span>•</span>
                  <span>{doc.downloads.toLocaleString()} downloads</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 shrink-0">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {t('view')}
                </Button>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  {t('download')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Button variant="outline">
            {t('viewAll')} →
          </Button>
        </div>
      </div>
    </section>
  );
}
