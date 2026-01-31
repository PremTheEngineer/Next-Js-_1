import { RESTAURANT_IMAGE, RESTAURANT_IMAGES } from "./constants";

export interface CarouselItemsData {
  type: string;
  id: string;
  name: string;
  image: string;
}

export const foodData: CarouselItemsData[] = [
  {
    type: "food",
    id: "pizza",
    name: "Pizza",
    image:
      "https://wp-cdn.typhur.com/wp-content/uploads/2025/01/homemade-pizza-in-air-fryer.jpg",
  },
  {
    type: "food",
    id: "burger",
    name: "Burger",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349",
  },
  {
    type: "food",
    id: "biryani",
    name: "Biryani",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0",
  },
  {
    type: "food",
    id: "pasta",
    name: "Pasta",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
  },
  {
    type: "food",
    id: "GulabJamun",
    name: "GulabJamun",
    image:
      "https://imgs.search.brave.com/_gmDSBOtTvYLvwDCc4JcdQLTq5_jpcNGSFNC9fXe-ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzE2LzU4LzAwLzE0/LzM2MF9GXzE2NTgw/MDE0NzhfSmJnWHlz/VDZPS0lueEdBRFBO/d2kxdXRKSkNzUHJC/Q2ouanBn",
  },
  {
    type: "food",
    id: "kebabs",
    name: "Kebabs",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/23/FNK_Indian-Fried-Chicken_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1677264108617.webp",
  },
  {
    type: "food",
    id: "noodles",
    name: "Noodles",
    image: "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841",
  },
  {
    type: "food",
    id: "rolls",
    name: "Rolls",
    image:
      "https://i.ytimg.com/vi/B5HdAw_Y0TU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA2TAaTRk8XxoZ1uMT-ZqmnWQE0Ow",
  },
  {
    type: "food",
    id: "shakes",
    name: "Shakes",
    image:
      "https://imgs.search.brave.com/lLfozpVomSl7sUGrvix--63fbjQ7JyWdarmwTbXap0Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMy/NTkxODgxNC9waG90/by9zZXQtb2YtZGlm/ZmVyZW50LW1pbGtz/aGFrZXMtaW4tZGlz/cG9zYWJsZS1wbGFz/dGljLWdsYXNzZXMu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTVTRE9mODU1WWk4/ZEdEQWdoV1BQT0hp/TkxnUjRGa1ppcXNS/MWx2aDVZaE09",
  },
  {
    type: "food",
    id: "cake",
    name: "Cake",
    image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f",
  },
];

export const groceryData: CarouselItemsData[] = [
  {
    type: "grocery",
    id: "vegetables",
    name: "Vegetables",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
  },
  {
    type: "grocery",
    id: "fruits",
    name: "Fruits",
    image: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b",
  },
  {
    type: "grocery",
    id: "rice",
    name: "Rice",
    image:
      "https://c.ndtvimg.com/2023-08/brlp7gk_uncooked-rice-or-rice-grains_625x300_18_August_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=738",
  },
  {
    type: "grocery",
    id: "atta",
    name: "Atta",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/wheat-flour-gehoon-aata-2012621330-mrjzfmwc.jpg",
  },
  {
    type: "grocery",
    id: "cooking-oil",
    name: "Cooking Oil",
    image:
      "https://cdn.cloverhealth.com/filer_public/0c/09/0c09e8d5-92e7-473a-8848-c71d876f64a1/8-types-of-cooking-oils-and-when-to-use-them.png",
  },
  {
    type: "grocery",
    id: "milk",
    name: "Milk",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
  },
  {
    type: "grocery",
    id: "eggs",
    name: "Eggs",
    image: "https://images.unsplash.com/photo-1587486913049-53fc88980cfc",
  },
  {
    type: "grocery",
    id: "bread",
    name: "Bread",
    image:
      "https://www.tasteofhome.com/wp-content/uploads/2018/01/Mom-s-Italian-Bread_EXPS_TOHcom24_41847_P2_MD_04_19_2b.jpg",
  },
  {
    type: "grocery",
    id: "spices",
    name: "Spices",
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d",
  },
  {
    type: "grocery",
    id: "pulses",
    name: "Pulses",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/15/0/HE_dried-legumes-istock-2_s4x3.jpg.rend.hgtvcom.1280.960.85.suffix/1455572939649.webp",
  },
];

export const biryaniData = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "817359",
          name: "Zahra Restaurant & Cafe",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/4/a005407d-a1b3-4ce3-95b4-82e7fb367781_817359.JPG",
          locality: "Old Delhi",
          areaName: "Jama Masjid",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Mughlai", "North Indian", "Snacks"],
          avgRating: 4.3,
          parentId: "229129",
          avgRatingString: "4.3",
          totalRatingsString: "2.7K+",
          promoted: true,
          adTrackingId:
            "cid=5bb4d851-678f-40db-8323-da75674cd140~p=0~adgrpid=5bb4d851-678f-40db-8323-da75674cd140#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=817359~plpr=COLLECTION~eid=b6794173-da42-4a4a-912f-9df7b8f1c1dc~srvts=1769249015040~collid=83639",
          sla: {
            deliveryTime: 46,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "45-55 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "5bb4d851-678f-40db-8323-da75674cd140",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=817359&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1053751",
          name: "Honest Bowl",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/24/2875df7a-1a18-4d34-bfb4-cff3bd67e44e_0f07b466-4323-4766-b759-929ce6e015fb.jpeg",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "High Protein", "Biryani"],
          avgRating: 4,
          parentId: "612552",
          avgRatingString: "4.0",
          totalRatingsString: "115",
          sla: {
            deliveryTime: 18,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "High%20Protein/rx%20tag%205.png",
                description: "High Protein",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "High%20Protein/rx%20tag%205.png",
                      description: "High Protein",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "60% OFF",
            subHeader: "UPTO ₹120",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1053751&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1072666",
          name: "Punjabi Angithi (Vegorama Group)",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/6/4e38f0a0-ea9b-480c-9a55-fa47a9b0468b_a100f7e6-9113-499d-a2e0-23681213c1df.JPG",
          locality: "KAROL BAGH",
          areaName: "Jhandewalan",
          costForTwo: "₹300 for two",
          cuisines: ["North Indian", "Chinese", "Tandoor", "rolls"],
          avgRating: 4.3,
          veg: true,
          parentId: "465050",
          avgRatingString: "4.3",
          totalRatingsString: "3.0K+",
          promoted: true,
          adTrackingId:
            "cid=71187520-d724-4488-9c17-14f264d6ee65~p=1~adgrpid=71187520-d724-4488-9c17-14f264d6ee65#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1072666~plpr=COLLECTION~eid=dcd152d3-b6e5-4ed4-baad-3a1029590086~srvts=1769249015040~collid=83639",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
                description: "Delivery!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Ratnesh_Badges/Rx_Awards_2025/Local%20Gems.png",
                      description: "Delivery!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "71187520-d724-4488-9c17-14f264d6ee65",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1072666&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1155658",
          name: "GharSe - Homestyle & Healthy Tiffins",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/12/10/16e426af-1bf7-47b4-a96e-71aa61cb55be_1155658.JPG",
          locality: "E-2/27",
          areaName: "KAROL BAGH",
          costForTwo: "₹200 for two",
          cuisines: ["Biryani", "Thalis", "Home Food"],
          avgRating: 4.3,
          parentId: "663389",
          avgRatingString: "4.3",
          totalRatingsString: "64",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1155658&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1107088",
          name: "Dum Biryani By Punjabi Angithi",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/8/6/df584c26-ce79-47ed-8330-c5f77cbf1d4f_42f59a8b-de2c-4530-8358-7d67f18070bc.JPG",
          locality: "KAROL BAGH",
          areaName: "Jhandewalan",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "North Indian", "Tandoor"],
          avgRating: 4.2,
          veg: true,
          parentId: "575605",
          avgRatingString: "4.2",
          totalRatingsString: "141",
          promoted: true,
          adTrackingId:
            "cid=780190db-3e38-4546-bab7-36741e0244ca~p=2~adgrpid=780190db-3e38-4546-bab7-36741e0244ca#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1107088~plpr=COLLECTION~eid=42db9cc3-06aa-4d2c-b607-ca4ab37a9369~srvts=1769249015040~collid=83639",
          sla: {
            deliveryTime: 28,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "780190db-3e38-4546-bab7-36741e0244ca",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1107088&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1201370",
          name: "1881 Dum House: Lucknow's Legacy",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/10/13/9d4313dc-e72c-4915-a52d-ae411890ae62_9ae0f4a1-e997-43c2-8140-6716ad568024.jpg",
          locality: "E-2/27",
          areaName: "KAROL BAGH",
          costForTwo: "₹200 for two",
          cuisines: ["North Indian", "Biryani", "Awadhi"],
          avgRating: 4.4,
          parentId: "687728",
          avgRatingString: "4.4",
          totalRatingsString: "141",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 3,
            serviceability: "SERVICEABLE",
            slaString: "20-30 mins",
            lastMileTravelString: "3.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 02:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1201370&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "8620",
          name: "Biryani Blues",
          cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Lucknowi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.3,
          parentId: "13813",
          avgRatingString: "4.3",
          totalRatingsString: "31K+",
          promoted: true,
          adTrackingId:
            "cid=a6ecb58d-1843-40fa-a9b2-87f72bf629d0~p=3~adgrpid=a6ecb58d-1843-40fa-a9b2-87f72bf629d0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=8620~plpr=COLLECTION~eid=9504da2f-2627-46a7-bb40-4faaa016f1bc~srvts=1769249015040~collid=83639",
          sla: {
            deliveryTime: 14,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "3.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "a6ecb58d-1843-40fa-a9b2-87f72bf629d0",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=8620&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1187109",
          name: "Indus Flavour (Proudly Vegetarian)",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/10/5663ceea-2ac2-4c07-a22d-aaa894e029d5_ccf133fc-23a3-4b1a-be06-2fb33a97d22d.png",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹600 for two",
          cuisines: [
            "North Indian",
            "Chinese",
            "Snacks",
            "Punjabi",
            "Tandoor",
            "Thalis",
            "Biryani",
            "Lucknowi",
            "Home Food",
            "barbeque",
          ],
          avgRating: 4.6,
          veg: true,
          parentId: "475923",
          avgRatingString: "4.6",
          totalRatingsString: "24",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 0.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹125 OFF",
            subHeader: "ABOVE ₹399",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          isNewlyOnboarded: true,
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1187109&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "8620",
          name: "Biryani Blues",
          cloudinaryImageId: "97377e54937c079fe269d744aa66274a",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹400 for two",
          cuisines: [
            "Biryani",
            "Hyderabadi",
            "Lucknowi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.3,
          parentId: "13813",
          avgRatingString: "4.3",
          totalRatingsString: "31K+",
          promoted: true,
          adTrackingId:
            "cid=a6ecb58d-1843-40fa-a9b2-87f72bf629d0~p=4~adgrpid=a6ecb58d-1843-40fa-a9b2-87f72bf629d0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=8620~plpr=COLLECTION~eid=1bae12eb-5be1-425d-b1bc-ccf5fb2efcb0~srvts=1769251826741~collid=83639",
          sla: {
            deliveryTime: 19,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 04:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-Biryani.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Biryani.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹59",
            logoCtx: {
              text: "BENEFITS",
            },
            footerText: "3 DEALS LEFT",
            secondaryHeaderType: "SECONDARY_HEADER_TYPE_USAGE_LIMIT_OFFER",
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.1",
              ratingCount: "3.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "a6ecb58d-1843-40fa-a9b2-87f72bf629d0",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=8620&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "1080445",
          name: "Karigari - By Chef Harpal Singh Sokhi",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/5/1/0bffc962-a327-4862-bf4e-433ef4f8f609_decda8ae-897b-4c6d-9e58-ec8e02051493.jpeg",
          locality: "Chankya Puri",
          areaName: "Connaught Place",
          costForTwo: "₹800 for two",
          cuisines: ["North Indian", "Kebabs", "Biryani", "Mughlai"],
          avgRating: 4.5,
          parentId: "527617",
          avgRatingString: "4.5",
          totalRatingsString: "77",
          sla: {
            deliveryTime: 27,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹149",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=1080445&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "186222",
          name: "The Biryani Life",
          cloudinaryImageId: "iatzastkg2qb2cwilcyu",
          locality: "Minto Road",
          areaName: "Connaught Place",
          costForTwo: "₹250 for two",
          cuisines: [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages",
          ],
          avgRating: 4.1,
          parentId: "8496",
          avgRatingString: "4.1",
          totalRatingsString: "1.4K+",
          promoted: true,
          adTrackingId:
            "cid=c6d5c9ab-7935-4666-aa55-f0a0fd9ae391~p=9~adgrpid=c6d5c9ab-7935-4666-aa55-f0a0fd9ae391#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=186222~plpr=COLLECTION~eid=8a9983c3-6dc1-4c9e-a838-8ab32611bca6~srvts=1769251826741~collid=83639",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "c6d5c9ab-7935-4666-aa55-f0a0fd9ae391",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=186222&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "944228",
          name: "House of Biryan- Biryani, Kepsa and More",
          cloudinaryImageId: "b76e2e25e2d02260f469dab0f8e4955e",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹300 for two",
          cuisines: ["Biryani", "Kebabs", "Rolls"],
          avgRating: 4.3,
          parentId: "385250",
          avgRatingString: "4.3",
          totalRatingsString: "680",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 0.4,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹80",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=944228&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "17835",
          name: "Behrouz Biryani",
          cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
          locality: "Minto Road",
          areaName: "Gandhi Market, Minto Road",
          costForTwo: "₹500 for two",
          cuisines: [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts",
          ],
          avgRating: 4.3,
          parentId: "1803",
          avgRatingString: "4.3",
          totalRatingsString: "9.3K+",
          promoted: true,
          adTrackingId:
            "cid=f21be5f0-4be3-438b-8a62-2bd0cd67137d~p=10~adgrpid=f21be5f0-4be3-438b-8a62-2bd0cd67137d#ag4~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=17835~plpr=COLLECTION~eid=d73efe45-f15e-43b3-a6a3-24032e4362db~srvts=1769251826741~collid=83639",
          sla: {
            deliveryTime: 24,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:59:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "newg.png",
                      description: "Gourmet",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "65% OFF",
            subHeader: "UPTO ₹125",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "f21be5f0-4be3-438b-8a62-2bd0cd67137d",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=17835&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "940492",
          name: "Baap Of Rolls",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2025/7/4/210ae299-41e9-49a6-a48d-15d9f42b43a4_2be683e5-3cf6-454a-b114-b60473ca9c54.png",
          locality: "Karol Bagh",
          areaName: "Karol Bagh",
          costForTwo: "₹249 for two",
          cuisines: [
            "Rolls",
            "Snacks",
            "Momos",
            "Beverages",
            "Dessert",
            " Shawarma",
            "Biryani",
          ],
          avgRating: 4.3,
          parentId: "14310",
          avgRatingString: "4.3",
          totalRatingsString: "396",
          sla: {
            deliveryTime: 32,
            lastMileTravel: 1.9,
            serviceability: "SERVICEABLE",
            slaString: "30-40 mins",
            lastMileTravelString: "1.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 22:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹89",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=940492&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "31754",
          name: "Gulati",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/2/9fef1c55-ce9b-4b24-9c7e-dbaf81bcc475_31754 (2).jpg",
          locality: "Pandara Road",
          areaName: "Pandara Road",
          costForTwo: "₹1000 for two",
          cuisines: [
            "Mughlai",
            "Biryani",
            "Indian",
            "Desserts",
            "Lucknowi",
            "Beverages",
            "Kebabs",
          ],
          avgRating: 4.6,
          parentId: "4010",
          avgRatingString: "4.6",
          totalRatingsString: "7.7K+",
          promoted: true,
          adTrackingId:
            "cid=020320d8-f47c-49af-931e-28580ea8cb4c~p=12~adgrpid=020320d8-f47c-49af-931e-28580ea8cb4c#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=31754~plpr=COLLECTION~eid=ed848ede-c93c-4e6a-94b0-59f6a4590fc9~srvts=1769251826741~collid=83639",
          sla: {
            deliveryTime: 44,
            lastMileTravel: 3.5,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "3.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 00:30:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Butter%20Chicken.png",
                description: "Delivery!",
              },
              {
                imageId: "newg.png",
                description: "Gourmet",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-Butter%20Chicken.png",
                    },
                  },
                  {
                    attributes: {
                      description: "Gourmet",
                      imageId: "newg.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "7.6K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "020320d8-f47c-49af-931e-28580ea8cb4c",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=31754&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "998339",
          name: "Canteen Central",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/8/20/4ad7a311-b12a-461f-85ef-74885b985047_4274079b-faf7-4ab4-bee1-1f787b49b805.png_compressed",
          locality: "BHAGAT SINGH MARKET",
          areaName: "GOLE MARKET",
          costForTwo: "₹250 for two",
          cuisines: ["Snacks", "Indian", "Chaat", "Biryani"],
          avgRating: 4.2,
          parentId: "582290",
          avgRatingString: "4.2",
          totalRatingsString: "74",
          sla: {
            deliveryTime: 29,
            lastMileTravel: 2.4,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "2.4 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-24 23:45:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId:
                  "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                description: "OnlyOnSwiggy",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId:
                        "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                      description: "OnlyOnSwiggy",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹200 OFF",
            subHeader: "ABOVE ₹599",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=998339&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "286518",
          name: "UBQ-Meals,Thalis & Bowls",
          cloudinaryImageId:
            "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/c6f3aab3-4c9d-4831-af32-0ddbcbf93ed5_286518.JPG",
          locality: "Janpath",
          areaName: "Janpath",
          costForTwo: "₹300 for two",
          cuisines: [
            "North Indian",
            "Kebabs",
            "Barbecue",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 4.4,
          parentId: "617376",
          avgRatingString: "4.4",
          totalRatingsString: "4.4K+",
          promoted: true,
          adTrackingId:
            "cid=4346fc01-7945-4553-ae7c-24b8fbe707ce~p=13~adgrpid=4346fc01-7945-4553-ae7c-24b8fbe707ce#ag5~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=286518~plpr=COLLECTION~eid=efea298f-16e2-494c-a631-42b62f8d7241~srvts=1769251826741~collid=83639",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 01:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹74",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "14K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "4346fc01-7945-4553-ae7c-24b8fbe707ce",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=286518&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "14677",
          name: "Delhi Darbar",
          cloudinaryImageId: "uldkywmrlh56am6lrtpt",
          locality: "Bengali Market",
          areaName: "Bengali Market",
          costForTwo: "₹400 for two",
          cuisines: [
            "Thalis",
            "Biryani",
            "Chinese",
            "Rolls & Wraps",
            "Mughlai",
            "Tandoor",
            "Beverages",
          ],
          avgRating: 4.1,
          parentId: "3908",
          avgRatingString: "4.1",
          totalRatingsString: "17K+",
          sla: {
            deliveryTime: 21,
            lastMileTravel: 1.5,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "1.5 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 00:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "50% OFF",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=14677&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "302684",
          name: "Barbeque Nation",
          cloudinaryImageId: "v4ryntwbvxuogbwfg3kj",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹600 for two",
          cuisines: [
            "North Indian",
            "Barbecue",
            "Kebabs",
            "Biryani",
            "Street Food",
            "Snacks",
          ],
          avgRating: 4.4,
          parentId: "2438",
          avgRatingString: "4.4",
          totalRatingsString: "3.0K+",
          promoted: true,
          adTrackingId:
            "cid=720a64d9-e644-42ab-881b-c83252a14389~p=16~adgrpid=720a64d9-e644-42ab-881b-c83252a14389#ag5~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=302684~plpr=COLLECTION~eid=94548823-4a8f-4943-9430-cc5ae2b3c726~srvts=1769251826741~collid=83639",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 01:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹74",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.2",
              ratingCount: "14K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "720a64d9-e644-42ab-881b-c83252a14389",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=302684&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "669014",
          name: "Bheemeshwara - A South Indian Delicacy",
          cloudinaryImageId: "f54632fd00e31427f8dfdbb122871ecb",
          locality: "Connaught Place",
          areaName: "Connaught Place",
          costForTwo: "₹350 for two",
          cuisines: ["South Indian", " Biryani", " Andhra"],
          avgRating: 4.4,
          parentId: "473314",
          avgRatingString: "4.4",
          totalRatingsString: "4.0K+",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 1.3,
            serviceability: "SERVICEABLE",
            slaString: "15-20 mins",
            lastMileTravelString: "1.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2026-01-25 00:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.3",
              ratingCount: "2.2K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=669014&source=collection&query=Biryani",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];

export const restaurantsList = [
  {
    id: "res-101",
    name: "Zahra Biryani House",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹300 for two",
    distance: "1.3 km",
    address: "Jama Masjid, Old Delhi",
    offer: "WALK-IN 20% OFF",
  },
  {
    id: "res-102",
    name: "Spice Route Kitchen",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹450 for two",
    distance: "2.1 km",
    address: "Karol Bagh, Delhi",
    offer: "10% OFF with HDFC Bank",
  },
  {
    id: "res-103",
    name: "Royal Mughlai Darbar",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹500 for two",
    distance: "3.4 km",
    address: "Chandni Chowk, Delhi",
    offer: "Flat ₹100 OFF",
  },
  {
    id: "res-104",
    name: "Urban Tandoor",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹600 for two",
    distance: "1.8 km",
    address: "Rajouri Garden, Delhi",
    offer: "20% OFF up to ₹120",
  },
  {
    id: "res-105",
    name: "Delhi Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹350 for two",
    distance: "0.9 km",
    address: "Lajpat Nagar, Delhi",
    offer: "15% OFF with ICICI Cards",
  },
  {
    id: "res-106",
    name: "The Biryani Club",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹400 for two",
    distance: "2.7 km",
    address: "Saket, Delhi",
    offer: "BUY 1 GET 1",
  },
  {
    id: "res-107",
    name: "Masala Junction",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹280 for two",
    distance: "1.1 km",
    address: "Dwarka, Delhi",
    offer: "Flat 25% OFF",
  },
  {
    id: "res-108",
    name: "Nawab’s Kitchen",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹550 for two",
    distance: "4.2 km",
    address: "Civil Lines, Delhi",
    offer: "10% OFF with SBI Cards",
  },
  {
    id: "res-109",
    name: "Tandoori Tales",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹480 for two",
    distance: "2.9 km",
    address: "Pitampura, Delhi",
    offer: "₹75 OFF above ₹399",
  },
  {
    id: "res-110",
    name: "House of Kebabs",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹650 for two",
    distance: "5.1 km",
    address: "Connaught Place, Delhi",
    offer: "20% OFF with Axis Bank",
  },
  {
    id: "res-111",
    name: "Biryani & Beyond",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹420 for two",
    distance: "3.0 km",
    address: "Mayur Vihar, Delhi",
    offer: "Flat ₹125 OFF",
  },
  {
    id: "res-112",
    name: "Desi Handi",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹320 for two",
    distance: "1.5 km",
    address: "Preet Vihar, Delhi",
    offer: "WALK-IN 15% OFF",
  },
  {
    id: "res-113",
    name: "The Spice Affair",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹700 for two",
    distance: "6.0 km",
    address: "Vasant Kunj, Delhi",
    offer: "10% OFF on Weekdays",
  },
  {
    id: "res-114",
    name: "Lucknowi Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹500 for two",
    distance: "2.4 km",
    address: "Shaheen Bagh, Delhi",
    offer: "Flat ₹150 OFF",
  },
  {
    id: "res-115",
    name: "Khaati Peeti Rasoi",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹260 for two",
    distance: "0.7 km",
    address: "Uttam Nagar, Delhi",
    offer: "20% OFF on Combos",
  },
  {
    id: "res-116",
    name: "Flavours of India",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹580 for two",
    distance: "4.8 km",
    address: "Green Park, Delhi",
    offer: "₹100 Cashback",
  },
  {
    id: "res-117",
    name: "Street Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹220 for two",
    distance: "1.0 km",
    address: "Ashok Vihar, Delhi",
    offer: "Flat 30% OFF",
  },
  {
    id: "res-118",
    name: "Dum Pukht Express",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹750 for two",
    distance: "6.5 km",
    address: "Aerocity, Delhi",
    offer: "10% OFF with Amex",
  },
  {
    id: "res-119",
    name: "Curry & Claypot",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹360 for two",
    distance: "2.2 km",
    address: "Rohini, Delhi",
    offer: "₹80 OFF above ₹299",
  },
  {
    id: "res-120",
    name: "Mehfil-e-Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹520 for two",
    distance: "3.9 km",
    address: "Okhla, Delhi",
    offer: "20% OFF up to ₹150",
  },
  {
    id: "res-1065741",
    name: "Zahra Biryani House",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹300 for two",
    distance: "1.3 km",
    address: "Jama Masjid, Old Delhi",
    offer: "WALK-IN 20% OFF",
  },
  {
    id: "res-1065742",
    name: "Spice Route Kitchen",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹450 for two",
    distance: "2.1 km",
    address: "Karol Bagh, Delhi",
    offer: "10% OFF with HDFC Bank",
  },
  {
    id: "res-1065743",
    name: "Royal Mughlai Darbar",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹500 for two",
    distance: "3.4 km",
    address: "Chandni Chowk, Delhi",
    offer: "Flat ₹100 OFF",
  },
  {
    id: "res-1065744",
    name: "Urban Tandoor",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹600 for two",
    distance: "1.8 km",
    address: "Rajouri Garden, Delhi",
    offer: "20% OFF up to ₹120",
  },
  {
    id: "res-1065745",
    name: "Delhi Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹350 for two",
    distance: "0.9 km",
    address: "Lajpat Nagar, Delhi",
    offer: "15% OFF with ICICI Cards",
  },
  {
    id: "res-1065746",
    name: "The Biryani Club",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹400 for two",
    distance: "2.7 km",
    address: "Saket, Delhi",
    offer: "BUY 1 GET 1",
  },
  {
    id: "res-1065747",
    name: "Masala Junction",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹280 for two",
    distance: "1.1 km",
    address: "Dwarka, Delhi",
    offer: "Flat 25% OFF",
  },
  {
    id: "res-1065748",
    name: "Nawab’s Kitchen",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹550 for two",
    distance: "4.2 km",
    address: "Civil Lines, Delhi",
    offer: "10% OFF with SBI Cards",
  },
  {
    id: "res-1065749",
    name: "Tandoori Tales",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹480 for two",
    distance: "2.9 km",
    address: "Pitampura, Delhi",
    offer: "₹75 OFF above ₹399",
  },
  {
    id: "res-1165740",
    name: "House of Kebabs",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹650 for two",
    distance: "5.1 km",
    address: "Connaught Place, Delhi",
    offer: "20% OFF with Axis Bank",
  },
  {
    id: "res-1165741",
    name: "Biryani & Beyond",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹420 for two",
    distance: "3.0 km",
    address: "Mayur Vihar, Delhi",
    offer: "Flat ₹125 OFF",
  },
  {
    id: "res-1165742",
    name: "Desi Handi",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹320 for two",
    distance: "1.5 km",
    address: "Preet Vihar, Delhi",
    offer: "WALK-IN 15% OFF",
  },
  {
    id: "res-1165743",
    name: "The Spice Affair",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹700 for two",
    distance: "6.0 km",
    address: "Vasant Kunj, Delhi",
    offer: "10% OFF on Weekdays",
  },
  {
    id: "res-1165744",
    name: "Lucknowi Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹500 for two",
    distance: "2.4 km",
    address: "Shaheen Bagh, Delhi",
    offer: "Flat ₹150 OFF",
  },
  {
    id: "res-1165745",
    name: "Khaati Peeti Rasoi",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹260 for two",
    distance: "0.7 km",
    address: "Uttam Nagar, Delhi",
    offer: "20% OFF on Combos",
  },
  {
    id: "res-1165746",
    name: "Flavours of India",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹580 for two",
    distance: "4.8 km",
    address: "Green Park, Delhi",
    offer: "₹100 Cashback",
  },
  {
    id: "res-1165747",
    name: "Street Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹220 for two",
    distance: "1.0 km",
    address: "Ashok Vihar, Delhi",
    offer: "Flat 30% OFF",
  },
  {
    id: "res-1165748",
    name: "Dum Pukht Express",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹750 for two",
    distance: "6.5 km",
    address: "Aerocity, Delhi",
    offer: "10% OFF with Amex",
  },
  {
    id: "res-1165749",
    name: "Curry & Claypot",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹360 for two",
    distance: "2.2 km",
    address: "Rohini, Delhi",
    offer: "₹80 OFF above ₹299",
  },
  {
    id: "res-1265740",
    name: "Mehfil-e-Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹520 for two",
    distance: "3.9 km",
    address: "Okhla, Delhi",
    offer: "20% OFF up to ₹150",
  },
  {
    id: "res-45101",
    name: "Zahra Biryani House",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹300 for two",
    distance: "1.3 km",
    address: "Jama Masjid, Old Delhi",
    offer: "WALK-IN 20% OFF",
  },
  {
    id: "res-45102",
    name: "Spice Route Kitchen",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹450 for two",
    distance: "2.1 km",
    address: "Karol Bagh, Delhi",
    offer: "10% OFF with HDFC Bank",
  },
  {
    id: "res-45103",
    name: "Royal Mughlai Darbar",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹500 for two",
    distance: "3.4 km",
    address: "Chandni Chowk, Delhi",
    offer: "Flat ₹100 OFF",
  },
  {
    id: "res-45104",
    name: "Urban Tandoor",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹600 for two",
    distance: "1.8 km",
    address: "Rajouri Garden, Delhi",
    offer: "20% OFF up to ₹120",
  },
  {
    id: "res-45105",
    name: "Delhi Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹350 for two",
    distance: "0.9 km",
    address: "Lajpat Nagar, Delhi",
    offer: "15% OFF with ICICI Cards",
  },
  {
    id: "res-45106",
    name: "The Biryani Club",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹400 for two",
    distance: "2.7 km",
    address: "Saket, Delhi",
    offer: "BUY 1 GET 1",
  },
  {
    id: "res-45107",
    name: "Masala Junction",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹280 for two",
    distance: "1.1 km",
    address: "Dwarka, Delhi",
    offer: "Flat 25% OFF",
  },
  {
    id: "res-45108",
    name: "Nawab’s Kitchen",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹550 for two",
    distance: "4.2 km",
    address: "Civil Lines, Delhi",
    offer: "10% OFF with SBI Cards",
  },
  {
    id: "res-45109",
    name: "Tandoori Tales",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹480 for two",
    distance: "2.9 km",
    address: "Pitampura, Delhi",
    offer: "₹75 OFF above ₹399",
  },
  {
    id: "res-45110",
    name: "House of Kebabs",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹650 for two",
    distance: "5.1 km",
    address: "Connaught Place, Delhi",
    offer: "20% OFF with Axis Bank",
  },
  {
    id: "res-45111",
    name: "Biryani & Beyond",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹420 for two",
    distance: "3.0 km",
    address: "Mayur Vihar, Delhi",
    offer: "Flat ₹125 OFF",
  },
  {
    id: "res-45112",
    name: "Desi Handi",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹320 for two",
    distance: "1.5 km",
    address: "Preet Vihar, Delhi",
    offer: "WALK-IN 15% OFF",
  },
  {
    id: "res-45113",
    name: "The Spice Affair",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹700 for two",
    distance: "6.0 km",
    address: "Vasant Kunj, Delhi",
    offer: "10% OFF on Weekdays",
  },
  {
    id: "res-45114",
    name: "Lucknowi Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹500 for two",
    distance: "2.4 km",
    address: "Shaheen Bagh, Delhi",
    offer: "Flat ₹150 OFF",
  },
  {
    id: "res-45115",
    name: "Khaati Peeti Rasoi",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹260 for two",
    distance: "0.7 km",
    address: "Uttam Nagar, Delhi",
    offer: "20% OFF on Combos",
  },
  {
    id: "res-45116",
    name: "Flavours of India",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹580 for two",
    distance: "4.8 km",
    address: "Green Park, Delhi",
    offer: "₹100 Cashback",
  },
  {
    id: "res-45117",
    name: "Street Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹220 for two",
    distance: "1.0 km",
    address: "Ashok Vihar, Delhi",
    offer: "Flat 30% OFF",
  },
  {
    id: "res-45118",
    name: "Dum Pukht Express",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹750 for two",
    distance: "6.5 km",
    address: "Aerocity, Delhi",
    offer: "10% OFF with Amex",
  },
  {
    id: "res-45119",
    name: "Curry & Claypot",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹360 for two",
    distance: "2.2 km",
    address: "Rohini, Delhi",
    offer: "₹80 OFF above ₹299",
  },
  {
    id: "res-45120",
    name: "Mehfil-e-Zaika",
    image: RESTAURANT_IMAGE,
    costForTwo: "₹520 for two",
    distance: "3.9 km",
    address: "Okhla, Delhi",
    offer: "20% OFF up to ₹150",
  },
];

export interface Restaurant {
  id: string;
  name: string;
  image: string;
  costForTwo: string;
  distance: string;
  address: string;
  offer?: string;
}

const RESTAURANT_NAMES = [
  "Spice Junction",
  "Urban Tandoor",
  "Biryani Blues",
  "Curry Craft",
  "Masala Street",
  "Royal Handi",
  "Desi Zaika",
  "The Kebab Club",
  "Flavour Factory",
  "Tandoori Tales",
  "Punjab Grill",
  "Khaati Peeti Rasoi",
  "Dilli Darbar",
  "The Mughal Table",
  "Handi Express",
  "Swaad Bhavan",
  "Zaika-e-Dilli",
  "Nizam’s Kitchen",
  "The Spice Route",
  "Charcoal Eats",
];

const DELHI_LOCATIONS = [
  "Connaught Place",
  "Karol Bagh",
  "Rajouri Garden",
  "Dwarka Sector 10",
  "Saket",
  "Lajpat Nagar",
  "Pitampura",
  "Rohini Sector 7",
  "Vasant Kunj",
  "Janakpuri",
  "Mayur Vihar",
  "Preet Vihar",
  "Kalkaji",
  "Malviya Nagar",
  "Civil Lines",
  "Punjabi Bagh",
  "Ashok Vihar",
  "Model Town",
  "Green Park",
  "Greater Kailash",
];

const OFFERS = [
  "20% OFF up to ₹120",
  "Flat ₹100 OFF",
  "BUY 1 GET 1",
  "10% OFF with Bank",
  "Free Delivery above ₹300 order",
  undefined,
  undefined,
];

export const restaurantsListDynamicallyGenerated: Restaurant[] = Array.from(
  { length: 200 },
  (_, i) => ({
    id: `res-${1000 + i}`,
    name: `${RESTAURANT_NAMES[i % RESTAURANT_NAMES.length]} ${
      Math.floor(i / RESTAURANT_NAMES.length) + 1
    }`,
    image: RESTAURANT_IMAGES[i % RESTAURANT_IMAGES.length],
    costForTwo: `₹${250 + (i % 6) * 100} for two`,
    distance: `${(0.8 + (i % 6) * 0.5).toFixed(1)} km`,
    address: DELHI_LOCATIONS[i % DELHI_LOCATIONS.length],
    offer: OFFERS[i % OFFERS.length],
  }),
);

export const awaitedRestaurantsData = async () => {
  await new Promise((res, rej) => {
    setTimeout(() => {
      res("hahahaha");
    }, 1500);
  });
  return restaurantsListDynamicallyGenerated;
};

export type MenuItem = {
  id: string;
  name: string;
  price: number;
  isVeg: boolean;
};

export type RestaurantMenu = {
  starters: MenuItem[];
  drinks: MenuItem[];
  mainCourse: MenuItem[];
  sweets: MenuItem[];
};

// simple deterministic hash
const hashString = (str: string) =>
  str.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);

// seeded random
const seededRandom = (seed: number) => {
  let value = seed % 2147483647;
  return () => {
    value = (value * 48271) % 2147483647;
    return value / 2147483647;
  };
};

export const randomMenuGenerator = (restaurantName: string): RestaurantMenu => {
  const seed = hashString(restaurantName);
  const random = seededRandom(seed);

  const startersPool = [
    { name: "Paneer Tikka", isVeg: true },
    { name: "Veg Spring Roll", isVeg: true },
    { name: "Chicken Tikka", isVeg: false },
    { name: "Chicken Lollipop", isVeg: false },
    { name: "Hara Bhara Kabab", isVeg: true },
    { name: "Malai Chaap", isVeg: true },
    { name: "Samosa", isVeg: true },
    { name: "French Fries", isVeg: true },
    { name: "Fish Fingers", isVeg: false },
  ];

  const drinksPool = [
    { name: "Cold Coffee", isVeg: true },
    { name: "Fresh Lime Soda", isVeg: true },
    { name: "Masala Chaas", isVeg: true },
    { name: "Coke", isVeg: true },
    { name: "Mango Shake", isVeg: true },
    { name: "Pinacolada (contains alcohol)", isVeg: true },
    { name: "Gin Mocktail (contains alcohol)", isVeg: true },
    { name: "Sex on the Beach (contains alcohol)", isVeg: true },
    { name: "Mango Shake", isVeg: true },
  ];

  const mainCoursePool = [
    { name: "Paneer Butter Masala", isVeg: true },
    { name: "Dal Makhani", isVeg: true },
    { name: "Butter Chicken", isVeg: false },
    { name: "Chicken Biryani", isVeg: false },
    { name: "Veg Biryani", isVeg: true },
    { name: "Kadai Chicken", isVeg: false },
    { name: "Mix Veg", isVeg: true },
    { name: "Matar Mushroom", isVeg: true },
    { name: "Palak Paneer", isVeg: true },
    { name: "Lasagna", isVeg: true },
  ];

  const sweetsPool = [
    { name: "Gulab Jamun", isVeg: true },
    { name: "Rasgulla", isVeg: true },
    { name: "Jalebi", isVeg: true },
    { name: "Rabri", isVeg: true },
    { name: "Ice Cream", isVeg: true },
    { name: "Brownie with Ice Cream", isVeg: true },
    { name: "Kheer", isVeg: true },
  ];

  const generateItems = (
    pool: { name: string; isVeg: boolean }[],
    min: number,
    max: number,
    priceRange: [number, number],
  ): MenuItem[] => {
    const count = Math.floor(random() * (max - min + 1)) + min;

    return Array.from({ length: count }, (_, i) => {
      const item = pool[Math.floor(random() * pool.length)];
      const price =
        Math.floor(random() * (priceRange[1] - priceRange[0])) + priceRange[0];

      return {
        id: `${restaurantName}-${item.name}-${i}`.replace(/\s+/g, "-"),
        name: item.name,
        price,
        isVeg: item.isVeg,
      };
    });
  };

  return {
    starters: generateItems(startersPool, 3, 6, [150, 300]),
    drinks: generateItems(drinksPool, 2, 8, [80, 180]),
    mainCourse: generateItems(mainCoursePool, 5, 20, [220, 450]),
    sweets: generateItems(sweetsPool, 2, 8, [100, 220]),
  };
};

export const cuisinesList: string[] = [
  "North Indian",
  "Punjabi",
  "South Indian",
  "Rajasthani",
  "Gujarati",
  "Bengali",
  "Hyderabadi",
  "Indo-Chinese",
  "Mughlai",
  "Thai",
  "Biryani",
  "Maharashtrian",
  "Street Food",
  "Fast Food",
  "Chinese",
  "Asian",
  "Japanese",
  "Korean",
  "Italian",
  "Mexican",
  "American",
  "Mediterranean",
  "Lebanese",
  "Turkish",
  "Arabian",
  "Continental",
  "European",
  "Cafe",
  "Bakery",
  "Desserts",
  "Ice Cream",
  "Pizzas",
  "Burgers",
  "Sandwiches",
  "Rolls",
  "Momos",
  "Seafood",
  "Healthy Food",
  "Vegan",
  "Beverages",
];
