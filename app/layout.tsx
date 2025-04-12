import type { Metadata } from 'next'
import Banner from '@/app/components/Banner'
import Navbar from '@/app/components/Navbar'

import { figtree } from './fonts'
import './globals.css'

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
    <html lang='en' className={`${figtree.className}`}>
      <body className={`antialiased bg-bgColor text-bodyText`}>
        {/* Top Sale Banner */}
        <Banner />
        {/* Main Content */}
        <div
          className={`min-h-screen bg-black text-white overflow-x-hidden mx-auto px-4 sm:px-20 lg:px-24 xl:px-36 2xl:px-52 `}
        >
          {/* Navigation Bar */}
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  )
}
