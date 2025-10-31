import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"
import { getNoticias } from "@/lib/data/noticias"

export async function LatestNews() {
  const noticias = await getNoticias()
  const recientes = noticias.slice(0, 3)
  return (
    <section className="bg-gradient-to-b from-white to-slate-50 py-20 cursor-none">
      <div className="container mx-auto px-4">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <h2 className="font-sans text-4xl md:text-6xl font-black text-slate-900 mb-4">
              Últimas{" "}
              <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
                Noticias
              </span>
            </h2>
            <p className="text-xl text-slate-600">Mantente informado sobre los acontecimientos más relevantes</p>
          </div>
          <Link href="/noticias" className="hidden md:flex cursor-none">
            <Button variant="link" className="gap-2 group cursor-none text-[#D20537] hover:text-[#B8002E] font-semibold">
              Ver todas las noticias
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {recientes.map((item, index) => (
            <Card key={item.id} className="overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white cursor-none rounded-3xl">
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.imagen || "/placeholder.svg"}
                  alt={item.titulo}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <CardContent className="p-8">
                <div className="mb-4 flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-red-50 px-4 py-2 font-semibold text-[#D20537] border border-red-100">
                    {item.categoria}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Calendar className="h-3 w-3" />
                    {new Date(item.fecha).toLocaleDateString("es-ES", { 
                      day: "2-digit", 
                      month: "short", 
                      year: "numeric" 
                    })}
                  </span>
                </div>
                <h3 className="mb-4 font-sans text-xl font-black leading-tight text-slate-900 text-balance">
                  {item.titulo}
                </h3>
                <p className="mb-6 text-sm text-slate-600 text-pretty line-clamp-3 leading-relaxed">
                  {item.resumen}
                </p>
                <Link href={`/noticias/${item.id}`} className="cursor-none">
                  <Button variant="link" className="h-auto p-0 text-[#D20537] hover:text-[#B8002E] font-semibold cursor-none group">
                    Leer más
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/noticias" className="cursor-none">
            <Button variant="outline" className="group cursor-none rounded-2xl border-2 border-slate-300 hover:border-[#D20537] hover:bg-red-50 hover:text-[#D20537] px-8 py-3">
              Ver todas las noticias
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
