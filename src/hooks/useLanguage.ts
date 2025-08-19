import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

export const useLanguage = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    
    // Update HTML attributes for RTL/LTR and fonts
    const html = document.documentElement;
    if (lng === 'fa') {
      html.setAttribute('lang', 'fa');
      html.setAttribute('dir', 'rtl');
      html.style.fontFamily = '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
      document.body.style.fontFamily = '"Vazirmatn", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif';
    } else {
      html.setAttribute('lang', 'en');
      html.setAttribute('dir', 'ltr');
      html.style.fontFamily = '"Inter", "Roboto", "Segoe UI", "Helvetica Neue", Arial, sans-serif';
      document.body.style.fontFamily = '"Inter", "Roboto", "Segoe UI", "Helvetica Neue", Arial, sans-serif';
    }
  };

  useEffect(() => {
    // Set initial direction and font based on current language
    changeLanguage(i18n.language);
  }, [i18n.language]);

  return {
    currentLanguage: i18n.language,
    changeLanguage,
    t,
    isRTL: i18n.language === 'fa'
  };
};