"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Search } from "lucide-react"
import Image from "next/image"

export function InteractiveHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Carreras", href: "/carreras" },
    { name: "Admisiones", href: "/admisiones" },
    { name: "Noticias", href: "/noticias" },
    { name: "Contacto", href: "/contacto" },
  ]

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 cursor-none ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-none group">
            <Image 
              src="/logo.png" 
              alt="IES Logo" 
              width={300} 
              height={300}
              className="h-32 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 cursor-none ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-[#D20537]' 
                    : 'text-white hover:text-blue-200'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <Button 
              asChild 
              className={`hidden md:flex cursor-none rounded-full px-6 py-2 font-medium text-sm transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[#D20537] hover:bg-[#B8002E] text-white' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30'
              }`}
            >
              <Link href="/portal-estudiantes" className="cursor-none">
                Portal Estudiantes
              </Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className={`md:hidden cursor-none ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white/95 backdrop-blur-xl rounded-xl mt-4 p-4 shadow-lg">
            <div className="flex flex-col gap-3">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block text-sm font-medium text-slate-700 hover:text-blue-600 cursor-none py-2 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild 
                className="w-full cursor-none bg-blue-600 hover:bg-blue-700 rounded-full mt-3"
              >
                <Link href="/portal-estudiantes" className="cursor-none">
                  Portal Estudiantes
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
