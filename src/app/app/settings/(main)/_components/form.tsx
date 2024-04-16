'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { updateProfile } from '../actions'
import { toast } from '@/components/ui/use-toast'
import { updateProfileSchema } from '../schema'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { SheetFooter } from '@/components/ui/sheet'
import { Session } from 'next-auth'
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'

type ProfileFormProps = {
  defaultValues: Session['user']
}

export function ProfileForm({ defaultValues }: ProfileFormProps) {
  const router = useRouter()

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      name: defaultValues?.name ?? '',
      email: defaultValues?.email ?? '',
    },
  })

  const onSubmit = form.handleSubmit(async (data) => {
    await updateProfile(data)
    router.refresh()

    toast({
      title: 'Profile Updated',
      description: 'Your profile has been updated sucessfully',
    })
  })

  return (
    <Form {...form}>
      <form onSubmit={onSubmit} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Name</CardTitle>
            <CardDescription>Enter your name here</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter> This will be the publicly displayed name.</CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Email</CardTitle>
            <CardDescription>Enter your email here</CardDescription>
          </CardHeader>
          <CardContent>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} readOnly />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter> This will be the publicly displayed email.</CardFooter>
        </Card>

        <SheetFooter className="mt-auto">
          <Button type="submit" disabled={form.formState.isSubmitting}>
            Save changes
          </Button>
        </SheetFooter>
      </form>
    </Form>
  )
}
