import { Suspense } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BrowseClient } from "@/components/browse-client"

export default function BrowsePage() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex-1 bg-secondary/20">
        <Suspense fallback={<div className="mx-auto max-w-6xl px-4 py-10 text-muted-foreground">Loading…</div>}>
          <BrowseClient />
        </Suspense>
      </main>
      <SiteFooter />
    </div>
  )
}
