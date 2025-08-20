import React from 'react';
import Navigation from '@/components/Navigation';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Kontakt = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="zapisy" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Umów wizytę
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się ze mną, aby umówić wizytę lub uzyskać więcej informacji o zabiegach kosmetologicznych.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-salon-rose" />
                Informacje kontaktowe
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-salon-rose" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <a 
                    href="tel:+48695452442" 
                    className="text-salon-rose hover:underline"
                  >
                    +48 695 452 442
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-salon-rose" />
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:beatachlebna@wp.pl" 
                    className="text-salon-rose hover:underline"
                  >
                    beatachlebna@wp.pl
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-salon-rose" />
                <div>
                  <p className="font-medium">Adres</p>
                  <p className="text-muted-foreground">
                    ul. Piękna 15<br />
                    Warszawa
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-salon-rose" />
                Godziny pracy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Poniedziałek - Piątek</span>
                <span className="font-medium">9:00 - 18:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sobota</span>
                <span className="font-medium">9:00 - 15:00</span>
              </div>
              <div className="flex justify-between">
                <span>Niedziela</span>
                <span className="font-medium">Zamknięte</span>
              </div>
              <div className="mt-4 p-3 bg-salon-cream rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Uwaga:</strong> Zabiegi tylko po wcześniejszym umówieniu wizyty
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-salon-cream p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Gotowa na profesjonalną pielęgnację?
            </h2>
            <p className="text-muted-foreground mb-6">
              Zadzwoń lub napisz, aby umówić wizytę. Pierwsza konsultacja jest bezpłatna!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button asChild size="lg">
                <a href="tel:+48695452442">
                  <Phone className="h-5 w-5 mr-2" />
                  Zadzwoń teraz
                </a>
              </Button>
              <Button variant="outline" asChild size="lg">
                <a href="mailto:beatachlebna@wp.pl">
                  <Mail className="h-5 w-5 mr-2" />
                  Napisz email
                </a>
              </Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-salon-cream py-12 border-t border-border mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Beata Andraszewska Chlebna
            </h3>
            <p className="text-muted-foreground mb-4">
              Profesjonalna kosmetologia • Warszawa
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>Tel: +48 695 452 442</span>
              <span>•</span>
              <span>beatachlebna@wp.pl</span>
              <span>•</span>
              <span>ul. Piękna 15, Warszawa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Kontakt;