import { ShoppingBasket } from "lucide-react"
import { BLINKIT_LOGO_URL } from "../lib/constants"
import Link from "next/link"

function Header() {
    return (
        <div className="h-16 border-b border-neutral-500 bg-amber-300 px-4 flex justify-between items-center">
            <div>
                <img className="h-16 w-20" src={BLINKIT_LOGO_URL} alt="logo" />
            </div>
            <div>
                <Link href={"/blinkitpage/cart"}>
                    <ShoppingBasket className="h-12" />
                </Link>
            </div>
        </div >
    )
}

export default Header