import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Users, TrendingUp } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const foundationYear = 1982
  const years = new Date().getFullYear() - foundationYear
  return (
    <section className="relative overflow-hidden py-16 md:py-28">
      {/* Background dinámico */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-accent" />
      <div className="absolute inset-0 bg-[url('/modern-university-aerial.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,0,0,0.1),transparent_50%)]" />
      {/* Elementos flotantes animados */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '0s'}} />
      <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
      <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{animationDelay: '2s'}} />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge superior animado */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-pointer">
            <Sparkles className="h-4 w-4" />
            <span>{years} años formando profesionales</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-extrabold leading-[1.1] text-balance mb-6 animate-fade-in-up">
            <span className="text-white hover:scale-105 transition-transform duration-300 inline-block">
              Tu carrera empieza
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent animate-gradient-x">
              acá y ahora
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-white/90 max-w-2xl mx-auto text-pretty mb-8">
            Formación práctica, docentes expertos y carreras con alta demanda laboral. Elegí el IES y transformá tu futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 hover:scale-105 font-semibold text-base px-8 py-6 h-auto shadow-xl hover:shadow-2xl transition-all duration-300">
              <Link href="/carreras">
                Ver todas las carreras
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:scale-105 backdrop-blur font-semibold text-base px-8 py-6 h-auto transition-all duration-300">
              <Link href="/contacto">Solicitar info</Link>
            </Button>
          </div>

          {/* Beneficios clave animados */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-2 text-white/90 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
              <Users className="h-5 w-5 text-accent-foreground animate-pulse" />
              <span className="text-sm font-medium">1295 alumnos activos</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
              <TrendingUp className="h-5 w-5 text-accent-foreground animate-bounce" />
              <span className="text-sm font-medium">Rápida salida laboral</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-white/90 hover:text-white hover:scale-110 transition-all duration-300 cursor-pointer">
              <Sparkles className="h-5 w-5 text-accent-foreground animate-pulse" />
              <span className="text-sm font-medium">5 niveles educativos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
