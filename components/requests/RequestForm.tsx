"use client";

export function RequestForm() {
  return (
    <form className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-slate-700">Sector</label>
          <select className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500">
            <option>Mantenimiento</option>
            <option>Producción</option>
            <option>Calidad</option>
            <option>Seguridad e Higiene</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Solicitante
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
            placeholder="Ej: Carlos Medina"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">
          Producto requerido
        </label>
        <input
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
          placeholder="Ej: Bulones Allen M8 x 30"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">
          Descripción
        </label>
        <textarea
          rows={4}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
          placeholder="Describí para qué se necesita, dónde se usa y qué pasa si no se compra."
        />
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <label className="text-sm font-medium text-slate-700">
            Categoría
          </label>
          <select className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500">
            <option>Bulonería</option>
            <option>Herramientas</option>
            <option>Seguridad</option>
            <option>Repuestos</option>
            <option>Insumos</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">Cantidad</label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
            placeholder="200"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">Urgencia</label>
          <select className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500">
            <option>Baja</option>
            <option>Media</option>
            <option>Alta</option>
            <option>Producción parada</option>
          </select>
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Calidad requerida
          </label>
          <select className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500">
            <option>Básica</option>
            <option>Media</option>
            <option>Alta</option>
            <option>Certificada</option>
            <option>Crítica</option>
          </select>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label className="text-sm font-medium text-slate-700">
            Presupuesto estimado
          </label>
          <input
            type="number"
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
            placeholder="25000"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Fecha límite
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-slate-700">
            Link externo opcional
          </label>
          <input
            className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
            placeholder="Link Mercado Libre o proveedor"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-slate-700">
          Impacto productivo
        </label>
        <textarea
          rows={3}
          className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-500"
          placeholder="Ej: La línea 2 queda parada hasta conseguir la pieza."
        />
      </div>

      <div className="flex justify-end gap-3 border-t border-slate-100 pt-4">
        <button
          type="button"
          className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Guardar borrador
        </button>

        <button
          type="button"
          className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Enviar a compras
        </button>
      </div>
    </form>
  );
}