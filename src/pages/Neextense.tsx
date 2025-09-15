import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Globe, Calendar, Timer } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Neextense = () => {
  const currentTime = new Date().toLocaleTimeString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    hour12: false
  });

  const currentDate = new Date().toLocaleDateString('pt-BR', {
    timeZone: 'America/Sao_Paulo',
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Clock className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Neextense
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Nosso Fuso Horário Oficial - Sempre conectados no tempo certo
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Timer className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white text-2xl">Horário Atual</CardTitle>
                <CardDescription className="text-white/90">
                  Brasília - UTC-3
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-4xl font-bold mb-2">{currentTime}</div>
                <div className="text-lg opacity-90">{currentDate}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Horário de Funcionamento</CardTitle>
                <CardDescription>
                  Quando nossa equipe está ativa
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-medium">Segunda a Sexta:</span>
                  <span>8h às 18h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado:</span>
                  <span>9h às 15h</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingo:</span>
                  <span>Fechado</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Card className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl">Fuso Horário Neextense</CardTitle>
                <CardDescription className="text-lg">
                  Baseado no horário de Brasília (GMT-3)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  O Neextense é nosso fuso horário oficial para todas as atividades, 
                  eventos e horários de funcionamento da NEEXT LTDA. Sempre que você 
                  vir um horário mencionado em nossas plataformas, ele estará no 
                  Neextense (horário de Brasília).
                </p>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-blue-600">Eventos</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Sempre no Neextense</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-green-600">Suporte</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Horário comercial</div>
                  </div>
                  <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="font-semibold text-purple-600">Reuniões</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Agendadas no Neextense</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Neextense;