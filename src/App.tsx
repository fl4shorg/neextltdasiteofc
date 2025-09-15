import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Painel from "./pages/Painel";
import ApostilaFBI from "./pages/ApostilaFBI";
import Contato from "./pages/Contato";
import Neextense from "./pages/Neextense";
import TikTok from "./pages/TikTok";
import Instagram from "./pages/Instagram";
import Spotify from "./pages/Spotify";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/painel" element={<Painel />} />
            <Route path="/apostila-fbi" element={<ApostilaFBI />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/neextense" element={<Neextense />} />
            <Route path="/tiktok" element={<TikTok />} />
            <Route path="/Instagram" element={<Instagram />} />
            <Route path="/spotify" element={<Spotify />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
