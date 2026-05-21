import Link from "next/link";
import { notFound } from "next/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { PageTitle } from "@/components/ui/PageTitle";
import { RequestSummaryCard } from "@/components/requests/RequestSummaryCard";
import { SupplierComparison } from "@/components/requests/SupplierComparison";
import { ApprovalActions } from "@/components/requests/ApprovalActions";
import { ActivityTimeline } from "@/components/requests/ActivityTimeline";
import { mockRequests } from "@/data/mockRequests";
import { mockQuotations } from "@/data/mockQuotations";
import { mockActivity } from "@/data/mockActivity";
import { ArrowLeft } from "lucide-react";

interface RequestDetailPageProps {
  params: {
    id: string;
  };
}

export default function RequestDetailPage({ params }: RequestDetailPageProps) {
  const request = mockRequests.find((item) => item.id === params.id);

  if (!request) {
    notFound();
  }

  const quotations = mockQuotations.filter(
    (quotation) => quotation.requestId === request.id
  );

  const activities = mockActivity.filter(
    (activity) => activity.requestId === request.id
  );

  return (
    <AppShell>
      <PageTitle
        title={`Solicitud ${request.id}`}
        description="Detalle operativo de la solicitud, comparación de proveedores y circuito de aprobación."
        action={
          <Link
            href="/requests"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver
          </Link>
        }
      />

      <div className="grid gap-6 xl:grid-cols-[1fr_360px]">
        <div className="space-y-6">
          <RequestSummaryCard request={request} />

          {quotations.length > 0 ? (
            <SupplierComparison quotations={quotations} />
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm">
              Todavía no hay cotizaciones cargadas para esta solicitud.
            </div>
          )}
        </div>

        <div className="space-y-6">
          <ApprovalActions initialStatus={request.status} requestId={request.id} />
          <ActivityTimeline activities={activities} />
        </div>
      </div>
    </AppShell>
  );
}