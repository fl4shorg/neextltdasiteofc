import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Music, ExternalLink, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Spotify = () => {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    if (url) {
      // Aqui você implementaria a lógica de download
      console.log("Downloading Spotify track:", url);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
                <Music className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Spotify Download
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Baixe músicas do Spotify em alta qualidade de forma rápida e gratuita
            </p>
          </div>

          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Baixar Música do Spotify</CardTitle>
              <CardDescription>
                Cole a URL da música ou playlist do Spotify que você deseja baixar
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Cole a URL do Spotify aqui..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="flex-1"
                />
                <Button
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                  disabled={!url}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Baixar
                </Button>
              </div>
              
              <div className="text-center text-sm text-gray-500">
                Exemplo: https://open.spotify.com/track/4iV5W9uYEdYUVa79Axb7Rh
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-green-600">Alta Qualidade</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Download em qualidade original, até 320kbps
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Music className="w-8 h-8 text-emerald-600" />
                </div>
                <CardTitle className="text-emerald-600">Formatos Múltiplos</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Suporte para MP3, FLAC e outros formatos
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-600">Downloads Ilimitados</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Baixe quantas músicas quiser, sem limites
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-green-600">Músicas Individuais</CardTitle>
                <CardDescription>
                  Baixe uma música específica
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>✓ Qualidade original preservada</li>
                  <li>✓ Metadados incluídos (título, artista, álbum)</li>
                  <li>✓ Capa do álbum embutida</li>
                  <li>✓ Download instantâneo</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-emerald-600">Playlists Completas</CardTitle>
                <CardDescription>
                  Baixe playlists inteiras de uma vez
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                  <li>✓ Todas as músicas da playlist</li>
                  <li>✓ Organização automática por artista</li>
                  <li>✓ Download em lote</li>
                  <li>✓ Progresso em tempo real</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-white">Como usar?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
                  <h4 className="font-semibold mb-2">Encontre a música</h4>
                  <p className="text-sm opacity-90">Navegue pelo Spotify</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
                  <h4 className="font-semibold mb-2">Copie o link</h4>
                  <p className="text-sm opacity-90">Clique em "Compartilhar"</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
                  <h4 className="font-semibold mb-2">Cole aqui</h4>
                  <p className="text-sm opacity-90">Cole a URL no campo acima</p>
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-white text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
                  <h4 className="font-semibold mb-2">Baixe</h4>
                  <p className="text-sm opacity-90">Clique em baixar!</p>
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

export default Spotify;