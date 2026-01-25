'use client'

import { RestaurantCard } from "@/Components/RestaurantList/RestaurantCard";
import { TypographyH1 } from "@/Components/ui/typographyH1";
import { biryaniData } from "@/lib/mockData";
import { useFoodItemsByName } from "@/network calls/fetchFoodItems";
import { use } from "react";

export default function FoodItemRestaurant({
    params,
}: {
    params: Promise<{ foodSlug: string }>
}) {
    const { foodSlug } = use(params);
    const foodItemName = foodSlug.charAt(0).toUpperCase() + foodSlug.substring(1);

    // const {data} =  useFoodItemsByName({foodItem: foodItemName});

    // console.log("data", data)

    // Data fetching logic - Simulated right now
    return <div className="p-8 flex flex-col gap-2">
        <TypographyH1 text={foodItemName} h="2" color="black" />
        <div className="grid grid-cols-4 gap-2">
            {biryaniData.map((item) => (
                <RestaurantCard
                    key={item.card.card.info.id}
                    data={item}
                />
            ))}
        </div>
    </div>
}