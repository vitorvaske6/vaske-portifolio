"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider, NextUIProviderFunction } from './providers'
import { ContextProvider, useStateContext } from '@/contexts/ContextProvider'
import { Sidebar } from '@/components/navigation/Sidebar'
import { Navigation } from '@/components/navigation/Navigation'
import Head from 'next/head'
import { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const { currentTheme } = useStateContext();

  return (
    <html lang="en" className='scroll-smooth scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-950'>
      <head>
        <title>Vaske - Portifolio</title>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M09JXKHT79" />
        <script dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-M09JXKHT79');
          `
        }} />
      </head>
      <body className={`${inter.className} bg-gray-950 min-w-[484px]`}>
        <NextAuthProvider>
          <ContextProvider>
            <NextUIProviderFunction theme={currentTheme}>
              <Navigation />
              {children}
            </NextUIProviderFunction>
          </ContextProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
