"use client"

import { usePathname } from "next/navigation"
import type React from "react"
import { InteractiveHeader } from "@/components/interactive-header"
import { InteractiveFooter } from "@/components/interactive-footer"

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/"
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/")

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <InteractiveHeader />
      <main className="min-h-screen">
        {children}
      </main>
      <InteractiveFooter />
    </>
  )
}
