"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Background Image - full screen with dark overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/img-7500.jpeg"
          alt="KVADRO:DNEPR Team"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content - centered on image */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 py-8">
        {/* Top text */}
        <p className="text-white/90 text-sm sm:text-base font-medium tracking-wider mb-4 text-center uppercase">
          Прокат <span className="text-[#FF6B00] font-bold">квадро</span>,{" "}
          <span className="text-[#FF6B00] font-bold">мото</span>,{" "}
          <span className="text-[#FF6B00] font-bold">баггі</span> в Дніпрі
        </p>

        {/* Logo - large and centered */}
        <div className="relative h-36 w-36 sm:h-44 sm:w-44 md:h-52 md:w-52 mx-auto mb-4">
          <Image src="/images/img-3478.png" alt="KVADRO:DNEPR Logo" fill className="object-contain drop-shadow-2xl" />
        </div>

        {/* Subtitle */}
        <p className="text-white/80 text-xs sm:text-sm font-medium tracking-wide mb-6 text-center">
          прогулянки сімейні, групові, індивідуальні
        </p>

        {/* CTA Button */}
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-[#FF6B00] hover:bg-[#e55b00] text-white text-base sm:text-lg font-bold px-8 py-6 rounded-lg shadow-xl active:scale-95 transition-transform flex items-center gap-2"
        >
          ЗАБРОНЮВАТИ
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      {/* Bottom price banner - orange strip */}
      <div className="relative z-10 bg-[#FF6B00] py-4 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6">
          <div className="flex items-center gap-3">
            <span className="bg-white text-[#FF6B00] font-black text-lg sm:text-xl px-3 py-1 rounded-lg">-30%</span>
            <span className="text-white font-bold text-base sm:text-lg">НОВОРІЧНА АКЦІЯ</span>
          </div>
          <div className="text-white font-black text-lg sm:text-2xl tracking-wide">
            ціна від <span className="text-2xl sm:text-3xl">840</span> грн/год
          </div>
        </div>
      </div>
    </section>
  )
}
