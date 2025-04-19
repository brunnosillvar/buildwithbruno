'use client'
import { Circle, ArrowDown, ArrowUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useState } from 'react'

const content = {
  en: {
    experiences: 'Experiences',
    see_more: 'See More',
    see_less: 'See Less',
    inteli: {
      title: 'Full Stack Software Engineer at Inteli',
      description:
        "Full stack web development using React, Node.js, AWS, MySQL, and other cutting-edge technologies, contributing to our students' experience when using the platform."
    },
    ally: {
      title: 'Front End Developer at Ally Hub',
      description:
        'Front-end development with ReactJS and AngularJS and interface design with Figma.'
    },
    curem: {
      title: 'Front End Developer at CUREM',
      description:
        'Front-end development with ReactJS and interface design with Figma.'
    },
    mundowap: {
      title: 'Junior Programmer at Mundo Wap Internet Solutions',
      description:
        'Front-end development with ReactJs, test planning, creation of use cases for testing, strategy, quality control, manual testing on web systems and mobile applications.'
    },
    mundowap2: {
      title: 'Test Analyst Treinee at Mundo Wap Internet Solutions',
      description:
        'Test planning, creation of use cases for testing, strategy, quality control, manual testing on web systems and mobile applications.'
    },
    ferrosider: {
      title: 'IT Support Treinee at Ferrosider Componentes',
      description:
        'User support, help desk, network management support and reporting by controlling the entry and exit of IT materials in the company.'
    },
    redenet: {
      title: 'Installation Technician at Redenet Telecom',
      description: 'Installation and maintenance on internet and servers.'
    },
    teksid: {
      title: 'Apprentice in Administrative Assistant at Teksid',
      description:
        'Administrative support, data entry, and assistance in various administrative tasks.'
    }
  },
  pt: {
    experiences: 'Experiências',
    see_more: 'Ver Mais',
    see_less: 'Ver Menos',
    inteli: {
      title: 'Engenheiro de Software Full Stack na Inteli',
      description:
        'Desenvolvimento web full stack utilizando React, Node.js, AWS, MySQL e outras tecnologias de ponta, contribuindo para a experiência dos nossos alunos ao utilizarem a plataforma.'
    },
    ally: {
      title: 'Desenvolvedor Front End na Ally Hub',
      description:
        'Desenvolvimento front-end com ReactJS e AngularJS e design de interface com Figma.'
    },
    curem: {
      title: 'Desenvolvedor Front End na CUREM',
      description:
        'Desenvolvimento front-end com ReactJS e design de interface com Figma.'
    },
    mundowap: {
      title: 'Programador Júnior na Mundo Wap Internet Solutions',
      description:
        'Desenvolvimento front-end com ReactJs, planejamento de testes, criação de casos de uso para testes, estratégia, controle de qualidade, testes manuais em sistemas web e aplicativos móveis.'
    },
    mundowap2: {
      title: 'Analista de Testes Treinee na Mundo Wap Internet Solutions',
      description:
        'Planejamento de testes, criação de casos de uso para testes, estratégia, controle de qualidade, testes manuais em sistemas web e aplicativos móveis.'
    },
    ferrosider: {
      title: 'Suporte de TI Treinee na Ferrosider Componentes',
      description:
        'Suporte ao usuário, help desk, suporte a gerenciamento de rede e relatórios controlando a entrada e saída de materiais de TI na empresa.'
    },
    redenet: {
      title: 'Técnico de Instalação na Redenet Telecom',
      description: 'Instalação e manutenção em internet e servidores.'
    },
    teksid: {
      title: 'Aprendiz em Assistente Administrativo na Teksid',
      description:
        'Suporte administrativo, entrada de dados e assistência em diversas tarefas administrativas.'
    }
  }
}

export default function Experiences() {
  const [showAll, setShowAll] = useState(false)

  const { language } = useLanguage()
  const pageContent = content[language]

  const allExperiences = [
    {
      title: pageContent.inteli.title,
      description: pageContent.inteli.description
    },
    {
      title: pageContent.ally.title,
      description: pageContent.ally.description
    },
    {
      title: pageContent.curem.title,
      description: pageContent.curem.description
    },
    {
      title: pageContent.mundowap.title,
      description: pageContent.mundowap.description
    },
    {
      title: pageContent.mundowap2.title,
      description: pageContent.mundowap2.description
    },
    {
      title: pageContent.ferrosider.title,
      description: pageContent.ferrosider.description
    },
    {
      title: pageContent.redenet.title,
      description: pageContent.redenet.description
    },
    {
      title: pageContent.teksid.title,
      description: pageContent.teksid.description
    }
  ]

  const experiences = showAll ? allExperiences : allExperiences.slice(0, 3)

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-4xl font-bold mt-16 mb-10 text-black-1 dark:text-white-1">
        {pageContent.experiences}
      </h2>

      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <div key={index} className="relative">
            {/* Connector line */}
            {index < experiences.length - 1 && (
              <div className="absolute left-[10px] top-8 bottom-0 w-[1px] h-full bg-black-1 dark:bg-white-1"></div>
            )}

            {/* Experience item */}
            <div className="flex">
              {/* Circle */}
              <div className="mr-6 mt-1.5 cursor-pointer">
                <Circle size={20} className="text-black-2 dark:text-white-2" />
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="text-xl text-black-1 dark:text-white-1">
                  {experience.title}
                </h3>
                <p className="mt-2 text-lg text-black-1 dark:text-white-1">
                  {experience.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {!showAll && (
        <div className="text-right mt-4">
          <button
            onClick={() => setShowAll(true)}
            className="text-black-2 dark:text-white-2 text-xl font-light cursor-pointer"
          >
            {pageContent.see_more}
            <ArrowDown size={20} className="inline-block ml-1" />
          </button>
        </div>
      )}

      {showAll && (
        <div className="text-right mt-4">
          <button
            onClick={() => setShowAll(false)}
            className="text-black-2 dark:text-white-2 text-xl font-light cursor-pointer"
          >
            {pageContent.see_less}
            <ArrowUp size={20} className="inline-block ml-1" />
          </button>
        </div>
      )}
    </div>
  )
}
