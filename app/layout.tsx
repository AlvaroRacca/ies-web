import type React from "react"
import type { Metadata } from "next"
import { Inter, Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { LayoutShell } from "@/components/layout-shell"

const _inter = Inter({ subsets: ["latin"] })
const _merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Universidad Nacional - Excelencia Académica",
  description: "Universidad líder en educación superior, investigación e innovación",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        <LayoutShell>
          {children}
        </LayoutShell>
        <Analytics />
      </body>
    </html>
  )
}
