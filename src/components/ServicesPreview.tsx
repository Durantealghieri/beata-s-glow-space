import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Clock, Star } from 'lucide-react';
import beautyProducts from '@/assets/beauty-products.jpg';
const ServicesPreview: React.FC = () => {
  const featuredServices = [{
    title: "Oczyszczanie Głębokie Wodorem",
    description: "Innowacyjny zabieg oczyszczający z wykorzystaniem technologii wodorowej, idealny dla skóry problematycznej i skłonnej do niedoskonałości.",
    duration: "90 min",
    price: "250 zł",
    popular: true,
    benefits: ["Głębokie oczyszczenie", "Redukcja porów", "Nawilżenie"]
  }, {
    title: "Mezoterapia Igłowa",
    description: "Profesjonalny zabieg anti-aging z wykorzystaniem koktajlu witamin i kwasu hialuronowego dla młodego wyglądu skóry.",
    duration: "60 min",
    price: "320 zł",
    popular: false,
    benefits: ["Wygładzenie zmarszczek", "Odmłodzenie", "Ujędrnienie"]
  }, {
    title: "Peeling Kwasowy PRX-T33",
    description: "Włoski peeling bez złuszczania - rewolucyjna formuła dla natychmiastowego efektu liftingu i rozświetlenia.",
    duration: "45 min",
    price: "180 zł",
    popular: true,
    benefits: ["Lifting bez skalpela", "Rozświetlenie", "Wygładzenie"]
  }];
  return <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Nasze Specjalistyczne Zabiegi
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesjonalna kosmetologia z wykorzystaniem najnowocześniejszych technologii i najwyższej jakości produktów
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img src={beautyProducts} alt="Profesjonalne produkty kosmetyczne" className="w-full h-96 object-cover rounded-2xl shadow-card" />
            <div className="absolute inset-0 bg-gradient-to-br from-salon-rose/20 to-transparent rounded-2xl" />
            <div className="absolute top-6 left-6">
              
            </div>
          </div>

          <div className="space-y-6">
            {featuredServices.map((service, index) => <Card key={index} className="relative group hover:shadow-hover transition-all duration-300">
                {service.popular && <div className="absolute -top-2 -right-2 z-10">
                    <Badge className="bg-salon-rose text-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Popularne
                    </Badge>
                  </div>}
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-lg group-hover:text-salon-rose transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                    <div className="text-right ml-4">
                      <div className="font-semibold text-lg text-salon-rose">
                        {service.price}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.benefits.map((benefit, idx) => <Badge key={idx} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>)}
                  </div>
                </CardContent>
              </Card>)}

            <div className="pt-6">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/zabiegi">
                  Zobacz wszystkie zabiegi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesPreview;