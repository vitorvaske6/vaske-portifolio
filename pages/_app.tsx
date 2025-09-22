import type { AppProps } from 'next/app'

import { HeroUIProvider } from '@heroui/system'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useRouter } from 'next/router'
import { appWithTranslation } from 'next-i18next'
import nextI18NextConfig from '../next-i18next.config.js'

import { fontSans, fontMono } from '@/config/fonts'
import '@/styles/globals.css'
import { ContextProvider } from '@/context/ContextProvider'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <ContextProvider>
      <HeroUIProvider navigate={router.push}>
        <NextThemesProvider>
          <Component {...pageProps} />
        </NextThemesProvider>
      </HeroUIProvider>
    </ContextProvider>
  )
}

export default appWithTranslation(App, nextI18NextConfig)

export const fonts = {
  sans: fontSans.style.fontFamily,
  mono: fontMono.style.fontFamily,
}
