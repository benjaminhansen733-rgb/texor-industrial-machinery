import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Cog, Award, Globe, Lightbulb } from "lucide-react";

export const About = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Cog,
      key: 'precision',
      description: ''
    },
    {
      icon: Award,
      key: 'quality',
      description: ''
    },
    {
      icon: Globe,
      key: 'export',
      description: ''
    },
    {
      icon: Lightbulb,
      key: 'innovation',
      description: ''
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            {t('about.title')}
          </h2>
          <p className="text-xl text-primary font-medium mb-4">
            {t('about.subtitle')}
          </p>
          <p className="text-lg industrial-text max-w-4xl mx-auto leading-relaxed">
            {t('about.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="card-industrial p-6 text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-industrial rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 industrial-heading">
                  {t(`about.features.${feature.key}`)}
                </h3>
                <p className="industrial-text">
                  {t(`about.featuresDescriptions.${feature.key}`)}
                </p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 md:p-12 card-industrial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 industrial-heading">
                {t('footer.company')}
              </h3>
              <p className="text-lg industrial-text leading-relaxed mb-6">
                {t('about.companyText')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-steel rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-sm industrial-text">{t('about.yearsExperience')}</div>
                </div>
                <div className="text-center p-4 bg-gradient-steel rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm industrial-text">{t('about.successfulProjects')}</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-industrial rounded-xl p-8 text-white">
              <h4 className="text-2xl font-bold mb-4">{t('about.mission')}</h4>
              <p className="text-lg leading-relaxed">
                {t('about.missionText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};