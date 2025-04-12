import LeftHero from './LeftHero'
import RightHero from './RightHero'

export default function Hero() {
  return (
    <section className='flex flex-col-reverse md:flex-row items-center justify-between'>
      <LeftHero />
      <RightHero />
    </section>
  )
}
