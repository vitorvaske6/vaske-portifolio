"use client"

import './globals.css'
import { Inter } from 'next/font/google'
import { NextAuthProvider, NextUIProviderFunction } from './providers'
import { ContextProvider, useStateContext } from '@/contexts/ContextProvider'
import { Sidebar } from '@/components/navigation/Sidebar'
import { Navigation } from '@/components/navigation/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaske Protifolio',
  description: '',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
  }) {
  const { currentTheme } = useStateContext();

  return (
    <html lang="en" className='scroll-smooth scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-950'>
       <body className={`${inter.className} bg-gray-950 `}> {/*bg-gradient-to-br from-[#535353] to-[#150053] */}
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
