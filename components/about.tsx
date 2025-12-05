"use client"

import { MapPin, Languages, Target } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

export function About() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "About",
      p1: "I build commercial websites, Telegram bots, and automation systems that solve real business challenges. I work with Python, modern web technologies, and integrations.",
      p2: "My experience in marketing and IT support helps me create not just code, but tools that actually work, reduce manual effort, and deliver results.",
      location: "Location",
      locationValue: "Weiterstadt, Germany",
      languages: "Languages",
      languagesValue: "German (B2), English, Ukrainian, Russian",
      focus: "Focus",
      focusValue: "Automation & AI Integration",
    },
    ua: {
      title: "Про мене",
      p1: "Я створюю комерційні сайти, Telegram-боти та системи автоматизації, які закривають реальні бізнес-задачі. Працюю з Python, сучасними веб-технологіями та інтеграціями.",
      p2: "Мій досвід у маркетингу та IT-підтримці допомагає робити не просто код, а інструменти, які реально працюють, зменшують ручну роботу і приносять результат.",
      location: "Локація",
      locationValue: "Вайтерштадт, Німеччина",
      languages: "Мови",
      languagesValue: "Німецька (B2), Англійська, Українська, Російська",
      focus: "Фокус",
      focusValue: "Автоматизація & ШІ Інтеграція",
    },
  }

  const t = content[language]

  return (
    <section id="about" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">{t.title}</h2>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg leading-relaxed text-foreground">
              {t.p1}
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              {t.p2}
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{t.location}</p>
                  <p className="text-muted-foreground">{t.locationValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Languages className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{t.languages}</p>
                  <p className="text-muted-foreground">{t.languagesValue}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Target className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium text-foreground">{t.focus}</p>
                  <p className="text-muted-foreground">{t.focusValue}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
