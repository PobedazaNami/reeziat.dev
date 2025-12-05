"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Bot, Globe, Video, ChevronLeft, ChevronRight, Eye, ChevronDown, Smartphone, Download } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    category: "Telegram Bots",
    items: [
      {
        title: "Psychologist Shop Bot",
        description:
          "Online store in Telegram for a psychologist: selling courses, calendars and affirmations. Automatic payments, delivery of materials, daily lessons — the client buys and receives everything without your involvement.",
        tech: ["Python", "aiogram 3", "LiqPay", "SQLAlchemy", "Docker"],
        icon: Bot,
        github: "https://github.com/PobedazaNami/psyholog-bot-telegram",
        demo: "https://t.me/saienkopsycholog_bot",
        image: "/images/photo_2025-12-04_19-37-27.jpg",
      },
      {
        title: "Sprache Motivator",
        description:
          "Language learning bot with AI: daily exercises in English or German, smart translator. Add friends and track each other's daily progress. Flexible schedule, topics, and task settings.",
        tech: ["Python", "aiogram 3", "OpenAI", "MongoDB", "Redis"],
        icon: Bot,
        github: "https://github.com/PobedazaNami/sprache_motivator",
        demo: "https://t.me/anaitmotivator_bot",
        image: "/images/photo_2025-12-04_19-39-23.jpg",
      },
      {
        title: "Kosak WohnungSucher",
        description:
          "Apartment hunting bot for Germany: scans Kleinanzeigen and Immowelt every 30 minutes and sends you new listings first. Set your filters once, get notifications before others — fewer competitors, more chances.",
        tech: ["Python", "aiogram 3", "MongoDB", "Docker", "Firecrawl"],
        icon: Bot,
        github: "",
        demo: "https://t.me/Kosak_WohnungSucher_Bot",
        image: "/images/photo_2025-12-04_19-40-39.jpg",
      },
      {
        title: "Perekladach",
        description:
          "German-Ukrainian translator bot with multiple modes: text translation, image OCR, voice messages, and German practice exercises (A2-B1). Save words to personal dictionary, multi-level caching for speed.",
        tech: ["Python", "python-telegram-bot", "OpenAI API", "MongoDB", "Redis", "Docker"],
        icon: Bot,
        github: "https://github.com/PobedazaNami/Perekladach_audio_image",
        demo: "",
        image: "/images/photo_2025-12-04_19-42-42.jpg",
      },
    ],
  },
  {
    category: "Web Development",
    items: [
      {
        title: "Landing Page Editor",
        description:
          "Visual editor for landing pages: edit text, images, video directly on the page. Upload ZIP, customize, download ready site with Telegram form integration.",
        tech: ["JavaScript", "PHP", "Docker", "Nginx"],
        icon: Globe,
        github: "",
        demo: "https://redaktor-lendingov.website/",
        image: "/images/photo_2025-12-04_18-24-18.jpg",
      },
      {
        title: "Kosak WohnungSucher Website",
        description:
          "Landing page for apartment hunting service in Germany: explains how the bot works, subscription plans, and quick start guide. Clean design for Ukrainian and Russian-speaking users.",
        tech: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"],
        icon: Globe,
        github: "",
        demo: "https://kosak-wohnungsucher.site/",
        image: "/images/photo_2025-12-04_18-29-27.jpg",
      },
      {
        title: "Reddit Poster",
        description:
          "Web app for automated Reddit posting: add your credentials, upload list of subreddits, titles and links — the bot posts for you. Real-time progress, logs, and stop button.",
        tech: ["Python", "Flask", "PRAW", "Redis", "Socket.IO"],
        icon: Globe,
        github: "",
        demo: "https://redditpulse.it.com/",
        video: "https://www.youtube.com/watch?v=fdH1PO07Hj4",
        image: "/images/photo_2025-12-04_19-29-35.jpg",
      },
    ],
  },
  {
    category: "Mobile Apps",
    items: [
      {
        title: "Glycemic Guide",
        description:
          "Mobile app for diabetics: search foods by glycemic index (GI) and glycemic load (GL). Add custom products, mark favorites, supports 4 languages. Helps make better food choices quickly.",
        tech: ["React Native", "Expo", "TypeScript", "i18next"],
        icon: Smartphone,
        github: "",
        demo: "",
        apk: "https://drive.google.com/file/d/1avqKphc_hUQ0dh7Ap1q_D-bLHux-qIrr/view?usp=sharing",
        image: "/images/photo_2025-12-04_18-57-18.jpg",
      },
    ],
  },
]

function StarfallButton({ children, className, asChild, ...props }: React.ComponentProps<typeof Button>) {
  // Если asChild, рендерим без кастомного эффекта звёзд
  if (asChild) {
    return (
      <Button className={`relative overflow-hidden group/btn ${className}`} asChild {...props}>
        {children}
      </Button>
    )
  }

  return (
    <Button className={`relative overflow-hidden group/btn ${className}`} {...props}>
      {/* Starfall background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-white/60 rounded-full animate-starfall"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${1.5 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
    </Button>
  )
}

function StarfallOutlineButton({ children, className, asChild, ...props }: React.ComponentProps<typeof Button>) {
  // Если asChild, рендерим без кастомного эффекта звёзд
  if (asChild) {
    return (
      <Button variant="outline" className={`relative overflow-hidden group/btn bg-transparent ${className}`} asChild {...props}>
        {children}
      </Button>
    )
  }

  return (
    <Button variant="outline" className={`relative overflow-hidden group/btn bg-transparent ${className}`} {...props}>
      {/* Starfall background with cyan stars */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-primary/60 rounded-full animate-starfall"
            style={{
              left: `${10 + i * 12}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${1.5 + Math.random() * 0.5}s`,
            }}
          />
        ))}
      </div>
      <span className="relative z-10 inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
    </Button>
  )
}

function ExpandableDescription({ text }: { text: string }) {
  const [expanded, setExpanded] = useState(false)
  const needsExpand = text.length > 120

  return (
    <div className="min-h-[72px] flex flex-col">
      <p
        className={`text-xs text-muted-foreground mt-1 transition-all duration-300 ${!expanded && needsExpand ? "line-clamp-3" : ""
          }`}
      >
        {text}
      </p>
      {needsExpand && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-primary hover:text-primary/80 inline-flex items-center gap-0.5 transition-colors mt-1 self-start"
        >
          {expanded ? "Show less" : "Read more"}
          <ChevronDown className={`h-3 w-3 transition-transform ${expanded ? "rotate-180" : ""}`} />
        </button>
      )}
    </div>
  )
}

function ProjectSlider({ items }: { items: (typeof projects)[0]["items"] }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const cardWidth = 320
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      setTimeout(checkScroll, 300)
    }
  }

  return (
    <div className="relative group/slider">
      {/* Navigation arrows */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-primary/90"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-primary/90"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      )}

      {/* Scrollable container */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {items.map((project) => (
          <Card
            key={project.title}
            className="flex-shrink-0 w-[300px] bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden group"
          >
            {/* Image with overlay */}
            <div className="relative h-44 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />

              {/* Tech badges on image */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 max-w-[90%]">
                {project.tech.slice(0, 2).map((t) => (
                  <Badge key={t} className="text-[10px] bg-background/80 backdrop-blur-sm text-foreground border-0">
                    {t}
                  </Badge>
                ))}
                {project.tech.length > 2 && (
                  <Badge className="text-[10px] bg-background/80 backdrop-blur-sm text-foreground border-0">
                    +{project.tech.length - 2}
                  </Badge>
                )}
              </div>
            </div>

            {/* Content */}
            <CardContent className="p-4 flex flex-col h-[180px]">
              <div className="flex items-start gap-3 flex-1">
                <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                  <project.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground leading-tight line-clamp-2 min-h-[2.5rem]">{project.title}</h4>
                  <ExpandableDescription text={project.description} />
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex gap-2 pt-2 h-9 mt-auto">
                {project.demo && (
                  <StarfallButton size="sm" className="flex-1 h-9" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <Eye className="h-4 w-4 shrink-0" />
                      <span>View Project</span>
                    </a>
                  </StarfallButton>
                )}
                {(project as any).video && (
                  <StarfallOutlineButton size="sm" className="flex-1 h-9" asChild>
                    <a
                      href={(project as any).video}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <Video className="h-4 w-4 shrink-0" />
                      <span>Watch Demo</span>
                    </a>
                  </StarfallOutlineButton>
                )}
                {project.github && (
                  <StarfallOutlineButton size="sm" className={`${project.demo || (project as any).video ? "w-9 px-0" : "flex-1"} h-9`} asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <Github className="h-4 w-4 shrink-0" />
                      {!project.demo && !(project as any).video && <span>Source Code</span>}
                    </a>
                  </StarfallOutlineButton>
                )}
                {(project as any).apk && (
                  <StarfallButton size="sm" className="flex-1 h-9" asChild>
                    <a
                      href={(project as any).apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2"
                    >
                      <Download className="h-4 w-4 shrink-0" />
                      <span>Download APK</span>
                    </a>
                  </StarfallButton>
                )}
                {!project.demo && !project.github && !(project as any).apk && !(project as any).video && (
                  <StarfallOutlineButton size="sm" className="flex-1 h-9" disabled>
                    <ExternalLink className="h-4 w-4 shrink-0" />
                    <span>Coming Soon</span>
                  </StarfallOutlineButton>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Scroll indicator dots */}
      <div className="flex justify-center gap-1.5 mt-4">
        {items.map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
        ))}
      </div>
    </div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Projects</h2>
            <p className="mt-2 text-3xl font-bold text-foreground">Featured Work</p>
            <p className="mt-2 text-muted-foreground max-w-xl">
              A selection of projects showcasing my work with bots, AI, and web development.
            </p>
          </div>
          <Button variant="outline" className="bg-transparent w-fit" asChild>
            <a href="https://github.com/PobedazaNami/" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View All on GitHub
            </a>
          </Button>
        </div>

        {/* Categories with sliders */}
        <div className="space-y-12">
          {projects.map((category) => (
            <div key={category.category}>
              <div className="flex items-center gap-3 mb-6">
                <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
                <Badge variant="secondary" className="bg-primary/10 text-primary border-0">
                  {category.items.length} projects
                </Badge>
              </div>
              <ProjectSlider items={category.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
