'use client'

import { useCart } from "../../store/CartContextProvider"
import CartListItem from "./CartListItem";
function CartCheckoutTab() {
    const { cart, add, increase, decrease, remove } = useCart();
    return (
        <div className="flex flex-col border-2 border-neutral-900 rounded-2xl gap-4 w-140 m-8 p-4">
            {
                Object.entries(cart).length > 0 ? Object.entries(cart).map(([key, val]) => {
                    return <CartListItem
                        id={key}
                        qty={val}
                        add={add}
                        increase={increase}
                        decrease={decrease}
                        remove={remove}
                    />
                }) : "No items added, please go back and add items in your cart 😇"

            }
        </div>
    )
}

export default CartCheckoutTab