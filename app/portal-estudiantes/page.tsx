import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, LogIn } from "lucide-react"

export default function PortalEstudiantesPage() {
  return (
    <div className="min-h-screen cursor-none">
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl relative z-10">
            <h1 className="font-sans text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Portal de{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Estudiantes
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Accedé rápidamente a las plataformas del instituto para cursado y gestiones académicas.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                  <GraduationCap className="h-6 w-6 text-[#D20537]" />
                </div>
                <CardTitle className="text-2xl">Aula Virtual</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Ingresá a tu aula para ver clases, materiales, entregas y evaluaciones.
                </p>
                <Button asChild className="w-full bg-[#D20537] hover:bg-[#B8002E] cursor-none rounded-2xl">
                  <a href="#" target="_blank" rel="noopener noreferrer">Ir al Aula Virtual</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-red-50">
                  <LogIn className="h-6 w-6 text-[#D20537]" />
                </div>
                <CardTitle className="text-2xl">Sistema de Gestión Instituto</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Consultá inscripciones, correlatividades, actas y situación académica.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent cursor-none hover:border-[#D20537] hover:text-[#D20537] rounded-2xl">
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
