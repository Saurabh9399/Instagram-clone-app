import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CreatePostScreen = () => {
  return (
    <View style={{ backgroundColor: "red", height: 1500 }}>
      <Text
        style={{
          textAlign: "center",
          marginTop: 300,
          fontSize: 30,
          color: "white",
        }}
      >
       Create Post
      </Text>
    </View>
  );
};

export default CreatePostScreen;

const styles = StyleSheet.create({});
