import React from "react";
import styled from "styled-components/native";
import { StatusBar, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantCard } from "../components/restaurant-card.component";

const statusBarHeight = StatusBar.currentHeight;

const Container = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${statusBarHeight}px;
`;

const Search = styled(View)`
  padding: 16px;
`;

const List = styled(View)`
  flex: 1;
  background-color: "blue";
  padding: 16px;
`;

export const RestaurantsScreen = () => {
  return (
    <Container>
      <Search>
        <Searchbar />
      </Search>
      <List>
        <RestaurantCard />
      </List>
    </Container>
  );
};
