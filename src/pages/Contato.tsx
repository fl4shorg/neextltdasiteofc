import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Headphones, MessageCircle, Mail, Phone } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contato = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5532983841897?text=Olá! Preciso de suporte.", "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = "mailto:contato@neext.com.br";
  };

  const handlePhoneClick = () => {
    window.location.href = "tel:+5532983841897";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Entre em Contato
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Estamos aqui para ajudá-lo! Entre em contato conosco através dos canais abaixo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleWhatsAppClick}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">WhatsApp</CardTitle>
                <CardDescription>
                  Fale conosco pelo WhatsApp para suporte rápido
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={handleWhatsAppClick}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handleEmailClick}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">E-mail</CardTitle>
                <CardDescription>
                  Envie-nos um e-mail e responderemos em breve
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={handleEmailClick}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Enviar E-mail
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer" onClick={handlePhoneClick}>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Telefone</CardTitle>
                <CardDescription>
                  Ligue para nós durante horário comercial
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={handlePhoneClick}
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  Ligar Agora
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardHeader>
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-white">Suporte Técnico</CardTitle>
                <CardDescription className="text-white/90">
                  Nossa equipe está pronta para resolver suas dúvidas e problemas técnicos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 mb-4">
                  Horário de atendimento: Segunda a Sexta, 8h às 18h
                </p>
                <p className="text-white/90">
                  Resposta em até 24 horas úteis
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contato;