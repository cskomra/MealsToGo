import React from "react";
import styled from "styled-components/native";
import { StatusBar, View, Platform, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/restaurant-card.component";

const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${statusBarHeight}px;
`;

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

const ListContainer = styled(View)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <ListContainer>
        <RestaurantCard />
      </ListContainer>
    </SafeArea>
  );
};
