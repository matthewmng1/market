import { cn } from "@/lib/utils";
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button";

export  const ShoppingNavBar = () => {

  return (
    <div className="bg-white">
      <MaxWidthWrapper>
        <div className="border-b border-gray-200">
          <div className="flex h-10 items-center">
            <div className="mx-auto flex items-center space-x-auto">
            <Link href='/shop/best-sellers' className={buttonVariants({ variant: "ghost" })}>Best Sellers</Link>
            <span 
              className="h-3 w-px bg-gray-400" 
              aria-hidden='true'
            />
            <Link href='/shop/annual-apparel' className={buttonVariants({variant: "ghost"})}>Year of the Dragon</Link>
            <span 
              className="h-3 w-px bg-gray-400" 
              aria-hidden='true'
            />
            <Link href='/shop/hoodies-and-crewnecks' className={buttonVariants({variant: "ghost"})}>Hoodies & Crewnecks</Link>
            <span 
              className="h-3 w-px bg-gray-400" 
              aria-hidden='true'
            />
            <Link href='/shop/t-shirts' className={buttonVariants({variant: "ghost"})}>T-Shirts</Link>
            <span 
              className="h-3 w-px bg-gray-400" 
              aria-hidden='true'
            />
            <Link href='/shop/accessories' className={buttonVariants({variant: "ghost"})}>Accessories</Link>
            <span 
              className="h-3 w-px bg-gray-400" 
              aria-hidden='true'
            />
            <Link href='/shop/sale' className={buttonVariants({variant: "ghost"})}>Sale</Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>



    // <div className="mx-auto h-10">
    //   <div className="m-auto flex items-center">
    //     {/* TODO MOBILE SHOPPING NAV */}
    //   </div>
    //   <div className="mx-auto">
    //     <div className="hidden text-xs lg:flex lg:flex-1 lg:items-center lg:space-x-4">
          // <Link href='/shop-bestsellers' className={buttonVariants({ variant: "ghost" })}>Best Sellers</Link>
          // <span 
          //   className="h-3 w-px bg-gray-400" 
          //   aria-hidden='true'
          // />
          // <Link href='/shop-yearlyapparel' className={buttonVariants({variant: "ghost"})}>Year of the Dragon</Link>
          // <span 
          //   className="h-3 w-px bg-gray-400" 
          //   aria-hidden='true'
          // />
          // <Link href='/shop-hoodiescrews' className={buttonVariants({variant: "ghost"})}>Hoodies & Crewnecks</Link>
          // <span 
          //   className="h-3 w-px bg-gray-400" 
          //   aria-hidden='true'
          // />
          // <Link href='/shop-tshirts' className={buttonVariants({variant: "ghost"})}>T-Shirts</Link>
          // <span 
          //   className="h-3 w-px bg-gray-400" 
          //   aria-hidden='true'
          // />
          // <Link href='/shop-accessories' className={buttonVariants({variant: "ghost"})}>Accessories</Link>
          // <span 
          //   className="h-3 w-px bg-gray-400" 
          //   aria-hidden='true'
          // />
          // <Link href='/shop-sale' className={buttonVariants({variant: "ghost"})}>Sale</Link>
    //     </div>
    //   </div>
    // </div>
  )
  
}