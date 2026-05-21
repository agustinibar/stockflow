import { Quotation } from "@/types";
import { formatCurrency, formatQuality } from "@/lib/formatters";
import { BadgeCheck, Clock, ShieldCheck, Star } from "lucide-react";

interface SupplierComparisonProps {
  quotations: Quotation[];
}

export function SupplierComparison({ quotations }: SupplierComparisonProps) {
  const recommended = quotations.find((quotation) => quotation.recommended);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-100 px-6 py-5">
        <h2 className="text-lg font-semibold text-slate-950">
          Comparador de proveedores
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          Análisis automático considerando precio, entrega, calidad y garantía.
        </p>
      </div>

      {recommended && (
        <div className="mx-6 mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
          <div className="flex items-start gap-3">
            <BadgeCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
            <div>
              <p className="font-semibold text-emerald-950">
                Recomendado: {recommended.supplierName}
              </p>
              <p className="mt-1 text-sm leading-6 text-emerald-800">
                No es necesariamente la opción más barata, pero cumple mejor con
                el estándar de calidad requerido y mantiene un buen plazo de
                entrega.
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="overflow-x-auto p-6">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-slate-500">
            <tr className="border-b border-slate-100">
              <th className="pb-3">Proveedor</th>
              <th className="pb-3">Precio</th>
              <th className="pb-3">Entrega</th>
              <th className="pb-3">Calidad</th>
              <th className="pb-3">Garantía</th>
              <th className="pb-3">Score</th>
              <th className="pb-3">Resultado</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {quotations.map((quotation) => (
              <tr key={quotation.id}>
                <td className="py-4">
                  <p className="font-semibold text-slate-900">
                    {quotation.supplierName}
                  </p>
                  <p className="mt-1 max-w-xs text-xs text-slate-500">
                    {quotation.notes}
                  </p>
                </td>

                <td className="py-4 font-medium text-slate-700">
                  {formatCurrency(quotation.price)}
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <Clock className="h-4 w-4 text-slate-400" />
                    {quotation.deliveryTimeHours} h
                  </div>
                </td>

                <td className="py-4">
                  <div className="flex items-center gap-2 text-slate-700">
                    <ShieldCheck className="h-4 w-4 text-slate-400" />
                    {formatQuality(quotation.qualityLevel)}
                  </div>
                </td>

                <td className="py-4 text-slate-700">{quotation.warranty}</td>

                <td className="py-4">
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-blue-600" />
                    <span className="font-bold text-slate-950">
                      {quotation.score}
                    </span>
                  </div>
                </td>

                <td className="py-4">
                  {quotation.recommended ? (
                    <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Recomendado
                    </span>
                  ) : quotation.score < 60 ? (
                    <span className="rounded-full border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-700">
                      No recomendado
                    </span>
                  ) : (
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                      Alternativa
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