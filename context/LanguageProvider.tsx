import React, { createContext, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Language = 'en' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string, options?: any) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: React.ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const { i18n, t } = useTranslation()
  const [language, setLanguageState] = useState<Language>('en')

  // Initialize language from browser or localStorage
  useEffect(() => {
    const initializeLanguage = () => {
      // Check localStorage first
      const savedLanguage = localStorage.getItem('i18nextLng') as Language
      if (savedLanguage && ['en', 'pt'].includes(savedLanguage)) {
        setLanguageState(savedLanguage)
        i18n.changeLanguage(savedLanguage)
        return
      }

      // Fallback to browser language detection
      const browserLanguage = navigator.language || navigator.languages?.[0] || 'en'
      const detectedLanguage: Language = browserLanguage.startsWith('pt') ? 'pt' : 'en'

      setLanguageState(detectedLanguage)
      i18n.changeLanguage(detectedLanguage)
      localStorage.setItem('i18nextLng', detectedLanguage)
    }

    initializeLanguage()
  }, [i18n])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    i18n.changeLanguage(newLanguage)
    localStorage.setItem('i18nextLng', newLanguage)
  }

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
  }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Convenience hook for getting translated text
export const useTranslatedText = () => {
  const { t } = useLanguage()
  return t
}
