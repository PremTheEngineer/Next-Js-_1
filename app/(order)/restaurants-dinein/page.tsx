import DineInRestaurantCard from "../../../components/RestaurantList/DineInRestaurantCard";
import { RESTAURANT_BANNER } from "../../../lib/constants";
import { restaurantsList } from "../../../lib/mockData";

export default function Restaurants() {
  return (
    <div className="mx-48 my-4 flex flex-col gap-4">
      <div className="relative">
        <img src={RESTAURANT_BANNER} alt="banner" className="w-full h-88" />
        <h1 className="text-white text-4xl font-bold absolute top-60 left-8">
          Explore Top Dining Out Restaurants in Delhi
        </h1>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {restaurantsList?.map((restaurant) => (
          <DineInRestaurantCard data={restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
}


/* This page is static - Not connected to any API, couldnt find any : (  */