export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Vitor Vaske',
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
  ],
  links: {
    github: 'https://github.com/vitorvaske6',
    linkedin: 'https://linkedin.com/in/vitor-hugo-vasconcelos',
    email: 'mailto:vitorvaske6@gmail.com',
    portfolio: 'https://vitor-vaske.com.br',
  },
}
