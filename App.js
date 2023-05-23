import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { Navigation } from "./src/infrastructure/navigation";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBP8zas5dC4mChIKy1KBaqDwbQowXStKM4",
  authDomain: "mealstogo-83c56.firebaseapp.com",
  projectId: "mealstogo-83c56",
  storageBucket: "mealstogo-83c56.appspot.com",
  messagingSenderId: "110462527600",
  appId: "1:110462527600:web:460a9b86cf01e0252b6cb5"
};

initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
