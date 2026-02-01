"use client";

import DineInRestaurantCard from "@/components/restaurantList/DineInRestaurantCard";
import {
  fetchInfiniteRestaurants,
  InfiniteRestaurantsResponse,
} from "@/lib/api";
import { Restaurant } from "@/lib/mockData";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";

function InfiniteRestaurant() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery({
      queryKey: ["restaurants"],
      queryFn: ({ pageParam = 1 }) =>
        fetchInfiniteRestaurants({ page: pageParam, pageSize: 8 }),
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
    });

  //   console.log(data);
  const handleScroll = () => {
    const bottom =
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight;
    if (bottom && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasNextPage]);


  if (isLoading) {
    return <div className="m-16 font-bold text-center">We are loading restaurants for you...</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.pages.map((page) =>
        page.dataToReturn.map((restaurant: Restaurant) => (
          <DineInRestaurantCard key={restaurant.id} data={restaurant} />
        )),
      )}
      {isFetchingNextPage ? (
        <div className="mt-4"> Loading more pages...</div>
      ) : null}
    </div>
  );
}

export default InfiniteRestaurant;
