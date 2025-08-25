import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Sparkles, Clock, Star, ArrowRight, ChevronDown } from 'lucide-react';

const Zabiegi: React.FC = () => {
  const location = useLocation();
  const [openCategories, setOpenCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (location.hash) {
      const hashWithoutHash = location.hash.substring(1);
      // Open the category that corresponds to the hash
      setOpenCategories(new Set([hashWithoutHash]));
      
      // Scroll to the element after a delay to ensure it's rendered
      const element = document.getElementById(hashWithoutHash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 300); // Increased delay to ensure collapsible content is rendered
      }
    }
  }, [location.hash]);

  const toggleCategory = (categoryId: string) => {
    const newOpenCategories = new Set(openCategories);
    if (newOpenCategories.has(categoryId)) {
      newOpenCategories.delete(categoryId);
    } else {
      newOpenCategories.add(categoryId);
    }
    setOpenCategories(newOpenCategories);
  };

  const serviceCategories = [
    {
      id: 'trychologia',
      title: 'Trychologia Kosmetologiczna',
      description: 'Specjalistyczne zabiegi dla zdrowia włosów i skóry głowy',
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
        }
      ]
    },
    {
      id: 'masaze',
      title: 'Masaże',
      description: 'Relaksacyjne i terapeutyczne masaże ciała i twarzy',
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
          title: "Drenaż limfatyczny",
          description: "Masaż wspomagający system limfatyczny",
          duration: "60 min",
          price: "200-300 zł",
          popular: false,
          benefits: ["Detoks", "Odwodnienie", "Poprawa krążenia"]
        }
      ]
    },
    {
      id: 'terapia-wodorem',
      title: 'Terapia Wodorem Molekularnym',
      description: 'Innowacyjne zabiegi z wykorzystaniem wodoru molekularnego',
      services: [
        {
          title: "Inhalacja wodorem 60min",
          description: "Standardowa sesja terapii wodorowej",
          duration: "60 min",
          price: "110 zł",
          popular: true,
          benefits: ["Pełna regeneracja", "Antyoksydacja", "Energia"]
        },
        {
          title: "Inhalacja + piezo Mist + terapia światłem",
          description: "Kompleksowa terapia wodorowa z dodatkami",
          duration: "60 min",
          price: "300 zł",
          popular: true,
          benefits: ["Kompleksowa terapia", "Nawilżenie", "Regeneracja światłem"]
        }
      ]
    },
    {
      id: 'kosmetologia-onkologiczna',
      title: 'Kosmetologia Onkologiczna',
      description: 'Specjalistyczne zabiegi dla pacjentów onkologicznych',
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
        }
      ]
    },
    {
      id: 'mezoterapia',
      title: 'Mezoterapia Mikroigłowa Dermapen',
      description: 'Zaawansowane zabiegi mezoterapii mikroigłowej',
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
          title: "Twarz, szyja, dekolt Egzosomy Bio Pulsacyjne",
          description: "Kompleksowa mezoterapia z egzosomami",
          duration: "90 min",
          price: "1000 zł",
          popular: true,
          benefits: ["Kompleksowa pielęgnacja", "Obszerne działanie", "Maksymalny efekt"]
        }
      ]
    },
    {
      id: 'zabiegi-pielegnacyjne',
      title: 'Zabiegi Pielęgnacyjne - Twarz',
      description: 'Profesjonalne zabiegi pielęgnacyjne dla skóry twarzy',
      services: [
        {
          title: "Interactive System",
          description: "zabieg wyrównujący, bio stymulujący, antyoksydacyjny",
          duration: "60 min",
          price: "350-400 zł",
          popular: true,
          benefits: ["Wyrównanie", "Bio stymulacja", "Antyoksydacja"]
        },
        {
          title: "Hydra Diamond Facial",
          description: "zabieg wieloetapowy (hydroabrazja, mezoterapia bezigłowa, infuzja tlenowa, masaż próżniowy, rf)",
          duration: "90 min",
          price: "450 zł",
          popular: true,
          benefits: ["Wieloetapowość", "Kompleksowość", "Nowoczesność"]
        },
        {
          title: "Boto Fill",
          description: "bioaktywne odmłodzenie wokół oczu",
          duration: "45 min",
          price: "350-400 zł",
          popular: true,
          benefits: ["Odmłodzenie oczu", "Bioaktywność", "Regeneracja"]
        }
      ]
    },
    {
      id: 'peeling-kwasowy',
      title: 'Peeling Kwasowy',
      description: 'Zaawansowane peelingi kwasowe dla odnowy skóry',
      services: [
        {
          title: "Zabieg AHA-BHA-AKA twarz",
          description: "Peeling z kwasami AHA, BHA i AKA",
          duration: "60 min",
          price: "350 zł",
          popular: true,
          benefits: ["Wielokwasowy", "Kompleksowy", "Skuteczny"]
        },
        {
          title: "Intensywnie eksfoliujący twarz",
          description: "Głęboki peeling eksfoliujący twarzy",
          duration: "60 min",
          price: "350 zł",
          popular: false,
          benefits: ["Głęboka eksfoliacja", "Odnowa", "Wygładzenie"]
        }
      ]
    },
    {
      id: 'radiofrekwencja',
      title: 'Radiofrekwencja - RF Lifting',
      description: 'Bezinwazyjne zabiegi liftingujące z wykorzystaniem fal radiowych',
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
                  <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-6">
                    {category.description}
                  </p>
                </div>

                <Collapsible 
                  open={openCategories.has(category.id)} 
                  onOpenChange={() => toggleCategory(category.id)}
                  className="w-full"
                >
                  <div className="flex justify-center mb-6">
                    <CollapsibleTrigger asChild>
                      <Button size="lg" className="flex items-center gap-2 px-8 py-3 text-lg bg-salon-rose hover:bg-salon-rose/90 text-foreground">
                        {openCategories.has(category.id) ? 'Ukryj zabiegi' : 'Pokaż zabiegi'}
                        <ChevronDown className={`h-5 w-5 transition-transform ${openCategories.has(category.id) ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  
                  <CollapsibleContent className="space-y-4">
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
                  </CollapsibleContent>
                </Collapsible>
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