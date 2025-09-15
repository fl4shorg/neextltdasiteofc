import { Button } from "@/components/ui/button";
import { TrendingUp, Newspaper, HardDrive, Sparkles, Gift } from "lucide-react";

const Navigation = () => {
  const navItems = [
    { name: "Level", icon: TrendingUp, url: "/round6" },
    { name: "NNN NEWS", icon: Newspaper, url: "https://whatsapp.com/channel/0029VbAIEWqIHphCViJIqx3l" },
    { name: "Backup", icon: HardDrive, url: "/Phagex" },
    { name: "Novidades", icon: Sparkles, url: "/novidades" },
    { name: "Giftcard", icon: Gift, url: "https://www.neext.online/redeem" }
  ];

  return (
    <nav className="w-full bg-background px-4 py-4">
      <div className="max-w-md mx-auto">
        <div className="flex justify-between gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button 
                key={item.name} 
                variant="ghost" 
                className="text-primary hover:text-primary hover:bg-primary/10 font-medium text-xs flex-1 flex flex-col items-center gap-1 h-auto py-2 px-1"
                onClick={() => window.location.href = item.url}
              >
                <Icon size={16} />
                <span>{item.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;