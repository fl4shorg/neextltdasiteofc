import { ArrowLeft, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Painel = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-8 h-8 text-purple-500" />
            <h1 className="text-3xl font-bold text-foreground">Painel da Neext</h1>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-xl border shadow-lg">
          <p className="text-muted-foreground">
            Esta página está em desenvolvimento. Em breve teremos o painel administrativo completo da Neext.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Painel;