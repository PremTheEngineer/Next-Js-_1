"use client";

import { SpinnerEmpty } from "@/components/Loading/Loading";
import { RestaurantCard } from "@/components/RestaurantList/RestaurantCard";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { HOME } from "@/lib/constants";
import { useFoodItemsByName } from "@/network calls/fetchFoodItems";
import Link from "next/link";
import { use, useState } from "react";

export default function FoodItemRestaurant({
  params,
}: {
  params: Promise<{ foodSlug: string }>;
}) {
  const { foodSlug } = use(params);
  const [location, setLocation] = useState("Delhi");
  const foodItemName = foodSlug.charAt(0).toUpperCase() + foodSlug.substring(1);

  const { data, isLoading, isError, error } = useFoodItemsByName({
    foodItem: foodItemName,
    location: location,
  });
  const dataToRender = data?.data?.cards;

  if (isLoading) {
    return <SpinnerEmpty />;
  }
  if (isError) {
    return (
      <div className="fle flex-col justify-center items-center p-4 m-8">
        <p>Something went wrong... 🚨 </p>
        <Link href={HOME()}> Go back home </Link>
      </div>
    );
  }

  // Data fetching logic - Simulated right now
  return (
    <div className="p-8 flex flex-col gap-2">
      <div className="border-2 border-neutral-400 p-2 w-68 rounded-2xl">
        Change location 
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="rounded-md px-3 py-2 text-sm"
        >
          <option value="Delhi">Delhi</option>
          <option value="Gurugram">Gurugram</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Pune">Pune</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Chennai">Chennai</option>
        </select>
      </div>
      <TypographyH1
        text={"Showing results for " + foodItemName}
        h="2"
        color="black"
      />
      <div className="grid grid-cols-4 gap-2">
        {dataToRender?.map((card, idx) => {
          if (idx < 3) {
            return null;
          }
          const id = card?.card?.card?.info?.name;
          return <RestaurantCard key={id} data={card?.card?.card?.info} />;
        })}
      </div>
    </div>
  );
}
