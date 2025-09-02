import { useLanguage } from "@/hooks/useLanguage";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Testimonials = () => {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: "محمد رضا احمدی",
      company: "نساجی پارس",
      rating: 5,
      content: "testimonials.content1"
    },
    {
      id: 2,
      name: "فاطمه کریمی",
      company: "صنایع نساجی آریا",
      rating: 5,
      content: "testimonials.content2"
    },
    {
      id: 3,
      name: "علی موسوی",
      company: "کارخانه فرش ماشینی رویا",
      rating: 5,
      content: "testimonials.content3"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl industrial-text max-w-3xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-industrial p-6 relative hover:scale-105 transition-transform duration-300">
              <div className="absolute top-4 left-4 text-primary opacity-20">
                <Quote className="h-8 w-8" />
              </div>
              
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="industrial-text mb-6 text-lg leading-relaxed">
                "{t(testimonial.content)}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold industrial-heading text-lg">
                  {testimonial.name}
                </div>
                <div className="text-primary font-medium">
                  {testimonial.company}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10+</div>
            <div className="industrial-text">{t('testimonials.yearsExperience')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">150+</div>
            <div className="industrial-text">{t('testimonials.satisfiedCustomers')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="industrial-text">{t('testimonials.machinesDelivered')}</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="industrial-text">{t('testimonials.customerSatisfaction')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};