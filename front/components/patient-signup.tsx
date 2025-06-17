"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Heart, ArrowLeft, CheckCircle, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function PatientSignup() {
  const [step, setStep] = useState(1)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
    gender: "",
    city: "",
    emergencyContact: "",
    emergencyPhone: "",
    medicalHistory: "",
    currentMedications: "",
    previousTherapy: "",
    goals: "",
    preferredLanguage: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
  })

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Patient signup data:", formData)
    setStep(4) // Show success message
  }

  const renderStep1 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Prénom</Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nom de famille</Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="username">Nom d'utilisateur</Label>
        <Input
          id="username"
          value={formData.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
          placeholder="Ce nom sera affiché publiquement"
          required
        />
        <p className="text-xs text-muted-foreground">
          Ce nom d'utilisateur sera visible par votre thérapeute et dans vos communications.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Adresse e-mail</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Numéro de téléphone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleInputChange("phone", e.target.value)}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="password">Mot de passe</Label>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
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
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
          <Input
            id="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date de naissance</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="gender">Genre</Label>
          <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez votre genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Homme</SelectItem>
              <SelectItem value="female">Femme</SelectItem>
              <SelectItem value="other">Autre</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="city">Ville</Label>
        <Select value={formData.city} onValueChange={(value) => handleInputChange("city", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre ville" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="tunis">Tunis</SelectItem>
            <SelectItem value="sfax">Sfax</SelectItem>
            <SelectItem value="sousse">Sousse</SelectItem>
            <SelectItem value="kairouan">Kairouan</SelectItem>
            <SelectItem value="bizerte">Bizerte</SelectItem>
            <SelectItem value="gabes">Gabès</SelectItem>
            <SelectItem value="ariana">Ariana</SelectItem>
            <SelectItem value="gafsa">Gafsa</SelectItem>
            <SelectItem value="monastir">Monastir</SelectItem>
            <SelectItem value="medenine">Médenine</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="emergencyContact">Contact d'urgence</Label>
          <Input
            id="emergencyContact"
            value={formData.emergencyContact}
            onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="emergencyPhone">Téléphone d'urgence</Label>
          <Input
            id="emergencyPhone"
            type="tel"
            value={formData.emergencyPhone}
            onChange={(e) => handleInputChange("emergencyPhone", e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="medicalHistory">Antécédents médicaux</Label>
        <Textarea
          id="medicalHistory"
          placeholder="Toute condition médicale passée ou actuelle..."
          value={formData.medicalHistory}
          onChange={(e) => handleInputChange("medicalHistory", e.target.value)}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="currentMedications">Médicaments actuels</Label>
        <Textarea
          id="currentMedications"
          placeholder="Mentionnez tous les médicaments que vous prenez actuellement..."
          value={formData.currentMedications}
          onChange={(e) => handleInputChange("currentMedications", e.target.value)}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="previousTherapy">Thérapie précédente</Label>
        <Textarea
          id="previousTherapy"
          placeholder="Avez-vous déjà suivi une thérapie ? Donnez des détails..."
          value={formData.previousTherapy}
          onChange={(e) => handleInputChange("previousTherapy", e.target.value)}
          rows={3}
        />
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="goals">Vos objectifs thérapeutiques</Label>
        <Textarea
          id="goals"
          placeholder="Qu'espérez-vous accomplir grâce à la thérapie ?"
          value={formData.goals}
          onChange={(e) => handleInputChange("goals", e.target.value)}
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="preferredLanguage">Langue préférée pour les séances</Label>
        <Select
          value={formData.preferredLanguage}
          onValueChange={(value) => handleInputChange("preferredLanguage", value)}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sélectionnez votre langue préférée" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="french">Français</SelectItem>
            <SelectItem value="arabic">Arabe</SelectItem>
            <SelectItem value="both">Les deux</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-4 pt-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToTerms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
          />
          <Label htmlFor="agreeToTerms" className="text-sm">
            J'accepte les termes et conditions
          </Label>
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToPrivacy"
            checked={formData.agreeToPrivacy}
            onCheckedChange={(checked) => handleInputChange("agreeToPrivacy", checked as boolean)}
          />
          <Label htmlFor="agreeToPrivacy" className="text-sm">
            J'accepte la politique de confidentialité
          </Label>
        </div>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-emerald-600" />
      </div>
      <h3 className="text-2xl font-bold text-emerald-600">Compte créé avec succès !</h3>
      <p className="text-muted-foreground">
        Bienvenue sur MindCare Tunisia. Nous vous contacterons bientôt pour confirmer votre compte.
      </p>
      <Button asChild className="bg-emerald-600 hover:bg-emerald-700">
        <Link href="/">Retour à l'accueil</Link>
      </Button>
    </div>
  )

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
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Heart className="h-12 w-12 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl">Inscription Patient</CardTitle>
              <CardDescription>
                Rejoignez notre plateforme et commencez votre parcours vers une meilleure santé mentale
              </CardDescription>

              {step < 4 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {[1, 2, 3].map((stepNumber) => (
                    <Badge
                      key={stepNumber}
                      variant={step >= stepNumber ? "default" : "secondary"}
                      className={step >= stepNumber ? "bg-emerald-600" : ""}
                    >
                      {stepNumber}
                    </Badge>
                  ))}
                </div>
              )}
            </CardHeader>

            <CardContent>
              {step < 4 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {step === 1 && "Informations de base"}
                    {step === 2 && "Informations médicales"}
                    {step === 3 && "Préférences et objectifs"}
                  </h3>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderSuccess()}

                {step < 4 && (
                  <div className="flex justify-between mt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)} disabled={step === 1}>
                      Précédent
                    </Button>

                    {step < 3 ? (
                      <Button
                        type="button"
                        onClick={() => setStep(step + 1)}
                        className="bg-emerald-600 hover:bg-emerald-700"
                      >
                        Suivant
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        className="bg-emerald-600 hover:bg-emerald-700"
                        disabled={!formData.agreeToTerms || !formData.agreeToPrivacy}
                      >
                        Créer le compte
                      </Button>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
