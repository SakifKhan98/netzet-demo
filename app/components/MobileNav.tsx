'use client'

import Link from 'next/link'

interface MobileNavProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-95 z-50 transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}
    >
      <div className='p-6 flex flex-col items-start space-y-6'>
        <button
          onClick={onClose}
          className='text-white text-2xl self-end cursor-pointer hover:text-fameBlue transition duration-300 ease-in-out'
        >
          ✕
        </button>
        <Link
          href='/about'
          onClick={onClose}
          className='text-white text-lg font-semibold hover:text-fameBlue transition duration-300 ease-in-out'
        >
          About us
        </Link>
        <Link
          href='/contact'
          onClick={onClose}
          className='text-white text-lg font-semibold hover:text-fameBlue transition duration-300 ease-in-out'
        >
          Contact
        </Link>
      </div>
    </div>
  )
}
