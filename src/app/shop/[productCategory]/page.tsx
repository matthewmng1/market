import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import ProductPage from "@/components/ProductPage"
import { PRODUCT_CATEGORIES, PRODUCT_CATEGORIES_TEST } from "@/config"
import { getPayloadClient } from "@/get-payload"
import Link from "next/link"
import { off } from "process"

interface PageProps {
  params: {
    productCategory: string
  }
}

const Page = async ({ params }: PageProps) => {
  const { productCategory } = params

  const payload = await getPayloadClient()

  const { docs: productsByCategory } = await payload.find({
    collection: 'products',
    where: {
      category: {
        equals: productCategory,
      },
      displayItem: {
        equals: 'display'
      }
    }
  })

  const { docs: productsByCollection } = await payload.find({
    collection: 'products',
    where: {
      productCollections: {
        contains: productCategory,
      },
      displayItem: {
        equals: 'display',
      },
    },
  });

  const products = productsByCategory.length > 0 ? productsByCategory : productsByCollection
  const productCollection = productsByCollection[0]?.productCollections?.find((c) => c === productCategory)
  
  const label = productsByCategory.length > 0 
    ? PRODUCT_CATEGORIES.find(({ value }) => value === productsByCategory[0]?.category)?.label
    : PRODUCT_CATEGORIES.find(({ value }) => value === productCollection)?.label
  // const collectionLabel = PRODUCT_CATEGORIES.find(({value}) => value === productsByCategory[0].collections[0])?.label

  console.log(label)
  let displayLabel; 
  if(label == undefined){
    const title = productCategory.split('-')
    displayLabel = title.map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  } else {
    displayLabel = label?.replace(/-/g, ' ');
  }

  const BREADCRUMBS = [
    { id: 1, name: 'Home', href: '/' },
    { id: 2, name: `${displayLabel}`, href: `/shop/${productCategory}`}
  ]

  return (
    <MaxWidthWrapper>
      <div className="bg-white">
        <div className='mx-auto max-w-2xl px-4 pt-16 sm:px-6 sm:pt-16 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
          <div className='lg:max-w-lg lg:self-end'>
            <ol className='flex items-center space-x-2'>
              {BREADCRUMBS.map((breadcrumb, i) => (
                <li key={breadcrumb.href}>
                  <div className='flex items-center text-sm'>
                    <Link
                      href={breadcrumb.href}
                      className='font-medium text-sm text-muted-foreground hover:text-gray-900'>
                      {breadcrumb.name}
                    </Link>
                    {i !== BREADCRUMBS.length - 1 ? (
                      <svg
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                        className='ml-2 h-5 w-5 flex-shrink-0 text-gray-300'>
                        <path d='M5.555 17.776l8-16 .894.448-8 16-.894-.448z' />
                      </svg>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {products.length > 0  ? (
          <ProductPage title={displayLabel} query={{limit: 12}} products={products}/>
        ) : (
          <div>
            <ProductPage title={displayLabel} query={{limit: 12}} products={products}/>
            <span className="flex ml-20 py-10">Nothing here!</span>
            
          </div>
        )}
        

            {/* 
              Large Screens: 4x3
              Medium Screens: 2x6
              Small Screens: 1x12
                      Image - Product Name - Price 

            */}
      </div>
    </MaxWidthWrapper>
  )
}

export default Page