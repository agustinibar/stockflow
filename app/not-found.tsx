import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold text-blue-600">404</p>
        <h1 className="mt-2 text-2xl font-bold text-slate-950">
          No encontramos esta página
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-500">
          La solicitud, proveedor o recurso que estás buscando no existe en la
          demo actual.
        </p>

        <Link
          href="/dashboard"
          className="mt-6 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Volver al dashboard
        </Link>
      </div>
    </main>
  );
}