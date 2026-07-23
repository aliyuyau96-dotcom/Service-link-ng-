import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { StarRating } from "@/components/star-rating"
import { VerifiedBadge } from "@/components/verified-badge"
import { BookingDialog } from "@/components/booking-dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { getProvider, getCategory, providers } from "@/lib/data"

export function generateStaticParams() {
  return providers.map((p) => ({ id: p.id }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const provider = getProvider(id)
  if (!provider) return { title: "Provider not found — ServiceLink NG" }
  return {
    title: `${provider.name} — ${provider.tagline} | ServiceLink NG`,
    description: provider.about,
  }
}

function initials(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
}

export default async function ProviderPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const provider = getProvider(id)
  if (!provider) notFound()

  const category = getCategory(provider.categoryId)

  const stats = [
    { icon: TrendingUp, label: "Jobs completed", value: `${provider.jobsCompleted.toLocaleString()}+` },
    { icon: CalendarClock, label: "Experience", value: `${provider.yearsExperience} yrs` },
    { icon: Clock, label: "Responds", value: provider.responseTime },
    { icon: ShieldCheck, label: "Price range", value: provider.priceRange },
  ]

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/20">
        {/* Hero banner */}
        <div className="relative h-48 w-full sm:h-64">
          <Image
            src={provider.image || "/placeholder.svg"}
            alt={`${provider.name} at work`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-foreground/10" />
          <div className="absolute inset-x-0 top-0 p-4">
            <Button asChild variant="secondary" size="sm">
              <Link href="/browse">
                <ArrowLeft data-icon="inline-start" />
                Back to browse
              </Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 pb-16">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Main column */}
            <div className="flex flex-col gap-6 lg:col-span-2">
              {/* Identity card */}
              <Card className="-mt-16 relative">
                <CardHeader>
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <Avatar className="size-16 border-2 border-background shadow-sm">
                      <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                        {initials(provider.name)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-1 flex-col gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <h1 className="text-2xl font-bold">{provider.name}</h1>
                        {provider.verified && <VerifiedBadge />}
                      </div>
                      <p className="text-muted-foreground">{provider.tagline}</p>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
                        <span className="flex items-center gap-1.5">
                          <StarRating rating={provider.rating} />
                          <span className="font-semibold">{provider.rating.toFixed(1)}</span>
                          <span className="text-muted-foreground">({provider.reviewCount} reviews)</span>
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <MapPin className="size-4" />
                          {provider.city}, {provider.state}
                        </span>
                      </div>
                      {category && (
                        <div>
                          <Badge variant="secondary">{category.name}</Badge>
                        </div>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {stats.map((s) => (
                  <Card key={s.label} className="gap-0 py-4">
                    <CardContent className="flex flex-col items-center gap-1 px-3 text-center">
                      <s.icon className="size-5 text-primary" />
                      <span className="text-sm font-semibold">{s.value}</span>
                      <span className="text-xs text-muted-foreground">{s.label}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4">
                  <p className="leading-relaxed text-muted-foreground">{provider.about}</p>
                  <Separator />
                  <div>
                    <h3 className="mb-3 text-sm font-semibold">Services offered</h3>
                    <div className="flex flex-col gap-2 sm:grid sm:grid-cols-2">
                      {provider.services.map((service) => (
                        <div key={service} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="size-4 shrink-0 text-primary" />
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>Reviews</span>
                    <span className="flex items-center gap-1.5 text-base font-normal">
                      <StarRating rating={provider.rating} />
                      <span className="font-semibold">{provider.rating.toFixed(1)}</span>
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-5">
                  {provider.reviews.map((review, i) => (
                    <div key={i} className="flex flex-col gap-2">
                      {i > 0 && <Separator className="mb-3" />}
                      <div className="flex items-center gap-3">
                        <Avatar className="size-9">
                          <AvatarFallback className="bg-secondary text-secondary-foreground text-xs font-semibold">
                            {initials(review.author)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-1 flex-col">
                          <span className="flex items-center gap-1.5 text-sm font-semibold">
                            {review.author}
                            <BadgeCheck className="size-3.5 text-primary" />
                          </span>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                        <StarRating rating={review.rating} size={14} />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="flex flex-col gap-4 lg:sticky lg:top-20">
                <Card className="lg:mt-8">
                  <CardContent className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Response time</span>
                      <span className="text-sm font-semibold">{provider.responseTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Working hours</span>
                      <span className="text-sm font-semibold text-right">{provider.hours}</span>
                    </div>
                    <Separator />
                    <BookingDialog provider={provider} />
                    <Button asChild variant="outline" size="lg" className="w-full">
                      <a href={`tel:${provider.phone.replace(/\s/g, "")}`}>
                        <Phone data-icon="inline-start" />
                        {provider.phone}
                      </a>
                    </Button>
                    {provider.verified && (
                      <div className="flex items-start gap-2 rounded-lg bg-primary/5 p-3 text-xs text-muted-foreground">
                        <ShieldCheck className="size-4 shrink-0 text-primary" />
                        <span>
                          Identity and credentials verified by ServiceLink NG for your peace of mind.
                        </span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
