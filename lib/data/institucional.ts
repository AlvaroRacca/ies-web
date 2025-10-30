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
    email: "complejo@iessantafe.edu.ar",
  },
  {
    nivel: "Secundario",
    direccion: "Tucumán 2718 - (3000) Santa Fe",
    telefono: "(0342) 4525658",
    email: "secundario@iessantafe.edu.ar",
  },
  {
    nivel: "Terciario",
    direccion: "Tucumán 2721 - (3000) Santa Fe",
    telefono: "(0342) 4525658",
    email: "contacto@iessantafe.edu.ar",
    horario: "Lun a Vie de 9 a 12hs y de 17 a 20hs",
  },
  {
    nivel: "Universidad (UCU Santa Fe)",
    direccion: "Tucumán 2721 - (3000) Santa Fe",
    telefono: "(0342) 4525658 - Opción 1",
    email: "informescrsf@ucu.edu.ar",
    horario: "Lun a Vie de 9 a 12hs y de 17 a 20hs",
  },
]

export const redesOficiales = [
  { nombre: "Facebook", url: "https://www.facebook.com/iessantafe/" },
  { nombre: "Instagram", url: "https://www.instagram.com/iessantafe/" },
  { nombre: "YouTube", url: "https://www.youtube.com/@iessantafe" },
]
