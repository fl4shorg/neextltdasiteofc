import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  FileText, 
  BarChart3, 
  Home, 
  ExternalLink, 
  Smartphone,
  Medal,
  Scroll,
  Calendar,
  Clock,
  Camera,
  MessageCircle,
  Shield,
  Trophy
} from "lucide-react";

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const searchItems = [
    // Navegação
    {
      id: "home",
      title: "Página Inicial",
      description: "Voltar à página principal",
      icon: Home,
      action: () => navigate("/")
    },
    {
      id: "painel",
      title: "Painel",
      description: "Acesse o painel administrativo",
      icon: BarChart3,
      action: () => navigate("/painel")
    },
    {
      id: "apostila",
      title: "Apostila FBI",
      description: "Visualizar apostila do FBI",
      icon: FileText,
      action: () => navigate("/apostila-fbi")
    },
    // Medalhas - todas as pessoas com medalhas
    {
      id: "koala",
      title: "Koala",
      description: "Herói defensor - impediu golpe de estado da Team Lobos",
      icon: Medal,
      action: () => {
        const medallasSection = document.querySelector('[data-section="medalhas"]');
        if (medallasSection) {
          medallasSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "gus",
      title: "Gus", 
      description: "Protetor da integridade - impediu arquivamento em massa",
      icon: Medal,
      action: () => {
        const medallasSection = document.querySelector('[data-section="medalhas"]');
        if (medallasSection) {
          medallasSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "ruby",
      title: "Ruby",
      description: "Guardião contra conspirações e ameaças do FBI",
      icon: Medal,
      action: () => {
        const medallasSection = document.querySelector('[data-section="medalhas"]');
        if (medallasSection) {
          medallasSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "rany",
      title: "Rany",
      description: "Melhor diretora atual - legado e evolução do Skur",
      icon: Medal,
      action: () => {
        const medallasSection = document.querySelector('[data-section="medalhas"]');
        if (medallasSection) {
          medallasSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    // Aplicativos
    {
      id: "app-neext",
      title: "App Neext",
      description: "Aplicativo principal da plataforma Neext",
      icon: Smartphone,
      action: () => window.open('https://www.neext.online/appoficial', '_blank')
    },
    {
      id: "painel-neext",
      title: "Painel Neext", 
      description: "Gestão profissional e métricas detalhadas",
      icon: BarChart3,
      action: () => window.open('https://www.neext.online/download', '_blank')
    },
    // Seções da página
    {
      id: "historia",
      title: "História da Neext",
      description: "Fundada em 01/03/2019, acolhe pessoas de todo mundo",
      icon: Scroll,
      action: () => {
        const section = document.querySelector('h2');
        if (section && section.textContent?.includes('História')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "contador",
      title: "Contador Fundação",
      description: "Tempo desde a fundação da Neext em tempo real",
      icon: Calendar,
      action: () => {
        const section = document.querySelector('h2');
        if (section && section.textContent?.includes('Contador')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "neextense",
      title: "Neextense",
      description: "Fuso horário oficial da Neext",
      icon: Clock,
      action: () => window.location.href = '/#/neextense'
    },
    // Redes sociais e canais
    {
      id: "instagram",
      title: "Instagram",
      description: "Perfil oficial no Instagram",
      icon: Camera,
      action: () => window.location.href = '/#/Instagram'
    },
    {
      id: "whatsapp-canal",
      title: "Canal WhatsApp",
      description: "Canal oficial no WhatsApp",
      icon: MessageCircle,
      action: () => window.open('https://whatsapp.com/channel/0029VaEyxdl6LKKuLcF79P0Z', '_blank')
    },
    {
      id: "canais-whatsapp",
      title: "Canais WhatsApp",
      description: "Todos os canais oficiais do WhatsApp",
      icon: MessageCircle,
      action: () => {
        const section = document.querySelector('h2');
        if (section && section.textContent?.includes('Canais')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    // Conteúdos específicos e históricos
    {
      id: "golpe-lobos",
      title: "Golpe Team Lobos",
      description: "História do golpe impedido por Koala",
      icon: Shield,
      action: () => {
        const section = document.querySelector('h2');
        if (section && section.textContent?.includes('História')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "guerra-fbi",
      title: "Guerra FBI",
      description: "Conflito com diretores do FBI em 2023",
      icon: Shield,
      action: () => {
        const section = document.querySelector('h2');
        if (section && section.textContent?.includes('História')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "team-skaikru",
      title: "Team Skaikru",
      description: "Origem da Neext como team de guerra",
      icon: Trophy,
      action: () => {
        const section = document.querySelector('h2');
        if (section && section.textContent?.includes('História')) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    },
    {
      id: "medalhas",
      title: "Medalhas",
      description: "Ver todas as medalhas da comunidade Neext",
      icon: Medal,
      action: () => {
        const medallasSection = document.querySelector('[data-section="medalhas"]');
        if (medallasSection) {
          medallasSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  ];

  const handleSelect = (item: typeof searchItems[0]) => {
    setOpen(false);
    item.action();
  };

  return (
    <div className="w-full px-4 py-6">
      <div className="max-w-md mx-auto">
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal bg-muted border-0 rounded-full py-3 h-auto"
          onClick={() => setOpen(true)}
        >
          <Search className="w-5 h-5 mr-3 text-muted-foreground" />
          <span className="text-muted-foreground">Pesquise...</span>
        </Button>
        
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Digite para pesquisar..." />
          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            <CommandGroup heading="Páginas">
              {searchItems.map((item) => (
                <CommandItem
                  key={item.id}
                  onSelect={() => handleSelect(item)}
                  className="cursor-pointer"
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  <div className="flex flex-col">
                    <span>{item.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </div>
    </div>
  );
};

export default SearchBar;