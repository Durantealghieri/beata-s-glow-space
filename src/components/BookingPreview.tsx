import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, MapPin, Phone, Mail, Star } from 'lucide-react';
const BookingPreview: React.FC = () => {
  const contactInfo = [{
    icon: Phone,
    label: "Telefon",
    value: "+48 695 452 442",
    link: "tel:+48695452442"
  }, {
    icon: Mail,
    label: "Email",
    value: "beatachlebna@wp.pl",
    link: "mailto:beatachlebna@wp.pl"
  }, {
    icon: MapPin,
    label: "Adres",
    value: "Puławska 320, lokal 4, Warszawa 02-845",
    link: "https://maps.google.com"
  }];
  const workingHours = [{
    day: "Poniedziałek - Piątek",
    hours: "9:00 - 20:00"
  }, {
    day: "Sobota",
    hours: "9:00 - 20:00"
  }, {
    day: "Niedziela",
    hours: "Zamknięte"
  }];
  const bookingSteps = [{
    step: 1,
    title: "Wybierz zabieg",
    description: "Przeglądnij naszą ofertę i wybierz interesujący Cię zabieg"
  }, {
    step: 2,
    title: "Umów konsultację",
    description: "Skontaktuj się z nami telefonicznie lub mailowo"
  }, {
    step: 3,
    title: "Przyjdź na wizytę",
    description: "Ciesz się profesjonalną opieką w komfortowych warunkach"
  }];
  return <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Umów Wizytę
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zadbaj o swoją skórę już dziś. Umów się na konsultację i poznaj najlepsze rozwiązania dla Ciebie
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
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
              {contactInfo.map((contact, index) => <div key={index} className="flex items-start space-x-3">
                  <contact.icon className="h-5 w-5 text-salon-rose mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <a href={contact.link} className="text-sm font-medium text-foreground hover:text-salon-rose transition-colors">
                      {contact.value}
                    </a>
                  </div>
                </div>)}
              
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
                Jestem do Twojej dyspozycji w poniższych godzinach
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {workingHours.map((schedule, index) => <div key={index} className="flex justify-between items-center py-2">
                  <span className="text-sm text-foreground">{schedule.day}</span>
                  <Badge variant="outline" className="font-mono">
                    {schedule.hours}
                  </Badge>
                </div>)}
              
              
            </CardContent>
          </Card>

        </div>

      </div>
    </section>;
};
export default BookingPreview;