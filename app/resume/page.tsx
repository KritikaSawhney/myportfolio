import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Download } from "lucide-react"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

export const metadata = {
  title: "Resume | Kritika Sawhney",
  description: "Professional resume of Kritika Sawhney",
}

export default function ResumePage() {
  return (
    <PageTransition>
      <div className="container px-4 py-20 mx-auto">
        <SectionHeading title="Resume" subtitle="My professional background and experience" />

        <div className="mt-16 flex flex-col items-center">
  <div className="w-full max-w-3xl">
    <div className="flex justify-center mb-8">
      <Button asChild className="rounded-full">
        <a href="/resume.pdf" download>
          <Download className="mr-2 h-4 w-4" />
          Download Resume
        </a>
      </Button>
    </div>
  </div>
</div>
      </div>
    </PageTransition>
  )
}
