'use client'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

const content = {
  en: {
    description: 'All rights reserved. Developed by Bruno Rodrigues.'
  },
  pt: {
    description:
      'Todos os direitos reservados. Desenvolvido por Bruno Rodrigues.'
  }
}

export default function Footer() {
  const { language } = useLanguage()
  const pageContent = content[language]

  return (
    <footer className="flex w-full justify-center mt-16">
      <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center justify-between gap-12 border-t border-white-3 dark:border-black-3 pt-7 pb-7">
        <p className="text-sm text-white-3 dark:text-black-3">
          © {new Date().getFullYear()} {pageContent.description}
        </p>
        <div className="flex gap-6 ">
          <Link
            href="https://www.linkedin.com/in/brunnosillvar/"
            target="_blank"
            className="text-sm text-white-3 dark:text-black-3"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.instagram.com/buildwithbruno"
            target="_blank"
            className="text-sm text-white-3 dark:text-black-3"
          >
            Instagram
          </Link>
          <Link
            href="https://github.com/brunnosillvar"
            target="_blank"
            className="text-sm text-white-3 dark:text-black-3"
          >
            Github
          </Link>
          <Link
            href="https://www.behance.net/brunosilva130"
            target="_blank"
            className="text-sm text-white-3 dark:text-black-3"
          >
            Behance
          </Link>
        </div>
      </div>
    </footer>
  )
}
