import { Card, CardContent } from "@/components/ui/card"
import { Music, Trophy, Heart, Lightbulb } from "lucide-react"

const activities = [
  {
    icon: Music,
    title: "Arte y Cultura",
    description: "Grupos de teatro, danza, música y artes visuales",
    image: "/university-music-performance.jpg",
  },
  {
    icon: Trophy,
    title: "Deportes",
    description: "Equipos competitivos y actividades recreativas",
    image: "/university-sports-team.jpg",
  },
  {
    icon: Heart,
    title: "Voluntariado",
    description: "Proyectos de impacto social y comunitario",
    image: "/university-volunteer-work.jpg",
  },
  {
    icon: Lightbulb,
    title: "Emprendimiento",
    description: "Incubadora de startups y proyectos innovadores",
    image: "/startup-incubator-students.jpg",
  },
]

export function CampusLife() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">Vida Universitaria</h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Más que estudios: una experiencia integral de crecimiento personal
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <Card key={index} className="group overflow-hidden transition-shadow hover:shadow-lg">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                    <activity.icon className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{activity.title}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
