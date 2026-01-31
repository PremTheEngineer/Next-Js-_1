"use client";

import { randomMenuGenerator } from "@/lib/mockData";
import { useState } from "react";
import MenuItemCard from "./MenuItemCard";

export default function RestaurantMenu({ restaurant }: { restaurant: string }) {
  const [isVegToggle, setIsVegToggle] = useState(false);
  const restaurantMenu = randomMenuGenerator(restaurant);
  return (
    <div className="border-2 border-orange-400 bg-orange-200 rounded-2xl w-[40%] flex flex-col gap-4 p-4">
      <div className="flex gap-2 items-center pl-8 font-bold">
        <p>Veg only  </p>
        <input
          type="checkbox"
          checked={isVegToggle}
          onChange={(e) => setIsVegToggle(e.target.checked)}
        />
      </div>
      {/* Drinks */}
      <MenuItemCard itemList={restaurantMenu.drinks} genre="Drinks" vegOnly={isVegToggle} />
      {/* Starters */}
      <MenuItemCard itemList={restaurantMenu.starters} genre="Starters" vegOnly={isVegToggle} />
      {/* Main Course */}
      <MenuItemCard itemList={restaurantMenu.mainCourse} genre="Main Course" vegOnly={isVegToggle} />
      {/* Desserts/Sweets */}
      <MenuItemCard itemList={restaurantMenu.sweets} genre="Desserts" vegOnly={isVegToggle} />
    </div>
  );
}
