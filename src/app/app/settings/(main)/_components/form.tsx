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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { Input } from '@/components/ui/input'
import { Button } from 'react-day-picker'
import { SheetFooter } from '@/components/ui/sheet'

export function ProfileForm() {
  const router = useRouter()

  const form = useForm<z.infer<typeof updateProfileSchema>>({
    resolver: zodResolver(updateProfileSchema),
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
      <form onSubmit={onSubmit} className="space-y-8 h-screen">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your todo title" {...field} />
              </FormControl>
              <FormDescription>
                This will be the publicly displayed name for the task.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                This will be the publicly displayed name for the task.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <SheetFooter className="mt-auto">
          <Button type="submit">Save changes</Button>
        </SheetFooter>
      </form>
    </Form>
  )
}
