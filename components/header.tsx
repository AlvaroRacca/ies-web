"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, GraduationCap, Search } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <GraduationCap className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground">Universidad Nacional</span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/nosotros"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Nosotros
            </Link>
            <Link
              href="/carreras"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Carreras
            </Link>
            <Link
              href="/admisiones"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Admisiones
            </Link>
            <Link
              href="/noticias"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Noticias
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Contacto
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button asChild className="hidden md:flex">
              <Link href="/portal-estudiantes">Portal Estudiantes</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <nav className="flex flex-col gap-4 pb-4 md:hidden">
            <Link href="/nosotros" className="text-sm font-medium text-muted-foreground">
              Nosotros
            </Link>
            <Link href="/carreras" className="text-sm font-medium text-muted-foreground">
              Carreras
            </Link>
            <Link href="/admisiones" className="text-sm font-medium text-muted-foreground">
              Admisiones
            </Link>
            <Link href="/noticias" className="text-sm font-medium text-muted-foreground">
              Noticias
            </Link>
            <Link href="/contacto" className="text-sm font-medium text-muted-foreground">
              Contacto
            </Link>
            <Button asChild className="w-full">
              <Link href="/portal-estudiantes">Portal Estudiantes</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
