import { Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const SupportCTA = () => {
  const navigate = useNavigate();
  
  const handleSupportClick = () => {
    navigate('/contato');
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