import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { MessageCircle, Download, Phone } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  const handleWhatsApp = () => {
    window.open('https://wa.me/+989133629006', '_blank');
  };

  const handleConsultation = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCatalog = () => {
    // Handle catalog download
    window.open('#', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
        {/* Premium overlay pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Brand Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-white/90">🏭 {t('hero.badge')}</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-gradient">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-3xl mb-4 font-semibold text-white">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg md:text-xl mb-8 max-w-4xl mx-auto leading-relaxed text-white/90">
            {t('hero.description')}
          </p>

          {/* Value Propositions */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-sm font-medium text-white">✓ {t('hero.valueProps.premiumQuality')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-sm font-medium text-white">✓ {t('hero.valueProps.exportReady')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-sm font-medium text-white">✓ {t('hero.valueProps.technicalExcellence')}</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
              <div className="text-sm font-medium text-white">✓ {t('hero.valueProps.competitivePrice')}</div>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleConsultation}
              size="lg"
              className="btn-premium text-lg px-10 py-4 text-white shadow-2xl hover:shadow-white/20"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('hero.consultation')}
            </Button>
            
            <Button
              onClick={handleCatalog}
              variant="outline"
              size="lg"
              className="bg-white/15 border-white/40 text-white hover:bg-white/25 text-lg px-10 py-4 backdrop-blur-sm"
            >
              <Download className="h-5 w-5 mr-2" />
              {t('hero.catalog')}
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="bg-green-600/90 border-green-400 text-white hover:bg-green-600 text-lg px-10 py-4 backdrop-blur-sm"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('hero.whatsapp')}
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm">{t('hero.trustIndicators.yearsExperience')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">500+</div>
              <div className="text-sm">{t('hero.trustIndicators.machinesDelivered')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">50+</div>
              <div className="text-sm">{t('hero.trustIndicators.exportCountries')}</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">{t('hero.trustIndicators.customerSatisfaction')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};