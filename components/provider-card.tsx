import Link from "next/link"
import Image from "next/image"
import { MapPin, Clock } from "lucide-react"
import { StarRating } from "@/components/star-rating"
import { VerifiedBadge } from "@/components/verified-badge"
import { Badge } from "@/components/ui/badge"
import { getCategory, type Provider } from "@/lib/data"

export function ProviderCard({ provider }: { provider: Provider }) {
  const category = getCategory(provider.categoryId)

  return (
    <Link
      href={`/providers/${provider.id}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={provider.image || "/placeholder.svg"}
          alt={`${provider.name} — ${category?.singular}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <Badge variant="secondary" className="bg-background/90 text-foreground shadow-sm">
            {category?.name}
          </Badge>
        </div>
        {provider.verified && (
          <div className="absolute right-3 top-3">
            <VerifiedBadge className="bg-background/90 shadow-sm" />
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-4">
        <div>
          <h3 className="font-heading text-base font-semibold leading-tight text-foreground">{provider.name}</h3>
          <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">{provider.tagline}</p>
        </div>

        <div className="flex items-center gap-2">
          <StarRating rating={provider.rating} />
          <span className="text-sm font-semibold text-foreground">{provider.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({provider.reviewCount})</span>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <MapPin className="size-3.5" />
            {provider.city}, {provider.state}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3.5" />
            {provider.responseTime}
          </span>
        </div>
      </div>
    </Link>
  )
}
