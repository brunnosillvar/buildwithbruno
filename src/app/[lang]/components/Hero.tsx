'use client'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import Link from 'next/link'
import BrunoRodrigues from '@/assets/images/bruno-rodrigues.png'

const content = {
  en: {
    title: "Hi, I'm Bruno Rodrigues",
    subtitle: 'Software Engineer & Designer UX/UI'
  },
  pt: {
    title: 'Oi, eu sou Bruno Rodrigues',
    subtitle: 'Engenheiro de Software & Designer UX/UI'
  }
}

export default function Hero() {
  const { language } = useLanguage()
  const pageContent = content[language]

  return (
    <div className="flex flex-col items-center h-auto text-center mt-20">
      <Image
        src={BrunoRodrigues}
        alt="Bruno Rodrigues"
        width={112}
        height={112}
        className="rounded-full object-cover mb-3"
      />

      <h2 className="text-2xl font-bold text-black-1 dark:text-white-1">
        {pageContent.title}
      </h2>
      <h3 className="text-6xl font-semibold text-black-2 dark:text-white-2 mt-3">
        {pageContent.subtitle}
      </h3>
    </div>
  )
}
