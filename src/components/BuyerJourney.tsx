import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Wrench, 
  ShoppingCart, 
  Users, 
  ArrowRight,
  Phone,
  FileText,
  MessageCircle
} from "lucide-react";

export const BuyerJourney = () => {
  const { t } = useLanguage();

  const journeys = [
    {
      type: "New Customer",
      icon: Building2,
      color: "bg-blue-500",
      description: "First-time textile machinery buyer looking for reliable solutions",
      needs: ["Product overview", "Quality assurance", "Pricing information"],
      cta: "Start Your Journey",
      action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      type: "Design Engineer", 
      icon: Wrench,
      color: "bg-green-500",
      description: "Technical professional seeking detailed specifications and customization",
      needs: ["Technical specs", "CAD drawings", "Customization options"],
      cta: "View Technical Details",
      action: () => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      type: "Procurement Manager",
      icon: ShoppingCart, 
      color: "bg-orange-500",
      description: "Decision maker comparing suppliers and negotiating terms",
      needs: ["Bulk pricing", "Delivery terms", "Support packages"],
      cta: "Request Quote",
      action: () => window.open('https://wa.me/+989133629006?text=Request for bulk pricing and procurement details', '_blank')
    },
    {
      type: "Sales Representative",
      icon: Users,
      color: "bg-purple-500", 
      description: "Partner or distributor looking to represent TEXOR products",
      needs: ["Partnership terms", "Training materials", "Sales support"],
      cta: "Partner With Us",
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    }
  ];

  const quickActions = [
    {
      icon: FileText,
      title: "Download Catalog",
      description: "Complete product specifications and features",
      action: () => window.open('#', '_blank')
    },
    {
      icon: Phone,
      title: "Schedule Consultation", 
      description: "Free technical consultation with our experts",
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Support",
      description: "Instant answers to your questions",
      action: () => window.open('https://wa.me/+989133629006', '_blank')
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Find Your Path
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            Choose Your <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a new customer, engineer, procurement manager, or potential partner, 
            we have the right path to help you succeed with TEXOR solutions.
          </p>
          <div className="divider-premium mt-8"></div>
        </div>

        {/* Journey Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {journeys.map((journey, index) => {
            const IconComponent = journey.icon;
            return (
              <Card 
                key={index}
                className="card-industrial group hover:border-primary/20 cursor-pointer transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={journey.action}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${journey.color} text-white mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-lg font-semibold industrial-heading group-hover:text-primary transition-colors">
                    {journey.type}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {journey.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-medium text-primary mb-2">What you need:</div>
                    {journey.needs.map((need, needIndex) => (
                      <div key={needIndex} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2"></div>
                        {need}
                      </div>
                    ))}
                  </div>

                  <Button 
                    className="w-full btn-industrial text-sm group-hover:bg-primary group-hover:text-white"
                    variant="outline"
                    onClick={(e) => {
                      e.stopPropagation();
                      journey.action();
                    }}
                  >
                    {journey.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-gradient-steel rounded-2xl p-8 border border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 industrial-heading">
              Quick Actions
            </h3>
            <p className="text-muted-foreground">
              Get immediate access to the resources you need
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <div 
                  key={index}
                  className="text-center group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={action.action}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {action.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {action.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};