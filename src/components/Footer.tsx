import Link from "next/link";

export default function Footer() {

  return (
    <div className="bg-black bottom-0 z-50 mt-auto h-auto text-white">
      <div className="relative">
        <div className="mx-auto-max-w-screen px-8">
          <div className="grid grid-cols-4 gap-x-6 gap-y-16">
          <div className="py-6 col-span-3 col-start-1 grid grid-cols-3 gap-x-8">
            <div>
              <h1 className="font-bold text-xl">Categories</h1>
              <ul className="ml-2 text-sm group-hover:underline">
                <li><Link href='/shop-bestsellers'>Best Sellers</Link></li>
                <li><Link href='/shop-yearlyproducts'>Year of the Dragon</Link></li>
                <li><Link href='/shop-hoodiescrews'>Hoodies & Crewnecks</Link></li>
                <li><Link href='/shop-tshirts'>T-Shirts</Link></li>
                <li><Link href='/shop-accessories'>Accessories</Link></li>
                <li><Link href='/shop-sale'>Sale</Link></li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl">Info</h1>
              <ul className="ml-2 text-sm group-hover:underline">
                <li><Link href='/contact-us'>Contact Us</Link></li>
                <li><Link href='/careers'>Careers</Link></li>
                <li><Link href='/shippingandreturns'>Shipping & Returns</Link></li>
                <li><Link href='/refunds'>Refunds</Link></li>
                <li><Link href='/tc'>Terms & Conditions</Link></li>
                <li><Link href='/privacypolicy'>Privacy Policy</Link></li>
                <li><Link href='/termsofservice'>Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl">About Us</h1>
              <p className="ml-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio fuga aut magni assumenda nihil voluptas fugit repellat totam veniam, similique eligendi veritatis quisquam atque facere, temporibus deleniti distinctio alias.</p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}