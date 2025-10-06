import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Calendar as CalendarIcon, Clock, Trash2, Edit } from 'lucide-react';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { toast } from '@/hooks/use-toast';

interface Event {
  id: string;
  title: string;
  description: string;
  date: Date;
  time: string;
}

const Warsztaty = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [events, setEvents] = useState<Event[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    time: ''
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const eventsOnSelectedDate = events.filter(event => 
    selectedDate && format(event.date, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  const datesWithEvents = events.map(event => format(event.date, 'yyyy-MM-dd'));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !formData.title || !formData.time) {
      toast({
        title: "Błąd",
        description: "Wypełnij wszystkie wymagane pola",
        variant: "destructive"
      });
      return;
    }

    if (editingEvent) {
      setEvents(events.map(event => 
        event.id === editingEvent.id 
          ? { ...event, ...formData, date: selectedDate }
          : event
      ));
      toast({
        title: "Sukces",
        description: "Wydarzenie zostało zaktualizowane"
      });
    } else {
      const newEvent: Event = {
        id: Date.now().toString(),
        title: formData.title,
        description: formData.description,
        date: selectedDate,
        time: formData.time
      };
      setEvents([...events, newEvent]);
      toast({
        title: "Sukces",
        description: "Wydarzenie zostało dodane"
      });
    }

    setFormData({ title: '', description: '', time: '' });
    setEditingEvent(null);
    setIsDialogOpen(false);
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      time: event.time
    });
    setSelectedDate(event.date);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Sukces",
      description: "Wydarzenie zostało usunięte"
    });
  };

  const openNewEventDialog = () => {
    setEditingEvent(null);
    setFormData({ title: '', description: '', time: '' });
    setIsDialogOpen(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentSection="warsztaty" />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-salon-gold to-salon-rose bg-clip-text text-transparent">
              Wydarzenia i warsztaty
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Zarządzaj wydarzeniami, warsztatami i promocjami w jednym miejscu
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Calendar Section */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="w-5 h-5 text-salon-gold" />
                  Kalendarz wydarzeń
                </CardTitle>
                <CardDescription>
                  Wybierz datę, aby zobaczyć lub dodać wydarzenia
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  locale={pl}
                  className="rounded-md border pointer-events-auto"
                  modifiers={{
                    hasEvent: (date) => datesWithEvents.includes(format(date, 'yyyy-MM-dd'))
                  }}
                  modifiersClassNames={{
                    hasEvent: 'bg-salon-gold/20 font-bold'
                  }}
                />
              </CardContent>
            </Card>

            {/* Events List Section */}
            <Card className="shadow-elegant">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>
                      {selectedDate ? format(selectedDate, 'dd MMMM yyyy', { locale: pl }) : 'Wybierz datę'}
                    </CardTitle>
                    <CardDescription>
                      {eventsOnSelectedDate.length === 0 
                        ? 'Brak wydarzeń tego dnia' 
                        : `${eventsOnSelectedDate.length} ${eventsOnSelectedDate.length === 1 ? 'wydarzenie' : 'wydarzenia'}`}
                    </CardDescription>
                  </div>
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <Button 
                        onClick={openNewEventDialog}
                        className="gap-2"
                        disabled={!selectedDate}
                      >
                        <Plus className="w-4 h-4" />
                        Dodaj
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <form onSubmit={handleSubmit}>
                        <DialogHeader>
                          <DialogTitle>
                            {editingEvent ? 'Edytuj wydarzenie' : 'Nowe wydarzenie'}
                          </DialogTitle>
                          <DialogDescription>
                            {selectedDate && format(selectedDate, 'dd MMMM yyyy', { locale: pl })}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4 py-4">
                          <div className="space-y-2">
                            <Label htmlFor="title">Tytuł *</Label>
                            <Input
                              id="title"
                              value={formData.title}
                              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                              placeholder="Nazwa wydarzenia"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="time">Godzina *</Label>
                            <Input
                              id="time"
                              type="time"
                              value={formData.time}
                              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="description">Opis</Label>
                            <Textarea
                              id="description"
                              value={formData.description}
                              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                              placeholder="Szczegóły wydarzenia..."
                              rows={4}
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">
                            {editingEvent ? 'Zaktualizuj' : 'Dodaj wydarzenie'}
                          </Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 max-h-[500px] overflow-y-auto">
                  {eventsOnSelectedDate.length === 0 ? (
                    <div className="text-center py-8 text-muted-foreground">
                      <CalendarIcon className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>Brak wydarzeń tego dnia</p>
                      {selectedDate && (
                        <p className="text-sm mt-1">Kliknij "Dodaj", aby utworzyć wydarzenie</p>
                      )}
                    </div>
                  ) : (
                    eventsOnSelectedDate.map(event => (
                      <div 
                        key={event.id} 
                        className="bg-salon-cream/30 border border-salon-gold/20 rounded-lg p-4 space-y-2"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <div className="flex gap-1">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(event)}
                              className="h-8 w-8"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(event.id)}
                              className="h-8 w-8 text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{event.time}</span>
                        </div>
                        {event.description && (
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Warsztaty;