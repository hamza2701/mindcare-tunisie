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
import { ArrowLeft, CheckCircle, Eye, EyeOff, GraduationCap } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"

export default function TherapistSignup() {
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
    licenseNumber: "",
    specializations: [] as string[],
    education: "",
    experience: "",
    languages: [] as string[],
    bio: "",
    sessionPrice: "",
    availability: "",
    certifications: "",
    approach: "",
    agreeToTerms: false,
    agreeToPrivacy: false,
    agreeToVerification: false,
  })

  const specializations = [
    { id: "anxiety", label: "Troubles anxieux" },
    { id: "depression", label: "Dépression" },
    { id: "trauma", label: "Traumatismes" },
    { id: "relationships", label: "Relations" },
    { id: "family", label: "Thérapie familiale" },
    { id: "addiction", label: "Addiction" },
    { id: "eating", label: "Troubles alimentaires" },
    { id: "sleep", label: "Troubles du sommeil" },
    { id: "stress", label: "Gestion du stress" },
    { id: "grief", label: "Deuil et perte" },
  ]

  const languages = [
    { id: "french", label: "Français" },
    { id: "arabic", label: "Arabe" },
    { id: "english", label: "Anglais" },
  ]

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSpecializationChange = (specialization: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        specializations: [...prev.specializations, specialization],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        specializations: prev.specializations.filter((s) => s !== specialization),
      }))
    }
  }

  const handleLanguageChange = (lang: string, checked: boolean) => {
    if (checked) {
      setFormData((prev) => ({
        ...prev,
        languages: [...prev.languages, lang],
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        languages: prev.languages.filter((l) => l !== lang),
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Therapist signup data:", formData)
    setStep(5) // Show success message
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
        <Label htmlFor="username">Nom d'utilisateur professionnel</Label>
        <Input
          id="username"
          value={formData.username}
          onChange={(e) => handleInputChange("username", e.target.value)}
          placeholder="Nom affiché dans votre profil"
          required
        />
        <p className="text-xs text-muted-foreground">
          Ce nom sera visible par vos patients dans votre profil professionnel.
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
      <div className="space-y-2">
        <Label htmlFor="licenseNumber">Numéro de licence professionnelle</Label>
        <Input
          id="licenseNumber"
          value={formData.licenseNumber}
          onChange={(e) => handleInputChange("licenseNumber", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label>Spécialisations</Label>
        <div className="grid grid-cols-2 gap-2">
          {specializations.map((spec) => (
            <div key={spec.id} className="flex items-center space-x-2">
              <Checkbox
                id={spec.id}
                checked={formData.specializations.includes(spec.id)}
                onCheckedChange={(checked) => handleSpecializationChange(spec.id, checked as boolean)}
              />
              <Label htmlFor={spec.id} className="text-sm">
                {spec.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="education">Éducation et qualifications</Label>
        <Textarea
          id="education"
          placeholder="Mentionnez vos diplômes universitaires et qualifications professionnelles..."
          value={formData.education}
          onChange={(e) => handleInputChange("education", e.target.value)}
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="experience">Années d'expérience</Label>
        <Input
          id="experience"
          type="number"
          min="0"
          value={formData.experience}
          onChange={(e) => handleInputChange("experience", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="certifications">Certifications supplémentaires</Label>
        <Textarea
          id="certifications"
          placeholder="Toute certification ou formation supplémentaire..."
          value={formData.certifications}
          onChange={(e) => handleInputChange("certifications", e.target.value)}
          rows={3}
        />
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Langues disponibles pour les séances</Label>
        <div className="flex gap-4">
          {languages.map((lang) => (
            <div key={lang.id} className="flex items-center space-x-2">
              <Checkbox
                id={lang.id}
                checked={formData.languages.includes(lang.id)}
                onCheckedChange={(checked) => handleLanguageChange(lang.id, checked as boolean)}
              />
              <Label htmlFor={lang.id} className="text-sm">
                {lang.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">À propos de vous</Label>
        <Textarea
          id="bio"
          placeholder="Écrivez une brève description de vous-même et de votre approche thérapeutique..."
          value={formData.bio}
          onChange={(e) => handleInputChange("bio", e.target.value)}
          rows={4}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="sessionPrice">Prix de la séance (Dinar Tunisien)</Label>
        <Input
          id="sessionPrice"
          type="number"
          min="0"
          value={formData.sessionPrice}
          onChange={(e) => handleInputChange("sessionPrice", e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="approach">Votre approche thérapeutique</Label>
        <Textarea
          id="approach"
          placeholder="Expliquez votre approche et style en thérapie..."
          value={formData.approach}
          onChange={(e) => handleInputChange("approach", e.target.value)}
          rows={4}
          required
        />
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-4">
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

        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToVerification"
            checked={formData.agreeToVerification}
            onCheckedChange={(checked) => handleInputChange("agreeToVerification", checked as boolean)}
          />
          <Label htmlFor="agreeToVerification" className="text-sm">
            J'accepte le processus de vérification des qualifications
          </Label>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-950/20 p-4 rounded-lg">
        <p className="text-sm text-blue-800 dark:text-blue-200">
          Note : Vous devrez fournir des copies de vos diplômes et licences professionnelles.
        </p>
      </div>
    </div>
  )

  const renderSuccess = () => (
    <div className="text-center space-y-4">
      <div className="flex justify-center">
        <CheckCircle className="h-16 w-16 text-emerald-600" />
      </div>
      <h3 className="text-2xl font-bold text-emerald-600">Candidature soumise avec succès !</h3>
      <p className="text-muted-foreground">
        Nous examinerons votre candidature et vous contacterons dans 3-5 jours ouvrables pour vérifier vos
        qualifications.
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
                <GraduationCap className="h-12 w-12 text-emerald-600" />
              </div>
              <CardTitle className="text-2xl">Inscription Thérapeute</CardTitle>
              <CardDescription>
                Rejoignez notre réseau de thérapeutes professionnels et aidez plus de personnes
              </CardDescription>

              {step < 5 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {[1, 2, 3, 4].map((stepNumber) => (
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
              {step < 5 && (
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {step === 1 && "Informations personnelles"}
                    {step === 2 && "Qualifications professionnelles"}
                    {step === 3 && "Services et préférences"}
                    {step === 4 && "Révision et accord"}
                  </h3>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {step === 1 && renderStep1()}
                {step === 2 && renderStep2()}
                {step === 3 && renderStep3()}
                {step === 4 && renderStep4()}
                {step === 5 && renderSuccess()}

                {step < 5 && (
                  <div className="flex justify-between mt-6">
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)} disabled={step === 1}>
                      Précédent
                    </Button>

                    {step < 4 ? (
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
                        disabled={!formData.agreeToTerms || !formData.agreeToPrivacy || !formData.agreeToVerification}
                      >
                        Soumettre la candidature
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
