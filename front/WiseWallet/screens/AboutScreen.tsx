import React from "react";
import { View, Dimensions } from "react-native";
import UserList from "../components/UserList";
import Header from "../components/Header";
import { Text } from 'react-native-paper';

function AboutScreen() {
  return (
    <View style={{ height: height, width: width }}>
      <Header></Header>
      <Text variant="titleLarge" style={{ textAlign: "center" }} >Les joyeux Lurons</Text>
      <UserList data={sampleData} />
    </View>
  );
}

const sampleData = [
  {
    name: "Pavard Raphaël",
    email: "rpavard1@myges.fr",
    picture: require("../assets/raphael.png"),
    jobs: ["Bdd", "loginPage", "bodés1"],
  },
  {
    name: "Linz Pierre",
    email: "plinz@myges.fr",
    picture: require("../assets/pierre.png"),
    jobs: ["Budget", "Graphique"],
  },
  {
    name: "Victorien dit Richard Teddy",
    email: "tvictorienditrichard@myges.fr",
    picture: require("../assets/teddy.png"), // Utilisez require pour les chemins d'images
    jobs: ["Api", "AboutPage"],
  },
];

const { height, width } = Dimensions.get("window");
export default AboutScreen;
