import { Instagram, Youtube, Music } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/neext",
      color: "hover:text-pink-500"
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@neext",
      color: "hover:text-red-500"
    },
    {
      name: "TikTok",
      icon: Music,
      url: "https://tiktok.com/@neext",
      color: "hover:text-slate-900 dark:hover:text-white"
    }
  ];

  return (
    <footer className="w-full bg-muted/50 border-t">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">Neext</h3>
            <p className="text-muted-foreground leading-relaxed">
              Conectando pessoas, criando oportunidades e construindo o futuro desde 2019.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Suporte
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Siga-nos</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground ${social.color} transition-all duration-300 hover:scale-110`}
                    aria-label={`Seguir no ${social.name}`}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
            <p className="text-sm text-muted-foreground">
              Acompanhe todas as novidades e atualizações
            </p>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Neext. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-muted-foreground">
                Desenvolvido com ❤️ para a comunidade
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;