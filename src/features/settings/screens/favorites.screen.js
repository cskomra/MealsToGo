import React, { useContext } from "react";
import { FavoritesContext } from "../../../services/favorites/favorites.context";
import { ListRestaurants } from "../../../components/utility/list-restaurants.component";

export const FavoritesScreen = ({ navigation }) => {
    const { favorites } = useContext(FavoritesContext);
    
    return (
        <ListRestaurants restaurantData={favorites} navigation={navigation} />
    )
};
