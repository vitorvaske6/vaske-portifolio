import { Link } from '@heroui/link'

import { Head } from './head'

import { GithubIcon } from '@/components/icons'
import { LinkedInIcon } from '@/components/icons'
import { siteConfig } from '@/config/site'
import { Navbar } from '@/components/navbar'
import Image from 'next/image'
import { useStateContext } from '@/context/ContextProvider'

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useStateContext()

  return (
    <div className="relative flex flex-col h-screen">
      <Head />
      <Navbar />
      <main className="container mx-auto max-w-7xl px-6 flex-grow pt-10">{children}</main>
      <footer className="w-full py-12 border-t border-default-100">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col">
              <Image
                src={
                  currentTheme === 'dark'
                    ? '/images/logo/darkLogo.png'
                    : '/images/logo/lightLogo.png'
                }
                alt="Vitor Vasconcelos Logo"
                width={100}
                height={48}
                className="rounded-none dark:hidden light:block mb-4"
              />
              <p className="text-default-600 max-w-xs">
                Software Engineer solving complex problems with creative and efficient software
                solutions.
              </p>
              <div className="flex gap-4 mt-4">
                <Link isExternal aria-label="GitHub" href={siteConfig.links.github}>
                  <GithubIcon className="text-default-500 hover:text-primary transition-colors" />
                </Link>
                <Link isExternal aria-label="LinkedIn" href={siteConfig.links.linkedin}>
                  <LinkedInIcon className="text-default-500 hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold mb-4">Links</h3>
              <div className="flex flex-col gap-2">
                {siteConfig.navItems.map((item) => (
                  <Link
                    key={item.href}
                    className="text-default-600 hover:text-primary transition-colors"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold mb-4">Contact</h3>
              <Link
                className="text-default-600 hover:text-primary transition-colors"
                href={siteConfig.links.email}
              >
                {siteConfig.links.email.replace('mailto:', '')}
              </Link>
              <p className="text-default-600 mt-4">Based in Brazil</p>
            </div>
          </div>
          <div className="border-t border-default-100 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-default-600 text-sm">
              © {new Date().getFullYear()} Vitor Vasconcelos. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
