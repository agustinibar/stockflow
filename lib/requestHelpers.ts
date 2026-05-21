import { RequestStatus, UrgencyLevel } from "@/types";

export function getStatusColor(status: RequestStatus): string {
  const colors: Record<RequestStatus, string> = {
    nueva: "bg-slate-100 text-slate-700 border-slate-200",
    en_analisis_compras: "bg-blue-50 text-blue-700 border-blue-200",
    cotizando: "bg-indigo-50 text-indigo-700 border-indigo-200",
    pendiente_validacion_tecnica: "bg-amber-50 text-amber-700 border-amber-200",
    pendiente_aprobacion_gerencia: "bg-orange-50 text-orange-700 border-orange-200",
    aprobada: "bg-emerald-50 text-emerald-700 border-emerald-200",
    rechazada: "bg-red-50 text-red-700 border-red-200",
    comprada: "bg-green-50 text-green-700 border-green-200",
    entregada: "bg-zinc-100 text-zinc-700 border-zinc-200",
  };

  return colors[status];
}

export function getUrgencyColor(urgency: UrgencyLevel): string {
  const colors: Record<UrgencyLevel, string> = {
    baja: "bg-slate-100 text-slate-700 border-slate-200",
    media: "bg-yellow-50 text-yellow-700 border-yellow-200",
    alta: "bg-orange-50 text-orange-700 border-orange-200",
    produccion_parada: "bg-red-50 text-red-700 border-red-200",
  };

  return colors[urgency];
}

export function isProductionBlocked(urgency: UrgencyLevel): boolean {
  return urgency === "produccion_parada";
}