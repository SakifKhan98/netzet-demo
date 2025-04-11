'use client'

import Image from 'next/image'
import phoneImage from '@/public/phone.png'

export default function RightHero() {
  return (
    <div className='w-full md:w-2/3 flex items-center justify-center md:p-0 relative'>
      <div className='relative w-[350px] sm:w-[400px] md:w-[450px] lg:w-[550px] xl:w-[650px] animate-float md:-ml-20'>
        <Image
          src={phoneImage}
          alt='FameTonic Dashboard Preview'
          className='drop-shadow-xl rounded-2xl'
          priority
        />
      </div>
    </div>
  )
}
