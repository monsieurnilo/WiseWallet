import React from "react";
import { View, Text } from "react-native";
import Graph from "../components/graph/Graph";

class AboutScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>About Screen</Text>
        <Graph userGraph={false} />
      </View>
    );
  }
}

export default AboutScreen;
