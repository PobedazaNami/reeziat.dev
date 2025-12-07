"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Download, Send } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/language-context"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute right-[calc(15%-50px)] lg:right-[calc(20%-50px)] top-0 w-full lg:w-3/4 h-full overflow-hidden">
          <Image
            src="/images/avatar.png"
            alt=""
            fill
            className="object-contain object-right-bottom opacity-25 lg:opacity-40"
            priority
          />
          {/* Gradient overlays for smooth blend */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/50" />
          {/* Extra bottom fade to hide sharp edge */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-background via-background/90 to-transparent" />
        </div>
      </div>

      {/* Decorative elements */}
      {/* <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-3xl" /> */}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          <div className="flex flex-col gap-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-medium w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              {t("hero.available")}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
            {t("hero.greeting")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-primary/60">
              Oleksandr
            </span>
          </h1>

          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-muted-foreground font-medium">{t("hero.title")}</p>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-muted-foreground max-w-xl">
            <span
              dangerouslySetInnerHTML={{
                __html: t("hero.description").replace(/<span>/g, '<span class="text-foreground font-medium">'),
              }}
            />
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 rounded-full shadow-lg shadow-primary/25 group"
              asChild
            >
              <a href="#projects">
                {t("hero.viewWork")}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border text-foreground hover:bg-secondary bg-transparent rounded-full"
              asChild
            >
              <a href="#contact">
                <Download className="mr-2 h-4 w-4" />
                {t("hero.downloadCV")}
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-col gap-3">
            <span className="text-sm text-muted-foreground">{t("hero.findMe")}</span>
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://github.com/PobedazaNami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Linkedin className="h-4 w-4" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="mailto:anaitore32@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                <span className="hidden sm:inline">Email</span>
              </a>
              <a
                href="https://t.me/reeziat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                <Send className="h-4 w-4" />
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
