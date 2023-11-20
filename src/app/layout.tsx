import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import { Navigation } from '@/components/navigation/Navigation'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Vaske - Portifolio',
  description: ''
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" className='scroll-smooth scrollbar-thin scrollbar-thumb-white scrollbar-track-gray-950'>
      <head>
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
        <Providers>
              <Navigation />
              {children}
        </Providers>
      </body>
    </html>
  )
}
