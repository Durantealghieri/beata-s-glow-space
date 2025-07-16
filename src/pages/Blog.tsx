import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import facialTreatment from '@/assets/facial-treatment.jpg';

const Blog: React.FC = () => {
  const featuredArticle = {
    title: "Znaczenie diagnostyki pH skóry w praktyce kosmetologicznej",
    content: `Współczesna kosmetologia stawia na indywidualne podejście do każdego klienta, co obejmuje również analizę stanu skóry i jej potrzeb. Jednym z kluczowych elementów skutecznej diagnostyki skóry jest pomiar jej pH. To pozornie prosta, ale niezwykle istotna miara, która pozwala specjalistom w dziedzinie kosmetologii dostosować zabiegi i produkty do indywidualnych wymagań skóry.

**Czym jest pH skóry?**

pH skóry to wskaźnik kwasowości lub zasadowości jej powierzchni. Skala pH mierzy kwasowość lub zasadowość substancji w skali od 0 do 14, gdzie wartość 7 oznacza substancję neutralną. Skóra ludzka posiada naturalne pH w granicach 4,5–5,5, co czyni ją lekko kwaśną. Taki stan jest ważny, ponieważ kwaśne pH skóry pomaga w utrzymaniu jej naturalnej bariery ochronnej, zwanej płaszczem hydrolipidowym, który chroni przed szkodliwymi mikroorganizmami, zanieczyszczeniami i utratą wilgoci.

**Dlaczego diagnostyka pH jest istotna w kosmetologii?**

Skóra każdego człowieka ma swoje unikalne potrzeby, a jej pH może się zmieniać w zależności od wielu czynników, takich jak dieta, środowisko, nawyki pielęgnacyjne czy choroby skórne. Zaburzenia w równowadze pH mogą prowadzić do różnych problemów skórnych, takich jak:

• Suchość i łuszczenie się skóry – jeśli pH skóry staje się zbyt zasadowe, może prowadzić to do osłabienia naturalnej bariery ochronnej skóry, co skutkuje jej odwodnieniem.
• Zwiększona podatność na infekcje – skóra o pH zbyt zasadowym staje się bardziej podatna na ataki bakterii, wirusów i grzybów, ponieważ traci swoją naturalną barierę ochronną.
• Zaburzenia sebum – zmiany pH mogą wpływać na wydzielanie łoju, co prowadzi do pojawienia się trądziku, zaskórników czy innych problemów związanych z nadmiernym wydzielaniem sebum.

Właśnie dlatego diagnostyka pH skóry jest tak ważna w pracy kosmetologa – pozwala nie tylko na precyzyjne określenie potrzeb skóry, ale również na zapobieganie i leczenie problemów skórnych wynikających z zaburzeń równowagi pH.

**Jak przeprowadza się diagnostykę pH skóry?**

Diagnostyka pH skóry jest szybka, bezbolesna i skuteczna. Kosmetolodzy wykorzystują do tego specjalne paski diagnostyczne lub urządzenia pomiarowe, które pozwalają na dokładne określenie pH skóry. Pomiar pH powinien być wykonywany na czystej, suchej skórze, najlepiej rano, przed zastosowaniem jakichkolwiek preparatów kosmetycznych.

Paski diagnostyczne są proste w użyciu – wystarczy delikatnie przyłożyć je do skóry i odczytać wynik na skali. Urządzenia pomiarowe są bardziej zaawansowane, często oferują dokładniejsze odczyty i są wyposażone w funkcje analizy wyników, które pomagają kosmetologom w doborze odpowiednich zabiegów.

**Jakie zabiegi kosmetyczne dostosowuje się do wyników pH?**

Wynik pomiaru pH skóry ma kluczowe znaczenie przy doborze odpowiednich zabiegów kosmetycznych. Skóra o zbyt niskim pH (kwaśnym) może wymagać zastosowania produktów neutralizujących, aby przywrócić jej równowagę. Natomiast skóra z pH zasadowym będzie wymagała zastosowania preparatów nawilżających i odbudowujących, które pomogą przywrócić naturalną barierę ochronną.

• Skóra o niskim pH – może wskazywać na uszkodzenie płaszcza hydrolipidowego. W takim przypadku, kosmetolog może zaproponować zabiegi łagodzące, regenerujące oraz nawilżające, a także dostosować kosmetyki do delikatnej pielęgnacji.
• Skóra o pH zbyt wysokim – wymaga zastosowania produktów przywracających skórze kwaśne pH, np. preparatów nawilżających i równoważących. Warto także unikać agresywnych peelingów i stosować kosmetyki, które odbudowują barierę ochronną skóry.
• Skóra w normie pH (4,5–5,5) – to skóra zdrowa, której nie trzeba szczególnie pielęgnować w kontekście pH, ale nadal warto stosować preparaty dopasowane do jej typu i potrzeb.

**Podsumowanie**

Diagnostyka pH skóry to niezwykle istotny element w pracy kosmetologa, który pozwala na precyzyjne dopasowanie zabiegów i kosmetyków do indywidualnych potrzeb skóry. Regularne monitorowanie pH skóry może pomóc w wykryciu problemów skórnych na wczesnym etapie oraz pozwala na skuteczne utrzymanie zdrowej i pięknej skóry. Pamiętajmy, że równowaga pH jest fundamentem zdrowej skóry, a odpowiednia pielęgnacja pozwala zachować ją w optymalnej kondycji.`,
    date: "20 grudnia 2024",
    author: "Beata Andraszewska Chlebna",
    readTime: "7 min czytania"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="blog" />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back to Home */}
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Powrót do strony głównej
          </Link>
        </div>

        {/* Blog Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesjonalne porady, najnowsze trendy i sekrety piękna prosto od eksperta
          </p>
        </div>

        {/* Featured Article */}
        <Card className="shadow-card mb-8">
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={facialTreatment}
              alt="Zabieg pielęgnacyjny twarzy"
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <CardHeader>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{featuredArticle.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{featuredArticle.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{featuredArticle.readTime}</span>
              </div>
            </div>
            <CardTitle className="text-2xl mb-6">{featuredArticle.title}</CardTitle>
          </CardHeader>
          
          <CardContent>
            <div className="prose prose-lg max-w-none">
              {featuredArticle.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
                      {paragraph.slice(2, -2)}
                    </h3>
                  );
                }
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* More Articles Section */}
        <div className="text-center py-12">
          <h2 className="text-2xl font-bold text-foreground mb-4">Więcej artykułów</h2>
          <p className="text-muted-foreground mb-8">
            Wkrótce znajdziesz tutaj więcej profesjonalnych porad i artykułów o pielęgnacji skóry
          </p>
          <Button variant="outline" size="lg" disabled>
            Wkrótce dostępne
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Blog;