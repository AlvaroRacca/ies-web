import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getNoticias } from "@/lib/data/noticias"

export async function LatestNews() {
  const noticias = await getNoticias()
  const recientes = noticias.slice(0, 3)
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Últimas Noticias</h2>
            <p className="mt-2 text-muted-foreground">Mantente informado sobre los acontecimientos más relevantes</p>
          </div>
          <Link href="/noticias" className="hidden md:flex">
            <Button variant="link" className="gap-2">
              Ver todas las noticias
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {recientes.map((item) => (
            <Card key={item.id} className="overflow-hidden transition-shadow hover:shadow-lg">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.imagen || "/placeholder.svg"}
                  alt={item.titulo}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-3 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">{item.categoria}</span>
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.fecha).toLocaleDateString("es-ES", { day: "2-digit", month: "short", year: "numeric" })}
                  </span>
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold leading-tight text-foreground text-balance">
                  {item.titulo}
                </h3>
                <p className="mb-4 text-sm text-muted-foreground text-pretty line-clamp-3">{item.resumen}</p>
                <Link href={`/noticias/${item.id}`}>
                  <Button variant="link" className="h-auto p-0 text-accent">
                    Leer más
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/noticias">
            <Button variant="outline">Ver todas las noticias</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
