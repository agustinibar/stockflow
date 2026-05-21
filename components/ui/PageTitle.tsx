interface PageTitleProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

export function PageTitle({ title, description, action }: PageTitleProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-950">
          {title}
        </h1>

        {description && (
          <p className="mt-1 text-sm text-slate-500">{description}</p>
        )}
      </div>

      {action && <div>{action}</div>}
    </div>
  );
}