import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { getCarreraById } from "@/lib/data/carreras"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CarreraForm } from "@/components/admin/carrera-form"

export default async function EditarCarreraPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  const { id } = await params
  const carrera = await getCarreraById(Number.parseInt(id))

  if (!carrera) {
    redirect("/admin/carreras")
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Editar Carrera</h1>
            <p className="text-muted-foreground">Actualiza la información de la carrera</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Información de la Carrera</CardTitle>
            </CardHeader>
            <CardContent>
              <CarreraForm carrera={carrera} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
