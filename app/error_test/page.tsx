import Link from 'next/link'
import React from 'react'

const ErrorTestPage: React.FC = () => {
  throw new Error('This is a test error!')

  return (
    <div className='min-h-screen flex flex-col items-center justify-top '>
      <h1 className='text-center text-4xl my-4 font-bold'>Error Test Page</h1>
      <Link
        href='/'
        className='px-6 py-3 bg-fameRed text-white rounded-lg shadow-md hover:bg-fameBlue transition transform hover:-translate-y-1 hover:scale-105'
      >
        Go Back Home
      </Link>
    </div>
  )
}

export default ErrorTestPage
