// import { fetchFoodItemRestaurants } from "@/lib/api"
// import { useQuery } from "@tanstack/react-query"

// interface FetchFoodItemsProps {
//     foodItem: string
// }

// export const getFoodItemsByName = (props: FetchFoodItemsProps) => {
//     const {foodItem} = props;
//     const {data, isLoading, error, isError} = useQuery({
//         queryKey: [foodItem],
//         queryFn: () => fetchFoodItemRestaurants(foodItem)
//     })

//     return {data, isLoading, error, isError};
// }

import { fetchFoodItemRestaurants } from "@/lib/api";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

interface UseFoodItemsByNameProps {
  foodItem: string;
  location: string;
}

export const useFoodItemsByName = ({
  foodItem,
  location,
}: UseFoodItemsByNameProps) => {
  return useQuery({
    queryKey: ["food-item-restaurants", foodItem, location],
    queryFn: () => fetchFoodItemRestaurants(foodItem, location),
    enabled: Boolean(foodItem),
    placeholderData: keepPreviousData,
  });
};
