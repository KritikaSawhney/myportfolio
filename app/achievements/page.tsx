import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Award, Medal, Trophy } from "lucide-react"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

export const metadata = {
  title: "Achievements | Kritika Sawhney",
  description: "Awards and achievements of Kritika Sawhney",
}

export default function AchievementsPage() {
  const achievements = [
    {
      title: "BuildWithIndia , Google Gurugram.",
      description: "National Grand Finalists out of 25,000+ participants.",
      date: "2025",
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
      image: "/p1.png?height=900&width=900",
    },
    {
      title: "HackWithHer Runner-Up",
      description: "Second place aand  Rs.10,000 in women-focused hackathon for health tech solution.",
      date: "2025",
      icon: <Medal className="h-6 w-6 text-silver-400" />,
      image: "/p2.png?height=400&width=600",
    },
    {
      title: "MUN Award",
      description: "Best Delegate award at Model United Nations conference",
      date: "2024",
      icon: <Award className="h-6 w-6 text-blue-400" />,
      image: "/p3.png?height=400&width=600",
    },
    {
      title: "Poetry Competition Winner",
      description: "First place in poetry writing competition",
      date: "2023",
      icon: <Award className="h-6 w-6 text-purple-400" />,
      image: "/p4.png?height=400&width=600",
    },
  ]

  return (
    <PageTransition>
      <div className="container px-4 py-20 mx-auto">
        <SectionHeading title="Achievements" subtitle="Awards and recognition" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all overflow-hidden"
            >
             <div className="relative h-96 w-full">
  <Image
    src={achievement.image || "/placeholder.svg"}
    alt={achievement.title}
    fill
    className="object-cover rounded-t-md"
    sizes="100vw"
    priority
  />

                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  {achievement.icon}
                  <span className="font-semibold">{achievement.date}</span>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle>{achievement.title}</CardTitle>
                <CardDescription>{achievement.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground">
                This milestone reflects my commitment to pushing boundaries , Onwards and Upwards!!
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Academic Excellence</CardTitle>
              <CardDescription>Consistent performance in academic pursuits</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-purple-400"></span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">B.E. in Computer Science and Engineering</h3>
                    <p className="text-muted-foreground">Chitkara University</p>
                  </div>
                </div>

               
                  

                
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Open Source Contributions</CardTitle>
              <CardDescription>Active participation in open source communities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">GSSoC'24 (GirlScript Summer of Code)</h3>
                  <p className="text-muted-foreground">
                    Active contributor to multiple open-source projects, helping to improve documentation, fix bugs, and
                    implement new features. Recognized for quality contributions and collaborative approach.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <span className="text-purple-400 font-bold">G</span>
                    </div>
                    <span>Mentorship Program</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Open Source Chandigarh</h3>
                  <p className="text-muted-foreground">
                   Organiser and contributor to local open-source initiatives. Participated in code sprints,
                    mentoring sessions, and community events to promote open-source development in the region.
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-400 font-bold">O</span>
                    </div>
                    <span>Organising Executive</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageTransition>
  )
}
