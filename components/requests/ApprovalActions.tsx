"use client";

import { RequestStatus } from "@/types";
import {
  CheckCircle2,
  FileCheck2,
  RotateCcw,
  Send,
  ShoppingCart,
  XCircle,
  X,
} from "lucide-react";
import { useState } from "react";
import { StatusBadge } from "@/components/ui/StatusBadge";

interface ApprovalActionsProps {
  initialStatus: RequestStatus;
  requestId?: string;
}

export function ApprovalActions({
  initialStatus,
  requestId = "REQ-001",
}: ApprovalActionsProps) {
  const [status, setStatus] = useState<RequestStatus>(initialStatus);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [lastAction, setLastAction] = useState<string>(
    "Esperando decisión del circuito de aprobación."
  );

  function handleAction(nextStatus: RequestStatus, message: string) {
    setStatus(nextStatus);
    setLastAction(message);
  }

  function handleApprove() {
    setStatus("aprobada");
    setLastAction(
      "La compra fue aprobada. El proveedor recomendado queda seleccionado para avanzar."
    );
    setShowOrderModal(true);
  }

  return (
    <>
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
            onClick={handleApprove}
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

      {showOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 px-4">
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                  <FileCheck2 className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-950">
                    Orden de compra generada
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-500">
                    La solicitud fue aprobada y quedó lista para avanzar con el
                    proveedor recomendado.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowOrderModal(false)}
                className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs font-medium uppercase text-slate-500">
                    Solicitud
                  </p>
                  <p className="mt-1 font-semibold text-slate-950">
                    {requestId}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase text-slate-500">
                    Orden
                  </p>
                  <p className="mt-1 font-semibold text-slate-950">
                    OC-{requestId.replace("REQ-", "")}-2026
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase text-slate-500">
                    Proveedor
                  </p>
                  <p className="mt-1 font-semibold text-slate-950">
                    Proveedor Industrial Norte
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium uppercase text-slate-500">
                    Estado
                  </p>
                  <p className="mt-1 font-semibold text-emerald-700">
                    Aprobada
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowOrderModal(false)}
                className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
              >
                Cerrar
              </button>

              <button
                type="button"
                onClick={() => setShowOrderModal(false)}
                className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
              >
                Ver seguimiento
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}