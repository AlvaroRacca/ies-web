import type React from "react"
import { getSession } from "@/lib/auth"
import { AdminHeader } from "@/components/admin/admin-header"

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()

  // Si no hay sesión y no estamos en login, redirigir
  if (!session) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen">
      <AdminHeader />
      {children}
    </div>
  )
}
