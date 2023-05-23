import React, { useContext, useState } from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { FavoritesBar } from "../../../components/favorites/favorites-bar.component";
import { RestaurantCard } from "../components/restaurant-card.component";
import { RestaurantContext } from "../../../services/restaurants/restaurants.context";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
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
  const { favorites } = useContext(FavoritesContext);
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoaderContainer>
          <Loader size={50} animating={true} color={MD2Colors.blue300} />
        </LoaderContainer>
      )}
      <Search 
        isFavoritesToggled={isToggled}
        onFavoritesToggled={() => setIsToggled(!isToggled)}
      />
      {isToggled && 
        <FavoritesBar 
          favorites={favorites} 
          onNavigate={navigation.navigate}
        />
      }
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
