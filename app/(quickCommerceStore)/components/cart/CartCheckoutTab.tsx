"use client";

import { useCart } from "../../store/CartContextProvider";
import CartListItem from "./CartListItem";
function CartCheckoutTab() {
  const { cart, add, increase, decrease, remove } = useCart();
  const cartAsAnArray = Object.entries(cart);
  return (
    <div className="flex flex-col border-2 border-neutral-900 rounded-2xl gap-4 w-140 m-8 p-4">
      {cartAsAnArray.length > 0 ? (
        cartAsAnArray.map(([key, val]) => {
          return (
            <CartListItem
              key={key}
              id={key}
              qty={val}
              add={add}
              increase={increase}
              decrease={decrease}
              remove={remove}
            />
          );
        })
      ) : (
        <div className="text-center">
          No items added, please go back and add items in your cart 👺
        </div>
      )}
    </div>
  );
}

export default CartCheckoutTab;
