import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-card/30 backdrop-blur-sm mt-20">
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-600">
              Kritika Sawhney
            </h3>
            <p className="text-muted-foreground">
            AI/ML enthusiast | MERN & Web3 dev | Building real-world solutions with code & care.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/KritikaSawhney"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/kritika-sawhney/"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:kritikasawhney1010@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/resume" className="text-muted-foreground hover:text-primary transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/designs" className="text-muted-foreground hover:text-primary transition-colors">
                  Designs
                </Link>
              </li>
              <li>
                <Link href="/achievements" className="text-muted-foreground hover:text-primary transition-colors">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Kritika Sawhney. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
