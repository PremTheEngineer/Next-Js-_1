'use client'

import { Minus, Plus } from "lucide-react";
import { RestaurantType } from "../lib/mockData"
import { useCart } from "../store/CartContextProvider"

// id: string;
// name: string;
// image: string;
// costForTwo: string;
// distance: string;
// address: string;
// offer: string;

function ItemCard({ item }: { item: RestaurantType }) {
    const { cart, add, increase, decrease, remove } = useCart();
    const addToCartButton = (<button onClick={() => add(item.id)}>Add to cart</button>);
    const itemActions = (
        <div className="flex justify-between items-center">
            <button className="w-8 h-full" onClick={() => increase(item.id)} > <Plus /> </button>
            {cart[item.id]}
            <button className="w-8 h-full" onClick={() => decrease(item.id)} > <Minus /> </button>
        </div>
    );
    return (
        <div className="w-full px-4 py-2 rounded-xl border border-neutral-200 hover:scale-[0.98] hover:shadow-lg flex flex-col gap-2">
            <div>
                <img src={item.image} className="w-full object-cover" alt={item.name} />
            </div>
            <h3 className="font-bold">{item.name}</h3>
            <p className="text-muted-foreground">Price: {item.costForTwo}</p>
            <p className="text-muted-foreground">Address: {item.address}</p>
            <p className="text-muted-foreground">Distance: {item.distance}</p>
            <div className="border-2 border-neutral-400 rounded p-2 bg-amber-300 font-bold text-center">
                {cart[item.id] ? itemActions : addToCartButton}
            </div>
        </div>
    )
}

export default ItemCard