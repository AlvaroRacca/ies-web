import { Users, BookOpen, Award, Globe } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "25,000+",
    label: "Estudiantes",
  },
  {
    icon: BookOpen,
    value: "150+",
    label: "Programas Académicos",
  },
  {
    icon: Award,
    value: "95%",
    label: "Empleabilidad",
  },
  {
    icon: Globe,
    value: "80+",
    label: "Convenios Internacionales",
  },
]

export function Stats() {
  return (
    <section className="border-b border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <stat.icon className="h-6 w-6 text-accent" />
              </div>
              <div className="text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
