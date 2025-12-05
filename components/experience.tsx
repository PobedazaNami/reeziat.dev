const experience = [
  {
    period: "2024 — 2025",
    title: "IT Supporter & Server Administrator",
    company: "Arc Media Team",
    location: "Kyiv, Ukraine (Remote)",
    description:
      "Server maintenance, status monitoring, and technical support for CRM systems. Handled troubleshooting and system optimization.",
    skills: ["Server Administration", "CRM Support", "Technical Support"],
  },
  {
    period: "2020 — 2021",
    title: "Online Marketing Specialist",
    company: "7leads",
    location: "Kyiv, Ukraine",
    description:
      "Planned and executed online advertising campaigns on Facebook and Instagram. Created video, photo, and text content for social media. Analyzed and optimized campaign performance.",
    skills: ["Facebook Ads", "Instagram", "Content Creation", "Analytics"],
  },
]

const education = [
  {
    period: "2023 — Present",
    title: "Self-Study: IT Technologies & Programming",
    description:
      "Focused learning in Python, web development, AI tools, and automation. Building projects with Flask, MongoDB, Docker, and AI APIs.",
  },
  {
    period: "2007 — 2011",
    title: "Diploma in Mechanical Engineering",
    institution: "Zaporizhzhia Hydro-Energy College",
    description: "Technical foundation in engineering principles and systematic problem-solving.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Experience</h2>
            <p className="mt-4 text-muted-foreground">
              Professional background in IT, marketing, and continuous self-development.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-8">Work Experience</h3>
              <div className="space-y-8">
                {experience.map((item) => (
                  <div key={item.title} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <p className="text-sm text-muted-foreground w-32 shrink-0 font-mono">{item.period}</p>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-primary text-sm mt-0.5">
                          {item.company} · {item.location}
                        </p>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {item.skills.map((skill) => (
                            <span
                              key={skill}
                              className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-8">Education</h3>
              <div className="space-y-8">
                {education.map((item) => (
                  <div key={item.title} className="group">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                      <p className="text-sm text-muted-foreground w-32 shrink-0 font-mono">{item.period}</p>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h4>
                        {item.institution && <p className="text-primary text-sm mt-0.5">{item.institution}</p>}
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
