'use client'

import { createContext, useContext, useEffect, useState } from "react";


type CartState = Record<string, number>

interface CartContextValue {
    cart: CartState
    add: (id: string) => void
    increase: (id: string) => void
    decrease: (id: string) => void
    remove: (id: string) => void
}

export const CartContext = createContext<CartContextValue | null>(null)


function CartContextProvider({ children }: { children: React.ReactNode }) {

    // useEffect(() => {
    //     console.log("CartContextProvider mounted");
    //     return () => {
    //         console.log("CartContextProvider unmounted");
    //     };
    // }, []);

    const [cart, setCart] = useState<CartState>({}); 
    // Cart should never be undefined, it can be filled with items or can be an empty object...

    const add = (id: string) => {
        setCart(prev => ({ ...prev, [id]: 1 }));
    }
    const increase = (id: string) => {
        setCart(prev => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
    }
    const decrease = (id: string) => {
        setCart(prev => {
            if (prev[id] == 1) {
                const { [id]: val, ...rest } = prev
                return rest
            } else {
                return { ...prev, [id]: prev[id] - 1 }
            }
        })
    }
    const remove = (id: string) => {
        setCart(prev => {
            const { [id]: val, ...rest } = prev
            return rest
        })
    }
    return (
        <CartContext.Provider value={{ cart, add, decrease, remove, increase }}> 
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within CartProvider")
    }
    return context
}
export default CartContextProvider