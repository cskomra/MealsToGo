const local = 'http://localhost:5001/mealstogo-3f887/us-central1';
const geocodeLive = 'https://geocode-4yz3yjmjhq-uc.a.run.app';
const placesNearbyLive = 'https://placesnearby-4yz3yjmjhq-uc.a.run.app';

export const isDevelopment = process.env.NODE_ENV === 'development';

// To test on Android, comment out the following:
export const geocodeHost = isDevelopment ? local : geocodeLive;
export const placesNearbyHost = isDevelopment ? local : placesNearbyLive;

// To test on Android, uncomment the following:
// export const geocodeHost = geocodeLive;
// export const placesNearbyHost = placesNearbyLive;