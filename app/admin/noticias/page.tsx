import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { getNoticias } from "@/lib/data/noticias"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Calendar, Edit } from "lucide-react"
import Link from "next/link"
import { DeleteNoticiaButton } from "@/components/admin/delete-noticia-button"

export default async function AdminNoticiasPage() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  const noticias = await getNoticias()

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Gestión de Noticias</h1>
            <p className="text-muted-foreground">Administra las noticias del sitio web</p>
          </div>
          <Link href="/admin/noticias/nueva">
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Nueva Noticia
            </Button>
          </Link>
        </div>

        <div className="grid gap-6">
          {noticias.map((noticia) => (
            <Card key={noticia.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{noticia.categoria}</Badge>
                      {noticia.destacada && <Badge variant="default">Destacada</Badge>}
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(noticia.fecha).toLocaleDateString("es-ES", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </div>
                    </div>
                    <CardTitle className="text-2xl mb-2">{noticia.titulo}</CardTitle>
                    <p className="text-muted-foreground">{noticia.resumen}</p>
                    <p className="text-sm text-muted-foreground mt-2">Por: {noticia.autor}</p>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/noticias/${noticia.id}/editar`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteNoticiaButton id={noticia.id} titulo={noticia.titulo} />
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}

          {noticias.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground mb-4">No hay noticias publicadas</p>
                <Link href="/admin/noticias/nueva">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Crear primera noticia
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
