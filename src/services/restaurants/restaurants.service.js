import camelize from "camelize";
import { placesNearbyHost } from "../../utils/env";

export const restaurantsRequest = (location) => {
  // const local = 'http://localhost:5001/mealstogo-3f887/us-central1';
  // const live = 'https://placesnearby-4yz3yjmjhq-uc.a.run.app';
  // const host = process.env.NODE_ENV === 'development' ? local : live;
  return fetch(
    `${placesNearbyHost}/placesNearby?location=${location}`
    ).then((res) => res.json());
};

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours?.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResults);
};
