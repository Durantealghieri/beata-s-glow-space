import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import salonInterior from '@/assets/salon-interior.jpg';
const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={salonInterior} alt="Eleganckie wnętrze salonu kosmetycznego" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Badge */}
            

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Odkryj swoją
                <span className="block text-transparent bg-gradient-to-r from-salon-rose to-accent bg-clip-text">
                  naturalną urodę
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Profesjonalny gabinet na warszawskim Ursynowie, który stworzyłam z pasji do naturalnego piękna oraz z chęci niesienia pomocy w uzyskaniu zdrowej skóry – zarówno twarzy, jak i skóry głowy – w pełnej harmonii z naturą. Specjalizujemy się w terapiach skóry trudnej i problematycznej, zabiegach przeciwzmarszczkowych, terapiach na ciało oraz pielęgnacji skóry w trakcie leczenia onkologicznego.
              </p>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                <div className="text-2xl font-bold text-salon-rose">20+</div>
                <div className="text-sm text-muted-foreground">lat dowiadczenia</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                <div className="text-2xl font-bold text-salon-rose">Setki</div>
                <div className="text-sm text-muted-foreground">zadowolonych klientek</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                <div className="text-2xl font-bold text-salon-rose">Dziesiątki</div>
                <div className="text-sm text-muted-foreground">szkoleń specjalistycznych</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group" onClick={() => navigate('/zapisy')}>
                Umów wizytę
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={() => navigate('/zabiegi')}>
                Zobacz nasze zabiegi
              </Button>
            </div>

            {/* Trust Indicators */}
            
          </div>

          {/* Right side - Additional visual element */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-salon-rose/20 to-salon-cream/30 rounded-3xl transform rotate-3" />
            <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-card">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Dlaczego klientki wybierają nas?
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-salon-rose rounded-full" />
                  <span className="text-muted-foreground">Indywidualne podejście pełne pasji</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-salon-rose rounded-full" />
                  <span className="text-muted-foreground">Najnowocześniejsze technologie</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-salon-rose rounded-full" />
                  <span className="text-muted-foreground">Komfortowe i bezpieczne warunki</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-salon-rose rounded-full" />
                  <span className="text-muted-foreground">Stała opieka i follow-up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-salon-rose rounded-full flex justify-center">
          <div className="w-1 h-3 bg-salon-rose rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>;
};
export default HeroSection;