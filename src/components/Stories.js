import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Story from "./Story";

var data = [
  {
    imageUri:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Lukas",
  },
  {
    imageUri:
      "https://i.pinimg.com/236x/01/22/18/012218f4d43ade31f4e6146e2178f4be.jpg",
    name: "Bhukas",
  },
  {
    imageUri:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Mukesh",
  },
  {
    imageUri:
      "https://i.pinimg.com/originals/49/ca/3a/49ca3ae49eeb357b457adf5a887c297a.jpg",
    name: "Sayali",
  },
  {
    imageUri:
      "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Mulldechand",
  },
  {
    imageUri:
      "https://i.pinimg.com/236x/01/22/18/012218f4d43ade31f4e6146e2178f4be.jpg",
    name: "Kondikora",
  },
  {
    imageUri:
      "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZGFyayUyMHByb2ZpbGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    name: "Payaluma",
  },
  {
    imageUri:
      "https://i.pinimg.com/originals/49/ca/3a/49ca3ae49eeb357b457adf5a887c297a.jpg",
    name: "Saurabh",
  },
];

const Stories = () => {
  return (
    <FlatList
      style={styles.container}
      data={data}
      keyExtractor={({ name }) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});
