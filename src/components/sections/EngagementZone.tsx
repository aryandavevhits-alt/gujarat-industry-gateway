import { useAccessibility } from '@/contexts/AccessibilityContext';
import { MessageSquare, HelpCircle, FileCheck, BookOpen, Send, Search, Shield, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const engagementOptions = [
  {
    key: 'grievanceQuery',
    icon: MessageSquare,
    description: 'Submit complaints, queries, or requests related to industrial services',
    action: 'submitGrievance',
    features: ['CAPTCHA Protected', 'Tracking Reference', 'Email Notifications'],
  },
  {
    key: 'feedbackSystem',
    icon: HelpCircle,
    description: 'Share your feedback on departmental services and initiatives',
    action: 'Submit Feedback',
    features: ['Anonymous Option', 'Quick Rating', 'Detailed Feedback'],
  },
  {
    key: 'citizenCharter',
    icon: FileCheck,
    description: 'View service standards, timelines, and citizen commitments',
    action: 'View Charter',
    features: ['Service Timelines', 'Escalation Matrix', 'Commitment Standards'],
  },
  {
    key: 'faqRepository',
    icon: BookOpen,
    description: 'Find answers to frequently asked questions about industrial services',
    action: 'Browse FAQs',
    features: ['Searchable', 'Category-wise', 'Recently Updated'],
  },
];

export function EngagementZone() {
  const { t } = useAccessibility();

  return (
    <section className="py-12 bg-background" aria-labelledby="engagement-heading">
      <div className="container">
        <div className="text-center mb-10">
          <h2 id="engagement-heading" className="text-2xl font-bold text-foreground mb-3">
            {t('engagementZone')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Connect with the Industries Commissionerate through multiple channels. 
            Submit queries, track grievances, and access citizen services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {engagementOptions.map((option) => {
            const Icon = option.icon;
            return (
              <div
                key={option.key}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{t(option.key)}</h3>
                <p className="text-sm text-muted-foreground mb-4">{option.description}</p>
                
                {/* Features */}
                <ul className="space-y-2 mb-4">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="h-3 w-3 text-success" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full">
                  {option.key === 'grievanceQuery' ? t(option.action) : option.action}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Track Grievance */}
        <div className="mt-10 bg-primary/5 border border-primary/20 rounded-xl p-8">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <Search className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{t('trackStatus')}</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Already submitted a grievance or query? Track its status using your reference number.
            </p>
            <div className="flex gap-3">
              <Input 
                placeholder="Enter Reference Number (e.g., IC-GRV-2026-12345)" 
                className="flex-1"
                aria-label="Grievance Reference Number"
              />
              <Button>
                <Search className="h-4 w-4 mr-2" />
                Track
              </Button>
            </div>
            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <Shield className="h-3 w-3" />
              <span>Secure & encrypted submission with CAPTCHA protection</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
