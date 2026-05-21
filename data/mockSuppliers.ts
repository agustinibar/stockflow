import { Supplier } from "@/types";

export const mockSuppliers: Supplier[] = [
  {
    id: "SUP-001",
    name: "Mercado Libre Industrial",
    type: "mercado_libre",
    rating: 4.4,
    isApproved: false,
    qualityScore: 65,
    deliveryScore: 95,
    averageDeliveryHours: 24,
  },
  {
    id: "SUP-002",
    name: "Proveedor Industrial Norte",
    type: "proveedor_industrial",
    rating: 4.8,
    isApproved: true,
    qualityScore: 95,
    deliveryScore: 85,
    averageDeliveryHours: 48,
  },
  {
    id: "SUP-003",
    name: "Proveedor Económico Sur",
    type: "proveedor_local",
    rating: 3.9,
    isApproved: false,
    qualityScore: 50,
    deliveryScore: 70,
    averageDeliveryHours: 72,
  },
  {
    id: "SUP-004",
    name: "Técnica Sur",
    type: "proveedor_industrial",
    rating: 4.7,
    isApproved: true,
    qualityScore: 90,
    deliveryScore: 75,
    averageDeliveryHours: 72,
  },
];