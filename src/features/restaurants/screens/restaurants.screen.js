import React, { useContext } from "react";
import styled from "styled-components/native";
import { FlatList, Pressable, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { RestaurantCard } from "../components/restaurant-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";

const Loader = styled(ActivityIndicator)`
  margin-left: -25px;
`;
const LoaderContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading && (
        <LoaderContainer>
          <Loader size={50} animating={true} color={MD2Colors.blue300} />
        </LoaderContainer>
      )}
      <Search />
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return(
            <TouchableOpacity onPress={() => navigation.navigate("RestaurantDetail", { restaurant: item })}>
              <RestaurantCard restaurant={item} />
            </TouchableOpacity>
          )
      }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
