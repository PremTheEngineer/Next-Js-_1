import { FoodCarousel } from "../../components/home/FoodCarousel";
import Link from "next/link";
import { foodData, groceryData } from "../../lib/mockData";
import { FOOD, INSTAMART_PAGE } from "../../lib/constants";

export default function Home() {
  return (
    <div className="p-20 flex flex-col">
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold cursor-pointer mb-2">
          <Link href={FOOD()}>Our best Food Options →</Link>
        </h2>
        <FoodCarousel data={foodData} />
      </div>
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold  cursor-pointer mb-2">
          <Link href={INSTAMART_PAGE()}>Shop Groceries on Instamart →</Link>
        </h2>
        <FoodCarousel data={groceryData} />
      </div>
    </div>
  );
}
