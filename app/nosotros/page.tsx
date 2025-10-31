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

const anioFundacion = 1982
const aniosExperiencia = (new Date().getFullYear() - anioFundacion).toString()
const cifras = [
  { numero: aniosExperiencia, label: "Años de experiencia" },
  { numero: "1295", label: "Alumnos" },
  { numero: "276", label: "Trabajadores" },
  { numero: "5", label: "Niveles educativos" },
]

const autoridades = [
  {
    nombre: "Dr. Alberto Raviglione",
    cargo: "Presidente Grupo Educativo ESBA",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Prof. Estela Pulice",
    cargo: "Representante Legal Nivel Secundario y Terciario",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Lic. Miran Beatriz Hermes",
    cargo: "Representante Legal Nivel Inicial y Primario",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Prof. Andres Cicerchia",
    cargo: "Rector",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "CPN Ana María Moroni",
    cargo: "ViceRector",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Prof. Yanina Primón",
    cargo: "Directora Nivel Inicial y Primaria",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Prof. Sandra Fiorano",
    cargo: "Vice-Directora Nivel Inicial y Primaria",
    imagen: "/placeholder.svg?height=300&width=300",
  },
  {
    nombre: "Cont. Liliana Albrech",
    cargo: "Directora Nivel Secundario",
    imagen: "/placeholder.svg?height=300&width=300",
  },
]

export default function NosotrosPage() {
  return (
    <div className="min-h-screen cursor-none">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl relative z-10">
            <h1 className="font-sans text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              Sobre{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Nosotros
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              El Instituto de Estudios Superiores de Santa Fe desarrolla su labor educativa con más de cuatro décadas de experiencia, formando personas y profesionales comprometidos con su comunidad.
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
              <h2 className="text-4xl font-bold mb-6">Desde 1982 al servicio de la educación</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  El Instituto de Estudios Superiores de Santa Fe inicia sus actividades en abril de 1982 autorizado por
                  la Superintendencia Nacional de Enseñanza Privada; a partir de diciembre del mismo año se incorpora a
                  la enseñanza oficial del Ministerio de Educación de la Nación.
                </p>
                <p>
                  Desde entonces, consolidó una propuesta educativa de calidad, expandiendo su oferta académica y
                  articulando los distintos niveles educativos con fuerte inserción en la comunidad.
                </p>
                <p>
                  El IES sostiene una mirada humanista y de compromiso social, promoviendo la mejora continua y la
                  formación integral de sus estudiantes.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/IES1-ok.jpg"
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
                <Target className="h-12 w-12 text-[#D20537] mb-4" />
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
                <Eye className="h-12 w-12 text-[#D20537] mb-4" />
                <CardTitle className="text-3xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  Ser reconocidos como un Instituto líder en América Latina por nuestra excelencia académica,
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
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-red-50 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-[#D20537]" />
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
      <section className="py-16 bg-gradient-to-r from-[#D20537] to-[#B8002E] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestro Instituto en Números</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
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
                  <p className="text-[#D20537] font-medium">{autoridad.cargo}</p>
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
