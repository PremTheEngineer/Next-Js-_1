
import { Delete, Minus, Plus } from "lucide-react";
import { restaurantsById } from "../../lib/mockData";

interface CartListItemProps {
    id: string,
    qty: number,
    add: (id: string) => void
    increase: (id: string) => void
    decrease: (id: string) => void
    remove: (id: string) => void
}

function CartListItem({
    id,
    qty,
    add,
    increase,
    decrease,
    remove,
}: CartListItemProps) {
    const restaurant = restaurantsById[id];
    const actions = (
        <div className="flex justify-between items-center w-24">
            <button className="w-8 h-8" onClick={() => increase(id)} > <Plus /> </button>
            <div className="w-8">{qty}</div>
            <button className="w-8 h-8" onClick={() => decrease(id)} > <Minus /> </button>
        </div>
    );
    const strictActions = (
        <button className="w-8 h-8" onClick={() => remove(id)}> <Delete /> </button>
    )
    return (
        <div className="flex h-16 border border-neutral-200 hover:scale-[0.98] items-center p-2 justify-between">
            <img src={restaurant.image} className="h-12 w-12" />
            <p>{restaurant.name}</p>
            {actions}
            {strictActions}
        </div>
    )
}

export default CartListItem