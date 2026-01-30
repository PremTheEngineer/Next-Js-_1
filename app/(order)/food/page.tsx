import { FoodCarousel } from "../../../components/home/FoodCarousel";
import { foodData, cuisinesList } from "../../../lib/mockData";

export default function FoodPage() {
  return (
    <div className="flex-flex-col gap-4 px-40">
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold cursor-pointer mb-2">
          What's on your mind
        </h2>
        <FoodCarousel data={foodData} />
      </div>
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold  cursor-pointer mb-2">
          Best Cuisine near me
        </h2>
        <div className="grid grid-cols-5 gap-2">
          {cuisinesList.map((cuisine) => (
            <div key={cuisine} className="border-2 rounded px-4 py-2">
              {cuisine}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
