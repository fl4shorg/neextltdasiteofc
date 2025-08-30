import { Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";

const SupportCTA = () => {
  const handleSupportClick = () => {
    // Aqui você pode adicionar a lógica de suporte
    window.open("https://wa.me/5532983841897?text=Olá! Preciso de suporte.", "_blank");
  };

  return (
    <div className="w-full px-4 py-2">
      <div className="max-w-md mx-auto">
        <Button 
          onClick={handleSupportClick}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 rounded-2xl text-lg font-medium"
        >
          <Headphones className="w-6 h-6 mr-3" />
          Suporte
        </Button>
      </div>
    </div>
  );
};

export default SupportCTA;