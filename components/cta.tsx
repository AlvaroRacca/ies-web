import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">¿Listo para comenzar tu futuro?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Únete a miles de estudiantes que ya están construyendo su carrera profesional con nosotros.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/admisiones">
            <Button size="lg" variant="secondary" className="min-w-[200px]">
              Solicitar Admisión
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/carreras">
            <Button
              size="lg"
              variant="outline"
              className="min-w-[200px] bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Ver Carreras
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
