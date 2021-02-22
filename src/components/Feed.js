import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Post from "./Post/Post";
import Stories from "./Stories";

const data = [
  {
    id: "1",
    user: {
      imageUri:
        "https://indiapur.com/wp-content/uploads/2019/06/beautifull-girl-whatsapp-dp.jpg",
      name: "Shruti",
    },
    imageUri:
      "https://imagevars.gulfnews.com/2020/03/11/Reader-picture_170c9c539d6_original-ratio.jpg",
    caption: "Beautiful place to visit Tajmahal",
    likesCount: 1351,
    postedAt: "1 day ago",
  },
  {
    id: "2",
    user: {
      imageUri:
        "https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg",
      name: "Sanchit",
    },
    imageUri:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
    caption: "Where i got this i don't know but it's beautiful",
    likesCount: 8351,
    postedAt: "5 day ago",
  },
  {
    id: "3",
    user: {
      imageUri:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDfardLuZazw4-WRxUInKjnPzzTEXrLDhUSQ&usqp=CAU",
      name: "Navdeep",
    },
    imageUri:
      "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg",
    caption: "Wow what a picture",
    likesCount: 451,
    postedAt: "2 day ago",
  },
];

const Feed = () => {
  return (
    // <View style={styles.container}>
    <FlatList
      keyExtractor={({ id }) => id}
      data={data}
      renderItem={({ item }) => <Post post={item} />}
      ListHeaderComponent={Stories}
    />
    // </View>
  );
};

export default Feed;

const styles = StyleSheet.create({
  // container:{
  //     margin:5,
  // }
});
