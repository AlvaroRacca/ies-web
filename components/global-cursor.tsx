"use client"

import { useState, useEffect } from "react"

export function GlobalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <>
      {/* Aplicar cursor-none globalmente */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
      
      {/* Cursor personalizado global */}
      {isVisible && (
        <div 
          className="fixed w-8 h-8 rounded-full pointer-events-none z-[9999] shadow-2xl transition-opacity duration-200"
          style={{
            left: mousePosition.x - 16,
            top: mousePosition.y - 16,
            transform: 'translate3d(0, 0, 0)',
            background: 'radial-gradient(circle, rgba(210, 5, 55, 0.8) 0%, rgba(210, 5, 55, 0.4) 50%, rgba(210, 5, 55, 0.1) 100%)',
            border: '2px solid rgba(210, 5, 55, 0.6)'
          }}
        >
          <div className="absolute inset-1 bg-white/30 rounded-full"></div>
        </div>
      )}
    </>
  )
}
