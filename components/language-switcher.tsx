import React from 'react'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@heroui/dropdown'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { BrazilFlag, GlobeIcon, UsFlag } from './icons'

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter()
  const { t } = useTranslation('common')

  const handleLanguageChange = (key: string) => {
    const newLocale = key as 'en' | 'pt'

    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      router.asPath,
      { locale: newLocale }
    )
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className={className}>
          <GlobeIcon size={24} />
        </div>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Language selection"
        onAction={(key) => handleLanguageChange(key as string)}
        selectedKeys={[router.locale || 'en']}
        selectionMode="single"
      >
        <DropdownItem key="en">
          <p className="flex items-center gap-2 ">
            <UsFlag />
            English
          </p>
        </DropdownItem>
        <DropdownItem key="pt">
          <p className="flex items-center gap-2 ">
            <BrazilFlag />
            Português
          </p>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
