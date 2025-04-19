import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import { Header } from '@/components/Header'
import Head from 'next/head'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

const outfitSans = Outfit({
  variable: '--font-outfit-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Bruno Rodrigues - Web Developer',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png'
  },
  description: 'My personal website.',
  manifest: '/manifest.json'
}

type PageParams = {
  lang: 'pt' | 'en'
}

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'pt' }]
}

export default async function RootLayout({
  children,
  params
}: {
  children: ReactNode
  params: Promise<PageParams>
}) {
  const resolvedParams = await params
  const { lang } = resolvedParams

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={cn(outfitSans.variable)}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <body className="min-h-screen bg-primary-white dark:bg-primary-black transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider initialLang={lang}>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow w-full">{children}</main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
