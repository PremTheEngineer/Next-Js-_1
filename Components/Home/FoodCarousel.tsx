import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel"
import { Card } from "../ui/card"
import { CarouselItemsData } from "@/lib/mockData"
import Link from "next/link"

export function FoodCarousel(props: { data: CarouselItemsData[] }) {
  return (
    <Carousel className="w-full">
      <CarouselContent className="-ml-2">
        {props.data.map((item) => (
          <CarouselItem
            key={item.id}
            className="basis-1/2 pl-2 sm:basis-1/3 lg:basis-1/4"
          >
            <Link href={`${item.type === 'food' ? "food" : "grocery"}/${item.name}`}>
            <Card className="overflow-hidden p-0">
              <div className="relative aspect-square w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-80 w-full"
                />
              </div>
              <p className="text-sm font-bold mb-4 text-center -mt-16">{item.name}</p>
            </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
