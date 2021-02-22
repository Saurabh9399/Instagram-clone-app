import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProfilePicture = ({ uri,size=70 }) => {
  return (
    <View style={[styles.container,{width:size+6,height:size+6}]}>
      <Image
        source={{uri}}
        style={[styles.image,{width:size,height:size}]}
      />
    </View>
  );
};

export default ProfilePicture;

const styles = StyleSheet.create({
  container: {
    margin: 8, 
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#ae22e0",
  },
  image: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#ffffff",
  },
});
