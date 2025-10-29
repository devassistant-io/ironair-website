import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import { Analytics } from '@/components/Analytics'
import { StructuredData } from '@/components/StructuredData'
import ScrollToHash from '@/components/ScrollToHash'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ironairhc.com'),
  title: {
    default: 'Iron Air HC | Professional HVAC Services | 24/7 Emergency Service',
    template: '%s | Iron Air HC'
  },
  description: 'Expert HVAC installation, repair & maintenance. 24/7 emergency service. Licensed technicians, 10-year warranty, competitive pricing. Serving residential & commercial. Call (365) 888-5854 for fast, reliable heating & cooling solutions.',
  keywords: [
    'HVAC services',
    'air conditioning repair',
    'furnace installation',
    'heat pump service',
    'emergency HVAC',
    '24/7 HVAC repair',
    'licensed HVAC technician',
    'commercial HVAC',
    'residential heating',
    'cooling services',
    'ductless mini split',
    'indoor air quality',
    'HVAC maintenance',
    'energy efficient HVAC',
    'smart thermostat installation',
    'boiler repair',
    'air duct cleaning',
    'HVAC contractor near me',
  ],
  authors: [{ name: 'Iron Air HC' }],
  creator: 'Iron Air HC',
  publisher: 'Iron Air HC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ironairhc.com',
    siteName: 'Iron Air HC',
    title: 'Iron Air HC | Professional HVAC Services | 24/7 Emergency Service',
    description: 'Expert HVAC installation, repair & maintenance. Licensed technicians, 10-year warranty. Call (365) 888-5854 for fast, reliable service.',
    images: [
      {
        url: '/logo.avif',
        width: 1200,
        height: 630,
        alt: 'Iron Air HC - Professional HVAC Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iron Air HC | Professional HVAC Services',
    description: 'Expert HVAC installation, repair & maintenance. 24/7 emergency service. Licensed technicians, 10-year warranty.',
    images: ['/logo.avif'],
    creator: '@ironairhc',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '192x192' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://ironairhc.com',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    bing: 'your-bing-verification-code',
  },
  category: 'Home Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </head>
      <body className="font-sans antialiased bg-white text-iron-900">
        <ScrollToHash />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
