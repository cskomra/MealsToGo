import React from "react";
import { View, Text } from "react-native";
import { RestaurantCard } from "../components/restaurant-card.component";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
    const { restaurant } = route.params;
    return (
        <SafeArea>
            <RestaurantCard restaurant={restaurant} />
        </SafeArea>
    )
}