"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function VerifyEmailPage() {
  const [isVerifying, setIsVerifying] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [isResending, setIsResending] = useState(false)

  useEffect(() => {
    // Simulate email verification process
    const timer = setTimeout(() => {
      // In real app, check URL params for verification token
      const urlParams = new URLSearchParams(window.location.search)
      const token = urlParams.get("token")

      if (token === "valid-token") {
        setIsSuccess(true)
      } else {
        setError("Le lien de vérification est invalide ou a expiré")
      }
      setIsVerifying(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleResendEmail = async () => {
    setIsResending(true)
    // Simulate API call
    setTimeout(() => {
      setIsResending(false)
      // Show success message or handle error
    }, 1500)
  }

  if (isVerifying) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-blue-50 dark:from-emerald-950/20 dark:via-background dark:to-blue-950/20">
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link className="flex items-center justify-center" href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'accueil
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <Loader2 className="h-12 w-12 text-emerald-600 animate-spin" />
                </div>
                <CardTitle className="text-2xl">Vérification en cours...</CardTitle>
                <CardDescription>Nous vérifions votre adresse e-mail</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-blue-50 dark:from-emerald-950/20 dark:via-background dark:to-blue-950/20">
        <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <Link className="flex items-center justify-center" href="/login">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Aller à la connexion
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <ThemeToggle />
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-12 w-12 text-emerald-600" />
                </div>
                <CardTitle className="text-2xl">E-mail vérifié !</CardTitle>
                <CardDescription>Votre compte a été activé avec succès</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    Félicitations ! Votre adresse e-mail a été vérifiée. Vous pouvez maintenant vous connecter à votre
                    compte.
                  </AlertDescription>
                </Alert>

                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="/login">Se connecter maintenant</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-blue-50 dark:from-emerald-950/20 dark:via-background dark:to-blue-950/20">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Link className="flex items-center justify-center" href="/">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Retour à l'accueil
        </Link>
        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl">Vérification échouée</CardTitle>
              <CardDescription>Nous n'avons pas pu vérifier votre adresse e-mail</CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="text-center space-y-4">
                <p className="text-sm text-muted-foreground">
                  Le lien de vérification peut avoir expiré. Vous pouvez demander un nouveau lien de vérification.
                </p>

                <Button
                  onClick={handleResendEmail}
                  disabled={isResending}
                  className="w-full bg-emerald-600 hover:bg-emerald-700"
                >
                  {isResending ? "Envoi en cours..." : "Renvoyer l'e-mail de vérification"}
                </Button>

                <div className="text-center">
                  <Link href="/login" className="text-sm text-emerald-600 hover:underline">
                    Retour à la connexion
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
