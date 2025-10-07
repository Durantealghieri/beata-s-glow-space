import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, User } from 'lucide-react';
import facialTreatment from '@/assets/facial-treatment.jpg';

const BlogPreview: React.FC = () => {
  const featuredArticle = {
    title: "Mezoterapia mikroigłowa z elektroporacją – nowy wymiar regeneracji skóry",
    excerpt: "Poznaj innowacyjną technikę łączącą mikronakłuwanie z elektroporacją. Dowiedz się, jak działa ten zabieg, jakie daje efekty i dla kogo jest przeznaczony.",
    date: "7 października 2025",
    author: "Beata Andraszewska Chlebna",
    readTime: "12 min czytania"
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
              <Button asChild className="group">
                <Link to="/blog">
                  Czytaj więcej
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/blog">
              Zobacz wszystkie artykuły
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;