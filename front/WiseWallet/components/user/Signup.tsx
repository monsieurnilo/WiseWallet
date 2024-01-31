import * as React from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import registerService from "./registerService";
import { useNavigate } from 'react-router-native';

const SignUp = () => {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm_password, setConfirmPassword] = React.useState("");
  const navigation = useNavigate();

  const handleSignUp = async () => {
    try {
      await registerService(email, password, lastName, firstName);;
      // Naviguer vers la page d'accueil après un login réussi
      navigation('/signin');
    } catch (error) {
      // Gérer les erreurs de connexion
      console.error("Error during login:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Entrez votre prénom"
        label="Prénom"
        onChangeText={(text) => setFirstName(text)}
        value={firstName}
        style={[styles.entry]}
      />
      <TextInput
        placeholder="Entrez votre nom"
        label="Entrez votre nom"
        onChangeText={(text) => setLastName(text)}
        value={lastName}
        style={[styles.entry]}
      />
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
      <TextInput
        label="Confirmation du mot de passe"
        placeholder="Confirmez votre mot de passe"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirm_password}
        style={[styles.entry]}
      />
      <Button
        mode="contained"
        onPress={() => handleSignUp()}
        style={[styles.button]}
      >
        S'inscrire
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

export default SignUp;
