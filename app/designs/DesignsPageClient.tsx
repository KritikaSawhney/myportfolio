"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

interface Design {
  title: string
  description: string
  image: string
  link: string
}

export default function DesignsPageClient() {
  const designs: Design[] = [
    {
      title: "Glora – Organic Skincare Website UI",
      description: "A clean, modern and eco-conscious web interface for an organic skincare brand.",
      image: "/f1.png?height=600&width=300",
      link: "https://www.figma.com/proto/F6YyMfZvokjQHPhgwjamBr/green-nest?page-id=0%3A1&node-id=88-1084&viewport=-7162%2C428%2C0.16&t=cKHgU5aQcsQJDxEL-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=88%3A10985&show-proto-sidebar=1",
    },
    {
      title: "Luxe Lip Skincare – Premium Lip Care UI",
      description: "A minimal and elegant user interface for a luxurious lip care product line.",
      image: "/f2.png?height=600&width=300",
      link: "https://www.figma.com/proto/lSOObuGusaYDNdgU2fsZuc/luxe-lip--skin-care--Community-?page-id=0%3A1&node-id=2-3&starting-point-node-id=2%3A3&t=aUmfQaBR4wrdoNRu-1",
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce website with product filtering and cart functionality",
      image: "/f3.png?height=400&width=700",
      link: "https://github.com/KritikaSawhney/Eval-1",
    },
    {
      title: " Nike Dunk Low – Sneaker Product Showcase UI",
      description: "A bold and dynamic UI design focused on showcasing the iconic Nike Dunk Low sneakers.",
      image: "/f4.png?height=400&width=700",
      link: "https://www.figma.com/proto/hrKu5TWLP93MGowYs9WUJg/Nike-Responsive-screen?page-id=0%3A1&node-id=17-80&viewport=323%2C305%2C0.25&t=n0CcdLK4Yht7lH71-1&scaling=min-zoom&content-scaling=fixed",
    },
  ]

  return (
    <PageTransition>
      <div className="container px-4 py-20 mx-auto">
        <SectionHeading title="UI/UX Designs" subtitle="My design portfolio and prototypes" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {designs.map((design, index) => (
            <DesignCard key={index} design={design} />
          ))}
        </div>
      </div>
    </PageTransition>
  )
}

function DesignCard({ design }: { design: Design }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/50 hover:border-primary/50 transition-all">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={design.image || "/placeholder.svg"}
          alt={design.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button asChild variant="secondary" className="rounded-full">
            <Link href={design.link}>
              View Design <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-semibold">{design.title}</h3>
        <p className="text-sm text-muted-foreground">{design.description}</p>
      </div>
    </div>
  )
}
