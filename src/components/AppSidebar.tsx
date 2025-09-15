import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { 
  BarChart3, 
  FileText, 
  Shield, 
  Globe, 
  Award, 
  Trophy, 
  FileBarChart, 
  Newspaper, 
  CreditCard, 
  FolderOpen, 
  Plus, 
  AlertTriangle, 
  Clock,
  Star,
  X
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Apostila FBI", url: "https://www.neext.online/apostilafbi", icon: FileText, color: "text-red-500", external: true },
  { title: "Apostila Skur", url: "https://www.neext.online/apostilaskur", icon: FileText, color: "text-pink-500", external: true },
  { title: "Gerador de Certificado", url: "https://www.neext.online/certificado", icon: Award, color: "text-purple-600", external: true },
  { title: "Gerador de Rank", url: "https://www.neext.online/rank", icon: Trophy, color: "text-yellow-500", external: true },
  { title: "Gerador de relatório", url: "https://www.neext.online/report", icon: FileBarChart, color: "text-green-500", external: true },
  { title: "Jornal Neext", url: "https://www.neext.online/jornal", icon: Newspaper, color: "text-red-600", external: true },
  { title: "Card generator", url: "https://www.neext.online/card", icon: CreditCard, color: "text-blue-400", external: true },
  { title: "Criar arquivos", url: "https://www.neext.online/vcf", icon: FolderOpen, color: "text-purple-500", external: true },
  { title: "Cartório Neext", url: "https://www.neext.online/cartório", icon: Plus, color: "text-red-500", external: true },
  { title: "Avisos", url: "https://avisos.neext.com.br", icon: AlertTriangle, color: "text-orange-500", external: true },
  { title: "Fuso Horário Neextense", url: "https://neextense.neext.com.br", icon: Clock, color: "text-gray-500", external: true },
];

interface AppSidebarProps {
  open: boolean;
  onClose: () => void;
}

export function AppSidebar({ open, onClose }: AppSidebarProps) {
  const navigate = useNavigate();
  return (
    <>
      {/* Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-80 bg-background border-r shadow-2xl z-50 transform transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-primary/5 to-secondary/5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-foreground">NEEXT LTDA.</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Fechar menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return item.external ? (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onClose}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group hover:bg-muted/70 text-foreground hover:shadow-sm"
                >
                  <div className={`p-2 rounded-lg ${item.color} bg-current/10`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {item.title}
                  </span>
                </a>
              ) : (
                <button
                  key={item.title}
                  onClick={() => {
                    navigate(item.url);
                    onClose();
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group hover:bg-muted/70 text-foreground hover:shadow-sm text-left"
                >
                  <div className={`p-2 rounded-lg ${item.color} bg-current/10`}>
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <span className="font-medium text-sm leading-tight">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-muted/30">
          <div className="text-center">
            <p className="text-xs text-muted-foreground">
              Neext © {new Date().getFullYear()}
            </p>
            <p className="text-xs text-muted-foreground">
              Versão 2.0.0
            </p>
          </div>
        </div>
      </div>
    </>
  );
}