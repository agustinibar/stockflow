import { CatalogItem } from "@/types";
import {
  formatCurrency,
  formatDate,
  formatQuality,
} from "@/lib/formatters";
import { CheckCircle2, Clock, PackageCheck } from "lucide-react";

interface CatalogTableProps {
  items: CatalogItem[];
}

export function CatalogTable({ items }: CatalogTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-950">
          Productos homologados
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Artículos ya validados por compras, calidad y sectores técnicos.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-50 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">Producto</th>
              <th className="px-5 py-3">Categoría</th>
              <th className="px-5 py-3">Proveedor recomendado</th>
              <th className="px-5 py-3">Calidad</th>
              <th className="px-5 py-3">Último precio</th>
              <th className="px-5 py-3">Entrega promedio</th>
              <th className="px-5 py-3">Última compra</th>
              <th className="px-5 py-3">Estado</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {items.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <PackageCheck className="h-5 w-5" />
                    </div>

                    <div>
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-xs text-slate-500">{item.id}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-slate-700">{item.category}</td>

                <td className="px-5 py-4 font-medium text-slate-900">
                  {item.supplierName}
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {formatQuality(item.qualityLevel)}
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {formatCurrency(item.lastPrice)}
                </td>

                <td className="px-5 py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="h-4 w-4 text-slate-400" />
                    {item.averageDeliveryHours} h
                  </div>
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {formatDate(item.lastPurchaseDate)}
                </td>

                <td className="px-5 py-4">
                  {item.isActive ? (
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Activo
                    </span>
                  ) : (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      Inactivo
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