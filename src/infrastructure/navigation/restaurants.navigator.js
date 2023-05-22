import React from "react";
import { Text } from "react-native";

import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();
const Detail = () => <Text>Restaurant Detail</Text>;

export const RestaurantsNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            headerMode="none"
            screenOptions={{
                ...TransitionPresets.ModalPresentationIOS,
            }}
        >
            <RestaurantStack.Screen 
                name="Restaurants"
                component={RestaurantsScreen}
            />
            <RestaurantStack.Screen 
                name="RestaurantDetail"
                component={Detail}
            />
        </RestaurantStack.Navigator>
    );
};
