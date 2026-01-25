import ItemCard from "../components/ItemCard"
import { restaurantsList } from "../lib/mockData"

export default function BlinkitStore() {
  return (
    <div className="px-20 py-8 grid grid-cols-4 gap-4">
      {/* Displaying all items here */}
      {
        restaurantsList.map((item) => {
          return <ItemCard item={item} />
        })
      }
    </div>
  )
}
