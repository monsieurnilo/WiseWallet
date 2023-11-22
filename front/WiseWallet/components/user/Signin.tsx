import * as React from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSignIn = () => {
    console.log("Email:", email);
    console.log("Password:", password);
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

      <Button mode="contained" onPress={() => handleSignIn}>
        Press me
      </Button>
    </View>
  );
};

export default SignIn;
