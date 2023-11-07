import * as React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import GraphScreen from "./screens/GraphScreen";

class App extends React.Component {

  render() {
    return (
      <NativeRouter>
        <View>
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/graph" Component={GraphScreen} />
          </Routes>
        </View>
      </NativeRouter>
    );
  }

}

export default App;
