// Simulación de base de datos en memoria
export type Noticia = {
  id: number
  titulo: string
  resumen: string
  contenido: string
  categoria: string
  fecha: string
  imagen: string
  destacada: boolean
  autor: string
}

const noticiasDB: Noticia[] = [
  {
    id: 1,
    titulo: 'Se llevó adelante la charla "Como ser empresario de las propias ideas"',
    resumen: "El pasado jueves 24 de abril se desarrolló en el auditorio del IES la charla de la Fundación Logosófica.",
    contenido:
      'El pasado jueves 24 de abril se desarrolló en el auditorio del IES la charla "Como ser empresario de las propias ideas" de la Fundación Logosófica. Desde el instituto agradecemos a todas las personas que participaron del evento. La charla estuvo enfocada en brindar herramientas para el desarrollo del emprendedurismo y la gestión de ideas innovadoras.',
    categoria: "Eventos",
    fecha: "2025-04-28",
    imagen: "/Noticia1.jpeg",
    destacada: true,
    autor: "IES Santa Fe",
  },
  {
    id: 2,
    titulo: "Estudiantes del IES visitaron el Museo Etnográfico y Cultural de Santa Fe",
    resumen: "Los alumnos de tercer año de Diseño Gráfico y Visual realizaron una visita educativa al museo.",
    contenido:
      "En lo que fue una enriquecedora jornada, los alumnos de tercer año de la carrera Diseño Gráfico y Visual llevaron adelante una visita al Museo Etnográfico y Cultural de Santa Fe. Durante el recorrido los estudiantes recopilaron información sobre el museo y sus colecciones permanentes para desarrollar proyectos de diseño relacionados con la identidad cultural de la región.",
    categoria: "Actividades",
    fecha: "2025-04-25",
    imagen: "/noticia2.png",
    destacada: true,
    autor: "IES Santa Fe",
  },
  {
    id: 3,
    titulo: "El Instituto firmó un convenio con Textilo S.A. para el desarrollo de pasantías",
    resumen: "Acuerdo beneficiará a estudiantes de Administración de Empresas con experiencia laboral.",
    contenido:
      "El pasado jueves, el IES acordó con Textilo S.A. un convenio para que sus alumnos puedan realizar pasantías dentro de dicha empresa radicada en Desvío Arijón, provincia de Santa Fe. El acuerdo beneficiará a los estudiantes de Administración de Empresas, quienes podrán adquirir experiencias en el ámbito laboral mediante la práctica profesional en una empresa líder del sector textil.",
    categoria: "Convenios",
    fecha: "2025-03-10",
    imagen: "/noticia3.jpg",
    destacada: false,
    autor: "IES Santa Fe",
  },
  {
    id: 4,
    titulo: "Evento de NETWORKING - Día del Programador",
    resumen: "Jornada especial en el Molino Marconetti para celebrar el Día del Programador.",
    contenido:
      'El pasado viernes se realizó en el Molino Marconetti del puerto de Santa Fe una jornada especial organizada por la Tecnicatura superior en Desarrollo de Software para festejar el "Día del Programador" en conjunto con la Escuela de Diseño y Artes Visuales del Liceo Municipal E.D.A.V. que oficiaron de anfitriones. El evento contó con la participación de profesionales del sector tecnológico y estudiantes de ambas instituciones.',
    categoria: "Eventos",
    fecha: "2024-09-24",
    imagen: "/noticia-4.jpg",
    destacada: false,
    autor: "IES Santa Fe",
  },
]

let nextId = 5

export async function getNoticias(): Promise<Noticia[]> {
  // Simular delay de red
  await new Promise((resolve) => setTimeout(resolve, 100))
  return [...noticiasDB].sort((a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
}

export async function getNoticiaById(id: number): Promise<Noticia | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  return noticiasDB.find((n) => n.id === id)
}

export async function createNoticia(noticia: Omit<Noticia, "id">): Promise<Noticia> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const newNoticia = { ...noticia, id: nextId++ }
  noticiasDB.push(newNoticia)
  return newNoticia
}

export async function updateNoticia(id: number, noticia: Partial<Noticia>): Promise<Noticia | null> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const index = noticiasDB.findIndex((n) => n.id === id)
  if (index === -1) return null

  noticiasDB[index] = { ...noticiasDB[index], ...noticia }
  return noticiasDB[index]
}

export async function deleteNoticia(id: number): Promise<boolean> {
  await new Promise((resolve) => setTimeout(resolve, 100))
  const index = noticiasDB.findIndex((n) => n.id === id)
  if (index === -1) return false

  noticiasDB.splice(index, 1)
  return true
}
