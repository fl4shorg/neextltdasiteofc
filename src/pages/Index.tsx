import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import SearchBar from "@/components/SearchBar";
import HeroSection from "@/components/HeroSection";
import SupportCTA from "@/components/SupportCTA";
import MedalhaoCarousel from "@/components/MedalhaoCarousel";

import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Smartphone, Download, ExternalLink, BarChart3, Scroll, Clock, Calendar } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const foundationDate = new Date(2019, 2, 1); // 01/03/2019 (mês é 0-indexed)
  const timeElapsed = useCountdown(foundationDate);
  
  // Animações de scroll
  const { elementRef: appsRef, isVisible: appsVisible } = useScrollAnimation();
  const { elementRef: historyRef, isVisible: historyVisible } = useScrollAnimation();
  const { elementRef: counterRef, visibleItems: counterVisible } = useStaggeredAnimation(5, 200);
  const { elementRef: timezoneRef, isVisible: timezoneVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Navigation />
      <Separator className="w-full" />
      <SearchBar />
      <HeroSection />
      <SupportCTA />
      
      <Separator className="w-full my-8" />
      <MedalhaoCarousel />
      <Separator className="w-full my-8" />
      
      {/* Aplicativos Oficiais */}
      <div ref={appsRef} className="w-full px-4 py-12 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${
            appsVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Nossos Aplicativos Oficiais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Acesse toda a funcionalidade da Neext através dos nossos aplicativos oficiais
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`bg-card p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-[1.02] ${
              appsVisible ? 'animate-scale-in opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    App Neext
                  </h3>
                  <p className="text-sm text-primary font-medium">Aplicativo Principal</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Tenha acesso completo à plataforma Neext em seu dispositivo móvel. 
                Gerencie seus projetos, conecte-se com profissionais e muito mais.
              </p>
              
              <div className="flex gap-3">
                <Button 
                  className="flex-1 bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/download-app'}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.location.href = '/app-info'}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
            
            <div className={`bg-card p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-700 hover:scale-[1.02] delay-200 ${
              appsVisible ? 'animate-scale-in opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-full bg-secondary/20">
                  <BarChart3 className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Painel Neext
                  </h3>
                  <p className="text-sm text-secondary font-medium">Gestão Profissional</p>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gerencie seus projetos e acompanhe métricas detalhadas com nosso 
                painel administrativo profissional e intuitivo.
              </p>
              
              <div className="flex gap-3">
                <Button 
                  variant="secondary" 
                  className="flex-1"
                  onClick={() => window.location.href = '/download-painel'}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar Agora
                </Button>
                <Button 
                  variant="outline" 
                  size="icon"
                  onClick={() => window.location.href = '/painel-info'}
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="w-full my-8" />
      
      {/* História da Neext */}
      <div id="historia-neext" ref={historyRef} className="w-full px-4 py-16 bg-gradient-to-b from-amber-50/50 via-orange-50/30 to-yellow-50/50 dark:from-amber-900/10 dark:via-orange-900/10 dark:to-yellow-900/10">
        <div className="max-w-4xl mx-auto">
          <div className={`relative bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 p-8 md:p-12 rounded-2xl border-4 border-amber-200 dark:border-amber-700/50 shadow-2xl transition-all duration-700 ${
            historyVisible ? 'animate-slide-in-right opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}>
            {/* Decorative corners */}
            <div className="absolute top-4 left-4 w-6 h-6 border-l-4 border-t-4 border-amber-400 dark:border-amber-600"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-r-4 border-t-4 border-amber-400 dark:border-amber-600"></div>
            <div className="absolute bottom-4 left-4 w-6 h-6 border-l-4 border-b-4 border-amber-400 dark:border-amber-600"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-r-4 border-b-4 border-amber-400 dark:border-amber-600"></div>
            
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-4 rounded-full bg-amber-200/50 dark:bg-amber-800/50">
                  <Scroll className="w-12 h-12 text-amber-700 dark:text-amber-300" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-amber-900 dark:text-amber-100 font-serif">
                  História da Neext
                </h2>
              </div>
              
              <div className="w-24 h-1 bg-amber-400 dark:bg-amber-600 mx-auto mb-8 rounded-full"></div>
              
              <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed font-medium max-w-3xl mx-auto">
                A Neext foi fundada e criada em 01/03/2019 e segue firme até hoje. O principal objetivo da Neext é ajudar e acolher pessoas que têm dificuldade em fazer amigos ou se enturmar, independentemente de identidade, ideologia ou raça. A Neext tem como missão principal fazer com que as pessoas se sintam parte de algo e que pertençam a um lugar. Além disso, a principal missão da Neext é se tornar uma empresa e conectar pessoas de todo o mundo.
              </p>
              <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed font-medium max-w-3xl mx-auto mt-4">
                No passado, a Neext quase deixou de existir após uma tentativa de golpe de estado na team Skaikru, nome que a comunidade carregava antigamente. Originalmente, a Neext surgiu de uma team de guerra chamada Team Skaikru e foi salva de um golpe de estado da team Lobos pelo Koala Havaianas. Esse momento foi crucial para a sobrevivência da Neext, sem o qual ela não existiria atualmente.
              </p>
              <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed font-medium max-w-3xl mx-auto mt-4">
                Além disso, a Neext enfrentou outro golpe de estado em 2021 contra os Palhaços Os Loucos, a maior facção de trava zap na época, mas a Neext conseguiu se salvar, banindo e dizimando toda a team. Em 2023, a Neext sofreu uma guerra provocada pelos diretores do FBI, o que afetou toda a comunidade e causou milhares de kitamentos em massa. A guerra também impactou o Skur, o Discord e o Telegram, que sofreram meses de isolamento.
              </p>
              <p className="text-lg text-amber-800 dark:text-amber-200 leading-relaxed font-medium max-w-3xl mx-auto mt-4">
                No entanto, a Neext se uniu e conseguiu se manter forte, aguentando meses de guerra. Desde então, a Neext segue firme e forte, evoluindo continuamente.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="w-full my-8" />
      
      {/* Contador desde a Fundação */}
      <div ref={counterRef} className="w-full px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className={`bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 p-6 rounded-2xl text-white shadow-2xl transition-all duration-700 ${
            counterVisible.size > 0 ? 'animate-scale-in opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Calendar className="w-5 h-5" />
              <h2 className="text-lg md:text-xl font-bold">
                Contador desde a Fundação
              </h2>
            </div>
            
            <div className="grid grid-cols-5 gap-2 md:gap-4 mb-3">
              <div className={`text-center transition-all duration-500 ${
                counterVisible.has(0) ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl md:text-3xl font-bold">
                  {timeElapsed.years.toString().padStart(2, '0')}
                </div>
                <div className="text-xs opacity-90">
                  Anos
                </div>
              </div>
              
              <div className={`text-center transition-all duration-500 ${
                counterVisible.has(1) ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl md:text-3xl font-bold">
                  {timeElapsed.days.toString().padStart(2, '0')}
                </div>
                <div className="text-xs opacity-90">
                  Dias
                </div>
              </div>
              
              <div className={`text-center transition-all duration-500 ${
                counterVisible.has(2) ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl md:text-3xl font-bold">
                  {timeElapsed.hours.toString().padStart(2, '0')}
                </div>
                <div className="text-xs opacity-90">
                  Horas
                </div>
              </div>
              
              <div className={`text-center transition-all duration-500 ${
                counterVisible.has(3) ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl md:text-3xl font-bold">
                  {timeElapsed.minutes.toString().padStart(2, '0')}
                </div>
                <div className="text-xs opacity-90">
                  Minutos
                </div>
              </div>
              
              <div className={`text-center transition-all duration-500 ${
                counterVisible.has(4) ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <div className="text-2xl md:text-3xl font-bold">
                  {timeElapsed.seconds.toString().padStart(2, '0')}
                </div>
                <div className="text-xs opacity-90">
                  Segundos
                </div>
              </div>
            </div>
            
            <div className="text-xs opacity-75">
              Desde 01/03/2019
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="w-full my-8" />
      
      {/* Neextense - Fuso Horário Oficial */}
      <div ref={timezoneRef} className="w-full px-4 py-16 bg-gradient-to-br from-blue-50/30 via-cyan-50/20 to-teal-50/30 dark:from-blue-900/10 dark:via-cyan-900/10 dark:to-teal-900/10">
        <div className="max-w-4xl mx-auto">
          <div className={`bg-gradient-to-br from-blue-600/5 to-cyan-600/5 dark:from-blue-400/10 dark:to-cyan-400/10 p-8 md:p-12 rounded-2xl border border-blue-200/50 dark:border-blue-700/30 shadow-xl transition-all duration-700 ${
            timezoneVisible ? 'animate-fade-in opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Clock className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
                  Neextense
                </h2>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-800 dark:text-blue-200 mb-4">
                  Nosso Fuso Horário Oficial
                </h3>
                <p className="text-lg text-blue-700 dark:text-blue-300 leading-relaxed max-w-2xl mx-auto mb-6">
                  Conheça o <strong>Neextense</strong>, nosso fuso horário oficial. Saiba os horários 
                  que o grupo fecha e abre.
                </p>
                
                <Button 
                  size="sm"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.open('https://neext.com/neextense', '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Saiba Mais
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="w-full my-8" />
      
      {/* Ferramentas de Download */}
      <div className="w-full px-4 py-16 bg-gradient-to-br from-green-50/30 via-emerald-50/20 to-teal-50/30 dark:from-green-900/10 dark:via-emerald-900/10 dark:to-teal-900/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ferramentas de Download de Vídeo Gratuitas da Neext
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Baixe vídeos das suas plataformas favoritas de forma rápida e gratuita
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">TikTok Download</h3>
                <p className="text-muted-foreground mb-4">Baixe vídeos do TikTok sem marca d'água</p>
                <Button 
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  onClick={() => window.open('/tiktok-download', '_blank')}
                >
                  Acessar Ferramenta
                </Button>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Instagram Download</h3>
                <p className="text-muted-foreground mb-4">Baixe fotos e vídeos do Instagram facilmente</p>
                <Button 
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                  onClick={() => window.open('/instagram-download', '_blank')}
                >
                  Acessar Ferramenta
                </Button>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Spotify Download</h3>
                <p className="text-muted-foreground mb-4">Baixe músicas do Spotify em alta qualidade</p>
                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  onClick={() => window.open('/spotify-download', '_blank')}
                >
                  Acessar Ferramenta
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="w-full my-8" />
      
      {/* Planos de ADMs */}
      <div className="w-full px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Planos de ADMs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano ideal para suas necessidades administrativas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ADM VIP */}
            <div className="bg-card p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">ADM VIP</h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  R$ 20
                </div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Acesso a 5 grupos
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Não tem acesso a contas streaming
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Não tem acesso ao grupo VIP
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Não tem acesso a 10 grupos
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Não paga taxa
                </li>
                <li className="flex items-center text-sm text-muted-foreground">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Não tem suporte 24 horas
                </li>
              </ul>
              
              <Button className="w-full" variant="outline">
                Escolher Plano
              </Button>
            </div>
            
            {/* ADM Plus */}
            <div className="bg-card p-8 rounded-xl border-2 border-primary shadow-lg hover:shadow-xl transition-all duration-300 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Mais Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">ADM Plus</h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  R$ 35
                </div>
                <p className="text-sm text-muted-foreground">+ R$ 5/mês taxa</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Acesso a 10 grupos
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Acesso ao grupo VIP
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Contas streaming todos os dias
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Suporte 24 horas
                </li>
                <li className="flex items-center text-sm text-orange-600">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Paga taxa de R$ 5 por mês
                </li>
              </ul>
              
              <Button className="w-full">
                Escolher Plano
              </Button>
            </div>
            
            {/* ADM Enterprise */}
            <div className="bg-card p-8 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">ADM Enterprise</h3>
                <div className="text-3xl font-bold text-primary mb-4">
                  R$ 50
                </div>
                <p className="text-sm text-muted-foreground">Pagamento único</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Acesso a todos os grupos da Neext
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Contas streaming a hora que quiser
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Permanente sem perda com contrato
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Acesso ao grupo VIP
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Não paga taxa
                </li>
              </ul>
              
              <Button className="w-full" variant="secondary">
                Escolher Plano
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Separator className="w-full my-8" />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
