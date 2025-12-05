"use client"

import Link from "next/link"
import { Code2, Github, Linkedin, Mail, Send } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function Footer() {
  const { language } = useLanguage()

  const navigation = language === "en"
    ? [
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Projects", href: "#projects" },
      { name: "Contact", href: "#contact" },
    ]
    : [
      { name: "Про мене", href: "#about" },
      { name: "Навички", href: "#skills" },
      { name: "Проєкти", href: "#projects" },
      { name: "Контакти", href: "#contact" },
    ]

  const description = language === "en"
    ? "Python Developer & Automation Specialist based in Germany."
    : "Python Розробник & Спеціаліст з Автоматизації в Німеччині."

  const copyright = language === "en"
    ? `© ${new Date().getFullYear()} Oleksandr Neziat. Built with Next.js & Tailwind CSS.`
    : `© ${new Date().getFullYear()} Олександр Незят. Створено з Next.js & Tailwind CSS.`

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">Oleksandr Neziat</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              {description}
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PobedazaNami/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://t.me/reeziat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Send className="h-5 w-5" />
              <span className="sr-only">Telegram</span>
            </a>
            <a
              href="mailto:anaitore32@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
