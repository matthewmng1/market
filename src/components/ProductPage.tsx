'use client'

import { TQueryValidator } from '@/lib/validators/query-validator'
import { Product } from '@/payload-types'
import { trpc } from '@/trpc/client'
import ProductPageListing from './ProductPageListing'

interface ProductPageProps {
  title?: string
  products: any[]
  query: TQueryValidator
}

const FALLBACK_LIMIT = 4

const ProductPage = (props: ProductPageProps) => {
  const { title, query, products } = props

  let map: (Product | null)[] = []
  if (products && products.length) {
    map = products
  } else if (!products) {
    map = new Array<null>(
      query.limit ?? FALLBACK_LIMIT
    ).fill(null)
  }
  return (
    <section className='py-2'>
      <div className='md:flex md:items-center md:justify-between mb-4'>
        <div className='max-w-2xl px-4 py-4 ml-10 lg:max-w-4xl lg:px-0'>
          {title ? (
            <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl'>
              {title}
            </h1>
          ) : null}
        </div>
      </div>

      <div className='relative'>
        <div className='mt-2 flex items-center w-full'>
          <div className='w-full grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 md:grid-cols-3 md:gap-y-10 lg:gap-x-8'>
            {map.map((product, i) => (
              <ProductPageListing
                key={`product-${i}`}
                product={product}
                index={i}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductPage;