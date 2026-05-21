import { UrgencyLevel } from "@/types";
import { formatUrgency } from "@/lib/formatters";
import { getUrgencyColor } from "@/lib/requestHelpers";

interface PriorityBadgeProps {
  urgency: UrgencyLevel;
}

export function PriorityBadge({ urgency }: PriorityBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${getUrgencyColor(
        urgency
      )}`}
    >
      {formatUrgency(urgency)}
    </span>
  );
}