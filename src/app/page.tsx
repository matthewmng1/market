import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import chinatown from "../../public/chinatown.jpg"


export default function Home() {
  return (
    <>
        <div className='mx-auto text-center flex flex-col items-center max-w-3xl'>
          <div className="relative w-screen overflow-auto lg:h-[calc(100vh-63px)] flex-shrink-0">
          <div className="">
            <Image
              src={chinatown}
              alt="chinatown"
              fill
              className="brightness-50"
            />
              <h1 className="absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-6xl text-white lg:text-nowrap">
                The Chinatown Network
              </h1>
            </div>
          </div>
        </div>
      <section className="border-t border-gray-200 bg-gray-50 py-20">
        <MaxWidthWrapper className="py-20">

        </MaxWidthWrapper>
        
      </section>
    </>
  );
}


{/* <Image
src={chinatown}
fill
alt="chinatown"
className="h-20 brightness-50"
/> */}