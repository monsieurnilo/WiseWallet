import * as React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import GraphScreen from "./screens/GraphScreen";
import BudgetScreen from "./screens/BudgetScreen";
import SigninScreen from "./screens/SigninScreen";
import SignupScreen from "./screens/SignupScreen";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: "#3498db",
    accent: "#f1c40f",
  },
};

class App extends React.Component {
  render() {
    return (
      <PaperProvider theme={theme}>
        <NativeRouter>
            <Routes>
              <Route path="/" Component={HomeScreen} />
              <Route path="/about" Component={AboutScreen} />
              <Route path="/graph" Component={GraphScreen} />
              <Route path="/budget" Component={BudgetScreen} />
              <Route path="/signin" Component={SigninScreen} />
              <Route path="/signup" Component={SignupScreen} />
            </Routes>
        </NativeRouter>
      </PaperProvider>
    );
  }
}

export default App;