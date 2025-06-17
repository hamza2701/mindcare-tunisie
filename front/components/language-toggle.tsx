"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "../contexts/language-context"
import { Languages } from "lucide-react"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLanguage(language === "ar" ? "fr" : "ar")}
      className="flex items-center gap-2"
    >
      <Languages className="h-4 w-4" />
      <span className="text-sm font-medium">{language === "ar" ? "FR" : "العربية"}</span>
    </Button>
  )
}
