import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from '@heroui/navbar'
import { Button } from '@heroui/button'
import { Link } from '@heroui/link'
import NextLink from 'next/link'
import { siteConfig, useSiteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import { LanguageSwitcher } from '@/components/language-switcher'
import { GithubIcon, GmailIcon } from '@/components/icons'
import { LinkedInIcon } from '@/components/icons'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useStateContext } from '@/context/ContextProvider'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const translatedSiteConfig = useSiteConfig()

  const navButtons = (
    <NavbarItem className="flex gap-4">
      <Link isExternal href={siteConfig.links.github} title="GitHub">
        <GithubIcon className="text-default-500 hover:text-primary transition-colors" />
      </Link>
      <Link isExternal href={siteConfig.links.linkedin} title="LinkedIn">
        <LinkedInIcon className="text-default-500 hover:text-primary transition-colors" />
      </Link>
      <Link isExternal href={siteConfig.links.email} title="Email">
        <GmailIcon className="text-default-500 hover:text-primary transition-colors" />
      </Link>
      <ThemeSwitch />
      <LanguageSwitcher className="text-default-500 hover:text-primary transition-colors cursor-pointer" />
    </NavbarItem>
  )

  const { currentTheme } = useStateContext()

  return (
    <HeroUINavbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src={
                currentTheme === 'dark' ? '/images/logo/darkLogo.png' : '/images/logo/lightLogo.png'
              }
              alt="Vitor Vasconcelos Logo"
              width={100}
              height={48}
              className="rounded-none dark:hidden light:block"
            />
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {translatedSiteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={router.pathname === item.href ? 'primary' : 'foreground'}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {navButtons}
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className="sm:hidden"
        />
      </NavbarContent>
      <NavbarMenu>
        {translatedSiteConfig.navItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={router.pathname === item.href ? 'primary' : 'foreground'}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  )
}
