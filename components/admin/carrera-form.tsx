"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { createCarrera, updateCarrera, type Carrera } from "@/lib/data/carreras"
import { Loader2 } from "lucide-react"

const facultades = [
  "Ingeniería",
  "Ciencias de la Salud",
  "Ciencias Económicas",
  "Arquitectura y Diseño",
  "Ciencias Jurídicas",
  "Ciencias Sociales",
  "Comunicación",
]

const modalidades = ["Presencial", "Virtual", "Presencial/Virtual", "Híbrida"]

interface CarreraFormProps {
  carrera?: Carrera
}

export function CarreraForm({ carrera }: CarreraFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    nombre: carrera?.nombre || "",
    facultad: carrera?.facultad || "Ingeniería",
    duracion: carrera?.duracion || "",
    modalidad: carrera?.modalidad || "Presencial",
    descripcion: carrera?.descripcion || "",
    imagen: carrera?.imagen || "",
    cupos: carrera?.cupos || 0,
    destacada: carrera?.destacada || false,
    plan_estudios: carrera?.plan_estudios || "",
    requisitos: carrera?.requisitos || "",
    campo_laboral: carrera?.campo_laboral || "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      if (carrera) {
        await updateCarrera(carrera.id, formData)
      } else {
        await createCarrera(formData)
      }

      router.push("/admin/carreras")
      router.refresh()
    } catch (error) {
      console.error("Error al guardar carrera:", error)
      alert("Error al guardar la carrera")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="nombre">Nombre de la carrera *</Label>
        <Input
          id="nombre"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
          required
          placeholder="Ej: Ingeniería en Sistemas"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="facultad">Facultad *</Label>
          <select
            id="facultad"
            value={formData.facultad}
            onChange={(e) => setFormData({ ...formData, facultad: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
          >
            {facultades.map((fac) => (
              <option key={fac} value={fac}>
                {fac}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="duracion">Duración *</Label>
          <Input
            id="duracion"
            value={formData.duracion}
            onChange={(e) => setFormData({ ...formData, duracion: e.target.value })}
            required
            placeholder="Ej: 5 años"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="modalidad">Modalidad *</Label>
          <select
            id="modalidad"
            value={formData.modalidad}
            onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
          >
            {modalidades.map((mod) => (
              <option key={mod} value={mod}>
                {mod}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cupos">Cupos disponibles *</Label>
          <Input
            id="cupos"
            type="number"
            value={formData.cupos}
            onChange={(e) => setFormData({ ...formData, cupos: Number.parseInt(e.target.value) })}
            required
            min="0"
            placeholder="120"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="descripcion">Descripción *</Label>
        <Textarea
          id="descripcion"
          value={formData.descripcion}
          onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
          required
          placeholder="Breve descripción de la carrera"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="plan_estudios">Plan de estudios</Label>
        <Textarea
          id="plan_estudios"
          value={formData.plan_estudios}
          onChange={(e) => setFormData({ ...formData, plan_estudios: e.target.value })}
          placeholder="Descripción del plan de estudios"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="requisitos">Requisitos de ingreso</Label>
        <Textarea
          id="requisitos"
          value={formData.requisitos}
          onChange={(e) => setFormData({ ...formData, requisitos: e.target.value })}
          placeholder="Requisitos para ingresar a la carrera"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="campo_laboral">Campo laboral</Label>
        <Textarea
          id="campo_laboral"
          value={formData.campo_laboral}
          onChange={(e) => setFormData({ ...formData, campo_laboral: e.target.value })}
          placeholder="Áreas de trabajo y oportunidades profesionales"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imagen">URL de la imagen</Label>
        <Input
          id="imagen"
          value={formData.imagen}
          onChange={(e) => setFormData({ ...formData, imagen: e.target.value })}
          placeholder="/ruta/a/imagen.jpg"
        />
        <p className="text-sm text-muted-foreground">Deja vacío para usar imagen por defecto</p>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="destacada"
          checked={formData.destacada}
          onCheckedChange={(checked) => setFormData({ ...formData, destacada: checked as boolean })}
        />
        <Label htmlFor="destacada" className="cursor-pointer">
          Marcar como carrera destacada
        </Label>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading} className="flex-1">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Guardando...
            </>
          ) : carrera ? (
            "Actualizar Carrera"
          ) : (
            "Crear Carrera"
          )}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()} disabled={loading}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
