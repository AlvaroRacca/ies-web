import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { getCarreras } from "@/lib/data/carreras"

export async function FeaturedPrograms() {
  const lista = await getCarreras()
  const destacados = (lista.filter((c) => c.destacada) || lista).slice(0, 4)
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Programas Académicos Destacados
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Descubre las carreras más demandadas y construye tu futuro profesional
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {destacados.map((carrera) => (
            <Card key={carrera.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={carrera.imagen || "/placeholder.svg"}
                  alt={carrera.nombre}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl line-clamp-2">{carrera.nombre}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm text-muted-foreground line-clamp-3">{carrera.descripcion}</p>
                <Link href={`/carreras/${carrera.id}`}>
                  <Button variant="link" className="h-auto p-0 text-accent">
                    Ver más información
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/carreras">
            <Button size="lg" variant="outline">Ver Todas las Carreras</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
