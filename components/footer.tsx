import Image from "next/image"
import { Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* Logo */}
          <div className="relative h-16 w-16">
            <Image src="/images/img-3478.png" alt="KVADRO:DNEPR Logo" fill className="object-contain" />
          </div>

          {/* Brand name */}
          <h3 className="text-xl font-black tracking-tight">
            <span className="text-[#4CAF50]">KVADRO</span>
            <span className="text-white">:</span>
            <span className="text-[#FF6B00]">DNEPR</span>
          </h3>

          {/* Social links - larger touch targets */}
          <div className="flex gap-3">
            <a
              href="#"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white active:bg-[#4CAF50] transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="tel:+380"
              className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white active:bg-[#FF6B00] transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-gray-600">© 2025 KVADRO:DNEPR</p>
        </div>
      </div>
    </footer>
  )
}
