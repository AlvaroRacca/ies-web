"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Quote, Star, Heart, MessageCircle } from "lucide-react"
import { useState, useEffect } from "react"

const testimonials = [
  {
    name: "Marisol Dibssié",
    role: "Egresada de Desarrollo de Software",
    company: "Freelance Developer",
    image: "/professional-woman-portrait.png",
    content: "Por mi disponibilidad horaria necesitaba estudiar a distancia. La modalidad me permitió lograr, con mucho entusiasmo y estudio, pero a mi tiempo, este anhelado título.",
    rating: 5,
    year: "2023"
  },
  {
    name: "Carlos Mendez",
    role: "Egresado de Diseño Digital",
    company: "Agencia Creativa",
    image: "/designer-woman-portrait.jpg",
    content: "Los proyectos reales que desarrollamos durante la carrera fueron clave para armar mi portafolio. Conseguí trabajo antes de recibirme.",
    rating: 5,
    year: "2022"
  },
  {
    name: "Ana Rodriguez",
    role: "Egresada de Periodismo",
    company: "Canal de TV Local",
    image: "/medical-student-portrait.png",
    content: "La formación práctica desde el primer día me dio la confianza para trabajar en medios. Los docentes son profesionales activos que te enseñan la realidad del mercado.",
    rating: 5,
    year: "2023"
  },
]

export function InteractiveTestimonials() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const [likedCards, setLikedCards] = useState<Set<number>>(new Set())
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set())

  useEffect(() => {
    testimonials.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => new Set([...prev, index]))
      }, index * 200)
    })
  }, [])

  const toggleLike = (index: number) => {
    setLikedCards(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-100/50 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl animate-float" style={{animationDelay: '1s'}}></div>
      
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Nuestros egresados lo{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              confirman
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Más de 1000 profesionales formados que hoy trabajan en lo que aman
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-lg bg-white cursor-pointer transition-all duration-700 ${
                visibleCards.has(index) ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
              } ${
                activeCard === index 
                  ? 'shadow-2xl -translate-y-4 scale-105 z-10' 
                  : activeCard !== null 
                    ? 'scale-95 opacity-80' 
                    : 'hover:shadow-xl hover:-translate-y-2'
              }`}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <CardContent className="p-8 relative">
                {/* Botón de like */}
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    toggleLike(index)
                  }}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-red-50 transition-all duration-300 hover:scale-110 z-10"
                >
                  <Heart 
                    className={`w-4 h-4 transition-all duration-300 ${
                      likedCards.has(index) 
                        ? 'text-red-500 fill-red-500 animate-heartbeat' 
                        : 'text-gray-400 hover:text-red-400'
                    }`} 
                  />
                </button>

                {/* Rating con animación */}
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 fill-current transition-all duration-300 ${
                          activeCard === index ? 'animate-pulse' : ''
                        }`}
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    ))}
                  </div>
                  <Badge 
                    variant="outline" 
                    className={`ml-auto text-xs transition-all duration-300 ${
                      activeCard === index ? 'scale-110 bg-primary/10 text-primary' : ''
                    }`}
                  >
                    Egresado {testimonial.year}
                  </Badge>
                </div>
                
                {/* Quote con efecto */}
                <Quote className={`mb-4 h-8 w-8 text-primary/60 transition-all duration-300 ${
                  activeCard === index ? 'rotate-12 scale-110' : ''
                }`} />
                
                <blockquote className="mb-6 text-muted-foreground text-lg leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>
                
                {/* Avatar y info con animaciones */}
                <div className="flex items-center gap-4">
                  <Avatar className={`w-14 h-14 ring-2 ring-primary/10 transition-all duration-300 ${
                    activeCard === index ? 'ring-4 ring-primary/30 scale-110' : ''
                  }`}>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`transition-all duration-300 ${
                    activeCard === index ? 'translate-x-2' : ''
                  }`}>
                    <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary font-medium flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Efecto de brillo al hover */}
                {activeCard === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer pointer-events-none"></div>
                )}

                {/* Partículas de éxito */}
                {likedCards.has(index) && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-400 rounded-full animate-float pointer-events-none"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + (i % 2) * 20}%`,
                          animationDelay: `${i * 0.2}s`
                        }}
                      />
                    ))}
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA interactivo */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
            <h3 className="text-2xl font-bold mb-4">¿Querés ser el próximo testimonio de éxito?</h3>
            <p className="text-muted-foreground mb-6">Sumate a nuestra comunidad de más de 1000 egresados</p>
            <div className="flex justify-center gap-4">
              <div className="flex items-center gap-2 text-green-600 font-medium">
                <Heart className="w-5 h-5 animate-heartbeat" />
                <span>{likedCards.size} testimonios que te gustaron</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
