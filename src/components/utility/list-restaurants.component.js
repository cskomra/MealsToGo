import React from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { RestaurantCard } from "../../features/restaurants/components/restaurant-card.component";
import { FadeInView } from "../animations/fade.animation";

const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;

export const ListRestaurants = ({ restaurantData, navigation }) => {
    return (
        <RestaurantList
        data={restaurantData}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
              <FadeInView>
                <RestaurantCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          )
        }}
            keyExtractor={(item) => item.name}
        />
    )
}