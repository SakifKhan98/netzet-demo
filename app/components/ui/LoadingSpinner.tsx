import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='relative flex items-center justify-center'>
        <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-fameRed absolute'></div>
        {/* <div className='animate-ping rounded-full h-12 w-12 border-t-4 border-b-4 border-fameBlue'></div> */}
      </div>
    </div>
  )
}

export default LoadingSpinner
