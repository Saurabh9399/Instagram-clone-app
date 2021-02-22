import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DiscoveryScreen = () => {
  return (
    <View style={{ backgroundColor: "blue", height: 1500 }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 300,
          fontSize: 30,
          color: "white",
        }}
      >
        Discovery Component
      </Text>
    </View>
  );
};

export default DiscoveryScreen;

const styles = StyleSheet.create({});
