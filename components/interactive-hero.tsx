"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, TrendingUp, Play } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function InteractiveHero() {
  const foundationYear = 1982
  const years = new Date().getFullYear() - foundationYear
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [currentWord, setCurrentWord] = useState(0)
  
  const words = ["futuro", "carrera", "sueño", "éxito"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section 
      className="relative overflow-hidden py-20 md:py-32 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background moderno con capas */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255, 255, 255, 0.1)_0%,transparent_50%)]" />
      {/* <div className="absolute inset-0 bg-[url('/modern-university-aerial.png')] bg-cover bg-center opacity-10 mix-blend-overlay" /> */}
      <div className="absolute inset-0 bg-[url('/Instituto.png')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      
      {/* Cursor personalizado minimalista */}
      {isHovered && (
        <div 
          className="absolute w-6 h-6 bg-white/40 rounded-full pointer-events-none z-50 backdrop-blur-sm shadow-lg"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transition: 'none'
          }}
        />
      )}
      
      {/* Partículas flotantes interactivas */}
      {Array.from({ length: 90 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
          style={{
            left: `${10 + (i * 8)}%`,
            top: `${20 + (i % 3) * 20}%`,
            animationDelay: `${i * 0.5}s`,
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        />
      ))}

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">

          {/* Título moderno con gradientes */}
          <h1 className="font-sans text-5xl md:text-8xl font-black leading-[1.06] text-balance mb-8">
            <span className="block mb-4">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Tu{" "}
              </span>
              <span className="inline-block relative">
                <span 
                  key={currentWord}
                  className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent animate-fade-in-up font-black"
                >
                  {words[currentWord]}
                </span>
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl rounded-lg opacity-50"></div>
              </span>
            </span>
            <span className="block bg-gradient-to-r from-white/95 via-blue-50 to-white/95 bg-clip-text text-transparent ">
              empieza <span className="text-blue-300 font-black">ahora</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto text-pretty mb-12 leading-relaxed">
            Formación de vanguardia con docentes líderes de la industria
          </p>

          {/* Botones modernos */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" style={{animationDelay: '0.4s'}}>
            <Button 
              asChild 
              size="lg" 
              className="bg-[#D20537] hover:bg-[#B8002E] text-white font-bold text-lg px-10 py-6 h-auto shadow-2xl hover:shadow-red-500/25 transition-all duration-300 group relative overflow-hidden rounded-2xl border-0 cursor-none"
            >
              <Link href="/carreras" className="cursor-none">
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <Play className="mr-3 h-6 w-6 group-hover:scale-110 transition-transform" />
                Explorar Carreras
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-2 border-white/20 bg-white/5 text-white hover:bg-white/10 hover:border-white/40 backdrop-blur-xl font-semibold text-lg px-10 py-6 h-auto transition-all duration-300 hover:scale-105 rounded-2xl cursor-none shadow-xl"
            >
              <Link href="/contacto" className="cursor-none">Solicitar Información</Link>
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}

