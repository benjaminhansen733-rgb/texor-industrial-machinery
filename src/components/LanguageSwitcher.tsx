import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Globe } from "lucide-react";

export const LanguageSwitcher = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    changeLanguage(currentLanguage === 'fa' ? 'en' : 'fa');
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 border-border bg-background hover:bg-accent"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">
        {currentLanguage === 'fa' ? 'EN' : 'فا'}
      </span>
    </Button>
  );
};