import type { AppProps } from 'next/app'

import { HeroUIProvider } from '@heroui/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'

import { fontSans, fontMono } from '@/config/fonts'
import '@/styles/globals.css'
import '@/utils/i18n' // Initialize i18n
import { ContextProvider } from '@/context/ContextProvider'
import { LanguageProvider } from '@/context/LanguageProvider'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ContextProvider>
      <LanguageProvider>
        <HeroUIProvider navigate={router.push}>
          <NextThemesProvider>
            <Component {...pageProps} />
          </NextThemesProvider>
        </HeroUIProvider>
      </LanguageProvider>
    </ContextProvider>
  )
}

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
}
