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
    <div className="min-h-screen cursor-none">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl relative z-10">
            <h1 className="font-sans text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Noticias y{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Actualidad
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Mantente informado sobre los últimos acontecimientos, logros y eventos de nuestra comunidad.
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
              <Input placeholder="Buscar noticias..." className="pl-10" />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categorias.map((cat) => (
                <Button 
                  key={cat} 
                  variant={cat === "Todas" ? "default" : "outline"} 
                  size="sm"
                  className={cat === "Todas" ? "bg-[#D20537] hover:bg-[#B8002E] cursor-none" : "cursor-none hover:border-[#D20537] hover:text-[#D20537]"}
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="font-sans text-4xl md:text-5xl font-black text-slate-900 mb-12">
            Noticias{" "}
            <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
              Destacadas
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {noticias
              .filter((n) => n.destacada)
              .map((noticia) => (
                <Card key={noticia.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white cursor-none rounded-3xl">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={noticia.imagen || "/placeholder.svg"}
                      alt={noticia.titulo}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-red-50 text-[#D20537] border border-red-100">{noticia.categoria}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-2xl hover:text-[#D20537] transition-colors font-black">
                      <Link href={`/noticias/${noticia.id}`}>{noticia.titulo}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{noticia.resumen}</p>
                    <Link href={`/noticias/${noticia.id}`}>
                      <Button variant="link" className="p-0 text-[#D20537] hover:text-[#B8002E] cursor-none">
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
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="font-sans text-4xl md:text-5xl font-black text-slate-900 mb-12">Todas las Noticias</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {noticias
              .filter((n) => !n.destacada)
              .map((noticia) => (
                <Card key={noticia.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white cursor-none rounded-3xl">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={noticia.imagen || "/placeholder.svg"}
                      alt={noticia.titulo}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-red-50 text-[#D20537] border border-red-100">{noticia.categoria}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                          day: "numeric",
                          month: "short",
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-lg hover:text-[#D20537] transition-colors line-clamp-2 font-bold">
                      <Link href={`/noticias/${noticia.id}`}>{noticia.titulo}</Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{noticia.resumen}</p>
                    <Link href={`/noticias/${noticia.id}`}>
                      <Button variant="link" className="p-0 text-[#D20537] hover:text-[#B8002E] cursor-none">
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
