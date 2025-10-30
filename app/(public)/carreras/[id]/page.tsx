import { notFound } from "next/navigation"
import { getCarreraById } from "@/lib/data/carreras"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Clock,
  GraduationCap,
  MapPin,
  Users,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Calendar,
  FileText,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default async function CarreraDetallePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const carrera = await getCarreraById(Number.parseInt(id))

  if (!carrera) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-balance">
            {carrera.nombre}
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-3xl text-pretty mx-auto">
            {carrera.descripcion}
          </p>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            {carrera.pdf_url && (
              <Button asChild size="sm" className="bg-background text-foreground hover:bg-background/90">
                <a href={carrera.pdf_url} target="_blank" rel="noopener noreferrer">Descargar PDF oficial</a>
              </Button>
            )}
            {carrera.fuente_url && (
              <Button asChild size="sm" variant="outline" className="bg-transparent text-white border-white/50 hover:bg-white/10">
                <a href={carrera.fuente_url} target="_blank" rel="noopener noreferrer">Ver en sitio oficial</a>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="container text-center max-w-5xl mx-auto py-8 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Clock className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Duración</p>
                <p className="font-semibold">{carrera.duracion}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Modalidad</p>
                <p className="font-semibold">{carrera.modalidad}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Users className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Cupos</p>
                <p className="font-semibold">{carrera.cupos}</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Calendar className="h-8 w-8 text-primary mb-2" />
                <p className="text-sm text-muted-foreground mb-1">Horarios</p>
                <p className="font-semibold text-sm">{carrera.horarios || "A consultar"}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Título Oficial */}
              {carrera.titulo_oficial && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Título Oficial</h2>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-lg font-semibold mb-2">{carrera.titulo_oficial}</p>
                      {carrera.resolucion && <p className="text-sm text-muted-foreground">{carrera.resolucion}</p>}
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Características */}
              {carrera.caracteristicas && carrera.caracteristicas.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Características de la Carrera</h2>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-3">
                        {carrera.caracteristicas.map((caracteristica, index) => (
                          <div key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{caracteristica}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Plan de Estudios */}
              {(carrera.materias_primer_anio || carrera.materias_segundo_anio || carrera.materias_tercer_anio) && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Plan de Estudios</h2>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    {carrera.materias_primer_anio && (
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-4 text-primary">1er Año</h3>
                          <ul className="space-y-2">
                            {carrera.materias_primer_anio.map((materia, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{materia}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                    {carrera.materias_segundo_anio && (
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-4 text-primary">2do Año</h3>
                          <ul className="space-y-2">
                            {carrera.materias_segundo_anio.map((materia, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{materia}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                    {carrera.materias_tercer_anio && (
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="font-bold text-lg mb-4 text-primary">3er Año</h3>
                          <ul className="space-y-2">
                            {carrera.materias_tercer_anio.map((materia, index) => (
                              <li key={index} className="text-sm flex items-start gap-2">
                                <span className="text-primary mt-1">•</span>
                                <span>{materia}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              )}

              {/* Perfil Profesional */}
              {carrera.perfil_profesional && carrera.perfil_profesional.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Perfil Profesional</h2>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {carrera.perfil_profesional.map((perfil, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{perfil}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              )}

              {/* Campo Laboral */}
              {carrera.campo_laboral && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="h-6 w-6 text-primary" />
                    <h2 className="text-2xl font-bold">Campo Laboral</h2>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <p className="leading-relaxed">{carrera.campo_laboral}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <Card className="bg-primary text-primary-foreground">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">¿Interesado en esta carrera?</h3>
                  <p className="text-sm opacity-90">
                    Inscríbete ahora y comienza tu camino hacia el éxito profesional.
                  </p>
                  <Button asChild className="w-full bg-background text-foreground hover:bg-background/90">
                    <Link href="/contacto">Solicitar Información</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Info Adicional */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Información Adicional</h3>
                  <Separator />
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start gap-2">
                      <FileText className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Requisitos</p>
                        <p className="text-muted-foreground">{carrera.requisitos || "Título secundario completo"}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Calendar className="h-4 w-4 text-primary mt-0.5" />
                      <div>
                        <p className="font-semibold">Inscripciones</p>
                        <p className="text-muted-foreground">Abiertas todo el año</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contacto */}
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="font-bold text-lg">Contacto</h3>
                  <Separator />
                  <div className="space-y-2 text-sm">
                    <p>
                      <span className="font-semibold">Email:</span> info@iessantafe.edu.ar
                    </p>
                    <p>
                      <span className="font-semibold">Teléfono:</span> (0342) 456-7890
                    </p>
                    <p>
                      <span className="font-semibold">WhatsApp:</span> +54 9 342 123-4567
                    </p>
                  </div>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contacto">Contactar</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-muted/30">
        <div className="container text-center max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">¿Listo para comenzar?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Da el primer paso hacia tu futuro profesional. Nuestro equipo está listo para ayudarte.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/admisiones">Proceso de Admisión</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/carreras">Ver Todas las Carreras</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
