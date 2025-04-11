import React from 'react'

const Banner = () => {
  return (
    <div className='w-full bg-gradient-to-r from-fameRed via-[#f05d8c] to-fameBlue text-white text-xs md:text-lg lg:text-xl font-medium py-4 px-6 md:py-2 md:px-4 shadow-sm'>
      <div className='mx-auto flex justify-center items-center text-center  animate-fade-in-down'>
        <p>
          <span className='text-fameBlue'>🚀FRESH BEGINNINGS SALE: </span> Extra
          25% OFF, Limited Spots - start your journey today!
        </p>
      </div>
    </div>
  )
}

export default Banner
