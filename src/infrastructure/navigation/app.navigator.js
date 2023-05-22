import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RestaurantsNavigator } from './restaurants.navigator';

const Tab = createBottomTabNavigator();

const Settings = () => <Text>Settings!</Text>;
const Maps = () => <Text>Maps!</Text>;

export const Nav = () => {
    return (
        <NavigationContainer>
              <Tab.Navigator
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === "Restaurants") {
                      iconName = focused
                        ? "ios-restaurant"
                        : "ios-restaurant-outline";
                    } else if (route.name === "Settings") {
                      iconName = focused
                        ? "ios-settings"
                        : "ios-settings-outline";
                    } else if (route.name === "Maps") {
                      iconName = focused ? "ios-map" : "ios-map-outline";
                    }
                    return (
                      <Ionicons name={iconName} size={size} color={color} />
                    );
                  },
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "gray",
                })}
              >
                <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
                <Tab.Screen name="Maps" component={Maps} />
                <Tab.Screen name="Settings" component={Settings} />
              </Tab.Navigator>
            </NavigationContainer>
    )
}
