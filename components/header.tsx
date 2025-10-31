"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, Search } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-xl cursor-none">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 cursor-none">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <span className="font-sans text-2xl font-black text-slate-900">IES</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="/nosotros"
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 cursor-none"
            >
              Nosotros
            </Link>
            <Link
              href="/carreras"
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 cursor-none"
            >
              Carreras
            </Link>
            <Link
              href="/admisiones"
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 cursor-none"
            >
              Admisiones
            </Link>
            <Link
              href="/noticias"
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 cursor-none"
            >
              Noticias
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-semibold text-slate-600 transition-colors hover:text-blue-600 cursor-none"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex cursor-none hover:bg-blue-50 rounded-xl">
              <Search className="h-5 w-5 text-slate-600" />
            </Button>
            <Button asChild className="hidden md:flex cursor-none bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 rounded-2xl px-6 py-2 font-semibold">
              <Link href="/portal-estudiantes" className="cursor-none">Portal Estudiantes</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden cursor-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-4 pb-6 md:hidden bg-white/90 backdrop-blur-xl rounded-2xl mt-4 p-4">
            <Link href="/nosotros" className="text-sm font-semibold text-slate-600 cursor-none py-2">
              Nosotros
            </Link>
            <Link href="/carreras" className="text-sm font-semibold text-slate-600 cursor-none py-2">
              Carreras
            </Link>
            <Link href="/admisiones" className="text-sm font-semibold text-slate-600 cursor-none py-2">
              Admisiones
            </Link>
            <Link href="/noticias" className="text-sm font-semibold text-slate-600 cursor-none py-2">
              Noticias
            </Link>
            <Link href="/contacto" className="text-sm font-semibold text-slate-600 cursor-none py-2">
              Contacto
            </Link>
            <Button asChild className="w-full cursor-none bg-gradient-to-r from-blue-600 to-cyan-500 rounded-2xl mt-2">
              <Link href="/portal-estudiantes" className="cursor-none">Portal Estudiantes</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
