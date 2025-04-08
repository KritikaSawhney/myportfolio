"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github } from "lucide-react"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

export default function ProjectsPageClient() {
  const projects = [
    {
      title: "Aptos Max",
      description: "AI crypto trading bot using Twitter API, Gemini AI, and Move smart contracts",
      image: "/w1.png",
      tags: ["AI", "Crypto", "Twitter API", "Gemini AI", "Move"],
      github: "https://github.com/KritikaSawhney/BugSlayers",
      demo: "https://github.com/KritikaSawhney/BugSlayers",
    },
    {
      title: "Sakhi-Junction",
      description: "AI wellness tracker for women with JWT-secured backend and OpenAI API",
      image: "/w2.png",
      tags: ["AI", "Wellness", "JWT", "OpenAI API", "React"],
      github: "https://github.com/KritikaSawhney/she-codes",
      demo: "she-codes-one.vercel.app",
    },
    {
      title: "PDF Chat Assistant",
      description: "AI-powered PDF chatbot using NVIDIA NIM and document parsing",
      image: "/w3.png",
      tags: ["AI", "PDF.js", "NVIDIA NIM", "Document Parsing", "Chatbot"],
      github: "https://github.com/KritikaSawhney/pdf-chat-ai",
      demo: "https://github.com/KritikaSawhney/pdf-chat-ai",
    },
  ]
  
  return (
    <PageTransition>
      <div className="container px-4 py-20 mx-auto">
        <SectionHeading title="Winning Projects" subtitle="My recent work and contributions" />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="px-2 py-0.5">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex justify-between">
  <Button asChild variant="ghost" size="sm">
    <Link href={project.github}>
      <Github className="mr-2 h-4 w-4" />
      Code
    </Link>
  </Button>
  <Button asChild size="sm">
    <Link href={project.demo}>
      Live Demo
      <ArrowUpRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
</CardFooter>

            </Card>
          ))}
        </div>

        <div className="mt-16">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Project Details</CardTitle>
              <CardDescription>In-depth look at my featured projects</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Aptos Max (Google Hackathon Winner, Google Gurugram.)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="text-muted-foreground mb-4">
                      An AI-powered crypto trading bot that leverages Twitter sentiment analysis using the Twitter API
                      and Gemini AI to make informed trading decisions on the Aptos blockchain through Move smart
                      contracts.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold">Key Features:</span>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Real-time Twitter sentiment analysis</li>
                          <li>AI-powered trading strategy optimization</li>
                          <li>Secure Move smart contracts for transaction execution</li>
                          <li>User-friendly dashboard for monitoring performance</li>
                        </ul>
                      </div>
                      <div>
                        <span className="font-semibold">Technologies Used:</span>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Twitter API for data collection</li>
                          <li>Gemini AI for sentiment analysis and prediction</li>
                          <li>Move programming language for smart contracts</li>
                          <li>React.js for frontend interface</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-48 md:h-auto">
                    <Image
                      src="/w1.png?height=300&width=300"
                      alt="Aptos Max Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sakhi-Junction (2nd Runner up & Rs.10,000 Amazon Giftcards at HackWithHer Hackathon) </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="text-muted-foreground mb-4">
                    AI-powered wellness tracker for women, featuring a JWT-secured backend and OpenAI integration for personalized support and smart health insights.                    </p>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold">Key Features:</span>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Community Feed & Anonymous Chat - A safe space to connect.
                          </li>
                          <li>Menstrual & Symptom Tracker - Because health matters.</li>
                          <li>AI-powered recommendations based on user data</li>
                          <li>Her-Voice Self-Care - Personalized motivational messages.</li>
                          <li>Sakhi Chatbot - Al smart guidance & assistance.</li>
                        </ul>
                      </div>
                      <div>
                        <span className="font-semibold">Technologies Used:</span>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>React.js for frontend interface</li>
                          <li>Node.js and Express.js for backend</li>
                          <li>JWT for secure authentication</li>
                          <li>OpenAI API for personalized insights</li>
                          <li>MongoDB for data storage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-48 md:h-auto">
                    <Image
                      src="/w2.png?height=300&width=300"
                      alt="Sakhi-Junction Project"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">PDF Chat Assistant (Codathon, Chitkara University)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="col-span-2">
                    <p className="text-muted-foreground mb-4">
                      An AI-powered PDF chatbot that uses NVIDIA NIM for natural language processing and document
                      parsing to enable interactive conversations with PDF documents.
                    </p>
                    <div className="space-y-2">
                      <div>
                        <span className="font-semibold">Key Features:</span>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>Intelligent document parsing and understanding</li>
                          <li>Natural language conversation with PDF content</li>
                          <li>Context-aware responses to user queries</li>
                          <li>Support for multiple document formats</li>
                        </ul>
                      </div>
                      <div>
                        <span className="font-semibold">Technologies Used:</span>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          <li>PDF.js for document rendering</li>
                          <li>NVIDIA NIM for AI processing</li>
                          <li>React.js for frontend interface</li>
                          <li>Node.js for backend services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="relative rounded-lg overflow-hidden h-48 md:h-auto">
                    <Image
                      src="/w3.png?height=300&width=300"
                      alt="PDF Chat Assistant Project"
                      fill
                      className="object-cover"
                    />
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
