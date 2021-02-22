import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <Header imageUri={post.user.imageUri} name={post.user.name} />
      <Body imageUri={post.imageUri} />
      <Footer
        likesCount={post.likesCount}
        postedAt={post.postedAt}
        caption={post.caption}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  // container:{
  //     alignItems:"center"
  // }
});
