import React from "react";
import { Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

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
    <Card key={name} elevation={5} style={styles.card}>
      <Card.Cover source={{ uri: photos[0] }} style={styles.cover} />
      <Card.Title title={name} />
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
