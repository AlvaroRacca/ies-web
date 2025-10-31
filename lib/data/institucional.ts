export type Sede = {
  nivel: string
  direccion: string
  telefono: string
  email: string
  horario?: string
  observacion?: string
}

export const sedes: Sede[] = [
  {
    nivel: "Inicial y Primario",
    direccion: "Urquiza 2165 - (3000) Santa Fe",
    telefono: "(0342) 4581877",
    email: "complejo@Instituto-educativo.edu.ar",
  },
  {
    nivel: "Secundario",
    direccion: "Tucumán 2718 - (3000) Santa Fe",
    telefono: "(0342) 4525658",
    email: "secundario@Instituto-educativo.edu.ar",
  },
  {
    nivel: "Terciario",
    direccion: "Tucumán 2721 - (3000) Santa Fe",
    telefono: "(0342) 4525658",
    email: "contacto@Instituto-educativo.edu.ar",
    horario: "Lun a Vie de 9 a 12hs y de 17 a 20hs",
  },
  {
    nivel: "Universidad (Instituto Superior)",
    direccion: "Tucumán 2721 - (3000) Santa Fe",
    telefono: "(0342) 4525658 - Opción 1",
    email: "universidad@Instituto-educativo.edu.ar",
    horario: "Lun a Vie de 9 a 12hs y de 17 a 20hs",
  },
]

export const redesOficiales = [
  { nombre: "Facebook", url: "https://www.facebook.com/Instituto.educativo/" },
  { nombre: "Instagram", url: "https://www.instagram.com/Instituto.educativo/" },
  { nombre: "YouTube", url: "https://www.youtube.com/@Instituto.educativo" },
]

export type Departamento = {
  area: string
  responsable?: string
  email: string
  telefono?: string
  horario?: string
  descripcion?: string
}

export const departamentos: Departamento[] = [
  {
    area: "Soporte Técnico",
    email: "soporte@Instituto-educativo.edu.ar",
    telefono: "(0342) 4525658",
    horario: "Lun a Vie de 9 a 12hs y de 17 a 20hs",
    descripcion: "Consultas sobre problemas técnicos"
  },
  {
    area: "Secretaría Académica",
    email: "academica@Instituto-educativo.edu.ar",
    telefono: "(0342) 4525658 - Int. 101",
    horario: "Lun a Vie de 8 a 13hs",
    descripcion: "Trámites académicos, certificados y legajos"
  },
  {
    area: "Administración y Pagos",
    email: "administracion@Instituto-educativo.edu.ar",
    telefono: "(0342) 4525658 - Int. 102",
    horario: "Lun a Vie de 9 a 13hs",
    descripcion: "Consultas sobre aranceles y formas de pago"
  },
  {
    area: "Biblioteca",
    email: "biblioteca@Instituto-educativo.edu.ar",
    telefono: "(0342) 4525658 - Int. 103",
    horario: "Lun a Vie de 8 a 20hs",
    descripcion: "Préstamos, consultas bibliográficas"
  },

]
