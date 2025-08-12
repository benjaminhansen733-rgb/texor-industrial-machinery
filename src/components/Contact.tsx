import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/useLanguage";
import { Phone, Globe, Instagram, MessageCircle, Mail, Send, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { t, currentLanguage } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      label: t('contact.phone'),
      value: '09133629006',
      link: 'tel:+989133629006'
    },
    {
      icon: Globe,
      label: t('contact.website'),
      value: 'www.texorco.com',
      link: 'https://www.texorco.com'
    },
    {
      icon: Instagram,
      label: t('contact.instagram'),
      value: '@texorco',
      link: 'https://instagram.com/texorco'
    },
    {
      icon: MessageCircle,
      label: t('contact.whatsapp'),
      value: 'واتساپ',
      link: 'https://wa.me/+989133629006'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const header = t('contact.whatsappHeader');
    const message = `
${header}

${t('contact.form.name')}: ${formData.name}
${t('contact.form.email')}: ${formData.email}
${t('contact.form.phone')}: ${formData.phone}
${t('contact.form.subject')}: ${formData.subject}

${t('contact.form.message')}:
${formData.message}
    `.trim();

    window.open(`https://wa.me/+989133629006?text=${encodeURIComponent(message)}`, '_blank');
    
    toast({
      title: t('contact.toast.sentTitle'),
      description: t('contact.toast.sentDesc'),
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            {t('contact.title')}
          </h2>
          <p className="text-xl industrial-text max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 industrial-heading">
                {t('contact.infoTitle')}
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card key={index} className="card-industrial p-4 hover:scale-105 transition-transform duration-200">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-12 h-12 bg-gradient-industrial rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <div className="font-medium industrial-heading">
                            {item.label}
                          </div>
                          <div className="text-primary font-mono">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Company Info */}
            <Card className="card-industrial p-6">
              <h4 className="text-xl font-bold mb-4 industrial-heading">
                {t('contact.address')}
              </h4>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="industrial-text">
                  <p className="font-medium mb-2">{t('footer.company')}</p>
                  <p>{t('footer.brand')}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {t('contact.workingHours')}: {t('contact.workingHoursText')}
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="card-industrial p-6">
            <h3 className="text-2xl font-bold mb-6 industrial-heading">
              {t('contact.formTitle')}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 industrial-heading">
                    {t('contact.form.name')} *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="border-border focus:ring-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 industrial-heading">
                    {t('contact.form.phone')} *
                  </label>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border-border focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 industrial-heading">
                  {t('contact.form.email')}
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="border-border focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 industrial-heading">
                  {t('contact.form.subject')} *
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="border-border focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 industrial-heading">
                  {t('contact.form.message')} *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="border-border focus:ring-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-industrial text-lg"
                size="lg"
              >
                <Send className="h-5 w-5 mr-2" />
                {t('contact.form.send')}
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                {t('contact.form.note')}
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};