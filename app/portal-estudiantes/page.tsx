import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, LogIn } from "lucide-react"

export default function PortalEstudiantesPage() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Portal de Estudiantes</h1>
          <p className="text-white/90 text-lg md:text-xl">
            Accedé rápidamente a las plataformas del instituto para cursado y gestiones académicas.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Aula Virtual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Ingresá a tu aula para ver clases, materiales, entregas y evaluaciones.
                </p>
                <Button asChild className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">Ir al Aula Virtual</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <LogIn className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Sistema de Gestión IES</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Consultá inscripciones, correlatividades, actas y situación académica.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <a href="#" target="_blank" rel="noopener noreferrer">Ir al Sistema de Gestión</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
