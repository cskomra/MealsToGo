import React from 'react';
import { Text } from 'react-native';
import { SafeArea } from '../../components/utility/safe-area.component';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RestaurantsNavigator } from './restaurants.navigator';

const Tab = createBottomTabNavigator();

const Settings = () => <SafeArea><Text>Settings!</Text></SafeArea>;
const Maps = () => <SafeArea><Text>Maps!</Text></SafeArea>;

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
  };
};

export const Nav = () => {
    return (
        <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions} >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Maps" component={Maps} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
    )
}
