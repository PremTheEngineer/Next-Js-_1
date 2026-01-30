"use client"

import { getCloudinaryImageUrl } from "@/lib/cloudinary"
import { Badge } from "../ui/badge"
import { RestaurantCards } from "@/lib/types"

interface RestaurantCardProps {
  data: RestaurantCards
}

export function RestaurantCard({ data }: RestaurantCardProps) {
  const {
    name,
    cloudinaryImageId,
    cuisines,
    costForTwo,
    avgRating,
    totalRatingsString,
    areaName,
    locality,
    sla,
    aggregatedDiscountInfoV3,
    isOpen,
  } = data

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white hover:scale-[0.99] hover:shadow-lg transition-shadow">
      
      <div className="relative h-44 w-full">
        <img
          src={getCloudinaryImageUrl(cloudinaryImageId)}
          alt={name}
          className="h-full w-full object-cover"
        />

        {aggregatedDiscountInfoV3?.header && (
          <div className="absolute bottom-2 left-2">
            <Badge className="bg-black/80 text-white">
              {aggregatedDiscountInfoV3.header}
              {aggregatedDiscountInfoV3.subHeader
                ? ` · ${aggregatedDiscountInfoV3.subHeader}`
                : ""}
            </Badge>
          </div>
        )}
      </div>


      <div className="flex flex-col gap-1 p-3">
        
        <div className="flex items-center justify-between">
          <h3 className="truncate text-base font-semibold">{name}</h3>
          <div className="flex items-center gap-1 text-sm font-medium">
            ⭐ {avgRating}
          </div>
        </div>

        <p className="truncate text-sm text-neutral-500">
          {cuisines.join(", ")}
        </p>


        <p className="text-sm text-neutral-500">
          {locality}, {areaName}
        </p>


        <div className="mt-2 flex items-center justify-between text-sm text-neutral-600">
          <span>{sla.slaString}</span>
          <span>{costForTwo}</span>
        </div>

        {!isOpen && (
          <span className="mt-1 text-xs font-medium text-red-500">
            Currently Closed
          </span>
        )}
      </div>
    </div>
  )
}
