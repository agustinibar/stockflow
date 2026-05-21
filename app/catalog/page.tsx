import { AppShell } from "@/components/layout/AppShell";
import { CatalogTable } from "@/components/catalog/CatalogTable";
import { PageTitle } from "@/components/ui/PageTitle";
import { mockCatalog } from "@/data/mockCatalog";
import { PackageCheck, SearchCheck, Zap } from "lucide-react";

export default function CatalogPage() {
  return (
    <AppShell>
      <PageTitle
        title="Catálogo homologado"
        description="Productos validados previamente para acelerar compras futuras y reducir reprocesos."
      />

      <section className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <PackageCheck className="h-5 w-5" />
          </div>
          <p className="text-2xl font-bold text-slate-950">
            {mockCatalog.length}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Productos homologados activos
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <Zap className="h-5 w-5" />
          </div>
          <p className="text-2xl font-bold text-slate-950">70%</p>
          <p className="mt-1 text-sm text-slate-500">
            Menos tiempo en recompras frecuentes
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <SearchCheck className="h-5 w-5" />
          </div>
          <p className="text-2xl font-bold text-slate-950">0</p>
          <p className="mt-1 text-sm text-slate-500">
            Rechazos por calidad en productos homologados
          </p>
        </div>
      </section>

      <CatalogTable items={mockCatalog} />
    </AppShell>
  );
}