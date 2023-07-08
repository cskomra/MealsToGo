import { Platform } from "react-native";

const local = 'http://localhost:5001/mealstogo-3f887/us-central1';
const geocodeLive = 'https://geocode-4yz3yjmjhq-uc.a.run.app';
const placesNearbyLive = 'https://placesnearby-4yz3yjmjhq-uc.a.run.app';

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isMock = false;

export const geocodeHost = !isDevelopment || isAndroid ? geocodeLive : local;
export const placesNearbyHost = !isDevelopment || isAndroid ? placesNearbyLive : local;
