export interface CatalogItem {
  id: string;
  nome: string;
  descrizione: string;
  immagine: string;
}

export const catalogData: CatalogItem[] = [
  {
    id: "muro",
    nome: "Muro stampato",
    descrizione: "Elemento murario parametrico per 3DCP.",
    immagine: "/catalog/muro.png"
  },
  {
    id: "trave",
    nome: "Trave 3D",
    descrizione: "Trave personalizzabile stampabile in 3D.",
    immagine: "/catalog/trave.png"
  },
  {
    id: "solaio",
    nome: "Solaio modulare",
    descrizione: "Elemento solaio parametrico.",
    immagine: "/catalog/solaio.png"
  }
];
