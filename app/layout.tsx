import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"

import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "ServiceLink NG — Find Trusted Service Providers in Nigeria",
  description:
    "ServiceLink NG connects Nigerians with verified, trusted professionals — mechanics, electricians, lawyers, doctors, tailors, solar installers and more. Search by service and location, read reviews, and request a booking.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased bg-background", inter.variable, jakarta.variable, "font-sans")}
    >
      <body>
        {children}
        <Toaster position="top-center" richColors />
      </body>
    </html>
  )
}
