import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, BookOpen, Users, Heart } from 'lucide-react';
const AboutPreview: React.FC = () => {
  const achievements = [{
    icon: Award,
    label: "15+ lat doświadczenia",
    color: "bg-salon-rose"
  }, {
    icon: BookOpen,
    label: "50+ szkoleń specjalistycznych",
    color: "bg-salon-cream"
  }, {
    icon: Users,
    label: "2000+ zadowolonych klientek",
    color: "bg-muted"
  }, {
    icon: Heart,
    label: "Indywidualne podejście",
    color: "bg-accent"
  }];
  const qualifications = ["Kosmetolog z licencją zawodową", "Specjalista mezoterapii igłowej", "Certyfikowany aplikator kwasów", "Trener marki Dermaheal", "Członek Polskiego Towarzystwa Kosmetycznego"];
  return <section className="py-16 bg-gradient-to-br from-salon-cream to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Poznaj Beatę Andraszewską Chlebną
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="leading-relaxed">
                Jestem dyplomowanym kosmetologiem z pasją do odkrywania sekretów piękna i zdrowia skóry. 
                Przez ponad 15 lat pomagam kobietom odkrywać swoją naturalną urodę, łącząc tradycyjne 
                metody z najnowocześniejszymi technologiami w dziedzinie kosmetologii.
              </p>
              
              <p className="leading-relaxed">
                Moja filozofia pracy opiera się na holistycznym podejściu do pielęgnacji - wierzę, że 
                każda skóra ma swoje unikalne potrzeby i zasługuje na indywidualnie dobraną terapię. 
                Ciągle poszerzam swoją wiedzę, uczestnicząc w najlepszych szkoleniach i konferencjach 
                branżowych.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {achievements.map((achievement, index) => <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-white/50">
                  <div className={`p-2 rounded-full ${achievement.color}`}>
                    <achievement.icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="text-sm font-medium text-foreground">
                    {achievement.label}
                  </span>
                </div>)}
            </div>

            <Button size="lg" asChild>
              <Link to="/o-mnie">Dowiedz się więcej o mnie</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="p-6 shadow-card">
              <h3 className="font-semibold text-lg mb-4 text-foreground">
                Kwalifikacje i Certyfikaty
              </h3>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-salon-rose rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{qualification}</span>
                  </div>)}
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-salon-rose/10 to-salon-cream/20 border-salon-rose/20">
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  Moja Misja
                </h3>
                <p className="text-muted-foreground italic">
                  "Pomagam kobietom odkryć swoją naturalną urodę i pewność siebie przez 
                  profesjonalną pielęgnację i edukację o zdrowiu skóry."
                </p>
              </div>
            </Card>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Kosmetologia medyczna</Badge>
              <Badge variant="secondary">Anti-aging</Badge>
              <Badge variant="secondary">Pielęgnacja problemowa</Badge>
              <Badge variant="secondary">Dermatologia estetyczna</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default AboutPreview;