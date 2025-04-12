'use client'

import Link from 'next/link'
import React from 'react'

const ErrorTestPage: React.FC = () => {
  const throwError = () => {
    throw new Error('This is a test error!')
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-top '>
      <h1 className='text-center text-4xl my-4 font-bold'>Error Test Page</h1>
      <button
        onClick={throwError}
        className='px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 transition transform hover:-translate-y-1 hover:scale-105'
      >
        Throw Error
      </button>
      <Link
        href='/'
        className='mt-4 px-6 py-3 bg-fameRed text-white rounded-lg shadow-md hover:bg-fameBlue transition transform hover:-translate-y-1 hover:scale-105'
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default ErrorTestPage
