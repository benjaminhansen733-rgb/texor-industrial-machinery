import { useLanguage } from "@/hooks/useLanguage";
import { MessageCircle, Phone, Instagram, Globe } from "lucide-react";

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              تکسور | TEXOR
            </h3>
            <p className="text-background/80 mb-4">
              {t('footer.company')}
            </p>
            <p className="text-background/70">
              {t('footer.brand')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">تماس سریع</h4>
            <div className="space-y-2">
              <a href="tel:+989133629006" className="flex items-center gap-2 text-background/80 hover:text-primary-foreground">
                <Phone className="h-4 w-4" />
                09133629006
              </a>
              <a href="https://wa.me/+989133629006" className="flex items-center gap-2 text-background/80 hover:text-primary-foreground">
                <MessageCircle className="h-4 w-4" />
                واتساپ
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">شبکه‌های اجتماعی</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://instagram.com/texor_co" className="text-background/80 hover:text-primary-foreground">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.texorco.com" className="text-background/80 hover:text-primary-foreground">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 {t('footer.rights')} - تکسور
          </p>
        </div>
      </div>
    </footer>
  );
};