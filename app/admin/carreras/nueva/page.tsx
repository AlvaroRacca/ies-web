import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CarreraForm } from "@/components/admin/carrera-form"

export default async function NuevaCarreraPage() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Nueva Carrera</h1>
            <p className="text-muted-foreground">Completa el formulario para agregar una nueva carrera</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información de la Carrera</CardTitle>
            </CardHeader>
            <CardContent>
              <CarreraForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
