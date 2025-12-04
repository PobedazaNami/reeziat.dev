"use client"

import { useEffect, useState } from "react"

interface Snowflake {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  opacity: number
}

export function Snowfall() {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])

  useEffect(() => {
    const flakes: Snowflake[] = []
    const count = 50

    for (let i = 0; i < count; i++) {
      flakes.push({
        id: i,
        x: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 5 + 5,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.6 + 0.4,
      })
    }
    setSnowflakes(flakes)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-snowfall"
          style={{
            left: `${flake.x}%`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            opacity: flake.opacity,
            animationDuration: `${flake.duration}s`,
            animationDelay: `${flake.delay}s`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="white" className="w-full h-full drop-shadow-sm">
            <path d="M12 0L13.5 6L20 4L15 9L22 12L15 15L20 20L13.5 18L12 24L10.5 18L4 20L9 15L2 12L9 9L4 4L10.5 6L12 0Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
