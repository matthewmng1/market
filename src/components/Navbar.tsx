import Link from "next/link";
import { Cart } from "./Cart";
import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { NavBarItems } from "./NavBarItems";
import { ShoppingNavBar } from "./ShoppingNavBar";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { getServerSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";

export const NavBar = async () => {
  const nextCookies = cookies()
  const { user }= await getServerSideUser(nextCookies)

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center justify-center">
              {/* MOBILE NAVBAR LEOGIC */}

              <div className="hidden z-50 lg:ml-2 lg:block lg:self-stretch">
                <NavBarItems/>
              </div>
              <div className="absolute mx-auto">
                <Link href='/'>
                  <Icons.whiteBlackFullLogo className="h-8 w-42"/>
                </Link>
              </div>
              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                  {user ? null : (
                    <Link href='/sign-in' className={buttonVariants({variant: "ghost"})}>
                      Sign in
                    </Link>
                  )}
                  {user ? null : (
                      <span 
                        className="h-6 w-px bg-gray-200" 
                        aria-hidden='true'
                      />
                    )}
                  {user ? null : (
                    <Link href='/register' className={buttonVariants({variant: "ghost"})}>
                      Register
                    </Link>
                  )}
                  {user ? null : (
                      <span 
                        className="h-6 w-px bg-gray-200" 
                        aria-hidden='true'
                      />
                    )}
                  {user ? (
                    <Link href='/account' className={buttonVariants({variant: "ghost"})}>
                      Account
                    </Link>
                  ) : null }
                  {user ? (
                    <span 
                      className="h-6 w-px bg-gray-200" 
                      aria-hidden='true'
                    />
                  ) : null }
                  {user ? (
                    <Link href='/sign-out' className={buttonVariants({variant: "ghost"})}>
                      Sign out
                    </Link>
                  ) : null}
                  {user ? (
                    <span 
                      className="h-6 w-px bg-gray-200" 
                      aria-hidden='true'
                    />
                  ) : null }
                  <div className="m-4 flow-root lg:ml-6">
                    <Cart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        <ShoppingNavBar/>
        </MaxWidthWrapper>
      </header>
    </div>
  )
}