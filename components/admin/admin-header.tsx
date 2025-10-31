"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LogOut, Menu } from "lucide-react"
import { logout } from "@/lib/auth"
import { useRouter } from "next/navigation"
import Link from "next/link"

export function AdminHeader() {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  async function handleLogout() {
    await logout()
    router.push("/admin/login")
    router.refresh()
  }

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#D20537] to-[#B8002E] text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link href="/admin" className="font-black text-lg tracking-tight">
              Instituto · Admin
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="/admin" className="text-sm/none font-semibold hover:opacity-90 transition-opacity">
                Dashboard
              </Link>
              <Link href="/admin/noticias" className="text-sm/none font-semibold hover:opacity-90 transition-opacity">
                Noticias
              </Link>
              <Link href="/admin/carreras" className="text-sm/none font-semibold hover:opacity-90 transition-opacity">
                Carreras
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/" target="_blank" className="hidden sm:block">
              <Button variant="secondary" size="sm" className="rounded-xl font-semibold">
                Ver sitio
              </Button>
            </Link>
            <Button variant="ghost" size="sm" onClick={handleLogout} className="text-white hover:bg-white/10 rounded-xl">
              <LogOut className="h-4 w-4 mr-2" />
              Salir
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Abrir menú"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
        {/* Mobile nav */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-1 pb-4">
            <Link
              href="/admin"
              className="px-3 py-2 rounded-lg font-medium hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/admin/noticias"
              className="px-3 py-2 rounded-lg font-medium hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Noticias
            </Link>
            <Link
              href="/admin/carreras"
              className="px-3 py-2 rounded-lg font-medium hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Carreras
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}
