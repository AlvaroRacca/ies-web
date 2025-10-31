// Simulación de base de datos en memoria
export type Carrera = {
  id: number
  nombre: string
  facultad: string
  duracion: string
  modalidad: string
  descripcion: string
  imagen: string
  cupos: number
  destacada: boolean
  plan_estudios?: string
  requisitos?: string
  campo_laboral?: string
  horarios?: string
  titulo_oficial?: string
  resolucion?: string
  fuente_url?: string
  pdf_url?: string
  materias_primer_anio?: string[]
  materias_segundo_anio?: string[]
  materias_tercer_anio?: string[]
  perfil_profesional?: string[]
  caracteristicas?: string[]
}

const carrerasDB: Carrera[] = [
  {
    id: 1,
    nombre: "Desarrollo de Software",
    facultad: "Tecnología",
    duracion: "3 años",
    modalidad: "Presencial",
    descripcion:
      "El Técnico Superior en Desarrollo de Software es uno de los profesionales más requeridos actualmente tanto en el medio nacional como internacional. Formación práctica con equipamiento de última generación.",
    imagen: "/computer-science-programming-code.jpg",
    cupos: 120,
    destacada: true,
    horarios: "Lunes a Viernes de 17 a 22hs",
    titulo_oficial: "Técnico/a Superior en Desarrollo de Software",
    resolucion: "Resolución Ministerial Nro.: 2120/16",
    fuente_url: "https://Instituto-educativo.edu.ar/desarrollador-de-software/",
    pdf_url: "https://Instituto-educativo.edu.ar/wp-content/uploads/2019/08/Desarrolador-Software.pdf",
    caracteristicas: [
      "Sistemas Informáticos Personalizados",
      "Desarrollo Web",
      "APP para Smartphones",
      "Redes",
      "Contenido Práctico",
      "Gabinete Informático Especializado",
    ],
    materias_primer_anio: [
      "Comunicación (1er Cuatrimestre)",
      "Unidad de definición institucional I (2do Cuatrimestre)",
      "Inglés técnico I",
      "Matemática",
      "Administración",
      "Tecnología de la información",
      "Lógica y estructura de datos",
      "Ingeniería de software I",
      "Sistemas operativos",
    ],
    materias_segundo_anio: [
      "Problemas Socio Contemporáneos (1er Cuatrimestre)",
      "Unidad de definición institucional II (2do Cuatrimestre)",
      "Inglés técnico II",
      "Innovación y desarrollo emprendedor",
      "Estadística",
      "Programación I",
      "Base de Datos I",
      "Ingeniería de software II",
      "Práctica Profesionalizante I",
    ],
    materias_tercer_anio: [
      "Ética y responsabilidad social (1er Cuatrimestre)",
      "Derecho y legislación laboral (2do Cuatrimestre)",
      "Redes y comunicación",
      "Programación II",
      "Gestión de proyectos de software",
      "Base de datos II",
      "Práctica profesionalizante II",
    ],
    perfil_profesional: [
      "Profesional independiente como proveedor de servicios para desarrollo, actualización y/o mantenimiento de sistemas informáticos",
      "Diseño, desarrollo y mantenimiento de páginas web y aplicaciones para Smartphone",
      "Programación, montaje y administración de redes, sistemas informáticos y juegos para computadoras",
      "Sistemas de control de procesos, administración y logística para industrias y empresas de servicios",
      "Dirigir proyectos de tecnología informática",
      "Ser docente en los niveles secundario y terciario",
    ],
    campo_laboral:
      "Empresas de desarrollo de software, emprendimientos independientes, empresas privadas y estatales, industrias y empresas de servicios.",
  },
  {
    id: 2,
    nombre: "Periodismo Integral y Deportivo",
    facultad: "Comunicación",
    duracion: "3 años",
    modalidad: "Presencial",
    descripcion:
      "Formación integral en periodismo con especialización en comunicación deportiva. Título oficial con rápida inserción laboral en medios de comunicación.",
    imagen: "/journalism-media-communication-broadcasting.jpg",
    cupos: 80,
    destacada: true,
    horarios: "Lunes a Viernes de 17 a 22hs",
    titulo_oficial: "Técnico/a Superior en Periodismo Integral y Deportivo",
    resolucion: "Título Oficial",
    campo_laboral:
      "Medios de comunicación, radio, televisión, prensa escrita, medios digitales, comunicación deportiva, producción audiovisual.",
  },
  {
    id: 3,
    nombre: "Diseño Digital",
    facultad: "Diseño y Artes Visuales",
    duracion: "3 años",
    modalidad: "Presencial",
    descripcion:
      "Comunicación digital interactiva para la producción de contenidos multimedia. Audiovisual, Fotografía, Animación Digital, Marketing Digital con rápida salida laboral.",
    imagen: "/international-students-exchange.jpg",
    cupos: 100,
    destacada: true,
    horarios: "Lunes a Viernes de 17 a 22hs",
    titulo_oficial: "Técnico/a Superior en Diseño Digital",
    resolucion: "Resolución Ministerial Nro.: 0254/15",
    fuente_url: "https://Instituto-educativo.edu.ar/diseno-digital/",
    pdf_url: "https://Instituto-educativo.edu.ar/wp-content/uploads/2019/08/Disen%CC%83o-Digital.pdf",
    caracteristicas: [
      "Comunicación digital interactiva",
      "Producción de contenidos multimedia",
      "Audiovisual",
      "Fotografía",
      "Animación Digital",
      "Marketing Digital",
    ],
    campo_laboral:
      "Agencias de publicidad, estudios de diseño, producción audiovisual, animación digital, marketing digital, freelance.",
  },
  {
    id: 4,
    nombre: "Administración de Empresas",
    facultad: "Ciencias Económicas",
    duracion: "3 años",
    modalidad: "Presencial",
    descripcion:
      "Formación integral en gestión empresarial, finanzas, recursos humanos y marketing. Preparación para liderar organizaciones y emprendimientos.",
    imagen: "/business-management-office-team.jpg",
    cupos: 150,
    destacada: false,
    horarios: "Lunes a Viernes de 17 a 22hs",
    titulo_oficial: "Técnico/a Superior en Administración de Empresas",
    campo_laboral: "Empresas privadas, sector público, emprendimiento, consultoría, gestión de recursos humanos.",
    fuente_url: "",
  },
  {
    id: 5,
    nombre: "Diseño Gráfico y Visual",
    facultad: "Diseño y Artes Visuales",
    duracion: "3 años",
    modalidad: "Presencial",
    descripcion:
      "Formación en diseño gráfico, identidad visual, branding y comunicación visual. Desarrollo de proyectos creativos para medios impresos y digitales.",
    imagen: "/graphic-design-creative-studio.jpg",
    cupos: 90,
    destacada: false,
    horarios: "Lunes a Viernes de 17 a 22hs",
    titulo_oficial: "Técnico/a Superior en Diseño Gráfico y Visual",
    campo_laboral: "Estudios de diseño, agencias de publicidad, editoriales, medios digitales, freelance.",
    fuente_url: "https://Instituto-educativo.edu.ar/diseno-grafico-y-visual/",
  },
  {
    id: 6,
    nombre: "Diseño y Producción de Indumentaria",
    facultad: "Diseño y Artes Visuales",
    duracion: "3 años",
    modalidad: "Presencial",
    descripcion:
      "Formación en diseño de moda, patronaje, confección y producción de indumentaria. Desarrollo de colecciones y gestión de la industria textil.",
    imagen: "/fashion-design-clothing-studio.jpg",
    cupos: 70,
    destacada: false,
    horarios: "Lunes a Viernes de 17 a 22hs",
    titulo_oficial: "Técnico/a Superior en Diseño y Producción de Indumentaria",
    campo_laboral: "Industria textil, marcas de moda, talleres de confección, diseño independiente, producción.",
    fuente_url: "https://Instituto-educativo.edu.ar/diseno-y-produccion-de-indumentaria/",
  },
  {
    id: 7,
    nombre: "Relaciones Públicas",
    facultad: "Comunicación",
    duracion: "3 años",
    modalidad: "Presencial",
    descripcion:
      "Formación en comunicación institucional, gestión de eventos, protocolo y ceremonial. Desarrollo de estrategias de comunicación organizacional.",
    imagen: "/public-relations-corporate-event.jpg",
    cupos: 85,
    destacada: false,
    horarios: "Lunes a Viernes de 17 a 22hs",
    titulo_oficial: "Analista en Relaciones Públicas",
    campo_laboral:
      "Empresas privadas, organismos públicos, agencias de comunicación, organización de eventos, consultoría.",
    fuente_url: "https://Instituto-educativo.edu.ar/analista-en-relaciones-publicas/",
  },
]

let nextId = 8

export async function getCarreras(): Promise<Carrera[]> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return [...carrerasDB].sort((a, b) => a.nombre.localeCompare(b.nombre))
}

export async function getCarreraById(id: number): Promise<Carrera | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return carrerasDB.find((c) => c.id === id)
}

export async function createCarrera(carrera: Omit<Carrera, "id">): Promise<Carrera> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const newCarrera = { ...carrera, id: nextId++ }
  carrerasDB.push(newCarrera)
  return newCarrera
}

export async function updateCarrera(id: number, carrera: Partial<Carrera>): Promise<Carrera | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const index = carrerasDB.findIndex((c) => c.id === id)
  if (index === -1) return null

  carrerasDB[index] = { ...carrerasDB[index], ...carrera }
  return carrerasDB[index]
}

export async function deleteCarrera(id: number): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const index = carrerasDB.findIndex((c) => c.id === id)
  if (index === -1) return false

  carrerasDB.splice(index, 1)
  return true
}
