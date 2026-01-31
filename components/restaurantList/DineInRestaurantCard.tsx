import Image from "next/image";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import { BookIcon } from "lucide-react";
import Link from "next/link";
import { DINE_IN_PATH } from "@/lib/constants";

interface RestaurantData {
  data: {
    id: string;
    name: string;
    image: string;
    costForTwo: string;
    distance: string;
    address: string;
    offer?: string;
  };
}

export default function DineInRestaurantCard({ data }: RestaurantData) {
  return (
    <Card className="w-full max-w-sm overflow-hidden hover:scale-[0.98] hover:shadow-lg">
      <div className="relative aspect-4/3 w-full">
        <Image
          src={data.image}
          alt={data.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 400px"
        />
        {data.offer && (
          <Badge className="absolute left-2 top-2 bg-orange-500 text-white">
            Offers available
          </Badge>
        )}
      </div>
      <CardContent className="space-y-1 px-4 py-2">
        <h3 className="truncate text-lg font-semibold">{data.name}</h3>
        <p className="text-sm text-muted-foreground">{data.costForTwo}</p>
        <p className="text-sm text-gray-500">{data.address}</p>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 items-start">
        <div className="flex gap-2 border-2 rounded-xl border-blue-400 bg-blue-200 p-2 cursor-pointer">
            <Link href={`${DINE_IN_PATH()}/${data.name}`}><p>Show menu</p></Link>
            <BookIcon />
        </div>
        <div
          className={cn(
            "w-full border-2 rounded-xl border-green-400 p-2 bg-green-200",
            { "bg-red-200 border-red-400": data.offer == undefined },
          )}
        >
          {data.offer ?? "No offers running"}
        </div>
      </CardFooter>
    </Card>
  );
}

/* 

{
      id: "res-101",
      name: "Zahra Biryani House",
      image: RESTAURANT_IMAGE,
      costForTwo: "₹300 for two",
      distance: "1.3 km",
      address: "Jama Masjid, Old Delhi",
      offer: "WALK-IN 20% OFF",
    },
    
*/
