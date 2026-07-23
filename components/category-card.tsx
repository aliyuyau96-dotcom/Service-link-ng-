import Link from "next/link"
import { type Category, providerCountByCategory } from "@/lib/data"

export function CategoryCard({ category }: { category: Category }) {
  const Icon = category.icon
  const count = providerCountByCategory(category.id)

  return (
    <Link
      href={`/browse?category=${category.id}`}
      className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md"
    >
      <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-6" />
      </span>
      <div>
        <h3 className="font-heading text-base font-semibold text-foreground">{category.name}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{category.description}</p>
      </div>
      <span className="mt-1 text-xs font-medium text-muted-foreground">
        {count} {count === 1 ? "provider" : "providers"}
      </span>
    </Link>
  )
}
