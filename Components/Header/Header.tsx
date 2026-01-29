import {
  FOOD_URL,
  GROCERY_URL,
  HEADER_LOGO,
  HOMEPAGE_H1,
  INSTAMART_PAGE,
  RESTAURANT_URL,
} from "@/lib/constants";
import { TypographyH1 } from "../ui/typographyH1";
import { FeatureCard } from "./FeatureCard";
import Link from "next/link";
import LoginLogoutButton from "./LoginLogoutButton";

export default function Header() {
  
  return (
    <div className="flex flex-col bg-[#ff5200] items-center">
      <div className="flex justify-between px-12 items-center h-20 w-full">
        <img className="h-12 w-40" src={HEADER_LOGO} alt="logo" />
        <div className="flex items-center">
          <div className="font-bold text-white">Swiggy Corporate</div>
          <div className="font-bold text-white ml-8">
            <Link href={INSTAMART_PAGE()}>Go to Instamart</Link>
          </div>
          <div className="font-bold text-white ml-8">
            <LoginLogoutButton/>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-1/2">
        <TypographyH1 text={HOMEPAGE_H1} h="3" color="white" />
      </div>
      <div className="grid grid-cols-3 gap-4  p-4">
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
          actionURL="/grocery"
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
    </div>
  );
}
