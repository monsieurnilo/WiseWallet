import React from "react";
import { View, Text } from "react-native";
import { Link } from "react-router-native";

class BudgetScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>Budget Screen</Text>
        <Link to="/graph">
          <Text>Mon graph</Text>
        </Link>
      </View>
    );
  }
}

export default BudgetScreen;
