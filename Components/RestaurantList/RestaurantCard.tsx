import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "../ui/card"
import { Badge } from "../ui/badge"
import { getCloudinaryImageUrl } from "@/lib/cloudinary"

interface RestaurantCardProps {
  data: any  // Shape - will give tomorrow
}

export function RestaurantCard({ data }: RestaurantCardProps) {
  const info = data.card.card.info

  return (
    <Card className="w-full max-w-sm overflow-hidden hover:scale-[0.98] hover:shadow-lg">
      <div className="relative aspect-4/3 w-full">
        <Image
          src={getCloudinaryImageUrl(info.cloudinaryImageId)}
          alt={info.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 400px"
        />

        {info.promoted && (
          <Badge className="absolute left-2 top-2 bg-orange-500 text-white">
            Promoted
          </Badge>
        )}
      </div>

      <CardContent className="space-y-1 p-4">
        <h3 className="truncate text-lg font-semibold">{info.name}</h3>

        <p className="text-sm text-muted-foreground">
          {info.cuisines.join(", ")}
        </p>

        <div className="flex items-center justify-between text-sm">
          <span className="font-medium">🌟 {info.avgRating}</span>
          <span>{info.sla.slaString}</span>
          <span>{info.costForTwo}</span>
        </div>

        {info.aggregatedDiscountInfoV3?.header && (
          <p className="text-sm font-semibold text-green-600">
            {info.aggregatedDiscountInfoV3.header}{" "}
            {info.aggregatedDiscountInfoV3.discountTag}
          </p>
        )}
      </CardContent>
    </Card>
  )
}
