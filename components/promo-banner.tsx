"use client"

export function PromoBanner() {
  return (
    <div className="sticky top-0 z-50 w-full bg-[#FF6B00] py-2 sm:py-2.5 shadow-md">
      <div className="flex items-center justify-center">
        <span className="text-sm sm:text-base font-black text-white tracking-wide uppercase flex items-center gap-2">
          <span className="text-lg">❄️</span>
          НОВОРІЧНІ ЗНИЖКИ -30%
          <span className="text-lg">❄️</span>
        </span>
      </div>
    </div>
  )
}
