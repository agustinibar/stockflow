export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(new Date(date));
}

export function formatRequestStatus(status: string): string {
  const labels: Record<string, string> = {
    nueva: "Nueva",
    en_analisis_compras: "En análisis de compras",
    cotizando: "Cotizando",
    pendiente_validacion_tecnica: "Pendiente validación técnica",
    pendiente_aprobacion_gerencia: "Pendiente aprobación gerencia",
    aprobada: "Aprobada",
    rechazada: "Rechazada",
    comprada: "Comprada",
    entregada: "Entregada",
  };

  return labels[status] ?? status;
}

export function formatUrgency(urgency: string): string {
  const labels: Record<string, string> = {
    baja: "Baja",
    media: "Media",
    alta: "Alta",
    produccion_parada: "Producción parada",
  };

  return labels[urgency] ?? urgency;
}

export function formatQuality(quality: string): string {
  const labels: Record<string, string> = {
    basica: "Básica",
    media: "Media",
    alta: "Alta",
    certificada: "Certificada",
    critica: "Crítica",
  };

  return labels[quality] ?? quality;
}