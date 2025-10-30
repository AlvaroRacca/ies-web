import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function CallToAction() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="overflow-hidden rounded-2xl bg-primary">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl text-balance">
                Comienza tu camino hacia el éxito
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/90 text-pretty">
                Únete a miles de estudiantes que están transformando su futuro. El proceso de admisión es simple y te
                acompañamos en cada paso.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button size="lg" variant="secondary" className="gap-2">
                  Iniciar Postulación
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                >
                  <Download className="h-5 w-5" />
                  Descargar Prospecto
                </Button>
              </div>
            </div>
            <div className="relative hidden md:block">
              <img
                src="/happy-university-students-group.jpg"
                alt="Estudiantes universitarios"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
