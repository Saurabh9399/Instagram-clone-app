import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProfilePicture from "./ProfilePicture";

const Story = ({ imageUri, name }) => {
  const navigation = useNavigation();
  const onPress = () => {
      navigation.navigate("Story")
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;

const styles = StyleSheet.create({
  name: {
    textAlign: "center",
  },
  container: {},
});
