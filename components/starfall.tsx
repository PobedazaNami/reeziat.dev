"use client"

import { useEffect, useRef } from "react"

interface Snowflake {
  x: number
  y: number
  size: number
  speed: number
  opacity: number
  wobble: number
  wobbleSpeed: number
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

    const snowflakes: Snowflake[] = []
    const snowflakeCount = 120

    for (let i = 0; i < snowflakeCount; i++) {
      snowflakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1 + 0.5,
        opacity: Math.random() * 0.6 + 0.3,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    const drawSnowflake = (x: number, y: number, size: number, opacity: number) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.8})`
      ctx.lineWidth = size * 0.3

      // Simple snowflake shape
      ctx.beginPath()
      ctx.arc(0, 0, size, 0, Math.PI * 2)
      ctx.fill()

      // Draw 6 arms for larger snowflakes
      if (size > 2) {
        for (let i = 0; i < 6; i++) {
          ctx.rotate(Math.PI / 3)
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(0, size * 1.5)
          ctx.stroke()
        }
      }

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      snowflakes.forEach((flake) => {
        drawSnowflake(flake.x, flake.y, flake.size, flake.opacity)

        // Falling with gentle wobble
        flake.y += flake.speed
        flake.wobble += flake.wobbleSpeed
        flake.x += Math.sin(flake.wobble) * 0.5

        // Reset when off screen
        if (flake.y > canvas.height + 10) {
          flake.y = -10
          flake.x = Math.random() * canvas.width
        }
        if (flake.x < -10) flake.x = canvas.width + 10
        if (flake.x > canvas.width + 10) flake.x = -10

        // Subtle opacity variation
        flake.opacity += (Math.random() - 0.5) * 0.01
        flake.opacity = Math.max(0.2, Math.min(0.8, flake.opacity))
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />
}
