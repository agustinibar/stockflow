import { Supplier } from "@/types";
import { CheckCircle2, Clock, ShieldCheck, Star, Truck, XCircle } from "lucide-react";

interface SupplierTableProps {
  suppliers: Supplier[];
}

function formatSupplierType(type: Supplier["type"]) {
  const labels: Record<Supplier["type"], string> = {
    mercado_libre: "Marketplace",
    proveedor_industrial: "Proveedor industrial",
    proveedor_local: "Proveedor local",
  };

  return labels[type];
}

export function SupplierTable({ suppliers }: SupplierTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-950">
          Base de proveedores
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Evaluación por calidad, entrega, homologación y desempeño histórico.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">Proveedor</th>
              <th className="px-5 py-3">Tipo</th>
              <th className="px-5 py-3">Rating</th>
              <th className="px-5 py-3">Calidad</th>
              <th className="px-5 py-3">Entrega</th>
              <th className="px-5 py-3">Tiempo promedio</th>
              <th className="px-5 py-3">Homologación</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {suppliers.map((supplier) => (
              <tr key={supplier.id} className="hover:bg-slate-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Truck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {supplier.name}
                      </p>
                      <p className="text-xs text-slate-500">{supplier.id}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {formatSupplierType(supplier.type)}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 font-medium text-slate-900">
                    <Star className="h-4 w-4 text-blue-600" />
                    {supplier.rating}
                  </div>
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <ShieldCheck className="h-4 w-4 text-slate-400" />
                    {supplier.qualityScore}/100
                  </div>
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {supplier.deliveryScore}/100
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="h-4 w-4 text-slate-400" />
                    {supplier.averageDeliveryHours} h
                  </div>
                </td>

                <td className="px-5 py-4">
                  {supplier.isApproved ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Homologado
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                      <XCircle className="h-3.5 w-3.5" />
                      No homologado
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}