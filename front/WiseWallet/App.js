import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ title: "home" }}
        />
        <Stack.Screen
          name="about"
          component={AboutScreen}
          options={{ title: "about" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
