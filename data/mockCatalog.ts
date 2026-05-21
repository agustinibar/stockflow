import { CatalogItem } from "@/types";

export const mockCatalog: CatalogItem[] = [
  {
    id: "CAT-001",
    name: "Bulón Allen M8 x 30",
    category: "Bulonería",
    supplierName: "Proveedor Industrial Norte",
    qualityLevel: "alta",
    lastPrice: 23000,
    averageDeliveryHours: 48,
    lastPurchaseDate: "2026-05-12",
    isActive: true,
  },
  {
    id: "CAT-002",
    name: "Calibre digital 150 mm",
    category: "Herramientas",
    supplierName: "Técnica Sur",
    qualityLevel: "certificada",
    lastPrice: 79500,
    averageDeliveryHours: 72,
    lastPurchaseDate: "2026-05-04",
    isActive: true,
  },
  {
    id: "CAT-003",
    name: "Guantes anticorte nivel 5",
    category: "Seguridad",
    supplierName: "Insumos Industriales SA",
    qualityLevel: "certificada",
    lastPrice: 118000,
    averageDeliveryHours: 48,
    lastPurchaseDate: "2026-05-01",
    isActive: true,
  },
];