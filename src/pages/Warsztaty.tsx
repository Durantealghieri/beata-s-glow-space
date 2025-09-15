import { useEffect } from 'react';
import Navigation from '@/components/Navigation';

const Warsztaty = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="warsztaty" />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Warsztaty</h1>
        {/* Content will be added later */}
      </main>
    </div>
  );
};

export default Warsztaty;