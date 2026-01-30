import {
  FOOD_URL,
  GROCERY_URL,
  HEADER_LOGO,
  HOME,
  HOMEPAGE_H1,
  INSTAMART_PAGE,
  RESTAURANT_URL,
  SUSHI_PNG,
  VEGGIES_PNG,
} from "@/lib/constants";
import { TypographyH1 } from "../ui/typographyH1";
import { FeatureCard } from "./FeatureCard";
import Link from "next/link";
import LoginLogoutButton from "./LoginLogoutButton";
import { ArrowUpRightIcon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-col bg-[#ff5200] items-center relative">
      <div className="flex justify-between px-12 items-center h-20 w-full">
        <Link href={HOME()}>
          <img className="h-12 w-40" src={HEADER_LOGO} alt="logo" />
        </Link>
        <div className="flex items-center">
          <div className="font-bold text-white">Swiggy Corporate</div>
          <div className="font-bold text-white ml-8">
            <Link href={INSTAMART_PAGE()}>Go to Instamart</Link>
          </div>
          <div className="flex gap-2 ml-8 border-2 border-neutral-700 p-2 rounded-xl hover:bg-gray-50">
            {" "}
            <Link href={`${HOME()}#app-feature-card`}>
              {" "}
              Get the app now{" "}
            </Link>{" "}
            <ArrowUpRightIcon />
          </div>
          <div className="font-bold text-white ml-8 ">
            <LoginLogoutButton />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <TypographyH1 text={HOMEPAGE_H1} h="3" color="white" />
      </div>
      <div className="grid grid-cols-3 gap-4 p-4 mb-8">
        <FeatureCard
          imgURL={FOOD_URL}
          title="Food Delivery"
          action="Get 60% off"
          actionURL="/food"
          description="From Restaurants"
        />
        <FeatureCard
          imgURL={GROCERY_URL}
          title="Instamart Grocery"
          action="Get 50% off"
          actionURL={INSTAMART_PAGE()}
          description="Instant Grocery"
        />
        <FeatureCard
          imgURL={RESTAURANT_URL}
          title="Restaurants"
          action="Get 30% off"
          actionURL="/restaurants-dinein"
          description="Enjoy restaurants near you"
        />
      </div>
      <img src={VEGGIES_PNG()} className="absolute left-0 bottom-20 z-1 h-90" />
      <img src={SUSHI_PNG()} className="absolute right-0 bottom-20 z-1 h-90" />
    </div>
  );
}
