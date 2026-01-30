import axios from "axios";
import { SwiggyApiResponse } from "./types";
import { SWIGGY_API, LOCATION_COORDINATES } from "./constants";
import { awaitedRestaurantsData, Restaurant, restaurantsListDynamicallyGenerated } from "./mockData";

const foodCollectionMap: Record<string, number> = {
  Pizza: 83631,
  Burger: 83637,
  Pasta: 80479,
  Biryani: 83639,
  GulabJamun: 80430,
  Kebabs: 80451,
  Noodles: 80463,
  Rolls: 83669,
  Shakes: 83673,
  Cake: 83655,
};

export const apiGenerator = (foodItem: string, location: string) => {
  // console.log("fooditem and id", foodItem, foodCollectionMap[foodItem]);
  type City = keyof typeof LOCATION_COORDINATES;
  const place = location as unknown as City;
  return `${SWIGGY_API}${LOCATION_COORDINATES[place].lat}&lng=${LOCATION_COORDINATES[place].lng}&collection=${foodCollectionMap[foodItem]}&tags=layout_CCS_${foodItem}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
};

export const apiGeneratorProd = (foodItem: string, location: string) => {
  type City = keyof typeof LOCATION_COORDINATES;
  const place = location as City;

  const swiggyEndpoint =
    `${SWIGGY_API}` +
    `${LOCATION_COORDINATES[place].lat}` +
    `&lng=${LOCATION_COORDINATES[place].lng}` +
    `&collection=${foodCollectionMap[foodItem]}` +
    `&tags=layout_CCS_${foodItem}` +
    `&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;

  return swiggyEndpoint;
};

export const fetchFoodItemRestaurantsProd = async (
  foodItem: string,
  location: string,
) => {
  const swiggyEndpoint = apiGenerator(foodItem, location);

  const response = await axios.get("/api/swiggy", {
    params: {
      endpoint: swiggyEndpoint,
    },
  });

  return response.data as SwiggyApiResponse;
};
export const fetchFoodItemRestaurants = async (
  foodItem: string,
  location: string,
) => {
  const url = apiGenerator(foodItem, location);

  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data as SwiggyApiResponse;
};


interface FetchRestaurantsParams {
  page: number;
  pageSize: number;
}

export interface InfiniteRestaurantsResponse<T> {
  dataToReturn: T[];
  hasMore: boolean;
  nextPage: number | null;
}
export const fetchInfiniteRestaurants = async (
  { page, pageSize = 8 }: FetchRestaurantsParams
): Promise<InfiniteRestaurantsResponse<Restaurant>> => {
  const fullData = await awaitedRestaurantsData();

  const startIdx = pageSize * (page - 1);
  const endIdx = startIdx + pageSize;

  return {
    dataToReturn: fullData.slice(startIdx, endIdx),
    hasMore: endIdx < fullData.length,
    nextPage: endIdx < fullData.length ? page + 1 : null,
  };
};