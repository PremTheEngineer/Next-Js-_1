import { TypographyH1 } from "@/components/ui/typographyH1";
import { RESTAURANT_BANNER } from "@/lib/constants";
import { getSpacedName } from "@/lib/utils";
import React from "react";

async function page(props: PageProps<"/food/cuisinesNearMe/[cuisine]">) {
  const params = await props.params;
  const cuisineName = params.cuisine.split("%20").join(" ");
  return (
    <div className="mx-48 my-4 flex flex-col gap-4">
      <div className="relative">
        <img src={RESTAURANT_BANNER} alt="banner" className="w-full h-88" />
        <h1 className="text-white text-4xl font-bold absolute top-60 left-8">
          Explore {cuisineName} cuisine
        </h1>
      </div>
      Not implemented... No api, too much static data... ☹️
    </div>
  );
}

export default page;
