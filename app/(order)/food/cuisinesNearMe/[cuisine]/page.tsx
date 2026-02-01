import { RESTAURANT_BANNER } from "@/lib/constants";
import { cuisineObject } from "@/lib/mockData";
import { notFound } from "next/navigation";

async function page(props: PageProps<"/food/cuisinesNearMe/[cuisine]">) {
  const params = await props.params;
  const cuisineName = decodeURIComponent(
    params.cuisine,
  ) as keyof typeof cuisineObject;
  const cuisineData = cuisineObject[cuisineName];
  if (!cuisineData) {
    notFound(); 
  }
  return (
    <div className="mx-48 my-4 flex flex-col gap-4">
      <div className="relative">
        <img src={RESTAURANT_BANNER} alt="banner" className="w-full h-88" />
        <h1 className="text-white text-4xl font-bold absolute top-60 left-8">
          Explore {cuisineName} cuisine
        </h1>
      </div>
      <div className="text-center text-2xl font-bold m-4">Showing details about the selected cuisine.</div>
      <div className="grid h-56 grid-cols-3 gap-4 overflow-hidden">
        {cuisineData.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${cuisineName} food ${idx + 1}`}
            className="aspect-4/3 h-full w-full object-cover rounded-xl"
          />
        ))}
      </div>

      {/* History */}
      <section className="max-w-3xl">
        <h2 className="text-xl font-semibold mb-2">About this cuisine</h2>
        <p className="text-neutral-700 leading-relaxed">
          {cuisineData.history}
        </p>
      </section>

      {/* Popular dishes */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Popular dishes</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cuisineData.cuisines.map((dish) => (
            <li
              key={dish}
              className="border rounded-xl p-4 text-center font-medium"
            >
              {dish}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default page;
