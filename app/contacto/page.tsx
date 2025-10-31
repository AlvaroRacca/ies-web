import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { sedes, departamentos } from "@/lib/data/institucional";

const carreras = [
  "Desarrollo de Software",
  "Diseño Gráfico y Visual",
  "Administración de Empresas",
  "Marketing Digital",
  "Enfermería",
  "Educación Inicial",
  "Otra carrera",
];

export default function ContactoPage() {
  return (
    <div className="min-h-screen cursor-none">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl relative z-10">
            <h1 className="font-sans text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Contacto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
              Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus
              dudas sobre nuestro Instituto.
            </p>
          </div>
        </div>
      </section>

      {/* Información de Contacto (sedes oficiales) */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {sedes.map((sede) => (
              <Card
                key={sede.nivel}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-lg">{sede.nivel}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <MapPin className="h-4 w-4 text-[#D20537] mt-0.5" />
                    <span>{sede.direccion}</span>
                  </div>
                  <div className="flex gap-2">
                    <Phone className="h-4 w-4 text-[#D20537] mt-0.5" />
                    <a
                      href={`tel:${sede.telefono}`}
                      className="hover:text-[#D20537] transition-colors cursor-none"
                    >
                      {sede.telefono}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <Mail className="h-4 w-4 text-[#D20537] mt-0.5" />
                    <a
                      href={`mailto:${sede.email}`}
                      className="hover:text-[#D20537] transition-colors cursor-none"
                    >
                      {sede.email}
                    </a>
                  </div>
                  {sede.horario && (
                    <div className="flex gap-2">
                      <Clock className="h-4 w-4 text-[#D20537] mt-0.5" />
                      <span>{sede.horario}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario y Mapa */}
      <section className="bg-muted/30 py-10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario */}
            <Card className="rounded-3xl border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-black">
                  Envíanos un mensaje
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y te responderemos a la brevedad
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre completo</Label>
                      <Input
                        id="nombre"
                        placeholder="Juan Pérez"
                        className="cursor-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="juan@ejemplo.com"
                        className="cursor-none"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="carrera">Carrera de interés</Label>
                    <Select>
                      <SelectTrigger className="cursor-none">
                        <SelectValue placeholder="Seleccioná una carrera" />
                      </SelectTrigger>
                      <SelectContent>
                        {carreras.map((carrera) => (
                          <SelectItem
                            key={carrera}
                            value={carrera}
                            className="cursor-none"
                          >
                            {carrera}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                   <div className="space-y-2">
                      <Label htmlFor="telefono-sidebar">Teléfono *</Label>
                      <Input 
                        id="telefono-sidebar" 
                        type="tel" 
                        placeholder="+54 9 342 123-4567" 
                        required 
                        className="cursor-none"
                      />
                    </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje</Label>
                    <Textarea
                      id="mensaje"
                      placeholder="Escribe tu consulta aquí..."
                      rows={4}
                      className="cursor-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#D20537] hover:bg-[#B8002E] cursor-none rounded-2xl"
                    size="lg"
                  >
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Mapa */}
            <div className="space-y-6">
              <Card className="overflow-hidden rounded-3xl border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-black flex items-center gap-2">
                    <MapPin className="h-6 w-6 text-[#D20537]" />
                    Nuestra Ubicación
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Tucumán 2721, Santa Fe
                  </p>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="aspect-video w-full">
                    {/* Google Maps Embed */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5824.529490184235!2d-60.7082261!3d-31.646537099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f10!3m3!1m2!1s0x95b5a9a535a50355%3A0x434e3055629dc11!2sTucum%C3%A1n%202721%2C%20S3000%20Santa%20Fe%20de%20la%20Vera%20Cruz%2C%20Santa%20Fe!5e1!3m2!1ses!2sar!4v1761871427407!5m2!1ses!2sar"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="cursor-none"
                    ></iframe>
                  </div>
                  <div className="p-4 bg-slate-50">
                    <a
                      href="https://maps.google.com/?q=Tucuman+2721+Santa+Fe+Argentina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#D20537] hover:text-[#B8002E] font-semibold cursor-none flex items-center justify-center gap-2 transition-colors"
                    >
                      <MapPin className="h-4 w-4" />
                      Abrir en Google Maps
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Departamentos */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-sans text-4xl md:text-5xl font-black text-slate-900 mb-4">
              Contacto por{" "}
              <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
                Departamento
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Comunícate directamente con el área que necesitas
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departamentos.map((dept) => (
              <Card
                key={dept.area}
                className="border-0 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-none rounded-3xl"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-black text-slate-900">
                    {dept.area}
                  </CardTitle>
                  {dept.descripcion && (
                    <p className="text-sm text-slate-600">{dept.descripcion}</p>
                  )}
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex gap-2">
                    <Mail className="h-4 w-4 text-[#D20537] mt-0.5 flex-shrink-0" />
                    <a
                      href={`mailto:${dept.email}`}
                      className="hover:text-[#D20537] transition-colors cursor-none break-all"
                    >
                      {dept.email}
                    </a>
                  </div>
                  {dept.telefono && (
                    <div className="flex gap-2">
                      <Phone className="h-4 w-4 text-[#D20537] mt-0.5 flex-shrink-0" />
                      <a
                        href={`tel:${dept.telefono}`}
                        className="hover:text-[#D20537] transition-colors cursor-none"
                      >
                        {dept.telefono}
                      </a>
                    </div>
                  )}
                  {dept.horario && (
                    <div className="flex gap-2">
                      <Clock className="h-4 w-4 text-[#D20537] mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">{dept.horario}</span>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
