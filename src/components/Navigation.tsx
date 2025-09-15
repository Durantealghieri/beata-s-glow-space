import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavigationProps {
  currentSection?: string;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection = 'home' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();

  const navigationItems = [
    {
      name: 'Zabiegi',
      id: 'zabiegi',
      subItems: ['Wszystkie', 'Trychologia Kosmetologiczna', 'Masaże', 'Terapia Wodorem', 'Kosmetologia Onkologiczna', 'Mezoterapia Mikroigłowa', 'Zabiegi Pielęgnacyjne', 'Peeling Kwasowy', 'Radiofrekwencja']
    },
    {
      name: 'Warsztaty',
      id: 'warsztaty',
      subItems: []
    },
    {
      name: 'Blog',
      id: 'blog',
      subItems: ['Najnowsze artykuły', 'Porady pielęgnacyjne', 'Trendy w kosmetologii']
    },
    {
      name: 'O mnie',
      id: 'o-mnie',
      subItems: []
    },
    {
      name: 'Zapisy',
      id: 'zapisy',
      subItems: []
    }
  ];

  const toggleDropdown = (itemId: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(openDropdown === itemId ? null : itemId);
  };

  const closeDropdown = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(null);
    setIsOpen(false);
  };

  const handleMouseEnter = (itemId: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setOpenDropdown(itemId);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
    setCloseTimeout(timeout);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-foreground hover:text-muted-foreground transition-colors">
              Gabinet Fuli - Beata Andraszewska-Chlebna
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <div key={item.id} className="relative group">
                  {item.subItems.length > 0 ? (
                    <div 
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <Button
                        variant="ghost"
                        onClick={() => {
                          if (item.id === 'zabiegi') {
                            navigate('/zabiegi');
                          } else if (item.id === 'blog') {
                            navigate('/blog');
                          } else {
                            toggleDropdown(item.id);
                          }
                        }}
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
                             {item.subItems.map((subItem, index) => {
                               const getSubItemLink = () => {
                                if (item.id === 'blog') return '/blog';
                                if (item.id === 'o-mnie') return '/o-mnie';
                                if (item.id === 'warsztaty') return '/warsztaty';
                                  if (item.id === 'zabiegi') {
                                    switch (subItem) {
                                      case 'Wszystkie': return '/zabiegi';
                                      case 'Trychologia Kosmetologiczna': return '/zabiegi#trychologia';
                                      case 'Masaże': return '/zabiegi#masaze';
                                      case 'Terapia Wodorem': return '/zabiegi#terapia-wodorem';
                                      case 'Kosmetologia Onkologiczna': return '/zabiegi#kosmetologia-onkologiczna';
                                      case 'Mezoterapia Mikroigłowa': return '/zabiegi#mezoterapia';
                                      case 'Zabiegi Pielęgnacyjne': return '/zabiegi#zabiegi-pielegnacyjne';
                                      case 'Peeling Kwasowy': return '/zabiegi#peeling-kwasowy';
                                      case 'Radiofrekwencja': return '/zabiegi#radiofrekwencja';
                                      default: return '/zabiegi';
                                    }
                                  }
                                 return '#';
                               };
                               
                               return (
                                 <Link
                                   key={index}
                                   to={getSubItemLink()}
                                   onClick={closeDropdown}
                                   className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                                 >
                                   {subItem}
                                 </Link>
                               );
                             })}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.id === 'blog' ? '/blog' : item.id === 'o-mnie' ? '/o-mnie' : item.id === 'warsztaty' ? '/warsztaty' : item.id === 'zabiegi' ? '/zabiegi' : item.id === 'zapisy' ? '/zapisy' : '#'}
                      className={cn(
                        "px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-muted",
                        currentSection === item.id && "bg-salon-rose"
                      )}
                    >
                      {item.name}
                    </Link>
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
                  {item.subItems.length > 0 ? (
                    <>
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
                          {item.subItems.map((subItem, index) => {
                             const getSubItemLink = () => {
                                if (item.id === 'blog') return '/blog';
                                if (item.id === 'o-mnie') return '/o-mnie';
                                if (item.id === 'warsztaty') return '/warsztaty';
                                if (item.id === 'zabiegi') {
                                  switch (subItem) {
                                    case 'Wszystkie': return '/zabiegi';
                                    case 'Trychologia Kosmetologiczna': return '/zabiegi#trychologia';
                                    case 'Masaże': return '/zabiegi#masaze';
                                    case 'Terapia Wodorem': return '/zabiegi#terapia-wodorem';
                                    case 'Kosmetologia Onkologiczna': return '/zabiegi#kosmetologia-onkologiczna';
                                    case 'Mezoterapia Mikroigłowa': return '/zabiegi#mezoterapia';
                                    case 'Zabiegi Pielęgnacyjne': return '/zabiegi#zabiegi-pielegnacyjne';
                                    case 'Peeling Kwasowy': return '/zabiegi#peeling-kwasowy';
                                    case 'Radiofrekwencja': return '/zabiegi#radiofrekwencja';
                                    default: return '/zabiegi';
                                  }
                                }
                               return '#';
                             };
                             
                             return (
                               <Link
                                 key={index}
                                 to={getSubItemLink()}
                                 onClick={closeDropdown}
                                 className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                               >
                                 {subItem}
                               </Link>
                             );
                           })}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.id === 'blog' ? '/blog' : item.id === 'o-mnie' ? '/o-mnie' : item.id === 'warsztaty' ? '/warsztaty' : item.id === 'zabiegi' ? '/zabiegi' : item.id === 'zapisy' ? '/zapisy' : '#'}
                      className={cn(
                        "block w-full px-3 py-2 text-sm font-medium transition-colors hover:bg-muted rounded-md",
                        currentSection === item.id && "bg-salon-rose"
                      )}
                    >
                      {item.name}
                    </Link>
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