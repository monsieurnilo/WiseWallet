import React from "react";
import { View, StyleSheet  } from "react-native";
import { useNavigate } from "react-router-native";
import { Text } from "react-native-paper";
import Signup from "../components/user/Signup";

const SigninScreen = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text variant="headlineLarge">Bienvenue !</Text>
          <Text variant="headlineSmall" style={[styles.gris]}>Inscrivez-vous pour continuer</Text>
        </View>

        <Signup />

        <Text variant="labelLarge" style={[styles.hyperlien]} onPress={() => navigate("/signin")}>
          Se connecter
        </Text>
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
