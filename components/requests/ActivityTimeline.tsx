import { ActivityItem } from "@/types";
import { CheckCircle2 } from "lucide-react";

interface ActivityTimelineProps {
  activities: ActivityItem[];
}

export function ActivityTimeline({ activities }: ActivityTimelineProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">
        Historial trazable
      </h2>

      <p className="mt-1 text-sm text-slate-500">
        Registro de decisiones, validaciones y cambios de estado.
      </p>

      <div className="mt-5 space-y-5">
        {activities.map((activity) => (
          <div key={activity.id} className="flex gap-3">
            <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <CheckCircle2 className="h-4 w-4" />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-semibold text-slate-900">
                  {activity.action}
                </p>
                <span className="text-xs text-slate-400">
                  {activity.createdAt}
                </span>
              </div>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                {activity.description}
              </p>

              <p className="mt-1 text-xs font-medium text-slate-400">
                {activity.actor} · {activity.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}