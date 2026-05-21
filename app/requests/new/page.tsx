import { AppShell } from "@/components/layout/AppShell";
import { RequestForm } from "@/components/requests/RequestForm";
import { PageTitle } from "@/components/ui/PageTitle";

export default function NewRequestPage() {
  return (
    <AppShell>
      <PageTitle
        title="Nueva solicitud"
        description="Cargá una necesidad urgente de pieza, herramienta o insumo para iniciar el circuito de abastecimiento."
      />

      <RequestForm />
    </AppShell>
  );
}