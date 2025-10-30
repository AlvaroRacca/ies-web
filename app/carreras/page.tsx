import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Clock, BookOpen, Search, ArrowRight, Users } from "lucide-react"
import Link from "next/link"
import { getCarreras, type Carrera } from "@/lib/data/carreras"

// Cargar desde la "BD" local
async function loadData(): Promise<Carrera[]> {
  const lista = await getCarreras()
  return lista
}

const facultades = [
  "Todas",
  "Ingeniería",
  "Ciencias de la Salud",
  "Ciencias Económicas",
  "Arquitectura y Diseño",
  "Ciencias Jurídicas",
  "Ciencias Sociales",
  "Comunicación",
]

export default async function CarrerasPage() {
  const carreras = await loadData()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Carreras y Programas</h1>
            <p className="text-xl text-white/90">
              Descubre nuestra amplia oferta académica y encuentra la carrera que transformará tu futuro profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar carreras..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {facultades.slice(0, 4).map((fac) => (
                <Button key={fac} variant={fac === "Todas" ? "default" : "outline"} size="sm">
                  {fac}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Carreras Destacadas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {carreras
              .filter((c) => c.destacada)
              .map((carrera) => (
                <Card key={carrera.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={carrera.imagen || "/placeholder.svg"}
                      alt={carrera.nombre}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-3">
                      {carrera.facultad}
                    </Badge>
                    <CardTitle className="text-2xl hover:text-primary transition-colors">
                      <Link href={`/carreras/${carrera.id}`}>{carrera.nombre}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{carrera.descripcion}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>Duración: {carrera.duracion}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-primary" />
                        <span>Modalidad: {carrera.modalidad}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>Cupos: {carrera.cupos}</span>
                      </div>
                    </div>
                    <Link href={`/carreras/${carrera.id}`}>
                      <Button className="w-full">
                        Ver más información <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All Programs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Todas las Carreras</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {carreras
              .filter((c) => !c.destacada)
              .map((carrera) => (
                <Card key={carrera.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={carrera.imagen || "/placeholder.svg"}
                      alt={carrera.nombre}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-3">
                      {carrera.facultad}
                    </Badge>
                    <CardTitle className="text-xl hover:text-primary transition-colors">
                      <Link href={`/carreras/${carrera.id}`}>{carrera.nombre}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{carrera.descripcion}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>{carrera.duracion}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-primary" />
                        <span>{carrera.modalidad}</span>
                      </div>
                    </div>
                    <Link href={`/carreras/${carrera.id}`}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Ver detalles
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">¿Listo para comenzar tu futuro?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Solicita más información sobre nuestras carreras y da el primer paso hacia tu éxito profesional.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/admisiones">
              <Button size="lg" variant="secondary">
                Proceso de Admisión
              </Button>
            </Link>
            <Link href="/contacto">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                Contactar Asesor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
