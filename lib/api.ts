import axios from "axios"

export const apiGenerator = (foodItem: string) => {
    return `https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.63270&lng=77.21980&collection=83637&tags=layout_CCS_${foodItem}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`
}

export const fetchFoodItemRestaurants = async (foodItem: string) => {
    const url = apiGenerator(foodItem)

    const response = await axios.get(url, {
        headers: {
            "Content-Type": "application/json",
        },
    })
    return response.data
}