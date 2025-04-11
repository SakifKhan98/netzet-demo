'use client'

import Image from 'next/image'
import Link from 'next/link'
import errorImage from '@/public/error.jpg'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  // Log the error when the component mounts
  useEffect(() => {
    console.error('Global error:', error)
  }, [error])

  return (
    <div className='min-h-screen flex flex-col items-center justify-top pt-12 px-8'>
      <div className='w-[350px] sm:w-[400px] md:w-[450px]  md:-ml-20'>
        <p className='text-lg mb-4 text-center'>
          {error.message || 'An unexpected error occurred.'}
        </p>
        <Image
          src={errorImage}
          alt='Fame Tonic Dashboard Preview'
          className='rounded-2xl'
          priority
        />
      </div>
      <p className='text-lg mb-4 text-center'>Oops! Something went wrong.</p>

      <Link
        onClick={() => reset()}
        href='/'
        className='px-6 py-3 bg-fameRed text-white rounded-lg shadow-md hover:bg-fameBlue transition transform hover:-translate-y-1 hover:scale-105'
      >
        Go Back Home
      </Link>
    </div>
  )
}
