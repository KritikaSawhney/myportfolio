import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"
import { Code, Database, Figma, Globe, Layers, Sparkles } from "lucide-react"

export const metadata = {
  title: "Skills | Kritika Sawhney",
  description: "Technical skills and expertise of Kritika Sawhney",
}

export default function SkillsPage() {
  const languages = [
    { name: "C/C++", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "Java", level: "Intermediate" },
  ]

  const frameworks = [
    { name: "React.js", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "Express.js", level: "Advanced" },
    { name: "Next.js", level: "Advanced" },
    { name: "PDF.js", level: "Intermediate" },
    { name: "Figma", level: "Advanced" },
  ]

  const concepts = [
    { name: "AI/ML", level: "Advanced" },
    { name: "Sentiment Analysis", level: "Intermediate" },
    { name: "DeFi", level: "Intermediate" },
    { name: "Smart Contracts", level: "Intermediate" },
    { name: "API Integration", level: "Advanced" },
    { name: "Git/GitHub", level: "Advanced" },
  ]

  return (
    <PageTransition>
      <div className="container px-4 py-20 mx-auto">
        <SectionHeading title="Technical Skills" subtitle="My expertise and capabilities" />

        <div className="mt-16 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Code className="h-5 w-5 text-blue-400" />
                  </div>
                  <CardTitle>Languages</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <Badge key={language.name} variant="secondary" className="px-3 py-1">
                      {language.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {languages.map((language) => (
                    <div key={language.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{language.name}</span>
                        <span className="text-muted-foreground">{language.level}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                          style={{
                            width:
                              language.level === "Advanced" ? "90%" : language.level === "Intermediate" ? "70%" : "50%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Layers className="h-5 w-5 text-purple-400" />
                  </div>
                  <CardTitle>Frameworks & Tools</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {frameworks.map((framework) => (
                    <Badge key={framework.name} variant="secondary" className="px-3 py-1">
                      {framework.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {frameworks.slice(0, 4).map((framework) => (
                    <div key={framework.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{framework.name}</span>
                        <span className="text-muted-foreground">{framework.level}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-400 to-purple-600 rounded-full"
                          style={{
                            width:
                              framework.level === "Advanced"
                                ? "90%"
                                : framework.level === "Intermediate"
                                  ? "70%"
                                  : "50%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-pink-400" />
                  </div>
                  <CardTitle>Concepts</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {concepts.map((concept) => (
                    <Badge key={concept.name} variant="secondary" className="px-3 py-1">
                      {concept.name}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 space-y-4">
                  {concepts.slice(0, 4).map((concept) => (
                    <div key={concept.name} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>{concept.name}</span>
                        <span className="text-muted-foreground">{concept.level}</span>
                      </div>
                      <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full"
                          style={{
                            width:
                              concept.level === "Advanced" ? "90%" : concept.level === "Intermediate" ? "70%" : "50%",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mb-4">
                <Globe className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Web3 & Blockchain Development</h3>
              <p className="text-muted-foreground">
              Building decentralized applications (dApps) and smart contracts using blockchain technologies.           </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                <Sparkles className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI & Machine Learning</h3>
              <p className="text-muted-foreground">
                Developing intelligent systems and models for data analysis and prediction.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                <Figma className="h-8 w-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground">
                Creating intuitive and visually appealing user interfaces and experiences.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                <Database className="h-8 w-8 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground">
                Building robust server-side applications and APIs with Node.js and Express.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
