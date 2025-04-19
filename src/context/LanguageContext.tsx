'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'

type Language = 'pt' | 'en'

interface LanguageContextType {
  language: Language
  changeLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact'
    // Adicione mais traduções conforme necessário
  },
  pt: {
    home: 'Início',
    about: 'Sobre',
    projects: 'Projetos',
    contact: 'Contato'
    // Adicione mais traduções conforme necessário
  }
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
)

const LANGUAGE_STORAGE_KEY = 'preferred-language'

export function LanguageProvider({
  children,
  initialLang = 'pt'
}: {
  children: React.ReactNode
  initialLang?: Language
}) {
  const [language, setLanguage] = useState<Language>(initialLang)
  const router = useRouter()
  const pathname = usePathname()

  // Efeito para carregar o idioma salvo no localStorage quando o componente montar
  useEffect(() => {
    // Verificar se estamos no cliente (browser)
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem(
        LANGUAGE_STORAGE_KEY
      ) as Language

      // Se existir um idioma salvo e for diferente do atual
      if (savedLanguage && savedLanguage !== language) {
        // Usa o idioma salvo
        setLanguage(savedLanguage)

        // Redireciona para a URL com o idioma correto, se necessário
        if (pathname) {
          const segments = pathname.split('/')
          if (segments[1] !== savedLanguage) {
            segments[1] = savedLanguage
            router.push(segments.join('/'))
          }
        }
      }
    }
  }, []) // Executa apenas na montagem do componente

  const changeLanguage = (lang: Language) => {
    setLanguage(lang)

    // Salva a preferência no localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang)
    }

    // Atualiza a URL para refletir o novo idioma
    if (pathname) {
      const segments = pathname.split('/')
      segments[1] = lang
      router.push(segments.join('/'))
    }
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
