import { MoveLeftIcon } from 'lucide-react'
import Link from 'next/link'
import CartCheckoutTab from '../../components/cart/CartCheckoutTab'

function Cart() {
    return (
        <div className='flex flex-col'>
            <div className='flex p-2 border border-neutral-800 w-64 rounded-xl bg-green-400 m-4'>
                <Link className='flex' href={"/blinkitpage"}>Forgot something? Go back:  <MoveLeftIcon /> </Link>
            </div>
            <div className="flex justify-center">
                <CartCheckoutTab  />
            </div>
        </div>
    )
}

export default Cart