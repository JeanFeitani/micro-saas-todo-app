'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useForm } from "react-hook-form"

  
export function AuthForm(){
  const form = useForm()

  const handleSubmit = form.handleSubmit((data) => {
    console.log(data)
  })
  
  return (
    <div className="mx-auto max-w-sm space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Log in</h1>
        <p className="text-gray-500 dark:text-gray-400">Enter your email to log in or create an account</p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" placeholder="m@example.com" required type="email" {...form.register('email')} />
        </div>
        <Button className="w-full">Send Magic Link</Button>
      </form>
      <div className="mt-4 text-center text-sm">
        Dont have an account?
        <Link className="underline" href="">
          Sign Up
        </Link>
      </div>
    </div>
  )
}