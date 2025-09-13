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
              {t('footer.title')}
            </h3>
            <p className="text-background/80 mb-4">
              {t('footer.company')}
            </p>
            <p className="text-background/70">
              {t('footer.brand')}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">{t('footer.quickContact')}</h4>
            <div className="space-y-2">
              <a href="tel:+989133629006" className="flex items-center gap-2 text-background/80 hover:text-primary-foreground">
                <Phone className="h-4 w-4" />
                09133629006
              </a>
              <a href="https://wa.me/+989133629006" className="flex items-center gap-2 text-background/80 hover:text-primary-foreground">
                <MessageCircle className="h-4 w-4" />
                {t('footer.whatsapp')}
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-primary-foreground">{t('footer.socialMedia')}</h4>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://instagram.com/texor_co" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors duration-200">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/company/texor-co" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/texor_co" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://youtube.com/@texor_co" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://t.me/texor_co" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-primary-foreground transition-colors duration-200">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 {t('footer.rights')} - {t('footer.title')}
          </p>
        </div>
      </div>
    </footer>
  );
};