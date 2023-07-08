import camelize from "camelize";
import { geocodeHost, isMock } from "../../utils/env";

export const locationRequest = (searchTerm) => {
  return fetch(
    `${geocodeHost}/geocode?city=${searchTerm}&mock=${isMock}`
    ).then((res) => res.json());
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
