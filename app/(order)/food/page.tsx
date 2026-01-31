import { cn } from "@/lib/utils";
import { FoodCarousel } from "../../../components/home/FoodCarousel";
import { foodData, cuisinesList } from "../../../lib/mockData";
import Link from "next/link";
import { CUISINES_PATH } from "@/lib/constants";

export default function FoodPage() {
  return (
    <div className="flex-flex-col gap-4 px-40">
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold cursor-pointer mb-2">
          What's on your mind - Choose from the options below
        </h2>
        <FoodCarousel data={foodData} />
      </div>
      <div className="p-4 my-4">
        <h2 className="text-xl font-bold  cursor-pointer mb-2">
          Best Cuisine near me - Only green ones work 😅
        </h2>
        <div className="grid grid-cols-5 gap-2">
          {cuisinesList.map((cuisine, idx) => {
            return idx < 10 ? (
              <Link key={cuisine} href={`${CUISINES_PATH()}/${cuisine}`}>
                <div
                  className={cn("border-2 rounded px-4 py-2", {
                    "bg-green-200 border-green-400": idx < 10,
                  })}
                >
                  {cuisine}
                </div>
              </Link>
            ) : (
              <div key={cuisine} className={cn("border-2 rounded px-4 py-2")}>
                {cuisine}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
