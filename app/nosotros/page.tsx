import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Award, Users, Globe, BookOpen } from "lucide-react"

const valores = [
  {
    titulo: "Excelencia Académica",
    descripcion: "Compromiso con la calidad educativa y la formación integral de nuestros estudiantes.",
    icono: Award,
  },
  {
    titulo: "Innovación",
    descripcion: "Fomentamos la creatividad y el pensamiento crítico para enfrentar los desafíos del futuro.",
    icono: BookOpen,
  },
  {
    titulo: "Inclusión",
    descripcion: "Promovemos un ambiente diverso y equitativo donde todos tienen oportunidades.",
    icono: Users,
  },
  {
    titulo: "Responsabilidad Social",
    descripcion: "Formamos profesionales comprometidos con el desarrollo sostenible de la sociedad.",
    icono: Globe,
  },
]

const cifras = [
  { numero: "50+", label: "Años de trayectoria" },
  { numero: "25,000+", label: "Estudiantes activos" },
  { numero: "1,200+", label: "Docentes calificados" },
  { numero: "80+", label: "Programas académicos" },
  { numero: "200+", label: "Convenios internacionales" },
  { numero: "95%", label: "Empleabilidad de egresados" },
]

const autoridades = [
  {
    nombre: "Dr. Carlos Mendoza",
    cargo: "Rector",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Dra. María González",
    cargo: "Vicerrectora Académica",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Ing. Roberto Silva",
    cargo: "Vicerrector de Investigación",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Lic. Ana Martínez",
    cargo: "Secretaria General",
    imagen: "/placeholder.svg?height=300&width=300",
  },
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Sobre Nosotros</h1>
            <p className="text-xl text-white/90">
              Conoce nuestra historia, misión y compromiso con la excelencia educativa que nos ha posicionado como una
              de las mejores universidades del país.
            </p>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Nuestra Historia</Badge>
              <h2 className="text-4xl font-bold mb-6">Más de 50 años formando líderes</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Fundada en 1975, nuestra universidad nació con la visión de democratizar el acceso a la educación
                  superior de calidad y formar profesionales comprometidos con el desarrollo de la sociedad.
                </p>
                <p>
                  A lo largo de cinco décadas, hemos crecido desde un pequeño campus con tres carreras hasta
                  convertirnos en una institución de prestigio internacional con más de 80 programas académicos y
                  presencia en múltiples ciudades.
                </p>
                <p>
                  Nuestro compromiso con la innovación educativa, la investigación científica y la responsabilidad
                  social nos ha permitido formar a más de 150,000 profesionales que hoy lideran en diversos sectores.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Campus universitario"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-3xl">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Formar profesionales íntegros, competentes y comprometidos con el desarrollo sostenible de la
                  sociedad, a través de programas académicos de excelencia, investigación innovadora y vinculación
                  efectiva con el entorno.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Eye className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-3xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Ser reconocidos como una universidad líder en América Latina por nuestra excelencia académica,
                  innovación educativa y contribución al desarrollo científico, tecnológico y social de la región.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Principios que guían nuestro quehacer institucional
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor) => {
              const Icon = valor.icono
              return (
                <Card key={valor.titulo} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{valor.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{valor.descripcion}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Cifras */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestra Universidad en Números</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {cifras.map((cifra, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{cifra.numero}</div>
                <div className="text-white/80">{cifra.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autoridades */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Autoridades</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Liderazgo comprometido con la excelencia educativa
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {autoridades.map((autoridad) => (
              <Card key={autoridad.nombre} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto mb-4 w-32 h-32 rounded-full overflow-hidden">
                    <img
                      src={autoridad.imagen || "/placeholder.svg"}
                      alt={autoridad.nombre}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{autoridad.nombre}</CardTitle>
                  <p className="text-primary font-medium">{autoridad.cargo}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Acreditaciones */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Acreditaciones y Reconocimientos</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Certificaciones que avalan nuestra calidad educativa
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-32 h-32 bg-white rounded-lg shadow-md flex items-center justify-center">
                <img
                  src={`/placeholder.svg?height=100&width=100&query=accreditation logo ${i}`}
                  alt={`Acreditación ${i}`}
                  className="w-20 h-20 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
