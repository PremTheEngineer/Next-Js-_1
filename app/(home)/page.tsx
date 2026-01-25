import { FoodCarousel } from "@/Components/Home/FoodCarousel";
import Link from "next/link";
import { foodData, groceryData } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="p-20 flex flex-col">
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold cursor-pointer"><Link href={"/food"}>Our best Food Options →</Link></h2>
        <FoodCarousel data={foodData} />
      </div>
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold  cursor-pointer"><Link href={"/grocery"}>Shop Groceries on Instamart →</Link></h2>
        <FoodCarousel data={groceryData} />
      </div>
    </div>
  );
}
