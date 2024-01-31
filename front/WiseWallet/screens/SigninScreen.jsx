import React from "react";
import { View, StyleSheet } from "react-native";
import { useNavigate } from "react-router-native";
import { Text } from "react-native-paper";
import Signin from "../components/user/Signin";

const SigninScreen = () => {
  const navigate = useNavigate();

    return (
      <View style={styles.container}>
        <View>
          <View>
            <Text variant="headlineLarge">Bonjour !</Text>
            <Text variant="headlineSmall" style={[styles.gris]}>Connecter vous pour continuer</Text>
          </View>

          <Signin />

            <Text variant="labelLarge" style={[styles.hyperlien]} onPress={() => navigate("/signup")}>S'inscrire</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    width: "100%"
  },
  hyperlien: {
    color: "blue",
    textDecorationLine: "underline",
    textAlign : "center",
  },
  gris: {
    color: "grey",
  },
});

export default SigninScreen;
