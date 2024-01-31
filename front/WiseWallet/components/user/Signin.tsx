import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import loginService from "./loginService";
import { useNavigate } from 'react-router-native';

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigation = useNavigate();

  const handleSignIn = async () => {
    try {
      await loginService(email, password);
      // Naviguer vers la page d'accueil après un login réussi
      navigation('/');
    } catch (error) {
      // Gérer les erreurs de connexion
      console.error("Error during login:", error);
    }
  };

  return (
    <View>
      <TextInput
        label="Adresse e-mail"
        placeholder="Entrez votre adresse e-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={[styles.entry]}
      />
      <TextInput
        label="Mot de passe"
        placeholder="Entrez votre mot de passe"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={[styles.entry]}
      />

      <Button mode="contained" onPress={() => handleSignIn()} style={[styles.button]}>
        Se connecter
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  entry: {
    marginVertical: "1%",
  },
  button: {
    backgroundColor: "#6750a4",
    marginVertical: "4%",
  },
});

export default SignIn;
