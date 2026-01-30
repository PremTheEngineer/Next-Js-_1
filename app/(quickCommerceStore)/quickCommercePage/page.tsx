// import ItemCard from "../components/ItemCard"
// import { getAwaitedBlinkitData, restaurantsList } from "../lib/mockData"
// import { blinkitProducts } from "../lib/mockData"

// export default async function BlinkitStore() {
//   const dataToShow = await getAwaitedBlinkitData();
//   return (
//     <div className="px-20 py-8 grid grid-cols-4 gap-4">

//       {/* Displaying all items here */}
//       {
//         // restaurantsList.map((item) => {
//         //   return <ItemCard item={item} />
//         // })
//         dataToShow.map((item) => {
//           return <ItemCard key={item.id} item={item} />
//         })
//       }
//     </div>
//   )
// }

"use client";
import ItemCard from "../components/ItemCard";
import { getAwaitedBlinkitData } from "../lib/mockData";
import { SpinnerEmpty } from "../../../components/loading/Loading";
import { useQuery } from "@tanstack/react-query";

export default function BlinkitStore() {
  const { data, isLoading } = useQuery({
    queryKey: ["blinkit"],
    queryFn: getAwaitedBlinkitData,
  });
  if (isLoading) {
    return <SpinnerEmpty />;
  }
  return (
    <div className="px-20 py-8 grid grid-cols-4 gap-4">
      {/* Displaying all items here */}

      {data?.map((item) => {
        return <ItemCard key={item.id} item={item} />;
      })}
    </div>
  );
}
