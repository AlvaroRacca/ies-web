import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, FileText, Calendar, UserCheck, DollarSign, Award } from "lucide-react"

const pasos = [
  {
    numero: 1,
    titulo: "Registro en línea",
    descripcion: "Completa el formulario de preinscripción con tus datos personales y académicos.",
    icono: FileText,
  },
  {
    numero: 2,
    titulo: "Examen de admisión",
    descripcion: "Presenta el examen de conocimientos generales y específicos de tu carrera.",
    icono: UserCheck,
  },
  {
    numero: 3,
    titulo: "Entrevista personal",
    descripcion: "Participa en una entrevista con el comité de admisiones de tu facultad.",
    icono: Calendar,
  },
  {
    numero: 4,
    titulo: "Matrícula",
    descripcion: "Una vez aceptado, completa tu matrícula y comienza tu vida universitaria.",
    icono: CheckCircle2,
  },
]

const requisitos = [
  "Certificado de bachillerato o título equivalente",
  "Documento de identidad vigente",
  "Fotografías tamaño carnet",
  "Certificado médico",
  "Comprobante de pago de inscripción",
  "Formulario de admisión completo",
]

const fechas = [
  { evento: "Inicio de inscripciones", fecha: "1 de Noviembre, 2025" },
  { evento: "Cierre de inscripciones", fecha: "15 de Diciembre, 2025" },
  { evento: "Examen de admisión", fecha: "10 de Enero, 2026" },
  { evento: "Publicación de resultados", fecha: "25 de Enero, 2026" },
  { evento: "Matrícula", fecha: "1-15 de Febrero, 2026" },
  { evento: "Inicio de clases", fecha: "1 de Marzo, 2026" },
]

export default function AdmisionesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Admisiones</h1>
            <p className="text-xl text-white/90">
              Únete a nuestra comunidad universitaria. Conoce el proceso de admisión y comienza tu camino hacia el éxito
              profesional.
            </p>
          </div>
        </div>
      </section>

      {/* Proceso de Admisión */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proceso de Admisión</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sigue estos pasos para formar parte de nuestra universidad
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pasos.map((paso) => {
              const Icon = paso.icono
              return (
                <Card key={paso.numero} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{paso.numero}</div>
                    <CardTitle>{paso.titulo}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{paso.descripcion}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Requisitos y Fechas */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Requisitos */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <FileText className="h-6 w-6 text-primary" />
                  Requisitos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {requisitos.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Fechas Importantes */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-2">
                  <Calendar className="h-6 w-6 text-primary" />
                  Fechas Importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {fechas.map((item, index) => (
                    <li key={index} className="flex justify-between items-center pb-3 border-b last:border-0">
                      <span className="font-medium">{item.evento}</span>
                      <span className="text-muted-foreground text-sm">{item.fecha}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Becas y Financiamiento */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Becas y Financiamiento</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos diversas opciones para hacer tu educación más accesible
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Becas por Mérito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Hasta 100% de descuento en matrícula para estudiantes con excelencia académica.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Más información
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Becas Socioeconómicas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Apoyo financiero para estudiantes con necesidades económicas demostradas.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Más información
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <FileText className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Planes de Pago</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Facilidades de pago flexibles adaptadas a tus necesidades financieras.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Más información
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Formulario de Contacto */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl text-center">Solicita Información</CardTitle>
                <p className="text-center text-muted-foreground">
                  Completa el formulario y un asesor se pondrá en contacto contigo
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input id="nombre" placeholder="Juan Pérez" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" placeholder="juan@ejemplo.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono</Label>
                      <Input id="telefono" placeholder="+1 234 567 890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carrera">Carrera de interés</Label>
                      <Input id="carrera" placeholder="Ej: Ingeniería en Sistemas" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea id="mensaje" placeholder="Cuéntanos sobre tus intereses y preguntas..." rows={4} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Solicitud
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
