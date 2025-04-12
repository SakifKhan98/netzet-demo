import type { Metadata } from 'next'
import Banner from '@/app/components/Banner'
import Navbar from '@/app/components/Navbar'
import { Geist, Geist_Mono, Urbanist, Figtree } from 'next/font/google'
// import { Urbanist, Figtree } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

const urbanist = Urbanist({
  variable: '--font-urbanist-sans',
  subsets: ['latin']
})
const figtree = Figtree({
  variable: '--font-figtree-sans',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'FameTonic',
  description: 'Turn your influence into income'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${urbanist.variable} ${figtree.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-bgColor text-bodyText`}
      >
        {/* Top Sale Banner */}
        <Banner />
        {/* Main Content */}
        <div
          className={`min-h-screen bg-black text-white overflow-x-hidden mx-auto px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-52 ${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${figtree.variable}`}
        >
          {/* Navigation Bar */}
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
