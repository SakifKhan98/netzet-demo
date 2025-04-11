import Image from 'next/image'
import Link from 'next/link'
import right_arrow from '@/public/right_arrow.png'

export default function CTAButton() {
  return (
    <div className='w-80 flex flex-col items-center mt-4'>
      <Link href='/auth/signup'>
        <div className='w-80 h-10 flex items-center justify-center bg-fameRed rounded-xl shadow-md shadow-fameBlue text-white py-2 px-4 text-lg font-bold cursor-pointer hover:bg-fameBlue hover:shadow-fameRed transition duration-300 ease-in-out transform hover:-translate-y-1'>
          <p>GET STARTED</p>
          <Image
            src={right_arrow}
            width={8}
            alt='Fame Tonic Logo'
            className='ml-2'
            priority
          />
        </div>
      </Link>
      <p className='text-xs mt-2 opacity-80'>
        1-minute quiz for personalized insights
      </p>
    </div>
  )
}
