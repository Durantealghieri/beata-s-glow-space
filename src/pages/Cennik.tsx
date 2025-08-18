import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle } from 'lucide-react';

const Cennik = () => {
  const services = [
    {
      category: "Zabiegi na twarz",
      services: [
        {
          title: "Oczyszczanie Głębokie Wodorem",
          description: "Innowacyjny zabieg oczyszczający z wykorzystaniem technologii wodorowej",
          duration: "90 min",
          price: "250 zł",
          popular: true,
          benefits: ["Głębokie oczyszczenie", "Redukcja porów", "Nawilżenie"]
        },
        {
          title: "Mezoterapia Igłowa",
          description: "Profesjonalny zabieg anti-aging z wykorzystaniem koktajlu witamin",
          duration: "60 min", 
          price: "320 zł",
          popular: false,
          benefits: ["Wygładzenie zmarszczek", "Odmłodzenie", "Ujędrnienie"]
        },
        {
          title: "Peeling Kwasowy PRX-T33",
          description: "Włoski peeling bez złuszczania - rewolucyjna formuła",
          duration: "45 min",
          price: "180 zł", 
          popular: true,
          benefits: ["Lifting bez skalpela", "Rozświetlenie", "Wygładzenie"]
        },
        {
          title: "Klasyczne oczyszczanie manualne",
          description: "Tradycyjne oczyszczanie skóry z ekstrakcją zaskórników",
          duration: "60 min",
          price: "120 zł",
          popular: false,
          benefits: ["Oczyszczenie porów", "Złuszczanie", "Nawilżenie"]
        },
        {
          title: "Mikrodermabrazja diamentowa",
          description: "Mechaniczne złuszczanie naskórka dla gładkiej skóry",
          duration: "45 min",
          price: "150 zł",
          popular: false,
          benefits: ["Wygładzenie", "Poprawa tekstury", "Rozświetlenie"]
        }
      ]
    },
    {
      category: "Pielęgnacja ciała",
      services: [
        {
          title: "Masaż relaksacyjny całego ciała",
          description: "Odprężający masaż dla regeneracji organizmu",
          duration: "60 min",
          price: "200 zł",
          popular: false,
          benefits: ["Relaksacja", "Poprawa krążenia", "Redukcja stresu"]
        },
        {
          title: "Peeling ciała",
          description: "Złuszczanie martłego naskórka na całym ciele",
          duration: "45 min",
          price: "130 zł",
          popular: false,
          benefits: ["Wygładzenie", "Nawilżenie", "Poprawa elastyczności"]
        }
      ]
    },
    {
      category: "Konsultacje",
      services: [
        {
          title: "Konsultacja kosmetologiczna",
          description: "Analiza skóry i dobór odpowiednich zabiegów",
          duration: "30 min",
          price: "80 zł",
          popular: false,
          benefits: ["Analiza skóry", "Plan pielęgnacji", "Dobór zabiegów"]
        },
        {
          title: "Konsultacja trychologiczna",
          description: "Badanie skóry głowy i dobór terapii",
          duration: "45 min",
          price: "100 zł",
          popular: false,
          benefits: ["Analiza skóry głowy", "Plan leczenia", "Dobór preparatów"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="cennik" />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Cennik Zabiegów
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesjonalne zabiegi kosmetologiczne w przystępnych cenach. 
              Każdy zabieg wykonywany jest z najwyższą starannością i przy użyciu wysokiej jakości produktów.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
                  {category.category}
                </h2>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, index) => (
                    <Card key={index} className="relative group hover:shadow-hover transition-all duration-300">
                      {service.popular && (
                        <div className="absolute -top-2 -right-2 z-10">
                          <Badge className="bg-salon-rose text-foreground">
                            <Star className="h-3 w-3 mr-1" />
                            Popularne
                          </Badge>
                        </div>
                      )}
                      
                      <CardHeader className="pb-4">
                        <CardTitle className="text-lg group-hover:text-salon-rose transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="font-semibold text-xl text-salon-rose">
                            {service.price}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <div key={idx} className="flex items-center text-xs text-muted-foreground">
                              <CheckCircle className="h-3 w-3 mr-2 text-salon-rose" />
                              {benefit}
                            </div>
                          ))}
                        </div>
                        
                        <Button className="w-full mt-4" size="sm">
                          Umów wizytę
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-salon-cream rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Informacje dodatkowe
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Ceny mogą ulec zmianie w zależności od indywidualnych potrzeb</p>
                <p>• Konsultacja wstępna jest bezpłatna przy umówieniu zabiegu</p>
                <p>• Możliwość dopłaty za dodatkowe usługi i produkty</p>
                <p>• Pakiety zabiegów dostępne po wcześniejszej konsultacji</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cennik;