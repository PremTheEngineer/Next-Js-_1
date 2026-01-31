import RestaurantMenu from "@/components/restaurantList/RestaurantMenu";
import { TypographyH1 } from "@/components/ui/typographyH1";
import { getRestaurantName } from "@/lib/utils";

export default async function page(
  props: PageProps<"/restaurants-dinein/[restaurantId]">,
) {
  const restaurantId = await props.params; // Gives an object...
  const restaurantName = getRestaurantName(restaurantId);
  return (
    <div className="w-full px-16 py-8 flex flex-col gap-y-2 items-center">
      <TypographyH1
        text={`Here's the menu for "${restaurantName}"`}
        h="2"
        color="black"
      />
      <p>This is random for demonstration purpose 💁🏼</p>
      <RestaurantMenu restaurant={restaurantName} />
    </div>
  );
}
