import { redirect } from 'next/navigation'

export default function HomeRedirect() {
  // This will perform a server-side redirect to the homepage (/)
  redirect('/')
  return null // The execution never reaches here.
}
