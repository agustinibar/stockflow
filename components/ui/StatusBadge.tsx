import { RequestStatus } from "@/types";
import { formatRequestStatus } from "@/lib/formatters";
import { getStatusColor } from "@/lib/requestHelpers";

interface StatusBadgeProps {
  status: RequestStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusColor(
        status
      )}`}
    >
      {formatRequestStatus(status)}
    </span>
  );
}