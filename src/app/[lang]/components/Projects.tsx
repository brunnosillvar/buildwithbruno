'use client'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

import CodeDark from '@/assets/icons/code-dark-mode.svg'
import CodeLight from '@/assets/icons/code-light-mode.svg'
import FigmaDark from '@/assets/icons/figma-dark-mode.svg'
import FigmaLight from '@/assets/icons/figma-light-mode.svg'
import PresentationDark from '@/assets/icons/presentation-dark-mode.svg'
import PresentationLight from '@/assets/icons/presentation-light-mode.svg'
import UsersDark from '@/assets/icons/users-dark-mode.svg'
import UsersLight from '@/assets/icons/users-light-mode.svg'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'

import { ArrowRight } from 'lucide-react'

const content = {
  en: {
    development: {
      title: 'Development',
      description:
        'Creating solutions and transforming ideas into applications and web software.'
    },
    uxui: {
      title: 'UX & UI',
      description:
        'Designing modern, elegant and intuitive interfaces, and most importantly, with great usability.'
    },
    project_manager: {
      title: 'Project Management',
      description:
        'Managing technology projects and teams using agile methodologies that impact production and delivery quality.'
    },
    communication: {
      title: 'Communication',
      description:
        'Communicated in the most didactic and efficient way for understanding in lectures and meetings.'
    },
    projects: 'Projects'
  },
  pt: {
    development: {
      title: 'Desenvolvimento',
      description:
        'Criando soluções e transformando ideias em aplicações e softwares web.'
    },
    uxui: {
      title: 'UX & UI',
      description:
        'Projetando interfaces modernas, elegantes e intuitivas, e, o mais importante, com grande usabilidade.'
    },
    project_manager: {
      title: 'Gestão de Projetos',
      description:
        'Gerenciando projetos e equipes de tecnologia utilizando metodologias ágeis que impactam na produção e qualidade de entrega.'
    },
    communication: {
      title: 'Comunicação',
      description:
        'Comunicado da forma mais didática e eficiente para entendimento em palestras e reuniões.'
    },
    projects: 'Projetos'
  }
}

export default function Projects() {
  const { language } = useLanguage()
  const pageContent = content[language]
  const { theme } = useTheme()

  return (
    <section className="w-full mt-16 py-10 bg-secondary-white dark:bg-secondary-black">
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-2.5 justify-center">
        <div className="container bg-white-1 dark:bg-black-1 w-3xs px-3.5 py-14 rounded-xl">
          <Image
            src={theme === 'dark' ? CodeDark : CodeLight}
            alt="Code"
            width={40}
            height={40}
            className="mb-2"
          />
          <h4 className="text-2xl text-black-3 dark:text-white-3">
            {pageContent.development.title}
          </h4>
          <p className="text-md text-black-3 dark:text-white-3 mt-3">
            {pageContent.development.description}
          </p>
        </div>
        <div className="container bg-white-1 dark:bg-black-1 w-3xs px-3.5 py-14 rounded-xl">
          <Image
            src={theme === 'dark' ? FigmaDark : FigmaLight}
            alt="Figma"
            width={40}
            height={40}
            className="mb-2"
          />
          <h4 className="text-2xl text-black-3 dark:text-white-3">
            {pageContent.uxui.title}
          </h4>
          <p className="text-md text-black-3 dark:text-white-3 mt-3">
            {pageContent.uxui.description}
          </p>
        </div>
        <div className="container bg-white-1 dark:bg-black-1 w-3xs px-3.5 py-14 rounded-xl">
          <Image
            src={theme === 'dark' ? UsersDark : UsersLight}
            alt="Users"
            width={40}
            height={40}
            className="mb-2"
          />
          <h4 className="text-2xl text-black-3 dark:text-white-3">
            {pageContent.project_manager.title}
          </h4>
          <p className="text-md text-black-3 dark:text-white-3 mt-3">
            {pageContent.project_manager.description}
          </p>
        </div>
        <div className="container bg-white-1 dark:bg-black-1 w-3xs px-3.5 py-14 rounded-xl">
          <Image
            src={theme === 'dark' ? PresentationDark : PresentationLight}
            alt="Presentation"
            width={40}
            height={40}
            className="mb-2"
          />
          <h4 className="text-2xl text-black-3 dark:text-white-3">
            {pageContent.communication.title}
          </h4>
          <p className="text-md text-black-3 dark:text-white-3 mt-3">
            {pageContent.communication.description}
          </p>
        </div>
      </div>

      <div className="mt-10 flex justify-end px-52">
        <Link
          href="https://github.com/brunnosillvar?tab=repositories"
          target="_blank"
          className="flex items-center text-black-2 dark:text-white-2 text-xl font-light"
        >
          {pageContent.projects}
          <ArrowRight size={24} className="text-black-1 dark:text-white-1" />
        </Link>
      </div>
    </section>
  )
}
