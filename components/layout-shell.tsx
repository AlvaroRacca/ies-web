"use client"

import { usePathname } from "next/navigation"
import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/"
  const isAdmin = pathname === "/admin" || pathname.startsWith("/admin/")

  if (isAdmin) {
    return <>{children}</>
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
