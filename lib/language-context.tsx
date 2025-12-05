"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Language = "en" | "ua"

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Header
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.contact": "Contact",
        "nav.hireMe": "Hire Me",

        // Hero
        "hero.available": "Available for new projects",
        "hero.newYear": "Happy New Year 2025!",
        "hero.greeting": "Hi, I'm",
        "hero.title": "Web & Telegram Bot Developer | Python & Automation",
        "hero.description": "I build modern websites, <span>Telegram bots</span>, and <span>automated systems</span> with Python. Combining technical skills with marketing experience, my solutions don't just work — they help <span>businesses earn more</span>.",
        "hero.viewWork": "View My Work",
        "hero.downloadCV": "Download CV",
        "hero.findMe": "Find me on:",

        // About
        "about.title": "About Me",
        "about.subtitle": "Python developer with a passion for automation and AI",
        "about.description1": "I'm a Python developer based in Germany, specializing in building automation tools, Telegram bots, and AI-powered solutions. With experience in web development and API integrations, I help businesses streamline their processes and create efficient systems.",
        "about.description2": "My focus is on creating practical solutions that solve real-world problems - from automated content pipelines to custom CRM integrations.",
        "about.location": "Location",
        "about.locationValue": "Germany",
        "about.experience": "Experience",
        "about.experienceValue": "3+ Years",
        "about.focus": "Focus",
        "about.focusValue": "Automation & AI",

        // Skills
        "skills.title": "Skills & Technologies",
        "skills.subtitle": "Technologies I work with",

        // Projects
        "projects.title": "Projects",
        "projects.subtitle": "Featured Work",
        "projects.description": "A selection of projects showcasing my expertise in Python development, automation, and web solutions.",
        "projects.viewAll": "View All Projects",
        "projects.viewGithub": "View on GitHub",

        // Contact
        "contact.title": "Get In Touch",
        "contact.subtitle": "Let's work together",
        "contact.description": "Have a project in mind? Let's discuss how I can help you build efficient automation solutions.",
        "contact.email": "Email",
        "contact.location": "Location",
        "contact.social": "Social",
        "contact.sendMessage": "Send Message",
        "contact.name": "Name",
        "contact.message": "Message",

        // Footer
        "footer.rights": "All rights reserved.",
        "footer.built": "Built with Next.js & Tailwind CSS",
    },
    ua: {
        // Header
        "nav.about": "Про мене",
        "nav.skills": "Навички",
        "nav.projects": "Проєкти",
        "nav.contact": "Контакти",
        "nav.hireMe": "Найняти",

        // Hero
        "hero.available": "Відкритий для нових проєктів",
        "hero.newYear": "З Новим 2025 Роком!",
        "hero.greeting": "Привіт, я",
        "hero.title": "Розробник веб-сайтів та Telegram-ботів | Python & Автоматизація",
        "hero.description": "Створюю сучасні сайти, <span>Telegram-боти</span> та <span>автоматизовані системи</span> на Python. Поєдную технічні навички з досвідом у маркетингу, тому мої рішення не лише працюють — вони допомагають <span>бізнесу заробляти більше</span>.",
        "hero.viewWork": "Мої роботи",
        "hero.downloadCV": "Завантажити CV",
        "hero.findMe": "Знайти мене:",

        // About
        "about.title": "Про мене",
        "about.subtitle": "Python розробник із пристрастю до автоматизації та ШІ",
        "about.description1": "Я Python розробник з Німеччини, спеціалізуюся на створенні інструментів автоматизації, Telegram ботів та AI-рішень. Маючи досвід у веб-розробці та API інтеграціях, я допомагаю бізнесу оптимізувати процеси та створювати ефективні системи.",
        "about.description2": "Мій фокус — створення практичних рішень, що вирішують реальні проблеми — від автоматизованих контент-пайплайнів до кастомних CRM інтеграцій.",
        "about.location": "Локація",
        "about.locationValue": "Німеччина",
        "about.experience": "Досвід",
        "about.experienceValue": "3+ Роки",
        "about.focus": "Фокус",
        "about.focusValue": "Автоматизація & ШІ",

        // Skills
        "skills.title": "Навички & Технології",
        "skills.subtitle": "Технології, з якими я працюю",

        // Projects
        "projects.title": "Проєкти",
        "projects.subtitle": "Вибрані роботи",
        "projects.description": "Добірка проєктів, що демонструють мою експертизу в Python розробці, автоматизації та веб-рішеннях.",
        "projects.viewAll": "Всі проєкти",
        "projects.viewGithub": "Переглянути на GitHub",

        // Contact
        "contact.title": "Зв'язатися",
        "contact.subtitle": "Давайте працювати разом",
        "contact.description": "Маєте проєкт? Давайте обговоримо, як я можу допомогти вам створити ефективні рішення автоматизації.",
        "contact.email": "Email",
        "contact.location": "Локація",
        "contact.social": "Соцмережі",
        "contact.sendMessage": "Надіслати",
        "contact.name": "Ім'я",
        "contact.message": "Повідомлення",

        // Footer
        "footer.rights": "Всі права захищено.",
        "footer.built": "Створено з Next.js & Tailwind CSS",
    },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en")

    useEffect(() => {
        const saved = localStorage.getItem("language") as Language
        if (saved && (saved === "en" || saved === "ua")) {
            setLanguageState(saved)
        }
    }, [])

    const setLanguage = (lang: Language) => {
        setLanguageState(lang)
        localStorage.setItem("language", lang)
    }

    const t = (key: string): string => {
        return translations[language][key] || key
    }

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider")
    }
    return context
}
