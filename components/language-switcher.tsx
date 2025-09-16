import React from 'react'
import { Button } from '@heroui/button'
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem
} from "@heroui/dropdown";
import { useLanguage } from '@/context/LanguageProvider'
import { GlobeIcon } from './icons';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, t } = useLanguage()

  const handleLanguageChange = (key: string) => {
    setLanguage(key as 'en' | 'pt')
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          variant="ghost"
          size="sm"
          className="min-w-10 h-10"
        >
          <GlobeIcon size={18} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language selection"
        onAction={(key) => handleLanguageChange(key as string)}
        selectedKeys={[language]}
        selectionMode="single"
      >
        <DropdownItem key="en" className="flex items-center gap-2">
          <span className="text-lg">🇺🇸</span>
          English
        </DropdownItem>
        <DropdownItem key="pt" className="flex items-center gap-2">
          <span className="text-lg">🇧🇷</span>
          Português
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
