import { AppShell } from "@/components/layout/AppShell";
import { PageTitle } from "@/components/ui/PageTitle";
import { SupplierTable } from "@/components/suppliers/SupplierTable";
import { mockSuppliers } from "@/data/mockSuppliers";
import { Award, ShieldCheck, Truck } from "lucide-react";

export default function SuppliersPage() {
  const approvedSuppliers = mockSuppliers.filter(
    (supplier) => supplier.isApproved
  ).length;

  const averageQuality = Math.round(
    mockSuppliers.reduce((sum, supplier) => sum + supplier.qualityScore, 0) /
      mockSuppliers.length
  );

  return (
    <AppShell>
      <PageTitle
        title="Proveedores"
        description="Ranking y control de proveedores según calidad, entrega y homologación."
      />

      <section className="mb-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <Truck className="h-5 w-5" />
          </div>
          <p className="text-2xl font-bold text-slate-950">
            {mockSuppliers.length}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Proveedores registrados
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <p className="text-2xl font-bold text-slate-950">
            {approvedSuppliers}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Proveedores homologados
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
            <Award className="h-5 w-5" />
          </div>
          <p className="text-2xl font-bold text-slate-950">
            {averageQuality}/100
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Calidad promedio evaluada
          </p>
        </div>
      </section>

      <SupplierTable suppliers={mockSuppliers} />
    </AppShell>
  );
}