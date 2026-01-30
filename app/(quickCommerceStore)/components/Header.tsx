import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { CART_PAGE, HEADER_LOGO, HOME } from "@/lib/constants";

function Header() {
  return (
    <div className="h-16 border-b border-neutral-500 bg-[#ff5200] px-4 py-2 flex justify-between items-center shadow-2xl">
      <div>
        <Link href={HOME()}>
          <img className="h-12 w-38" src={HEADER_LOGO} alt="logo" />
        </Link>
      </div>
      <div className="flex p-2 items-center">
        <Link className="flex gap-2 items-center font-bold" href={CART_PAGE()}>
          <p>View Cart</p>
          <ShoppingBagIcon className="h-12" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
