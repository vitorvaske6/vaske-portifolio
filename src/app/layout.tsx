"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider, NextUIProviderFunction } from './providers'
import { ContextProvider, useStateContext } from '@/contexts/ContextProvider'
import { Sidebar } from '@/components/navigation/Sidebar'
import { Navigation } from '@/components/navigation/Navigation'
import Head from 'next/head'
import { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Vaske - Protifolio',
  themeColor: [
    // { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
    // other: {
    //   rel: 'apple-touch-icon-precomposed',
    //   url: '/apple-touch-icon-precomposed.png',
    // },
  }
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
  }) {
  const { currentTheme } = useStateContext();

  return (
    <html lang="en" className='scroll-smooth scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-950'>
       <body className={`${inter.className} bg-gray-950 `}> 
        <NextAuthProvider>
          <ContextProvider>
            <NextUIProviderFunction theme={currentTheme}>
              <Navigation />
              <Sidebar />
              {children}
            </NextUIProviderFunction>
          </ContextProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
