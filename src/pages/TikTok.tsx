import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Video, ExternalLink, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const TikTok = () => {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    if (url) {
      // Aqui você implementaria a lógica de download
      console.log("Downloading TikTok video:", url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600">
                <Video className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                TikTok Download
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Baixe vídeos do TikTok sem marca d'água de forma rápida e gratuita
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Baixar Vídeo do TikTok</CardTitle>
              <CardDescription>
                Cole a URL do vídeo do TikTok que você deseja baixar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Cole a URL do TikTok aqui..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
                  disabled={!url}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                Exemplo: https://www.tiktok.com/@usuario/video/1234567890
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-pink-600">Rápido</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Download em segundos sem complicações
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Sem Marca D'água</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Vídeos limpos, sem marca d'água do TikTok
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Alta Qualidade</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Mantém a qualidade original do vídeo
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-white">Como usar?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h4 className="font-semibold mb-2">Copie a URL</h4>
                  <p className="text-sm opacity-90">Copie o link do vídeo do TikTok</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h4 className="font-semibold mb-2">Cole aqui</h4>
                  <p className="text-sm opacity-90">Cole a URL no campo acima</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-pink-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h4 className="font-semibold mb-2">Baixe</h4>
                  <p className="text-sm opacity-90">Clique em baixar e pronto!</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TikTok;