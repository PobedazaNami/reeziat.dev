"use client"

export function ChristmasLights() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 pointer-events-none overflow-hidden">
      <div className="flex justify-around">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="relative"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          >
            {/* Wire */}
            <div className="w-px h-4 sm:h-6 bg-green-900 mx-auto" />
            {/* Bulb */}
            <div
              className={`w-3 h-4 sm:w-4 sm:h-5 rounded-full animate-twinkle ${
                i % 4 === 0
                  ? "bg-red-500 shadow-[0_0_8px_2px_rgba(239,68,68,0.6)]"
                  : i % 4 === 1
                    ? "bg-yellow-400 shadow-[0_0_8px_2px_rgba(250,204,21,0.6)]"
                    : i % 4 === 2
                      ? "bg-blue-500 shadow-[0_0_8px_2px_rgba(59,130,246,0.6)]"
                      : "bg-green-500 shadow-[0_0_8px_2px_rgba(34,197,94,0.6)]"
              }`}
              style={{
                animationDelay: `${i * 0.3}s`,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
