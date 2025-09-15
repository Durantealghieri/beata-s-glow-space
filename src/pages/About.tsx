import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Award, BookOpen, Users, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const achievements = [{
    icon: Award,
    label: "20+ lat doświadczenia",
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
  const qualifications = ["Kosmetolog, Trycholog, Fitoterapeuta", "Dyplomowany kosmetolog, z wieloletnim doświadczeniem - absolwentka Wyższej Szkoły Inżynierii i Zdrowia w Warszawie na kierunku kosmetologia", "Absolwentka Instytutu Medycyny Klasztornej – Towaroznastwo Zielarskie", "Absolwentka The International Academy of Reflexology & Meridian Therapy - Dietetyka w Tradycyjnej Medycynie Chińskiej oraz Auriculotherapy. Refleksologia", "Edukator marki Sinesia", "Wolontariuszka w Fundacji Piękniejsze Życie", "Ekspert w dziedzinie pielęgnacji pacjentów onkologicznych w gabinecie kosmetologicznym"];
  const workshops = ["Akupunktura Kosmetologiczna w Medycynie Estetycznej", "Rozpoznanie po twarzy", "Technika likwidacji zmarszczek w zapobieganiu starzenia się twarzy", "Kosmetyki koszerne", "Kosmetyki dla zwierząt", "Specyfikacja i recepturowanie"];
  return <div className="min-h-screen bg-background">
      <Navigation currentSection="o-mnie" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Navigation back */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót do strony głównej
          </Link>
        </div>

        {/* Header with Navigation Menu */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            O mnie
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Poznaj moją historię i filozofię pracy
          </p>

        </header>

        {/* Moja historia Section */}
        <section id="historia" className="mb-16 scroll-mt-8">
          <Card className="p-8 shadow-card">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Moja historia
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6 text-center">
              <p>
                Nazywam się Beata Andraszewska-Chlebna.
              </p>
              
              <p>
                Od dziecka marzyłam, by zostać kardiologiem. Życie jednak napisało dla mnie inny scenariusz – taki, w którym pomagam ludziom mierzyć się z ich problemami skórnymi: trądzikiem, bliznami, łysieniem, procesami starzenia się, a także wieloma innymi wyzwaniami, nie zawsze związanymi wyłącznie z urodą.
              </p>
              
              <p>
                Moja droga do tego zawodu zaczęła się w dramatycznych okolicznościach. Miałam 17 lat, gdy moja mama zachorowała na nowotwór. Podczas radioterapii jej skóra uległa ciężkim poparzeniom – w tamtych latach (lata 80.) naświetlenia pozostawiały po sobie głębokie uszkodzenia: martwicę, owrzodzenia, trwałe blizny. O specjalistycznych preparatach czy metodach pielęgnacji nikt wtedy nie słyszał, więc zaczęłam poszukiwać sposobów, które mogłyby złagodzić jej cierpienie. To doświadczenie poruszyło we mnie coś, co z czasem stało się moją życiową pasją.
              </p>
              
              <p>
                Po śmierci mamy zaczęłam zgłębiać temat już w pełni świadomie. Wiedza i praktyka stopniowo przerodziły się w zawód, który wykonuję do dziś – z tą samą motywacją i sercem, jakie towarzyszyły mi wtedy, gdy po raz pierwszy próbowałam pomóc.
              </p>
            </div>
          </Card>
        </section>

        {/* Kwalifikacje Section */}
        <section id="kwalifikacje" className="mb-16 scroll-mt-8">
          <Card className="p-8 shadow-card">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Kwalifikacje
            </h2>
            
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                {qualifications.map((qualification, index) => <div key={index} className="flex items-start justify-center space-x-3">
                    <div className="w-2 h-2 bg-salon-rose rounded-full flex-shrink-0 mt-2" />
                    <p className="text-muted-foreground leading-relaxed text-left max-w-3xl">{qualification}</p>
                  </div>)}
              </div>
              
            </div>
          </Card>
        </section>

        {/* Moje osiągnięcia Section */}
        <section id="osiagniecia" className="mb-16 scroll-mt-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Moje osiągnięcia
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-white/50">
                <div className={`p-2 rounded-full ${achievement.color}`}>
                  <achievement.icon className="h-5 w-5 text-foreground" />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {achievement.label}
                </span>
              </div>)}
          </div>
        </section>

        {/* Filozofia pracy */}
        <section id="filozofia" className="mb-16 scroll-mt-8">
          <Card className="p-8 bg-gradient-to-br from-salon-rose/10 to-salon-cream/20 border-salon-rose/20">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Moja filozofia pracy
            </h2>
            <div className="text-center">
              <p className="text-lg text-muted-foreground italic leading-relaxed">
                "Pomagam kobietom odkryć swoją naturalną urodę i pewność siebie przez 
                profesjonalną pielęgnację i edukację o zdrowiu skóry. Każda skóra ma swoje 
                unikalne potrzeby i zasługuje na indywidualnie dobraną terapię."
              </p>
            </div>
          </Card>
        </section>

        {/* Specjalizacje */}
        <section id="specjalizacje" className="scroll-mt-8">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Moje specjalizacje
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm">Kosmetologia medyczna</Badge>
            <Badge variant="secondary" className="text-sm">Anti-aging</Badge>
            <Badge variant="secondary" className="text-sm">Kosmetologia holistyczna</Badge>
            <Badge variant="secondary" className="text-sm">Trychologia</Badge>
            <Badge variant="secondary" className="text-sm">Pielęgnacja onkologiczna</Badge>
            <Badge variant="secondary" className="text-sm">Leczenie blizn</Badge>
            <Badge variant="secondary" className="text-sm">Mezoterapia</Badge>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-salon-cream py-12 border-t border-border mt-16">
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
              <span>Puławska 320, lokal 4, Warszawa 02-845</span>
            </div>
          </div>
        </div>
      </footer>
    </div>;
};
export default About;