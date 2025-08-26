import React, { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Phone, Mail, User } from 'lucide-react';

const Zapisy: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                      <div className="text-muted-foreground">
                        <div>Poniedziałek-Sobota: 9:00 - 20:00</div>
                        <div>Niedziela: nieczynne</div>
                      </div>
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

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Zapisy;