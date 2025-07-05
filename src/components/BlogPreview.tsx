import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import facialTreatment from '@/assets/facial-treatment.jpg';

const BlogPreview: React.FC = () => {
  const featuredArticle = {
    title: "Jak prawidłowo pielęgnować skórę twarzy w okresie jesienno-zimowym?",
    excerpt: "Wraz z nadejściem chłodniejszych miesięcy, nasza skóra wymaga szczególnej uwagi i zmiany rutyny pielęgnacyjnej. Niskie temperatury, wiatr i suche powietrze w ogrzewanych pomieszczeniach mogą prowadzić do odwodnienia, podrażnień i przedwczesnego starzenia się skóry. W tym artykule przedstawię profesjonalne wskazówki dotyczące jesienno-zimowej pielęgnacji, które pomogą Ci zachować zdrowy i promienny wygląd przez cały sezon.",
    content: `
      Prawidłowa pielęgnacja skóry w okresie jesienno-zimowym to sztuka wymagająca wiedzy i doświadczenia. Jako kosmetolog z wieloletnim stażem, codziennie obserwuję wpływ zmieniających się warunków atmosferycznych na kondycję skóry moich klientek.

      **Dlaczego skóra potrzebuje specjalnej opieki zimą?**

      Podczas chłodniejszych miesięcy skóra boryka się z wieloma wyzwaniami. Niska temperatura powietrza zewnętrznego w połączeniu z suchym, ogrzanym powietrzem w pomieszczeniach tworzy ekstremalne warunki, które mogą prowadzić do:
      - Utraty naturalnej bariery lipidowej skóry
      - Zwiększonej transepidermalnej utraty wody (TEWL)
      - Podrażnień i stanów zapalnych
      - Przyspieszonego procesu starzenia

      **Krok po kroku - idealna rutyna zimowa:**

      1. **Delikatne oczyszczanie** - Wybierz łagodny żel lub krem myjący bez SLS, który nie naruszy bariery ochronnej skóry. Unikaj zbyt gorącej wody, która może dodatkowo wysuszać.

      2. **Tonizowanie** - Zastosuj alkoholowy toner nawilżający z kwasem hialuronowym lub wodą termalną, aby przygotować skórę na kolejne etapy pielęgnacji.

      3. **Serum koncentrujące się na nawilżeniu** - Skorzystaj z serów zawierających ceramidy, kwas hialuronowy lub niacynamid, które wzmocnią barierę skórną.

      4. **Krem nawilżający** - Wybierz bardziej odżywczy krem niż letni, zawierający składniki okluzyjne jak skwalan czy masło shea.

      5. **Ochrona przeciwsłoneczna** - Tak, również zimą! Śnieg odbija promieniowanie UV, zwiększając ryzyko fotostarzenia.

      **Profesjonalne zabiegi na zimę:**

      W moim gabinecie szczególnie polecam w tym okresie zabiegi głęboko nawilżające z użyciem kwasu hialuronowego, mezoterapię igłową oraz peelingi delikatne, które nie osłabią bariery skórnej. Regularne wizyty co 3-4 tygodnie pozwolą utrzymać optymalny stan nawilżenia i elastyczności skóry.

      **Błędy, których należy unikać:**

      - Używanie zbyt agresywnych peelingów mechanicznych
      - Pomijanie kremu z filtrem UV
      - Stosowanie produktów na bazie alkoholu
      - Zbyt częste mycie twarzy
      - Ignorowanie potrzeb skóry szyi i dekoltu

      Pamiętaj, że każda skóra jest inna i wymaga indywidualnego podejścia. Jeśli masz wątpliwości co do wyboru odpowiednich produktów lub zabiegi, zachęcam do konsultacji w moim gabinecie, gdzie wspólnie opracujemy plan pielęgnacji idealnie dopasowany do Twoich potrzeb.
    `,
    date: "15 października 2024",
    author: "Beata Andraszewska Chlebna",
    readTime: "5 min czytania"
  };

  return (
    <section className="py-16 bg-gradient-to-br from-background to-salon-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Najnowsze z Bloga
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profesjonalne porady, najnowsze trendy i sekrety piękna prosto od eksperta
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={facialTreatment}
              alt="Zabieg pielęgnacyjny twarzy"
              className="w-full h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{featuredArticle.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{featuredArticle.author}</span>
                </div>
              </div>
            </div>
          </div>

          <Card className="h-full shadow-card">
            <CardHeader>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                <Calendar className="h-4 w-4" />
                <span>{featuredArticle.date}</span>
                <span>•</span>
                <span>{featuredArticle.readTime}</span>
              </div>
              <CardTitle className="text-xl">{featuredArticle.title}</CardTitle>
              <CardDescription className="text-base leading-relaxed">
                {featuredArticle.excerpt}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="group">
                Czytaj więcej
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Zobacz wszystkie artykuły
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;