"use client"

import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import Image from "next/image"

export function InteractiveFooter() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white cursor-none relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/3 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo y descripción */}
          <div className="lg:col-span-1">
           <Link href="/" className="flex items-center cursor-none group">
            <Image 
              src="/logo.png" 
              alt="IES Logo" 
              width={500} 
              height={500}
              className="h-50 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </Link>
            {/* Redes sociales */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", color: "hover:bg-blue-600" },
                { icon: Twitter, href: "#", color: "hover:bg-sky-500" },
                { icon: Instagram, href: "#", color: "hover:bg-pink-600" },
                { icon: Linkedin, href: "#", color: "hover:bg-blue-700" },
                { icon: Youtube, href: "#", color: "hover:bg-red-600" }
              ].map(({ icon: Icon, href, color }, index) => (
                <Link
                  key={index}
                  href={href}
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-110 cursor-none ${color}`}
                >
                  <Icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Académico */}
          <div>
            <h3 className="mb-6 font-black text-xl text-white">Académico</h3>
            <ul className="space-y-4 text-base">
              {[
                { name: "Carreras de Grado", href: "/carreras" },
                { name: "Posgrados", href: "/posgrados" },
                { name: "Tecnicaturas", href: "/tecnicaturas" },
                { name: "Educación Continua", href: "/educacion-continua" },
                { name: "Investigación", href: "/investigacion" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 transition-all duration-300 hover:text-white hover:translate-x-2 cursor-none inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="mb-6 font-black text-xl text-white">Servicios</h3>
            <ul className="space-y-4 text-base">
              {[
                { name: "Admisiones", href: "/admisiones" },
                { name: "Becas y Financiamiento", href: "/becas" },
                { name: "Intercambios", href: "/intercambios" },
                { name: "Bolsa de Trabajo", href: "/empleabilidad" },
                { name: "Bienestar Estudiantil", href: "/bienestar" }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-slate-300 transition-all duration-300 hover:text-white hover:translate-x-2 cursor-none inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-6 font-black text-xl text-white">Contacto</h3>
            <ul className="space-y-6 text-base">
              <li className="flex gap-4 text-slate-300 group">
                <MapPin className="h-6 w-6 shrink-0 text-[#D20537] group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  Av. Universidad 1234, Santa Fe Capital
                </span>
              </li>
              <li className="flex gap-4 text-slate-300 group">
                <Phone className="h-6 w-6 shrink-0 text-[#D20537] group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  +54 342 1234-5678
                </span>
              </li>
              <li className="flex gap-4 text-slate-300 group">
                <Mail className="h-6 w-6 shrink-0 text-[#D20537] group-hover:scale-110 transition-transform duration-300" />
                <span className="group-hover:text-white transition-colors duration-300">
                  info@ies.edu.ar
                </span>
              </li>
            </ul>

           
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col items-center justify-between gap-6 text-slate-400 md:flex-row">
            <p className="text-center md:text-left">
              © 2025 Instituto de Educación Superior. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              {[
                { name: "Política de Privacidad", href: "/privacidad" },
                { name: "Términos y Condiciones", href: "/terminos" },
                { name: "Accesibilidad", href: "/accesibilidad" }
              ].map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="transition-colors hover:text-white cursor-none text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
