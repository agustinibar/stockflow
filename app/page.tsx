import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Factory,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600">
              <Factory className="h-6 w-6" />
            </div>

            <div>
              <p className="text-xl font-bold leading-none">StockFlow</p>
              <p className="mt-1 text-xs text-slate-400">
                Abastecimiento urgente industrial
              </p>
            </div>
          </div>

          <Link
            href="/dashboard"
            className="hidden rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-100 sm:inline-flex"
          >
            Abrir demo
          </Link>
        </header>

        <div className="grid flex-1 items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3 py-1 text-sm text-blue-200">
              <Zap className="h-4 w-4" />
              Demo MVP para fábricas, compras y producción
            </div>

            <h1 className="max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Reducí paradas productivas por falta de piezas, herramientas o
              insumos.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              StockFlow digitaliza el circuito entre sector solicitante,
              compras, proveedores, calidad y gerencia para convertir procesos
              de varios días en aprobaciones trazables de pocas horas.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500"
              >
                Entrar al dashboard
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/requests/REQ-001"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Ver caso crítico
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <Clock className="h-5 w-5 text-blue-300" />
                <p className="mt-3 text-2xl font-bold">6 h</p>
                <p className="mt-1 text-sm text-slate-400">
                  Tiempo objetivo de resolución
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
                <p className="mt-3 text-2xl font-bold">0</p>
                <p className="mt-1 text-sm text-slate-400">
                  Rechazos en productos homologados
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <BadgeCheck className="h-5 w-5 text-amber-300" />
                <p className="mt-3 text-2xl font-bold">1 click</p>
                <p className="mt-1 text-sm text-slate-400">
                  Aprobación gerencial simulada
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-2xl">
            <div className="rounded-2xl bg-white p-5 text-slate-950">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-500">
                    Solicitud crítica
                  </p>
                  <h2 className="mt-1 text-xl font-bold">
                    Bulones Allen M8 x 30
                  </h2>
                </div>

                <span className="rounded-full border border-red-200 bg-red-50 px-3 py-1 text-xs font-semibold text-red-700">
                  Producción parada
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="rounded-xl border border-slate-200 p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">Proveedor Industrial Norte</p>
                    <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700">
                      Recomendado
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-500">
                    Cumple calidad alta, garantía de lote y entrega en 48 h.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Precio</p>
                    <p className="mt-1 font-bold">$23.000</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Entrega</p>
                    <p className="mt-1 font-bold">48 h</p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">Score</p>
                    <p className="mt-1 font-bold">92/100</p>
                  </div>
                </div>

                <Link
                  href="/requests/REQ-001"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Abrir solicitud crítica
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}