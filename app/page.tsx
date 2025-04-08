import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-purple-400/20 rounded-full filter blur-3xl" />
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-pink-400/20 rounded-full filter blur-3xl" />

      <section className="container relative px-4 py-32 mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
                Kritika Sawhney
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
            AI/ML enthusiast, MERN & Web3 developer crafting impact-driven solutions with a focus on clean full-stack development and thoughtful user experiences.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/about">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        <div className="flex-1 relative">
          <div className="relative w-full aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background">
                <Image
                  src="/kritikahome.png
                  "
                  alt="Kritika Sawhney"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container px-4 pb-20">
        <div className="p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-border/50">
          <h2 className="text-xl font-semibold mb-4 text-center">Currently Contributing To</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <span className="text-purple-400 font-bold">G</span>
              </div>
              <span>GSSoC</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold">O</span>
              </div>
              <span>Open Source Chandigarh</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center">
                <span className="text-pink-400 font-bold">C</span>
              </div>
              <span>Web3 and Blockchain Projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
