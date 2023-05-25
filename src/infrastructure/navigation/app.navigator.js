import React, { useContext } from 'react';
import { Text, Button } from 'react-native';
import { SafeArea } from '../../components/utility/safe-area.component';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RestaurantsNavigator } from './restaurants.navigator';
import { MapScreen } from '../../features/map/screens/map.screen';
import { AuthenticationContext } from '../../services/authentication/authentication.context';

const Tab = createBottomTabNavigator();

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext);
  return (
  <SafeArea>
    <Text>Settings!</Text>
    <Button title="Logout" onPress={() => onLogout()} />
  </SafeArea>
)};

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Maps: "md-map",
  Settings: "md-settings",
}

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "grey",
    headerShown: false,
  };
};

export const Nav = () => {
    return (
      <Tab.Navigator screenOptions={createScreenOptions} >
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    )
}
