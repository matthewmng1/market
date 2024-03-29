"use client";

import { Icons } from "@/components/Icons"
import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { 
  AuthCredentialsValidator, 
  TAuthCredentialsValidator 
} from "@/lib/validators/account-credentials-validator";
import { trpc } from "@/trpc/client";
import { useState } from "react";
import { toast } from "sonner";
import { ZodError } from "zod";
import { useRouter } from "next/navigation";

export default function Page() {
  const [confirmPassword, setConfirmPassword] = useState('')
  const { 
    register, 
    handleSubmit, 
    formState: {errors}, 
  } = useForm<TAuthCredentialsValidator>({
    resolver: zodResolver(AuthCredentialsValidator),
  })

  const router = useRouter()

  const { mutate, isLoading } = trpc.auth.createPayloadUser.useMutation({
    onError: (err) => {
      if(err.data?.code === "CONFLICT"){
        toast.error("This email is already in use.")
        return
      }

      if(err instanceof ZodError){
        toast.error(err.issues[0].message)
        return
      }

      toast.error("Something went wrong. Please try again.")
    },

    onSuccess: ({ sentToEmail }) => {
      toast.success(`Verification email sent to ${sentToEmail}`)
      router.push('/verify-email?to=' + sentToEmail)
    } 
  })

  const onSubmit = ({email, password}: TAuthCredentialsValidator) => {
    console.log(password, confirmPassword)
    if(password === confirmPassword){ // Compare password with confirmed password
      console.log('okay')
      mutate({email, password});
    } else {
      console.error("Passwords do not match");
  }
}

  return  (
    <>
      <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col items-center space-y-2 text-center">
            <Icons.lionLogo className="h-20 w-20"/>
            <h1 className="text-2xl font-bold">
              Create an account
            </h1>

            <Link 
              className={buttonVariants({
              variant: 'link',
              className: 'text-blue-500 gap-1.5'
              })}
              href='/sign-in'>
              Already have an account? Sign-in
              <ArrowRight className="h-4 w-4"/>
            </Link>
          </div>
        </div>
        <div className="grid gap-6 lg:w-1/4 md:w-1/2 sm:w-3/4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  {...register('email')}
                  className={cn({
                    "focus-visible:ring-red-500": errors.email
                  })}
                  placeholder='you@email.com'  
                />
                {errors?.email && 
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                }
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="password">Password</Label>
                <Input 
                  {...register('password')}
                  type="password"
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder='Password'  
                />
                {errors?.password && 
                  <p className="text-sm text-red-500">{errors.password.message}</p>
                }
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input 
                  value={confirmPassword}
                  type="password"
                  onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmed password on change
                  className={cn({
                    "focus-visible:ring-red-500": errors.password,
                  })}
                  placeholder='Confirm Password'  
                />
              </div>
              <Button>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
    
    </>)
}