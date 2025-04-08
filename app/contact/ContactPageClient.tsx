"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import PageTransition from "@/components/page-transition"
import SectionHeading from "@/components/section-heading"

export default function ContactPageClient() {
  return (
    <PageTransition>
      <div className="container px-4 py-20 mx-auto">
        <SectionHeading title="Contact Me" subtitle="Let's connect and collaborate" />

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 h-full">
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>Fill out the form and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
              <form
  className="space-y-6"
  action="https://formsubmit.co/kritikasawhney1010@gmail.com"
  method="POST"
>
  <input type="hidden" name="_captcha" value="false" />
  <div className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input id="name" name="name" placeholder="Your name" required />
      </div>
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input id="email" type="email" name="email" placeholder="Your email" required />
      </div>
    </div>
    <div className="space-y-2">
      <label htmlFor="subject" className="text-sm font-medium">
        Subject
      </label>
      <Input id="subject" name="subject" placeholder="Subject of your message" required />
    </div>
    <div className="space-y-2">
      <label htmlFor="message" className="text-sm font-medium">
        Message
      </label>
      <Textarea id="message" name="message" placeholder="Your message" rows={5} required />
    </div>
  </div>
  <Button type="submit" className="w-full">
    Send Message
    <Send className="ml-2 h-4 w-4" />
  </Button>
</form>

              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Here's how you can reach me directly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">kritikasawhney1010@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <p className="text-muted-foreground">https://www.linkedin.com/in/kritika-sawhney/</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Github className="h-5 w-5 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <p className="text-muted-foreground">https://github.com/KritikaSawhney</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle>Let's Collaborate</CardTitle>
                <CardDescription>Open to new opportunities and collaborations.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  I'm always interested in working on exciting projects and collaborating with other developers and
                  designers. If you have a project idea or opportunity, feel free to reach out!
                </p>
                <div className="space-y-2">
                  <h3 className="font-medium">I'm open to:</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    <li>Freelance projects</li>
                    <li>Open source collaboration</li>
                    <li>Hackathons and competitions</li>
                    <li>Research opportunities</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center gap-4">
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href="https://github.com/KritikaSawhney" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href="https://www.linkedin.com/in/kritika-sawhney/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="outline" size="icon" className="rounded-full">
                <a href="mailto:kritikasawhney1010@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}
