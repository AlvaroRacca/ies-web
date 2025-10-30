"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { createNoticia, updateNoticia, type Noticia } from "@/lib/data/noticias"
import { Loader2 } from "lucide-react"

const categorias = ["Investigación", "Logros", "Becas", "Eventos", "Internacional", "Campus"]

interface NoticiaFormProps {
  noticia?: Noticia
}

export function NoticiaForm({ noticia }: NoticiaFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    titulo: noticia?.titulo || "",
    resumen: noticia?.resumen || "",
    contenido: noticia?.contenido || "",
    categoria: noticia?.categoria || "Investigación",
    fecha: noticia?.fecha || new Date().toISOString().split("T")[0],
    imagen: noticia?.imagen || "",
    destacada: noticia?.destacada || false,
    autor: noticia?.autor || "",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    try {
      if (noticia) {
        await updateNoticia(noticia.id, formData)
      } else {
        await createNoticia(formData)
      }

      router.push("/admin/noticias")
      router.refresh()
    } catch (error) {
      console.error("Error al guardar noticia:", error)
      alert("Error al guardar la noticia")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="titulo">Título *</Label>
        <Input
          id="titulo"
          value={formData.titulo}
          onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
          required
          placeholder="Título de la noticia"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="resumen">Resumen *</Label>
        <Textarea
          id="resumen"
          value={formData.resumen}
          onChange={(e) => setFormData({ ...formData, resumen: e.target.value })}
          required
          placeholder="Breve resumen de la noticia"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="contenido">Contenido *</Label>
        <Textarea
          id="contenido"
          value={formData.contenido}
          onChange={(e) => setFormData({ ...formData, contenido: e.target.value })}
          required
          placeholder="Contenido completo de la noticia"
          rows={8}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="categoria">Categoría *</Label>
          <select
            id="categoria"
            value={formData.categoria}
            onChange={(e) => setFormData({ ...formData, categoria: e.target.value })}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            required
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="fecha">Fecha *</Label>
          <Input
            id="fecha"
            type="date"
            value={formData.fecha}
            onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="autor">Autor *</Label>
        <Input
          id="autor"
          value={formData.autor}
          onChange={(e) => setFormData({ ...formData, autor: e.target.value })}
          required
          placeholder="Nombre del autor"
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
          Marcar como noticia destacada
        </Label>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading} className="flex-1">
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Guardando...
            </>
          ) : noticia ? (
            "Actualizar Noticia"
          ) : (
            "Publicar Noticia"
          )}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()} disabled={loading}>
          Cancelar
        </Button>
      </div>
    </form>
  )
}
