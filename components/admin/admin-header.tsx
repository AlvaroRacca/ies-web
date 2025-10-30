"use client"

import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"
import { logout } from "@/lib/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function AdminHeader() {
  const router = useRouter()

  async function handleLogout() {
    await logout()
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link href="/admin" className="font-bold text-xl">
              Admin Panel
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/admin" className="text-sm hover:text-primary transition-colors">
                Dashboard
              </Link>
              <Link href="/admin/noticias" className="text-sm hover:text-primary transition-colors">
                Noticias
              </Link>
              <Link href="/admin/carreras" className="text-sm hover:text-primary transition-colors">
                Carreras
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" target="_blank">
              <Button variant="outline" size="sm">
                Ver Sitio
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout}>
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
