"use client"

import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-6 uppercase">
          <span className="text-[#4CAF50]">ВІДЧУЙ </span>
          <span className="text-[#0a0a0a]">ДРАЙВ</span>
        </h2>

        <div className="flex flex-col items-center gap-6 max-w-md mx-auto">
          {/* Vertical video placeholder - mobile optimized size */}
          <div className="relative w-full max-w-[280px]">
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-b from-[#4CAF50]/10 to-[#FF6B00]/10 border-2 border-gray-200 shadow-lg">
              {/* Placeholder for vertical video */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-[#FF6B00] flex items-center justify-center shadow-lg active:scale-95 transition-transform">
                  <Play className="w-8 h-8 text-white ml-1" />
                </button>
                <p className="mt-4 text-gray-500 text-sm font-medium">Відео скоро буде</p>
              </div>
            </div>
          </div>

          {/* Stats - horizontal scroll on mobile */}
          <div className="flex gap-3 overflow-x-auto pb-2 w-full justify-center">
            <div className="flex-shrink-0 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm text-center min-w-[90px]">
              <span className="text-[#4CAF50] font-black text-lg">5+</span>
              <p className="text-gray-500 text-xs">років досвіду</p>
            </div>
            <div className="flex-shrink-0 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm text-center min-w-[90px]">
              <span className="text-[#FF6B00] font-black text-lg">1000+</span>
              <p className="text-gray-500 text-xs">клієнтів</p>
            </div>
            <div className="flex-shrink-0 px-4 py-3 bg-white rounded-xl border border-gray-100 shadow-sm text-center min-w-[90px]">
              <span className="text-[#4CAF50] font-black text-lg">100%</span>
              <p className="text-gray-500 text-xs">безпека</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
