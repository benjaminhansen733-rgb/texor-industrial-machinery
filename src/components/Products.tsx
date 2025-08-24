import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useLanguage } from "@/hooks/useLanguage";
import { MessageCircle, FileText, Settings, Zap, ShieldCheck } from "lucide-react";
import bobbinImage from "@/assets/bobbin-winder.jpg";
import lacquerImage from "@/assets/lacquer-machine.jpg";
import catalogImage from "@/assets/catalog-image.jpg";

export const Products = () => {
  const { t, currentLanguage } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);

  const products = [
    {
      id: 'bobbin',
      title: t('products.bobbinWinder.title'),
      description: t('products.bobbinWinder.description'),
      features: t('products.bobbinWinder.features'),
      image: bobbinImage,
      specs: currentLanguage === 'fa'
        ? [
          'سرعت دستگاه: 0-800 متر بر دقیقه',
          'سرعت دورانی: 1000-6000 دور در دقیقه',
          'کنترل تنش: دیجیتال',
          'مواد قابل پیچش: همه انواع نخ',
          'دقت پیچش: ±0.1%'
        ]
        : [
          'Machine speed: 0-800 meters per minute',
          'Rotational speed: 1000-6000 RPM',
          'Tension control: Digital',
          'Material: All yarn types',
          'Winding accuracy: ±0.1%'
        ]
    },
    {
      id: 'lacquer',
      title: t('products.lacquerer.title'),
      description: t('products.lacquerer.description'),
      features: t('products.lacquerer.features'),
      image: lacquerImage,
      specs: currentLanguage === 'fa'
        ? [
          'عرض کاری: 200-2000 میلی‌متر',
          'ضخامت لاکنی: 0.1-5 میلی‌متر',
          'سرعت تراورس: قابل تنظیم',
          'کنترل: PLC'
        ]
        : [
          'Working width: 200-2000 mm',
          'Coating thickness: 0.1-5 mm',
          'Traverse speed: Adjustable',
          'Control: PLC'
        ]
    }
  ];
  
  // Detailed Persian specs for Dialog
  const DetailedSpecsFA = () => (
    <article className="industrial-text space-y-4">
      <h4 className="text-lg font-semibold industrial-heading">TEXOR مشخصات فنی دستگاه</h4>
      <ol className="list-decimal pr-5 space-y-2">
        <li>
          <span className="font-medium">ظرفیت دستگاه:</span>
          <div>تعداد بوبین‌های قابل‌پیچش (تعداد هدها): حداقل 5 هد و حداکثر تعداد هد نامحدود (بر اساس نیاز و سفارش مشتری قابل طراحی و ساخت است)</div>
        </li>
        <li>
          <span className="font-medium">سیستم کنترل پیشرفته:</span>
          <ul className="list-disc pr-5 space-y-1">
            <li>🔆 محاسبه وزن نخ پیچیده شده برای هر هد و نمایش وزن نخ تولید شده در هر شیفت کاری</li>
            <li>🔆 قابلیت تعریف سرعت(متر بر دقیقه)‌ برای هر هد یا گروهی از هدها</li>
            <li>🔆 قابلیت تعریف متراژ خاص برای هر هد یا گروهی از هدها.</li>
            <li>🔆 نمایش متراژ نخ پیچیده‌شده در لحظه برای هر هد.</li>
            <li>🔆 ثبت متراژ نخ پیچیده‌شده در هر شیفت کاری و محاسبه راندمان اپراتور</li>
            <li>🔆 تعریف چهار شیفت کاری برای دستگاه(شیف کاری A,B,C,D)</li>
          </ul>
        </li>
        <li>
          <span className="font-medium">سیستم جلوگیری از نخ‌سوزی:</span>
          <div>تعبیه سنسور حضور نخ برای توقف خودکار در صورت قطع نخ، جلوگیری از نخ‌سوزی و افزایش ایمنی دستگاه.</div>
        </li>
        <li>
          <span className="font-medium">عملکرد مستقل هدها:</span>
          <div>هر هد به‌صورت مستقل عمل می‌کند؛ در صورت خرابی یک هد، سایر هدها بدون اختلال به کار ادامه می‌دهند.</div>
        </li>
        <li>
          <span className="font-medium">درایوهای مجزا و مصرف انرژی:</span>
          <div>تعبیه درایو برای هر موتور به‌منظور تنظیم دقیق سرعت و کاهش مصرف انرژی، همراه با افزایش بازدهی دستگاه.</div>
        </li>
        <li>
          <span className="font-medium">ثبات کیفیت نخ:</span>
          <div>طراحی و عملکرد دستگاه به‌گونه‌ای است که کیفیت نخ پیچیده‌شده کاملاً یکنواخت و ثابت باشد.</div>
        </li>
        <li>
          <span className="font-medium">افزایش تولید و راندمان:</span>
          <div>بهینه‌سازی فرآیند پیچیدن نخ (سیستم تراورسی) برای افزایش سرعت تولید و بالا بردن راندمان اپراتور.</div>
        </li>
        <li>
          <span className="font-medium">ویژگی‌های تراورسی:</span>
          <div>در دستگاه‌های قدیمی، نخ درون درام شیار‌دار قرار می‌گرفت که این امر باعث کاهش کیفیت نخ، پارگی نخ در کریل دستگاه بافندگی فرش ماشینی و در نتیجه کاهش تولید می‌شد. در این دستگاه، برای حفظ کیفیت نخ، پیچش منظم‌تر و افزایش سرعت تولید، از سیستم تراورسی پیشرفته استفاده شده است که به‌طور دقیق و یکنواخت عملیات حرکت نخ را انجام می‌دهد.</div>
        </li>
        <li>
          <span className="font-medium">جنس و ابعاد دستگاه:</span>
          <div>در مسیر حرکت نخ، از سرامیک‌های مخصوص و مقاوم استفاده شده و همچنین غلتک محرک بوبین با پوشش‌دهی سطحی خاص و ضداصطکاک جهت جلوگیری از آسیب به نخ و کاهش کیفیت آن تولید شده است. برای افزایش دوام و کیفیت دستگاه، اجزای گیربکس از فولاد آلیاژی و آلومینیوم آلیاژی ساخته شده‌اند که علاوه بر کاهش وزن، مانع از خرابی زودهنگام دستگاه می‌شوند.</div>
        </li>
        <li>
          <span className="font-medium">قابل استفاده برای انواع نخ:</span>
          <div>قابل استفاده برای انواع نخ با هر نمره (تک‌لا، چندلا، ظریف یا ضخیم) و سازگار با طیف وسیعی از نمرات نخ جهت کاربردهای مختلف نساجی و فرش‌بافی.</div>
        </li>
      </ol>
      <p>❇️ این مشخصات فنی بیانگر قابلیت‌ها، دقت، و انعطاف‌پذیری بالای دستگاه بوبین‌پیچ بوده و آن را به یک گزینه ایده‌آل برای صنعت فرش ماشینی و ریسندگی تبدیل می‌کند.</p>
    </article>
  );

  const handleWhatsApp = (productTitle: string) => {
    const message = currentLanguage === 'fa'
      ? `سلام، جهت کسب اطلاعات بیشتر در مورد ${productTitle} با شما تماس گرفتم.`
      : `Hello, I would like more information about ${productTitle}.`;
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
                        {t('products.moreDetails')}
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
                          {t('products.specifications.title')}
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
                        {currentLanguage === 'fa' && (
                          <div className="pt-2 border-t border-border">
                            <DetailedSpecsFA />
                          </div>
                        )}
                        <div className="flex gap-3">
                          <Button
                            onClick={() => handleWhatsApp(product.title)}
                            className="btn-industrial flex-1"
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            {t('products.requestQuote')}
                          </Button>
                          <Button
                            onClick={handleConsultation}
                            variant="outline"
                            className="flex-1"
                          >
                            <Zap className="h-4 w-4 mr-2" />
                            {t('products.consultation')}
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

        {/* Catalog Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4 industrial-heading">
              {currentLanguage === 'fa' ? 'کاتالوگ محصولات' : 'Product Catalog'}
            </h3>
          </div>
          <div className="flex justify-center">
            <img
              src={catalogImage}
              alt={currentLanguage === 'fa' ? 'کاتالوگ محصولات' : 'Product Catalog'}
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-industrial rounded-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            {t('products.cta.title')}
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {t('products.cta.subtitle')}
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
              onClick={() => handleWhatsApp(currentLanguage === 'fa' ? 'مشاوره عمومی' : 'General consultation')}
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