import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Projects | Kritika Sawhney",
  description: "Portfolio of projects by Kritika Sawhney",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
