import React from "react";
import { View, Dimensions, Text } from "react-native";
import Signin from "../components/user/Signin";
import Header from "../components/Header";
import Footer from "../components/Footer";

class SigninScreen extends React.Component {
  render() {
    return (
      <View>
        <Header></Header>
        <View style={{ height: height, width: width }}>
          <Text style={{ fontSize: 20 }}>Signin Screen</Text>
          <Signin />
        </View>
        <Footer></Footer>
      </View>
    );
  }
}

const { height, width } = Dimensions.get("window");

export default SigninScreen;