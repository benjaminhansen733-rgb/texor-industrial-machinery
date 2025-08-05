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
      {/* Background Image */}
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
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 font-medium text-blue-100">
            {t('hero.subtitle')}
          </p>
          
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed text-blue-50">
            {t('hero.description')}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={handleConsultation}
              size="lg"
              className="btn-industrial text-lg px-8 py-3"
            >
              <Phone className="h-5 w-5 mr-2" />
              {t('hero.consultation')}
            </Button>
            
            <Button
              onClick={handleCatalog}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-3"
            >
              <Download className="h-5 w-5 mr-2" />
              {t('hero.catalog')}
            </Button>
            
            <Button
              onClick={handleWhatsApp}
              variant="outline"
              size="lg"
              className="bg-green-600 border-green-500 text-white hover:bg-green-700 text-lg px-8 py-3"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('hero.whatsapp')}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};