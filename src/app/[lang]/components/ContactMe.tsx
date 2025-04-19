'use client'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'

const content = {
  en: {
    title: 'Tell me about your next project',
    subtitle: 'Get in touch with me',
    whatsapp: 'Hello, I would like to talk about my project.'
  },
  pt: {
    title: 'Me conte sobre seu próximo projeto',
    subtitle: 'Entre em contato comigo',
    whatsapp: 'Olá, gostaria de falar sobre meu projeto.'
  }
}

export default function ContactMe() {
  const { language } = useLanguage()
  const pageContent = content[language]

  return (
    <section className="flex w-full justify-center mt-16">
      <div className="w-2/3 flex flex-col items-center justify-center gap-12 border-t border-white-3 dark:border-black-3 pt-10">
        <h2 className="max-w-[490px] text-center text-6xl font-semibold text-black-1 dark:text-white-1">
          {pageContent.title}
        </h2>

        <Link
          href={`https://wa.me/553194441732?text=${encodeURIComponent(pageContent.whatsapp)}`}
          className="px-10 py-3 border border-black-2 text-black-2 dark:border-white-2 dark:text-white-2"
          target="_blank"
        >
          {pageContent.subtitle}
        </Link>
      </div>
    </section>
  )
}
