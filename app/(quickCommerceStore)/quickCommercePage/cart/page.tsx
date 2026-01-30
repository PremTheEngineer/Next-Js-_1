import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import CartCheckoutTab from "../../components/cart/CartCheckoutTab";
import TotalPriceTab from "../../components/cart/TotalPriceTab";
import { INSTAMART_PAGE } from "@/lib/constants";

function Cart() {
  return (
    <div className="flex flex-col h-[533px]">
      <div className="flex p-2 border border-neutral-800 w-64 rounded-xl bg-green-400 m-4">
        <Link className="flex" href={INSTAMART_PAGE()}>
          Forgot something? Go back: <MoveLeftIcon />
        </Link>
      </div>
      <div className="flex justify-center">
        <CartCheckoutTab />
      </div>
      <div className="self-center">
        <TotalPriceTab />
      </div>
    </div>
  );
}

export default Cart; 
