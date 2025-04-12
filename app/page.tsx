import Hero from '@/app/components/Hero'

async function wait(ms: number) {
  return new Promise((res) => setTimeout(res, ms))
}

export default async function Home() {
  await wait(1500)
  return (
    <div>
      {/* Hero Section (includes Left + Right Hero) */}
      <Hero />
      {/* Future sections go here (e.g., Features, Testimonials, Footer) */}
    </div>
  )
}
