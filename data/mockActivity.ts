import { ActivityItem } from "@/types";

export const mockActivity: ActivityItem[] = [
  {
    id: "ACT-001",
    requestId: "REQ-001",
    actor: "Carlos Medina",
    role: "sector",
    action: "Solicitud creada",
    description: "Mantenimiento solicitó bulones Allen M8 x 30 por parada de línea.",
    createdAt: "2026-05-21 08:30",
  },
  {
    id: "ACT-002",
    requestId: "REQ-001",
    actor: "Sofía López",
    role: "compras",
    action: "Cotizaciones agregadas",
    description: "Compras cargó 3 opciones de proveedores.",
    createdAt: "2026-05-21 09:15",
  },
  {
    id: "ACT-003",
    requestId: "REQ-001",
    actor: "Carlos Medina",
    role: "sector",
    action: "Validación técnica",
    description: "El sector rechazó la opción económica por baja calidad.",
    createdAt: "2026-05-21 10:05",
  },
  {
    id: "ACT-004",
    requestId: "REQ-001",
    actor: "Sofía López",
    role: "compras",
    action: "Proveedor recomendado",
    description: "Se recomienda Proveedor Industrial Norte por calidad alta y proveedor homologado.",
    createdAt: "2026-05-21 10:30",
  },
];