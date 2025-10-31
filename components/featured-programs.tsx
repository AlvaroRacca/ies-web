import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Clock, Users, TrendingUp, Star } from "lucide-react"
import Link from "next/link"
import { getCarreras } from "@/lib/data/carreras"

export async function FeaturedPrograms() {
  const lista = await getCarreras()
  const destacados = (lista.filter((c) => c.destacada) || lista).slice(0, 3)
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Formación que transforma vidas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programas diseñados para el mundo actual, con docentes expertos y rápida inserción laboral
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {destacados.map((carrera, index) => (
            <Card key={carrera.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:rotate-1 transition-all duration-500 bg-white cursor-pointer">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={carrera.imagen || "/placeholder.svg"}
                  alt={carrera.nombre}
                  className="object-cover w-full h-full group-hover:scale-125 group-hover:rotate-2 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent group-hover:from-black/40 transition-all duration-500" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/90 text-primary hover:bg-white hover:scale-110 transition-all duration-300">
                    <Star className="w-3 h-3 mr-1" />
                    Destacada
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{carrera.nombre}</h3>
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
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 line-clamp-2">{carrera.descripcion}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary" className="text-xs hover:scale-110 transition-transform duration-300">{carrera.facultad}</Badge>
                  <div className="flex items-center gap-1 text-green-600 text-sm font-medium hover:scale-110 transition-all duration-300">
                    <TrendingUp className="w-4 h-4" />
                    <span>Alta demanda</span>
                  </div>
                </div>

                <Button asChild className="w-full group/btn hover:scale-105 transition-all duration-300 bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary">
                  <Link href={`/carreras/${carrera.id}`}>
                    Conocé más sobre esta carrera
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-2 group-hover/btn:scale-125 transition-transform duration-300" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="px-8 py-6 text-base font-semibold">
            <Link href="/carreras">
              Ver todas nuestras carreras
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
