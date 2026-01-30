"use client";

import { useEffect, useMemo, useState } from "react";
import { useCart } from "../../store/CartContextProvider";
import { blinkitItemsById } from "../../lib/mockData";
import Link from "next/link";
import { LOGIN } from "@/lib/constants";

function TotalPriceTab() {
  const { cart } = useCart();

  const [user, setUser] = useState<string | null>(null);
  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  if (!user) {
    return (
      <div className="m-4">
        Please login to checkout
        <Link
          className="m-2 bg-yellow-500 border border-neutral-300 rounded p-2"
          href={LOGIN()}
        >
          Login
        </Link>
      </div>
    );
  }

  const userName = JSON.parse(user).username;

  const priceOfItems = Object.entries(cart).reduce((acc, [key, _]) => {
    return acc + blinkitItemsById[key].price * _;
  }, 0);

  return priceOfItems ? (
    <div className="h-12 w-60 bg-yellow-300 flex flex-col items-center justify-center border border-neutral-500 p-4 m-4">
      <div>Hello {userName}</div>Your total price: {priceOfItems}
    </div>
  ) : null;
}

export default TotalPriceTab;
