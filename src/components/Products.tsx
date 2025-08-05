import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";
import { MessageCircle, FileText, Settings, Zap, ShieldCheck } from "lucide-react";
import bobbinImage from "@/assets/bobbin-winder.jpg";
import lacquerImage from "@/assets/lacquer-machine.jpg";

export const Products = () => {
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: 'bobbin',
      title: t('products.bobbinWinder.title'),
      description: t('products.bobbinWinder.description'),
      features: t('products.bobbinWinder.features'),
      image: bobbinImage,
      specs: [
        'سرعت: 1000-6000 دور در دقیقه',
        'کنترل تنش: دیجیتال',
        'مواد قابل پیچش: همه انواع نخ',
        'دقت پیچش: ±0.1%'
      ]
    },
    {
      id: 'lacquer',
      title: t('products.lacquerer.title'),
      description: t('products.lacquerer.description'),
      features: t('products.lacquerer.features'),
      image: lacquerImage,
      specs: [
        'عرض کاری: 200-2000 میلی‌متر',
        'ضخامت لاکنی: 0.1-5 میلی‌متر',
        'سرعت تراورس: قابل تنظیم',
        'کنترل: PLC'
      ]
    }
  ];

  const handleWhatsApp = (productTitle: string) => {
    const message = `سلام، جهت کسب اطلاعات بیشتر در مورد ${productTitle} با شما تماس گرفتم.`;
    window.open(`https://wa.me/+989133629006?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleConsultation = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            {t('products.title')}
          </h2>
          <p className="text-xl text-primary font-medium mb-8">
            {t('products.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {products.map((product) => (
            <Card key={product.id} className="card-industrial overflow-hidden group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 industrial-heading">
                  {product.title}
                </h3>
                
                <p className="industrial-text mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <p className="text-sm text-primary mb-6 font-medium">
                  {product.features}
                </p>

                <div className="space-y-3 mb-6">
                  {product.specs.map((spec, index) => (
                    <div key={index} className="flex items-center text-sm industrial-text">
                      <Settings className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                      {spec}
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={() => handleWhatsApp(product.title)}
                    className="btn-industrial flex-1"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t('products.requestQuote')}
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        className="flex-1"
                        onClick={() => setSelectedProduct(product.id)}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        جزئیات بیشتر
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl industrial-heading">
                          {product.title}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="grid gap-6">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-64 object-cover rounded-lg"
                        />
                        <div>
                          <h4 className="text-lg font-semibold mb-3 industrial-heading">
                            مشخصات فنی:
                          </h4>
                          <div className="space-y-2">
                            {product.specs.map((spec, index) => (
                              <div key={index} className="flex items-center industrial-text">
                                <ShieldCheck className="h-4 w-4 text-green-600 mr-2" />
                                {spec}
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleWhatsApp(product.title)}
                            className="btn-industrial flex-1"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            درخواست قیمت
                          </Button>
                          <Button
                            onClick={handleConsultation}
                            variant="outline"
                            className="flex-1"
                          >
                            <Zap className="h-4 w-4 mr-2" />
                            مشاوره رایگان
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-industrial rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            نیاز به مشاوره تخصصی دارید؟
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            تیم متخصص ما آماده ارائه راهکارهای بهینه برای نیازهای خاص شما می‌باشد
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={handleConsultation}
              variant="outline"
              size="lg"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              <Zap className="h-5 w-5 mr-2" />
              {t('products.consultation')}
            </Button>
            <Button
              onClick={() => handleWhatsApp('مشاوره عمومی')}
              variant="outline"
              size="lg"
              className="bg-green-600 border-green-500 text-white hover:bg-green-700"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              {t('hero.whatsapp')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};