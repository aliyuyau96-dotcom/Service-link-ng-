import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface StarRatingProps {
  rating: number
  size?: number
  className?: string
}

export function StarRating({ rating, size = 16, className }: StarRatingProps) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => {
        const filled = rating >= i
        const half = !filled && rating >= i - 0.5
        return (
          <span key={i} className="relative inline-flex" style={{ width: size, height: size }}>
            <Star
              className="absolute text-gold/30"
              style={{ width: size, height: size }}
              fill="currentColor"
              strokeWidth={0}
            />
            {(filled || half) && (
              <span
                className="absolute overflow-hidden"
                style={{ width: half ? size / 2 : size, height: size }}
              >
                <Star
                  className="text-gold"
                  style={{ width: size, height: size }}
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            )}
          </span>
        )
      })}
    </div>
  )
}
