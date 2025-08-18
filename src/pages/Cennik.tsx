import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle } from 'lucide-react';

const Cennik = () => {
  const services = [
    {
      category: "Zabiegi Pielęgnacyjne - Twarz",
      services: [
        {
          title: "Interactive System",
          description: "Zabieg wyrowujący, bio stymulujący, antyoksydacyjny",
          duration: "60-90 min",
          price: "350 - 400 zł",
          popular: true,
          benefits: ["Bio stymulacja", "Antyoksydacja", "Wyrównanie"]
        },
        {
          title: "Interactive System",
          description: "Zabieg odbudowujący",
          duration: "60-90 min",
          price: "350 - 400 zł",
          popular: false,
          benefits: ["Odbudowa", "Regeneracja", "Odmłodzenie"]
        },
        {
          title: "Interactive System",
          description: "Zabieg regenerujący, ujędrniający, antyoksydacyjny",
          duration: "60-90 min",
          price: "350 - 400 zł",
          popular: false,
          benefits: ["Regeneracja", "Ujędrnienie", "Antyoksydacja"]
        },
        {
          title: "Revinol",
          description: "Zabieg rewitalizujący, wygładzający z retinolem i wit. C",
          duration: "60 min",
          price: "350 - 400 zł",
          popular: false,
          benefits: ["Rewitalizacja", "Wygładzenie", "Witamina C"]
        },
        {
          title: "Firmin",
          description: "Zabieg liftingujący z efektem napięcia",
          duration: "60 min",
          price: "350 - 400 zł",
          popular: false,
          benefits: ["Lifting", "Napięcie", "Ujędrnienie"]
        },
        {
          title: "Boto Fill",
          description: "Bioaktywne odmłodzenie wokół oczu",
          duration: "45 min",
          price: "350 - 400 zł",
          popular: true,
          benefits: ["Odmłodzenie", "Wokół oczu", "Bioaktywność"]
        },
        {
          title: "Hydra",
          description: "Zabieg wyrównujący eksfoliację, nawilżający, wzmacniający barierę ochronną",
          duration: "60 min",
          price: "350 - 400 zł",
          popular: false,
          benefits: ["Nawilżenie", "Eksfoliacja", "Ochrona"]
        },
        {
          title: "Hydra Diamond Facial",
          description: "Zabieg wieloetapowy (hydrabrazja, mezoterapia bezigiełka, infuzja tlenowa, masaż próżniowy, rf)",
          duration: "90 min",
          price: "450 zł",
          popular: true,
          benefits: ["Hydrabrazja", "Mezoterapia", "Infuzja tlenowa"]
        },
        {
          title: "Peeling Kawitacyjny - twarz",
          description: "Delikatne oczyszczenie ultradźwiękowe",
          duration: "45 min",
          price: "230 zł",
          popular: false,
          benefits: ["Oczyszczenie", "Ultradźwięki", "Delikatność"]
        },
        {
          title: "Peeling Kawitacyjny - twarz, szyja, dekolt",
          description: "Kompleksowe oczyszczenie ultradźwiękowe",
          duration: "60 min",
          price: "280 zł",
          popular: false,
          benefits: ["Kompleksowość", "Ultradźwięki", "Rozszerzony obszar"]
        },
        {
          title: "Oczyszczanie Kompleksowe - twarz",
          description: "Profesjonalne oczyszczenie skóry twarzy",
          duration: "60 min",
          price: "300 zł",
          popular: false,
          benefits: ["Głębokie oczyszczenie", "Profesjonalizm", "Kompleksowość"]
        },
        {
          title: "Oczyszczanie manualne - twarz",
          description: "Tradycyjne oczyszczenie ręczne",
          duration: "60 min",
          price: "280 zł",
          popular: false,
          benefits: ["Tradycyjna metoda", "Precyzja", "Indywidualne podejście"]
        }
      ]
    },
    {
      category: "Zabiegi Specjalistyczne - Twarz",
      services: [
        {
          title: "Infuzja tlenowa",
          description: "Tlenowanie skóry dla świeżego wyglądu",
          duration: "30 min",
          price: "150 zł",
          popular: false,
          benefits: ["Dotlenienie", "Świeżość", "Regeneracja"]
        },
        {
          title: "Mikrodermabrazja wodna",
          description: "Złuszczanie z wykorzystaniem wody",
          duration: "60 min",
          price: "450 zł",
          popular: false,
          benefits: ["Złuszczanie", "Delikatność", "Odnowa"]
        },
        {
          title: "Akupunktura twarzy kosmetyczna",
          description: "Naturalne odmłodzenie metodą akupunktury",
          duration: "60 min",
          price: "300 - 400 zł",
          popular: true,
          benefits: ["Naturalne", "Odmłodzenie", "Tradycyjna metoda"]
        },
        {
          title: "Mezoterapia skóry głowy",
          description: "W zależności od preparatu",
          duration: "45 min",
          price: "300 - 900 zł",
          popular: true,
          benefits: ["Indywidualny dobór", "Skuteczność", "Regeneracja"]
        },
        {
          title: "Radiofrekwencja -RF-lifting",
          description: "Zabiegi na twarz, ciało, różne obszary",
          duration: "45-60 min",
          price: "200 - 400 zł",
          popular: false,
          benefits: ["Lifting", "Uniwersalność", "Nowoczesność"]
        }
      ]
    },
    {
      category: "Masaże",
      services: [
        {
          title: "Kobido",
          description: "Japoński masaż twarzy",
          duration: "60 min",
          price: "250 zł",
          popular: true,
          benefits: ["Tradycyjna technika", "Lifting naturalny", "Relaksacja"]
        },
        {
          title: "Kobido + ampułka + maska",
          description: "Rozszerzony masaż japoński z pielęgnacją",
          duration: "75 min",
          price: "350 zł",
          popular: true,
          benefits: ["Kompleksowa pielęgnacja", "Intensywne nawilżenie", "Maksymalny efekt"]
        },
        {
          title: "Masaż pleców Breussa",
          description: "Ciepłym olejem z dziurawca",
          duration: "45 min",
          price: "150 zł",
          popular: false,
          benefits: ["Rozluźnienie", "Ciepło", "Regeneracja"]
        },
        {
          title: "Masaż gorącymi kamieniami",
          description: "Relaksacyjny masaż z wykorzystaniem kamieni",
          duration: "60 min",
          price: "250 zł",
          popular: false,
          benefits: ["Głęboka relaksacja", "Ciepło", "Detoks"]
        },
        {
          title: "Masaż onkologiczny Dotyk Motyla",
          description: "Specjalistyczny masaż dla pacjentów onkologicznych",
          duration: "45 min",
          price: "250 zł",
          popular: false,
          benefits: ["Specjalistyczny", "Delikatność", "Wsparcie"]
        },
        {
          title: "Masaż antycellulitowy rolkowo - próżniowy",
          description: "Skuteczny masaż na cellulit",
          duration: "60 min",
          price: "400 zł",
          popular: false,
          benefits: ["Antycellulitowy", "Modelowanie", "Poprawa krążenia"]
        },
        {
          title: "Drenaż limfatyczny",
          description: "Masaż wspomagający limfę",
          duration: "60 min",
          price: "200 - 300 zł",
          popular: false,
          benefits: ["Detoks", "Odwodnienie", "Poprawa krążenia"]
        }
      ]
    },
    {
      category: "Terapia Wodorem Molekularnym",
      services: [
        {
          title: "Inhalacja wodorem - 30min",
          description: "Krótka sesja terapii wodorowej",
          duration: "30 min",
          price: "70 zł",
          popular: false,
          benefits: ["Antyoksydacja", "Energia", "Detoks"]
        },
        {
          title: "Inhalacja wodorem - 60min",
          description: "Standardowa sesja terapii wodorowej",
          duration: "60 min",
          price: "110 zł",
          popular: true,
          benefits: ["Pełna regeneracja", "Antyoksydacja", "Energia"]
        },
        {
          title: "Inhalacja wodorem + piezo Mist + terapia światłem",
          description: "Kompleksowa terapia 60min",
          duration: "60 min",
          price: "300 zł",
          popular: true,
          benefits: ["Kompleksowa terapia", "Nawilżenie", "Regeneracja światłem"]
        },
        {
          title: "Terapia światłem Zemits Lumi Better - twarz",
          description: "Fototerapia twarzy (15min)",
          duration: "15 min",
          price: "100 zł",
          popular: false,
          benefits: ["Fototerapia", "Odmłodzenie", "Szybkość"]
        },
        {
          title: "Terapia światłem Zemits Lumi Better - ciało",
          description: "Fototerapia ciała (20min)",
          duration: "20 min",
          price: "120 zł",
          popular: false,
          benefits: ["Fototerapia", "Regeneracja", "Obszar ciała"]
        }
      ]
    },
    {
      category: "Trychologia Kosmetologiczna",
      services: [
        {
          title: "Konsultacja Trychologiczna",
          description: "Trichoskopia, wywiad funkcjonalny organizmu, plan terapii trychologicznej",
          duration: "45 min",
          price: "200 zł",
          popular: false,
          benefits: ["Analiza", "Plan terapii", "Diagnostyka"]
        },
        {
          title: "Terapia profilaktyczna",
          description: "Zapobieganie problemom skóry głowy",
          duration: "45 min",
          price: "300 zł",
          popular: false,
          benefits: ["Profilaktyka", "Wzmocnienie", "Ochrona"]
        },
        {
          title: "Terapia na procesy złuszczające",
          description: "Leczenie łupieżu i złuszczania",
          duration: "45 min",
          price: "300 zł",
          popular: false,
          benefits: ["Przeciwłupieżowa", "Normalizacja", "Łagodzenie"]
        },
        {
          title: "Terapia na procesy łojotokowe",
          description: "Regulacja wydzielania sebum",
          duration: "45 min",
          price: "300 zł",
          popular: false,
          benefits: ["Regulacja sebum", "Normalizacja", "Oczyszczenie"]
        },
        {
          title: "Terapia nawilżająca skórę głowy",
          description: "Intensywne nawilżenie i odżywienie",
          duration: "45 min",
          price: "300 zł",
          popular: false,
          benefits: ["Nawilżenie", "Odżywienie", "Komfort"]
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
          price: "Bezpłatna przy umówieniu zabiegu",
          popular: true,
          benefits: ["Analiza skóry", "Plan pielęgnacji", "Dobór zabiegów"]
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
                <p>• Dodatki: maska +20 zł, ampułka od +30 zł</p>
                <p>• Pakiety zabiegów dostępne po wcześniejszej konsultacji</p>
                <p>• Wszystkie ceny zawierają kompleksową obsługę i doradztwo</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cennik;