import { redirect } from "next/navigation"
import { getSession } from "@/lib/auth"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, GraduationCap, Users, TrendingUp } from "lucide-react"

export default async function AdminPage() {
  const session = await getSession()

  if (!session) {
    redirect("/admin/login")
  }

  const stats = [
    {
      title: "Total Noticias",
      value: "24",
      icon: FileText,
      change: "+3 este mes",
    },
    {
      title: "Carreras Activas",
      value: "9",
      icon: GraduationCap,
      change: "Sin cambios",
    },
    {
      title: "Consultas Pendientes",
      value: "12",
      icon: Users,
      change: "+5 esta semana",
    },
    {
      title: "Visitas del Sitio",
      value: "15,234",
      icon: TrendingUp,
      change: "+12% vs mes anterior",
    },
  ]

  return (
    <div className="min-h-screen bg-muted/30">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Panel de Administración</h1>
          <p className="text-muted-foreground">Bienvenido, {session.user.name}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title}>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <p className="text-xs text-muted-foreground">{stat.change}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="font-medium">Nueva noticia publicada</p>
                    <p className="text-sm text-muted-foreground">Hace 2 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="font-medium">Carrera actualizada: Ingeniería en Sistemas</p>
                    <p className="text-sm text-muted-foreground">Hace 5 horas</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 pb-3 border-b">
                  <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                  <div className="flex-1">
                    <p className="font-medium">Nueva consulta de admisión</p>
                    <p className="text-sm text-muted-foreground">Hace 1 día</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accesos Rápidos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a href="/admin/noticias" className="block p-3 rounded-lg hover:bg-muted transition-colors border">
                  <div className="flex items-center gap-3">
                    <FileText className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Gestionar Noticias</p>
                      <p className="text-sm text-muted-foreground">Crear, editar y eliminar noticias</p>
                    </div>
                  </div>
                </a>
                <a href="/admin/carreras" className="block p-3 rounded-lg hover:bg-muted transition-colors border">
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Gestionar Carreras</p>
                      <p className="text-sm text-muted-foreground">Administrar programas académicos</p>
                    </div>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
