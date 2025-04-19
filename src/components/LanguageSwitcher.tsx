// components/LanguageSwitcher.tsx
'use client'

import { useLanguage } from '@/context/LanguageContext'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Languages } from 'lucide-react'

export function LanguageSwitcher() {
  const { changeLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Languages className="text-black-1 dark:text-white-1 cursor-pointer" />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          className="flex justify-center cursor-pointer"
          onClick={() => changeLanguage('en')}
        >
          EN
        </DropdownMenuItem>
        <DropdownMenuItem
          className="flex justify-center cursor-pointer"
          onClick={() => changeLanguage('pt')}
        >
          PT
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
