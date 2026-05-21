import { PurchaseRequest } from "@/types";
import {
  formatCurrency,
  formatDate,
  formatQuality,
} from "@/lib/formatters";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PriorityBadge } from "@/components/ui/PriorityBadge";
import { AlertTriangle, Calendar, Factory, Package } from "lucide-react";

interface RequestSummaryCardProps {
  request: PurchaseRequest;
}

export function RequestSummaryCard({ request }: RequestSummaryCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-100 pb-5 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <StatusBadge status={request.status} />
            <PriorityBadge urgency={request.urgency} />
          </div>

          <h2 className="text-2xl font-bold text-slate-950">
            {request.title}
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            {request.description}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 px-4 py-3 text-right">
          <p className="text-xs font-medium uppercase text-slate-500">
            Presupuesto estimado
          </p>
          <p className="mt-1 text-2xl font-bold text-slate-950">
            {formatCurrency(request.estimatedBudget)}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Factory className="h-4 w-4" />
            <span className="text-xs font-medium uppercase">Sector</span>
          </div>
          <p className="font-semibold text-slate-900">{request.sector}</p>
          <p className="text-sm text-slate-500">{request.requestedBy}</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Package className="h-4 w-4" />
            <span className="text-xs font-medium uppercase">Cantidad</span>
          </div>
          <p className="font-semibold text-slate-900">{request.quantity}</p>
          <p className="text-sm text-slate-500">{request.category}</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <Calendar className="h-4 w-4" />
            <span className="text-xs font-medium uppercase">Fecha límite</span>
          </div>
          <p className="font-semibold text-slate-900">
            {formatDate(request.neededBy)}
          </p>
          <p className="text-sm text-slate-500">Creada {formatDate(request.createdAt)}</p>
        </div>

        <div className="rounded-xl bg-slate-50 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-500">
            <AlertTriangle className="h-4 w-4" />
            <span className="text-xs font-medium uppercase">Calidad</span>
          </div>
          <p className="font-semibold text-slate-900">
            {formatQuality(request.qualityRequired)}
          </p>
          <p className="text-sm text-slate-500">Requisito técnico</p>
        </div>
      </div>

      <div className="mt-5 rounded-2xl border border-red-100 bg-red-50 p-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 text-red-600" />
          <div>
            <p className="font-semibold text-red-900">Impacto productivo</p>
            <p className="mt-1 text-sm leading-6 text-red-800">
              {request.impactReason}
            </p>
          </div>
        </div>
      </div>

      {request.externalLink && (
        <div className="mt-4">
          <a
            href={request.externalLink}
            target="_blank"
            className="text-sm font-semibold text-blue-600 hover:text-blue-700"
          >
            Ver link externo sugerido
          </a>
        </div>
      )}
    </div>
  );
}