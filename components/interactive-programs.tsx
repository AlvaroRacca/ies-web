"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, TrendingUp, Star, Zap, Heart } from "lucide-react"
import Link from "next/link"
import { getCarreras } from "@/lib/data/carreras"
import { useState, useEffect } from "react"

export function InteractivePrograms({ carreras }: { carreras: any[] }) {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set())
  
  const destacados = carreras.filter((c) => c.destacada).slice(0, 3)

  const toggleLike = (id: number) => {
    setLikedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden cursor-none">
      
      <div className="container mx-auto px-4 relative">
        <div className="mb-16 text-center">
          <h2 className="font-sans text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Carreras que{" "}
            <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
              transforman
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Programas diseñados para el futuro digital
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {destacados.map((carrera, index) => (
            <Card 
              key={carrera.id} 
              className={`group overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 bg-white cursor-none rounded-3xl ${
                hoveredCard === carrera.id 
                  ? 'shadow-2xl -translate-y-4 scale-105' 
                  : hoveredCard !== null 
                    ? 'scale-95 opacity-70' 
                    : 'hover:shadow-xl hover:-translate-y-2'
              }`}
              onMouseEnter={() => setHoveredCard(carrera.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={carrera.imagen || "/placeholder.svg"}
                  alt={carrera.nombre}
                  className={`object-cover w-full h-full group-hover:scale-110 transition-transform duration-700 ${
                    hoveredCard === carrera.id ? 'scale-125 rotate-2' : 'scale-100'
                  }`}
                />
                
                {/* Overlay con gradiente animado */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                  hoveredCard === carrera.id 
                    ? 'from-primary/80 via-transparent to-transparent' 
                    : 'from-black/60 via-transparent to-transparent'
                }`} />
                
                {/* Badge destacada con efecto especial */}
                <div className="absolute top-4 left-4">
                  <Badge className={`bg-white/90 text-primary hover:bg-white transition-all duration-300 ${
                    hoveredCard === carrera.id ? 'scale-110 rotate-3' : ''
                  }`}>
                    <Star className={`w-3 h-3 mr-1 transition-transform duration-300 ${
                      hoveredCard === carrera.id ? 'rotate-180' : ''
                    }`} />
                    Destacada
                  </Badge>
                </div>

                {/* Botón de like */}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    toggleLike(carrera.id)
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-white/20 backdrop-blur transition-all duration-300 hover:bg-white/30 hover:scale-110"
                >
                  <Heart 
                    className={`w-4 h-4 transition-all duration-300 ${
                      likedCards.has(carrera.id) 
                        ? 'text-red-500 fill-red-500 scale-125' 
                        : 'text-white hover:text-red-300'
                    }`} 
                  />
                </button>
                
                {/* Información sobre la imagen */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className={`text-xl font-bold text-white mb-2 line-clamp-2 transition-all duration-300 ${
                    hoveredCard === carrera.id ? 'text-2xl' : ''
                  }`}>
                    {carrera.nombre}
                  </h3>
                  <div className="flex items-center gap-4 text-white/90 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{carrera.duracion}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{carrera.cupos} cupos</span>
                    </div>
                  </div>
                </div>

                {/* Efecto de brillo al hover */}
                {hoveredCard === carrera.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                )}
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2 transition-all duration-300">
                  {carrera.descripcion}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs transition-all duration-300 ${
                      hoveredCard === carrera.id ? 'scale-110 bg-primary/10 text-primary' : ''
                    }`}
                  >
                    {carrera.facultad}
                  </Badge>
                  <div className={`flex items-center gap-1 text-green-600 text-sm font-medium transition-all duration-300 ${
                    hoveredCard === carrera.id ? 'scale-110' : ''
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    <span>Alta demanda</span>
                  </div>
                </div>

                <Button 
                  asChild 
                  className="w-full group/btn transition-all duration-300 cursor-none rounded-2xl bg-[#D20537] hover:bg-[#B8002E]"
                >
                  <Link href={`/carreras/${carrera.id}`} className="cursor-none flex items-center justify-center">
                    <Zap className="mr-2 h-4 w-4" />
                    Conocé más sobre esta carrera
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            variant="outline" 
            className="px-8 py-6 text-base font-semibold transition-all duration-300 group cursor-none rounded-2xl border-2 border-slate-300 hover:border-[#D20537] hover:bg-red-50 hover:text-[#D20537]"
          >
            <Link href="/carreras" className="cursor-none">
              Ver todas nuestras carreras
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
