import type React from "react"
import { getSession } from "@/lib/auth"
import { AdminHeader } from "@/components/admin/admin-header"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  // Si no hay sesión (pantallas públicas dentro de /admin como login) render directo
  if (!session) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <AdminHeader />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  )
}
