import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Play, FileText, Subtitles, BookOpen, Building2, Target, Users, Award, Info, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const knowledgeModules = [
  {
    key: 'deptOverview',
    icon: Building2,
    hasVideo: true,
    hasTranscript: true,
    hasCaptions: true,
    thumbnail: 'Overview of Industries Commissionerate and its mandate',
  },
  {
    key: 'visionMission',
    icon: Target,
    hasVideo: true,
    hasTranscript: true,
    hasCaptions: true,
    thumbnail: 'Strategic vision for industrial development in Gujarat',
  },
  {
    key: 'orgStructure',
    icon: Users,
    hasVideo: false,
    hasTranscript: false,
    hasCaptions: false,
    thumbnail: 'Organizational hierarchy and divisional structure',
  },
  {
    key: 'dutiesProcedures',
    icon: FileText,
    hasVideo: true,
    hasTranscript: true,
    hasCaptions: true,
    thumbnail: 'Standard operating procedures and departmental duties',
  },
  {
    key: 'proactiveDisclosures',
    icon: Info,
    hasVideo: false,
    hasTranscript: false,
    hasCaptions: false,
    thumbnail: 'RTI proactive disclosures and transparency reports',
  },
  {
    key: 'achievements',
    icon: Award,
    hasVideo: true,
    hasTranscript: true,
    hasCaptions: false,
    thumbnail: 'Key achievements and milestones of the department',
  },
];

export function KYDKnowledgeCenter() {
  const { t } = useAccessibility();

  return (
    <section className="py-12 bg-muted/30" aria-labelledby="kyd-heading">
      <div className="container">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">
            <BookOpen className="h-3 w-3 mr-1" />
            {t('orientationResource')}
          </Badge>
          <h2 id="kyd-heading" className="text-2xl font-bold text-foreground mb-3">
            {t('kydKnowledgeCenter')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive multimedia resources to understand the structure, functions, 
            and operations of Industries Commissionerate, Government of Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {knowledgeModules.map((module, index) => {
            const Icon = module.icon;
            return (
              <a
                key={module.key}
                href={`/kyd/${module.key}`}
                className="knowledge-card group"
              >
                {/* Thumbnail Area */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <Icon className="h-12 w-12 text-primary/30" />
                  {module.hasVideo && (
                    <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/10 transition-colors">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="h-6 w-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                  )}
                  {module.hasVideo && (
                    <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                      {t('videoModule')}
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {t(module.key)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {module.thumbnail}
                  </p>

                  {/* Accessibility Indicators */}
                  <div className="flex items-center gap-3 mt-3">
                    {module.hasTranscript && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <FileText className="h-3 w-3" />
                        {t('transcript')}
                      </span>
                    )}
                    {module.hasCaptions && (
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Subtitles className="h-3 w-3" />
                        {t('captions')}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Featured Video */}
        <div className="mt-10 bg-card border border-border rounded-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="relative aspect-video lg:aspect-auto bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
              <div className="text-center text-primary-foreground p-8">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                <h3 className="text-xl font-semibold">KYD Orientation Module</h3>
                <p className="text-primary-foreground/80 mt-2">
                  Structure of Industries Commissionerate
                </p>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <Badge variant="outline" className="w-fit mb-4">
                Featured Learning Resource
              </Badge>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Complete Department Orientation
              </h3>
              <p className="text-muted-foreground mb-4">
                A comprehensive 25-minute video walkthrough covering the organizational structure, 
                key functions, citizen services, and how to engage with the Industries Commissionerate 
                for various industrial requirements.
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-1">
                  <FileText className="h-4 w-4" />
                  Transcript Available
                </span>
                <span className="flex items-center gap-1">
                  <Subtitles className="h-4 w-4" />
                  English & Gujarati Captions
                </span>
              </div>
              <a 
                href="/kyd/orientation"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Watch Full Module
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
