import React from "react";
import { StyleSheet, Text, View } from "react-native";

const NotificationsScreen = () => {
  return (
    <View style={{ backgroundColor: "yellow", height: 1500 }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 300,
          fontSize: 30,
          color: "white",
        }}
      >
        Notifications
      </Text>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
