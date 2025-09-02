import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Globe, Zap, Shield, TrendingUp } from "lucide-react";

export const ValueProposition = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      key: "premiumQuality",
      color: "text-primary"
    },
    {
      icon: Globe,
      key: "exportExcellence",
      color: "text-success"
    },
    {
      icon: Zap,
      key: "technicalInnovation",
      color: "text-warning"
    },
    {
      icon: TrendingUp,
      key: "competitiveAdvantage",
      color: "text-primary"
    },
    {
      icon: Shield,
      key: "reliability",
      color: "text-success"
    },
    {
      icon: CheckCircle,
      key: "customerSuccess",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            {t('valueProposition.badge')}
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            {t('valueProposition.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('valueProposition.subtitle')}
          </p>
          <div className="divider-premium mt-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={index} 
                className="card-feature group hover:border-primary/20 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors ${value.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 industrial-heading group-hover:text-primary transition-colors">
                    {t(`valueProposition.values.${value.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`valueProposition.values.${value.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-scale-in">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{t('valueProposition.stats.yearsExcellence')}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "100ms" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{t('valueProposition.stats.machinesDelivered')}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "200ms" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{t('valueProposition.stats.countriesServed')}</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: "300ms" }}>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">{t('valueProposition.stats.customerSatisfaction')}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};