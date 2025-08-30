import { ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ApostilaFBI = () => {
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
            <FileText className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-bold text-foreground">Apostila FBI</h1>
          </div>
        </div>
        
        <div className="bg-card p-8 rounded-xl border shadow-lg">
          <p className="text-muted-foreground">
            Apostila de treinamento FBI em desenvolvimento.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ApostilaFBI;