import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Warsztaty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    // Load Facebook SDK
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {
        // If SDK already loaded, reparse
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
        return;
      }
      js = d.createElement(s) as HTMLScriptElement;
      js.id = id;
      js.src = "https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v18.0";
      js.onload = () => {
        // Parse the page once SDK is loaded
        if ((window as any).FB) {
          (window as any).FB.XFBML.parse();
        }
      };
      fjs.parentNode?.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div id="fb-root"></div>
      <Navigation currentSection="warsztaty" />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-salon-gold to-salon-rose bg-clip-text text-transparent">
              Wydarzenia i warsztaty
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bądź na bieżąco z naszymi najnowszymi wydarzeniami, warsztatami i promocjami. 
              Śledź naszą stronę na Facebooku, aby nie przegapić żadnej okazji.
            </p>
          </header>

          <div className="bg-card rounded-lg shadow-elegant p-6 mb-8">
            <div className="flex flex-col items-center gap-6">
              <div className="w-full flex justify-center">
                {/* Desktop version - large */}
                <div 
                  className="fb-page hidden md:block" 
                  data-href="https://www.facebook.com/fuliwarszawa"
                  data-tabs="timeline,events"
                  data-width="1200"
                  data-height="1200"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote 
                    cite="https://www.facebook.com/fuliwarszawa" 
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/fuliwarszawa">
                      Beata Andraszewska Chlebna - Kosmetologia
                    </a>
                  </blockquote>
                </div>
                
                {/* Mobile version - compact */}
                <div 
                  className="fb-page block md:hidden" 
                  data-href="https://www.facebook.com/fuliwarszawa"
                  data-tabs="timeline,events"
                  data-width="340"
                  data-height="600"
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote 
                    cite="https://www.facebook.com/fuliwarszawa" 
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href="https://www.facebook.com/fuliwarszawa">
                      Beata Andraszewska Chlebna - Kosmetologia
                    </a>
                  </blockquote>
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Pełna wersja strony z dodatkowymi funkcjami dostępna na Facebooku
                </p>
                <Button 
                  variant="outline" 
                  asChild
                  className="gap-2"
                >
                  <a 
                    href="https://www.facebook.com/fuliwarszawa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Odwiedź naszą stronę na Facebooku
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-salon-cream/30 rounded-lg p-6 border border-salon-gold/20">
            <h2 className="text-xl font-semibold mb-3 text-foreground">
              Dlaczego warto nas obserwować?
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-salon-gold mt-1">✓</span>
                <span>Informacje o najnowszych zabiegach i promocjach</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-salon-gold mt-1">✓</span>
                <span>Zapowiedzi warsztatów i szkoleń kosmetycznych</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-salon-gold mt-1">✓</span>
                <span>Porady pielęgnacyjne i beauty tips</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-salon-gold mt-1">✓</span>
                <span>Relacje z naszych wydarzeń i eventów</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Warsztaty;