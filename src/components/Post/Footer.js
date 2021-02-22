import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import ADIcon from "react-native-vector-icons/AntDesign";
import HeartFilledIcon from "react-native-vector-icons/AntDesign";
import EvilIcon from "react-native-vector-icons/EvilIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import FeatherIcon from "react-native-vector-icons/Feather";

const Footer = ({ likesCount: likesCountProp, caption, postedAt }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);
  const onLikePress = () => {
      setIsLiked(!isLiked);
      const amount = isLiked ? -1 : 1;
      setLikesCount(likesCount+amount);
  };

  useEffect(() => {
    setLikesCount(likesCountProp);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <View style={styles.lefticons}>
          <TouchableOpacity onPress={onLikePress}>
            {isLiked ? (
              <HeartFilledIcon name="heart" size={26} color={"#ff038d"} />
            ) : (
              <ADIcon name="hearto" size={26} color={"#545454"} />
            )}
          </TouchableOpacity>
          <EvilIcon name="comment" size={36} color={"#545454"} />
          <IoniconsIcon
            name="ios-paper-plane-outline"
            size={30}
            color={"#545454"}
          />
        </View>
        <FeatherIcon name="bookmark" size={30} />
      </View>
      <Text style={styles.likesCount}>{likesCount} Likes</Text>
      <Text style={styles.caption}>{caption}</Text>
      <Text style={styles.postedAt}>{postedAt}</Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  likesCount: {
    fontWeight: "bold",
    margin: 3,
  },
  caption: {
    margin: 3,
  },
  postedAt: {
    color: "#8c8c8c",
    margin: 3,
  },
  lefticons: {
    flexDirection: "row",
    width: 120,
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 7,
  },
});
