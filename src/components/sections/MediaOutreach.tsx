import { useAccessibility } from '@/contexts/AccessibilityContext';
import { Newspaper, Calendar, Image, Video, Tag, ExternalLink, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const pressReleases = [
  {
    title: 'State-Level Investor Facilitation Workshop Successfully Concluded',
    date: 'January 20, 2026',
    tag: 'pressCommunication',
  },
  {
    title: 'New Industrial Policy Amendment for Green Manufacturing',
    date: 'January 15, 2026',
    tag: 'pressCommunication',
  },
  {
    title: 'MSME Cluster Development Program Achieves 100% Target',
    date: 'January 10, 2026',
    tag: 'publicAwareness',
  },
];

const events = [
  {
    title: 'Gujarat Industrial Summit 2026',
    date: 'February 15-17, 2026',
    location: 'Gandhinagar',
    tag: 'departmentEvent',
  },
  {
    title: 'MSME Awareness Camp - Surat District',
    date: 'January 28, 2026',
    location: 'Surat',
    tag: 'publicAwareness',
  },
];

const galleryImages = [
  { title: 'Industrial Summit 2025', count: 45 },
  { title: 'MSME Excellence Awards', count: 32 },
  { title: 'Factory Visits', count: 28 },
  { title: 'Training Programs', count: 56 },
];

export function MediaOutreach() {
  const { t } = useAccessibility();

  const getTagBadge = (tag: string) => {
    const colors: Record<string, string> = {
      departmentEvent: 'bg-primary/10 text-primary',
      pressCommunication: 'bg-accent/10 text-accent',
      publicAwareness: 'bg-success/10 text-success',
    };
    return colors[tag] || 'bg-muted text-muted-foreground';
  };

  return (
    <section className="py-12 bg-muted/30" aria-labelledby="media-heading">
      <div className="container">
        <div className="text-center mb-10">
          <h2 id="media-heading" className="text-2xl font-bold text-foreground mb-3">
            {t('mediaOutreach')}
          </h2>
          <p className="text-muted-foreground">
            Stay updated with the latest news, events, and multimedia content from the department
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Press Releases */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">{t('pressReleases')}</h3>
            </div>
            <div className="space-y-4">
              {pressReleases.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                >
                  <Badge className={`mb-2 ${getTagBadge(item.tag)}`}>
                    <Tag className="h-3 w-3 mr-1" />
                    {t(item.tag)}
                  </Badge>
                  <h4 className="font-medium text-foreground text-sm line-clamp-2">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-2">{item.date}</p>
                </a>
              ))}
            </div>
            <Button variant="link" className="mt-4 p-0">
              {t('viewAll')} {t('pressReleases')} <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Events */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Calendar className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">{t('govEvents')}</h3>
            </div>
            <div className="space-y-4">
              {events.map((event, index) => (
                <a
                  key={index}
                  href="#"
                  className="block p-4 bg-card border border-border rounded-lg hover:shadow-md transition-shadow"
                >
                  <Badge className={`mb-2 ${getTagBadge(event.tag)}`}>
                    <Tag className="h-3 w-3 mr-1" />
                    {t(event.tag)}
                  </Badge>
                  <h4 className="font-medium text-foreground text-sm">{event.title}</h4>
                  <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                    <span>{event.date}</span>
                    <span>•</span>
                    <span>{event.location}</span>
                  </div>
                </a>
              ))}
            </div>
            <Button variant="link" className="mt-4 p-0">
              {t('viewAll')} Events <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>

          {/* Galleries */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image className="h-5 w-5 text-primary" />
              <h3 className="font-semibold text-foreground">{t('photoGallery')}</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {galleryImages.map((gallery, index) => (
                <a
                  key={index}
                  href="#"
                  className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex flex-col items-center justify-center p-3 hover:shadow-md transition-shadow border border-border"
                >
                  <Image className="h-8 w-8 text-primary/50 mb-2" />
                  <span className="text-xs font-medium text-foreground text-center line-clamp-1">
                    {gallery.title}
                  </span>
                  <span className="text-xs text-muted-foreground">{gallery.count} photos</span>
                </a>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <Image className="h-4 w-4 mr-1" />
                {t('photoGallery')}
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <Video className="h-4 w-4 mr-1" />
                {t('videoGallery')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
