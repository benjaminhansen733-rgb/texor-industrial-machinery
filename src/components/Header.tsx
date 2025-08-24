import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchBar } from "./SearchBar";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

interface HeaderProps {
  currentSection: string;
  onNavigate: (section: string) => void;
}

export const Header = ({ currentSection, onNavigate }: HeaderProps) => {
  const { t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'products', href: '#products' },
    { key: 'resources', href: '#resources' },
    { key: 'contact', href: '#contact' }
  ];

  const handleNavClick = (section: string) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+989133629006', '_blank');
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="industrial-heading text-xl font-bold text-primary">
              {isRTL ? 'تکسور | TEXOR' : 'TEXOR'}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.key)}
                className={`transition-colors duration-200 ${
                  currentSection === item.key
                    ? 'text-primary font-medium'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {t(`nav.${item.key}`)}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <SearchBar />
            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsApp}
              className="flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>{t('hero.whatsapp')}</span>
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="py-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.key)}
                  className={`block w-full text-right py-2 px-4 transition-colors duration-200 ${
                    currentSection === item.key
                      ? 'text-primary font-medium'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full btn-industrial"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  {t('hero.whatsapp')}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};