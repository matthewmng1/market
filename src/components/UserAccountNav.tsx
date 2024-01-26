"use client";

import { useAuth } from "@/hooks/use-auth";
import { User } from "@/payload-types";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";

const UserAccountNav = ({ user }: {user: User}) => {
  const { signOut } = useAuth()


  return (
    <DropdownMenu>
      <DropdownMenuTrigger 
        asChild 
        className="overflow-visible">
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative">
              My Account
          </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent 
        className="bg-white w-60" 
        align="end">
          <div 
            className="flex items-center justify-start gap-2 p-2 shadow">
            <div 
              className="flex flex-col space-y-0.5 leading-none">
              <p 
                className="font-md text-sm text-black">
                  { user.email }  
              </p>
            </div>
          </div>
      <DropdownMenuSeparator/>
      <DropdownMenuItem asChild>
        <Link href='temp'>My Profile</Link>
      </DropdownMenuItem>

      <DropdownMenuItem>
        <Link href='/orders'>My Orders</Link>
      </DropdownMenuItem>
        
      <DropdownMenuItem onClick={signOut} className="cursor-pointer">
        Sign out
      </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserAccountNav