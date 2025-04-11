import Image from 'next/image'
import Link from 'next/link'
import errorImage from '@/public/404.png'

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-top pt-12 px-8'>
      <div className='w-[350px] sm:w-[400px] md:w-[450px]  md:-ml-20'>
        <Image
          src={errorImage}
          alt='Fame Tonic Dashboard Preview'
          className='drop-shadow-xl rounded-2xl'
          priority
        />
      </div>
      <p className='text-lg mb-4 text-center'>
        Sorry, we couldn&apos;t find the page you were looking for.
      </p>
      <Link
        href='/'
        className='px-6 py-3 bg-fameRed text-white rounded-lg shadow-md hover:bg-fameBlue transition transform hover:-translate-y-1 hover:scale-105'
      >
        Go Back Home
      </Link>
    </div>
  )
}
