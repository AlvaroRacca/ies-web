"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2, Loader2 } from "lucide-react"
import { deleteCarrera } from "@/lib/data/carreras"

interface DeleteCarreraButtonProps {
  id: number
  nombre: string
}

export function DeleteCarreraButton({ id, nombre }: DeleteCarreraButtonProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleDelete() {
    if (!confirm(`¿Estás seguro de eliminar la carrera "${nombre}"?`)) {
      return
    }

    setLoading(true)

    try {
      await deleteCarrera(id)
      router.refresh()
    } catch (error) {
      console.error("Error al eliminar carrera:", error)
      alert("Error al eliminar la carrera")
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
