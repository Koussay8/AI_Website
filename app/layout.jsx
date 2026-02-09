import './globals.css'
import '@/framer/styles.css'
import BottomBlur from '@/components/BottomBlur'

export const metadata = {
  title: 'Vextra Tech | Assistant Virtuel de Choix',
  description: 'Transformez votre entreprise avec l\'intelligence artificielle. Des résultats mesurables, une disponibilité 24/7.',
  keywords: ['AI', 'automation', 'SaaS', 'startup', 'landing page', 'Framer', 'template'],
  icons: {
    icon: [
      { url: 'https://framerusercontent.com/images/hcdjMn8kIS4gEbPgOW2qT0dbmo.svg', media: '(prefers-color-scheme: light)' },
      { url: 'https://framerusercontent.com/images/ppwVXQiSKa3NxcaUwiTZKhnIxk.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    type: 'website',
    title: 'Vextra Tech | Assistant Virtuel de Choix',
    description: 'Transformez votre entreprise avec l\'intelligence artificielle. Des résultats mesurables, une disponibilité 24/7.',
    images: ['https://framerusercontent.com/images/KpbhecEzWQ4dFSutqcW3lQOGNk.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vextra Tech | Assistant Virtuel de Choix',
    description: 'Transformez votre entreprise avec l\'intelligence artificielle. Des résultats mesurables, une disponibilité 24/7.',
    images: ['https://framerusercontent.com/images/KpbhecEzWQ4dFSutqcW3lQOGNk.png'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <BottomBlur />
      </body>
    </html>
  )
}
