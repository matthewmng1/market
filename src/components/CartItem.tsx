import { PRODUCT_CATEGORIES } from '@/config'
import { useCart } from '@/hooks/use-cart'
import { formatPrice } from '@/lib/utils'
import { Product } from '@/payload-types'
import { ImageIcon, X } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

type CartItemProps = {
  product: Product;
  quantity: number;
};

const CartItem = ({ product, quantity }: CartItemProps) => {
  const [selectedQuantity, setSelectedQuantity] = useState(quantity);
  const { image } = product.images[0]

  const { removeItem } = useCart()
  const { updateQuantity } = useCart()

  const label = PRODUCT_CATEGORIES.find(
    ({ value }) => value === product.category
  )?.label

  const increment = () => {
    const newQuantity = Math.min(selectedQuantity + 1, 10);
    setSelectedQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };
  
  const decrement = () => {
    const newQuantity = Math.max(selectedQuantity - 1, 1);
    setSelectedQuantity(newQuantity);
    updateQuantity(product.id, newQuantity);
  };
  

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="relative aspect-square h-16 w-16 min-w-fit overflow-hidden rounded">
            {typeof image !== "string" && image.url ? (
              <Image src={image.url} alt={product.name} fill className="absolute object-cover"/> 
            ) : (
              <div className="flex h-full items-center justify-center bg-secondary">
                <ImageIcon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
              </div>
            )}
          </div>
          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-sm font-medium mb-1">
              {product.name}
            </span>
            <span>{label}</span>
            <div className="flex flex-row mt-2 text-sm text-muted-foreground">
              Quantity: 
              <div className="bg-white pl-2">
                <div className="flex flex-row border border-black">
                  <button onClick={decrement} className="pl-2 text-sm font-semibold text-center">-</button>
                    <div className="px-2">{selectedQuantity}</div>
                    {/* <input type="number" value={selectedQuantity} onChange={handleQuantityChange} /> */}
                  <button onClick={increment} className="pr-2 text-sm font-semibold text-center">+</button>
                </div>
              </div>
              
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              <button 
                onClick={() => removeItem(product.id)}
                className="flex items-center gap-0.5">
                <X className="w-3 h-4" />
                Remove
              </button>
            </div>
          </div>
        </div>
        <div className='flex flex-col space-y-1 font-medium'>
          <span className='ml-auto line-clamp-1 text-sm'>
            {formatPrice(product.price * quantity)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default CartItem;