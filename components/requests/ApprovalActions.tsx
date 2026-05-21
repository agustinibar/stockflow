"use client";

import { CheckCircle2, RotateCcw, Send, ShoppingCart, XCircle } from "lucide-react";

export function ApprovalActions() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">
        Acciones de aprobación
      </h2>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        Simulación de decisiones rápidas entre sector solicitante, compras y
        gerencia.
      </p>

      <div className="mt-5 grid gap-3">
        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700">
          <CheckCircle2 className="h-4 w-4" />
          Aprobar compra
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
          <Send className="h-4 w-4" />
          Enviar a gerencia
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          <RotateCcw className="h-4 w-4" />
          Pedir mejor calidad
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          <ShoppingCart className="h-4 w-4" />
          Marcar como comprada
        </button>

        <button className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100">
          <XCircle className="h-4 w-4" />
          Rechazar solicitud
        </button>
      </div>

      <div className="mt-5 rounded-xl bg-slate-50 p-4">
        <p className="text-xs font-medium uppercase text-slate-500">
          Regla activa
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-700">
          Como la solicitud tiene impacto productivo, la compra puede avanzar
          por circuito rápido con aprobación gerencial.
        </p>
      </div>
    </div>
  );
}