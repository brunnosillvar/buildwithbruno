// components/Header.tsx
'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'
import { ThemeToggle } from './ThemeToggle'
import { LanguageSwitcher } from './LanguageSwitcher'
import Image from 'next/image'
import GithubDark from '@/assets/icons/github-dark-mode.svg'
import GithubLight from '@/assets/icons/github-light-mode.svg'
import InstagramDark from '@/assets/icons/instagram-dark-mode.svg'
import InstagramLight from '@/assets/icons/instagram-light-mode.svg'
import LinkedinDark from '@/assets/icons/linkedin-dark-mode.svg'
import LinkedinLight from '@/assets/icons/linkedin-light-mode.svg'
import BehanceDark from '@/assets/icons/behance-dark-mode.svg'
import BehanceLight from '@/assets/icons/behance-light-mode.svg'
import { useTheme } from '@/context/ThemeContext'

export function Header() {
  const { t, language } = useLanguage()
  const { theme } = useTheme()

  return (
    <header className="transition-colors duration-300">
      <div className="container mx-auto px-16 md:px-32 py-9 flex gap-6 justify-center md:justify-between items-center">
        <div className="flex items-center gap-6 md:gap-12">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <nav className="flex gap-6 md:gap-12">
          <Link
            href={`https://www.linkedin.com/in/brunnosillvar/`}
            target="_blank"
          >
            <Image
              src={theme === 'dark' ? LinkedinDark : LinkedinLight}
              alt={'LinkedIn'}
            />
          </Link>
          <Link
            href={`https://www.instagram.com/buildwithbruno`}
            target="_blank"
          >
            <Image
              src={theme === 'dark' ? InstagramDark : InstagramLight}
              alt={'Instagram'}
            />
          </Link>
          <Link href={`https://github.com/brunnosillvar`} target="_blank">
            <Image
              src={theme === 'dark' ? GithubDark : GithubLight}
              alt={'GitHub'}
            />
          </Link>
          <Link href={`https://www.behance.net/brunosilva130`} target="_blank">
            <Image
              src={theme === 'dark' ? BehanceDark : BehanceLight}
              alt={'Behance'}
            />
          </Link>
        </nav>
      </div>
    </header>
  )
}
