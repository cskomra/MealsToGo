import camelize from "camelize";
import { placesNearbyHost, isMock } from "../../utils/env";

export const restaurantsRequest = (location) => {
  return fetch(
    `${placesNearbyHost}/placesNearby?location=${location}&mock=${isMock}`
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
