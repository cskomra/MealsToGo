import React from "react";
import { Text } from "react-native";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
                headerShown: false,
            }}
        >
            <RestaurantStack.Screen 
                name="Food"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen 
                name="RestaurantDetail"
                component={RestaurantDetailScreen}
            />
        </RestaurantStack.Navigator>
    );
};
