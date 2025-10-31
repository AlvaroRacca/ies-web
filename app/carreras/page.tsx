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
    <div className="min-h-screen cursor-none">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl relative z-10">
            <h1 className="font-sans text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Carreras que{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                transforman
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Descubrí nuestra amplia oferta académica y encontrá la carrera que transformará tu futuro profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar carreras..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {facultades.slice(0, 4).map((fac) => (
                <Button 
                  key={fac} 
                  variant={fac === "Todas" ? "default" : "outline"} 
                  size="sm"
                  className={fac === "Todas" ? "bg-[#D20537] hover:bg-[#B8002E] cursor-none" : "cursor-none hover:border-[#D20537] hover:text-[#D20537]"}
                >
                  {fac}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="font-sans text-4xl md:text-5xl font-black text-slate-900 mb-12">
            Carreras{" "}
            <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
              Destacadas
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {carreras
              .filter((c) => c.destacada)
              .map((carrera) => (
                <Card key={carrera.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white cursor-none rounded-3xl">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={carrera.imagen || "/placeholder.svg"}
                      alt={carrera.nombre}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-3 bg-red-50 text-[#D20537] border border-red-100">
                      {carrera.facultad}
                    </Badge>
                    <CardTitle className="text-2xl hover:text-[#D20537] transition-colors font-black">
                      <Link href={`/carreras/${carrera.id}`}>{carrera.nombre}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{carrera.descripcion}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-[#D20537]" />
                        <span>Duración: {carrera.duracion}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-[#D20537]" />
                        <span>Modalidad: {carrera.modalidad}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-[#D20537]" />
                        <span>Cupos: {carrera.cupos}</span>
                      </div>
                    </div>
                    <Link href={`/carreras/${carrera.id}`}>
                      <Button className="w-full bg-[#D20537] hover:bg-[#B8002E] cursor-none rounded-2xl">
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="font-sans text-4xl md:text-5xl font-black text-slate-900 mb-12">Todas las Carreras</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {carreras
              .filter((c) => !c.destacada)
              .map((carrera) => (
                <Card key={carrera.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white cursor-none rounded-3xl">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={carrera.imagen || "/placeholder.svg"}
                      alt={carrera.nombre}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-3 bg-red-50 text-[#D20537] border border-red-100">
                      {carrera.facultad}
                    </Badge>
                    <CardTitle className="text-xl hover:text-[#D20537] transition-colors font-bold">
                      <Link href={`/carreras/${carrera.id}`}>{carrera.nombre}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{carrera.descripcion}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-[#D20537]" />
                        <span>{carrera.duracion}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-[#D20537]" />
                        <span>{carrera.modalidad}</span>
                      </div>
                    </div>
                    <Link href={`/carreras/${carrera.id}`}>
                      <Button variant="outline" className="w-full bg-transparent cursor-none hover:border-[#D20537] hover:text-[#D20537] rounded-2xl">
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
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#D20537] to-[#B8002E] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <GraduationCap className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 md:mb-6" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 px-4">
            ¿Listo para comenzar tu futuro?
          </h2>
          <p className="text-base md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Solicita más información sobre nuestras carreras y da el primer paso hacia tu éxito profesional.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center max-w-lg mx-auto px-4">
            <Link href="/admisiones" className="w-full sm:w-auto">
              <Button 
                size="lg" 
                variant="secondary" 
                className="w-full cursor-none rounded-2xl px-6 md:px-8 py-4 md:py-6 font-bold text-sm md:text-base"
              >
                Proceso de Admisión
              </Button>
            </Link>
            <Link href="/contacto" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#D20537] cursor-none rounded-2xl px-6 md:px-8 py-4 md:py-6 font-bold text-sm md:text-base"
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
