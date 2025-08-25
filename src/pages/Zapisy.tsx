import React from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Phone, Mail, User } from 'lucide-react';

const Zapisy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-salon-cream/20 to-salon-rose/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Umów wizytę
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Zadbaj o zdrowie i piękno swojej skóry już dziś. Skontaktuj się ze mną, aby wybrać dogodny termin wizyty i rozpocząć terapię dopasowaną do Twoich potrzeb.
            </p>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-4">
                    Informacje kontaktowe
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-salon-rose" />
                      <span className="text-muted-foreground">695 452 442</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-salon-rose" />
                      <span className="text-muted-foreground">beatachlebna@wp.pl</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-salon-rose" />
                      <span className="text-muted-foreground">Pon-Pt: 9:00-18:00, Sob: 9:00-15:00</span>
                    </div>
                  </div>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Przed wizytą</CardTitle>
                    <CardDescription>
                      Ważne informacje dotyczące przygotowania do zabiegu
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-salon-rose rounded-full mt-2" />
                      <span className="text-sm text-muted-foreground">
                        Przyjdź bez makijażu na twarz przed zabiegiem
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-salon-rose rounded-full mt-2" />
                      <span className="text-sm text-muted-foreground">
                        Unikaj ekspozycji na słońce 24h przed zabiegiem
                      </span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-salon-rose rounded-full mt-2" />
                      <span className="text-sm text-muted-foreground">
                        Poinformuj o przyjmowanych lekach
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Booking Form */}
              <Card>
                <CardHeader>
                  <CardTitle>Formularz rezerwacji</CardTitle>
                  <CardDescription>
                    Wypełnij formularz, a skontaktujemy się z Tobą w celu potwierdzenia terminu
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Imię</Label>
                      <Input id="firstName" placeholder="Twoje imię" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Nazwisko</Label>
                      <Input id="lastName" placeholder="Twoje nazwisko" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input id="phone" type="tel" placeholder="+48 123 456 789" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="twoj@email.pl" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Rodzaj zabiegu</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Wybierz zabieg" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="consultation">Bezpłatna konsultacja</SelectItem>
                        <SelectItem value="facial">Zabieg na twarz</SelectItem>
                        <SelectItem value="body">Zabieg na ciało</SelectItem>
                        <SelectItem value="anti-aging">Zabieg przeciwzmarszczkowy</SelectItem>
                        <SelectItem value="problematic">Terapia skóry problematycznej</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="preferredDate">Preferowany termin</Label>
                    <Input id="preferredDate" type="date" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Dodatkowe informacje</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Opisz swoje oczekiwania, problemy skórne lub zadaj pytania..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Wyślij zgłoszenie
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    Skontaktujemy się z Tobą w ciągu 24 godzin w celu potwierdzenia terminu.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Zapisy;