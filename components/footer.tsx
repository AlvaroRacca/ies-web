import Link from "next/link"
import { GraduationCap, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-bold text-foreground">Instituto Educativo</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Formando profesionales de excelencia comprometidos con el desarrollo de la sociedad desde 1950.
            </p>
            <div className="mt-6 flex gap-3">
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Facebook className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Twitter className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Youtube className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Académico</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/carreras" className="text-muted-foreground transition-colors hover:text-foreground">
                  Carreras de Grado
                </Link>
              </li>
              <li>
                <Link href="/posgrados" className="text-muted-foreground transition-colors hover:text-foreground">
                  Posgrados
                </Link>
              </li>
              <li>
                <Link
                  href="/educacion-continua"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  Educación Continua
                </Link>
              </li>
              <li>
                <Link href="/investigacion" className="text-muted-foreground transition-colors hover:text-foreground">
                  Investigación
                </Link>
              </li>
              <li>
                <Link href="/biblioteca" className="text-muted-foreground transition-colors hover:text-foreground">
                  Biblioteca
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Servicios</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/admisiones" className="text-muted-foreground transition-colors hover:text-foreground">
                  Admisiones
                </Link>
              </li>
              <li>
                <Link href="/becas" className="text-muted-foreground transition-colors hover:text-foreground">
                  Becas y Financiamiento
                </Link>
              </li>
              <li>
                <Link href="/intercambios" className="text-muted-foreground transition-colors hover:text-foreground">
                  Intercambios
                </Link>
              </li>
              <li>
                <Link href="/empleabilidad" className="text-muted-foreground transition-colors hover:text-foreground">
                  Bolsa de Trabajo
                </Link>
              </li>
              <li>
                <Link href="/bienestar" className="text-muted-foreground transition-colors hover:text-foreground">
                  Bienestar Estudiantil
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-foreground">Contacto</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0" />
                <span>Av. Universidad 1234, Ciudad Capital</span>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+54 11 1234-5678</span>
              </li>
              <li className="flex gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@Instituto-educativo.edu.ar</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
            <p>© 2025 Instituto Educativo. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <Link href="/privacidad" className="transition-colors hover:text-foreground">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="transition-colors hover:text-foreground">
                Términos y Condiciones
              </Link>
              <Link href="/accesibilidad" className="transition-colors hover:text-foreground">
                Accesibilidad
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
