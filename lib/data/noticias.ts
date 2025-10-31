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
    titulo: "Se inauguró el nuevo Laboratorio de Innovación Tecnológica",
    resumen:
      "El Instituto presentó su nuevo espacio de innovación destinado a proyectos interdisciplinarios de estudiantes de distintas carreras.",
    contenido:
      "El pasado viernes 17 de mayo se llevó a cabo la inauguración del nuevo Laboratorio de Innovación Tecnológica del Instituto. Este espacio tiene como objetivo fomentar la creatividad, el trabajo en equipo y el desarrollo de proyectos vinculados a la tecnología, el diseño y la sostenibilidad. La ceremonia contó con la presencia de autoridades institucionales, docentes y alumnos que realizaron demostraciones de sus proyectos en desarrollo.",
    categoria: "Infraestructura",
    fecha: "2025-05-18",
    imagen: "/NOTICIAEJ1.jpg",
    destacada: true,
    autor: "Instituto Educativo",
  },
  {
    id: 2,
    titulo: "Alumnos de Educación Inicial participaron en una jornada de lectura en el Jardín Modelo",
    resumen:
      "La actividad buscó promover el hábito lector y el contacto temprano con los libros entre los niños y niñas del nivel inicial.",
    contenido:
      "En el marco del programa ‘Leemos Juntos’, estudiantes del profesorado en Educación Inicial del Instituto visitaron el Jardín Modelo de la ciudad para compartir una jornada de lectura con los más pequeños. Durante la actividad, los futuros docentes prepararon cuentos interactivos, dramatizaciones y talleres de lectura para estimular la imaginación y el lenguaje de los niños. La experiencia fue valorada como altamente positiva tanto por los alumnos como por las maestras del jardín.",
    categoria: "Actividades",
    fecha: "2025-06-05",
    imagen: "/NOTICIAEJ2.jpeg",
    destacada: false,
    autor: "Instituto Educativo",
  },
  {
    id: 3,
    titulo: "Convenio con la Municipalidad de Santa Fe para prácticas profesionales",
    resumen:
      "El Instituto firmó un acuerdo para que los estudiantes de Administración y Contabilidad realicen prácticas en distintas áreas municipales.",
    contenido:
      "El Instituto Educativo firmó un convenio con la Municipalidad de Santa Fe para fortalecer la vinculación entre la formación académica y la práctica profesional. A través de este acuerdo, los estudiantes de las carreras de Administración y Contabilidad podrán realizar pasantías supervisadas en áreas de gestión pública, aplicando los conocimientos adquiridos en el aula a contextos reales. Las prácticas comenzarán a partir del próximo semestre y contarán con seguimiento docente.",
    categoria: "Convenios",
    fecha: "2025-07-12",
    imagen: "/NOTICIAEJ3.jpg",
    destacada: false,
    autor: "Instituto Educativo",
  },
  {
    id: 4,
    titulo: "Jornada de Diseño Sustentable 2025",
    resumen:
      "Estudiantes y profesionales participaron en charlas y talleres sobre innovación ecológica en el diseño de productos.",
    contenido:
      "El pasado 3 de septiembre se desarrolló en el auditorio del Instituto la Jornada de Diseño Sustentable 2025, un evento que reunió a especialistas del sector creativo y a alumnos de las carreras de Diseño Gráfico y Diseño de Productos. A lo largo de la jornada se abordaron temáticas relacionadas con la reutilización de materiales, la economía circular y las nuevas tendencias en diseño ecológico. La actividad concluyó con una exposición de proyectos realizados por los estudiantes.",
    categoria: "Eventos",
    fecha: "2025-09-03",
    imagen: "/NOTICIAEJ3.jpg",
    destacada: true,
    autor: "Instituto Educativo",
  },
   {
    id: 5,
    titulo: "Convenio con la Municipalidad de Santa Fe para prácticas profesionales",
    resumen:
      "El Instituto firmó un acuerdo para que los estudiantes de Administración y Contabilidad realicen prácticas en distintas áreas municipales.",
    contenido:
      "El Instituto Educativo firmó un convenio con la Municipalidad de Santa Fe para fortalecer la vinculación entre la formación académica y la práctica profesional. A través de este acuerdo, los estudiantes de las carreras de Administración y Contabilidad podrán realizar pasantías supervisadas en áreas de gestión pública, aplicando los conocimientos adquiridos en el aula a contextos reales. Las prácticas comenzarán a partir del próximo semestre y contarán con seguimiento docente.",
    categoria: "Convenios",
    fecha: "2025-07-12",
    imagen: "/NOTICIAEJ3.jpg",
    destacada: false,
    autor: "Instituto Educativo",
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
