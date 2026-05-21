import Link from "next/link";
import {
  BarChart3,
  ClipboardList,
  Factory,
  PackageCheck,
  Truck,
} from "lucide-react";

const navigation = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: BarChart3,
  },
  {
    label: "Solicitudes",
    href: "/requests",
    icon: ClipboardList,
  },
  {
    label: "Catálogo",
    href: "/catalog",
    icon: PackageCheck,
  },
  {
    label: "Proveedores",
    href: "/suppliers",
    icon: Truck,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 border-r border-slate-200 bg-slate-950 text-white lg:block">
      <div className="flex h-16 items-center gap-3 border-b border-white/10 px-6">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
          <Factory className="h-5 w-5" />
        </div>

        <div>
          <p className="text-lg font-bold leading-none">StockFlow</p>
          <p className="mt-1 text-xs text-slate-400">Abastecimiento urgente</p>
        </div>
      </div>

      <nav className="space-y-1 px-4 py-6">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}