"use client"

import { useEffect, useRef } from "react"

export default function HeroAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Simple animation with dots
    const drawDots = () => {
      if (!ctx || !canvas) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw some static dots
      const dots = 50
      for (let i = 0; i < dots; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        const size = Math.random() * 3 + 1

        // Pastel colors
        const colors = [
          "rgba(255, 182, 193, 0.7)", // Light pink
          "rgba(173, 216, 230, 0.7)", // Light blue
          "rgba(221, 160, 221, 0.7)", // Plum
          "rgba(152, 251, 152, 0.7)", // Pale green
          "rgba(255, 218, 185, 0.7)", // Peach
        ]

        const color = colors[Math.floor(Math.random() * colors.length)]

        ctx.fillStyle = color
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.closePath()
        ctx.fill()
      }
    }

    // Draw initial dots
    drawDots()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}
