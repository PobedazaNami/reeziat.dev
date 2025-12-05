"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Code2, ChevronRight, Globe } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const navigation = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      const sections = ["about", "skills", "projects", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ua" : "en")
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-background/60 backdrop-blur-2xl border-b border-primary/10 shadow-lg shadow-primary/5"
        : "bg-transparent"
        }`}
    >
      {/* 🎄 New Year Garland */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500 via-green-500 via-red-500 via-green-500 to-red-500 opacity-60" />
      <div className="absolute top-0 left-0 right-0 flex justify-around text-xs pointer-events-none">
        {["✨", "🎄", "⭐", "🎅", "❄️", "🎁", "✨", "🎄", "⭐", "❄️"].map((emoji, i) => (
          <span key={i} className="animate-bounce" style={{ animationDelay: `${i * 0.1}s`, animationDuration: "2s" }}>
            {emoji}
          </span>
        ))}
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 group-hover:border-primary/40 transition-all overflow-hidden">
              <Code2 className="h-5 w-5 text-primary relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground leading-tight">
                Oleksandr<span className="text-primary">.</span>dev
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">&lt;Python Developer /&gt;</span>
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden gap-2">
          {/* Language Switcher Mobile */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border border-border/50"
          >
            {language === "en" ? "🇺🇦 UA" : "🇬🇧 EN"}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-xl p-2.5 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-1 bg-secondary/30 backdrop-blur-sm rounded-full px-2 py-1.5 border border-border/50">
          {navigation.map((item) => {
            const isActive = activeSection === item.href.slice(1)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all rounded-full ${isActive
                  ? "text-primary-foreground bg-primary shadow-md shadow-primary/30"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-3 lg:items-center">
          {/* Language Switcher Desktop */}
          <button
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors border border-border/50"
          >
            <Globe className="h-4 w-4" />
            {language === "en" ? "UA" : "EN"}
          </button>
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 rounded-full px-6 group"
          >
            <a href="mailto:anaitore32@gmail.com">
              {t("nav.hireMe")}
              <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </Button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border/50">
          <div className="space-y-1 px-6 pb-6 pt-4 bg-background/95 backdrop-blur-xl">
            {navigation.map((item) => {
              const isActive = activeSection === item.href.slice(1)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors ${isActive
                    ? "text-primary-foreground bg-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                  <ChevronRight className="h-4 w-4" />
                </Link>
              )
            })}
            <div className="mt-4 pt-4 border-t border-border/50">
              <Button
                asChild
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-full"
              >
                <a href="mailto:anaitore32@gmail.com">{t("nav.hireMe")}</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
