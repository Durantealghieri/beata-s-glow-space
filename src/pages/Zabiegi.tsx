import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Clock, Star, ArrowRight } from 'lucide-react';

const Zabiegi: React.FC = () => {
  const serviceCategories = [
    {
      id: 'trychologia',
      title: 'Trychologia Kosmetologiczna',
      description: 'Specjalistyczne zabiegi dla zdrowia włosów i skóry głowy',
      services: [
        {
          title: "Mezoterapia Skóry Głowy",
          description: "Wstrzykiwanie koktajlu witamin bezpośrednio w skórę głowy dla pobudzenia wzrostu włosów.",
          duration: "60 min",
          price: "350 zł",
          popular: true,
          benefits: ["Pobudzenie wzrostu", "Wzmocnienie cebulek", "Redukcja wypadania"]
        },
        {
          title: "Peeling Skóry Głowy",
          description: "Głębokie oczyszczenie i złuszczanie martwych komórek skóry głowy.",
          duration: "45 min",
          price: "150 zł",
          popular: false,
          benefits: ["Oczyszczenie", "Detoks", "Lepsze ukrwienie"]
        }
      ]
    },
    {
      id: 'masaze',
      title: 'Masaże',
      description: 'Relaksacyjne i terapeutyczne masaże ciała i twarzy',
      services: [
        {
          title: "Masaż Kobido",
          description: "Tradycyjny japoński masaż twarzy dla naturalnego liftingu i relaksu.",
          duration: "75 min",
          price: "280 zł",
          popular: true,
          benefits: ["Lifting naturalny", "Relaksacja", "Poprawa krążenia"]
        },
        {
          title: "Masaż Całego Ciała",
          description: "Głęboko relaksujący masaż całego ciała z wykorzystaniem naturalnych olejów.",
          duration: "90 min",
          price: "320 zł",
          popular: false,
          benefits: ["Głęboka relaksacja", "Detoks", "Poprawa samopoczucia"]
        }
      ]
    },
    {
      id: 'zabiegi-twarz',
      title: 'Zabiegi na Twarz',
      description: 'Profesjonalne zabiegi kosmetologiczne dla skóry twarzy',
      services: [
        {
          title: "Oczyszczanie Głębokie Wodorem",
          description: "Innowacyjny zabieg oczyszczający z wykorzystaniem technologii wodorowej.",
          duration: "90 min",
          price: "250 zł",
          popular: true,
          benefits: ["Głębokie oczyszczenie", "Redukcja porów", "Nawilżenie"]
        },
        {
          title: "Mezoterapia Igłowa",
          description: "Profesjonalny zabieg anti-aging z wykorzystaniem koktajlu witamin.",
          duration: "60 min", 
          price: "320 zł",
          popular: false,
          benefits: ["Wygładzenie zmarszczek", "Odmłodzenie", "Ujędrnienie"]
        },
        {
          title: "Peeling Kwasowy PRX-T33",
          description: "Włoski peeling bez złuszczania - rewolucyjna formuła dla natychmiastowego efektu liftingu.",
          duration: "45 min",
          price: "180 zł", 
          popular: true,
          benefits: ["Lifting bez skalpela", "Rozświetlenie", "Wygładzenie"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="zabiegi" />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Nasze Zabiegi
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Profesjonalna kosmetologia z wykorzystaniem najnowocześniejszych technologii i najwyższej jakości produktów
            </p>
          </div>

          <div className="space-y-16">
            {serviceCategories.map((category) => (
              <section key={category.id} id={category.id} className="scroll-mt-20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                    {category.description}
                  </p>
                </div>

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
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-salon-rose transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center mb-4">
                          <div className="font-semibold text-lg text-salon-rose">
                            {service.price}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {service.duration}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.benefits.map((benefit, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {benefit}
                            </Badge>
                          ))}
                        </div>
                        <Button className="w-full" size="sm">
                          Umów wizytę
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>Tel: +48 695 452 442</span>
            <span>•</span>
            <span>beatachlebna@wp.pl</span>
            <span>•</span>
            <span>ul. Piękna 15, Warszawa</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Zabiegi;