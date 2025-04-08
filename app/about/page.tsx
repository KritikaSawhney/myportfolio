import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

export const metadata = {
  title: "About Me | Kritika Sawhney",
  description: "Learn more about Kritika Sawhney, a passionate Software Developer with a focus on AI, blockchain, and impact-driven technology.",
}

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="container px-4 py-20 mx-auto">
        <SectionHeading title="About Me" subtitle="Get to know me better" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-pink-400/20 rounded-full filter blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400/20 rounded-full filter blur-xl" />

            <div className="relative rounded-2xl overflow-hidden border border-border/50 aspect-square max-w-md mx-auto">
              <Image src="/aboutme.png" alt="Kritika Sawhney" fill className="object-cover" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Kritika Sawhney</h2>
              <p className="text-xl text-muted-foreground">B.E. in Computer Science and Engineering</p>
              <p className="text-muted-foreground">Chitkara University</p>
            </div>

            <div className="space-y-4">
              <p>
              I'm an tech enthusiast who loves solving real-world problems using technology. I work across blockchain, Web3, front-end, and back-end development, crafting intuitive and engaging experiences. With a strong grip on UI/UX design using Figma, I aim to build products that are both smart and user-friendly.

       </p>
            
              I build full-stack applications powered by blockchain and Web3 technologies, from smart contracts to seamless user interfaces.

              <p>
              </p>

              <p>
                I believe in the power of open-source collaboration and actively contribute to communities like GSSoC'24, WWDC'25, Open Source Chandigarh and currently planning to contribute in GSOC'25. These experiences have taught me the value of teamwork, communication, and
                continuous learning.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Button asChild className="rounded-full">
                <Link href="/skills">
                  View My Skills <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-semibold mb-3">Education</h3>
              <p className="text-muted-foreground">
                Currently pursuing B.E. in Computer Science Engineering with a CGPA of 9.0 at Chitkara University.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-semibold mb-3">Open Source</h3>
              <p className="text-muted-foreground">
                Active contributor to GSSoC and Open Source Chandigarh, collaborating on various projects and
                initiatives.
              </p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all">
              <h3 className="text-xl font-semibold mb-3">Interests</h3>
              <p className="text-muted-foreground">
              Passionate about MERN stack, Web3, and blockchain technologies — driven to build impactful solutions for real-world challenges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
