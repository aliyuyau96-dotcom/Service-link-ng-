import Link from "next/link"
import { Link2 } from "lucide-react"
import { categories } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Link2 className="size-5" />
              </span>
              <span className="text-lg font-bold tracking-tight font-heading">
                ServiceLink<span className="text-primary"> NG</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Connecting Nigerians with trusted, verified service providers across the country.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Popular services</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {categories.slice(0, 5).map((c) => (
                <li key={c.id}>
                  <Link
                    href={`/browse?category=${c.id}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {["About us", "How it works", "Trust & safety", "Careers", "Contact"].map((label) => (
                <li key={label}>
                  <Link href="/" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">For businesses</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {["List your business", "Provider guidelines", "Get verified", "Pricing", "Support"].map((label) => (
                <li key={label}>
                  <Link
                    href="/browse"
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>&copy; {new Date().getFullYear()} ServiceLink NG. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/" className="hover:text-foreground">
              Privacy
            </Link>
            <Link href="/" className="hover:text-foreground">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
