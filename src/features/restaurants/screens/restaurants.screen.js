import React, { useContext } from "react";
import styled from "styled-components/native";
import { StatusBar, FlatList, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/restaurant-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${statusBarHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const Loader = styled(ActivityIndicator)`
  flex: 1;
  align-content: center;
  justify-content: center;
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantContext);
  return (
    <SafeArea>
      {isLoading ? (
        <Loader animating={isLoading} color={MD2Colors.blue300} />
      ) : (
        <>
          <SearchContainer>
            <Searchbar />
          </SearchContainer>
          <RestaurantList
            data={restaurants}
            renderItem={({ item }) => {
              console.log(item);
              return <RestaurantCard restaurant={item} />;
            }}
            keyExtractor={(item) => item.name}
          />
        </>
      )}
    </SafeArea>
  );
};
