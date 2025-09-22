import { useTranslation } from 'next-i18next'

export type SiteConfig = {
  name: string
  description: string
  navItems: Array<{
    label: string
    href: string
  }>
  links: {
    github: string
    linkedin: string
    email: string
    portfolio: string
  }
}

export const useSiteConfig = (): SiteConfig => {
  const { t } = useTranslation('common')

  return {
    name: 'Vitor Vasconcelos',
    description: t('about.description'),
    navItems: [
      {
        label: t('navigation.home'),
        href: '/',
      },
      {
        label: t('navigation.projects'),
        href: '/projects',
      },
      {
        label: t('navigation.about'),
        href: '/about',
      },
      // {
      //   label: t('navigation.contact'),
      //   href: '/contact',
      // },
    ],
    links: {
      github: 'https://github.com/vitorvaske6',
      linkedin: 'https://linkedin.com/in/vitor-hugo-vasconcelos',
      email: 'mailto:vitorvaske6@gmail.com',
      portfolio: 'https://vitor-vaske.com.br',
    },
  }
}

// Keep the original export for backward compatibility
export const siteConfig = {
  name: 'Vitor Vasconcelos',
  description: 'Software Engineer Portfolio',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  links: {
    github: 'https://github.com/vitorvaske6',
    linkedin: 'https://linkedin.com/in/vitor-hugo-vasconcelos',
    email: 'mailto:vitorvaske6@gmail.com',
    portfolio: 'https://vitor-vaske.com.br',
  },
}
