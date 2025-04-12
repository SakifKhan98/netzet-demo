'use client'

import CTAButton from './CTAButton'

export default function LeftHero() {
  return (
    <div className='w-full md:w-2/3 px-4 py-4 md:py-4 flex flex-col justify-start text-center md:text-left z-100'>
      <h1 className='order-1 text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-bold font-title leading-tight md:mb-1'>
        Want to Turn Social Media Into a Profitable Career?
      </h1>
      <h2 className='order-2 text-3xl sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-4xl font-semibold mb-4 text-fameBlue text-shadow-red font-title'>
        Discover your way to success with Fametonic:
      </h2>

      <ul className='order-3 space-y-2 text-left text-sm sm:text-md md:text-md lg:text-md xl:text-lg 2xl:text-lg mb-4'>
        <li>✨ Start growing your influence right away—no waiting required!</li>
        <li>
          ✨ Create viral TikToks and Reels step by step with easy-to-follow
          lessons
        </li>
        <li>✨ Use a Personal AI Worker to boost your content</li>
        <li>✨ Learn from expert-led courses for aspiring influencers</li>
      </ul>

      <div className='order-5 sm:order-4 flex flex-col items-center md:items-start'>
        <CTAButton />
      </div>

      <div className='order-4 sm:order-5 text-xs my-6 opacity-60'>
        <p className='text-xs sm:text-sm md:text-sm'>
          By clicking &quot;Get Started&quot;, you agree to our Terms, Privacy
          Policy, and Subscription Terms.
        </p>
        <p className='text-[8px] sm:text-[10px] md:text-xs mt-4'>
          Fametonic 2025 ©All Rights Reserved.
        </p>
      </div>
    </div>
  )
}
