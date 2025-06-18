"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"
import { supabase } from "@/lib/supabase"
import { AuthService } from "@/services/auth.service"

export default function VerifyEmailPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isVerifying, setIsVerifying] = useState(true)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")
  const [isResending, setIsResending] = useState(false)

  useEffect(() => {
    const handleEmailVerification = async () => {
      try {
        // Get email first as we'll need it throughout the function
        const email = searchParams.get('email') || localStorage.getItem('signupEmail')

        // Check if we're on the initial load after registration (no params)
        const hasNoParams = !window.location.hash && !searchParams.get('token_hash') && !searchParams.get('type')
        
        if (hasNoParams && email) {
          setIsVerifying(false)
          setError("Un lien de vérification a été envoyé à votre adresse e-mail. Veuillez vérifier votre boîte de réception.")
          return
        }

        // Check for error in hash
        const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
        const errorCode = hashParams.get('error_code')
        const errorDescription = hashParams.get('error_description')

        if (errorCode) {
          console.error('Error in hash:', { errorCode, errorDescription })
          if (errorCode === 'otp_expired') {
            setError("Le lien de vérification a expiré. Veuillez demander un nouveau lien.")
          } else {
            setError(errorDescription?.replace(/\+/g, ' ') || "Une erreur est survenue lors de la vérification")
          }
          setIsVerifying(false)
          return
        }

        // Check if we have a session
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session) {
          console.log('User is already verified and has a session')
          setIsSuccess(true)
          setIsVerifying(false)
          return
        }

        // Get verification parameters
        const token_hash = searchParams.get('token_hash')
        const type = searchParams.get('type')

        if (!token_hash || !type || !email) {
          console.error('Missing verification parameters:', { token_hash, type, email })
          setError("Le lien de vérification est invalide. Veuillez demander un nouveau lien.")
          setIsVerifying(false)
          return
        }

        // Verify the email
        const { error: verificationError } = await supabase.auth.verifyOtp({
          email,
          token: token_hash,
          type: 'signup'
        })

        if (verificationError) {
          console.error("Email verification error:", verificationError)
          if (verificationError.message.includes('expired')) {
            setError("Le lien de vérification a expiré. Veuillez demander un nouveau lien.")
          } else {
            setError("Le lien de vérification est invalide. Veuillez demander un nouveau lien.")
          }
          setIsVerifying(false)
          return
        }

        setIsSuccess(true)
        setIsVerifying(false)
      } catch (err) {
        console.error("Error during email verification:", err)
        setError("Une erreur est survenue lors de la vérification de l'email")
        setIsVerifying(false)
      }
    }

    handleEmailVerification()
  }, [searchParams, router])

  const handleResendEmail = async () => {
    try {
      setIsResending(true)
      setError("")

      // Get the email from URL, hash, or localStorage
      const hashParams = new URLSearchParams(window.location.hash.replace('#', ''))
      const email = searchParams.get('email') || hashParams.get('email') || localStorage.getItem('signupEmail')
      
      if (!email) {
        setError("Impossible de récupérer votre adresse email. Veuillez réessayer de vous inscrire.")
        return
      }

      // Resend verification email
      const { error: resendError } = await supabase.auth.resend({
        type: "signup",
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/verify-email`
        }
      })

      if (resendError) {
        throw resendError
      }

      // Show success message
      setError("Un nouveau lien de vérification a été envoyé à votre adresse email. Veuillez vérifier votre boîte de réception.")
    } catch (err) {
      console.error("Error resending verification email:", err)
      setError("Une erreur est survenue lors de l'envoi du nouvel email")
    } finally {
      setIsResending(false)
    }
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
                {error.includes("a été envoyé") ? (
                  <CheckCircle className="h-12 w-12 text-emerald-600" />
                ) : (
                  <AlertCircle className="h-12 w-12 text-red-600" />
                )}
              </div>
              <CardTitle className="text-2xl">
                {error.includes("a été envoyé") ? "Vérification en attente" : "Vérification échouée"}
              </CardTitle>
              <CardDescription>
                {error.includes("a été envoyé") ? "Veuillez vérifier votre boîte de réception" : "Nous n'avons pas pu verifier votre adresse e-mail"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <Alert className={error.includes("a été envoyé") ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200" : "bg-red-50 dark:bg-red-950/20 border-red-200"}>
                {error.includes("a été envoyé") ? (
                  <CheckCircle className="h-4 w-4 text-emerald-600" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-red-600" />
                )}
                <AlertDescription>
                  {error}
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">
                  Si vous n'avez pas reçu l'e-mail, vérifiez votre dossier spam ou demandez un nouveau lien.
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
