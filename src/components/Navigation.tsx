import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  currentSection?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems = [
    {
      name: 'Zabiegi',
      id: 'zabiegi',
      subItems: ['Zabiegi na twarz', 'Pielęgnacja ciała', 'Makijaż permanentny']
    },
    {
      name: 'Blog',
      id: 'blog',
      subItems: ['Najnowsze artykuły', 'Porady pielęgnacyjne', 'Trendy w kosmetologii']
    },
    {
      name: 'O mnie',
      id: 'o-mnie',
      subItems: ['Moja historia', 'Kwalifikacje', 'Filozofia pracy']
    },
    {
      name: 'Zapisy',
      id: 'zapisy',
      subItems: ['Umów wizytę', 'Cennik', 'Kontakt']
    }
  ];

  const toggleDropdown = (itemId: string) => {
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-foreground">
              Beata Andraszewska Chlebna
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative group">
                  <Button
                    variant="ghost"
                    onClick={() => toggleDropdown(item.id)}
                    className={cn(
                      "flex items-center space-x-1 transition-colors",
                      currentSection === item.id && "bg-salon-rose"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  
                  {/* Dropdown Menu */}
                  {openDropdown === item.id && (
                    <div className="absolute left-0 mt-2 w-56 rounded-md shadow-card bg-card border border-border overflow-hidden z-10">
                      <div className="py-1">
                        {item.subItems.map((subItem, index) => (
                          <a
                            key={index}
                            href="#"
                            className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                          >
                            {subItem} (WIP)
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              {navigationItems.map((item) => (
                <div key={item.id} className="space-y-1">
                  <Button
                    variant="ghost"
                    onClick={() => toggleDropdown(item.id)}
                    className={cn(
                      "w-full justify-between",
                      currentSection === item.id && "bg-salon-rose"
                    )}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                  
                  {openDropdown === item.id && (
                    <div className="pl-4 space-y-1">
                      {item.subItems.map((subItem, index) => (
                        <a
                          key={index}
                          href="#"
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                          {subItem} (WIP)
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;