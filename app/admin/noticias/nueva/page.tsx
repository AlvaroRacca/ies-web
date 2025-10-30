import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { NoticiaForm } from "@/components/admin/noticia-form"

export default async function NuevaNoticiaPage() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Nueva Noticia</h1>
            <p className="text-muted-foreground">Completa el formulario para publicar una nueva noticia</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información de la Noticia</CardTitle>
            </CardHeader>
            <CardContent>
              <NoticiaForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
