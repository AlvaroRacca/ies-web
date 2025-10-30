"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2, Loader2 } from "lucide-react"
import { deleteNoticia } from "@/lib/data/noticias"

interface DeleteNoticiaButtonProps {
  id: number
  titulo: string
}

export function DeleteNoticiaButton({ id, titulo }: DeleteNoticiaButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm(`¿Estás seguro de eliminar la noticia "${titulo}"?`)) {
      return
    }

    setLoading(true)

    try {
      await deleteNoticia(id)
      router.refresh()
    } catch (error) {
      console.error("Error al eliminar noticia:", error)
      alert("Error al eliminar la noticia")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={handleDelete} disabled={loading}>
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Trash2 className="h-4 w-4" />}
    </Button>
  )
}
