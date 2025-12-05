import { Badge } from "@/components/ui/badge"

const skills = {
  languages: ["Python", "JavaScript", "TypeScript", "PHP", "HTML", "CSS"],
  frameworks: ["Next.js", "React", "React Native", "Expo", "Flask", "aiogram 3", "Tailwind CSS", "shadcn/ui", "Filament", "WordPress", "Elementor", "Shopify"],
  databases: ["MongoDB", "Redis", "SQLAlchemy"],
  devops: ["Docker", "Nginx", "Linux", "Windows Server"],
  ai: ["OpenAI API", "GitHub Copilot", "Firecrawl", "OpenCV", "YOLOv8", "v0.dev"],
  apis: ["Telegram API", "Reddit API", "REST APIs"],
  tools: ["Git", "BeautifulSoup", "CRM Systems", "Server Administration"],
}

export function TechStack() {
  return (
    <section id="skills" className="py-20 lg:py-32 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Skills</h2>
            <p className="mt-4 text-muted-foreground">Technologies and tools I work with to build modern solutions.</p>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <SkillCategory title="Languages" skills={skills.languages} />
            <SkillCategory title="Frameworks & Platforms" skills={skills.frameworks} />
            <SkillCategory title="Databases" skills={skills.databases} />
            <SkillCategory title="DevOps & Systems" skills={skills.devops} />
            <SkillCategory title="AI & Machine Learning" skills={skills.ai} />
            <SkillCategory title="APIs & Integrations" skills={skills.apis} />
            <SkillCategory title="Tools & Administration" skills={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-muted-foreground mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-3 py-1"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  )
}
