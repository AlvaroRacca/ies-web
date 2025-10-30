import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { getNoticiaById } from "@/lib/data/noticias"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NoticiaForm } from "@/components/admin/noticia-form"

export default async function EditarNoticiaPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  const { id } = await params
  const noticia = await getNoticiaById(Number.parseInt(id))

  if (!noticia) {
    redirect("/admin/noticias")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Editar Noticia</h1>
            <p className="text-muted-foreground">Actualiza la información de la noticia</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información de la Noticia</CardTitle>
            </CardHeader>
            <CardContent>
              <NoticiaForm noticia={noticia} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
