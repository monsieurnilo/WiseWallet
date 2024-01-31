import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigate, useLocation } from "react-router-native";
import { View } from "react-native";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomePage = location.pathname === "/"; // Change this to the path of the specific page

  return (
    <View>
      <Appbar.Header>
        {!isHomePage && <Appbar.BackAction onPress={() => navigate(-1)} />}
        <Appbar.Content title="WiseWallet" />
        <Appbar.Action icon="cash" onPress={() => navigate("/budget")} />
        <Appbar.Action icon="finance" onPress={() => navigate("/graph")} />
        <Appbar.Action icon="logout" onPress={() => navigate("/signin")} />
      </Appbar.Header>
    </View>
  );
}

export default Header;
