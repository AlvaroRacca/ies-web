import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { getCarreras } from "@/lib/data/carreras"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus, Clock, BookOpen, Users, Edit } from "lucide-react"
import Link from "next/link"
import { DeleteCarreraButton } from "@/components/admin/delete-carrera-button"

export default async function AdminCarrerasPage() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  const carreras = await getCarreras()

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">Gestión de Carreras</h1>
            <p className="text-muted-foreground">Administra los programas académicos del sitio web</p>
          </div>
          <Link href="/admin/carreras/nueva">
            <Button size="lg">
              <Plus className="mr-2 h-4 w-4" />
              Nueva Carrera
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {carreras.map((carrera) => (
            <Card key={carrera.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary">{carrera.facultad}</Badge>
                      {carrera.destacada && <Badge variant="default">Destacada</Badge>}
                    </div>
                    <CardTitle className="text-2xl mb-2">{carrera.nombre}</CardTitle>
                    <p className="text-muted-foreground mb-4">{carrera.descripcion}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        <span>Duración: {carrera.duracion}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <BookOpen className="h-4 w-4 mr-2 text-primary" />
                        <span>Modalidad: {carrera.modalidad}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        <span>Cupos: {carrera.cupos}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href={`/admin/carreras/${carrera.id}/editar`}>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </Link>
                    <DeleteCarreraButton id={carrera.id} nombre={carrera.nombre} />
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}

          {carreras.length === 0 && (
            <Card className="md:col-span-2">
              <CardContent className="py-12 text-center">
                <p className="text-muted-foreground mb-4">No hay carreras registradas</p>
                <Link href="/admin/carreras/nueva">
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Crear primera carrera
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
