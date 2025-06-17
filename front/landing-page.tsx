"use client"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Heart,
  Shield,
  Video,
  MessageCircle,
  Calendar,
  BookOpen,
  Brain,
  Users,
  CheckCircle,
  Globe,
  Lock,
  Clock,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "./contexts/language-context"
import { ThemeToggle } from "./components/theme-toggle"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import Chatbot from "./components/chatbot"

export default function LandingPage() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Heart className="h-8 w-8 text-emerald-600" />
          <span className="ml-2 text-xl font-bold">MindCare Tunisia</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <a
            className="text-sm font-medium hover:text-emerald-600 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("features")}
          </a>
          <a
            className="text-sm font-medium hover:text-emerald-600 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("howItWorks")}
          </a>
          <a
            className="text-sm font-medium hover:text-emerald-600 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("therapists")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("forTherapists")}
          </a>
          <a
            className="text-sm font-medium hover:text-emerald-600 transition-colors cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            {t("contact")}
          </a>
          <div className="flex items-center gap-2 ml-4">
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-50 via-background to-blue-50 dark:from-emerald-950/20 dark:via-background dark:to-blue-950/20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    <Globe className="w-3 h-3 mr-1" />
                    {t("platformBadge")}
                  </Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {t("heroTitle")} <span className="text-emerald-600">{t("heroTitleHighlight")}</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">{t("heroDescription")}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/signup/patient">
                      {t("startJourney")}
                      <Heart className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/signup/therapist">
                      {t("joinAsTherapist")}
                      <Users className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-emerald-600" />
                    <span>{t("secureEncrypted")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>{t("licensedTherapists")}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-emerald-600" />
                    <span>{t("available247")}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <Image
                    alt="Mental health support illustration"
                    className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                    height="550"
                    src="/placeholder.svg?height=550&width=550"
                    width="550"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 border">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium">{t("therapistAvailable")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("featuresTitle")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("featuresDescription")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardHeader>
                  <Video className="h-10 w-10 text-emerald-600" />
                  <CardTitle>{t("secureVideoSessions")}</CardTitle>
                  <CardDescription>{t("secureVideoDesc")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardHeader>
                  <Brain className="h-10 w-10 text-emerald-600" />
                  <CardTitle>{t("aiAssistant")}</CardTitle>
                  <CardDescription>{t("aiAssistantDesc")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-emerald-600" />
                  <CardTitle>{t("easyBooking")}</CardTitle>
                  <CardDescription>{t("easyBookingDesc")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-emerald-600" />
                  <CardTitle>{t("personalJournal")}</CardTitle>
                  <CardDescription>{t("personalJournalDesc")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardHeader>
                  <Heart className="h-10 w-10 text-emerald-600" />
                  <CardTitle>{t("moodTracking")}</CardTitle>
                  <CardDescription>{t("moodTrackingDesc")}</CardDescription>
                </CardHeader>
              </Card>
              <Card className="border-2 hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                <CardHeader>
                  <MessageCircle className="h-10 w-10 text-emerald-600" />
                  <CardTitle>{t("secureChat")}</CardTitle>
                  <CardDescription>{t("secureChatDesc")}</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("howItWorksTitle")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("howItWorksDescription")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="text-xl font-bold">{t("step1Title")}</h3>
                <p className="text-muted-foreground">{t("step1Desc")}</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="text-xl font-bold">{t("step2Title")}</h3>
                <p className="text-muted-foreground">{t("step2Desc")}</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="text-xl font-bold">{t("step3Title")}</h3>
                <p className="text-muted-foreground">{t("step3Desc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* For Therapists */}
        <section id="therapists" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex items-center justify-center">
                <Image
                  alt="Therapist dashboard"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
                  height="310"
                  src="/placeholder.svg?height=310&width=550"
                  width="550"
                />
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary" className="w-fit">
                    {t("forTherapistsBadge")}
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("therapistsTitle")}</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    {t("therapistsDescription")}
                  </p>
                </div>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>{t("manageAppointments")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>{t("secureTools")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>{t("earningsDashboard")}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-emerald-600" />
                    <span>{t("patientData")}</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                    <Link href="/signup/therapist">{t("joinAsTherapist")}</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    {t("learnMore")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust & Security */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">{t("trustTitle")}</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("trustDescription")}
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col items-center space-y-2 text-center">
                <Lock className="h-12 w-12 text-emerald-600" />
                <h3 className="text-lg font-bold">{t("endToEndEncryption")}</h3>
                <p className="text-sm text-muted-foreground">{t("encryptionDesc")}</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Shield className="h-12 w-12 text-emerald-600" />
                <h3 className="text-lg font-bold">{t("licensedProfessionals")}</h3>
                <p className="text-sm text-muted-foreground">{t("licensedDesc")}</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <CheckCircle className="h-12 w-12 text-emerald-600" />
                <h3 className="text-lg font-bold">{t("internationalStandards")}</h3>
                <p className="text-sm text-muted-foreground">{t("standardsDesc")}</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <Heart className="h-12 w-12 text-emerald-600" />
                <h3 className="text-lg font-bold">{t("continuousSupport")}</h3>
                <p className="text-sm text-muted-foreground">{t("supportDesc")}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-600 dark:bg-emerald-700">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">{t("ctaTitle")}</h2>
                <p className="max-w-[600px] text-emerald-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {t("ctaDescription")}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-emerald-600 hover:bg-gray-100" asChild>
                  <Link href="/signup/patient">
                    {t("startFree")}
                    <Heart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-emerald-600"
                >
                  {t("talkToConsultant")}
                </Button>
              </div>
              <p className="text-sm text-emerald-100">{t("freeFirstSession")}</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-nous</h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Notre équipe est là pour répondre à toutes vos questions. N'hésitez pas à nous contacter pour plus
                    d'informations sur nos services.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                      <Heart className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Support Patient</h3>
                      <p className="text-sm text-muted-foreground">support@mindcare-tunisia.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Support Thérapeute</h3>
                      <p className="text-sm text-muted-foreground">therapists@mindcare-tunisia.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                      <MessageCircle className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Urgences 24/7</h3>
                      <p className="text-sm text-muted-foreground">+216 70 123 456</p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Envoyez-nous un message</CardTitle>
                  <CardDescription>
                    Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Nom complet</Label>
                        <Input id="contact-name" placeholder="Votre nom" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input id="contact-email" type="email" placeholder="votre@email.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Sujet</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez un sujet" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="patient">Question Patient</SelectItem>
                          <SelectItem value="therapist">Question Thérapeute</SelectItem>
                          <SelectItem value="technical">Support Technique</SelectItem>
                          <SelectItem value="billing">Facturation</SelectItem>
                          <SelectItem value="other">Autre</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea id="contact-message" placeholder="Décrivez votre question ou demande..." rows={4} />
                    </div>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Envoyer le message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="flex items-center gap-2">
          <Heart className="h-6 w-6 text-emerald-600" />
          <span className="text-sm font-medium">MindCare Tunisia</span>
        </div>
        <p className="text-xs text-muted-foreground sm:ml-auto">© 2025 MindCare Tunisia. {t("allRightsReserved")}</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t("privacy")}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t("terms")}
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            {t("contactUs")}
          </Link>
        </nav>
      </footer>

      {/* Chatbot */}
      <Chatbot />
    </div>
  )
}
