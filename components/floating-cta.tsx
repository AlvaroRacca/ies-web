"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, X, Sparkles, Send } from "lucide-react"
import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const carreras = [
  "Desarrollo de Software",
  "Diseño Gráfico y Visual",
  "Administración de Empresas",
  "Marketing Digital",
  "Enfermería",
  "Educación Inicial",
  "Otra carrera"
]

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasInteracted) {
        setIsVisible(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [hasInteracted])

  useEffect(() => {
    if (isVisible && !hasInteracted) {
      const expandTimer = setTimeout(() => {
        setIsExpanded(true)
      }, 1000)

      return () => clearTimeout(expandTimer)
    }
  }, [isVisible, hasInteracted])

  const handleClose = () => {
    setIsVisible(false)
    setHasInteracted(true)
  }

  const handleClick = () => {
    setHasInteracted(true)
    setIsModalOpen(true)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    alert("Formulario enviado! Te contactaremos pronto.")
    setIsModalOpen(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div 
        className={`relative transition-all duration-500 ${
          isExpanded ? 'scale-100' : 'scale-90'
        }`}
      >
        {/* Pulso de fondo */}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20"></div>
        
        {/* Botón principal */}
        <Button
          size="lg"
          className={`relative bg-[#D20537] hover:bg-[#B8002E] text-white shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-none ${
            isExpanded ? 'px-6 py-4 rounded-full' : 'w-14 h-14 rounded-full p-0'
          }`}
          onClick={handleClick}
        >
          <MessageCircle className={`transition-all duration-300 ${
            isExpanded ? 'w-5 h-5' : 'w-6 h-6'
          }`} />
          {isExpanded && (
            <span className="font-semibold animate-fade-in-up whitespace-nowrap">
              ¡Consultá ahora!
            </span>
          )}
        </Button>

        {/* Botón de cerrar */}
        {isExpanded && (
          <button
            onClick={handleClose}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <X className="w-3 h-3" />
          </button>
        )}

        {/* Tooltip */}
        {isExpanded && (
          <div className="absolute bottom-full right-0 mb-2 bg-black/80 text-white text-sm px-3 py-2 rounded-lg backdrop-blur animate-fade-in-up">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>¿Tenés dudas? ¡Hablemos!</span>
            </div>
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
          </div>
        )}
      </div>

      {/* Modal de contacto */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[500px] cursor-none">
          <DialogHeader>
            <DialogTitle className="text-2xl font-black text-slate-900">
              ¡Consultá{" "}
              <span className="bg-gradient-to-r from-[#D20537] to-[#B8002E] bg-clip-text text-transparent">
                ahora!
              </span>
            </DialogTitle>
            <DialogDescription>
              Completá el formulario y te contactaremos a la brevedad para resolver todas tus dudas.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre *</Label>
                <Input 
                  id="nombre" 
                  placeholder="Tu nombre" 
                  required 
                  className="cursor-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apellido">Apellido *</Label>
                <Input 
                  id="apellido" 
                  placeholder="Tu apellido" 
                  required 
                  className="cursor-none"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="tu@email.com" 
                required 
                className="cursor-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">Tel\u00e9fono *</Label>
              <Input 
                id="telefono" 
                type="tel" 
                placeholder="+54 9 342 123-4567" 
                required 
                className="cursor-none"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="carrera">Carrera de interés *</Label>
              <Select required>
                <SelectTrigger className="cursor-none">
                  <SelectValue placeholder="Seleccioná una carrera" />
                </SelectTrigger>
                <SelectContent>
                  {carreras.map((carrera) => (
                    <SelectItem key={carrera} value={carrera} className="cursor-none">
                      {carrera}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje">Mensaje (opcional)</Label>
              <Textarea 
                id="mensaje" 
                placeholder="Contanos tus dudas o consultas..." 
                rows={3}
                className="cursor-none"
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-[#D20537] hover:bg-[#B8002E] cursor-none rounded-2xl" 
              size="lg"
            >
              <Send className="mr-2 h-4 w-4" />
              Enviar consulta
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}
