import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wider">Contact</h2>
            <p className="mt-4 text-2xl font-semibold text-foreground">{"Let's work together"}</p>
            <p className="mt-2 text-muted-foreground">
              Interested in collaboration or have a project in mind? Feel free to reach out.
            </p>
          </div>

          <div className="lg:col-span-2">
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
                      <div className="space-y-4">
                        <a
                          href="mailto:anaitore32@gmail.com"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Mail className="h-5 w-5 text-primary" />
                          anaitore32@gmail.com
                        </a>
                        <a
                          href="tel:+491604526050"
                          className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Phone className="h-5 w-5 text-primary" />
                          +49 160 4526050
                        </a>
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <MapPin className="h-5 w-5 text-primary" />
                          Weiterstadt, Germany
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Social</h3>
                      <div className="flex gap-4">
                        <a
                          href="https://github.com/PobedazaNami/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                        <a
                          href="https://linkedin.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                        <a
                          href="https://t.me/reeziat"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center w-10 h-10 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors"
                        >
                          <Send className="h-5 w-5" />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">Available For</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Telegram Bot Development</li>
                        <li>• Python Automation Projects</li>
                        <li>• AI Integration Solutions</li>
                        <li>• Web Development (WordPress/Custom)</li>
                        <li>• Full-time Employment</li>
                      </ul>
                    </div>

                    <Button
                      size="lg"
                      className="mt-6 bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto"
                      asChild
                    >
                      <a href="mailto:anaitore32@gmail.com">
                        <Mail className="mr-2 h-4 w-4" />
                        Send Email
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
