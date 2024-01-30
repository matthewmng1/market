"use client";

import { useCart } from "@/hooks/use-cart";
import { Product } from "@/payload-types";
import { useEffect, useState } from "react";
import { Button } from "./ui/button"

type AddToCartButtonProps = {
  product: Product;
  quantity: number
};

const AddToCartButton = ({ product, quantity = 1}: AddToCartButtonProps) => {
  const { addItem } = useCart()
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [selectedQuantity, setSelectedQuantity] = useState<number>(quantity)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSuccess(false)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [isSuccess])

  return (
    <div className="flex flex-col text-center text-xl">
      <div className="flex flex-row text-center text-nowrap py-2 mx-auto">
        Quantity
          <div className="flex flex-row text-center border border-black ml-2 ">
            <button onClick={() => setSelectedQuantity(selectedQuantity-1)} className="mx-2"> - </button>
            <div className="px-2">{selectedQuantity}</div>
            <button onClick={() => setSelectedQuantity(selectedQuantity+1)} className="mx-2"> + </button>
          </div>
      </div>
      <Button 
      onClick={() => {
        addItem(product, selectedQuantity)
        setIsSuccess(true)
        setSelectedQuantity(1)
      }} 
      size="lg" 
      className="w-full">
        {isSuccess ? 'Added!' : 'Add to cart'}
    </Button>
    </div>
    
  )
}

export default AddToCartButton;