"use client"

import { useMemo, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Search, SlidersHorizontal, X } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group"
import { Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from "@/components/ui/empty"
import { ProviderCard } from "@/components/provider-card"
import { categories, states, providers, type CategoryId } from "@/lib/data"

type SortKey = "rating" | "reviews" | "experience"

const sortLabels: Record<SortKey, string> = {
  rating: "Highest rated",
  reviews: "Most reviewed",
  experience: "Most experienced",
}

export function BrowseClient() {
  const params = useSearchParams()

  const [query, setQuery] = useState(params.get("q") ?? "")
  const [category, setCategory] = useState<string>(params.get("category") ?? "all")
  const [state, setState] = useState<string>(params.get("state") ?? "all")
  const [minRating, setMinRating] = useState<string>("all")
  const [verifiedOnly, setVerifiedOnly] = useState(false)
  const [sort, setSort] = useState<SortKey>("rating")

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    let list = providers.filter((p) => {
      if (category !== "all" && p.categoryId !== (category as CategoryId)) return false
      if (state !== "all" && p.state !== state) return false
      if (verifiedOnly && !p.verified) return false
      if (minRating !== "all" && p.rating < Number(minRating)) return false
      if (q) {
        const haystack = `${p.name} ${p.tagline} ${p.city} ${p.state} ${p.services.join(" ")}`.toLowerCase()
        if (!haystack.includes(q)) return false
      }
      return true
    })

    list = [...list].sort((a, b) => {
      if (sort === "rating") return b.rating - a.rating
      if (sort === "reviews") return b.reviewCount - a.reviewCount
      return b.yearsExperience - a.yearsExperience
    })

    return list
  }, [query, category, state, minRating, verifiedOnly, sort])

  const hasActiveFilters =
    query.trim() !== "" || category !== "all" || state !== "all" || minRating !== "all" || verifiedOnly

  function clearFilters() {
    setQuery("")
    setCategory("all")
    setState("all")
    setMinRating("all")
    setVerifiedOnly(false)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold sm:text-3xl">Browse service providers</h1>
        <p className="text-muted-foreground">
          Find trusted, verified professionals near you. Filter by service, location and rating.
        </p>
      </div>

      {/* Search + filters */}
      <div className="mt-6 flex flex-col gap-3 rounded-xl border bg-card p-4 shadow-sm">
        <InputGroup>
          <InputGroupAddon>
            <Search />
          </InputGroupAddon>
          <InputGroupInput
            placeholder="Search by name, service or city…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </InputGroup>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All categories</SelectItem>
                {categories.map((c) => (
                  <SelectItem key={c.id} value={c.id}>
                    {c.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={state} onValueChange={setState}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All locations</SelectItem>
                {states.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={minRating} onValueChange={setMinRating}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Rating" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">Any rating</SelectItem>
                <SelectItem value="4.5">4.5+ stars</SelectItem>
                <SelectItem value="4">4.0+ stars</SelectItem>
                <SelectItem value="3.5">3.5+ stars</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
            <SelectTrigger className="w-full">
              <SlidersHorizontal className="text-muted-foreground" />
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {(Object.keys(sortLabels) as SortKey[]).map((k) => (
                  <SelectItem key={k} value={k}>
                    {sortLabels[k]}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <Button
            type="button"
            size="sm"
            variant={verifiedOnly ? "default" : "outline"}
            onClick={() => setVerifiedOnly((v) => !v)}
          >
            Verified only
          </Button>
          {hasActiveFilters && (
            <Button type="button" size="sm" variant="ghost" onClick={clearFilters}>
              <X data-icon="inline-start" />
              Clear filters
            </Button>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold text-foreground">{results.length}</span>{" "}
          {results.length === 1 ? "provider" : "providers"} found
        </p>
        {category !== "all" && (
          <Badge variant="secondary" className="capitalize">
            {categories.find((c) => c.id === category)?.name}
          </Badge>
        )}
      </div>

      {results.length > 0 ? (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <ProviderCard key={p.id} provider={p} />
          ))}
        </div>
      ) : (
        <Empty className="mt-4 rounded-xl border bg-card">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Search />
            </EmptyMedia>
            <EmptyTitle>No providers found</EmptyTitle>
            <EmptyDescription>
              Try adjusting your filters or search for a different service or location.
            </EmptyDescription>
          </EmptyHeader>
          <Button variant="outline" onClick={clearFilters}>
            Clear all filters
          </Button>
        </Empty>
      )}
    </div>
  )
}
