'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
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
  Clock,
  Lock,
} from "lucide-react";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                <span>🌍 Première plateforme de santé mentale en Tunisie</span>
              </div>

              {/* Hero Text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Soins de santé mentale{' '}
                <span className="text-primary">sûrs</span> et{' '}
                <span className="text-primary">accessibles</span>{' '}
                <span className="text-primary">pour tous</span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-2xl">
                Connectez-vous avec des professionnels de la santé mentale 
                agréés en Tunisie. Séances vidéo sécurisées, outils de suivi de 
                l'humeur et support IA disponible 24/7 en français.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/signup/patient">
                    Commencez votre parcours
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/signup/therapist">
                    Rejoindre en tant que thérapeute
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t">
                <div className="flex flex-col sm:flex-row gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Professionnels certifiés</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>Sessions sécurisées</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>Support 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex-1 w-full max-w-xl">
              <div className="relative">
                <Image
                  alt="Mental health support illustration"
                  className="rounded-2xl"
                  height={550}
                  width={550}
                  src="/placeholder.svg"
                />
                <div className="absolute -bottom-6 -left-6 bg-background rounded-lg shadow-lg p-4 border">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-medium">Thérapeutes disponibles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fonctionnalites" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Des fonctionnalités conçues pour votre bien-être
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Une suite complète d'outils pour soutenir votre parcours de santé mentale
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Video className="h-10 w-10 text-primary" />
                <CardTitle>Séances vidéo sécurisées</CardTitle>
                <CardDescription>Consultez votre thérapeute en toute confidentialité depuis chez vous</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Brain className="h-10 w-10 text-primary" />
                <CardTitle>Assistant IA</CardTitle>
                <CardDescription>Support émotionnel 24/7 avec notre chatbot spécialisé</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Calendar className="h-10 w-10 text-primary" />
                <CardTitle>Réservation facile</CardTitle>
                <CardDescription>Trouvez et réservez rapidement des créneaux qui vous conviennent</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary" />
                <CardTitle>Journal personnel</CardTitle>
                <CardDescription>Notez vos pensées et suivez votre progression</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <Heart className="h-10 w-10 text-primary" />
                <CardTitle>Suivi de l'humeur</CardTitle>
                <CardDescription>Visualisez et comprenez vos variations émotionnelles</CardDescription>
              </CardHeader>
            </Card>
            <Card className="border-2 hover:border-primary/20 transition-colors">
              <CardHeader>
                <MessageCircle className="h-10 w-10 text-primary" />
                <CardTitle>Chat sécurisé</CardTitle>
                <CardDescription>Communiquez en toute sécurité avec votre thérapeute</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="comment-ca-marche" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Comment ça marche</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Un processus simple en trois étapes pour commencer votre parcours de bien-être
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="relative">
              <CardHeader>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                <CardTitle>Créez votre compte</CardTitle>
                <CardDescription>
                  Inscrivez-vous gratuitement et complétez votre profil pour commencer votre parcours de bien-être
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative">
              <CardHeader>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                <CardTitle>Trouvez votre thérapeute</CardTitle>
                <CardDescription>
                  Parcourez les profils des thérapeutes et choisissez celui qui correspond le mieux à vos besoins
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="relative">
              <CardHeader>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                <CardTitle>Commencez vos séances</CardTitle>
                <CardDescription>
                  Réservez votre première séance et commencez votre parcours vers le bien-être mental
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* For Therapists Section */}
      <section id="pour-les-therapeutes" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Rejoignez notre réseau de thérapeutes
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Développez votre pratique en ligne et aidez plus de patients dans un environnement sécurisé et professionnel
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Lock className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Plateforme sécurisée</h3>
                    <p className="text-sm text-muted-foreground">
                      Communications cryptées et conformité aux normes de protection des données
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Gestion flexible</h3>
                    <p className="text-sm text-muted-foreground">
                      Gérez votre emploi du temps et vos disponibilités en toute liberté
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-semibold">Développez votre pratique</h3>
                    <p className="text-sm text-muted-foreground">
                      Accédez à une nouvelle patientèle et développez votre activité en ligne
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/signup/therapist">
                    Rejoignez-nous
                    <Users className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">
                    En savoir plus
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                alt="Therapist illustration"
                className="rounded-2xl"
                height={550}
                width={550}
                src="/placeholder.svg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contactez-nous</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Une question ? N'hésitez pas à nous contacter
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-lg space-y-6 mt-8">
            <div className="space-y-2">
              <Label htmlFor="name">Nom complet</Label>
              <Input id="name" placeholder="Votre nom" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="votre@email.com" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Sujet</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Sélectionnez un sujet" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="general">Question générale</SelectItem>
                  <SelectItem value="technical">Support technique</SelectItem>
                  <SelectItem value="therapist">Devenir thérapeute</SelectItem>
                  <SelectItem value="partnership">Partenariat</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[100px]"
                id="message"
                placeholder="Votre message..."
              />
            </div>
            <Button className="w-full" size="lg">
              Envoyer le message
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
