import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  BookOpen, 
  Video, 
  Download,
  ExternalLink,
  Calendar,
  Clock,
  Eye
} from "lucide-react";

export const TechnicalResources = () => {
  const { t } = useLanguage();

  const resources = [
    {
      type: "catalog",
      titleKey: "productCatalog",
      fileSize: "8.5 MB",
      pages: "48 pages",
      format: "PDF",
      downloadCount: "2,847",
      icon: FileText,
      featured: true
    },
    {
      type: "technical",
      titleKey: "installationGuide",
      fileSize: "2.1 MB", 
      pages: "12 pages",
      format: "PDF",
      downloadCount: "1,156",
      icon: BookOpen,
      featured: false
    },
    {
      type: "video",
      titleKey: "videoDemo",
      duration: "8:32",
      format: "Video",
      viewCount: "15,234",
      icon: Video,
      featured: true
    },
    {
      type: "case-study",
      titleKey: "caseStudy",
      fileSize: "1.8 MB",
      pages: "6 pages", 
      format: "PDF",
      downloadCount: "892",
      icon: FileText,
      featured: false
    }
  ];

  const news = [
    {
      date: "2024-01-15",
      titleKey: "news.automation",
      excerptKey: "news.automationExcerpt",
      readTime: "3 min read"
    },
    {
      date: "2024-01-08", 
      titleKey: "news.export",
      excerptKey: "news.exportExcerpt",
      readTime: "2 min read"
    },
    {
      date: "2023-12-20",
      titleKey: "news.certification",
      excerptKey: "news.certificationExcerpt",
      readTime: "2 min read"
    }
  ];

  const handleDownload = (resourceType: string) => {
    // Simulate download - in real implementation, this would trigger actual file download
    window.open('#', '_blank');
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            {t('technicalResources.badgeText')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            {t('technicalResources.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('technicalResources.description')}
          </p>
          <div className="divider-premium mt-8"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resources Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold industrial-heading">{t('technicalResources.categories.all')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card 
                    key={index}
                    className={`card-industrial group hover:border-primary/20 animate-slide-up ${
                      resource.featured ? 'ring-2 ring-primary/10 border-primary/20' : ''
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          {resource.featured && (
                            <Badge variant="default" className="text-xs">
                              {t('technicalResources.featured')}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-semibold industrial-heading group-hover:text-primary transition-colors">
                        {t(`technicalResources.resources.${resource.titleKey}.title`)}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {t(`technicalResources.resources.${resource.titleKey}.description`)}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-4 text-xs text-muted-foreground">
                        {resource.fileSize && (
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {resource.fileSize}
                          </div>
                        )}
                        {resource.pages && (
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            {resource.pages}
                          </div>
                        )}
                        {resource.duration && (
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            {resource.duration}
                          </div>
                        )}
                        {resource.downloadCount && (
                          <div className="flex items-center gap-1">
                            <Download className="h-3 w-3" />
                            {resource.downloadCount} {t('technicalResources.metadata.downloads')}
                          </div>
                        )}
                        {resource.viewCount && (
                          <div className="flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            {resource.viewCount} {t('technicalResources.metadata.views')}
                          </div>
                        )}
                      </div>

                      <Button 
                        className="w-full btn-industrial text-sm"
                        onClick={() => handleDownload(resource.type)}
                      >
                        {resource.type === 'video' ? t('technicalResources.actions.watch') : t('technicalResources.actions.download')}
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* News & Updates Sidebar */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Calendar className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold industrial-heading">{t('technicalResources.news.title')}</h3>
            </div>

            <div className="space-y-6">
              {news.map((article, index) => (
                <Card 
                  key={index}
                  className="card-industrial group hover:border-primary/20 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="text-xs text-muted-foreground mb-2">
                      {formatDate(article.date)}
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                      {t(`technicalResources.${article.titleKey}`)}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                      {t(`technicalResources.${article.excerptKey}`)}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                      <ExternalLink className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Newsletter Signup */}
            <Card className="card-premium mt-8">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2 industrial-heading">{t('technicalResources.newsletter.title')}</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {t('technicalResources.newsletter.description')}
                </p>
                <Button 
                  className="w-full btn-industrial text-sm"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('technicalResources.newsletter.subscribe')}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};