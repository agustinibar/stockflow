import { Bell, Search } from "lucide-react";

export function Header() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6">
      <div className="hidden items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 md:flex">
        <Search className="h-4 w-4 text-slate-400" />
        <input
          className="w-72 bg-transparent text-sm outline-none placeholder:text-slate-400"
          placeholder="Buscar solicitudes, proveedores o productos..."
        />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <button className="relative rounded-xl border border-slate-200 p-2 text-slate-500 hover:bg-slate-50">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-semibold text-slate-900">
              Compras Central
            </p>
            <p className="text-xs text-slate-500">Rol demo: Gerencia</p>
          </div>

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
            SF
          </div>
        </div>
      </div>
    </header>
  );
}