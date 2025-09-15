// Mapeamento centralizado de rotas externas para facilitar renomeação e organização
export const externalRoutes = {
  "/neextense": "https://www.neext.online/neextense",
  "/tiktok": "https://www.neext.online/tiktok", 
  "/Instagram": "https://www.neext.online/Instagram",
  "/spotify": "https://www.neext.online/spotify"
} as const;

export type ExternalRoutePath = keyof typeof externalRoutes;