'use client'

import { Product } from '@/payload-types'
import { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'
import Link from 'next/link'
import { cn, formatPrice } from '@/lib/utils'
import ImageSlider from './ImageSlider'

interface ProductPageListingProps {
  product: Product | null
  index: number
}

const ProductPageListing = ({
  product,
  index,
}: ProductPageListingProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 75)

    return () => clearTimeout(timer)
  }, [index])

  if (!product || !isVisible) {
    return <ProductPlaceholder />;
  }

  const validUrls = product.images
    .map(({ image }) =>
      typeof image === 'string' ? image : image.url
    )
    .filter(Boolean) as string[]

  console.log(validUrls)

  return (
    <Link
      className={cn(
        'invisible h-full w-full cursor-pointer group/main',
        {
          'visible animate-in fade-in-5': isVisible,
        }
      )}
      href={`/product/${product.id}`}>
      <div className='flex flex-col  w-full'>
        <ImageSlider urls={validUrls} />
        <div className='flex flex-col text-center justify-between w-full'>
          <h3 className='mx-auto mt-2 font-bold text-medium text-gray-700'>
            {product.name}
          </h3>
          <p className='mx-auto mt-2 font-medium text-sm text-gray-900'>
            {formatPrice(product.price)}
          </p>
        </div>
      </div>
    </Link>
  );
}


const ProductPlaceholder = () => {
  return (
    <div className='flex flex-col w-full'>
      <div className='relative bg-zinc-100 aspect-square w-full overflow-hidden rounded-xl'>
        <Skeleton className='h-full w-full' />
      </div>
      <Skeleton className='mt-4 w-2/3 h-4 rounded-lg' />
      <Skeleton className='mt-2 w-16 h-4 rounded-lg' />
      <Skeleton className='mt-2 w-12 h-4 rounded-lg' />
    </div>
  )
}

export default ProductPageListing