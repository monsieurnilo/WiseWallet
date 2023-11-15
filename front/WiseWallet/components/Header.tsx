import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "react-router-native";

function Header() {
  return (
    <View
      style={{
        marginTop: 30,
        marginBottom: 15,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor: "blue",
        paddingBottom: 5,
      }}
    >
      <Text>Wise Wallet</Text>
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "blue",
            padding: 5,
            marginRight: 10,
          }}
        >
          <Link to="/">
            <Text>Accueil</Text>
          </Link>
        </View>
        <View
          style={{
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: "blue",
            padding: 5,
            marginRight: 10,
          }}
        >
          <Link to="/budget">
            <Text>Mon budget</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  name: {
    fontSize: 20,
    textDecorationLine: "underline",
  },
});

export default Header;
