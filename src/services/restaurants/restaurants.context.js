import React, { useState, createContext, useEffect, useMemo } from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { Children } from "react/cjs/react.production.min";

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  return (
    <RestaurantContext.Provider
      value={{
        restaurants: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};
