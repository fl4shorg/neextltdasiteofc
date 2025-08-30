import { Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useState, useEffect } from "react";
import { AppSidebar } from "./AppSidebar";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [isPulling, setIsPulling] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
  const [pullDistance, setPullDistance] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleDragStart = (clientX: number, clientY: number) => {
    setDragStart({ x: clientX, y: clientY });
  };

  const handleDragMove = (clientX: number, clientY: number) => {
    if (!dragStart) return;
    
    const deltaY = clientY - dragStart.y;
    if (deltaY > 0) { // Só quando puxa para baixo
      setPullDistance(Math.min(deltaY, 50)); // Máximo 50px
      setIsPulling(deltaY > 5); // Reduzido para 5px
    }
  };

  const handleDragEnd = () => {
    if (pullDistance > 5) { // Threshold bem baixo - qualquer puxada ativa!
      setTimeout(() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }, 150);
    }
    
    setDragStart(null);
    setPullDistance(0);
    setIsPulling(false);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleDragStart(e.clientX, e.clientY);
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault(); // Previne scroll
    const touch = e.touches[0];
    handleDragStart(touch.clientX, touch.clientY);
  };

  // Effect para gerenciar eventos globais
  useEffect(() => {
    if (dragStart) {
      const handleMouseMoveGlobal = (e: MouseEvent) => {
        e.preventDefault();
        handleDragMove(e.clientX, e.clientY);
      };

      const handleTouchMoveGlobal = (e: TouchEvent) => {
        e.preventDefault(); // Previne scroll durante drag
        const touch = e.touches[0];
        handleDragMove(touch.clientX, touch.clientY);
      };

      document.addEventListener('mousemove', handleMouseMoveGlobal);
      document.addEventListener('mouseup', handleDragEnd);
      document.addEventListener('touchmove', handleTouchMoveGlobal, { passive: false });
      document.addEventListener('touchend', handleDragEnd);

      return () => {
        document.removeEventListener('mousemove', handleMouseMoveGlobal);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleTouchMoveGlobal);
        document.removeEventListener('touchend', handleDragEnd);
      };
    }
  }, [dragStart, pullDistance, theme, setTheme]);

  return (
    <>
      <AppSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      
      <header className="w-full bg-background border-b border-border px-4 py-3 relative z-30">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">            
              <div 
                className={`w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center transition-transform duration-300 ${
                  isPulling ? 'scale-110 rotate-3' : 'hover:scale-105'
                }`}
              >
                <Star className="w-5 h-5 text-primary-foreground fill-current" />
              </div>
              
              {/* Cordinha do abajur */}
              <div 
                className={`absolute top-8 left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 to-amber-600 transition-all duration-200 select-none touch-none ${
                  isPulling ? 'from-amber-300 to-amber-500' : 'hover:from-amber-300 hover:to-amber-500'
                }`}
                style={{ 
                  height: `${24 + pullDistance}px`,
                  cursor: dragStart ? 'grabbing' : 'grab'
                }}
              >
                {/* Puxador da cordinha - área maior para mobile */}
                <div 
                  className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg transition-all duration-200 flex items-center justify-center ${
                    isPulling ? 'scale-110 from-amber-500 to-amber-700' : 'hover:scale-105 hover:from-amber-500 hover:to-amber-700'
                  }`}
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleTouchStart}
                  role="button"
                  tabIndex={0}
                  aria-label="Puxe a cordinha para alternar o tema"
                  style={{
                    touchAction: 'none', // Previne scroll durante o drag
                    WebkitTouchCallout: 'none',
                    WebkitUserSelect: 'none',
                    userSelect: 'none'
                  }}
                >
                  {/* Indicador visual interno */}
                  <div className="w-2 h-2 bg-amber-200 rounded-full opacity-60"></div>
                </div>
              </div>
            </div>
            <h1 className="text-xl font-bold text-primary">NEEXT LTDA.</h1>
          </div>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = '/login'}
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.location.href = '/download'}
          >
            <Download className="w-4 h-4" />
          </Button>
          <Button 
            variant="ghost" 
            className="text-primary p-3 hover:bg-primary/10"
            onClick={() => setSidebarOpen(true)}
            aria-label="Abrir menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" height="24" width="24" strokeWidth="1">
              <desc>Dial Pad Center Middle Streamline Icon</desc>
              <g>
                <path fill="url(#paint0_linear_13603_4264)" fillRule="evenodd" d="M2.375 1.75c-.34518 0-.625.27982-.625.625S2.02982 3 2.375 3 3 2.72018 3 2.375s-.27982-.625-.625-.625ZM.5 2.375C.5 1.33947 1.33947.5 2.375.5s1.875.83947 1.875 1.875S3.41053 4.25 2.375 4.25.5 3.41053.5 2.375Zm11.125-.625c-.3452 0-.625.27982-.625.625s.2798.625.625.625.625-.27982.625-.625-.2798-.625-.625-.625Zm-1.875.625C9.75 1.33947 10.5895.5 11.625.5c1.0355 0 1.875.83947 1.875 1.875s-.8395 1.875-1.875 1.875c-1.0355 0-1.875-.83947-1.875-1.875ZM11 7c0-.34518.2798-.625.625-.625s.625.27982.625.625-.2798.625-.625.625S11 7.34518 11 7Zm.625-1.875c-1.0355 0-1.875.83947-1.875 1.875s.8395 1.875 1.875 1.875c1.0355 0 1.875-.83947 1.875-1.875s-.8395-1.875-1.875-1.875Zm0 5.875c-.3452 0-.625.2798-.625.625s.2798.625.625.625.625-.2798.625-.625-.2798-.625-.625-.625Zm-1.875.625c0-1.0355.8395-1.875 1.875-1.875 1.0355 0 1.875.8395 1.875 1.875 0 1.0355-.8395 1.875-1.875 1.875-1.0355 0-1.875-.8395-1.875-1.875Zm-3.375-9.25c0-.34518.27982-.625.625-.625s.625.27982.625.625S7.34518 3 7 3s-.625-.27982-.625-.625ZM7 .5c-1.03553 0-1.875.83947-1.875 1.875S5.96447 4.25 7 4.25s1.875-.83947 1.875-1.875S8.03553.5 7 .5ZM7 11c-.34518 0-.625.2798-.625.625s.27982.625.625.625.625-.2798.625-.625S7.34518 11 7 11Zm-1.875.625c0-1.0355.83947-1.875 1.875-1.875s1.875.8395 1.875 1.875c0 1.0355-.83947 1.875-1.875 1.875s-1.875-.8395-1.875-1.875ZM1.75 7c0-.34518.27982-.625.625-.625S3 6.65482 3 7s-.27982.625-.625.625S1.75 7.34518 1.75 7Zm.625-1.875C1.33947 5.125.5 5.96447.5 7s.83947 1.875 1.875 1.875S4.25 8.03553 4.25 7s-.83947-1.875-1.875-1.875Zm4.625 0c-1.03553 0-1.875.83947-1.875 1.875S5.96447 8.875 7 8.875 8.875 8.03553 8.875 7 8.03553 5.125 7 5.125Zm-5.25 6.5c0-.3452.27982-.625.625-.625s.625.2798.625.625-.27982.625-.625.625-.625-.2798-.625-.625Zm.625-1.875C1.33947 9.75.5 10.5895.5 11.625c0 1.0355.83947 1.875 1.875 1.875s1.875-.8395 1.875-1.875c0-1.0355-.83947-1.875-1.875-1.875Z" clipRule="evenodd"></path>
              </g>
              <defs>
                <linearGradient id="paint0_linear_13603_4264" x1="1" x2="15.816" y1="1.551" y2="9.901" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#00f6e7"></stop>
                  <stop offset="1" stopColor="#6d1fec"></stop>
                </linearGradient>
              </defs>
            </svg>
          </Button>
        </div>
      </div>
    </header>
    </>
  );
};

export default Header;