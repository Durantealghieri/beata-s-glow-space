import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Phone, Mail, Star } from 'lucide-react';

const BookingPreview: React.FC = () => {
  const contactInfo = [
    { icon: Phone, label: "Telefon", value: "+48 695 452 442", link: "tel:+48695452442" },
    { icon: Mail, label: "Email", value: "beatachlebna@wp.pl", link: "mailto:beatachlebna@wp.pl" },
    { icon: MapPin, label: "Adres", value: "ul. Piękna 15, 00-123 Warszawa", link: "https://maps.google.com" }
  ];

  const workingHours = [
    { day: "Poniedziałek - Piątek", hours: "9:00 - 20:00" },
    { day: "Sobota", hours: "10:00 - 16:00" },
    { day: "Niedziela", hours: "Zamknięte" }
  ];

  const bookingSteps = [
    { step: 1, title: "Wybierz zabieg", description: "Przeglądnij naszą ofertę i wybierz interesujący Cię zabieg" },
    { step: 2, title: "Umów konsultację", description: "Skontaktuj się z nami telefonicznie lub mailowo" },
    { step: 3, title: "Przyjdź na wizytę", description: "Ciesz się profesjonalną opieką w komfortowych warunkach" }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Umów Wizytę
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zadbaj o swoją skórę już dziś. Umów się na konsultację i poznaj najlepsze rozwiązania dla Ciebie
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-salon-rose" />
                <span>Kontakt</span>
              </CardTitle>
              <CardDescription>
                Skontaktuj się z nami w dogodny dla Ciebie sposób
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <contact.icon className="h-5 w-5 text-salon-rose mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <a 
                      href={contact.link}
                      className="text-sm font-medium text-foreground hover:text-salon-rose transition-colors"
                    >
                      {contact.value}
                    </a>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <Button className="w-full">
                  <Phone className="h-4 w-4 mr-2" />
                  Zadzwoń teraz
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Working Hours */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="h-5 w-5 text-salon-rose" />
                <span>Godziny pracy</span>
              </CardTitle>
              <CardDescription>
                Jesteśmy do Twojej dyspozycji w poniższych godzinach
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {workingHours.map((schedule, index) => (
                <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-sm text-foreground">{schedule.day}</span>
                  <Badge variant="outline" className="font-mono">
                    {schedule.hours}
                  </Badge>
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Wizyty tylko po wcześniejszym umówieniu</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Process */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Calendar className="h-5 w-5 text-salon-rose" />
                <span>Jak umówić wizytę?</span>
              </CardTitle>
              <CardDescription>
                Proste kroki do Twojej idealnej skóry
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bookingSteps.map((step, index) => (
                <div key={index} className="flex space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-salon-rose rounded-full flex items-center justify-center text-white text-sm font-semibold">
                    {step.step}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-foreground mb-1">
                      {step.title}
                    </div>
                    <div className="text-xs text-muted-foreground leading-relaxed">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-4 border-t">
                <Button variant="outline" className="w-full">
                  <Mail className="h-4 w-4 mr-2" />
                  Napisz do nas
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-gradient-to-r from-salon-rose/10 to-salon-cream/20 border-salon-rose/20">
            <div className="flex items-center justify-center space-x-2 text-salon-rose mb-2">
              <Star className="h-5 w-5" />
              <span className="font-semibold">Pierwsza konsultacja GRATIS</span>
              <Star className="h-5 w-5" />
            </div>
            <p className="text-sm text-muted-foreground">
              Skorzystaj z bezpłatnej analizy skóry i doboru odpowiednich zabiegów
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingPreview;