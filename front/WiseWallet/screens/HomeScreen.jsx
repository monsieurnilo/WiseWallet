import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function HomeScreen() {
  const navigation = useNavigation();

  const goToAboutScreen = () => {
    navigation.navigate("about");
  };

  return (
    <View>
      <Text style={{ fontSize: 20 }}>Home Screen</Text>
      <Button title="Go to About Screen" onPress={goToAboutScreen} />
    </View>
  );
}

export default HomeScreen;
