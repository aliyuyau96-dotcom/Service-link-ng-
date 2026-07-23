import Link from "next/link"
import Image from "next/image"
import { Search, ShieldCheck, Star, Users, MapPin, ArrowRight } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CategoryCard } from "@/components/category-card"
import { ProviderCard } from "@/components/provider-card"
import { Button } from "@/components/ui/button"
import { HomeSearch } from "@/components/home-search"
import { categories, providers } from "@/lib/data"

const featured = [...providers].sort((a, b) => b.rating - a.rating).slice(0, 6)

const stats = [
  { icon: Users, value: "2,400+", label: "Verified providers" },
  { icon: Star, value: "4.8", label: "Average rating" },
  { icon: MapPin, value: "36", label: "States covered" },
  { icon: ShieldCheck, value: "18,000+", label: "Jobs completed" },
]

const steps = [
  {
    title: "Search",
    desc: "Tell us what you need and where you are. Browse by service or location across Nigeria.",
  },
  {
    title: "Compare",
    desc: "Check verified badges, ratings and real reviews to find a provider you can trust.",
  },
  {
    title: "Connect",
    desc: "Send a booking or contact request and get a fast response from the provider.",
  },
]

export default function HomePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border bg-secondary/40">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <ShieldCheck className="size-3.5" />
                Trusted by thousands across Nigeria
              </span>
              <h1 className="text-pretty text-4xl font-bold leading-[1.1] text-foreground md:text-5xl">
                Find trusted service providers, <span className="text-primary">fast</span>.
              </h1>
              <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                From mechanics and electricians to lawyers, doctors and tailors — connect with verified professionals
                near you, backed by real reviews.
              </p>

              <HomeSearch />

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span>Popular:</span>
                {categories.slice(0, 4).map((c) => (
                  <Link
                    key={c.id}
                    href={`/browse?category=${c.id}`}
                    className="font-medium text-foreground underline-offset-4 hover:text-primary hover:underline"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-xl">
                <Image
                  src="/images/hero.png"
                  alt="A verified Nigerian service professional ready to help"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 hidden rounded-xl border border-border bg-card p-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Verified & reviewed</p>
                    <p className="text-xs text-muted-foreground">Every provider, vetted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-b border-border bg-background">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <p className="text-xl font-bold text-foreground font-heading">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">Browse by category</h2>
              <p className="mt-2 text-muted-foreground">Whatever you need done, there is a trusted pro for it.</p>
            </div>
            <Button variant="ghost" asChild className="hidden shrink-0 sm:inline-flex">
              <Link href="/browse">
                View all
                <ArrowRight className="size-4" data-icon="inline-end" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((c) => (
              <CategoryCard key={c.id} category={c} />
            ))}
          </div>
        </section>

        {/* Featured providers */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-foreground md:text-3xl">Top-rated providers</h2>
                <p className="mt-2 text-muted-foreground">Highly reviewed professionals ready to help.</p>
              </div>
              <Button variant="ghost" asChild className="hidden shrink-0 sm:inline-flex">
                <Link href="/browse">
                  See all
                  <ArrowRight className="size-4" data-icon="inline-end" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((p) => (
                <ProviderCard key={p.id} provider={p} />
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-14 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">How ServiceLink works</h2>
            <p className="mt-2 text-muted-foreground">Three simple steps to get the job done.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative rounded-xl border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground font-heading">
                  {i + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 pb-16">
          <div className="overflow-hidden rounded-2xl bg-primary px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="text-pretty text-2xl font-bold text-primary-foreground md:text-3xl">
              Run a business? Reach more customers.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-primary-foreground/80">
              List your services on ServiceLink NG, earn a verified badge and connect with customers looking for exactly
              what you offer.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/browse">List your business</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/browse">
                  <Search className="size-4" data-icon="inline-start" />
                  Browse services
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
