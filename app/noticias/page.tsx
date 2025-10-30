import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Calendar, Search, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getNoticias } from "@/lib/data/noticias"

const categorias = ["Todas", "Investigación", "Actividades", "Convenios", "Eventos", "Internacional", "Campus"]

export default async function NoticiasPage() {
  const noticias = await getNoticias()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Noticias y Actualidad</h1>
            <p className="text-xl text-white/90">
              Mantente informado sobre los últimos acontecimientos, logros y eventos de nuestra comunidad universitaria.
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
              <Input placeholder="Buscar noticias..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categorias.map((cat) => (
                <Button key={cat} variant={cat === "Todas" ? "default" : "outline"} size="sm">
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Noticias Destacadas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {noticias
              .filter((n) => n.destacada)
              .map((noticia) => (
                <Card key={noticia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={noticia.imagen || "/placeholder.svg"}
                      alt={noticia.titulo}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{noticia.categoria}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-primary transition-colors">
                      <Link href={`/noticias/${noticia.id}`}>{noticia.titulo}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{noticia.resumen}</p>
                    <Link href={`/noticias/${noticia.id}`}>
                      <Button variant="link" className="p-0">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* All News */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Todas las Noticias</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {noticias
              .filter((n) => !n.destacada)
              .map((noticia) => (
                <Card key={noticia.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={noticia.imagen || "/placeholder.svg"}
                      alt={noticia.titulo}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{noticia.categoria}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-lg hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/noticias/${noticia.id}`}>{noticia.titulo}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{noticia.resumen}</p>
                    <Link href={`/noticias/${noticia.id}`}>
                      <Button variant="link" className="p-0">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
