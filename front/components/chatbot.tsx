"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

interface FAQ {
  keywords: string[]
  question: string
  answer: string
  category: string
}

const faqs: FAQ[] = [
  {
    keywords: ["prix", "coût", "tarif", "combien", "payer"],
    question: "Quels sont les tarifs des séances ?",
    answer:
      "Les tarifs varient selon le thérapeute, généralement entre 80-150 DT par séance. La première consultation est souvent gratuite. Vous pouvez voir les tarifs spécifiques sur chaque profil de thérapeute.",
    category: "Tarifs",
  },
  {
    keywords: ["sécurité", "confidentialité", "privé", "données", "protection"],
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Absolument ! Nous utilisons un cryptage de bout en bout pour toutes vos communications. Vos données médicales sont protégées selon les standards internationaux HIPAA et RGPD.",
    category: "Sécurité",
  },
  {
    keywords: ["comment", "commencer", "inscription", "débuter", "première"],
    question: "Comment commencer ?",
    answer:
      "C'est simple ! 1) Créez votre compte patient 2) Parcourez les profils des thérapeutes 3) Réservez votre première séance gratuite. Tout se fait en ligne en quelques minutes.",
    category: "Démarrage",
  },
  {
    keywords: ["thérapeute", "psychologue", "choisir", "trouver", "spécialiste"],
    question: "Comment choisir le bon thérapeute ?",
    answer:
      "Vous pouvez filtrer par spécialisation (anxiété, dépression, couples...), langue (français/arabe), ville, et tarifs. Chaque profil montre l'expérience, les qualifications et l'approche du thérapeute.",
    category: "Thérapeutes",
  },
  {
    keywords: ["vidéo", "séance", "appel", "consultation", "rendez-vous"],
    question: "Comment se déroulent les séances vidéo ?",
    answer:
      "Les séances se font via notre plateforme sécurisée. Vous recevez un lien avant votre rendez-vous. Assurez-vous d'avoir une bonne connexion internet et un endroit calme et privé.",
    category: "Séances",
  },
  {
    keywords: ["urgence", "crise", "aide", "immédiat", "24h"],
    question: "Que faire en cas d'urgence ?",
    answer:
      "En cas d'urgence psychologique, contactez immédiatement le 190 (urgences) ou notre ligne d'écoute 24h/7j au +216 70 123 456. Notre équipe de crise est disponible en permanence.",
    category: "Urgence",
  },
  {
    keywords: ["annuler", "reporter", "changer", "rendez-vous", "séance"],
    question: "Puis-je annuler ou reporter une séance ?",
    answer:
      "Oui, vous pouvez annuler ou reporter jusqu'à 24h avant la séance sans frais. Après ce délai, des frais d'annulation peuvent s'appliquer selon la politique du thérapeute.",
    category: "Réservation",
  },
  {
    keywords: ["langue", "arabe", "français", "communication"],
    question: "Dans quelles langues puis-je avoir des séances ?",
    answer:
      "Nos thérapeutes proposent des séances en français et en arabe. Vous pouvez filtrer par langue lors de votre recherche pour trouver un thérapeute qui parle votre langue préférée.",
    category: "Langues",
  },
  {
    keywords: ["assurance", "remboursement", "mutuelle", "prise en charge"],
    question: "Les séances sont-elles remboursées ?",
    answer:
      "Certaines mutuelles tunisiennes commencent à rembourser les consultations de télémédecine. Nous fournissons les factures nécessaires pour vos demandes de remboursement.",
    category: "Remboursement",
  },
  {
    keywords: ["devenir", "thérapeute", "rejoindre", "inscription", "professionnel"],
    question: "Comment devenir thérapeute sur la plateforme ?",
    answer:
      "Les professionnels certifiés peuvent s'inscrire via notre formulaire thérapeute. Nous vérifions les diplômes et licences. Une fois approuvé, vous pouvez créer votre profil et commencer à recevoir des patients.",
    category: "Professionnels",
  },
]

const quickQuestions = [
  "Quels sont les tarifs ?",
  "Comment commencer ?",
  "Est-ce sécurisé ?",
  "Séances en arabe ?",
  "Urgence 24h/7j ?",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      text: "Bonjour ! Je suis l'assistant MindCare Tunisia. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestMatch = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase()
    let bestMatch: FAQ | null = null
    let maxMatches = 0

    for (const faq of faqs) {
      const matches = faq.keywords.filter((keyword) => input.includes(keyword)).length
      if (matches > maxMatches) {
        maxMatches = matches
        bestMatch = faq
      }
    }

    return maxMatches > 0 ? bestMatch : null
  }

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(
      () => {
        const bestMatch = findBestMatch(text)

        let botResponse: string
        if (bestMatch) {
          botResponse = bestMatch.answer
        } else {
          botResponse =
            "Je ne suis pas sûr de comprendre votre question. Voici quelques sujets sur lesquels je peux vous aider : tarifs, sécurité, comment commencer, choix du thérapeute, ou urgences. Vous pouvez aussi nous contacter directement via le formulaire de contact."
        }

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: botResponse,
          isBot: true,
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 1000,
    ) // Random delay between 1-2 seconds
  }

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-emerald-600 hover:bg-emerald-700 shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Ouvrir le chat</span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] shadow-2xl z-50 flex flex-col">
          <CardHeader className="bg-emerald-600 text-white rounded-t-lg flex flex-row items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5" />
              <CardTitle className="text-lg">Assistant MindCare</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setMessages([
                  {
                    id: "welcome",
                    text: "Bonjour ! Je suis l'assistant MindCare Tunisia. Comment puis-je vous aider aujourd'hui ?",
                    isBot: true,
                    timestamp: new Date(),
                  },
                ])
              }}
              className="text-white hover:bg-emerald-700 h-8 w-8 mr-2"
              title="Nouvelle conversation"
            >
              <MessageCircle className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-emerald-700 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-[400px]">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                  <div
                    className={`max-w-[85%] rounded-lg p-2.5 ${
                      message.isBot
                        ? "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                        : "bg-emerald-600 text-white"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      {message.isBot && <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      {!message.isBot && <User className="h-4 w-4 mt-0.5 flex-shrink-0" />}
                      <div className="flex-1">
                        <p className="text-sm">{message.text}</p>
                        <p className="text-xs opacity-70 mt-1">{formatTime(message.timestamp)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {messages.map((message) => (
                <div key={message.id}>
                  {message.isBot && messages.length > 1 && (
                    <div className="mt-2 text-center">
                      <Badge
                        variant="outline"
                        className="text-xs cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950"
                      >
                        Posez une autre question
                      </Badge>
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 max-w-[80%]">
                    <div className="flex items-center gap-2">
                      <Bot className="h-4 w-4" />
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length >= 2 && messages[messages.length - 1].isBot && (
              <div className="p-3 border-t bg-gray-50 dark:bg-gray-900">
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Questions suggérées :</p>
                <div className="flex flex-wrap gap-1">
                  {quickQuestions.slice(0, 3).map((question, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-emerald-50 dark:hover:bg-emerald-950 text-xs py-1"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Input Area */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Tapez votre question..."
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handleSendMessage(inputValue)
                    }
                  }}
                  disabled={isTyping}
                />
                <Button
                  onClick={() => handleSendMessage(inputValue)}
                  disabled={!inputValue.trim() || isTyping}
                  size="icon"
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
