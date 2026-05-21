"use client";

import { RequestStatus } from "@/types";
import {
  CheckCircle2,
  RotateCcw,
  Send,
  ShoppingCart,
  XCircle,
} from "lucide-react";
import { useState } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface ApprovalActionsProps {
  initialStatus: RequestStatus;
}

export function ApprovalActions({ initialStatus }: ApprovalActionsProps) {
  const [status, setStatus] = useState<RequestStatus>(initialStatus);
  const [lastAction, setLastAction] = useState<string>(
    "Esperando decisión del circuito de aprobación."
  );

  function handleAction(nextStatus: RequestStatus, message: string) {
    setStatus(nextStatus);
    setLastAction(message);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">
        Acciones de aprobación
      </h2>

      <p className="mt-1 text-sm leading-6 text-slate-500">
        Simulación de decisiones rápidas entre sector solicitante, compras y
        gerencia.
      </p>

      <div className="mt-4 rounded-xl bg-slate-50 p-4">
        <p className="mb-2 text-xs font-medium uppercase text-slate-500">
          Estado actual simulado
        </p>
        <StatusBadge status={status} />
        <p className="mt-3 text-sm leading-6 text-slate-600">{lastAction}</p>
      </div>

      <div className="mt-5 grid gap-3">
        <button
          type="button"
          onClick={() =>
            handleAction(
              "aprobada",
              "La compra fue aprobada. El proveedor recomendado queda seleccionado para avanzar."
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          <CheckCircle2 className="h-4 w-4" />
          Aprobar compra
        </button>

        <button
          type="button"
          onClick={() =>
            handleAction(
              "pendiente_aprobacion_gerencia",
              "La solicitud fue enviada a gerencia por impacto productivo o monto relevante."
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Send className="h-4 w-4" />
          Enviar a gerencia
        </button>

        <button
          type="button"
          onClick={() =>
            handleAction(
              "cotizando",
              "El sector solicitó nuevas opciones porque las alternativas actuales no cumplen el estándar de calidad esperado."
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <RotateCcw className="h-4 w-4" />
          Pedir mejor calidad
        </button>

        <button
          type="button"
          onClick={() =>
            handleAction(
              "comprada",
              "La solicitud fue marcada como comprada. Se genera seguimiento de entrega."
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          <ShoppingCart className="h-4 w-4" />
          Marcar como comprada
        </button>

        <button
          type="button"
          onClick={() =>
            handleAction(
              "rechazada",
              "La solicitud fue rechazada. El motivo deberá quedar registrado para auditoría."
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-2.5 text-sm font-semibold text-red-700 hover:bg-red-100"
        >
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