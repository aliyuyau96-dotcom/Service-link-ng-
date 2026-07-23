import { BadgeCheck } from "lucide-react"
import { cn } from "@/lib/utils"

export function VerifiedBadge({ className, showLabel = true }: { className?: string; showLabel?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary",
        className,
      )}
    >
      <BadgeCheck className="size-3.5" />
      {showLabel && "Verified"}
    </span>
  )
}
