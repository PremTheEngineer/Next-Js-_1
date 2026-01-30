import { ShoppingBasket } from "lucide-react";
import Link from "next/link";
import { CART_PAGE, HEADER_LOGO } from "@/lib/constants";

function Header() {
  return (
    <div className="h-16 border-b border-neutral-500 bg-[#ff5200] px-4 py-2 flex justify-between items-center">
      <div>
        <img className="h-14 w-38" src={HEADER_LOGO} alt="logo" />
      </div>
      <div className="flex p-2 items-center">
        <Link href={CART_PAGE()}>
          <ShoppingBasket className="h-12" />
        </Link>
        <p>View Cart</p>
      </div>
    </div>
  );
}

export default Header;
