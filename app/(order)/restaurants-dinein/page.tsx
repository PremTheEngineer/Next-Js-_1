import DineInRestaurantCard from "../../../components/restaurantList/DineInRestaurantCard";
import { RESTAURANT_BANNER } from "../../../lib/constants";
import {
  restaurantsList,
  restaurantsListDynamicallyGenerated,
} from "../../../lib/mockData";
import InfiniteRestaurant from "../../../components/restaurantList/InfiniteRestaurant";

export default function Restaurants() {
  return (
    <div className="mx-48 my-4 flex flex-col gap-4">
      <div className="relative">
        <img src={RESTAURANT_BANNER} alt="banner" className="w-full h-88" />
        <h1 className="text-white text-4xl font-bold absolute top-60 left-8">
          Explore Top Dining Out Restaurants in Delhi
        </h1>
      </div>
      <InfiniteRestaurant />
    </div>
  );
}

/* This page is static - Not connected to any API, couldnt find any : (  */
