import "react-native-gesture-handler";
import {
  Screen,
  screensEnabled, // @ts-ignore
  shouldUseActivityState,
} from "react-native-screens";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Foundation from "react-native-vector-icons/Foundation";
import FeatherSearch from "react-native-vector-icons/Feather";
import FeatherPost from "react-native-vector-icons/Feather";
import IoniconsNotifications from "react-native-vector-icons/Ionicons";
import IoniconsProfile from "react-native-vector-icons/Ionicons";
import IoniconsPlane from "react-native-vector-icons/Ionicons";

import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import DiscoveryScreen from "./src/screens/DiscoveryScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import NotificationsScreen from "./src/screens/NotificationsScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import { Image, StatusBar } from "react-native";
import logoInsta from "./src/assets/images/logo.png"
import StoryScreen from "./src/screens/StoryScreen";

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Instagram",
          headerRight: () => (
            <IoniconsPlane
              name="ios-paper-plane-outline"
              size={30}
              color="black"
              style={{ marginRight: 15 }}
            />
          ),
          headerTitle: () => (
            <Image source={logoInsta} resizeMode="contain" style={{ width:130, marginLeft:45}}/>
          ),
          headerLeft: () => (
            <IoniconsPlane
              name="camera-outline"
              size={30}
              color="black"
              style={{ marginLeft: 15 }}
            />
          ),
        }}
      />
      <HomeStack.Screen name="Story" component={StoryScreen} options={{headerShown:false}}/>
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Home") {
              return <Foundation name="home" size={size} color={color} />;
            }
            if (route.name === "Discovery") {
              return <FeatherSearch name="search" size={size} color={color} />;
            }
            if (route.name === "Post") {
              return (
                <FeatherPost name="plus-square" size={size} color={color} />
              );
            }
            if (route.name === "Notifications") {
              return (
                <IoniconsNotifications
                  name="notifications"
                  size={size}
                  color={color}
                />
              );
            }
            if (route.name === "Profile") {
              return (
                <IoniconsProfile
                  name="person-outline"
                  size={size}
                  color={color}
                />
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: "#000",
          inactiveTintColor: "gray",
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationsScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
