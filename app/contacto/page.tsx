import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import { sedes, redesOficiales } from "@/lib/data/institucional"

const iconoRed = {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn: Linkedin,
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-accent py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">Contacto</h1>
            <p className="text-xl text-white/90">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas sobre nuestra universidad.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto (sedes oficiales) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sedes.map((sede) => (
              <Card key={sede.nivel} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{sede.nivel}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /><span>{sede.direccion}</span></div>
                  <div className="flex gap-2"><Phone className="h-4 w-4 text-primary mt-0.5" /><a href={`tel:${sede.telefono}`} className="hover:text-primary transition-colors">{sede.telefono}</a></div>
                  <div className="flex gap-2"><Mail className="h-4 w-4 text-primary mt-0.5" /><a href={`mailto:${sede.email}`} className="hover:text-primary transition-colors">{sede.email}</a></div>
                  {sede.horario && (
                    <div className="flex gap-2"><Clock className="h-4 w-4 text-primary mt-0.5" /><span>{sede.horario}</span></div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario y Mapa */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Envíanos un mensaje</CardTitle>
                <p className="text-muted-foreground">Completa el formulario y te responderemos a la brevedad</p>
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
                      <Label htmlFor="asunto">Asunto</Label>
                      <Input id="asunto" placeholder="Consulta sobre admisiones" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea id="mensaje" placeholder="Escribe tu consulta aquí..." rows={6} />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Mapa */}
            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-muted relative">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="Mapa del campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                    <div className="text-white text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p className="font-semibold">Ver en Google Maps</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Redes Sociales oficiales */}
              <Card>
                <CardHeader>
                  <CardTitle>Síguenos en redes sociales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    {redesOficiales.map((red) => {
                      const Icon = iconoRed[red.nombre as keyof typeof iconoRed]
                      if (!Icon) return null
                      return (
                        <a
                          key={red.nombre}
                          href={red.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="h-12 w-12 rounded-full bg-primary/10 hover:bg-primary hover:text-white flex items-center justify-center transition-colors"
                          aria-label={red.nombre}
                        >
                          <Icon className="h-6 w-6" />
                        </a>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departamentos (placeholder) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contacto por Departamento</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comunícate directamente con el área que necesitas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-muted-foreground">
            <p className="md:col-span-2 lg:col-span-3">
              Próximamente publicaremos los contactos específicos por departamento. Mientras tanto, podés comunicarte con la sede correspondiente.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
