import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Vitor Vasconcelos - Portifolio',
    short_name: 'Vaske - Portifolio',
    description: 'Portifolio of Vitor Vasconcelos.',
    start_url: '/',
    display: 'standalone',
    background_color: '#030712',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}