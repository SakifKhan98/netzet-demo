'use client'

import { useState } from 'react'
import Link from 'next/link'
import MobileNav from './MobileNav'
import Image from 'next/image'
import logo from '@/public/logo.png'

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  return (
    <header className='w-full bg-black text-white py-6 px-6 flex items-center justify-between'>
      {/* Logo */}
      <div>
        <Link href='/' className='flex items-center'>
          <Image
            src={logo}
            alt='FameTonic Logo'
            className='w-44 h-auto'
            priority
          />
        </Link>
      </div>

      {/* Desktop Nav */}
      <nav className='hidden md:flex space-x-6 text-md font-medium'>
        <Link
          href='/about'
          className='text-fameGray hover:text-fameBlue transition duration-300 ease-in-out'
        >
          About us
        </Link>
        <Link
          href='/contact'
          className='text-fameGray hover:text-fameBlue transition duration-300 ease-in-out'
        >
          Contact
        </Link>
      </nav>

      {/* Hamburger for Mobile */}
      <button
        className='md:hidden text-white text-2xl cursor-pointer transition duration-300 ease-in-out hover:text-fameBlue'
        onClick={() => setIsMobileOpen(true)}
        aria-label='Open mobile menu'
      >
        ☰
      </button>

      {/* Mobile Drawer */}
      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </header>
  )
}
