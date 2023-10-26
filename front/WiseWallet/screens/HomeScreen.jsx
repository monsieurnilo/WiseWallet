import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Home Screen</Text>
        <Link to="/about">
          <Text>about</Text>
        </Link>
      </View>
    );
  }
}

export default HomeScreen;
