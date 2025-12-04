"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

interface PricingOption {
  duration: string
  oldPrice: number
  newPrice: number
}

interface PricingBlock {
  title: string
  icon: React.ReactNode
  options: PricingOption[]
}

const QuadIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
    <path d="M56 36h-4v-8c0-2.2-1.8-4-4-4h-8l-4-8h-8l-4 8H16c-2.2 0-4 1.8-4 4v8H8c-2.2 0-4 1.8-4 4v4c0 2.2 1.8 4 4 4h4c0 4.4 3.6 8 8 8s8-3.6 8-8h8c0 4.4 3.6 8 8 8s8-3.6 8-8h4c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4zM20 52c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm24 0c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
  </svg>
)

const BuggyIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
    <path d="M58 32h-6l-4-12c-1-3-4-5-7-5H23c-3 0-6 2-7 5l-4 12H6c-2.2 0-4 1.8-4 4v6c0 2.2 1.8 4 4 4h2c0 5.5 4.5 10 10 10s10-4.5 10-10h8c0 5.5 4.5 10 10 10s10-4.5 10-10h2c2.2 0 4-1.8 4-4v-6c0-2.2-1.8-4-4-4zM18 52c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM20 28l3-9h18l3 9H20zm26 24c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z" />
    <path d="M32 20h-4v8h8v-8z" opacity="0.5" />
  </svg>
)

const MotoIcon = () => (
  <svg viewBox="0 0 64 64" fill="currentColor" className="w-7 h-7 sm:w-8 sm:h-8">
    <path d="M52 36c-1.1 0-2.1.2-3.1.5L44 28h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-8l-8-8h-8v4l4 4-6 8H12c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12c0-1.4-.3-2.7-.7-4h9.4c-.4 1.3-.7 2.6-.7 4 0 6.6 5.4 12 12 12s12-5.4 12-12-5.4-12-12-12zM12 48c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm40 0c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" />
  </svg>
)

const pricingData: PricingBlock[] = [
  {
    title: "КВАДРОЦИКЛ",
    icon: <QuadIcon />,
    options: [
      { duration: "1 година", oldPrice: 1200, newPrice: 840 },
      { duration: "2 години", oldPrice: 2000, newPrice: 1590 },
    ],
  },
  {
    title: "БАГГІ",
    icon: <BuggyIcon />,
    options: [
      { duration: "1 година", oldPrice: 1600, newPrice: 1260 },
      { duration: "2 години", oldPrice: 2700, newPrice: 2168 },
    ],
  },
  {
    title: "МОТО",
    icon: <MotoIcon />,
    options: [
      { duration: "2 години", oldPrice: 2500, newPrice: 1999 },
      { duration: "3 години", oldPrice: 3000, newPrice: 2499 },
    ],
  },
]

export function PricingBlocks() {
  const [selectedOptions, setSelectedOptions] = useState<number[]>([0, 0, 0])

  const handleOptionChange = (blockIndex: number, optionIndex: number) => {
    const newSelected = [...selectedOptions]
    newSelected[blockIndex] = optionIndex
    setSelectedOptions(newSelected)
  }

  const scrollToForm = () => {
    document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-8 sm:py-12 bg-gray-50">
      <div className="container mx-auto px-3 sm:px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center mb-1 uppercase text-[#0a0a0a]">
          ОБЕРИ СВІЙ <span className="text-[#4CAF50]">ПОДАРУНОК</span>
        </h2>
        <p className="text-center text-gray-500 text-xs sm:text-sm mb-6">Сертифікат діє 1 рік</p>

        <div className="flex flex-col gap-4 max-w-sm mx-auto lg:max-w-5xl lg:flex-row lg:gap-6">
          {pricingData.map((block, blockIndex) => {
            const selectedOption = block.options[selectedOptions[blockIndex]]
            const savings = selectedOption.oldPrice - selectedOption.newPrice

            return (
              <Card
                key={block.title}
                className="flex-1 relative bg-white border border-gray-200 overflow-hidden shadow-sm rounded-2xl"
              >
                {/* Discount badge */}
                <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#FF6B00] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs font-bold">
                  -30%
                </div>

                <CardContent className="p-4 sm:p-5">
                  {/* Header - icon and title */}
                  <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className="p-2 sm:p-2.5 bg-[#FF6B00] rounded-xl text-white flex-shrink-0">{block.icon}</div>
                    <h3 className="text-lg sm:text-xl font-black text-[#0a0a0a]">{block.title}</h3>
                  </div>

                  {/* Duration toggle - compact */}
                  <div className="flex gap-2 mb-3 sm:mb-4">
                    {block.options.map((option, optionIndex) => (
                      <button
                        key={option.duration}
                        className={`flex-1 py-2 sm:py-2.5 px-2 rounded-full font-bold text-xs sm:text-sm transition-all ${
                          selectedOptions[blockIndex] === optionIndex
                            ? "bg-[#FF6B00] text-white shadow-md"
                            : "bg-gray-100 text-gray-600 active:bg-gray-200"
                        }`}
                        onClick={() => handleOptionChange(blockIndex, optionIndex)}
                      >
                        {option.duration}
                      </button>
                    ))}
                  </div>

                  {/* Price display - compact layout */}
                  <div className="bg-gray-50 rounded-xl p-3 sm:p-4 mb-3">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-gray-400 text-xs sm:text-sm">Стара ціна:</span>
                      <span className="text-base sm:text-lg text-gray-400 line-through font-bold">
                        {selectedOption.oldPrice} грн
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between">
                      <span className="text-[#4CAF50] font-bold text-xs sm:text-sm">НОВА ЦІНА:</span>
                      <span className="text-2xl sm:text-3xl font-black text-[#4CAF50]">
                        {selectedOption.newPrice} <span className="text-sm sm:text-lg font-bold">грн</span>
                      </span>
                    </div>
                  </div>

                  {/* Savings highlight - compact */}
                  <div className="flex items-center justify-center gap-1.5 bg-[#4CAF50]/10 py-1.5 sm:py-2 rounded-full mb-3">
                    <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#4CAF50]" />
                    <span className="text-[#4CAF50] font-bold text-xs sm:text-sm">Економія {savings} грн!</span>
                  </div>

                  {/* Order button */}
                  <Button
                    onClick={scrollToForm}
                    className="w-full bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-4 sm:py-5 text-sm sm:text-base rounded-xl active:scale-[0.98] transition-transform"
                  >
                    ЗАМОВИТИ
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Promo badges - compact */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#FF6B00]/10 text-[#FF6B00] rounded-full text-xs sm:text-sm font-bold">
            Акція до 31.12.2025
          </span>
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-[#4CAF50]/10 text-[#4CAF50] rounded-full text-xs sm:text-sm font-bold">
            Сертифікат діє 1 рік
          </span>
        </div>
      </div>
    </section>
  )
}
