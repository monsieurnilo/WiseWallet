import * as React from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm_password, setConfirmPassword] = React.useState("");

  const handleSignUp = () => {
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm password:", confirm_password);
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        placeholder="Confirm password"
        secureTextEntry
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirm_password}
      />

      <Button mode="contained" onPress={() => handleSignUp}>
        Press me
      </Button>
    </View>
  );
};

export default SignUp;
