import React from "react";
import { View, Text } from "react-native";
import Header from "../components/Header";
import Footer from "../components/Footer";

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Header></Header>
        <Text>TON PERE IL EST CHAUVE</Text>
        <Footer></Footer>
      </View>
    );
  }
}

export default HomeScreen;
