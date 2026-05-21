export type UserRole = "sector" | "compras" | "gerencia" | "proveedor";

export type RequestStatus =
  | "nueva"
  | "en_analisis_compras"
  | "cotizando"
  | "pendiente_validacion_tecnica"
  | "pendiente_aprobacion_gerencia"
  | "aprobada"
  | "rechazada"
  | "comprada"
  | "entregada";

export type UrgencyLevel =
  | "baja"
  | "media"
  | "alta"
  | "produccion_parada";

export type QualityLevel =
  | "basica"
  | "media"
  | "alta"
  | "certificada"
  | "critica";

export type SupplierType =
  | "mercado_libre"
  | "proveedor_industrial"
  | "proveedor_local";

export interface PurchaseRequest {
  id: string;
  title: string;
  description: string;
  sector: string;
  requestedBy: string;
  category: string;
  quantity: number;
  urgency: UrgencyLevel;
  qualityRequired: QualityLevel;
  estimatedBudget: number;
  status: RequestStatus;
  impactReason: string;
  neededBy: string;
  externalLink?: string;
  createdAt: string;
}

export interface Supplier {
  id: string;
  name: string;
  type: SupplierType;
  rating: number;
  isApproved: boolean;
  qualityScore: number;
  deliveryScore: number;
  averageDeliveryHours: number;
}

export interface Quotation {
  id: string;
  requestId: string;
  supplierId: string;
  supplierName: string;
  price: number;
  deliveryTimeHours: number;
  qualityLevel: QualityLevel;
  warranty: string;
  notes: string;
  score: number;
  recommended?: boolean;
}

export interface CatalogItem {
  id: string;
  name: string;
  category: string;
  supplierName: string;
  qualityLevel: QualityLevel;
  lastPrice: number;
  averageDeliveryHours: number;
  lastPurchaseDate: string;
  isActive: boolean;
}

export interface ActivityItem {
  id: string;
  requestId: string;
  actor: string;
  role: UserRole;
  action: string;
  description: string;
  createdAt: string;
}