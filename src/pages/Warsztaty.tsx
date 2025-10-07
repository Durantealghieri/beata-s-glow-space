import React, { useEffect, useState } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, User, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Navigation from '@/components/Navigation';

interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
}

const Warsztaty: React.FC = () => {
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const posts: Post[] = [
    {
      id: 1,
      title: "Warsztat pielęgnacji skóry zimą",
      content: `Zapraszamy na wyjątkowy warsztat poświęcony zimowej pielęgnacji skóry. Podczas tego wydarzenia dowiesz się, jak zadbać o swoją cerę w trudnych warunkach zimowych, kiedy mróz i wiatr szczególnie osuszają i podrażniają skórę.`,
      date: "15 grudnia 2025",
      author: "Beata Andraszewska Chlebna",
      readTime: "2 godz.",
      excerpt: "Poznaj sekrety zimowej pielęgnacji skóry i naucz się, jak chronić cerę przed mrozem."
    },
    {
      id: 2,
      title: "Promocja świąteczna - pakiety zabiegowe",
      content: `Z okazji nadchodzących świąt przygotowaliśmy dla Was wyjątkowe pakiety zabiegowe w promocyjnych cenach. To idealny pomysł na prezent dla siebie lub bliskiej osoby!`,
      date: "10 grudnia 2025",
      author: "Beata Andraszewska Chlebna",
      readTime: "5 min czytania",
      excerpt: "Specjalne pakiety zabiegowe w promocyjnych cenach świątecznych."
    },
    {
      id: 3,
      title: "Wydarzenie: Dzień otwarty w gabinecie",
      content: `Serdecznie zapraszamy na dzień otwarty w naszym gabinecie! To doskonała okazja, aby poznać naszą ofertę, zobaczyć gabinet od środka i skorzystać z darmowych konsultacji.`,
      date: "5 listopada 2025",
      author: "Beata Andraszewska Chlebna",
      readTime: "3 godz.",
      excerpt: "Zapraszamy na dzień otwarty z darmowymi konsultacjami i prezentacją zabiegów."
    }
  ];

  const parsePostDate = (dateStr: string): Date => {
    const monthMap: { [key: string]: number } = {
      'stycznia': 0, 'lutego': 1, 'marca': 2, 'kwietnia': 3,
      'maja': 4, 'czerwca': 5, 'lipca': 6, 'sierpnia': 7,
      'września': 8, 'października': 9, 'listopada': 10, 'grudnia': 11
    };
    
    const parts = dateStr.split(' ');
    const day = parseInt(parts[0]);
    const month = monthMap[parts[1].toLowerCase()];
    const year = parseInt(parts[2]);
    
    return new Date(year, month, day);
  };

  const getUniqueMonths = (): string[] => {
    const months = posts.map(post => {
      const date = parsePostDate(post.date);
      const monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 
                          'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
      return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
    });
    return Array.from(new Set(months)).sort((a, b) => {
      const partsA = a.split(' ');
      const partsB = b.split(' ');
      const monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 
                          'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
      const dateA = new Date(parseInt(partsA[1]), monthNames.indexOf(partsA[0]));
      const dateB = new Date(parseInt(partsB[1]), monthNames.indexOf(partsB[0]));
      return dateB.getTime() - dateA.getTime();
    });
  };

  const filteredPosts = selectedMonth
    ? posts.filter(post => {
        const postDate = parsePostDate(post.date);
        const monthNames = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 
                            'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
        const postMonth = `${monthNames[postDate.getMonth()]} ${postDate.getFullYear()}`;
        return postMonth === selectedMonth;
      })
    : posts;

  const togglePost = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  const uniqueMonths = getUniqueMonths();

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="warsztaty" />
      
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-salon-gold to-salon-rose bg-clip-text text-transparent">
              Kalendarz wydarzeń
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bądź na bieżąco z nadchodzącymi warsztatami, wydarzeniami i promocjami
            </p>
          </header>

          <div className="grid lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Content */}
            <div className="space-y-8">
              {filteredPosts.length === 0 ? (
                <Card className="shadow-elegant">
                  <CardContent className="py-12 text-center">
                    <CalendarIcon className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">Brak wydarzeń</h3>
                    <p className="text-muted-foreground mb-4">
                      Nie znaleziono wydarzeń w wybranym miesiącu.
                    </p>
                    <Button onClick={() => setSelectedMonth(null)} variant="outline">
                      Wyczyść filtr
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                filteredPosts.map((post) => (
                  <Card key={post.id} className="shadow-elegant hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2">{post.title}</CardTitle>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <CalendarIcon className="w-4 h-4" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="w-4 h-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="prose prose-sm max-w-none">
                        {expandedPost === post.id ? (
                          <div className="whitespace-pre-line">{post.content}</div>
                        ) : (
                          <p className="text-muted-foreground">{post.excerpt}</p>
                        )}
                      </div>
                      <Button
                        onClick={() => togglePost(post.id)}
                        variant="link"
                        className="mt-4 p-0 h-auto font-semibold"
                      >
                        {expandedPost === post.id ? 'Zwiń' : 'Czytaj więcej'}
                      </Button>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>

            {/* Sidebar - Month Filter */}
            <aside className="lg:sticky lg:top-24 h-fit">
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-salon-gold" />
                    Filtruj po miesiącu
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {selectedMonth && (
                      <Button
                        variant="outline"
                        className="w-full justify-start mb-4"
                        onClick={() => setSelectedMonth(null)}
                      >
                        Wyczyść filtr
                      </Button>
                    )}
                    {uniqueMonths.map((month) => (
                      <Button
                        key={month}
                        variant={selectedMonth === month ? "default" : "ghost"}
                        className="w-full justify-start"
                        onClick={() => setSelectedMonth(month)}
                      >
                        {month}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Warsztaty;