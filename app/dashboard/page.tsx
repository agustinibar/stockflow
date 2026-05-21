import { AppShell } from "@/components/layout/AppShell";
import { PageTitle } from "@/components/ui/PageTitle";
import { StatCard } from "@/components/dashboard/StatCard";
import { mockRequests } from "@/data/mockRequests";
import { AlertTriangle, CheckCircle2, Clock, Factory } from "lucide-react";
import Link from "next/link";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PriorityBadge } from "@/components/ui/PriorityBadge";

export default function DashboardPage() {
  const productionBlocked = mockRequests.filter(
    (request) => request.urgency === "produccion_parada"
  ).length;

  const pendingApprovals = mockRequests.filter(
    (request) => request.status === "pendiente_aprobacion_gerencia"
  ).length;

  return (
    <AppShell>
      <PageTitle
        title="Dashboard"
        description="Vista general de abastecimiento urgente, solicitudes críticas y aprobaciones pendientes."
      />

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Solicitudes abiertas"
          value={String(mockRequests.length)}
          description="Pedidos activos en el circuito"
          icon={Clock}
        />

        <StatCard
          title="Producción en riesgo"
          value={String(productionBlocked)}
          description="Solicitudes con parada productiva"
          icon={AlertTriangle}
        />

        <StatCard
          title="Pendientes gerencia"
          value={String(pendingApprovals)}
          description="Requieren aprobación final"
          icon={CheckCircle2}
        />

        <StatCard
          title="Tiempo estimado"
          value="6 h"
          description="Promedio objetivo con StockFlow"
          icon={Factory}
        />
      </section>

      <section className="mt-6 rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-950">
              Solicitudes recientes
            </h2>
            <p className="text-sm text-slate-500">
              Pedidos que requieren seguimiento operativo.
            </p>
          </div>

          <Link
            href="/requests"
            className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Ver todas
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-5 py-3">ID</th>
                <th className="px-5 py-3">Producto</th>
                <th className="px-5 py-3">Sector</th>
                <th className="px-5 py-3">Urgencia</th>
                <th className="px-5 py-3">Estado</th>
                <th className="px-5 py-3">Acción</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100">
              {mockRequests.map((request) => (
                <tr key={request.id} className="hover:bg-slate-50">
                  <td className="px-5 py-4 font-medium text-slate-900">
                    {request.id}
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    {request.title}
                  </td>
                  <td className="px-5 py-4 text-slate-700">
                    {request.sector}
                  </td>
                  <td className="px-5 py-4">
                    <PriorityBadge urgency={request.urgency} />
                  </td>
                  <td className="px-5 py-4">
                    <StatusBadge status={request.status} />
                  </td>
                  <td className="px-5 py-4">
                    <Link
                      href={`/requests/${request.id}`}
                      className="font-semibold text-blue-600 hover:text-blue-700"
                    >
                      Ver detalle
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}