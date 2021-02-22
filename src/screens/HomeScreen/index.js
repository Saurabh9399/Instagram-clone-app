import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feed from "../../components/Feed";

const HomeScreen = () => {
  return (
    <SafeAreaView>
        <Feed />
   </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
