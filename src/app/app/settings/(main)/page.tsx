import { auth } from '@/services/auth'
import { ProfileForm } from './_components/form'
import { redirect } from 'next/navigation'

export default async function Settings() {
  const session = await auth()

  if (!session) {
    redirect('/auth')
  }

  return <ProfileForm defaultValues={session?.user} />
}
