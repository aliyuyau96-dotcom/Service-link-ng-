"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { states } from "@/lib/data"

export function HomeSearch() {
  const router = useRouter()
  const [query, setQuery] = useState("")
  const [state, setState] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set("q", query.trim())
    if (state) params.set("state", state)
    router.push(`/browse${params.toString() ? `?${params.toString()}` : ""}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 rounded-xl border border-border bg-card p-2 shadow-sm sm:flex-row sm:items-center"
    >
      <div className="flex flex-1 items-center gap-2 px-2">
        <Search className="size-5 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="What service do you need?"
          className="h-10 w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
          aria-label="Search for a service"
        />
      </div>

      <div className="hidden h-8 w-px bg-border sm:block" />

      <div className="flex items-center gap-2 px-1">
        <Select value={state} onValueChange={setState}>
          <SelectTrigger className="w-full border-0 shadow-none sm:w-40" aria-label="Select location">
            <MapPin className="size-4 text-muted-foreground" />
            <SelectValue placeholder="All locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {states.map((s) => (
                <SelectItem key={s} value={s}>
                  {s}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto">
        <Search className="size-4" data-icon="inline-start" />
        Search
      </Button>
    </form>
  )
}
