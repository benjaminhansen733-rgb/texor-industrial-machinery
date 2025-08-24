import { useLanguage } from "@/hooks/useLanguage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Star,
  Building,
  Users,
  Clock,
  CheckCircle
} from "lucide-react";

export const CaseStudies = () => {
  const { t } = useLanguage();

  const caseStudies = [
    {
      company: "Isfahan Textile Industries",
      logo: "IT",
      location: "Isfahan, Iran",
      industry: "Industrial Textiles",
      projectDate: "2023",
      challenge: "Needed to upgrade 50 old bobbin winding machines with frequent thread breakage issues",
      solution: "Installed 50 units of TEXOR Traversing Bobbin Winders with advanced control systems", 
      results: [
        "95% reduction in thread breakage",
        "40% increase in production efficiency", 
        "60% reduction in maintenance costs",
        "ROI achieved in 8 months"
      ],
      testimonial: "TEXOR's solutions transformed our production line. The reduction in thread breakage and increased efficiency exceeded our expectations.",
      customerName: "Ahmad Rezaei",
      customerRole: "Production Manager",
      rating: 5,
      image: "/api/placeholder/400/300"
    },
    {
      company: "Turkish Carpet Manufacturing Co.", 
      logo: "TC",
      location: "Istanbul, Turkey",
      industry: "Carpet Manufacturing",
      projectDate: "2023",
      challenge: "Required specialized lacquering equipment for premium carpet yarn production",
      solution: "Deployed 25 units of TEXOR Traversing Lacquer Machines with precision thickness control",
      results: [
        "Uniform coating quality achieved",
        "30% faster production cycles",
        "25% reduction in material waste",
        "Premium quality certification obtained"
      ],
      testimonial: "The precision and consistency of TEXOR lacquer machines helped us achieve premium quality standards for export markets.",
      customerName: "Mehmet Özkan", 
      customerRole: "Quality Director",
      rating: 5,
      image: "/api/placeholder/400/300"
    },
    {
      company: "Gulf Textile Solutions",
      logo: "GS", 
      location: "Dubai, UAE",
      industry: "Technical Textiles",
      projectDate: "2024",
      challenge: "Expanding production capacity for high-performance technical yarns",
      solution: "Complete production line setup with 75 TEXOR machines and automation systems",
      results: [
        "300% increase in production capacity",
        "International quality standards met",
        "24/7 operation capability achieved", 
        "Export to 15 countries established"
      ],
      testimonial: "TEXOR's comprehensive solution enabled us to enter new markets and achieve international quality standards.",
      customerName: "Sarah Al-Mahmoud",
      customerRole: "Operations Director", 
      rating: 5,
      image: "/api/placeholder/400/300"
    }
  ];

  const stats = [
    { icon: Building, number: "150+", label: "Companies Served" },
    { icon: Users, number: "500+", label: "Satisfied Customers" },
    { icon: Clock, number: "99.5%", label: "Uptime Reliability" },
    { icon: TrendingUp, number: "40%", label: "Avg. Efficiency Gain" }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 text-primary border-primary/20">
            Success Stories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 industrial-heading">
            Real Results from <span className="text-gradient">Real Customers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See how leading textile manufacturers have transformed their operations 
            with TEXOR's advanced machinery solutions.
          </p>
          <div className="divider-premium mt-8"></div>
        </div>

        {/* Case Studies */}
        <div className="space-y-12 mb-20">
          {caseStudies.map((study, index) => (
            <Card 
              key={index}
              className="card-premium overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16 border-2 border-primary/20">
                        <AvatarFallback className="bg-primary text-white text-xl font-bold">
                          {study.logo}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-2xl font-bold industrial-heading">
                          {study.company}
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {study.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {study.projectDate}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      {study.industry}
                    </Badge>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-3">Results</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {study.results.map((result, resultIndex) => (
                            <div key={resultIndex} className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-success flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{result}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-secondary/50 rounded-lg p-6 border-l-4 border-primary">
                        <div className="flex mb-2">
                          {[...Array(study.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-3 leading-relaxed">
                          "{study.testimonial}"
                        </p>
                        <div className="text-sm">
                          <div className="font-semibold">{study.customerName}</div>
                          <div className="text-muted-foreground">{study.customerRole}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </div>

                {/* Image */}
                <div className="relative bg-gradient-steel">
                  <div className="absolute inset-0 bg-primary/5"></div>
                  <div className="relative h-full min-h-[400px] flex items-center justify-center p-12">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                        <Building className="h-16 w-16 text-primary" />
                      </div>
                      <div className="text-lg font-semibold mb-2">{study.company}</div>
                      <div className="text-sm text-muted-foreground">{study.industry}</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div 
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <IconComponent className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button 
            className="btn-premium px-8 py-3"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Start Your Success Story
          </Button>
        </div>
      </div>
    </section>
  );
};