import LoadingSpinner from './components/ui/LoadingSpinner'

export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/75'>
      <div className='flex flex-col items-center'>
        <LoadingSpinner />
      </div>
    </div>
  )
}
