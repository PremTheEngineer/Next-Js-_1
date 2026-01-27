export interface SwiggyApiResponse {
  data: {
    cards: SwiggyApiDataCards[];
  };
}
export interface SwiggyApiDataCards {
  card: {
    card: {
      info: RestaurantCards;
    };
  };
}
export interface RestaurantCards {
  id: string;
  name: string;
  cloudinaryImageId: string;

  locality: string;
  areaName: string;

  cuisines: string[];
  costForTwo: string;

  avgRating: number;
  totalRatingsString: string;

  isOpen: boolean;

  availability: {
    opened: boolean;
  };

  sla: {
    deliveryTime: number;
    slaString: string;
    lastMileTravelString: string;
  };

  aggregatedDiscountInfoV3?: {
    header?: string;
    subHeader?: string;
  };
}
