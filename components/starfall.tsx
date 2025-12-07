"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
}

export function Starfall() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const stars: Star[] = []
    const starCount = 80

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      stars.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 200, 160, ${star.opacity})`
        ctx.fill()

        star.y += star.speed
        star.x -= star.speed * 0.5

        if (star.y > canvas.height) {
          star.y = 0
          star.x = Math.random() * canvas.width
        }
        if (star.x < 0) {
          star.x = canvas.width
        }

        star.opacity += (Math.random() - 0.5) * 0.02
        star.opacity = Math.max(0.2, Math.min(0.7, star.opacity))
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.6 }} />
}

