import Link from "next/link";
import { PurchaseRequest } from "@/types";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { PriorityBadge } from "@/components/ui/PriorityBadge";
import { formatCurrency, formatDate } from "@/lib/formatters";

interface RequestTableProps {
  requests: PurchaseRequest[];
}

export function RequestTable({ requests }: RequestTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">ID</th>
              <th className="px-5 py-3">Producto</th>
              <th className="px-5 py-3">Sector</th>
              <th className="px-5 py-3">Urgencia</th>
              <th className="px-5 py-3">Calidad</th>
              <th className="px-5 py-3">Presupuesto</th>
              <th className="px-5 py-3">Fecha límite</th>
              <th className="px-5 py-3">Estado</th>
              <th className="px-5 py-3">Acción</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {requests.map((request) => (
              <tr key={request.id} className="hover:bg-slate-50">
                <td className="px-5 py-4 font-medium text-slate-900">
                  {request.id}
                </td>
                <td className="px-5 py-4">
                  <p className="font-medium text-slate-900">{request.title}</p>
                  <p className="text-xs text-slate-500">{request.category}</p>
                </td>
                <td className="px-5 py-4 text-slate-700">{request.sector}</td>
                <td className="px-5 py-4">
                  <PriorityBadge urgency={request.urgency} />
                </td>
                <td className="px-5 py-4 capitalize text-slate-700">
                  {request.qualityRequired}
                </td>
                <td className="px-5 py-4 text-slate-700">
                  {formatCurrency(request.estimatedBudget)}
                </td>
                <td className="px-5 py-4 text-slate-700">
                  {formatDate(request.neededBy)}
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
    </div>
  );
}