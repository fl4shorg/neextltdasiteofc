import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, MessageCircle, Users } from "lucide-react";
import { useCallback } from 'react';

const channels = [
  {
    id: 1,
    name: "Neext Channel",
    image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=300&h=200&fit=crop",
    description: "Canal principal da Neext com novidades e atualizações"
  },
  {
    id: 2,
    name: "NeextBox",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
    description: "Caixa de ferramentas e recursos exclusivos"
  },
  {
    id: 3,
    name: "NNN News",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=200&fit=crop",
    description: "Notícias e informações em primeira mão"
  },
  {
    id: 4,
    name: "NeextSticker",
    image: "https://images.unsplash.com/photo-1626785774625-0b1c2c4eab97?w=300&h=200&fit=crop",
    description: "Stickers e conteúdos visuais exclusivos"
  },
  {
    id: 5,
    name: "NeextPin",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=200&fit=crop",
    description: "Conteúdos fixados e importantes"
  }
];

const WhatsAppChannelsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  const handleJoinChannel = (channelName: string) => {
    // Simular link do WhatsApp - substituir pelos links reais
    const whatsappLink = `https://wa.me/channel/${channelName.toLowerCase().replace(/\s+/g, '')}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <div className="w-full px-4 py-12 bg-gradient-to-br from-green-50/30 via-emerald-50/20 to-teal-50/30 dark:from-green-900/10 dark:via-emerald-900/10 dark:to-teal-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="text-center sm:text-left">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400 bg-clip-text text-transparent flex items-center gap-3 justify-center sm:justify-start">
              <MessageCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
              Nossos Canais
            </h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
              Junte-se aos nossos canais oficiais no WhatsApp
            </p>
          </div>
          
          <div className="hidden sm:flex gap-2">
            <button
              onClick={scrollPrev}
              className="p-2 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/40 transition-colors"
              aria-label="Canal anterior"
            >
              <ChevronLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
            </button>
            <button
              onClick={scrollNext}
              className="p-2 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/40 transition-colors"
              aria-label="Próximo canal"
            >
              <ChevronRight className="w-5 h-5 text-green-600 dark:text-green-400" />
            </button>
          </div>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {channels.map((channel) => (
              <div key={channel.id} className="embla__slide flex-none w-full sm:w-1/2 lg:w-1/3 px-3">
                <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-[1.02] border-green-200/50 dark:border-green-800/30">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={channel.image}
                        alt={channel.name}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {channel.name}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                        {channel.description}
                      </p>
                      
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => handleJoinChannel(channel.name)}
                      >
                        <Users className="w-4 h-4 mr-2" />
                        Entrar no Canal
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons for mobile */}
        <div className="flex sm:hidden justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="p-3 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/40 transition-colors"
            aria-label="Canal anterior"
          >
            <ChevronLeft className="w-5 h-5 text-green-600 dark:text-green-400" />
          </button>
          <button
            onClick={scrollNext}
            className="p-3 rounded-full bg-green-100 hover:bg-green-200 dark:bg-green-900/30 dark:hover:bg-green-800/40 transition-colors"
            aria-label="Próximo canal"
          >
            <ChevronRight className="w-5 h-5 text-green-600 dark:text-green-400" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppChannelsCarousel;