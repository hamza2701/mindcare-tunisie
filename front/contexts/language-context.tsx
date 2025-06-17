"use client"

import { createContext, useContext, type ReactNode } from "react"

interface LanguageContextType {
  language: "fr"
  setLanguage: (lang: "fr") => void
  t: (key: string) => string
}

const translations = {
  fr: {
    // Header
    features: "Fonctionnalités",
    howItWorks: "Comment ça marche",
    forTherapists: "Pour les thérapeutes",
    contact: "Contact",

    // Hero Section
    platformBadge: "Première plateforme de santé mentale en Tunisie",
    heroTitle: "Soins de santé mentale sûrs et accessibles",
    heroTitleHighlight: "pour tous",
    heroDescription:
      "Connectez-vous avec des professionnels de la santé mentale agréés en Tunisie. Séances vidéo sécurisées, outils de suivi de l'humeur et support IA disponible 24/7 en français.",
    startJourney: "Commencez votre parcours",
    joinAsTherapist: "Rejoindre en tant que thérapeute",
    secureEncrypted: "Sécurisé et crypté",
    licensedTherapists: "Thérapeutes agréés",
    available247: "Disponible 24/7",
    therapistAvailable: "Thérapeute disponible maintenant",

    // Features Section
    featuresTitle: "Tout ce dont vous avez besoin pour votre santé mentale",
    featuresDescription:
      "Une plateforme complète qui combine technologie moderne et soins humains pour offrir les meilleurs services de santé mentale",
    secureVideoSessions: "Séances vidéo sécurisées",
    secureVideoDesc:
      "Connectez-vous avec votre thérapeute via des séances vidéo cryptées et sécurisées depuis le confort de votre domicile",
    aiAssistant: "Assistant IA",
    aiAssistantDesc:
      "Support immédiat d'un assistant IA qui comprend le français et propose des techniques de thérapie cognitivo-comportementale",
    easyBooking: "Réservation facile",
    easyBookingDesc:
      "Réservez facilement votre séance et choisissez l'heure qui vous convient avec un système de rappel automatique",
    personalJournal: "Journal personnel",
    personalJournalDesc:
      "Écrivez vos sentiments et pensées dans un journal sécurisé avec possibilité de partage avec votre thérapeute",
    moodTracking: "Suivi de l'humeur",
    moodTrackingDesc: "Surveillez votre humeur quotidiennement et obtenez des rapports détaillés sur vos progrès",
    secureChat: "Chat sécurisé",
    secureChatDesc: "Communiquez avec votre thérapeute via des messages cryptés disponibles à tout moment",

    // How It Works
    howItWorksTitle: "Comment fonctionne la plateforme ?",
    howItWorksDescription: "Trois étapes simples pour obtenir le soutien psychologique dont vous avez besoin",
    step1Title: "Créer un compte",
    step1Desc: "Inscrivez-vous et complétez votre profil pour que nous puissions mieux vous aider",
    step2Title: "Choisir un thérapeute",
    step2Desc: "Parcourez les profils des thérapeutes agréés et choisissez celui qui correspond à vos besoins",
    step3Title: "Commencer la séance",
    step3Desc:
      "Réservez votre séance et commencez votre parcours de guérison avec un soutien continu et un suivi personnalisé",

    // For Therapists
    forTherapistsBadge: "Pour les professionnels de la santé mentale",
    therapistsTitle: "Rejoignez le réseau de thérapeutes professionnels",
    therapistsDescription:
      "Élargissez votre pratique et aidez plus de personnes grâce à notre plateforme sécurisée et avancée",
    manageAppointments: "Gérez facilement vos rendez-vous",
    secureTools: "Outils de communication sécurisés et cryptés",
    earningsDashboard: "Tableau de bord des revenus",
    patientData: "Accès aux données partagées des patients",
    learnMore: "En savoir plus",

    // Trust & Security
    trustTitle: "Sécurité et confidentialité sont nos priorités",
    trustDescription:
      "Nous nous engageons à protéger votre vie privée et à garantir la sécurité de vos données personnelles",
    endToEndEncryption: "Cryptage de bout en bout",
    encryptionDesc: "Toutes les données sont cryptées de bout en bout",
    licensedProfessionals: "Professionnels agréés",
    licensedDesc: "Tous les thérapeutes sont titulaires de licences certifiées",
    internationalStandards: "Standards internationaux",
    standardsDesc: "Nous suivons les plus hauts standards de sécurité internationaux",
    continuousSupport: "Support continu",
    supportDesc: "Équipe de support disponible 24/7 pour vous aider",

    // CTA Section
    ctaTitle: "Commencez votre parcours de guérison aujourd'hui",
    ctaDescription: "N'attendez plus. Votre santé mentale mérite attention et soins appropriés",
    startFree: "Commencer gratuitement",
    talkToConsultant: "Parler à un consultant",
    freeFirstSession: "Première séance gratuite • Aucun engagement • Annulation à tout moment",

    // Footer
    allRightsReserved: "Tous droits réservés.",
    privacy: "Confidentialité",
    terms: "Conditions",
    contactUs: "Nous contacter",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = "fr"

  const t = (key: string): string => {
    return translations.fr[key as keyof (typeof translations)["fr"]] || key
  }

  const setLanguage = () => {
    // French only - no language switching
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir="ltr" className="font-latin">
        {children}
      </div>
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
