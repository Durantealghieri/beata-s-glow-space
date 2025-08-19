import React from 'react';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Star, CheckCircle } from 'lucide-react';

const Cennik = () => {
  const services = [
    {
      category: "TRYCHOLOGIA KOSMETOLOGICZNA",
      services: [
        {
          title: "Konsultacja Trychologiczna",
          description: "Profesjonalna konsultacja dotycząca problemów skóry głowy i włosów",
          duration: "45 min",
          price: "200 zł",
          popular: false,
          benefits: ["Analiza problemów", "Plan terapii", "Profesjonalne doradztwo"]
        },
        {
          title: "Mezoterapia skóry głowy",
          description: "Zaawansowana terapia regeneracyjna",
          duration: "60 min",
          price: "300-900 zł",
          popular: true,
          benefits: ["Regeneracja", "Stymulacja wzrostu", "Odżywienie"]
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
          description: "Specjalistyczne leczenie łupieżu i problemów złuszczania",
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
          description: "Intensywne nawilżenie i odżywienie skóry głowy",
          duration: "45 min",
          price: "300 zł",
          popular: false,
          benefits: ["Nawilżenie", "Odżywienie", "Komfort"]
        }
      ]
    },
    {
      category: "MASAŻE",
      services: [
        {
          title: "Kobido",
          description: "Tradycyjny japoński masaż twarzy",
          duration: "60 min",
          price: "250 zł",
          popular: true,
          benefits: ["Lifting naturalny", "Relaksacja", "Tradycyjna technika"]
        },
        {
          title: "Kobido + ampułka + maska",
          description: "Rozszerzony masaż kobido z dodatkowymi zabiegami",
          duration: "75 min",
          price: "350 zł",
          popular: true,
          benefits: ["Kompleksowa pielęgnacja", "Intensywne nawilżenie", "Maksymalny efekt"]
        },
        {
          title: "Masaż pleców Breussa",
          description: "Terapeutyczny masaż pleców",
          duration: "45 min",
          price: "150 zł",
          popular: false,
          benefits: ["Rozluźnienie", "Terapia bólu", "Regeneracja"]
        },
        {
          title: "Masaż gorącymi kamieniami",
          description: "Relaksacyjny masaż z wykorzystaniem kamieni bazaltowych",
          duration: "60 min",
          price: "250 zł",
          popular: false,
          benefits: ["Głęboka relaksacja", "Ciepło terapeutyczne", "Detoks"]
        },
        {
          title: "Masaż onkologiczny Dotyk Motyla",
          description: "Specjalistyczny delikatny masaż dla pacjentów onkologicznych",
          duration: "45 min",
          price: "250 zł",
          popular: false,
          benefits: ["Specjalistyczny", "Delikatność", "Wsparcie terapeutyczne"]
        },
        {
          title: "Masaż próżniowy ciała",
          description: "Masaż z wykorzystaniem techniki próżniowej",
          duration: "60 min",
          price: "450 zł",
          popular: false,
          benefits: ["Modelowanie sylwetki", "Poprawa krążenia", "Redukcja cellulitu"]
        },
        {
          title: "Masaż antycellulitowy rolkowo-próżniowy",
          description: "Specjalistyczny masaż na cellulit",
          duration: "60 min",
          price: "400 zł",
          popular: false,
          benefits: ["Antycellulitowy", "Modelowanie", "Poprawa krążenia"]
        },
        {
          title: "Drenaż limfatyczny",
          description: "Masaż wspomagający system limfatyczny",
          duration: "60 min",
          price: "200-300 zł",
          popular: false,
          benefits: ["Detoks", "Odwodnienie", "Poprawa krążenia"]
        },
        {
          title: "Liftingujący masaż (twarzy, szyi, dekoltu)",
          description: "Masaż modelujący rysy twarzy",
          duration: "60 min",
          price: "350 zł",
          popular: true,
          benefits: ["Lifting", "Modelowanie", "Ujędrnienie"]
        }
      ]
    },
    {
      category: "TERAPIA WODOREM MOLEKULARNYM + MASKA Z FUNKCJĄ ROZPYLANIA",
      services: [
        {
          title: "Inhalacja wodorem 30min",
          description: "Krótka sesja terapii wodorowej",
          duration: "30 min",
          price: "70 zł",
          popular: false,
          benefits: ["Antyoksydacja", "Energia", "Detoks"]
        },
        {
          title: "Inhalacja wodorem 60min",
          description: "Standardowa sesja terapii wodorowej",
          duration: "60 min",
          price: "110 zł",
          popular: true,
          benefits: ["Pełna regeneracja", "Antyoksydacja", "Energia"]
        },
        {
          title: "Inhalacja + piezo Mist + terapia światłem 60min",
          description: "Kompleksowa terapia wodorowa z dodatkami",
          duration: "60 min",
          price: "300 zł",
          popular: true,
          benefits: ["Kompleksowa terapia", "Nawilżenie", "Regeneracja światłem"]
        },
        {
          title: "Terapia światłem Zemits Lumi Better twarz (15min)",
          description: "Krótka sesja fototerapii twarzy",
          duration: "15 min",
          price: "100 zł",
          popular: false,
          benefits: ["Fototerapia", "Odmłodzenie", "Szybkość"]
        },
        {
          title: "Terapia światłem Zemits Lumi Better ciało (20min)",
          description: "Sesja fototerapii dla ciała",
          duration: "20 min",
          price: "120 zł",
          popular: false,
          benefits: ["Fototerapia ciała", "Regeneracja", "Terapia światłem"]
        }
      ]
    },
    {
      category: "KOSMETOLOGIA ONKOLOGICZNA",
      services: [
        {
          title: "Zabieg twarz",
          description: "Specjalistyczny zabieg dla pacjentów onkologicznych - twarz",
          duration: "60 min",
          price: "300 zł",
          popular: false,
          benefits: ["Specjalistyczny", "Delikatny", "Bezpieczny"]
        },
        {
          title: "Zabieg ciało",
          description: "Specjalistyczny zabieg dla pacjentów onkologicznych - ciało",
          duration: "90 min",
          price: "500-600 zł",
          popular: false,
          benefits: ["Kompleksowa pielęgnacja", "Bezpieczeństwo", "Komfort"]
        },
        {
          title: "Zabieg skóra głowy",
          description: "Specjalistyczny zabieg dla skóry głowy pacjentów onkologicznych",
          duration: "45 min",
          price: "300 zł",
          popular: false,
          benefits: ["Łagodzenie", "Regeneracja", "Komfort"]
        }
      ]
    },
    {
      category: "MEZOTERAPIA MIKROIGŁOWA DERMAPEN",
      services: [
        {
          title: "Twarz",
          description: "Mezoterapia mikroigłowa twarzy",
          duration: "60 min",
          price: "600-1000 zł",
          popular: true,
          benefits: ["Regeneracja", "Stymulacja kolagenu", "Odmłodzenie"]
        },
        {
          title: "Twarz Egzosom u Bio Pulsacyjne",
          description: "Zaawansowana mezoterapia z egzosomami",
          duration: "60 min",
          price: "500 zł",
          popular: false,
          benefits: ["Nowoczesna technologia", "Regeneracja", "Skuteczność"]
        },
        {
          title: "Twarz, szyja, dekolt Egzosomy Bio Pulsacyjne",
          description: "Kompleksowa mezoterapia z egzosomami",
          duration: "90 min",
          price: "1000 zł",
          popular: true,
          benefits: ["Kompleksowa pielęgnacja", "Obszerne działanie", "Maksymalny efekt"]
        },
        {
          title: "Skóra głowy Egzosomy Bio Pulsacyjne",
          description: "Mezoterapia skóry głowy z egzosomami",
          duration: "45 min",
          price: "500 zł",
          popular: false,
          benefits: ["Regeneracja skóry głowy", "Stymulacja wzrostu", "Nowoczesność"]
        },
        {
          title: "Zabieg witaminowy twarz",
          description: "Mezoterapia witaminowa twarzy",
          duration: "60 min",
          price: "400 zł",
          popular: false,
          benefits: ["Odżywienie", "Witaminy", "Regeneracja"]
        },
        {
          title: "Zabieg witaminowy ciało",
          description: "Mezoterapia witaminowa ciała",
          duration: "90 min",
          price: "600-1000 zł",
          popular: false,
          benefits: ["Kompleksowe odżywienie", "Regeneracja całego ciała", "Witaminizacja"]
        }
      ]
    },
    {
      category: "ZABIEGI PIELĘGNACYJNE - TWARZ",
      services: [
        {
          title: "Interactive System (wyrównujący)",
          description: "Zabieg wyrównujący koloryt i teksturę skóry",
          duration: "60-90 min",
          price: "350-400 zł",
          popular: true,
          benefits: ["Wyrównanie kolorytu", "Poprawa tekstury", "Rozjaśnienie"]
        },
        {
          title: "Interactive System (odbudowujący)",
          description: "Zabieg odbudowujący strukturę skóry",
          duration: "60-90 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Odbudowa", "Regeneracja", "Wzmocnienie"]
        },
        {
          title: "Interactive System (regenerujący)",
          description: "Zabieg regenerujący i odmładzający",
          duration: "60-90 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Regeneracja", "Odmłodzenie", "Rewitalizacja"]
        },
        {
          title: "Revinol (retinol + vit C)",
          description: "Zabieg z retinolem i witaminą C",
          duration: "60 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Antyaging", "Witamina C", "Retinol"]
        },
        {
          title: "Firmin liftingujący",
          description: "Zabieg liftingujący z natychmiastowym efektem",
          duration: "60 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Lifting", "Ujędrnienie", "Natychmiastowy efekt"]
        },
        {
          title: "Boto Fill odmłodzenie wokół oczu",
          description: "Specjalistyczny zabieg na okolice oczu",
          duration: "45 min",
          price: "350-400 zł",
          popular: true,
          benefits: ["Odmłodzenie oczu", "Redukcja zmarszczek", "Ujędrnienie"]
        },
        {
          title: "Hydra wyrównujący",
          description: "Intensywnie nawilżający zabieg wyrównujący",
          duration: "60 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Intensywne nawilżenie", "Wyrównanie", "Komfort"]
        },
        {
          title: "Homeo anti couperose",
          description: "Zabieg na naczynka i rumień",
          duration: "60 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Przeciw naczynkom", "Łagodzenie", "Wzmocnienie"]
        },
        {
          title: "Acne",
          description: "Specjalistyczny zabieg na skórę trądzikową",
          duration: "60 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Przeciwtrądzikowy", "Oczyszczenie", "Normalizacja"]
        },
        {
          title: "Age-Spot",
          description: "Zabieg na przebarwienia i plamy starcze",
          duration: "60 min",
          price: "350-400 zł",
          popular: false,
          benefits: ["Przeciw przebarwieniom", "Rozjaśnienie", "Wyrównanie"]
        },
        {
          title: "Hydra Diamond Facial",
          description: "Wieloetapowy zabieg hydrabrazji",
          duration: "90 min",
          price: "450 zł",
          popular: true,
          benefits: ["Hydrabrazja", "Wieloetapowość", "Kompleksowość"]
        },
        {
          title: "Peeling Kwasowy twarz",
          description: "Delikatny peeling kwasowy twarzy",
          duration: "45 min",
          price: "230 zł",
          popular: false,
          benefits: ["Eksfoliacja", "Odnowa", "Wygładzenie"]
        },
        {
          title: "Peeling Kwasowy twarz, szyja, dekolt",
          description: "Kompleksowy peeling kwasowy",
          duration: "60 min",
          price: "280 zł",
          popular: false,
          benefits: ["Kompleksowa eksfoliacja", "Odnowa", "Rozszerzony obszar"]
        },
        {
          title: "Oczyszczanie Kompleksowe twarz",
          description: "Profesjonalne głębokie oczyszczenie",
          duration: "60 min",
          price: "300 zł",
          popular: false,
          benefits: ["Głębokie oczyszczenie", "Profesjonalizm", "Kompleksowość"]
        },
        {
          title: "Oczyszczanie Kompleksowe twarz, szyja, dekolt",
          description: "Rozszerzone oczyszczanie kompleksowe",
          duration: "90 min",
          price: "380 zł",
          popular: false,
          benefits: ["Rozszerzone oczyszczenie", "Kompleksowość", "Dokładność"]
        },
        {
          title: "Oczyszczanie manualne twarz",
          description: "Tradycyjne ręczne oczyszczenie",
          duration: "60 min",
          price: "280 zł",
          popular: false,
          benefits: ["Ręczna precyzja", "Tradycyjna metoda", "Indywidualne podejście"]
        },
        {
          title: "Infuzja tlenowa",
          description: "Tlenowanie skóry dla świeżego wyglądu",
          duration: "30 min",
          price: "150 zł",
          popular: false,
          benefits: ["Dotlenienie", "Świeżość", "Energia"]
        },
        {
          title: "Mikrodermabrazja wodna",
          description: "Delikatne złuszczanie wodne",
          duration: "60 min",
          price: "450 zł",
          popular: false,
          benefits: ["Delikatne złuszczanie", "Odnowa", "Wygładzenie"]
        },
        {
          title: "Akupunktura twarzy",
          description: "Naturalne odmłodzenie akupunkturą",
          duration: "60 min",
          price: "300-400 zł",
          popular: false,
          benefits: ["Naturalne odmłodzenie", "Tradycyjna medycyna", "Lifting naturalny"]
        },
        {
          title: "Pinezowanie twarzy",
          description: "Alternatywna metoda liftingu",
          duration: "45 min",
          price: "300 zł",
          popular: false,
          benefits: ["Alternatywny lifting", "Stymulacja", "Odmłodzenie"]
        }
      ]
    },
    {
      category: "PEELING KWASOWY",
      services: [
        {
          title: "Intensywnie eksfoliujący twarz",
          description: "Głęboki peeling eksfoliujący twarzy",
          duration: "60 min",
          price: "350 zł",
          popular: false,
          benefits: ["Głęboka eksfoliacja", "Odnowa", "Wygładzenie"]
        },
        {
          title: "Zabieg AHA-BHA-AKA twarz",
          description: "Peeling z kwasami AHA, BHA i AKA",
          duration: "60 min",
          price: "350 zł",
          popular: true,
          benefits: ["Wielokwasowy", "Kompleksowy", "Skuteczny"]
        },
        {
          title: "Intensywnie eksfoliujący ciało",
          description: "Peeling eksfoliujący dla ciała",
          duration: "90 min",
          price: "350 zł",
          popular: false,
          benefits: ["Eksfoliacja ciała", "Odnowa skóry", "Wygładzenie"]
        },
        {
          title: "Zabieg AHA-BHA-AKA ciało",
          description: "Peeling wielokwasowy dla ciała",
          duration: "90 min",
          price: "600 zł",
          popular: false,
          benefits: ["Kompleksowy peeling ciała", "Wielokwasowy", "Regeneracja"]
        }
      ]
    },
    {
      category: "RADIOFREKWENCJA - RF LIFTING",
      services: [
        {
          title: "Twarz",
          description: "RF lifting twarzy",
          duration: "45 min",
          price: "200 zł",
          popular: false,
          benefits: ["Lifting bezinwazyjny", "Ujędrnienie", "Stymulacja kolagenu"]
        },
        {
          title: "Ciało (brzuch, pośladki, uda)",
          description: "RF lifting wybranych partii ciała",
          duration: "60 min",
          price: "400 zł",
          popular: true,
          benefits: ["Modelowanie sylwetki", "Ujędrnienie", "Redukcja cellulitu"]
        },
        {
          title: "Dłonie",
          description: "RF lifting dłoni",
          duration: "30 min",
          price: "100 zł",
          popular: false,
          benefits: ["Odmłodzenie dłoni", "Ujędrnienie", "Wygładzenie"]
        },
        {
          title: "Ramiona",
          description: "RF lifting ramion",
          duration: "45 min",
          price: "200 zł",
          popular: false,
          benefits: ["Ujędrnienie ramion", "Redukcja obwisłości", "Modelowanie"]
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
                <p>• Dodatki: maska 20 zł, ampułka od 30 zł</p>
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