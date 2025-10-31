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
        <div className="flex h-20 md:h-28 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-none group">
            <Image 
              src="/logo.png" 
              alt="IES Logo" 
              width={300} 
              height={300}
              className="h-16 md:h-32 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 lg:gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm lg:text-base font-semibold transition-colors duration-300 cursor-none hover:scale-105 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-[#D20537]' 
                    : 'text-white hover:text-cyan-300'
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
              className={`hidden md:flex cursor-none rounded-2xl px-4 lg:px-6 py-2 font-bold text-sm transition-all duration-300 ${
                isScrolled 
                  ? 'bg-[#D20537] hover:bg-[#B8002E] text-white shadow-lg' 
                  : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
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
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-white/98 backdrop-blur-xl rounded-3xl mt-4 p-8 shadow-2xl border border-slate-100">
            <div className="flex flex-col gap-1">
              {menuItems.map((item, index) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="block text-lg font-bold text-slate-800 hover:text-[#D20537] hover:bg-red-50 cursor-none py-4 px-5 rounded-2xl transition-all duration-300 hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent my-4"></div>
              <Button 
                asChild 
                className="w-full cursor-none bg-gradient-to-r from-[#D20537] to-[#B8002E] hover:from-[#B8002E] hover:to-[#D20537] rounded-2xl py-6 font-black text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link 
                  href="/portal-estudiantes" 
                  className="cursor-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portal Estudiantes
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
