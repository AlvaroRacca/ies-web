import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Marisol Dibssié",
    role: "Egresada de Desarrollo de Software",
    company: "Freelance Developer",
    image: "/professional-woman-portrait.png",
    content: "Por mi disponibilidad horaria necesitaba estudiar a distancia. La modalidad me permitió lograr, con mucho entusiasmo y estudio, pero a mi tiempo, este anhelado título.",
    rating: 5,
    year: "2023"
  },
  {
    name: "Carlos Mendez",
    role: "Egresado de Diseño Digital",
    company: "Agencia Creativa",
    image: "/designer-woman-portrait.jpg",
    content: "Los proyectos reales que desarrollamos durante la carrera fueron clave para armar mi portafolio. Conseguí trabajo antes de recibirme.",
    rating: 5,
    year: "2022"
  },
  {
    name: "Ana Rodriguez",
    role: "Egresada de Periodismo",
    company: "Canal de TV Local",
    image: "/medical-student-portrait.png",
    content: "La formación práctica desde el primer día me dio la confianza para trabajar en medios. Los docentes son profesionales activos que te enseñan la realidad del mercado.",
    rating: 5,
    year: "2023"
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white cursor-none">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-sans text-4xl md:text-6xl font-black text-slate-900 mb-6">
            Nuestros egresados lo{" "}
            <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
              confirman
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Más de 1000 profesionales formados que hoy trabajan en lo que aman
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white cursor-none rounded-3xl">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs border-red-200 text-[#D20537] bg-red-50">
                    Egresado {testimonial.year}
                  </Badge>
                </div>
                
                <Quote className="mb-6 h-10 w-10 text-[#D20537]/60" />
                <blockquote className="mb-8 text-slate-600 text-lg leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16 ring-2 ring-red-100">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-gradient-to-br from-red-50 to-red-100 text-[#D20537] font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-black text-slate-900 text-lg">{testimonial.name}</div>
                    <div className="text-sm text-slate-500 font-medium">{testimonial.role}</div>
                    <div className="text-xs text-[#D20537] font-semibold">{testimonial.company}</div>
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
