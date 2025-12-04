"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle, User, Phone } from "lucide-react"

export function ContactForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { name, phone })
    setIsSubmitted(true)
  }

  return (
    <section id="form" className="relative py-12 sm:py-16 bg-gradient-to-b from-gray-100 to-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl sm:text-3xl font-black text-center mb-2 uppercase">
            <span className="text-[#FF6B00]">ЗАМОВИТИ </span>
            <span className="text-[#0a0a0a]">СЕРТИФІКАТ</span>
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">Залиште контакти - ми зателефонуємо</p>

          <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-[#4CAF50]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-[#4CAF50]" />
                </div>
                <h3 className="text-xl font-bold text-[#4CAF50] mb-2">ДЯКУЄМО!</h3>
                <p className="text-gray-500 text-sm">Ми зв&apos;яжемось з вами найближчим часом!</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-gray-700 font-medium text-sm flex items-center gap-2">
                    <User className="w-4 h-4 text-[#4CAF50]" />
                    Ваше ім&apos;я
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Введіть ім'я"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-12 bg-gray-50 border-gray-200 text-[#0a0a0a] text-base placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-[#4CAF50]/20 rounded-xl"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-gray-700 font-medium text-sm flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#4CAF50]" />
                    Телефон
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+380 XX XXX XX XX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="h-12 bg-gray-50 border-gray-200 text-[#0a0a0a] text-base placeholder:text-gray-400 focus:border-[#4CAF50] focus:ring-[#4CAF50]/20 rounded-xl"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-14 bg-[#FF6B00] hover:bg-[#ff8533] text-white text-base font-bold rounded-xl active:scale-[0.98] transition-transform mt-2"
                >
                  <Send className="w-5 h-5 mr-2" />
                  НАДІСЛАТИ ЗАЯВКУ
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
