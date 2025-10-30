import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    role: "Egresada de Ingeniería",
    company: "Tech Solutions Inc.",
    image: "/professional-woman-portrait.png",
    quote:
      "La universidad me brindó las herramientas técnicas y el pensamiento crítico necesarios para destacar en mi carrera. Hoy lidero proyectos internacionales gracias a esa formación.",
  },
  {
    name: "Carlos Ramírez",
    role: "Estudiante de Medicina",
    company: "Año 4",
    image: "/medical-student-portrait.png",
    quote:
      "Las prácticas en hospitales de primer nivel y el acompañamiento de profesores expertos han sido fundamentales en mi formación como futuro médico.",
  },
  {
    name: "Ana Martínez",
    role: "Egresada de Diseño",
    company: "Estudio Creativo",
    image: "/designer-woman-portrait.jpg",
    quote:
      "El enfoque práctico y los proyectos reales me permitieron construir un portafolio sólido antes de graduarme. Conseguí trabajo incluso antes de terminar la carrera.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">Historias de Éxito</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conoce las experiencias de nuestra comunidad universitaria
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-accent/20" />
                <p className="mb-6 text-muted-foreground text-pretty">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
