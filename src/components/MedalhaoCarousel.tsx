import useEmblaCarousel from 'embla-carousel-react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, Medal, Award, Trophy, Crown, Star } from "lucide-react";
import { useCallback } from 'react';
import medalhaoRany from "@/assets/medalha-rany.jpg";
import aryProfile from "@/assets/ary-profile.jpg";

const medalhoes = [
  {
    id: 12,
    foto: aryProfile,
    nome: "Ary",
    data: "2022-2025",
    descricao: "Ary foi a primeira diretora mulher e se consagrou como a melhor diretora que o FBI já teve. Sempre deu o seu máximo, com dedicação e lealdade inabalável, jamais traiu a Neext. Esteve presente nos momentos mais difíceis, oferecendo força e apoio, além de ter sido fundamental para o crescimento dos grupos. Sua trajetória inspira respeito, admiração e gratidão eterna.",
    medalhas: [
      { icon: Crown, text: "Primeira Diretora" },
      { icon: Award, text: "Melhor Diretora" },
      { icon: Trophy, text: "Dedicação" },
      { icon: Star, text: "Lealdade" },
      { icon: Medal, text: "Pioneira" }
    ]
  },
  {
    id: 13,
    foto: "https://i.ibb.co/CsJ92zgy/da763afbe57a31ecbb41dac7df2e3279.jpg",
    nome: "Wd",
    data: "2023-2024",
    descricao: "sempre esteve presente ajudando o Skur a bater metas e crescer, contribuindo diariamente de forma significativa para os grupos. Sua dedicação e apoio constante foram fundamentais para a melhoria e evolução de todos, tornando-o um pilar essencial nessa jornada.",
    medalhas: [
      { icon: Trophy, text: "Presença" },
      { icon: Award, text: "Suporte" },
      { icon: Star, text: "Dedicação" },
      { icon: Medal, text: "Constância" },
      { icon: Crown, text: "Pilar" }
    ]
  },
  {
    id: 2,
    foto: "https://i.ibb.co/chzJbwLk/656ba6b581717ee5ef636b9502c04dd0.jpg",
    nome: "Gus",
    data: "2023-2023",
    descricao: "impediu o arquivamento em massa de toda a Neext, mesmo diante da ameaça de vazamento de dados pessoais, incluindo os de sua família. Embora o risco fosse grande, ele decidiu proteger a comunidade, mostrando lealdade à Neext e priorizando sua integridade, mesmo sob pressão. Sua ação garantiu a continuidade da neext, reafirmando seu compromisso com a segurança e os valores da comunidade.",
    medalhas: [
      { icon: Award, text: "Protetor" },
      { icon: Star, text: "Sacrifício" },
      { icon: Medal, text: "Integridade" },
      { icon: Crown, text: "Segurança" },
      { icon: Trophy, text: "Guardião" }
    ]
  },
  {
    id: 3,
    foto: "https://i.ibb.co/ZzGxThQK/b8178ecfffe6133b10c25df1571600a4.jpg",
    nome: "Ruby",
    data: "2022-2024",
    descricao: "Ruby foi fundamental para acabar com as conspirações e ameaças que estavam cercando a Neext. Sempre apaixonado pela comunidade, ele se destacou ao proteger a Neext contra um movimento de ataques orquestrado pelos ex-diretores do FBI. Mesmo diante de enormes desafios, Ruby contribuiu de maneira decisiva, indo além do que imaginava ser possível para garantir a segurança e a continuidade da plataforma. Sua dedicação e coragem se tornaram vitais para a sobrevivência da Neext, consolidando-o como um verdadeiro pilar da comunidade.",
    medalhas: [
      { icon: Medal, text: "Protetor" },
      { icon: Award, text: "Corajoso" },
      { icon: Trophy, text: "Guardião" },
      { icon: Star, text: "Leal" },
      { icon: Crown, text: "Pilar" }
    ]
  },
  {
    id: 4,
    foto: "https://i.ibb.co/JFkpbddD/032cfdee312bffc59b6d0b439543518a.jpg",
    nome: "Vitin",
    data: "2022-2024",
    descricao: "se destacou de maneira admirável na difícil missão de ajudar a reabrir os Skur, após o fechamento de todos devido à devastação causada pela gestão do ex-diretor. Sua ação foi crucial para restaurar a estabilidade e a confiança em um momento crítico. A situação estava longe de ser fácil, com o legado de falhas e caos deixado pela administração anterior, mas Vitin não se deixou abater. Com determinação e coragem, ele assumiu a responsabilidade de reconstruir o que foi perdido.",
    medalhas: [
      { icon: Trophy, text: "Reconstrutor" },
      { icon: Medal, text: "Determinado" },
      { icon: Award, text: "Restaurador" },
      { icon: Star, text: "Resiliente" },
      { icon: Crown, text: "Líder" }
    ]
  },
  {
    id: 5,
    foto: "https://i.ibb.co/XfYVPffw/3d030b0628a68cb53df08065b65f602c.jpg",
    nome: "Tay",
    data: "2023-2024",
    descricao: "A melhor Diretora e Chanceler que o Skur já teve. Sua liderança não foi feita apenas de palavras, mas de ações que reconstruíram nosso legado. Cada passo dado, cada desafio superado, carrega a marca da sua dedicação incansável, O Skur renasceu grande porque Tay esteve aqui – não como uma figura passageira, mas como a força que nos moveu. Seu nome ficará para sempre gravado em nossa história como a chanceler e diretora que nos devolveu o orgulho de ser Skur",
    medalhas: [
      { icon: Crown, text: "Chanceler" },
      { icon: Award, text: "Diretora" },
      { icon: Medal, text: "Legado" },
      { icon: Trophy, text: "Renascença" },
      { icon: Star, text: "Orgulho" }
    ]
  },
  {
    id: 6,
    foto: "https://i.ibb.co/GfXfF46x/08e5cdec8d69c518b9c766d73184c173.jpg",
    nome: "Akira",
    data: "2022-2025",
    descricao: "Akira foi um verdadeiro guardião da Neext na guerra, mostrando lealdade, coragem e honra inabaláveis. Ele cumpriu seus juramentos, se arriscou sem hesitar e protegeu a Neext em todos os momentos, garantindo sua sobrevivência com determinação e sacrifício.",
    medalhas: [
      { icon: Trophy, text: "Guardião" },
      { icon: Medal, text: "Leal" },
      { icon: Award, text: "Corajoso" },
      { icon: Star, text: "Honrado" },
      { icon: Crown, text: "Guerreiro" }
    ]
  },
  {
    id: 7,
    foto: "https://i.ibb.co/5XTpCG6H/3a989ca3445661b625c3166b8a3ac04b.jpg",
    nome: "Connie",
    data: "2024-2025",
    descricao: "Demonstrou ser uma pessoa de confiança e revelou um profundo amor pela Neext. Identificou infiltrados e defendeu a comunidade com firmeza, desmascarando traidores que buscavam prejudicá-la. Sempre se dedicou integralmente e fez tudo pela Neext, colocando seus valores e crescimento em primeiro lugar.",
    medalhas: [
      { icon: Award, text: "Confiável" },
      { icon: Star, text: "Defensora" },
      { icon: Medal, text: "Vigilante" },
      { icon: Crown, text: "Dedicada" },
      { icon: Trophy, text: "Protetora" }
    ]
  },
  {
    id: 8,
    foto: "https://i.ibb.co/4wZLDz80/d276b6a415539d43f790d3654b8c4d04.jpg",
    nome: "Sam",
    data: "2023-2024",
    descricao: "Sam, além de ser um dos melhores diretores que o Skur já teve, foi o criador do sistema de elo para os grupos. Sua inovação trouxe uma maneira mais estruturada e equilibrada de classificar e avaliar os grupos dentro da plataforma, levando em consideração seu desempenho e contribuição. O sistema de elo permitiu que os grupos fossem organizados de forma justa, criando uma competição saudável e incentivando o aprimoramento contínuo.",
    medalhas: [
      { icon: Crown, text: "Diretor" },
      { icon: Trophy, text: "Inovador" },
      { icon: Award, text: "Criador" },
      { icon: Star, text: "Estratégico" },
      { icon: Medal, text: "Sistêmico" }
    ]
  },
  {
    id: 9,
    foto: "https://i.ibb.co/vCgsPtML/b9ffc88ad813f68a723558620ce3ff47.jpg",
    nome: "Shelby",
    data: "2022-2025",
    descricao: "Shelby fez um sacrifício pessoal enorme em prol da Neext, colocando a comunidade acima de tudo. Ele desempenhou um papel crucial ao ajudar a derrubar um ditador que ameaçava a liberdade e os valores da plataforma. Além disso, foi Shelby quem fundou o Conselho Neext, estruturando a liderança da comunidade de forma a garantir que ela fosse governada com justiça e transparência",
    medalhas: [
      { icon: Trophy, text: "Fundador" },
      { icon: Crown, text: "Libertador" },
      { icon: Award, text: "Sacrifício" },
      { icon: Star, text: "Justiça" },
      { icon: Medal, text: "Conselheiro" }
    ]
  },
  {
    id: 10,
    foto: "https://i.ibb.co/m56N70nx/10de7fa25943ab474b50d8da1a016c5f.jpg",
    nome: "Daniel",
    data: "2022-2025",
    descricao: "Daniel foi um verdadeiro defensor da Neext, enfrentando inimigos que ameaçavam ela. Mesmo após ser banido, sua lealdade nunca foi abalada—ele sempre colocou a Neext em primeiro lugar, ajudando e protegendo-a sempre que pôde. Seu nome ficou marcado como um símbolo de fidelidade e compromisso, provando que sua conexão com a Neext ia além de qualquer obstáculo.",
    medalhas: [
      { icon: Medal, text: "Defensor" },
      { icon: Star, text: "Leal" },
      { icon: Award, text: "Fiel" },
      { icon: Trophy, text: "Protetor" },
      { icon: Crown, text: "Símbolo" }
    ]
  },
  {
    id: 11,
    foto: medalhaoRany,
    nome: "Rany",
    data: "2023-2025",
    descricao: "Rany, a melhor diretora que o Skur tem atualmente, seguiu o legado deixado por todos e está sempre ajudando e fazendo o Skur evoluir, sem jamais abandoná-lo.",
    medalhas: [
      { icon: Crown, text: "Diretora" },
      { icon: Award, text: "Legado" },
      { icon: Star, text: "Evolução" },
      { icon: Trophy, text: "Lealdade" },
      { icon: Medal, text: "Dedicação" }
    ]
  },
  {
    id: 1,
    foto: "https://i.ibb.co/Ndn8qBb0/8b0181313e4426c97a4dc9acd2076840.jpg",
    nome: "Koala",
    data: "2019-2024",
    descricao: "ato de coragem e devoção que marcou a história da Neext. Koala, com bravura inigualável, enfrentou a adversidade e impediu um golpe de estado arquitetado pela Team Lobos. Em um momento crítico, colocou a neext acima de si mesmo, garantindo a continuidade da neext.",
    medalhas: [
      { icon: Trophy, text: "Corajoso" },
      { icon: Star, text: "Protetor" },
      { icon: Award, text: "Herói" },
      { icon: Medal, text: "Leal" },
      { icon: Crown, text: "Defensor" }
    ]
  }
];

const MedalhaoCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 1 },
      '(min-width: 768px)': { slidesToScroll: 2 },
      '(min-width: 1024px)': { slidesToScroll: 3 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    <section className="relative py-16 bg-gradient-to-br from-background via-primary/[0.02] to-secondary/[0.03]" data-section="medalhas">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-white/[0.01] bg-[size:40px_40px]" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 mb-6">
            <Medal className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Hall da Fama
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honrando aqueles que fizeram história na Neext com suas ações heroicas e dedicação inabalável
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-3 mb-8">
          <button
            onClick={scrollPrev}
            className="group p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 shadow-sm"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={scrollNext}
            className="group p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/5 transition-all duration-300 hover:scale-105 shadow-sm"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Carousel */}
        <div className="embla overflow-hidden rounded-2xl" ref={emblaRef}>
          <div className="embla__container flex gap-6">
            {medalhoes.map((medalhao, index) => (
              <div key={medalhao.id} className="embla__slide flex-none w-full sm:w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1rem)]">
                <Card className="group h-full bg-gradient-to-br from-background/95 to-background/80 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Header with Avatar */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                          <img
                            src={medalhao.foto}
                            alt={medalhao.nome}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                          <Medal className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {medalhao.nome}
                        </h3>
                        <p className="text-sm text-muted-foreground font-medium">
                          {medalhao.data}
                        </p>
                      </div>
                    </div>

                    {/* All Badges - Always Visible */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {medalhao.medalhas.map((medalha, badgeIndex) => {
                        const IconComponent = medalha.icon;
                        return (
                          <Badge 
                            key={badgeIndex} 
                            variant="secondary" 
                            className="text-xs px-3 py-1.5 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors flex items-center gap-1.5"
                          >
                            <IconComponent className="w-3 h-3" />
                            {medalha.text}
                          </Badge>
                        );
                      })}
                    </div>

                    {/* Full Description - Always Visible */}
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors">
                        {medalhao.descricao}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="flex justify-center mt-12">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default MedalhaoCarousel;