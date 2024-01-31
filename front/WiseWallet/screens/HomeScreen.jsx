import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import Header from "../components/Header";
import Footer from "../components/Footer";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text variant="headlineLarge">Bonjour !</Text>
          <Text variant="headlineSmall">
            Cliquez sur un bouton menu pour commencer
          </Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: "center",
    padding: 16,
  },
});

export default HomeScreen;
