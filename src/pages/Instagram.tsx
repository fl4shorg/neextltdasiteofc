import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, Users, Heart, MessageCircle, ExternalLink, Share2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Instagram = () => {
  const handleFollowInstagram = () => {
    window.open("https://instagram.com/neext.oficial", "_blank");
  };

  const posts = [
    {
      id: 1,
      image: "/api/placeholder/300/300",
      likes: 1250,
      comments: 45,
      caption: "Conectando o mundo digital há 7 anos! 🚀"
    },
    {
      id: 2,
      image: "/api/placeholder/300/300",
      likes: 890,
      comments: 32,
      caption: "Novidades em desenvolvimento... 👨‍💻"
    },
    {
      id: 3,
      image: "/api/placeholder/300/300",
      likes: 2100,
      comments: 78,
      caption: "Nossa equipe trabalhando duro! 💪"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                <Camera className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                Instagram
              </h1>
            </div>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Siga-nos no Instagram para acompanhar todas as novidades da NEEXT
            </p>
            
            <Button 
              onClick={handleFollowInstagram}
              className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 hover:from-purple-700 hover:via-pink-700 hover:to-orange-700 text-white px-8 py-3 text-lg"
            >
              <Camera className="w-5 h-5 mr-2" />
              Seguir @neext.oficial
              <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Nossa Comunidade</CardTitle>
                <CardDescription>
                  Mais de 50K seguidores
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Faça parte da nossa comunidade no Instagram e acompanhe 
                  nosso dia a dia, bastidores e lançamentos exclusivos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-pink-600" />
                </div>
                <CardTitle className="text-pink-600">Conteúdo Exclusivo</CardTitle>
                <CardDescription>
                  Stories, posts e muito mais
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 dark:text-gray-300">
                  Compartilhamos conteúdo exclusivo, dicas, tutoriais e 
                  novidades em primeira mão para nossos seguidores.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-center mb-8">Últimas Publicações</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gradient-to-br from-purple-200 to-pink-200 flex items-center justify-center">
                    <Camera className="w-12 h-12 text-gray-500" />
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {post.caption}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {post.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-4 h-4" />
                        {post.comments}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 text-white">
            <CardHeader className="text-center">
              <CardTitle className="text-white text-2xl">Conecte-se Conosco</CardTitle>
              <CardDescription className="text-white/90">
                Acompanhe nossas redes sociais
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-white/90 mb-6">
                Além do Instagram, você pode nos encontrar em outras plataformas. 
                Escolha sua preferida e venha fazer parte da família NEEXT!
              </p>
              
              <div className="flex justify-center gap-4">
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={() => window.open("https://wa.me/5532983841897", "_blank")}
                >
                  WhatsApp
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={() => window.open("https://t.me/neext_oficial", "_blank")}
                >
                  Telegram
                </Button>
                <Button 
                  variant="outline" 
                  className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  onClick={() => window.open("https://discord.gg/neext", "_blank")}
                >
                  Discord
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Instagram;