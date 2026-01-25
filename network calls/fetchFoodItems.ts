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

import { fetchFoodItemRestaurants } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"

interface UseFoodItemsByNameProps {
  foodItem: string
}

export const useFoodItemsByName = ({
  foodItem,
}: UseFoodItemsByNameProps) => {
  return useQuery({
    queryKey: ["food-item-restaurants", foodItem],
    queryFn: () => fetchFoodItemRestaurants(foodItem),
    enabled: Boolean(foodItem),
  })
}