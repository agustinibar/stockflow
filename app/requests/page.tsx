import Link from "next/link";
import { AppShell } from "@/components/layout/AppShell";
import { PageTitle } from "@/components/ui/PageTitle";
import { RequestTable } from "@/components/requests/RequestTable";
import { mockRequests } from "@/data/mockRequests";
import { Plus } from "lucide-react";

export default function RequestsPage() {
  return (
    <AppShell>
      <PageTitle
        title="Solicitudes de abastecimiento"
        description="Gestioná pedidos urgentes, validaciones técnicas y aprobaciones de compra."
        action={
          <Link
            href="/requests/new"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Nueva solicitud
          </Link>
        }
      />

      <RequestTable requests={mockRequests} />
    </AppShell>
  );
}