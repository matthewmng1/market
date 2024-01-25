import { ABOUT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof ABOUT_CATEGORIES)[number]
interface NavBarItemProps{
  category: Category
  handleOpen: () => void
  isOpen: boolean
  isAnyOpen: boolean
}

export default function NavBarItem({category, handleOpen, isOpen, isAnyOpen} : NavBarItemProps){
  return (
    <div className="flex">
      <div className="relative flex items-center lg:space-x-4">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? 'secondary' : 'ghost'}>
            {category.label}
            <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}/>
        </Button>
      </div>
      {isOpen ? (
        <div 
          className={cn(
            "absolute inset-x-0 top-full text-sm text-muted-foreground z-50",
            {
              "animate-in fade-in-10 slide-in-from-top-5 z-50" : !isAnyOpen,
            }
          )}>
        <div
          className="absolute inset-0 top-1/2 bg-white shadow"
          aria-hidden="true"/>
        
        <div className="relative bg-white">
          <div className="mx-auto max-w-7xl px-8">
            <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
              <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-4">
                {category.featured.map((item) => (
                  <div
                    key={item.name}
                    className='group relative text-base sm:text-sm'>
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                      <Image
                        src={item.imageSrc}
                        alt='about category image'
                        fill
                        className="object-cover object-center brightness-50"
                      />
                        <Link 
                          href={item.href} 
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-xl text-nowrap text-white">
                          {item.name}
                        </Link>
                    </div>
                  </div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null }
    </div>
  )
}