import React from "react";
import { Appbar } from "react-native-paper";
import { useNavigate } from "react-router-native";
import { Link } from "react-router-native";
import { View } from "react-native";

function Header() {
  const navigate = useNavigate();

  return (
    <View>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigate(-1)} />
        <Appbar.Content title="WiseWallet" />
        <Appbar.Action icon="cash" onPress={() => navigate("/signin")} />
        <Appbar.Action icon="finance" onPress={() => navigate("/signup")} />
      </Appbar.Header>
    </View>
  );
}

export default Header;
