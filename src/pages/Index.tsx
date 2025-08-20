import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesPreview from '@/components/ServicesPreview';
import BlogPreview from '@/components/BlogPreview';
import AboutPreview from '@/components/AboutPreview';
import BookingPreview from '@/components/BookingPreview';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesPreview />
      <BlogPreview />
      <AboutPreview />
      <BookingPreview />
      
      {/* Footer */}
      <footer className="bg-salon-cream py-12 border-t border-border">
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
              <span>ul. Piękna 15, Warszawa</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
