"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Heart, ArrowLeft, Eye, EyeOff, User, GraduationCap, AlertCircle } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleInputChange = (field: string, value: string | boolean) => {
    setLoginData((prev) => ({ ...prev, [field]: value }))
    setError("") // Clear error when user starts typing
  }

  const handleLogin = async (e: React.FormEvent, userType: "patient" | "therapist") => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call
    setTimeout(() => {
      if (loginData.email === "test@example.com" && loginData.password === "password") {
        // Successful login - redirect to dashboard
        console.log(`${userType} login successful:`, loginData)
        // In real app: redirect to dashboard
      } else {
        setError("Email ou mot de passe incorrect")
      }
      setIsLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-background to-blue-50 dark:from-emerald-950/20 dark:via-background dark:to-blue-950/20">
      {/* Header */}
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
              <CardTitle className="text-2xl">Connexion</CardTitle>
              <CardDescription>Accédez à votre compte MindCare Tunisia</CardDescription>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="patient" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="patient" className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Patient
                  </TabsTrigger>
                  <TabsTrigger value="therapist" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4" />
                    Thérapeute
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="patient" className="space-y-4 mt-6">
                  <form onSubmit={(e) => handleLogin(e, "patient")} className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="patient-email">Adresse e-mail</Label>
                      <Input
                        id="patient-email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="patient-password">Mot de passe</Label>
                      <div className="relative">
                        <Input
                          id="patient-password"
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember-patient"
                          checked={loginData.rememberMe}
                          onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                        />
                        <Label htmlFor="remember-patient" className="text-sm">
                          Se souvenir de moi
                        </Label>
                      </div>
                      <Link href="/forgot-password" className="text-sm text-emerald-600 hover:underline">
                        Mot de passe oublié ?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                      {isLoading ? "Connexion..." : "Se connecter"}
                    </Button>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">Pas encore de compte ? </span>
                      <Link href="/signup/patient" className="text-emerald-600 hover:underline">
                        Créer un compte patient
                      </Link>
                    </div>
                  </form>
                </TabsContent>

                <TabsContent value="therapist" className="space-y-4 mt-6">
                  <form onSubmit={(e) => handleLogin(e, "therapist")} className="space-y-4">
                    {error && (
                      <Alert variant="destructive">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription>{error}</AlertDescription>
                      </Alert>
                    )}

                    <div className="space-y-2">
                      <Label htmlFor="therapist-email">Adresse e-mail professionnelle</Label>
                      <Input
                        id="therapist-email"
                        type="email"
                        value={loginData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="therapist-password">Mot de passe</Label>
                      <div className="relative">
                        <Input
                          id="therapist-password"
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                          required
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-2 top-1/2 -translate-y-1/2"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember-therapist"
                          checked={loginData.rememberMe}
                          onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                        />
                        <Label htmlFor="remember-therapist" className="text-sm">
                          Se souvenir de moi
                        </Label>
                      </div>
                      <Link href="/forgot-password" className="text-sm text-emerald-600 hover:underline">
                        Mot de passe oublié ?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
                      {isLoading ? "Connexion..." : "Se connecter"}
                    </Button>

                    <div className="text-center text-sm">
                      <span className="text-muted-foreground">Pas encore inscrit ? </span>
                      <Link href="/signup/therapist" className="text-emerald-600 hover:underline">
                        Rejoindre en tant que thérapeute
                      </Link>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 pt-6 border-t">
                <div className="text-center text-sm text-muted-foreground">
                  <p>En vous connectant, vous acceptez nos</p>
                  <div className="flex justify-center gap-2 mt-1">
                    <Link href="/terms" className="text-emerald-600 hover:underline">
                      Conditions d'utilisation
                    </Link>
                    <span>et</span>
                    <Link href="/privacy" className="text-emerald-600 hover:underline">
                      Politique de confidentialité
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
