import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('/modern-university-aerial.png')] bg-cover bg-center opacity-10" />
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl text-balance">
            Transforma tu futuro con educación de excelencia
          </h1>
          <p className="mt-6 text-lg text-primary-foreground/90 md:text-xl text-pretty">
            Descubre programas académicos innovadores, investigación de vanguardia y una comunidad que impulsa tu
            desarrollo profesional y personal
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              Explorar Carreras
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
            >
              Solicitar Información
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
