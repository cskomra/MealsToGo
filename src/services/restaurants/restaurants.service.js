import camelize from "camelize";

export const restaurantsRequest = (location) => {
  return fetch(
    `http://localhost:5001/mealstogo-3f887/us-central1/placesNearby?location=${location}`
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
