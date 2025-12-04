"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Placeholder images - user will add their own later
const placeholderImages = [
  "/quad-bike-adventure-in-forest.jpg",
  "/buggy-off-road-extreme-driving.jpg",
  "/motorcycle-trail-riding-action.jpg",
  "/group-quad-biking-tour-nature.jpg",
]

export function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % placeholderImages.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 5000)
    return () => clearInterval(timer)
  }, [goToNext])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + placeholderImages.length) % placeholderImages.length)
  }

  return (
    <section className="py-10 sm:py-14 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-6 uppercase">
          <span className="text-[#0a0a0a]">НАШІ </span>
          <span className="text-[#FF6B00]">ПРИГОДИ</span>
        </h2>

        <div className="relative max-w-2xl mx-auto">
          {/* Main slider - swipeable on mobile */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            {placeholderImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image src={src || "/placeholder.svg"} alt={`Slide ${index + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Navigation buttons - larger touch targets */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-[#0a0a0a]" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-transform"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-[#0a0a0a]" />
          </button>

          {/* Dots indicator - larger for touch */}
          <div className="flex justify-center gap-2 mt-4">
            {placeholderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-[#FF6B00] w-6" : "bg-gray-300 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
