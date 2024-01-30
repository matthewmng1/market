import { Product } from "@/payload-types"
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

export type CartItem = {
  product: Product
  quantity: number
}

type CartState = {
  items: CartItem[]
  addItem: (product: Product, quantity: number) => void
  removeItem: (product: string) => void
  updateQuantity: (id: string, newQuantity: number) => void;
  clearCart: () => void
}

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product, quantity) =>
        set((state) => {
          const existingItemIndex = state.items.findIndex(
            (item) => item.product.id === product.id
          );

          if (existingItemIndex !== -1) {
            // If the product already exists, increment the quantity
            const updatedItems = [...state.items];
            updatedItems[existingItemIndex].quantity += quantity;
            return { items: updatedItems };
          } else {
            // If the product is not in the cart, add it with quantity 1
            return { items: [...state.items, { product, quantity: quantity }] };
          }
        }),
      removeItem: (id) => 
      set((state) => ({
        items: state.items.filter(
          (item) => item.product.id !== id
        ),
      })),
      updateQuantity: (id, newQuantity) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.product.id === id ? { ...item, quantity: newQuantity } : item
          ),
        })),
      clearCart: () => set({items: []})
    }), 
    { 
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)