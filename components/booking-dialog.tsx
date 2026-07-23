"use client"

import { useState } from "react"
import { CalendarCheck, Phone } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import type { Provider } from "@/lib/data"

export function BookingDialog({ provider }: { provider: Provider }) {
  const [open, setOpen] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setOpen(false)
    toast.success("Request sent!", {
      description: `${provider.name} will reach out to you shortly. Typical response: ${provider.responseTime.toLowerCase()}.`,
    })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="w-full">
          <CalendarCheck data-icon="inline-start" />
          Request booking
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request a booking</DialogTitle>
          <DialogDescription>
            Send your details to {provider.name}. They typically respond {provider.responseTime.toLowerCase()}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="name">Your name</FieldLabel>
              <Input id="name" name="name" placeholder="e.g. Adaeze Okafor" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="phone">Phone number</FieldLabel>
              <Input id="phone" name="phone" type="tel" placeholder="+234 …" required />
            </Field>
            <Field>
              <FieldLabel htmlFor="details">What do you need help with?</FieldLabel>
              <Textarea
                id="details"
                name="details"
                placeholder={`Describe the ${provider.categoryId.replace(/s$/, "")} service you need…`}
                rows={4}
                required
              />
            </Field>
          </FieldGroup>
          <DialogFooter className="mt-6 flex-col gap-2 sm:flex-col">
            <Button type="submit" className="w-full">
              Send request
            </Button>
            <DialogClose asChild>
              <Button type="button" variant="outline" className="w-full" asChild>
                <a href={`tel:${provider.phone.replace(/\s/g, "")}`}>
                  <Phone data-icon="inline-start" />
                  Call {provider.phone}
                </a>
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
