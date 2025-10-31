import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award, 
  Clock, 
  MapPin,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const beneficios = [
  {
    icon: GraduationCap,
    titulo: "Formación práctica desde el día 1",
    descripcion: "Aprendés con casos reales y herramientas actuales del mercado laboral.",
    destacado: true
  },
  {
    icon: Users,
    titulo: "Docentes que trabajan en la industria",
    descripcion: "Profesionales activos que te enseñan desde su experiencia real.",
    destacado: false
  },
  {
    icon: TrendingUp,
    titulo: "95% de inserción laboral",
    descripcion: "Nuestros egresados consiguen trabajo rápidamente en su área.",
    destacado: true
  },
  {
    icon: Award,
    titulo: "Títulos oficiales reconocidos",
    descripcion: "Validez nacional y reconocimiento en todo el país.",
    destacado: false
  },
  {
    icon: Clock,
    titulo: "Horarios flexibles",
    descripcion: "Cursado de mañana, tarde y noche para que puedas estudiar y trabajar.",
    destacado: true
  },
  {
    icon: MapPin,
    titulo: "Múltiples sedes en Santa Fe",
    descripcion: "Elegí la sede más cerca de tu casa o trabajo.",
    destacado: false
  }
]

export function WhyChooseUs() {
  const foundationYear = 1982
  const years = new Date().getFullYear() - foundationYear

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">

        <div className="mb-16 text-center">
          <h2 className="font-sans text-4xl md:text-6xl font-black text-slate-900 mb-6">
            ¿Por qué elegir el{" "}
            <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
              Instituto?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
             Más que una institución educativa, somos tu puerta de entrada al mundo profesional
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {beneficios.map((beneficio, index) => {
            const Icon = beneficio.icon
            return (
              <Card 
                key={index} 
                className={`group hover:shadow-xl hover:-translate-y-3 hover:rotate-1 transition-all duration-500 cursor-pointer  ${
                  beneficio.destacado 
                    ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 animate-pulse hover:text-[#D20537]' 
                    : 'hover:shadow-lg hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 '
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardContent className="p-6 text-center">
                  <div className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center  group-hover:animate-bounce ${
                    beneficio.destacado 
                      ? 'bg-gradient-to-r from-[#D20537] to-[#B8002E] text-white animate-bounce ' 
                      : 'bg-red-50 text-[#D20537] group-hover:bg-gradient-to-r group-hover:from-[#D20537] group-hover:to-[#B8002E] group-hover:text-white'
                  } transition-all duration-500`}>
                    <Icon className={`w-8 h-8 ${
                      beneficio.destacado ? 'animate-pulse' : ''
                    }`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#D20537] transition-colors duration-300">{beneficio.titulo}</h3>
                  <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 ">{beneficio.descripcion}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-[#D20537] to-[#B8002E] rounded-2xl p-8 md:p-12 text-white hover:scale-105 transition-all duration-500 cursor-pointer">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 animate-pulse">
              ¿Listo para dar el próximo paso?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Hablá con nuestros asesores y descubrí cuál es la carrera perfecta para vos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-[#D20537] hover:bg-white/90 hover:scale-110 font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                <Link href="/contacto">
                  Solicitar información
                  <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 bg-white/10 text-white hover:bg-white/20 hover:scale-110 backdrop-blur transition-all duration-300">
                <Link href="/carreras">Ver todas las carreras</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
