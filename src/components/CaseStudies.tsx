import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Star,
  Building,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

export const CaseStudies = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      company: t('caseStudies.companies.isfahanTextile'),
      logo: "IT",
      location: t('caseStudies.locations.isfahan'),
      industry: t('caseStudies.industries.industrialTextiles'),
      projectDate: "2023",
      challenge: t('caseStudies.challenges.isfahanTextile'),
      solution: t('caseStudies.solutions.isfahanTextile'), 
      results: t('caseStudies.results.isfahanTextile', { returnObjects: true }) as string[],
      testimonial: t('caseStudies.testimonials.isfahanTextile'),
      customerName: t('caseStudies.customers.ahmadRezaei'),
      customerRole: t('caseStudies.roles.productionManager'),
      rating: 5,
      image: "/api/placeholder/400/300"
    },
    {
      company: t('caseStudies.companies.turkishCarpet'), 
      logo: "TC",
      location: t('caseStudies.locations.istanbul'),
      industry: t('caseStudies.industries.carpetManufacturing'),
      projectDate: "2023",
      challenge: t('caseStudies.challenges.turkishCarpet'),
      solution: t('caseStudies.solutions.turkishCarpet'),
      results: t('caseStudies.results.turkishCarpet', { returnObjects: true }) as string[],
      testimonial: t('caseStudies.testimonials.turkishCarpet'),
      customerName: t('caseStudies.customers.mehmetOzkan'), 
      customerRole: t('caseStudies.roles.qualityDirector'),
      rating: 5,
      image: "/api/placeholder/400/300"
    },
    {
      company: t('caseStudies.companies.gulfTextile'),
      logo: "GS", 
      location: t('caseStudies.locations.dubai'),
      industry: t('caseStudies.industries.technicalTextiles'),
      projectDate: "2024",
      challenge: t('caseStudies.challenges.gulfTextile'),
      solution: t('caseStudies.solutions.gulfTextile'),
      results: t('caseStudies.results.gulfTextile', { returnObjects: true }) as string[],
      testimonial: t('caseStudies.testimonials.gulfTextile'),
      customerName: t('caseStudies.customers.sarahAlMahmoud'),
      customerRole: t('caseStudies.roles.operationsDirector'), 
      rating: 5,
      image: "/api/placeholder/400/300"
    }
  ];

  const stats = [
    { icon: Building, number: "150+", label: t('caseStudies.stats.companiesServed') },
    { icon: Users, number: "500+", label: t('caseStudies.stats.satisfiedCustomers') },
    { icon: Clock, number: "99.5%", label: t('caseStudies.stats.uptimeReliability') },
    { icon: TrendingUp, number: "40%", label: t('caseStudies.stats.avgEfficiencyGain') }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            {t('caseStudies.badgeText')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            {t('caseStudies.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('caseStudies.subtitle')}
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto mt-4">
            {t('caseStudies.description')}
          </p>
          <div className="divider-premium mt-8"></div>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-20">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="card-premium overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary text-white text-xl font-bold">
                          {study.logo}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl font-bold industrial-heading">
                          {study.company}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {study.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {study.projectDate}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {study.industry}
                    </Badge>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-3">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-secondary/50 rounded-lg p-6 border-l-4 border-primary">
                        <div className="flex mb-2">
                          {[...Array(study.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-3 leading-relaxed">
                          "{study.testimonial}"
                        </p>
                        <div className="text-sm">
                          <div className="font-semibold">{study.customerName}</div>
                          <div className="text-muted-foreground">{study.customerRole}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Image */}
                <div className="relative bg-gradient-steel">
                  <div className="absolute inset-0 bg-primary/5"></div>
                  <div className="relative h-full min-h-[400px] flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Building className="h-16 w-16 text-primary" />
                      </div>
                      <div className="text-lg font-semibold mb-2">{study.company}</div>
                      <div className="text-sm text-muted-foreground">{study.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            className="btn-premium px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('caseStudies.ctaText')}
          </Button>
        </div>
      </div>
    </section>
  );
};