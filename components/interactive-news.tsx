"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Eye, Share2, Bookmark } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function InteractiveNews({ noticias }: { noticias: any[] }) {
  const [hoveredNews, setHoveredNews] = useState<number | null>(null)
  const [bookmarkedNews, setBookmarkedNews] = useState<Set<number>>(new Set())
  const [viewCounts, setViewCounts] = useState<{[key: number]: number}>({})
  
  const recientes = noticias.slice(0, 3)

  useEffect(() => {
    // Simular contadores de vistas
    const initialCounts: {[key: number]: number} = {}
    recientes.forEach(noticia => {
      initialCounts[noticia.id] = Math.floor(Math.random() * 500) + 100
    })
    setViewCounts(initialCounts)
  }, [])

  const toggleBookmark = (id: number) => {
    setBookmarkedNews(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  const handleNewsView = (id: number) => {
    setViewCounts(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 1
    }))
  }

  return (
    <section className="bg-muted/30 py-16 md:py-24 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-20 right-20 w-24 h-24 bg-blue-100/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-100/30 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl mb-2">
              Últimas{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Noticias
              </span>
            </h2>
            <p className="mt-2 text-muted-foreground">Mantente informado sobre los acontecimientos más relevantes</p>
          </div>
          <Link href="/noticias" className="hidden md:flex">
            <Button variant="link" className="gap-2 group">
              Ver todas las noticias
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recientes.map((item, index) => (
            <Card 
              key={item.id} 
              className={`overflow-hidden transition-all duration-500 cursor-pointer group ${
                hoveredNews === item.id 
                  ? 'shadow-2xl -translate-y-4 scale-105' 
                  : hoveredNews !== null 
                    ? 'scale-95 opacity-70' 
                    : 'hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredNews(item.id)}
              onMouseLeave={() => setHoveredNews(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.imagen || "/placeholder.svg"}
                  alt={item.titulo}
                  className={`h-full w-full object-cover transition-transform duration-700 ${
                    hoveredNews === item.id ? 'scale-125' : 'scale-100'
                  }`}
                />
                
                {/* Overlay con gradiente */}
                <div className={`absolute inset-0 bg-gradient-to-t transition-all duration-500 ${
                  hoveredNews === item.id 
                    ? 'from-black/70 to-transparent' 
                    : 'from-black/40 to-transparent'
                }`} />

                {/* Botones de acción */}
                <div className="absolute top-3 right-3 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      toggleBookmark(item.id)
                    }}
                    className={`p-2 rounded-full backdrop-blur transition-all duration-300 hover:scale-110 ${
                      bookmarkedNews.has(item.id) 
                        ? 'bg-yellow-500/90 text-white' 
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 ${
                      bookmarkedNews.has(item.id) ? 'fill-current' : ''
                    }`} />
                  </button>
                  <button className="p-2 rounded-full bg-white/20 backdrop-blur text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Contador de vistas */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 backdrop-blur rounded-full px-2 py-1 text-white text-xs">
                  <Eye className="w-3 h-3" />
                  <span>{viewCounts[item.id] || 0}</span>
                </div>

                {/* Efecto de brillo */}
                {hoveredNews === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs">
                  <span className={`rounded-full bg-accent/10 px-3 py-1 font-medium text-accent transition-all duration-300 ${
                    hoveredNews === item.id ? 'scale-110 bg-accent/20' : ''
                  }`}>
                    {item.categoria}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.fecha).toLocaleDateString("es-ES", { 
                      day: "2-digit", 
                      month: "short", 
                      year: "numeric" 
                    })}
                  </span>
                </div>
                
                <h3 className={`mb-2 font-serif text-xl font-bold leading-tight text-foreground text-balance transition-all duration-300 ${
                  hoveredNews === item.id ? 'text-primary' : ''
                }`}>
                  {item.titulo}
                </h3>
                
                <p className="mb-4 text-sm text-muted-foreground text-pretty line-clamp-3">
                  {item.resumen}
                </p>
                
                <Link 
                  href={`/noticias/${item.id}`}
                  onClick={() => handleNewsView(item.id)}
                  className="group/link"
                >
                  <Button 
                    variant="link" 
                    className={`h-auto p-0 text-accent transition-all duration-300 ${
                      hoveredNews === item.id ? 'scale-105' : ''
                    }`}
                  >
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Estadísticas interactivas */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 bg-white/50 backdrop-blur rounded-2xl px-6 py-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">{bookmarkedNews.size}</div>
              <div className="text-sm text-muted-foreground">Guardadas</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">
                {Object.values(viewCounts).reduce((a, b) => a + b, 0)}
              </div>
              <div className="text-sm text-muted-foreground">Vistas totales</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/noticias">
            <Button variant="outline" className="group">
              Ver todas las noticias
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
