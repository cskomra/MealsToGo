import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;
const RestaurantView = styled(Card)`
  backgroundcolor: "white";
`;
const HeroImage = styled(Card.Cover)`
  padding: 16px;
  backgroundcolor: "white";
`;

export const RestaurantCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = false,
  } = restaurant;
  return (
    <RestaurantView key={name} elevation={5}>
      <HeroImage source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantView>
  );
};
