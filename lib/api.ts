import axios from "axios";
import { SwiggyApiResponse } from "./types";

export const foodCollectionMap: Record<string, number> = {
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
export const LOCATION_COORDINATES = {
  Delhi: {
    label: "Connaught Place",
    lat: 28.6315,
    lng: 77.2167,
  },
  Gurugram: {
    label: "Cyber Hub",
    lat: 28.494,
    lng: 77.088,
  },
  Mumbai: {
    label: "Bandra West",
    lat: 19.0607,
    lng: 72.8362,
  },
  Pune: {
    label: "Hinjewadi",
    lat: 18.5913,
    lng: 73.7389,
  },
  Hyderabad: {
    label: "HITEC City",
    lat: 17.4483,
    lng: 78.3915,
  },
  Kolkata: {
    label: "Park Street",
    lat: 22.5535,
    lng: 88.35,
  },
  Chennai: {
    label: "T. Nagar",
    lat: 13.0418,
    lng: 80.2337,
  },
} as const

export const apiGenerator = (foodItem: string ,location:string) => {
  console.log("fooditem and id", foodItem, foodCollectionMap[foodItem]);
  type City = keyof typeof LOCATION_COORDINATES;
  const place = location as unknown as City;
  return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=${LOCATION_COORDINATES[place].lat}&lng=${LOCATION_COORDINATES[place].lng}&collection=${foodCollectionMap[foodItem]}&tags=layout_CCS_${foodItem}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`;
};

export const fetchFoodItemRestaurants = async (foodItem: string, location: string) => {
  const url = apiGenerator(foodItem, location);

  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.data as SwiggyApiResponse;
};
