import type { Metadata } from "next"
import DesignsPageClient from "./DesignsPageClient"

export const metadata: Metadata = {
  title: "Designs | Kritika Sawhney",
  description: "UI/UX design portfolio of Kritika Sawhney",
}

export default function DesignsPage() {
  return <DesignsPageClient />
}
